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

const PROFILE_PAGE_BY_FILE = {
  "person-88e2de1e72.html": "profile-youngwon",
  "person-b4009272b8.html": "profile-jemin",
  "person-3ec6ed68a0.html": "profile-jeonghyeon",
  "person-5884df99fd.html": "profile-hyeongjun",
  "person-28997606b6.html": "profile-donghee",
  "person-f4e9f803f6.html": "profile-kikong",
};

const HERO_COLORS = {
  home: "#a0ebff",
  news: "#ffd18a",
  people: "#9fe3ff",
  projects: "#95fff0",
  research: "#ffe4a0",
  publications: "#b7d8ff",
  awards: "#ffe4b5",
  gallery: "#ffd8aa",
  courses: "#b2f5d6",
  profile: "#9fe3ff",
};

const LAB_METRICS = [
  ["Base", "Kumoh National Institute of Technology"],
  ["Studio", "Digital Building B111"],
  ["Core Axis", "XR, HCI, multimodal systems"],
  ["Current Cycle", "2024 to 2026"],
];

const NEWS_ITEMS = [
  ["2026.03.13", "NRF Young Investigator Research Program", "Selected for a project on XR-Physical AI-based human-digital twin interaction to expand the everyday perception of visually impaired users."],
  ["2025.11.25", "Donghee Lee joined the lab", "The current member roster expanded with a new undergraduate member focused on metaverse content and XR games."],
  ["2025.11.24", "RISE Program project selected", "Chosen for an AI-based facility anomaly detection and predictive maintenance solution project."],
  ["2025.11.12", "VRST 2025 demo session", "Presented a multi-user VR assembly design demo with multimodal object modeling and high-fidelity gesture interaction."],
  ["2025.11.12", "VRST 2025 paper presentation", "Presented the paper on trade-offs in virtual grasping and interaction fidelity."],
  ["2025.10.10", "ISMAR 2025 presentation", "Presented research on multimodal strategies for shared understanding in XR collaboration."],
  ["2025.08.05", "ISMAR 2025 acceptance", "The lab's collaboration paper was accepted to IEEE ISMAR 2025."],
  ["2025.05.07", "IEEE Access publication", "Published a head-driven algorithm for estimating upper and lower body motion in virtual reality environments."],
];

const RESEARCH_TRACKS = [
  {
    title: "Multimodal Interaction",
    meta: "Gaze, speech, touch, and gesture",
    text: "Research on how multiple input channels can work together without turning collaboration into noise.",
    image: "assets/mirror/32780f46bf1145255ffd.png",
    pills: ["Shared reference", "Coordination", "Legibility"],
  },
  {
    title: "Immersive Interaction",
    meta: "Embodiment and control",
    text: "Studying grasping, navigation, body estimation, and interaction fidelity in virtual environments.",
    image: "assets/mirror/fd5076bfeb5c6e70cef7.png",
    pills: ["Virtual grasping", "Body motion", "Embodied action"],
  },
  {
    title: "Collaborative XR",
    meta: "Real-time shared work",
    text: "Building multi-user immersive systems for assembly, review, and coordinated problem solving.",
    image: "assets/mirror/84f8f1bb489ec038666a.png",
    pills: ["Assembly", "Multi-user", "Workflow design"],
  },
  {
    title: "Accessible Computing",
    meta: "Human-centered inclusion",
    text: "Designing XR interaction for visually impaired users and socially underprivileged groups.",
    image: "assets/mirror/2b40b509dde2afcf1993.png",
    pills: ["Mobility", "Perception", "Inclusion"],
  },
];

const PROJECTS = [
  {
    title: "XR-Physical AI Human-Digital Twin Interaction",
    meta: "Ministry of Science and ICT / NRF",
    text: "A long-horizon program focused on mobility training, spatial reconstruction, and environmental awareness for visually impaired users.",
    image: "assets/mirror/b39f33c30b09c769ac47.png",
    pills: ["2026 to 2029", "Assistive XR", "Digital twin"],
  },
  {
    title: "Automated Reconstruction of Fire Scenes",
    meta: "National Forensic Service",
    text: "Immersive and collaborative investigation workflows for fire scene reconstruction and contextual analysis.",
    image: "assets/mirror/aec8c549fa5d4f3f0234.png",
    pills: ["2025 to 2027", "Forensics", "Investigation UX"],
  },
  {
    title: "AI-based Facility Predictive Maintenance",
    meta: "RISE Program",
    text: "Detecting anomalies early and supporting maintenance planning in industrial facility environments.",
    image: "assets/mirror/35589d8528e0546b98f9.png",
    pills: ["2025 to 2026", "AI systems", "Industry"],
  },
  {
    title: "Traffic Accident Video Analysis",
    meta: "Korea Insurance Development Institute",
    text: "Analyzing motion, depth, speed, and steering cues from traffic video for post-incident reconstruction.",
    image: "assets/mirror/31fba8d5d31c37f5a72f.png",
    pills: ["2025", "Vision", "Reconstruction"],
  },
  {
    title: "Large-Scale AI-based Defense XR Service",
    meta: "Ministry of Science and ICT / NIA",
    text: "Connecting hyperscale AI and spatial computing to defense manufacturing and maintenance workflows.",
    image: "assets/mirror/a7d24e93cf4bed491b22.png",
    pills: ["2024 to 2026", "Defense", "Spatial computing"],
  },
];

