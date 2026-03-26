# HAX Lab Site

정적 반응형 홈페이지(리뉴얼 버전)입니다.  
기존 Google Sites 콘텐츠는 별도 아카이브/스냅샷으로 분리 보관합니다.

## Live Pages

- `index.html`, `home.html`
- `news.html`
- `people.html`
- `projects.html`
- `research.html`
- `publications.html`
- `awards.html`
- `gallery.html`
- `courses.html`

## Legacy Preservation

- 기존 HTML 백업: `archive/legacy-html/`
- 주요 텍스트/이미지 스냅샷: `content/legacy/content_snapshot.json`
- 이미지 자산: `assets/mirror/`

## Scripts

- 미러 갱신: `python scripts/mirror_haxkit.py`
- 보존 스냅샷 생성(최초): `python scripts/preserve_legacy_content.py`
- 보존 데이터 강제 갱신: `python scripts/preserve_legacy_content.py --force`
