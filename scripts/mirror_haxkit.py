from __future__ import annotations

import hashlib
import html
import re
from pathlib import Path
from typing import Dict, Iterable, List, Set, Tuple
from urllib.parse import quote, unquote

import requests


BASE_URL = "https://sites.google.com/view/hax-kit"
SEED_PAGES = [
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
CORE_NAV = [
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
CORE_FILE_MAP = {k: v for k, v, _ in CORE_NAV}
NAV_CACHE_BUSTER = "20260326"

ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "assets" / "mirror"
SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "Mozilla/5.0 (compatible; HaxLabMirror/2.0)"})

PAGE_LINK_RE = re.compile(r"(?:https://sites\.google\.com)?/view/hax-kit/([^\s\"'<>?#]+(?:/[^\s\"'<>?#]+)*)")
SCRIPT_TAG_RE = re.compile(r"<script\b[^>]*>.*?</script>", re.IGNORECASE | re.DOTALL)
NAV_BLOCK_RE = re.compile(r"<!-- HAX_STATIC_NAV_START -->.*?<!-- HAX_STATIC_NAV_END -->", re.IGNORECASE | re.DOTALL)
NAV_STYLE_RE = re.compile(
    r"/\* HAX_STATIC_NAV_STYLE_START \*/.*?/\* HAX_STATIC_NAV_STYLE_END \*/|<style id=\"hax-static-nav-style\"[^>]*>.*?</style>",
    re.IGNORECASE | re.DOTALL,
)


def normalize_page_key(raw_key: str) -> str:
    key = html.unescape(raw_key)
    key = unquote(key)
    key = key.replace(r"\/", "/")
    prefixes = (
        "https://sites.google.com/view/hax-kit/",
        "/view/hax-kit/",
        "view/hax-kit/",
    )
    for prefix in prefixes:
        if key.startswith(prefix):
            key = key[len(prefix) :]
    key = key.split("?", 1)[0].split("#", 1)[0]
    key = key.strip().strip("/")
    while key and key[-1] in {'\"', "'", "]"}:
        key = key[:-1]
    return key


def page_key_to_url(page_key: str) -> str:
    return f"{BASE_URL}/{quote(page_key, safe='/')}"


def download_page(page_key: str) -> str:
    resp = SESSION.get(page_key_to_url(page_key), timeout=30)
    resp.raise_for_status()
    return resp.text


def discover_pages(seed_pages: Iterable[str]) -> List[str]:
    pages: Set[str] = set()
    queue: List[str] = []

    for raw in seed_pages:
        page = normalize_page_key(raw)
        if not page:
            continue
        pages.add(page)
        queue.append(page)

    while queue:
        page = queue.pop(0)
        page_html = download_page(page)
        for found_raw in PAGE_LINK_RE.findall(page_html):
            found = normalize_page_key(found_raw)
            if not found:
                continue
            if found in pages:
                continue
            pages.add(found)
            queue.append(found)

    return sorted(pages)


def filename_for_page(page_key: str) -> str:
    if page_key in CORE_FILE_MAP:
        return CORE_FILE_MAP[page_key]

    leaf = page_key.split("/")[-1]
    safe_leaf = re.sub(r"[^A-Za-z0-9_-]+", "-", leaf).strip("-").lower()
    digest = hashlib.sha1(page_key.encode("utf-8")).hexdigest()[:10]

    if page_key.startswith("people/"):
        prefix = "person"
    elif safe_leaf:
        prefix = safe_leaf[:40]
    else:
        prefix = "page"

    return f"{prefix}-{digest}.html"


def build_file_map(pages: Iterable[str]) -> Dict[str, str]:
    return {page: filename_for_page(page) for page in pages}


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
    if "icon" in content_type:
        return ".ico"

    path = fallback_url.split("?", 1)[0].split("#", 1)[0]
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


def download_image(url: str, cache: Dict[str, str]) -> Tuple[str, str]:
    if url in cache:
        return url, cache[url]

    resp = SESSION.get(url, timeout=45)
    resp.raise_for_status()
    content_type = resp.headers.get("content-type", "")
    if not content_type.startswith("image/"):
        raise RuntimeError(f"Non-image content for URL: {url} ({content_type})")

    ext = image_ext(content_type, url)
    digest = hashlib.sha1(resp.content).hexdigest()[:20]
    file_name = f"{digest}{ext}"
    target = ASSET_DIR / file_name
    if not target.exists():
        target.write_bytes(resp.content)

    local_path = f"assets/mirror/{file_name}"
    cache[url] = local_path
    return url, local_path


def replace_internal_links(page_html: str, file_map: Dict[str, str]) -> str:
    out = page_html
    for page_key in sorted(file_map.keys(), key=len, reverse=True):
        filename = file_map[page_key]
        encoded_key = quote(page_key, safe="/")
        sources = [
            f"{BASE_URL}/{encoded_key}",
            f"{BASE_URL}/{page_key}",
            f"/view/hax-kit/{encoded_key}",
            f"/view/hax-kit/{page_key}",
            f"view/hax-kit/{encoded_key}",
            f"view/hax-kit/{page_key}",
        ]
        for source in sources:
            out = out.replace(source, filename)

    for root_source in (
        "https://sites.google.com/view/hax-kit",
        "/view/hax-kit",
        "view/hax-kit",
    ):
        out = out.replace(root_source, "index.html")
    return out


def js_escape_url(url: str) -> str:
    return url.replace("/", r"\/").replace("=", r"\x3d")


def sanitize_for_static(html_text: str) -> str:
    return SCRIPT_TAG_RE.sub("", html_text)


