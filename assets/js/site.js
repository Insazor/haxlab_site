const NAV_ITEMS = [
  ["home", "index.html", "Home"],
  ["news", "news.html", "News"],
  ["people", "people.html", "People"],
  ["projects", "projects.html", "Projects"],
  ["research", "research.html", "Research"],
  ["publications", "publications.html", "Publications"],
  ["awards", "awards.html", "Awards"],
  ["gallery", "gallery.html", "Gallery"],
  ["courses", "courses.html", "Courses"],
];

const PAGE_FILE_MAP = {
  home: "index.html",
  news: "news.html",
  people: "people.html",
  projects: "projects.html",
  research: "research.html",
  publications: "publications.html",
  awards: "awards.html",
  gallery: "gallery.html",
  courses: "courses.html",
};

const PAGE_TOPICS = {
  home: [
    ["Human-centered XR", "VR, AR, MR, Metaverse 기반 상호작용 연구를 중심으로 실험과 시스템을 설계합니다."],
    ["Accessible Interaction", "사회적 약자를 포함한 다양한 사용자를 위한 포용형 인터페이스를 탐구합니다."],
    ["Applied AI + Digital Twin", "현장 문제에 연결되는 XR-Physical AI, 디지털 트윈 기반 응용을 추진합니다."],
  ],
  news: [
    ["Research Updates", "논문 채택, 프로젝트 선정, 학회 발표 소식을 계속 기록합니다."],
    ["Lab Milestones", "연구실 주요 일정과 합류 소식을 시계열로 확인할 수 있습니다."],
    ["External Activities", "국내외 학회, 기관 협업, 데모 세션 이력을 관리합니다."],
  ],
  people: [
    ["Faculty & Students", "구성원별 역할과 연구 이력을 한곳에서 정리합니다."],
    ["Personal Pages", "기존 개인 페이지 자료는 아카이브 링크로 보존합니다."],
    ["Contact Channels", "이메일 기반 연락 수단을 유지하며 점진적으로 갱신합니다."],
  ],
  projects: [
    ["Funded Projects", "국가/기관 과제 중심으로 목표, 기간, 결과를 구조화합니다."],
    ["Industry Collaboration", "실험실 연구를 실제 문제 해결로 연결하는 협업 기록을 유지합니다."],
    ["Outcome Tracking", "시스템, 프로토타입, 논문/특허 산출물을 페이지 단위로 정리합니다."],
  ],
  research: [
    ["Research Directions", "실험 설계, 사용자 연구, 상호작용 모델을 축으로 연구 축을 구성합니다."],
    ["Methods", "정량/정성 평가, 프로토타이핑, 반복 검증 기반의 연구 사이클을 유지합니다."],
    ["Open Questions", "향후 확장 가능한 연구 질문을 독립 섹션으로 관리합니다."],
  ],
  publications: [
    ["Journals", "저널 논문 리스트를 연도/주제 기준으로 정렬해 관리합니다."],
    ["Conferences", "주요 국제/국내 학회 발표 내역을 구분해 기록합니다."],
    ["Patents", "출원 및 이전 내역을 분리해 연구 성과 흐름을 명확히 보여줍니다."],
  ],
  awards: [
    ["Recognition", "수상 및 선정 이력을 핵심 성과 관점으로 정리합니다."],
    ["Timeline", "연도별 업적을 간결한 타임라인 구조로 유지합니다."],
    ["Evidence", "필요 시 원문/증빙 링크를 함께 연결할 수 있도록 설계합니다."],
  ],
  gallery: [
    ["Lab Moments", "연구실 활동, 행사, 발표 장면을 시각적으로 큐레이션합니다."],
    ["Event Highlights", "학회/워크숍/프로젝트 데모 장면을 중심으로 구성합니다."],
    ["Asset Reuse", "기존 이미지 자산을 재사용하며 새 디자인 톤에 맞춰 갱신합니다."],
  ],
  courses: [
    ["Teaching", "연계 교과목과 실습 중심 교육 활동을 구조적으로 정리합니다."],
    ["Student Projects", "강의와 연구 연동 결과물을 보여줄 수 있는 슬롯을 확보합니다."],
    ["Material Index", "자료 링크, 공지, 참고문헌을 확장 가능한 형태로 배치합니다."],
  ],
};

