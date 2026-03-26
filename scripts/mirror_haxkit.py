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


def extract_image_urls(page_html: str) -> List[str]:
    # Google Sites image/media hosts for this project.
    pattern = re.compile(
        r"https://(?:lh[0-9A-Za-z-]*\.googleusercontent\.com|play-lh\.googleusercontent\.com)[^\"'\s<>()]+"
    )
    return sorted(set(pattern.findall(page_html)))


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
    digest = hashlib.sha1(decoded_url.encode("utf-8")).hexdigest()[:20]
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


def mirror_site() -> None:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    slugs = discover_slugs(SEED_SLUGS)
    image_cache: Dict[str, str] = {}

    for slug in slugs:
        raw_html = download_page(slug)
        page_html = replace_internal_links(raw_html, slugs)

        for image_url_in_html in extract_image_urls(page_html):
            try:
                decoded, local = download_image(image_url_in_html, image_cache)
            except Exception:
                # If any asset fails, keep original URL so page still renders.
                continue
            page_html = page_html.replace(image_url_in_html, local)
            page_html = page_html.replace(decoded, local)
            page_html = page_html.replace(js_escape_url(decoded), js_escape_url(local))

        out_file = ROOT / slug_to_filename(slug)
        out_file.write_text(page_html, encoding="utf-8")
        if slug == "home":
            # Keep home.html for compatibility with mirrored links.
            (ROOT / "home.html").write_text(page_html, encoding="utf-8")

    # Remove pages that are not part of the source site.
    stale_files = [ROOT / "contact.html"]
    for stale in stale_files:
        if stale.exists():
            stale.unlink()


if __name__ == "__main__":
    mirror_site()