const FEATURED_PROJECT = {
  label: "Featured Program",
  title: "XR-Physical AI for visually impaired users",
  text: "The flagship research direction links digital twin representation, spatial perception, and XR guidance into a system that aims to make mobility safer and more legible in everyday settings.",
  image: "assets/mirror/b39f33c30b09c769ac47.png",
  points: [
    ["3D spatial reconstruction", "Translating real surroundings into a system that can support guidance and rehearsal."],
    ["XR mobility training", "Using immersive practice to help users learn routes, constraints, and situational cues."],
    ["Environmental awareness", "Combining sensing and interface design to surface what matters at the right time."],
  ],
};

const METHODS = [
  {
    title: "Build and evaluate",
    meta: "System-centered HCI",
    text: "The lab tends to ship working systems first, then evaluate whether the interaction logic actually holds up in use.",
    pills: ["Prototype", "Study", "Iterate"],
  },
  {
    title: "Work close to real contexts",
    meta: "Applied research",
    text: "Projects stay connected to concrete environments such as forensics, industrial facilities, mobility, and design review.",
    pills: ["Context", "Use cases", "Deployment path"],
  },
  {
    title: "Keep interaction legible",
    meta: "Design principle",
    text: "Whether the channel is gesture, gaze, speech, or touch, the lab keeps coming back to clarity, coordination, and load.",
    pills: ["Legibility", "Coordination", "Workload"],
  },
];

const PUBLICATION_GROUPS = [
  {
    title: "Conference papers",
    items: [
      ["ACM VRST 2025", "Trade-offs in Virtual Grasping: The Interplay of Interaction Fidelity and Object Affordance", "Jemin Lee, Jeonghyeon Kim, Hyeongjun Kang, Hoon Ryu, and Youngwon Kim."],
      ["IEEE ISMAR 2025", "What Makes Object Referencing Clear? Multimodal Strategies for Shared Understanding in XR Collaboration", "Jeonghyeon Kim, Jemin Lee, and Youngwon Kim."],
      ["ACM VRST 2025 Demo", "Multi-User VR Assembly and Manufacture Design", "Jeonghyeon Kim, Jemin Lee, Hyeongjun Kang, Taewan Kim, and collaborators."],
    ],
  },
  {
    title: "Journal papers",
    items: [
      ["IEEE Access 2025", "A Head-Driven Algorithm for Estimating Upper and Lower Body Motion in Virtual Reality Environments", "Jemin Lee, Jeonghyeon Kim, and Youngwon Kim."],
      ["Sensors 2025", "ITap: Index Finger Tap Interaction by Gaze and Tabletop Integration", "Jeonghyeon Kim, Jemin Lee, Jung-Hoon Ahn, and Youngwon Kim."],
      ["Electronics 2025", "Immersive Interaction for Inclusive Virtual Reality Navigation", "Jeonghyeon Kim, Jung-Hoon Ahn, and Youngwon Kim."],
    ],
  },
];

const PUBLICATION_CARDS = [
  {
    title: "Collaborative XR",
    meta: "Conference pattern",
    text: "Recent conference outputs concentrate on clear object reference, grasping fidelity, and multi-user immersive workflows.",
    pills: ["VRST", "ISMAR", "Shared work"],
  },
  {
    title: "Embodied interaction",
    meta: "Journal pattern",
    text: "Journal papers show a strong systems-and-evaluation rhythm around body motion estimation and inclusive interaction.",
    pills: ["IEEE Access", "Sensors", "Electronics"],
  },
  {
    title: "Student-led output",
    meta: "Current signal",
    text: "A visible share of recent papers come from graduate and undergraduate student research inside the lab.",
    pills: ["Mentoring", "Prototyping", "Publication pipeline"],
  },
];

const AWARDS = [
  ["2025.11.27", "Kit Engineering Fair 2025", "Participation award tied to capstone execution and practical engineering output."],
  ["2025.09.17", "GameAlfy Contest", "Korea Game Society recognition for AI-based game development work."],
  ["2025.08.22", "National Assembly Award", "Recognition for applied project execution and technical quality."],
  ["2024.12.21", "AI Capstone Design Competition", "Outstanding prize for prototype quality and presentation."],
  ["2024.11", "Digital Contents Society Student Competition", "Student paper and project recognition connected to the lab's research direction."],
];

const GALLERY = [
  ["assets/mirror/2023e0c74d0a9fbe3d74.jpg", "VRST 2025 demo session"],
  ["assets/mirror/7d0d6190edb2c5cba614.jpg", "VRST 2025 paper presentation"],
  ["assets/mirror/c6fb81300faee7cddb1c.jpg", "ISMAR 2025 presentation"],
  ["assets/mirror/e0d7080c5476cb494898.jpg", "Attending CHI 2025"],
  ["assets/mirror/962c9e7d31fd258ee777.jpg", "Graduation ceremony"],
  ["assets/mirror/ff8ec3582f307d0e8423.jpg", "Vision Pro experience"],
];

const PEOPLE_STATS = [
  ["Faculty lead", "1 director"],
  ["Graduate core", "2 M.S. researchers"],
  ["Current roster", "6 listed members"],
  ["Applied mode", "Research plus build"],
];