def nav_is_active(item_key: str, current_key: str) -> bool:
    if current_key == item_key:
        return True
    if item_key != "home" and current_key.startswith(item_key + "/"):
        return True
    return False


def build_static_nav(current_key: str) -> str:
    links: List[str] = []
    for item_key, href, label in CORE_NAV:
        cls = "active" if nav_is_active(item_key, current_key) else ""
        nav_href = f"{href}?v={NAV_CACHE_BUSTER}"
        links.append(f'<a class="{cls}" href="{nav_href}">{label}</a>')

    return (
        "<!-- HAX_STATIC_NAV_START -->"
        '<nav class="hax-static-nav" aria-label="Primary">'
        '<div class="hax-static-nav__inner">'
        f'<a class="hax-static-nav__brand" href="index.html?v={NAV_CACHE_BUSTER}">HAX Lab</a>'
        f"{''.join(links)}"
        "</div>"
        "</nav>"
        "<!-- HAX_STATIC_NAV_END -->"
    )


def inject_static_nav(html_text: str, page_key: str) -> str:
    nav_style = (
        '<style id="hax-static-nav-style">\n'
        "#atIdViewHeader,.dZA9kd,.LqzjUe{display:none!important;}\n"
        "body{padding-top:90px!important;}\n"
        ".hax-static-nav{position:fixed;top:0;left:0;right:0;z-index:2147483647;padding:12px 14px;"
        "background:linear-gradient(180deg,rgba(6,21,39,.88) 0%,rgba(6,21,39,.48) 100%);backdrop-filter:blur(8px);}\n"
        ".hax-static-nav__inner{max-width:1240px;margin:0 auto;padding:10px 14px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;"
        "border:1px solid rgba(255,255,255,.2);border-radius:14px;"
        "background:linear-gradient(96deg,#0f2f52 0%,#0f3f6b 47%,#175f8f 100%);"
        "box-shadow:0 10px 28px rgba(4,14,26,.35);}\n"
        ".hax-static-nav__brand{color:#fff;text-decoration:none;font:800 15px/1.1 'Open Sans',Arial,sans-serif;"
        "letter-spacing:.2px;margin-right:6px;padding:8px 11px;border-radius:999px;background:rgba(255,255,255,.14);}\n"
        ".hax-static-nav a{color:#e8f2ff;text-decoration:none;font:700 13px/1 'Open Sans',Arial,sans-serif;"
        "padding:9px 11px;border-radius:10px;transition:.18s transform,.18s background,.18s color;}\n"
        ".hax-static-nav a:hover{background:rgba(255,255,255,.2);color:#fff;transform:translateY(-1px);}\n"
        ".hax-static-nav a.active{background:#fff;color:#0d365c;box-shadow:0 2px 10px rgba(255,255,255,.25);}\n"
        "@media (max-width:760px){body{padding-top:112px!important}.hax-static-nav{padding:10px 10px}.hax-static-nav__inner{padding:10px 11px}.hax-static-nav a{font-size:12px;padding:8px 9px}}\n"
        "</style>"
    )

    cleaned = NAV_BLOCK_RE.sub("", html_text)
    cleaned = NAV_STYLE_RE.sub("", cleaned)

    nav_html = build_static_nav(page_key)
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

    if re.search(r"</head>", cleaned, flags=re.IGNORECASE):
        cleaned = re.sub(r"</head>", nav_style + "</head>", cleaned, count=1, flags=re.IGNORECASE)
    else:
        cleaned = nav_style + cleaned

    return cleaned


def mirror_site() -> None:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)

    pages = discover_pages(SEED_PAGES)
    file_map = build_file_map(pages)
    image_cache: Dict[str, str] = {}

    generated_html_names: Set[str] = set()

    for page_key in pages:
        raw_html = download_page(page_key)
        page_html = replace_internal_links(raw_html, file_map)

        for token, decoded in extract_image_candidates(page_html):
            try:
                original, local = download_image(decoded, image_cache)
            except Exception:
                continue
            page_html = page_html.replace(token, local)
            page_html = page_html.replace(original, local)
            page_html = page_html.replace(js_escape_url(original), js_escape_url(local))

        page_html = sanitize_for_static(page_html)
        page_html = inject_static_nav(page_html, page_key)

        file_name = file_map[page_key]
        out_file = ROOT / file_name
        out_file.write_text(page_html, encoding="utf-8")
        generated_html_names.add(file_name)

        if page_key == "home":
            (ROOT / "home.html").write_text(page_html, encoding="utf-8")
            generated_html_names.add("home.html")

    # Remove obsolete generated personal/detail pages.
    for html_file in ROOT.glob("*.html"):
        name = html_file.name
        if name in generated_html_names:
            continue
        if name == "contact.html":
            html_file.unlink()
            continue
        if re.match(r"^(?:person|page)-[a-f0-9]{10}\.html$", name):
            html_file.unlink()

    # Keep only assets referenced by generated HTML pages.
    used_assets: Set[str] = set()
    local_asset_pattern = re.compile(r"assets/mirror/[A-Za-z0-9._-]+")
    for name in generated_html_names:
        html_file = ROOT / name
        if not html_file.exists():
            continue
        text = html_file.read_text(encoding="utf-8", errors="ignore")
        used_assets.update(local_asset_pattern.findall(text))

    for asset in ASSET_DIR.glob("*"):
        rel = f"assets/mirror/{asset.name}"
        if rel not in used_assets and asset.is_file():
            asset.unlink()


def main() -> None:
    mirror_site()


if __name__ == "__main__":
    main()
