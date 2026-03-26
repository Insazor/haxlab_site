import { animate, stagger } from "../vendor/animejs/anime.esm.js";

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

function clampValue(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function hexToRgba(hex, alpha) {
  const normalized = String(hex || "#429ba3").replace("#", "");
  const safe = normalized.length === 3
    ? normalized.split("").map((char) => `${char}${char}`).join("")
    : normalized.padEnd(6, "0").slice(0, 6);
  const value = Number.parseInt(safe, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function pageToneKey(pageKey) {
  if (String(pageKey).startsWith("profile-")) return "profile";
  return pageKey;
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
  brand.className = "brand-lockup";
  brand.innerHTML = `
    <span class="brand-mark">HAX</span>
    <span class="brand-copy">
      <strong>HAX Lab</strong>
      <span>Human-Centered XR Systems</span>
    </span>
  `;
}

function setupMenu(activeKey) {
  const nav = document.getElementById("site-menu");
  const toggle = document.getElementById("menu-toggle");
  if (!nav) return;
  nav.className = "hidden w-full flex-col gap-2 pt-3 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-1 lg:pt-0";
  nav.innerHTML = NAV_ITEMS.map(([key, href, label]) => {
    const active = key === activeKey;
    const className = active ? "nav-link nav-link-active" : "nav-link";
    return `<a class="${className}" href="${href}"${active ? ' aria-current="page"' : ""}>${esc(label)}</a>`;
  }).join("");
  if (toggle) {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeMenu = (instant = false) => {
      if (desktopQuery.matches) {
        nav.classList.remove("hidden");
        nav.style.height = "";
        nav.style.opacity = "";
        toggle.setAttribute("aria-expanded", "false");
        return;
      }
      if (instant) {
        nav.classList.add("hidden");
        nav.style.height = "";
        nav.style.opacity = "";
        toggle.setAttribute("aria-expanded", "false");
        return;
      }
      const currentHeight = nav.scrollHeight || nav.getBoundingClientRect().height || 0;
      animate(nav, {
        height: [currentHeight, 0],
        opacity: [1, 0],
        duration: 260,
        ease: "outCubic",
        onComplete: () => {
          nav.classList.add("hidden");
          nav.style.height = "";
          nav.style.opacity = "";
          toggle.setAttribute("aria-expanded", "false");
        },
      });
    };
    const openMenu = () => {
      nav.classList.remove("hidden");
      nav.style.height = "0px";
      nav.style.opacity = "0";
      animate(nav, {
        height: [0, nav.scrollHeight],
        opacity: [0, 1],
        duration: 320,
        ease: "outCubic",
        onComplete: () => {
          nav.style.height = "";
          nav.style.opacity = "";
          toggle.setAttribute("aria-expanded", "true");
        },
      });
    };
    const syncMenu = () => {
      if (desktopQuery.matches) {
        nav.classList.remove("hidden");
        nav.style.height = "";
        nav.style.opacity = "";
      } else {
        nav.classList.add("hidden");
        nav.style.height = "";
        nav.style.opacity = "";
        toggle.setAttribute("aria-expanded", "false");
      }
    };
    syncMenu();
    desktopQuery.addEventListener("change", syncMenu);
    toggle.addEventListener("click", () => {
      if (desktopQuery.matches) return;
      if (nav.classList.contains("hidden")) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }
}

function hero(title, summary, tags, panel, art, options = {}) {
  const themeKey = pageToneKey(options.themeKey || "home");
  const accent = HERO_COLORS[themeKey] || HERO_COLORS.home;
  const accentSoft = hexToRgba(accent, 0.24);
  const accentStrong = hexToRgba(accent, 0.36);
  const pageLabel = options.eyebrow || "HAX Lab";
  const artHtml = art ? `
    <figure class="js-hero-panel js-hero-layer overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08]" data-hero-depth="18">
      <img class="aspect-[4/3] w-full object-cover" src="${esc(art.image)}" alt="${esc(art.title || title)}" loading="lazy">
      <figcaption class="space-y-1 px-5 py-4">
        <div class="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">${esc(art.kicker || "Featured")}</div>
        <div class="text-sm font-medium text-white">${esc(art.title || "")}</div>
      </figcaption>
    </figure>
  ` : "";
  return `
    <section class="hero-card js-hero-surface">
      <div class="orb js-orb-a js-hero-layer -left-20 -top-16 h-48 w-48" data-hero-depth="28" style="background:${accentSoft};"></div>
      <div class="orb js-orb-b js-hero-layer bottom-0 right-0 h-44 w-44" data-hero-depth="22" style="background:${accentStrong};"></div>
      <div class="hero-grid">
        <div class="relative z-10 space-y-6 js-hero-layer" data-hero-depth="12">
          <div class="space-y-4">
            <span class="eyebrow js-hero-line">${esc(pageLabel)}</span>
            <h1 class="js-hero-line max-w-4xl font-serif text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">${esc(title)}</h1>
            <p class="js-hero-line max-w-3xl text-base leading-8 text-white/80 sm:text-lg">${esc(summary)}</p>
          </div>
          <div class="js-hero-line flex flex-wrap gap-2">
            ${tags.map((tag) => `<span class="js-hero-chip rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-sm font-medium text-white/90">${esc(tag)}</span>`).join("")}
          </div>
        </div>
        <div class="relative z-10 space-y-4 js-hero-layer" data-hero-depth="20">
          <aside class="js-hero-panel js-hero-layer rounded-[2rem] border border-white/12 bg-white/[0.08] p-5 backdrop-blur" data-hero-depth="24">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">${esc(panel.title)}</p>
            <p class="mt-3 text-sm leading-7 text-white/70">${esc(panel.text)}</p>
            <div class="mt-5 space-y-4">
              ${panel.items.map((item) => `
                <div class="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <div class="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">${esc(item[0])}</div>
                  <div class="mt-2 text-sm font-medium text-white">${esc(item[1])}</div>
                </div>
              `).join("")}
            </div>
          </aside>
          ${artHtml}
        </div>
      </div>
    </section>
  `;
}

function ensureScrollIndicator() {
  let indicator = document.querySelector(".scroll-indicator");
  if (!indicator) {
    indicator = document.createElement("div");
    indicator.className = "scroll-indicator";
    indicator.innerHTML = '<span class="scroll-indicator__fill"></span>';
    document.body.appendChild(indicator);
  }
  return indicator;
}

function initScrollIndicator() {
  const indicator = ensureScrollIndicator();
  const fill = indicator.querySelector(".scroll-indicator__fill");
  if (!fill) return;

  animate(indicator, {
    opacity: [0, 1],
    duration: 480,
    ease: "outCubic",
  });

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? clampValue(window.scrollY / max, 0, 1) : 0;
    fill.style.transform = `scaleX(${progress})`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initHeroPointerMotion() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const hero = document.querySelector(".js-hero-surface");
  if (!hero) return;

  const layers = [...hero.querySelectorAll("[data-hero-depth]")];
  if (!layers.length) return;

  let frame = 0;
  let bounds = null;
  let targetX = 0;
  let targetY = 0;

  const apply = () => {
    frame = 0;
    layers.forEach((layer) => {
      const depth = Number(layer.dataset.heroDepth || 12);
      animate(layer, {
        translateX: targetX * depth,
        translateY: targetY * depth,
        duration: 520,
        ease: "outQuad",
      });
    });
  };

  hero.addEventListener("pointerenter", () => {
    bounds = hero.getBoundingClientRect();
  });

  hero.addEventListener("pointermove", (event) => {
    bounds = bounds || hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) - 0.5;
    const y = ((event.clientY - bounds.top) / bounds.height) - 0.5;
    targetX = x * 1.35;
    targetY = y * 1.15;
    if (!frame) frame = window.requestAnimationFrame(apply);
  });

  hero.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
    bounds = null;
    if (!frame) frame = window.requestAnimationFrame(apply);
  });

  window.addEventListener("resize", () => {
    bounds = null;
  });
}

function sectionWrap(title, intro, inner, options = "") {
  const config = typeof options === "string" ? { className: options } : (options || {});
  const cls = config.className ? `section-block ${config.className}` : "section-block";
  const eyebrow = config.eyebrow || "Section";
  return `
    <section class="${cls}" data-reveal>
      <div class="section-heading">
        <div class="space-y-3">
          <span class="eyebrow">${esc(eyebrow)}</span>
          <h2 class="font-serif text-3xl text-ink-950 sm:text-4xl">${esc(title)}</h2>
        </div>
        <p class="max-w-3xl text-sm leading-7 text-ink-500 sm:text-base">${esc(intro)}</p>
      </div>
      ${inner}
    </section>
  `;
}

function renderStats(items) {
  return `<div class="metric-grid">${items.map((item) => `
    <article class="metric-card" data-reveal-item>
      <div class="text-2xl font-semibold text-ink-950">${esc(item[1])}</div>
      <div class="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-ink-500">${esc(item[0])}</div>
    </article>`).join("")}</div>`;
}

function renderPillRow(items) {
  if (!items || !items.length) return "";
  return `<div class="chip-row">${items.map((item) => `<span class="chip">${esc(item)}</span>`).join("")}</div>`;
}

function renderCards(items) {
  return `<div class="info-grid">${items.map((item) => `
    <article class="feature-card" data-reveal-item>
      ${item.image ? `<img class="mb-5 aspect-[16/10] w-full rounded-[1.25rem] object-cover" src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy">` : ""}
      <span class="text-xs font-semibold uppercase tracking-[0.24em] text-lab-700">${esc(item.meta)}</span>
      <h3 class="mt-3 font-serif text-2xl text-ink-950">${esc(item.title)}</h3>
      <p class="mt-3 text-sm leading-7 text-ink-500">${esc(item.text)}</p>
      ${renderPillRow(item.pills)}
    </article>`).join("")}</div>`;
}

function renderTimeline(items) {
  return `<div class="timeline-list">${items.map((item) => `
    <article class="timeline-item" data-reveal-item>
      <span class="inline-flex rounded-full bg-lab-600/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-lab-700">${esc(item[0])}</span>
      <h3 class="mt-4 font-serif text-2xl text-ink-950">${esc(item[1])}</h3>
      <p class="mt-3 text-sm leading-7 text-ink-500">${esc(item[2])}</p>
    </article>`).join("")}</div>`;
}

function renderMembers(items) {
  return `<div class="member-grid">${items.map((item) => `
    <article class="member-card" data-reveal-item>
      <div class="flex items-start gap-4">
        ${item.image ? `<img class="h-16 w-16 rounded-2xl object-cover" src="${esc(item.image)}" alt="${esc(item.name)}" loading="lazy">` : `<div class="grid h-16 w-16 place-items-center rounded-2xl bg-paper-100 text-lg font-semibold text-ink-900">${esc(initials(item.name))}</div>`}
        <div class="min-w-0">
          <span class="text-xs font-semibold uppercase tracking-[0.22em] text-lab-700">${esc(item.role)}</span>
          <h3 class="mt-2 font-serif text-2xl text-ink-950">${esc(item.name)}</h3>
          <p class="mt-3 text-sm leading-7 text-ink-500">${esc(item.text)}</p>
        </div>
      </div>
      ${item.link ? `<a class="mt-5 inline-flex rounded-full border border-ink-950 px-4 py-2 text-sm font-semibold text-ink-950 transition-colors duration-200 hover:bg-ink-950 hover:text-white" href="${esc(item.link)}">View profile</a>` : ""}
    </article>`).join("")}</div>`;
}

function renderPublications(groups) {
  return `<div class="publication-grid">${groups.map((group) => `
    <article class="publication-card" data-reveal-item>
      <div class="text-xs font-semibold uppercase tracking-[0.24em] text-lab-700">${esc(group.title)}</div>
      <ul class="mt-4 space-y-4">${group.items.map((entry) => `
        <li class="border-t border-paper-200 pt-4 first:border-t-0 first:pt-0">
          <h3 class="font-semibold text-ink-950">${esc(entry[1])}</h3>
          <p class="mt-1 text-sm text-ink-700">${esc(entry[0])}</p>
          <p class="mt-2 text-sm leading-7 text-ink-500">${esc(entry[2])}</p>
        </li>`).join("")}</ul>
    </article>`).join("")}</div>`;
}

function renderGallery(items) {
  return `<div class="gallery-grid">${items.map((item) => `
    <figure class="gallery-card" data-parallax="-18" data-reveal-item>
      <img class="aspect-[16/11] w-full object-cover" src="${esc(item[0])}" alt="${esc(item[1])}" loading="lazy">
      <figcaption class="px-5 py-4 text-sm text-ink-500">${esc(item[1])}</figcaption>
    </figure>`).join("")}</div>`;
}

function renderDetailList(items) {
  return `<div class="space-y-4">${items.map((item) => `
    <div class="rounded-[1.25rem] border border-paper-200 bg-white px-4 py-4">
      <div class="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">${esc(item[0])}</div>
      <p class="mt-2 text-sm leading-7 text-ink-500">${esc(item[1])}</p>
    </div>`).join("")}</div>`;
}

function renderFeatureSplit(feature) {
  return `
    <div class="story-grid">
      <article class="feature-card" data-reveal-item>
        <span class="text-xs font-semibold uppercase tracking-[0.24em] text-lab-700">${esc(feature.label)}</span>
        <h3 class="mt-3 font-serif text-3xl text-ink-950">${esc(feature.title)}</h3>
        <p class="mt-4 text-sm leading-7 text-ink-500">${esc(feature.text)}</p>
        <div class="mt-5">${renderDetailList(feature.points)}</div>
      </article>
      <figure class="overflow-hidden rounded-[1.75rem] border border-paper-200 bg-paper-100" data-parallax="-28" data-reveal-item>
        <img class="h-full min-h-full w-full object-cover" src="${esc(feature.image)}" alt="${esc(feature.title)}" loading="lazy">
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
    { kicker: profile.role, title: profile.name, image: profile.image },
    { themeKey: "profile", eyebrow: "People" }
  ) + sectionWrap(
    "Overview",
    "Current affiliation, focus, and working summary.",
    `
      <div class="profile-grid">
        <figure class="profile-photo" data-parallax="-24" data-reveal-item>
          <img class="aspect-[4/5] w-full object-cover" src="${esc(profile.image)}" alt="${esc(profile.name)}" loading="lazy">
        </figure>
        <article class="feature-card space-y-5" data-reveal-item>
          <div>
            <div class="text-xs font-semibold uppercase tracking-[0.22em] text-lab-700">${esc(profile.role)}</div>
            <h3 class="mt-3 font-serif text-3xl text-ink-950">${esc(profile.name)}</h3>
            <p class="mt-4 text-sm leading-7 text-ink-500">${esc(profile.summary)}</p>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-[1.25rem] border border-paper-200 bg-white px-4 py-4"><div class="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">Affiliation</div><div class="mt-2 text-sm leading-7 text-ink-700">${esc(profile.affiliation)}</div></div>
            <div class="rounded-[1.25rem] border border-paper-200 bg-white px-4 py-4"><div class="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">Focus</div><div class="mt-2 text-sm leading-7 text-ink-700">${esc(profile.focus)}</div></div>
            <div class="rounded-[1.25rem] border border-paper-200 bg-white px-4 py-4"><div class="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">Contact</div><div class="mt-2 text-sm leading-7 text-ink-700">${esc(profile.email || "On request")}</div></div>
            <div class="rounded-[1.25rem] border border-paper-200 bg-white px-4 py-4"><div class="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">Lab</div><div class="mt-2 text-sm leading-7 text-ink-700">HAX Lab</div></div>
          </div>
        </article>
      </div>
    `,
    { eyebrow: "Profile" }
  ) + sectionWrap(
    "Selected Highlights",
    "A concise slice of the member's current trajectory.",
    renderTimeline(profile.highlights),
    { eyebrow: "Highlights" }
  ) + sectionWrap(
    "Background",
    "Working interests, technical base, and current role.",
    `
      <div class="story-grid">
        <article class="feature-card" data-reveal-item>
          ${renderDetailList(profile.details)}
          ${renderPillRow(profile.skills)}
        </article>
        <article class="feature-card" data-reveal-item>
          <span class="text-xs font-semibold uppercase tracking-[0.24em] text-lab-700">Current Frame</span>
          <h3 class="mt-3 font-serif text-3xl text-ink-950">${esc(profile.role)} at HAX Lab</h3>
          <p class="mt-4 text-sm leading-7 text-ink-500">${esc(profile.focus)}</p>
          <p class="mt-4 text-sm leading-7 text-ink-500">${esc(profile.summary)}</p>
        </article>
      </div>
    `,
    { eyebrow: "Background" }
  );
}

function renderPage(pageKey) {
  const main = document.querySelector(".site-shell");
  if (!main) return;
  main.className = "site-shell page-shell";
  let html = "";

  if (pageKey === "home") {
    html += hero("Designing XR interaction that feels clear, embodied, and collaborative.", "HAX Lab studies immersive systems through usable interaction, multimodal coordination, collaborative workflows, accessible computing, and digital twin-linked applications.", ["XR", "HCI", "Collaboration", "Accessible Computing"], {
      title: "Lab Snapshot",
      text: "The lab stays close to real settings, from assistive mobility and forensics to industrial simulation and spatial computing systems.",
      items: [["Location", "Digital Building B111, KNUT"], ["Contact", "kim01@kumoh.ac.kr"], ["Current signal", "NRF Young Investigator Research Program"]],
    }, { kicker: "Current project", title: "Assistive XR and digital twin-linked systems", image: "assets/mirror/b39f33c30b09c769ac47.png" }, { themeKey: "home", eyebrow: "HAX Lab" });
    html += sectionWrap("Lab Snapshot", "A compact orientation to the lab's base and current mode.", renderStats(LAB_METRICS), { className: "section--tight", eyebrow: "Overview" });
    html += sectionWrap("Research Themes", "The lab returns to a small set of recurring questions about interaction, embodiment, and coordination.", renderCards(RESEARCH_TRACKS), { eyebrow: "Research" });
    html += sectionWrap("Featured Program", "A flagship direction that captures the lab's human-centered applied research style.", renderFeatureSplit(FEATURED_PROJECT), { eyebrow: "Current Program" });
    html += sectionWrap("Recent Signals", "Recent public milestones across grants, conferences, and publication activity.", renderTimeline(NEWS_ITEMS.slice(0, 6)), { eyebrow: "Updates" });
    html += sectionWrap("Selected Outputs", "Recent publication activity across conference and journal venues.", renderPublications(PUBLICATION_GROUPS), { eyebrow: "Publications" });
    html += sectionWrap("Around the Lab", "A visual slice of demos, conferences, and lab life.", renderGallery(GALLERY.slice(0, 4)), { eyebrow: "Culture" });
  } else if (pageKey === "news") {
    html += hero("Research updates, conference activity, and project milestones.", "The lab's public signal is shaped by conferences, publication outcomes, funded programs, and the steady addition of working systems.", ["Updates", "Conferences", "Projects"], {
      title: "Recent pattern",
      text: "Most recent updates cluster around VRST, ISMAR, funded projects, and publication outcomes during 2025 and 2026.",
      items: [["Latest", "2026.03.13 NRF Young Investigator Research Program"], ["Conference cycle", "VRST 2025 and ISMAR 2025"], ["Applied range", "Mobility, forensics, maintenance"]],
    }, { kicker: "Recent moment", title: "Conference visibility and applied programs", image: "assets/mirror/2023e0c74d0a9fbe3d74.jpg" }, { themeKey: "news", eyebrow: "News" });
    html += sectionWrap("At a Glance", "The current update flow is driven by research visibility and funded work.", renderStats([["Latest grant", "NRF Young Investigator"], ["Conference span", "VRST and ISMAR"], ["Project mode", "Applied XR plus AI"], ["Student signal", "Strong paper participation"]]), { className: "section--tight", eyebrow: "Overview" });
    html += sectionWrap("Timeline", "Recent updates in reverse chronological order.", renderTimeline(NEWS_ITEMS), { eyebrow: "Chronology" });
  } else if (pageKey === "people") {
    html += hero("A compact team building XR systems, interaction experiments, and applied prototypes.", "HAX Lab combines faculty direction, graduate research, undergraduate making, and project-driven collaboration inside a deliberately small working group.", ["Faculty", "Graduate", "Undergraduate", "Research Intern"], {
      title: "Team snapshot",
      text: "Current members cover research framing, system implementation, and lab execution across projects and conference output.",
      items: [["Director", "Youngwon Kim"], ["Graduate core", "Jemin Lee and Jeonghyeon Kim"], ["Current roster", "Hyeongjun Kang, Donghee Lee, Yoongi Nam"]],
    }, { kicker: "People", title: "Research plus build", image: "assets/mirror/962c9e7d31fd258ee777.jpg" }, { themeKey: "people", eyebrow: "People" });
    html += sectionWrap("Team Structure", "A quick view of the lab's current size and operating shape.", renderStats(PEOPLE_STATS), { className: "section--tight", eyebrow: "Roster" });
    html += sectionWrap("Core Members", "Faculty, graduate students, and current contributors with direct links to available profile pages.", renderMembers(CORE_MEMBERS), { eyebrow: "Members" });
    html += sectionWrap("Supporting Roles", "Additional context around the broader member network around the lab.", renderCards(SUPPORTING_MEMBERS), { eyebrow: "Context" });
  } else if (pageKey === "projects") {
    html += hero("Projects stay close to actual environments instead of ending as isolated demos.", "The portfolio spans assistive XR, fire-scene reconstruction, predictive maintenance, traffic analysis, and digital twin-linked spatial computing.", ["Applied XR", "Digital twin", "Forensics", "AI systems"], {
      title: "Project pattern",
      text: "Long-horizon funded research is balanced with shorter applied programs and institutional collaborations.",
      items: [["Flagship", "XR-Physical AI for visually impaired users"], ["Applied contexts", "Forensics, mobility, maintenance"], ["Partners", "NRF, NIA, NFS, KETI, KIDI"]],
    }, { kicker: "Portfolio", title: "From labs to real environments", image: "assets/mirror/aec8c549fa5d4f3f0234.png" }, { themeKey: "projects", eyebrow: "Projects" });
    html += sectionWrap("Selected Projects", "Current and recent projects show how the lab translates research questions into funded systems work.", renderCards(PROJECTS), { eyebrow: "Portfolio" });
    html += sectionWrap("Why This Matters", "The lab's applied mode is easiest to read through one focused example.", renderFeatureSplit(FEATURED_PROJECT), { eyebrow: "Featured" });
  } else if (pageKey === "research") {
    html += hero("Research is framed around how interaction becomes intuitive, coordinated, and usable in XR.", "The lab approaches immersive systems through concrete problems such as referencing, grasping, mobility, accessibility, embodiment, and collaboration.", ["Multimodal", "Embodied", "Collaborative", "Accessible"], {
      title: "Method pattern",
      text: "The lab builds working systems and evaluates them against real interaction questions instead of stopping at interface sketches.",
      items: [["Interaction", "Gesture, gaze, speech, touch"], ["Evaluation", "Performance, workload, presence"], ["Contexts", "Simulation, inclusion, collaboration"]],
    }, { kicker: "Research mode", title: "System building with evaluation", image: "assets/mirror/84f8f1bb489ec038666a.png" }, { themeKey: "research", eyebrow: "Research" });
    html += sectionWrap("Current Research Tracks", "The main directions that organize the lab's recent output.", renderCards(RESEARCH_TRACKS), { eyebrow: "Tracks" });
    html += sectionWrap("Working Method", "The lab's recurring way of moving from idea to evidence.", renderCards(METHODS), { eyebrow: "Method" });
  } else if (pageKey === "publications") {
    html += hero("Publications track both core XR questions and applied immersive system output.", "Recent papers cluster around collaborative XR, immersive interaction, body estimation, accessible navigation, and multimodal coordination.", ["VRST", "ISMAR", "IEEE Access", "Sensors"], {
      title: "Output snapshot",
      text: "The publication pattern shows a strong link between system building, evaluation, and practical design guidance.",
      items: [["Conference", "ACM VRST and IEEE ISMAR"], ["Journal", "IEEE Access, Sensors, Electronics"], ["Style", "System plus evaluation plus insight"]],
    }, { kicker: "Output", title: "Conference and journal rhythm", image: "assets/mirror/c6fb81300faee7cddb1c.jpg" }, { themeKey: "publications", eyebrow: "Publications" });
    html += sectionWrap("Selected Papers", "A compact publication board for the recent cycle of the lab.", renderPublications(PUBLICATION_GROUPS), { eyebrow: "Papers" });
    html += sectionWrap("Reading the Pattern", "What the recent output says about the lab's direction.", renderCards(PUBLICATION_CARDS), { eyebrow: "Interpretation" });
  } else if (pageKey === "awards") {
    html += hero("Recognition reflects engineering execution, applied research, and student-led output.", "Awards in the recent cycle sit close to capstone work, contests, and public-facing project quality.", ["Capstone", "Contest", "Recognition"], {
      title: "Recognition snapshot",
      text: "The recent award pattern shows the lab's work landing in both academic and practical contexts.",
      items: [["Recent", "Kit Engineering Fair 2025"], ["Student-led", "GameAlfy and AI Capstone"], ["Style", "Execution plus presentation"]],
    }, { kicker: "Recognition", title: "Where the work is being noticed", image: "assets/mirror/962c9e7d31fd258ee777.jpg" }, { themeKey: "awards", eyebrow: "Awards" });
    html += sectionWrap("Selected Recognition", "Recent awards and honors tied to work from the lab.", renderTimeline(AWARDS), { eyebrow: "Recognition" });
  } else if (pageKey === "gallery") {
    html += hero("The lab's visual record is built from demos, conferences, travel, celebrations, and making sessions.", "These moments show the rhythm of the lab across public presentation, prototyping, and shared studio time.", ["Conference", "Demo", "Studio", "Milestones"], {
      title: "Visual snapshot",
      text: "Recent images trace the cycle from project work to conference visibility and everyday lab culture.",
      items: [["Conference", "VRST, ISMAR, and CHI"], ["Lab life", "Celebrations, demos, reviews"], ["Cycle", "2024 and 2025 selected scenes"]],
    }, { kicker: "Gallery", title: "Selected scenes from the lab", image: "assets/mirror/7d0d6190edb2c5cba614.jpg" }, { themeKey: "gallery", eyebrow: "Gallery" });
    html += sectionWrap("Selected Scenes", "A curated visual record from the recent lab cycle.", renderGallery(GALLERY), { eyebrow: "Scenes" });
  } else if (pageKey === "courses") {
    html += hero("Teaching is tied to how students build, test, critique, and present immersive systems.", "The learning direction centers on XR prototyping, HCI, evaluation, research practice, and complete demo-oriented outputs.", ["XR prototyping", "HCI", "Research practice"], {
      title: "Learning snapshot",
      text: "Course-linked learning connects implementation, experimentation, and communication in one loop.",
      items: [["Undergraduate", "Interaction and XR foundations"], ["Graduate", "Seminar and research practice"], ["Format", "Prototype, evaluate, iterate"]],
    }, { kicker: "Teaching", title: "Making and critique together", image: "assets/mirror/e0d7080c5476cb494898.jpg" }, { themeKey: "courses", eyebrow: "Courses" });
    html += sectionWrap("Teaching Directions", "The lab's teaching flow centers on practical making and research communication.", renderCards(COURSES), { eyebrow: "Learning" });
  } else if (PROFILE_DATA[pageKey]) {
    html += renderProfile(pageKey);
  } else {
    html += hero("Human-Centered XR Lab", "HAX Lab explores immersive interaction, collaborative systems, and applied human-centered computing.", ["XR", "HCI", "Interaction"], {
      title: "Lab snapshot",
      text: "A compact research lab site centered on immersive interaction and real systems work.",
      items: [["Location", "Digital Building B111, KNUT"], ["Contact", "kim01@kumoh.ac.kr"], ["Focus", "Human-centered XR"]],
    }, undefined, { themeKey: pageKey, eyebrow: "HAX Lab" });
  }

  html += `<footer class="footer-card">&copy; ${new Date().getFullYear()} HAX Lab | Digital Building B111, Kumoh National Institute of Technology | kim01@kumoh.ac.kr</footer>`;
  main.innerHTML = html;
}

function initHeroScene() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  animate(".site-nav-wrap", {
    opacity: [0, 1],
    translateY: [-14, 0],
    duration: 620,
    ease: "outCubic",
  });
  animate(".js-hero-line", {
    opacity: [0, 1],
    translateY: [28, 0],
    duration: 900,
    delay: stagger(90),
    ease: "outExpo",
  });
  animate(".js-hero-panel", {
    opacity: [0, 1],
    translateY: [36, 0],
    duration: 1000,
    delay: stagger(120, { start: 180 }),
    ease: "outExpo",
  });
  animate(".js-hero-chip", {
    translateY: [0, -7],
    duration: 2200,
    delay: stagger(140),
    loop: true,
    alternate: true,
    ease: "inOutSine",
  });
  animate(".js-orb-a", {
    translateX: ["-2%", "3%"],
    translateY: ["-2%", "4%"],
    scale: [1, 1.08],
    duration: 5200,
    loop: true,
    alternate: true,
    ease: "inOutSine",
  });
  animate(".js-orb-b", {
    translateX: ["3%", "-2%"],
    translateY: ["2%", "-3%"],
    scale: [1.02, 0.94],
    duration: 6100,
    loop: true,
    alternate: true,
    ease: "inOutSine",
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      animate(entry.target, {
        opacity: [0, 1],
        translateY: [32, 0],
        duration: 820,
        ease: "outCubic",
      });
      const nested = entry.target.querySelectorAll("[data-reveal-item]");
      if (nested.length) {
        animate(nested, {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 680,
          delay: stagger(70, { start: 120 }),
          ease: "outCubic",
        });
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(32px)";
    element.querySelectorAll("[data-reveal-item]").forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(18px)";
    });
    revealObserver.observe(element);
  });

  const parallaxItems = [...document.querySelectorAll("[data-parallax]")].map((element) => ({
    element,
    animation: animate(element, {
      translateY: [Number(element.dataset.parallax || -20), Number(element.dataset.parallax || -20) * -1],
      duration: 1000,
      ease: "linear",
      autoplay: false,
    }),
  }));

  if (!parallaxItems.length) return;

  let ticking = false;
  const updateParallax = () => {
    ticking = false;
    const viewport = window.innerHeight;
    parallaxItems.forEach((item) => {
      const rect = item.element.getBoundingClientRect();
      const progress = clampValue((viewport - rect.top) / (viewport + rect.height), 0, 1);
      item.animation.seek(progress * 1000);
    });
  };

  updateParallax();
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateParallax);
  }, { passive: true });
  window.addEventListener("resize", updateParallax);

  initHeroPointerMotion();
}

function updateMeta(pageKey) {
  const meta = document.querySelector('meta[name="description"]');
  const profile = PROFILE_DATA[pageKey];
  const titles = {
    home: "HAX Lab | Human-Centered XR Lab",
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
  initScrollIndicator();
  initHeroScene();
}

init();