const CORE_MEMBERS = [
  { name: "Youngwon Kim", role: "Director", text: "XR, HCI, AR, VR, MR, and metaverse systems with a focus on usable interaction.", link: "person-88e2de1e72.html", image: "assets/mirror/71e100021f5099a7b7a4.jpg" },
  { name: "Jemin Lee", role: "M.S. Student", text: "Virtual reality, games, and convergence content systems.", link: "person-b4009272b8.html", image: "assets/mirror/38ab0bf236cd84860f7f.jpg" },
  { name: "Jeonghyeon Kim", role: "M.S. Student", text: "Collaboration and multimodal interaction in XR systems.", link: "person-3ec6ed68a0.html", image: "assets/mirror/b6e8b982e6fc8f505272.png" },
  { name: "Hyeongjun Kang", role: "Undergraduate Student", text: "Immersive technologies, XR content, and implementation support.", link: "person-5884df99fd.html", image: "assets/mirror/72c30a1a557d1348c9a6.jpg" },
  { name: "Donghee Lee", role: "Undergraduate Student", text: "Metaverse content, XR games, and systems-oriented prototyping.", link: "person-28997606b6.html", image: "assets/mirror/4f42317b0b61fa7c39d0.jpg" },
  { name: "Yoongi Nam", role: "Research Intern", text: "Prototype support and project execution across current lab work.", link: "", image: "assets/mirror/0ab79dc5e5f7e211151f.png" },
];

const SUPPORTING_MEMBERS = [
  { title: "Academic break", meta: "Kikong Lee", text: "Still part of the lab story through immersive prototype development and project support.", pills: ["XR prototyping", "Implementation", "People"] },
  { title: "Recent alumni", meta: "Taewan Kim, Junseok Im, Gu Kim", text: "Past members contributed to current project momentum, prototypes, and conference-facing output.", pills: ["Applied work", "Capstone", "Transition"] },
  { title: "Recruiting signal", meta: "Graduate and undergraduate", text: "The lab remains open to students who want to build systems, run studies, and ship research outcomes.", pills: ["XR", "HCI", "Research practice"] },
];

const COURSES = [
  { title: "XR Prototyping", meta: "Hands-on implementation", text: "Turning immersive interaction ideas into working systems with iterative testing.", pills: ["Build", "Debug", "Demo"] },
  { title: "Human-Computer Interaction", meta: "Research-informed design", text: "Teaching students to connect interface decisions to behavior, clarity, and workload.", pills: ["Evaluation", "Usability", "HCI"] },
  { title: "Research Practice", meta: "Seminar and critique", text: "Reading papers, framing studies, and communicating results with professional discipline.", pills: ["Papers", "Experiments", "Presentation"] },
];

