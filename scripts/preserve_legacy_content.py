from __future__ import annotations

import json
import re
import shutil
import argparse
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from typing import Dict, List

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE_DIR = ROOT / "archive" / "legacy-html"
SNAPSHOT_DIR = ROOT / "content" / "legacy"
SNAPSHOT_FILE = SNAPSHOT_DIR / "content_snapshot.json"

CORE_FILES = [
    "index.html",
    "home.html",
    "news.html",
    "people.html",
    "projects.html",
    "research.html",
    "publications.html",
    "awards.html",
    "gallery.html",
    "courses.html",
]


def clean_text(value: str) -> str:
    value = re.sub(r"\s+", " ", value).strip()
    value = value.replace("\xa0", " ").strip()
    return value


class ContentCollector(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.in_heading = False
        self.in_text = False
        self.current: List[str] = []
        self.headings: List[str] = []
        self.text_blocks: List[str] = []
        self.images: List[str] = []
        self.title = ""
        self._in_title = False

    def handle_starttag(self, tag: str, attrs) -> None:
        if tag in {"h1", "h2", "h3"}:
            self.in_heading = True
            self.current = []
        if tag in {"p", "li"}:
            self.in_text = True
            self.current = []
        if tag == "title":
            self._in_title = True
            self.current = []
        if tag == "img":
            src = dict(attrs).get("src", "").strip()
            if src:
                self.images.append(src)

    def handle_endtag(self, tag: str) -> None:
        if tag in {"h1", "h2", "h3"} and self.in_heading:
            text = clean_text("".join(self.current))
            if text:
                self.headings.append(text)
            self.in_heading = False
            self.current = []
        if tag in {"p", "li"} and self.in_text:
            text = clean_text("".join(self.current))
            if text:
                self.text_blocks.append(text)
            self.in_text = False
            self.current = []
        if tag == "title" and self._in_title:
            self.title = clean_text("".join(self.current))
            self._in_title = False
            self.current = []

    def handle_data(self, data: str) -> None:
        if self.in_heading or self.in_text or self._in_title:
            self.current.append(data)


def unique_keep_order(values: List[str]) -> List[str]:
    seen = set()
    out = []
    for v in values:
        if v in seen:
            continue
        seen.add(v)
        out.append(v)
    return out


def extract_page_data(path: Path) -> Dict:
    raw = path.read_text(encoding="utf-8", errors="ignore")
    parser = ContentCollector()
    parser.feed(raw)

    headings = unique_keep_order(parser.headings)
    text_blocks = [t for t in unique_keep_order(parser.text_blocks) if len(t) >= 20]
    images = [img for img in unique_keep_order(parser.images) if img.startswith("assets/mirror/")]

    return {
        "file": path.name,
        "title": parser.title or path.stem,
        "headings": headings[:20],
        "key_text": text_blocks[:40],
        "images": images[:50],
    }


def extract_people_details() -> List[Dict]:
    people = []
    for path in sorted(ROOT.glob("person-*.html")):
        raw = path.read_text(encoding="utf-8", errors="ignore")
        title_match = re.search(r"<title>(.*?)</title>", raw, re.IGNORECASE | re.DOTALL)
        title = clean_text(title_match.group(1)) if title_match else path.name
        emails = sorted(set(re.findall(r"mailto:([^\"'<>\\s]+)", raw, re.IGNORECASE)))
        images = sorted(set(re.findall(r"assets/mirror/[A-Za-z0-9._-]+", raw)))
        people.append(
            {
                "file": path.name,
                "title": title,
                "emails": emails,
                "images": images[:6],
            }
        )
    return people


def rewrite_archive_paths(path: Path) -> None:
    if not path.exists() or path.suffix.lower() != ".html":
        return
    text = path.read_text(encoding="utf-8", errors="ignore")
    text = text.replace("assets/mirror/", "../../assets/mirror/")
    path.write_text(text, encoding="utf-8")


def archive_html_files(force: bool) -> None:
    ARCHIVE_DIR.mkdir(parents=True, exist_ok=True)
    names = sorted(set(CORE_FILES + [p.name for p in ROOT.glob("person-*.html")]))
    for name in names:
        src = ROOT / name
        if not src.exists():
            continue
        dst = ARCHIVE_DIR / name
        if dst.exists() and not force:
            rewrite_archive_paths(dst)
            continue
        shutil.copy2(src, dst)
        rewrite_archive_paths(dst)


def create_snapshot(force: bool) -> None:
    SNAPSHOT_DIR.mkdir(parents=True, exist_ok=True)
    if SNAPSHOT_FILE.exists() and not force:
        return

    pages = []
    for name in CORE_FILES:
        path = ROOT / name
        if not path.exists():
            continue
        pages.append(extract_page_data(path))

    image_files = sorted(p.name for p in (ROOT / "assets" / "mirror").glob("*") if p.is_file())
    payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "pages": pages,
        "people": extract_people_details(),
        "image_files": image_files,
    }
    SNAPSHOT_FILE.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Archive legacy HTML and create text/image snapshot.")
    parser.add_argument("--force", action="store_true", help="Overwrite existing archive and snapshot.")
    args = parser.parse_args()

    archive_html_files(force=args.force)
    create_snapshot(force=args.force)
    print(f"Archived HTML to: {ARCHIVE_DIR}")
    print(f"Snapshot JSON: {SNAPSHOT_FILE}")


if __name__ == "__main__":
    main()