function el(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text) node.textContent = text;
  return node;
}

function normalizePageKey(raw) {
  if (!raw || raw === "index") return "home";
  return raw;
}

function setupMenu(pageKey) {
  const nav = document.getElementById("site-menu");
  const toggle = document.getElementById("menu-toggle");
  if (!nav) return;

  NAV_ITEMS.forEach(([key, href, label]) => {
    const a = el("a", key === pageKey ? "active" : "", label);
    a.href = href;
    nav.appendChild(a);
  });

  if (toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
}

function pickPageData(snapshot, pageKey) {
  const file = PAGE_FILE_MAP[pageKey] || "index.html";
  const pages = snapshot.pages || [];
  return pages.find((p) => p.file === file) || pages.find((p) => p.file === "home.html") || null;
}

function renderTopics(pageKey) {
  const topics = PAGE_TOPICS[pageKey] || [];
  const root = document.getElementById("topic-grid");
  if (!root || topics.length === 0) return;

  topics.forEach(([title, desc]) => {
    const card = el("article", "topic-card");
    card.appendChild(el("h3", "", title));
    card.appendChild(el("p", "", desc));
    root.appendChild(card);
  });
}

function renderSnapshotMeta(snapshot, pageData) {
  const node = document.getElementById("snapshot-meta");
  if (!node || !pageData) return;
  const totalImages = Array.isArray(snapshot.image_files) ? snapshot.image_files.length : 0;
  const updated = snapshot.generated_at ? new Date(snapshot.generated_at).toLocaleString() : "unknown";
  node.textContent = `Legacy snapshot updated: ${updated} | archived images: ${totalImages} | source page: ${pageData.file}`;
}

function renderHighlights(pageData) {
  const root = document.getElementById("legacy-highlights");
  if (!root || !pageData) return;
  const items = [];
  (pageData.headings || []).forEach((h) => items.push(h));
  (pageData.key_text || []).forEach((t) => items.push(t));

  const unique = [...new Set(items)].slice(0, 12);
  if (unique.length === 0) {
    root.appendChild(el("li", "", "Legacy content is being reorganized."));
    return;
  }

  unique.forEach((text) => {
    root.appendChild(el("li", "", text));
  });
}

function renderImages(pageData) {
  const root = document.getElementById("legacy-images");
  if (!root || !pageData) return;
  const images = (pageData.images || []).slice(0, 6);
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Legacy visual asset";
    img.loading = "lazy";
    root.appendChild(img);
  });
}

function renderArchiveLink(pageData) {
  const node = document.getElementById("archive-link");
  if (!node || !pageData) return;
  node.href = `archive/legacy-html/${pageData.file}`;
}

function renderPeople(snapshot) {
  const root = document.getElementById("people-directory");
  if (!root) return;
  const people = (snapshot.people || []).slice(0, 12);

  people.forEach((person) => {
    const card = el("article", "person-card");
    card.appendChild(el("h3", "", person.title || person.file));

    const emailText = person.emails && person.emails.length > 0 ? person.emails.join(", ") : "Email info will be updated";
    card.appendChild(el("p", "", emailText));

    const link = el("a", "button", "Legacy Detail");
    link.href = `archive/legacy-html/${person.file}`;
    card.appendChild(link);

    root.appendChild(card);
  });
}

async function init() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const rawPage = document.body?.dataset?.page || "home";
  const pageKey = normalizePageKey(rawPage);
  setupMenu(pageKey);
  renderTopics(pageKey);

  try {
    const res = await fetch("content/legacy/content_snapshot.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load snapshot: ${res.status}`);
    const snapshot = await res.json();

    const pageData = pickPageData(snapshot, pageKey);
    renderSnapshotMeta(snapshot, pageData);
    renderHighlights(pageData);
    renderImages(pageData);
    renderArchiveLink(pageData);
    if (pageKey === "people") renderPeople(snapshot);
  } catch (err) {
    const node = document.getElementById("snapshot-meta");
    if (node) node.textContent = "Legacy snapshot could not be loaded. Please check repository files.";
  }
}

init();