const PROFILE_DATA = {
  "profile-youngwon": {
    name: "Youngwon Kim",
    role: "Director",
    email: "kim01@kumoh.ac.kr",
    focus: "XR, HCI, AR, VR, MR, and metaverse systems",
    image: "assets/mirror/71e100021f5099a7b7a4.jpg",
    summary: "Leads the lab's direction across immersive interaction, multimodal systems, collaborative XR, and accessible computing.",
    affiliation: "Department of Computer Software Engineering, Kumoh National Institute of Technology",
    highlights: [
      ["2026", "IEEE VR 2026 Finance Chair", "Supporting the organization of the flagship VR conference."],
      ["2025", "IEEE ISMAR 2025 Doctoral Consortium Chair", "Leading part of the program structure around doctoral research exchange."],
      ["2025", "Outstanding Teaching Professor", "Recognized for teaching performance at Kumoh National Institute of Technology."],
    ],
    details: [
      ["Research interests", "XR, VR, AR, MR, HCI, and metaverse systems grounded in usable interaction."],
      ["Professional roles", "Conference organization, editorial service, and research project leadership."],
      ["Current direction", "Building immersive systems that hold up in evaluation as well as demonstration."],
    ],
    skills: ["XR systems", "Human-centered design", "Research leadership", "Conference organization"],
  },
  "profile-jemin": {
    name: "Jemin Lee",
    role: "M.S. Student",
    email: "char3941@kumoh.ac.kr",
    focus: "VR, games, and convergence content",
    image: "assets/mirror/38ab0bf236cd84860f7f.jpg",
    summary: "Works on immersive interaction problems with an emphasis on virtual grasping, game-like systems, and implementation detail.",
    affiliation: "HAX Lab, Kumoh National Institute of Technology",
    highlights: [
      ["2025", "ACM VRST 2025 paper presentation", "Presented research on trade-offs in virtual grasping and interaction fidelity."],
      ["2025", "IEEE Access publication", "Co-authored a method for estimating body motion in VR environments."],
      ["Current", "M.S. research", "Develops interaction systems tied to VR, games, and immersive content."],
    ],
    details: [
      ["Research interests", "Virtual reality, games, and convergence content systems."],
      ["Technical base", "Java, C#, C++, and Python."],
      ["Working style", "Strong focus on turning prototypes into testable interaction systems."],
    ],
    skills: ["Java", "C#", "C++", "Python", "VR prototyping"],
  },
  "profile-jeonghyeon": {
    name: "Jeonghyeon Kim",
    role: "M.S. Student",
    email: "dnrgusrla1@kumoh.ac.kr",
    focus: "Collaboration and multimodal interaction",
    image: "assets/mirror/b6e8b982e6fc8f505272.png",
    summary: "Focuses on how people coordinate, refer, and communicate clearly in shared XR environments.",
    affiliation: "HAX Lab, Kumoh National Institute of Technology",
    highlights: [
      ["2025", "IEEE ISMAR 2025 presentation", "Presented work on clear object referencing in XR collaboration."],
      ["2025", "Sensors publication", "Published the iTap interaction technique integrating gaze and tabletop input."],
      ["2025", "Electronics publication", "Contributed to inclusive navigation interaction for VR systems."],
    ],
    details: [
      ["Research interests", "Collaboration, multimodal interaction, and accessible immersive systems."],
      ["Publication pattern", "Conference and journal work anchored in concrete interface behavior."],
      ["Lab role", "Graduate research core across collaboration-focused XR topics."],
    ],
    skills: ["Multimodal XR", "Study design", "System prototyping", "Academic writing"],
  },
  "profile-hyeongjun": {
    name: "Hyeongjun Kang",
    role: "Undergraduate Student",
    email: "",
    focus: "Immersive technologies and XR content",
    image: "assets/mirror/72c30a1a557d1348c9a6.jpg",
    summary: "Supports the lab through implementation, content creation, and undergraduate research connected to current projects.",
    affiliation: "HAX Lab, Kumoh National Institute of Technology",
    highlights: [
      ["2025", "VRST 2025 co-author", "Contributed to work on virtual grasping and object affordance."],
      ["Current", "XR content prototyping", "Builds and refines immersive content linked to active lab projects."],
      ["Since 2024", "Undergraduate research participation", "Contributes to the lab's project and experiment pipeline."],
    ],
    details: [
      ["Research interests", "Immersive technologies and XR content production."],
      ["Working mode", "Hands-on support for prototypes, content assembly, and testing."],
      ["Current role", "Undergraduate member contributing to ongoing immersive systems work."],
    ],
    skills: ["XR content", "Prototype support", "Implementation", "Testing"],
  },
  "profile-donghee": {
    name: "Donghee Lee",
    role: "Undergraduate Student",
    email: "",
    focus: "Metaverse content, XR games, and systems prototyping",
    image: "assets/mirror/4f42317b0b61fa7c39d0.jpg",
    summary: "Builds across metaverse-style content, XR game ideas, and systems-oriented implementation for lab projects.",
    affiliation: "HAX Lab, Kumoh National Institute of Technology",
    highlights: [
      ["2025.11", "Kit Engineering Fair 2025", "Received recognition tied to engineering execution and capstone output."],
      ["2025.10", "ICPC Asia Korea National First Round", "Participated in competitive programming alongside broader systems work."],
      ["2025.04", "HackTheon Sejong", "Joined international student cybersecurity competition work while developing technical breadth."],
    ],
    details: [
      ["Research interests", "Metaverse content, XR games, and practical systems implementation."],
      ["Technical base", "Python, Java, C++, FastAPI, Docker, Linux, MySQL, and Proxmox VE."],
      ["Lab role", "A newer member contributing to prototype and engineering-heavy tasks."],
    ],
    skills: ["Python", "Java", "C++", "FastAPI", "Docker", "Linux"],
  },
  "profile-kikong": {
    name: "Kikong Lee",
    role: "Academic Break",
    email: "dlrlrhd@gmail.com",
    focus: "XR prototype development",
    image: "assets/mirror/4a96a4a8d627d92c55cf.png",
    summary: "Remains part of the lab's recent story through immersive prototype development and implementation support.",
    affiliation: "HAX Lab, Kumoh National Institute of Technology",
    highlights: [
      ["2024", "Joined the lab", "Entered the lab during the early build-out of the current member cohort."],
      ["Recent", "Prototype development", "Supported immersive implementation and iterative development work."],
      ["Current", "Academic break", "Still represented as part of the lab's broader people network."],
    ],
    details: [
      ["Focus", "XR prototyping and technical support for immersive systems."],
      ["Role in the lab", "Implementation-oriented contribution across developing ideas and working demos."],
      ["Contact", "Available by email for direct communication."],
    ],
    skills: ["XR prototyping", "Implementation", "Iteration", "Support"],
  },
};

