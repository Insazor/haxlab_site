from __future__ import annotations

import hashlib
import html
import re
from pathlib import Path
from typing import Dict, Iterable, List, Set, Tuple

import requests


BASE_URL = "https://sites.google.com/view/hax-kit"
SEED_SLUGS = [
    "home",
    "news",
    "people",
    "projects",
    "research",
    "publications",
    "awards",
    "gallery",
    "courses",
]

ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "assets" / "mirror"
SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "Mozilla/5.0 (compatible; HaxLabMirror/1.0)"})
SCRIPT_TAG_RE = re.compile(r"<script\b[^>]*>.*?</script>", re.IGNORECASE | re.DOTALL)
NAV_BLOCK_RE = re.compile(
    r"<!-- HAX_STATIC_NAV_START -->.*?<!-- HAX_STATIC_NAV_END -->",
    re.IGNORECASE | re.DOTALL,
)
NAV_STYLE_RE = re.compile(
    r"/\* HAX_STATIC_NAV_STYLE_START \*/.*?/\* HAX_STATIC_NAV_STYLE_END \*/",
    re.IGNORECASE | re.DOTALL,
)


def slug_to_filename(slug: str) -> str:
    return "index.html" if slug == "home" else f"{slug}.html"


def discover_slugs(seed_slugs: Iterable[str]) -> List[str]:
    slugs: Set[str] = set(seed_slugs)
    queue: List[str] = list(seed_slugs)
    pattern = re.compile(r"/view/hax-kit/([a-zA-Z0-9_-]+)")

    while queue:
        slug = queue.pop(0)
        url = f"{BASE_URL}/{slug}"
        resp = SESSION.get(url, timeout=30)
        resp.raise_for_status()
        page_html = resp.text

        for found in pattern.findall(page_html):
            if found in slugs:
                continue
            slugs.add(found)
            queue.append(found)

    return sorted(slugs)


def download_page(slug: str) -> str:
    url = f"{BASE_URL}/{slug}"
    resp = SESSION.get(url, timeout=30)
    resp.raise_for_status()
    return resp.text


def image_ext(content_type: str, fallback_url: str) -> str:
    content_type = (content_type or "").lower()
    if "jpeg" in content_type or "jpg" in content_type:
        return ".jpg"
    if "png" in content_type:
        return ".png"
    if "webp" in content_type:
        return ".webp"
    if "gif" in content_type:
        return ".gif"
    if "svg" in content_type:
        return ".svg"

    path = fallback_url.split("?", 1)[0]
    path = path.split("#", 1)[0]
    if "." in path.rsplit("/", 1)[-1]:
        ext = "." + path.rsplit(".", 1)[-1].lower()
        if len(ext) <= 6:
            return ext
    return ".img"


