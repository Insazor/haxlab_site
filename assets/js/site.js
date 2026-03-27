import { animate, stagger } from "../vendor/animejs/anime.esm.js";

const PRIMARY_NAV_ITEMS = [
  ["research", "research.html", "Research"],
  ["projects", "projects.html", "Projects"],
  ["publications", "publications.html", "Publications"],
  ["people", "people.html", "People"],
  ["contact", "index.html#contact", "Contact"],
];

const SECONDARY_NAV_ITEMS = [
  ["news", "news.html", "News"],
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
    recordSections: [
      {
        title: "Academic Direction",
        items: [
          ["Affiliation", "Department of Computer Software Engineering, Kumoh National Institute of Technology."],
          ["Research", "XR, VR, AR, MR, HCI, and metaverse systems grounded in usable interaction."],
          ["Current frame", "Building immersive systems that hold up in evaluation as well as demonstration."],
        ],
      },
      {
        title: "Academic Service",
        items: [
          ["2026", "IEEE VR 2026 Finance Chair."],
          ["2026", "IEEE APMAR 2026 Local Organization Chair."],
          ["2025", "IEEE ISMAR 2025 Doctoral Consortium Chair."],
        ],
      },
      {
        title: "Editorial and Review",
        items: [
          ["Associate Editor", "Journal of Information and Communication Convergence Engineering (JICCE)."],
          ["Associate Editor", "Journal of Digital Contents Society."],
          ["Reviewer", "IEEE TVCG, IEEE VR, ACM CHI, ACM ISS, ACM VRST, IEEE APMAR, Smart Media Journal, and Journal of the Korea Computer Graphics Society."],
        ],
      },
      {
        title: "Talks and Invited Visits",
        items: [
          ["2024.11", "National Forensic Service."],
          ["2023", "Wonkwang University, Chonnam National University, and Mokpo National University."],
          ["2022", "Korean Institute of Information Scientists and Engineers and Wonkwang University."],
        ],
      },
      {
        title: "Awards and Honors",
        items: [
          ["2025", "Outstanding Teaching Professor 2025-2."],
          ["2024", "Outstanding Teaching Professor 2024-2."],
          ["2022", "Outstanding Employee Award, KETI."],
        ],
      },
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
    recordSections: [
      {
        title: "Role and Focus",
        items: [
          ["Position", "M.S. Student at HAX Lab, Kumoh National Institute of Technology."],
          ["Research", "Virtual reality, games, and convergence content systems."],
          ["Working style", "Turns interaction ideas into testable immersive systems with strong implementation detail."],
        ],
      },
      {
        title: "Awards and Honors",
        items: [
          ["2024.12", "AI Capstone Design Competition Outstanding Prize."],
          ["2024.11", "Korean Digital Contents Society Undergraduate Paper Competition."],
        ],
      },
      {
        title: "Skills",
        items: [
          ["Languages", "Korean (native), English."],
          ["Programming", "Java, C#, C++, and Python."],
          ["Technical mode", "VR prototyping, game-oriented implementation, and interaction system development."],
        ],
      },
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
    recordSections: [
      {
        title: "Role and Focus",
        items: [
          ["Position", "M.S. Student at HAX Lab, Kumoh National Institute of Technology."],
          ["Research", "Collaboration, multimodal interaction, and accessible immersive systems."],
          ["Current direction", "Studies how people coordinate, refer, and communicate clearly in shared XR environments."],
        ],
      },
      {
        title: "Research Practice",
        items: [
          ["Core topic", "Object reference clarity and multimodal coordination in collaborative XR."],
          ["System work", "Prototype construction, evaluation design, and paper-facing iteration."],
          ["Lab role", "Graduate research core across collaboration-focused XR topics."],
        ],
      },
      {
        title: "Skills",
        items: [
          ["Languages", "Korean (native), English."],
          ["Technical base", "Multimodal XR, study design, system prototyping, and academic writing."],
        ],
      },
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
    recordSections: [
      {
        title: "Role and Focus",
        items: [
          ["Position", "Undergraduate Student at HAX Lab, Kumoh National Institute of Technology."],
          ["Research", "Immersive technologies and XR content production."],
          ["Current role", "Contributes to ongoing immersive systems work through prototype and content support."],
        ],
      },
      {
        title: "Experience",
        items: [
          ["Since 2024", "Participating in undergraduate research connected to current lab projects."],
          ["Current work", "XR content prototyping, implementation support, and experiment preparation."],
        ],
      },
      {
        title: "Skills",
        items: [
          ["Languages", "Korean (native), English."],
          ["Technical base", "XR content, implementation, prototype support, and testing."],
        ],
      },
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
    recordSections: [
      {
        title: "Role and Focus",
        items: [
          ["Position", "Undergraduate Student at HAX Lab, Kumoh National Institute of Technology."],
          ["Research", "Metaverse content, XR games, and practical systems implementation."],
          ["Lab role", "A newer member contributing to prototype and engineering-heavy tasks."],
        ],
      },
      {
        title: "Experience",
        items: [
          ["2025.10", "2026 ICPC Asia Korea National First Round."],
          ["2025.04", "HackTheon Sejong international student cybersecurity competition."],
        ],
      },
      {
        title: "Awards and Honors",
        items: [
          ["2025.11", "Kit Engineering Fair 2025 encouragement award."],
        ],
      },
      {
        title: "Skills",
        items: [
          ["Languages", "Korean (native), English."],
          ["Programming", "Python, Java, C++, and FastAPI."],
          ["Systems", "Docker, Linux, MySQL, and Proxmox VE."],
        ],
      },
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
    recordSections: [
      {
        title: "Role and Focus",
        items: [
          ["Position", "Academic break, still part of the broader HAX Lab network."],
          ["Research", "XR prototype development and implementation support."],
          ["Contribution", "Implementation-oriented work across developing ideas and working demos."],
        ],
      },
      {
        title: "Experience",
        items: [
          ["2024", "Joined the lab during the early build-out of the current member cohort."],
          ["Recent", "Supported immersive implementation and iterative development work."],
          ["Current", "Remains part of the lab story through prototype support and technical continuity."],
        ],
      },
      {
        title: "Skills",
        items: [
          ["Languages", "Korean (native), English."],
          ["Technical base", "XR prototyping, implementation, iteration, and support."],
        ],
      },
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
  nav.className = "hidden w-full flex-col gap-2 pt-3 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-2 lg:pt-0";
  const primaryMarkup = PRIMARY_NAV_ITEMS.map(([key, href, label]) => {
    const active = key === activeKey;
    const className = active ? "nav-link nav-link-active" : "nav-link";
    return `<a class="${className}" href="${href}"${active ? ' aria-current="page"' : ""}>${esc(label)}</a>`;
  }).join("");
  const secondaryMarkup = SECONDARY_NAV_ITEMS.map(([key, href, label]) => {
    const active = key === activeKey;
    return `<a class="utility-link${active ? " utility-link-active" : ""}" href="${href}"${active ? ' aria-current="page"' : ""}>${esc(label)}</a>`;
  }).join("");
  const utilityOpen = SECONDARY_NAV_ITEMS.some(([key]) => key === activeKey) ? " open" : "";
  nav.innerHTML = `
    <div class="nav-primary-row">${primaryMarkup}</div>
    <details class="nav-utility"${utilityOpen}>
      <summary class="utility-summary">More</summary>
      <div class="utility-menu">${secondaryMarkup}</div>
    </details>
  `;
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
  const actions = renderActionLinks(options.actions, "dark");
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
          ${actions}
        </div>
        <div class="relative z-10 space-y-4 js-hero-layer" data-hero-depth="20">
          <aside class="js-hero-panel js-hero-layer hero-panel-compact rounded-[2rem] border border-white/12 bg-white/[0.08] p-5 backdrop-blur" data-hero-depth="24">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">${esc(panel.title)}</p>
            ${panel.text ? `<p class="mt-3 text-sm leading-7 text-white/68">${esc(panel.text)}</p>` : ""}
            <div class="mt-4 space-y-3">
              ${panel.items.map((item) => `
                <div class="hero-panel-row">
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
  const id = config.id ? ` id="${esc(config.id)}"` : "";
  const actions = config.actions ? `<div class="section-actions">${config.actions}</div>` : "";
  return `
    <section${id} class="${cls}" data-reveal>
      <div class="section-heading">
        <div class="space-y-3">
          <span class="eyebrow">${esc(eyebrow)}</span>
          <h2 class="font-serif text-3xl text-ink-950 sm:text-4xl">${esc(title)}</h2>
        </div>
        <div class="section-heading__aside">
          <p class="max-w-3xl text-sm leading-7 text-ink-500 sm:text-base">${esc(intro)}</p>
          ${actions}
        </div>
      </div>
      ${inner}
    </section>
  `;
}

function renderActionLinks(items, tone = "light") {
  if (!items || !items.length) return "";
  return `<div class="hero-actions">${items.map((item) => {
    const variant = item.variant === "secondary" ? "button-secondary" : (tone === "dark" ? "button-primary button-primary-dark" : "button-primary");
    return `<a class="${variant}" href="${esc(item.href)}">${esc(item.label)}</a>`;
  }).join("")}</div>`;
}

function renderInlineAction(label, href) {
  return `<a class="inline-action-link" href="${esc(href)}">${esc(label)}</a>`;
}

function renderAnchorNav(items) {
  return `
    <nav class="anchor-nav" aria-label="Homepage sections" data-reveal>
      ${items.map((item) => `<a class="anchor-link" href="${esc(item.href)}">${esc(item.label)}</a>`).join("")}
    </nav>
  `;
}

function renderCompactSignals(items, options = {}) {
  const list = items.slice(0, options.limit || 4);
  return `
    <div class="signal-list">
      ${list.map((item) => `
        <article class="signal-item" data-reveal-item>
          <div class="signal-date">${esc(item[0])}</div>
          <div class="space-y-2">
            <h3 class="signal-title">${esc(item[1])}</h3>
            <p class="signal-copy">${esc(item[2])}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function flattenPublications(groups) {
  return groups.flatMap((group) => group.items.map((item) => ({
    group: group.title,
    venue: item[0],
    title: item[1],
    authors: item[2],
  })));
}

function renderPublicationPreview(groups, options = {}) {
  const items = flattenPublications(groups).slice(0, options.limit || 4);
  return `
    <div class="output-preview-grid">
      ${items.map((item) => `
        <article class="output-card" data-reveal-item>
          <div class="output-meta">
            <span>${esc(item.group)}</span>
            <span>${esc(item.venue)}</span>
          </div>
          <h3 class="output-title">${esc(item.title)}</h3>
          <p class="output-authors">${esc(item.authors)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderGalleryPreview(items, options = {}) {
  const list = items.slice(0, options.limit || 3);
  return `
    <div class="gallery-preview-grid">
      ${list.map((item) => `
        <figure class="gallery-preview-card" data-parallax="-14" data-reveal-item>
          <img class="aspect-[16/11] w-full object-cover" src="${esc(item[0])}" alt="${esc(item[1])}" loading="lazy">
          <figcaption class="gallery-caption">${esc(item[1])}</figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function renderFeaturedProgram(feature) {
  return `
    <div class="featured-program-grid">
      <article class="feature-lead" data-reveal-item>
        <span class="text-xs font-semibold uppercase tracking-[0.24em] text-lab-700">${esc(feature.label)}</span>
        <h3 class="mt-3 font-serif text-3xl text-ink-950 sm:text-[2.2rem]">${esc(feature.title)}</h3>
        <p class="mt-4 text-sm leading-7 text-ink-500 sm:text-base">${esc(feature.text)}</p>
        <div class="feature-highlight-list">
          ${feature.points.map((item) => `
            <div class="feature-highlight-item">
              <div class="feature-highlight-key">${esc(item[0])}</div>
              <p class="feature-highlight-copy">${esc(item[1])}</p>
            </div>
          `).join("")}
        </div>
        <div class="hero-actions">
          <a class="button-primary" href="projects.html">View Projects</a>
          <a class="button-secondary" href="research.html">Research Overview</a>
        </div>
      </article>
      <figure class="feature-visual" data-parallax="-22" data-reveal-item>
        <img class="aspect-[5/4] w-full object-cover" src="${esc(feature.image)}" alt="${esc(feature.title)}" loading="lazy">
        <figcaption class="feature-visual-caption">
          <span class="feature-visual-kicker">Current flagship direction</span>
          <span class="feature-visual-copy">Assistive XR, spatial reconstruction, and digital twin-guided mobility support.</span>
        </figcaption>
      </figure>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer id="contact" class="footer-card">
      <div class="footer-grid">
        <div class="space-y-3">
          <span class="eyebrow">Contact</span>
          <h2 class="font-serif text-2xl text-ink-950">HAX Lab</h2>
          <p class="text-sm leading-7 text-ink-500">Human-centered XR systems research at Kumoh National Institute of Technology.</p>
        </div>
        <div class="footer-contact-list">
          <a class="footer-link" href="mailto:kim01@kumoh.ac.kr">kim01@kumoh.ac.kr</a>
          <p>Digital Building B111</p>
          <p>Kumoh National Institute of Technology</p>
        </div>
        <nav class="footer-nav" aria-label="Secondary">
          ${SECONDARY_NAV_ITEMS.map((item) => `<a class="footer-link" href="${esc(item[1])}">${esc(item[2])}</a>`).join("")}
        </nav>
      </div>
      <div class="footer-meta">
        <span>&copy; ${new Date().getFullYear()} HAX Lab</span>
        <span>Human-Centered XR Systems</span>
      </div>
    </footer>
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

function renderCards(items, options = {}) {
  const maxPills = options.maxPills || 0;
  const textClass = options.textClass || "";
  const titleClass = options.titleClass || "";
  const cardClass = options.cardClass || "";
  return `<div class="info-grid">${items.map((item) => `
    <article class="${["feature-card", cardClass].filter(Boolean).join(" ")}" data-reveal-item>
      ${item.image ? `<img class="mb-5 aspect-[16/10] w-full rounded-[1.25rem] object-cover" src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy">` : ""}
      <span class="text-xs font-semibold uppercase tracking-[0.24em] text-lab-700">${esc(item.meta)}</span>
      <h3 class="${["mt-3 font-serif text-2xl text-ink-950", titleClass].filter(Boolean).join(" ")}">${esc(item.title)}</h3>
      <p class="${["mt-3 text-sm leading-7 text-ink-500", textClass].filter(Boolean).join(" ")}">${esc(item.text)}</p>
      ${renderPillRow(maxPills ? (item.pills || []).slice(0, maxPills) : item.pills)}
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

function filterPublicationsByAuthor(name) {
  return PUBLICATION_GROUPS
    .map((group) => ({
      title: group.title,
      items: group.items.filter((entry) => String(entry[2] || "").includes(name)),
    }))
    .filter((group) => group.items.length);
}

function renderRecordSections(sections) {
  if (!sections || !sections.length) return "";
  return `<div class="record-grid">${sections.map((section) => `
    <article class="record-card" data-reveal-item>
      <div class="text-xs font-semibold uppercase tracking-[0.22em] text-lab-700">${esc(section.title)}</div>
      <div class="record-list">
        ${section.items.map((item) => `
          <div class="record-item">
            <div class="record-item-label">${esc(item[0])}</div>
            <p class="record-item-copy">${esc(item[1])}</p>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("")}</div>`;
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
  const profilePublications = filterPublicationsByAuthor(profile.name);
  const recordIntro = profile.role === "Director"
    ? "Academic service, invited activity, and the research-facing record around the lab."
    : "A fuller view of experience, skills, outputs, and current working trajectory.";
  return hero(
    profile.name,
    profile.summary,
    [profile.role, "People", "HAX Lab"],
    {
      title: "Profile Snapshot",
      text: "A compact view of the member's role, focus, and current contribution inside the lab.",
      items: [["Role", profile.role], ["Focus", profile.focus], ["Contact", profile.email || "On request"]],
    },
    "",
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
    "Detailed Record",
    recordIntro,
    renderRecordSections(profile.recordSections || []),
    { eyebrow: "Record" }
  ) + (profilePublications.length ? sectionWrap(
    "Publications",
    "Outputs tied directly to this profile from the current lab publication list.",
    renderPublications(profilePublications),
    { eyebrow: "Outputs" }
  ) : "");
}

function renderPage(pageKey) {
  const main = document.querySelector(".site-shell");
  if (!main) return;
  main.className = "site-shell page-shell";
  let html = "";

  if (pageKey === "home") {
    html += hero("Designing XR interaction that feels clear, embodied, and collaborative.", "HAX Lab studies immersive systems through usable interaction, multimodal coordination, collaborative workflows, accessible computing, and digital twin-linked applications.", ["XR systems", "HCI", "Collaborative environments"], {
      title: "Quick Info",
      text: "",
      items: [["Location", "Digital Building B111, KNUT"], ["Contact", "kim01@kumoh.ac.kr"], ["Current signal", "NRF Young Investigator Research Program"]],
    }, "", {
      themeKey: "home",
      eyebrow: "HAX Lab",
      actions: [
        { href: "#research-themes", label: "Explore Research" },
        { href: "publications.html", label: "View Publications", variant: "secondary" },
      ],
    });
    html += renderAnchorNav([
      { href: "#research-themes", label: "Research Themes" },
      { href: "#featured-program", label: "Featured Program" },
      { href: "#selected-outputs", label: "Selected Outputs" },
      { href: "#recent-signals", label: "Recent Signals" },
      { href: "#around-the-lab", label: "Around the Lab" },
    ]);
    html += sectionWrap("Research Themes", "A compact view of the recurring questions shaping the lab's current work.", renderCards(RESEARCH_TRACKS, { maxPills: 2, textClass: "line-clamp-2", titleClass: "text-[1.7rem]", cardClass: "feature-card--compact" }), { id: "research-themes", className: "section--feature section--tight-top", eyebrow: "Research" });
    html += sectionWrap("Featured Program", "A flagship direction that captures the lab's human-centered applied research style.", renderFeaturedProgram(FEATURED_PROJECT), { id: "featured-program", className: "section--feature", eyebrow: "Current Program" });
    html += sectionWrap("Selected Outputs", "A short publication preview that reflects the lab's recent conference and journal rhythm.", renderPublicationPreview(PUBLICATION_GROUPS, { limit: 4 }), { id: "selected-outputs", className: "section--compact", eyebrow: "Publications", actions: renderInlineAction("View all publications", "publications.html") });
    html += sectionWrap("Recent Signals", "A quick look at current milestones across grants, conferences, and project activity.", renderCompactSignals(NEWS_ITEMS, { limit: 4 }), { id: "recent-signals", className: "section--compact", eyebrow: "Updates", actions: renderInlineAction("View all signals", "news.html") });
    html += sectionWrap("Around the Lab", "A restrained visual preview of demos, conferences, and everyday lab culture.", renderGalleryPreview(GALLERY, { limit: 3 }), { id: "around-the-lab", className: "section--compact", eyebrow: "Culture", actions: renderInlineAction("View gallery", "gallery.html") });
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

  html += renderFooter();
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