function esc(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function initials(name) {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return String(name || "").slice(0, 2).toUpperCase();
}

function resolvePageKey() {
  const bodyPage = document.body?.dataset.page;
  if (bodyPage) return bodyPage;
  const file = (window.location.pathname.split("/").pop() || "index.html").split("?")[0];
  if (PROFILE_PAGE_BY_FILE[file]) return PROFILE_PAGE_BY_FILE[file];
  if (file === "" || file === "index.html" || file === "home.html") return "home";
  return file.replace(".html", "");
}

function renderBrand() {
  const brand = document.querySelector(".brand");
  if (!brand) return;
  brand.innerHTML = `
    <span class="brand-mark">HAX</span>
    <span class="brand-copy">
      <strong>HAX Lab</strong>
      <span>Human-centered XR and AX</span>
    </span>
  `;
}

function setupMenu(activeKey) {
  const nav = document.getElementById("site-menu");
  const toggle = document.getElementById("menu-toggle");
  if (!nav) return;
  nav.innerHTML = NAV_ITEMS.map(([key, href, label]) => {
    const active = key === activeKey;
    return `<a class="${active ? "active" : ""}" href="${href}"${active ? ' aria-current="page"' : ""}>${esc(label)}</a>`;
  }).join("");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
}

function hero(title, summary, tags, panel, art) {
  const artHtml = art
    ? `
        <div class="hero-figure reveal" style="--delay:0.18s;">
          <div class="hero-figure__image"><img src="${esc(art.image)}" alt="${esc(art.title || title)}" loading="lazy"></div>
          <div class="hero-figure__caption"><strong>${esc(art.kicker || "Featured")}</strong><span>${esc(art.title || "")}</span></div>
        </div>
      `
    : "";
  return `
    <section class="hero reveal">
      <canvas class="hero-canvas" aria-hidden="true"></canvas>
      <div class="hero-overlay ${art ? "hero-overlay--art" : ""}">
        <div class="hero-copy reveal" style="--delay:0.04s;">
          <p class="eyebrow">HAX Lab</p>
          <h1 class="hero-title">${esc(title)}</h1>
          <p class="hero-summary">${esc(summary)}</p>
          <div class="hero-tags">${tags.map((tag) => `<span class="hero-tag">${esc(tag)}</span>`).join("")}</div>
        </div>
        <aside class="hero-panel reveal" style="--delay:0.12s;">
          <h2>${esc(panel.title)}</h2>
          <p>${esc(panel.text)}</p>
          <div class="hero-panel-list">${panel.items.map((item) => `<div class="hero-panel-item"><strong>${esc(item[0])}</strong><span>${esc(item[1])}</span></div>`).join("")}</div>
        </aside>
        ${artHtml}
      </div>
    </section>
  `;
}

function sectionWrap(title, intro, inner, extraClass = "") {
  const cls = extraClass ? `section ${extraClass}` : "section";
  return `
    <section class="${cls}">
      <div class="section-head reveal">
        <div>
          <h2>${esc(title)}</h2>
          <p>${esc(intro)}</p>
        </div>
      </div>
      ${inner}
    </section>
  `;
}

function renderStats(items) {
  return `<div class="stats-band">${items.map((item, idx) => `
    <article class="stat-card reveal" style="--delay:${(idx * 0.04).toFixed(2)}s;">
      <strong>${esc(item[1])}</strong>
      <span>${esc(item[0])}</span>
    </article>`).join("")}</div>`;
}

function renderPillRow(items) {
  if (!items || !items.length) return "";
  return `<div class="pill-row">${items.map((item) => `<span class="pill">${esc(item)}</span>`).join("")}</div>`;
}

function renderCards(items) {
  return `<div class="card-grid">${items.map((item, idx) => `
    <article class="content-card reveal" style="--delay:${(idx * 0.05).toFixed(2)}s;">
      ${item.image ? `<div class="content-card__image"><img src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy"></div>` : ""}
      <span class="content-card__eyebrow">${esc(item.meta)}</span>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.text)}</p>
      ${renderPillRow(item.pills)}
    </article>`).join("")}</div>`;
}

function renderTimeline(items) {
  return `<div class="timeline-list">${items.map((item, idx) => `
    <article class="timeline-item reveal" style="--delay:${(idx * 0.04).toFixed(2)}s;">
      <span class="timeline-item__date">${esc(item[0])}</span>
      <h3>${esc(item[1])}</h3>
      <p>${esc(item[2])}</p>
    </article>`).join("")}</div>`;
}

function renderMembers(items) {
  return `<div class="member-grid">${items.map((item, idx) => `
    <article class="member-card reveal" style="--delay:${(idx * 0.04).toFixed(2)}s;">
      <div class="member-card__top">
        ${item.image ? `<span class="member-avatar"><img src="${esc(item.image)}" alt="${esc(item.name)}" loading="lazy"></span>` : `<span class="member-avatar">${esc(initials(item.name))}</span>`}
        <div class="member-card__meta">
          <span class="member-role">${esc(item.role)}</span>
          <h3>${esc(item.name)}</h3>
          <p>${esc(item.text)}</p>
        </div>
      </div>
      ${item.link ? `<a class="link-chip" href="${esc(item.link)}">Open profile</a>` : ""}
    </article>`).join("")}</div>`;
}

function renderPublications(groups) {
  return `<div class="publication-board">${groups.map((group, idx) => `
    <article class="publication-group reveal" style="--delay:${(idx * 0.05).toFixed(2)}s;">
      <h3>${esc(group.title)}</h3>
      <ul>${group.items.map((entry) => `<li><strong>${esc(entry[1])}</strong><br>${esc(entry[0])}<br>${esc(entry[2])}</li>`).join("")}</ul>
    </article>`).join("")}</div>`;
}

function renderGallery(items) {
  return `<div class="gallery-grid">${items.map((item, idx) => `
    <figure class="gallery-card reveal" style="--delay:${(idx * 0.03).toFixed(2)}s;">
      <img src="${esc(item[0])}" alt="${esc(item[1])}" loading="lazy">
      <figcaption>${esc(item[1])}</figcaption>
    </figure>`).join("")}</div>`;
}

function renderDetailList(items) {
  return `<div class="detail-list">${items.map((item) => `<div class="detail-item"><strong>${esc(item[0])}</strong><p>${esc(item[1])}</p></div>`).join("")}</div>`;
}

function renderFeatureSplit(feature) {
  return `
    <div class="feature-split">
      <article class="feature-copy reveal">
        <span class="item-meta">${esc(feature.label)}</span>
        <h3>${esc(feature.title)}</h3>
        <p>${esc(feature.text)}</p>
        ${renderDetailList(feature.points)}
      </article>
      <figure class="feature-media reveal" style="--delay:0.06s;">
        <img src="${esc(feature.image)}" alt="${esc(feature.title)}" loading="lazy">
      </figure>
    </div>
  `;
}