def likely_image_url(url: str) -> bool:
    low = url.lower()
    image_exts = (".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".ico", ".bmp", ".avif")
    if low.endswith(image_exts):
        return True
    if "googleusercontent.com/sitesv/" in low:
        return True
    if "play-lh.googleusercontent.com" in low:
        return True
    if "/atari/images/" in low:
        return True
    return False


def decode_candidate_url(token: str) -> str:
    decoded = html.unescape(token)
    decoded = decoded.replace(r"\/", "/")
    decoded = decoded.replace(r"\x3d", "=")
    decoded = decoded.replace(r"\u003d", "=")
    return decoded


def extract_image_candidates(page_html: str) -> List[Tuple[str, str]]:
    # Capture both regular and JS-escaped URLs.
    patterns = [
        r"https?://[^\s\"'<>\\)]+",
        r"https:\\\\/\\\\/[^\s\"'<>\\)]+",
    ]
    seen: Set[Tuple[str, str]] = set()
    for pattern in patterns:
        for token in re.findall(pattern, page_html):
            decoded = decode_candidate_url(token)
            if not decoded.startswith(("http://", "https://")):
                continue
            if not likely_image_url(decoded):
                continue
            seen.add((token, decoded))
    return sorted(seen)


def download_image(url_in_html: str, cache: Dict[str, str]) -> Tuple[str, str]:
    decoded_url = html.unescape(url_in_html)
    if decoded_url in cache:
        return decoded_url, cache[decoded_url]

    resp = SESSION.get(decoded_url, timeout=45)
    resp.raise_for_status()
    content_type = resp.headers.get("content-type", "")
    if not content_type.startswith("image/"):
        raise RuntimeError(f"Non-image content for URL: {decoded_url} ({content_type})")

    ext = image_ext(content_type, decoded_url)
    # Use content hash so asset paths stay stable even if source URLs rotate.
    digest = hashlib.sha1(resp.content).hexdigest()[:20]
    file_name = f"{digest}{ext}"
    target = ASSET_DIR / file_name
    if not target.exists():
        target.write_bytes(resp.content)

    local_path = f"assets/mirror/{file_name}"
    cache[decoded_url] = local_path
    return decoded_url, local_path


def replace_internal_links(page_html: str, slugs: Iterable[str]) -> str:
    out = page_html
    for slug in slugs:
        filename = slug_to_filename(slug)
        for source in (
            f"https://sites.google.com/view/hax-kit/{slug}",
            f"https://sites.google.com/view/hax-kit/{slug}/",
            f"/view/hax-kit/{slug}",
            f"/view/hax-kit/{slug}/",
        ):
            out = out.replace(source, filename)

    # Keep root paths on this static site.
    out = out.replace("https://sites.google.com/view/hax-kit", "index.html")
    out = out.replace("/view/hax-kit", "index.html")
    return out


def js_escape_url(url: str) -> str:
    return url.replace("/", r"\/").replace("=", r"\x3d")


def sanitize_for_static(html_text: str) -> str:
    # Google Sites runtime scripts can trigger reload loops outside original hosting.
    return SCRIPT_TAG_RE.sub("", html_text)


def build_static_nav(current_slug: str) -> str:
    items = [
        ("home", "index.html", "Home"),
        ("news", "news.html", "News"),
        ("people", "people.html", "People"),
        ("projects", "projects.html", "Projects"),
        ("research", "research.html", "Research"),
        ("publications", "publications.html", "Publications"),
        ("awards", "awards.html", "Awards"),
        ("gallery", "gallery.html", "Gallery"),
        ("courses", "courses.html", "Courses"),
    ]
    links: List[str] = []
    for slug, href, label in items:
        cls = "active" if slug == current_slug else ""
        links.append(f'<a class="{cls}" href="{href}">{label}</a>')
    links_html = "".join(links)
    return (
        "<!-- HAX_STATIC_NAV_START -->"
        '<nav class="hax-static-nav" aria-label="Primary">'
        '<div class="hax-static-nav__inner">'
        '<span class="hax-static-nav__brand">HAX Lab</span>'
        f"{links_html}"
        "</div>"
        "</nav>"
        "<!-- HAX_STATIC_NAV_END -->"
    )


def inject_static_nav(html_text: str, slug: str) -> str:
    nav_style = (
        "/* HAX_STATIC_NAV_STYLE_START */\n"
        "<style>\n"
        ".hax-static-nav{position:sticky;top:0;z-index:99999;background:#0f3f70;border-bottom:1px solid #0a2b4f;}\n"
        ".hax-static-nav__inner{max-width:1200px;margin:0 auto;padding:10px 12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;}\n"
        ".hax-static-nav__brand{color:#fff;font:700 14px/1 Arial,sans-serif;margin-right:4px;}\n"
        ".hax-static-nav a{color:#eaf1ff;text-decoration:none;font:600 13px/1 Arial,sans-serif;padding:6px 8px;border-radius:6px;}\n"
        ".hax-static-nav a:hover{background:#1e568f;}\n"
        ".hax-static-nav a.active{background:#fff;color:#0f3f70;}\n"
        "@media (max-width:640px){.hax-static-nav__inner{padding:8px 10px}.hax-static-nav a{font-size:12px;padding:5px 7px}}\n"
        "</style>\n"
        "/* HAX_STATIC_NAV_STYLE_END */"
    )

    cleaned = NAV_BLOCK_RE.sub("", html_text)
    cleaned = NAV_STYLE_RE.sub("", cleaned)

    nav_html = build_static_nav(slug)
    if re.search(r"<body\b[^>]*>", cleaned, flags=re.IGNORECASE):
        cleaned = re.sub(
            r"(<body\b[^>]*>)",
            r"\1" + nav_html,
            cleaned,
            count=1,
            flags=re.IGNORECASE,
        )
    else:
        cleaned = nav_html + cleaned

    if "</head>" in cleaned.lower():
        cleaned = re.sub(r"</head>", nav_style + "</head>", cleaned, count=1, flags=re.IGNORECASE)
    else:
        cleaned = nav_style + cleaned
    return cleaned


def mirror_site() -> None:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    slugs = discover_slugs(SEED_SLUGS)
    image_cache: Dict[str, str] = {}

    for slug in slugs:
        raw_html = download_page(slug)
        page_html = replace_internal_links(raw_html, slugs)

        for image_url_in_html, decoded_url in extract_image_candidates(page_html):
            try:
                decoded, local = download_image(decoded_url, image_cache)
            except Exception:
                # If any asset fails, keep original URL so page still renders.
                continue
            page_html = page_html.replace(image_url_in_html, local)
            page_html = page_html.replace(decoded, local)
            page_html = page_html.replace(js_escape_url(decoded), js_escape_url(local))

        page_html = sanitize_for_static(page_html)
        page_html = inject_static_nav(page_html, slug)

        out_file = ROOT / slug_to_filename(slug)
        out_file.write_text(page_html, encoding="utf-8")
        if slug == "home":
            # Keep home.html for compatibility with mirrored links.
            (ROOT / "home.html").write_text(page_html, encoding="utf-8")

    # Keep only assets referenced by generated HTML pages.
    html_files = [ROOT / slug_to_filename(s) for s in slugs] + [ROOT / "home.html"]
    used_assets: Set[str] = set()
    local_asset_pattern = re.compile(r"assets/mirror/[A-Za-z0-9._-]+")
    for html_file in html_files:
        if not html_file.exists():
            continue
        text = html_file.read_text(encoding="utf-8", errors="ignore")
        used_assets.update(local_asset_pattern.findall(text))

    for asset in ASSET_DIR.glob("*"):
        rel = f"assets/mirror/{asset.name}"
        if rel not in used_assets and asset.is_file():
            asset.unlink()

    # Remove pages that are not part of the source site.
    stale_files = [ROOT / "contact.html"]
    for stale in stale_files:
        if stale.exists():
            stale.unlink()


if __name__ == "__main__":
    mirror_site()