function renderProfile(key) {
  const profile = PROFILE_DATA[key];
  if (!profile) return "";
  return hero(
    profile.name,
    profile.summary,
    [profile.role, "People", "HAX Lab"],
    {
      title: "Profile Snapshot",
      text: "A compact view of the member's role, focus, and current contribution inside the lab.",
      items: [["Role", profile.role], ["Focus", profile.focus], ["Contact", profile.email || "On request"]],
    },
    { kicker: profile.role, title: profile.name, image: profile.image }
  ) + sectionWrap(
    "Overview",
    "Core information and working context.",
    `
      <div class="profile-layout">
        <article class="profile-card reveal">
          <div class="profile-photo"><img src="${esc(profile.image)}" alt="${esc(profile.name)}" loading="lazy"></div>
        </article>
        <article class="profile-card reveal" style="--delay:0.05s;">
          <span class="member-role">${esc(profile.role)}</span>
          <h3>${esc(profile.name)}</h3>
          <p>${esc(profile.summary)}</p>
          <div class="profile-metrics">
            <div class="metric-chip"><strong>Affiliation</strong><span>${esc(profile.affiliation)}</span></div>
            <div class="metric-chip"><strong>Focus</strong><span>${esc(profile.focus)}</span></div>
            <div class="metric-chip"><strong>Email</strong><span>${esc(profile.email || "On request")}</span></div>
            <div class="metric-chip"><strong>Lab</strong><span>HAX Lab</span></div>
          </div>
        </article>
      </div>
    `
  ) + sectionWrap(
    "Selected Highlights",
    "A concise slice of the member's current trajectory.",
    renderTimeline(profile.highlights)
  ) + sectionWrap(
    "Background",
    "Working interests, technical base, and current role.",
    `
      <div class="feature-split">
        <article class="feature-copy reveal">
          ${renderDetailList(profile.details)}
          ${renderPillRow(profile.skills)}
        </article>
        <article class="feature-copy reveal" style="--delay:0.06s;">
          <span class="item-meta">Current frame</span>
          <h3>${esc(profile.role)} at HAX Lab</h3>
          <p>${esc(profile.focus)}</p>
          <p>${esc(profile.summary)}</p>
        </article>
      </div>
    `
  );
}

function renderPage(pageKey) {
  const main = document.querySelector(".site-shell");
  if (!main) return;
  let html = "";

  if (pageKey === "home") {
    html += hero("Designing XR interaction that feels clear, embodied, and collaborative.", "HAX Lab studies immersive systems through usable interaction, multimodal coordination, collaborative workflows, accessible computing, and digital twin-linked applications.", ["XR", "HCI", "Collaboration", "Accessible Computing"], {
      title: "Lab Snapshot",
      text: "The lab stays close to real settings, from assistive mobility and forensics to industrial simulation and spatial computing systems.",
      items: [["Location", "Digital Building B111, KNUT"], ["Contact", "kim01@kumoh.ac.kr"], ["Current signal", "NRF Young Investigator Research Program"]],
    }, { kicker: "Current project", title: "Assistive XR and digital twin-linked systems", image: "assets/mirror/b39f33c30b09c769ac47.png" });
    html += sectionWrap("Lab Snapshot", "A compact orientation to the lab's base and current mode.", renderStats(LAB_METRICS), "section--tight");
    html += sectionWrap("Research Themes", "The lab returns to a small set of recurring questions about interaction, embodiment, and coordination.", renderCards(RESEARCH_TRACKS));
    html += sectionWrap("Featured Program", "A flagship direction that captures the lab's human-centered applied research style.", renderFeatureSplit(FEATURED_PROJECT));
    html += sectionWrap("Recent Signals", "Recent public milestones across grants, conferences, and publication activity.", renderTimeline(NEWS_ITEMS.slice(0, 6)));
    html += sectionWrap("Selected Outputs", "Recent publication activity across conference and journal venues.", renderPublications(PUBLICATION_GROUPS));
    html += sectionWrap("Around the Lab", "A visual slice of demos, conferences, and lab life.", renderGallery(GALLERY.slice(0, 4)));
  } else if (pageKey === "news") {
    html += hero("Research updates, conference activity, and project milestones.", "The lab's public signal is shaped by conferences, publication outcomes, funded programs, and the steady addition of working systems.", ["Updates", "Conferences", "Projects"], {
      title: "Recent pattern",
      text: "Most recent updates cluster around VRST, ISMAR, funded projects, and publication outcomes during 2025 and 2026.",
      items: [["Latest", "2026.03.13 NRF Young Investigator Research Program"], ["Conference cycle", "VRST 2025 and ISMAR 2025"], ["Applied range", "Mobility, forensics, maintenance"]],
    }, { kicker: "Recent moment", title: "Conference visibility and applied programs", image: "assets/mirror/2023e0c74d0a9fbe3d74.jpg" });
    html += sectionWrap("At a Glance", "The current update flow is driven by research visibility and funded work.", renderStats([["Latest grant", "NRF Young Investigator"], ["Conference span", "VRST and ISMAR"], ["Project mode", "Applied XR plus AI"], ["Student signal", "Strong paper participation"]]), "section--tight");
    html += sectionWrap("Timeline", "Recent updates in reverse chronological order.", renderTimeline(NEWS_ITEMS));
  } else if (pageKey === "people") {
    html += hero("A compact team building XR systems, interaction experiments, and applied prototypes.", "HAX Lab combines faculty direction, graduate research, undergraduate making, and project-driven collaboration inside a deliberately small working group.", ["Faculty", "Graduate", "Undergraduate", "Research Intern"], {
      title: "Team snapshot",
      text: "Current members cover research framing, system implementation, and lab execution across projects and conference output.",
      items: [["Director", "Youngwon Kim"], ["Graduate core", "Jemin Lee and Jeonghyeon Kim"], ["Current roster", "Hyeongjun Kang, Donghee Lee, Yoongi Nam"]],
    }, { kicker: "People", title: "Research plus build", image: "assets/mirror/962c9e7d31fd258ee777.jpg" });
    html += sectionWrap("Team Structure", "A quick view of the lab's current size and operating shape.", renderStats(PEOPLE_STATS), "section--tight");
    html += sectionWrap("Core Members", "Faculty, graduate students, and current contributors with direct links to available profile pages.", renderMembers(CORE_MEMBERS));
    html += sectionWrap("Supporting Roles", "Additional context around the broader member network around the lab.", renderCards(SUPPORTING_MEMBERS));
  } else if (pageKey === "projects") {
    html += hero("Projects stay close to actual environments instead of ending as isolated demos.", "The portfolio spans assistive XR, fire-scene reconstruction, predictive maintenance, traffic analysis, and digital twin-linked spatial computing.", ["Applied XR", "Digital twin", "Forensics", "AI systems"], {
      title: "Project pattern",
      text: "Long-horizon funded research is balanced with shorter applied programs and institutional collaborations.",
      items: [["Flagship", "XR-Physical AI for visually impaired users"], ["Applied contexts", "Forensics, mobility, maintenance"], ["Partners", "NRF, NIA, NFS, KETI, KIDI"]],
    }, { kicker: "Portfolio", title: "From labs to real environments", image: "assets/mirror/aec8c549fa5d4f3f0234.png" });
    html += sectionWrap("Selected Projects", "Current and recent projects show how the lab translates research questions into funded systems work.", renderCards(PROJECTS));
    html += sectionWrap("Why This Matters", "The lab's applied mode is easiest to read through one focused example.", renderFeatureSplit(FEATURED_PROJECT));
  } else if (pageKey === "research") {
    html += hero("Research is framed around how interaction becomes intuitive, coordinated, and usable in XR.", "The lab approaches immersive systems through concrete problems such as referencing, grasping, mobility, accessibility, embodiment, and collaboration.", ["Multimodal", "Embodied", "Collaborative", "Accessible"], {
      title: "Method pattern",
      text: "The lab builds working systems and evaluates them against real interaction questions instead of stopping at interface sketches.",
      items: [["Interaction", "Gesture, gaze, speech, touch"], ["Evaluation", "Performance, workload, presence"], ["Contexts", "Simulation, inclusion, collaboration"]],
    }, { kicker: "Research mode", title: "System building with evaluation", image: "assets/mirror/84f8f1bb489ec038666a.png" });
    html += sectionWrap("Current Research Tracks", "The main directions that organize the lab's recent output.", renderCards(RESEARCH_TRACKS));
    html += sectionWrap("Working Method", "The lab's recurring way of moving from idea to evidence.", renderCards(METHODS));
  } else if (pageKey === "publications") {
    html += hero("Publications track both core XR questions and applied immersive system output.", "Recent papers cluster around collaborative XR, immersive interaction, body estimation, accessible navigation, and multimodal coordination.", ["VRST", "ISMAR", "IEEE Access", "Sensors"], {
      title: "Output snapshot",
      text: "The publication pattern shows a strong link between system building, evaluation, and practical design guidance.",
      items: [["Conference", "ACM VRST and IEEE ISMAR"], ["Journal", "IEEE Access, Sensors, Electronics"], ["Style", "System plus evaluation plus insight"]],
    }, { kicker: "Output", title: "Conference and journal rhythm", image: "assets/mirror/c6fb81300faee7cddb1c.jpg" });
    html += sectionWrap("Selected Papers", "A compact publication board for the recent cycle of the lab.", renderPublications(PUBLICATION_GROUPS));
    html += sectionWrap("Reading the Pattern", "What the recent output says about the lab's direction.", renderCards(PUBLICATION_CARDS));
  } else if (pageKey === "awards") {
    html += hero("Recognition reflects engineering execution, applied research, and student-led output.", "Awards in the recent cycle sit close to capstone work, contests, and public-facing project quality.", ["Capstone", "Contest", "Recognition"], {
      title: "Recognition snapshot",
      text: "The recent award pattern shows the lab's work landing in both academic and practical contexts.",
      items: [["Recent", "Kit Engineering Fair 2025"], ["Student-led", "GameAlfy and AI Capstone"], ["Style", "Execution plus presentation"]],
    }, { kicker: "Recognition", title: "Where the work is being noticed", image: "assets/mirror/962c9e7d31fd258ee777.jpg" });
    html += sectionWrap("Selected Recognition", "Recent awards and honors tied to work from the lab.", renderTimeline(AWARDS));
  } else if (pageKey === "gallery") {
    html += hero("The lab's visual record is built from demos, conferences, travel, celebrations, and making sessions.", "These moments show the rhythm of the lab across public presentation, prototyping, and shared studio time.", ["Conference", "Demo", "Studio", "Milestones"], {
      title: "Visual snapshot",
      text: "Recent images trace the cycle from project work to conference visibility and everyday lab culture.",
      items: [["Conference", "VRST, ISMAR, and CHI"], ["Lab life", "Celebrations, demos, reviews"], ["Cycle", "2024 and 2025 selected scenes"]],
    }, { kicker: "Gallery", title: "Selected scenes from the lab", image: "assets/mirror/7d0d6190edb2c5cba614.jpg" });
    html += sectionWrap("Selected Scenes", "A curated visual record from the recent lab cycle.", renderGallery(GALLERY));
  } else if (pageKey === "courses") {
    html += hero("Teaching is tied to how students build, test, critique, and present immersive systems.", "The learning direction centers on XR prototyping, HCI, evaluation, research practice, and complete demo-oriented outputs.", ["XR prototyping", "HCI", "Research practice"], {
      title: "Learning snapshot",
      text: "Course-linked learning connects implementation, experimentation, and communication in one loop.",
      items: [["Undergraduate", "Interaction and XR foundations"], ["Graduate", "Seminar and research practice"], ["Format", "Prototype, evaluate, iterate"]],
    }, { kicker: "Teaching", title: "Making and critique together", image: "assets/mirror/e0d7080c5476cb494898.jpg" });
    html += sectionWrap("Teaching Directions", "The lab's teaching flow centers on practical making and research communication.", renderCards(COURSES));
  } else if (PROFILE_DATA[pageKey]) {
    html += renderProfile(pageKey);
  } else {
    html += hero("Human-centered XR and AX Lab", "HAX Lab explores immersive interaction, collaborative systems, and applied human-centered computing.", ["XR", "HCI", "Interaction"], {
      title: "Lab snapshot",
      text: "A compact research lab site centered on immersive interaction and real systems work.",
      items: [["Location", "Digital Building B111, KNUT"], ["Contact", "kim01@kumoh.ac.kr"], ["Focus", "Human-centered XR"]],
    });
  }

  html += `<footer class="site-footer reveal" style="--delay:0.18s;"><p>&copy; ${new Date().getFullYear()} HAX Lab | Digital Building B111, Kumoh National Institute of Technology | kim01@kumoh.ac.kr</p></footer>`;
  main.innerHTML = html;
}

async function initHeroScene(pageKey) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.querySelector(".hero-canvas");
  const heroEl = document.querySelector(".hero");
  if (!canvas || !heroEl) return;
  try {
    const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.164.1/build/three.module.js");
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 8.8);
    const accent = new THREE.Color(HERO_COLORS[pageKey] || HERO_COLORS.profile);
    const geometry = new THREE.PlaneGeometry(14, 8.8, 36, 26);
    const base = geometry.attributes.position.array.slice(0);
    const wire = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.17 }));
    wire.rotation.x = -0.96;
    wire.rotation.z = -0.22;
    scene.add(wire);
    const points = new THREE.Points(geometry, new THREE.PointsMaterial({ color: new THREE.Color("#fff7dc"), size: 0.08, transparent: true, opacity: 0.9 }));
    points.rotation.copy(wire.rotation);
    points.position.z = 0.05;
    scene.add(points);
    const halo = new THREE.Mesh(new THREE.SphereGeometry(1.7, 28, 28), new THREE.MeshBasicMaterial({ color: new THREE.Color("#f2b655"), transparent: true, opacity: 0.1 }));
    halo.position.set(3.2, 1.8, -1.6);
    scene.add(halo);
    const ring = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(Array.from({ length: 48 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 48;
        return new THREE.Vector3(Math.cos(angle) * 1.7, Math.sin(angle) * 1.7, 0);
      })),
      new THREE.LineBasicMaterial({ color: new THREE.Color("#fff7dc"), transparent: true, opacity: 0.18 })
    );
    ring.position.set(-2.7, -1.5, -1.4);
    scene.add(ring);
    let pointerX = 0;
    let pointerY = 0;
    heroEl.addEventListener("pointermove", (event) => {
      const rect = heroEl.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.38;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.24;
    });
    function resize() {
      const rect = heroEl.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);
    const clock = new THREE.Clock();
    const positions = geometry.attributes.position;
    function animate() {
      const elapsed = clock.getElapsedTime();
      const array = positions.array;
      for (let i = 0; i < array.length; i += 3) {
        const x = base[i];
        const y = base[i + 1];
        array[i + 2] = Math.sin(x * 0.82 + elapsed * 1.3) * 0.25 + Math.cos(y * 1.08 + elapsed * 0.8) * 0.18;
      }
      positions.needsUpdate = true;
      wire.rotation.z += (pointerX - wire.rotation.z * 0.12) * 0.015;
      points.rotation.z = wire.rotation.z;
      wire.rotation.x += (-0.96 + pointerY - wire.rotation.x) * 0.03;
      points.rotation.x = wire.rotation.x;
      halo.position.x = 3.2 + Math.sin(elapsed * 0.55) * 0.36;
      halo.position.y = 1.8 + Math.cos(elapsed * 0.44) * 0.24;
      ring.rotation.z = elapsed * 0.12;
      ring.position.x = -2.7 + Math.cos(elapsed * 0.35) * 0.12;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
  } catch (error) {
    // Decorative effect only.
  }
}

function updateMeta(pageKey) {
  const meta = document.querySelector('meta[name="description"]');
  const profile = PROFILE_DATA[pageKey];
  const titles = {
    home: "HAX Lab | Human-centered XR and AX",
    news: "HAX Lab | News",
    people: "HAX Lab | People",
    projects: "HAX Lab | Projects",
    research: "HAX Lab | Research",
    publications: "HAX Lab | Publications",
    awards: "HAX Lab | Awards",
    gallery: "HAX Lab | Gallery",
    courses: "HAX Lab | Courses",
  };
  document.title = profile ? `HAX Lab | ${profile.name}` : titles[pageKey] || "HAX Lab";
  if (meta) {
    meta.setAttribute("content", profile ? `${profile.name} at HAX Lab. ${profile.focus}.` : "HAX Lab researches XR, HCI, multimodal interaction, collaborative systems, and accessible immersive computing.");
  }
}

function init() {
  const pageKey = resolvePageKey();
  renderBrand();
  setupMenu(PROFILE_DATA[pageKey] ? "people" : pageKey);
  updateMeta(pageKey);
  renderPage(pageKey);
  initHeroScene(HERO_COLORS[pageKey] ? pageKey : "profile");
}

init();
