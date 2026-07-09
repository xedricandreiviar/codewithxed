import type { NavLink, Project, SocialLink, ExperienceEntry, EventEntry } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "linkedin", href: "https://www.linkedin.com/in/xedric-andrei-viar-83806b396/" },
  { platform: "github", href: "https://github.com/xedricandreiviar" },
  { platform: "twitter", href: "https://twitter.com" },
  { platform: "instagram", href: "https://instagram.com" },
];

export const SKILLS: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "SQL",
  "Python",
  "Node.js",
  "Tailwind CSS",
  "Java",
];

export const PROJECTS: Project[] = [
  {
    title: "Xiron",
    description:
      "Xiron is a Progressive Web App for logging workouts and tracking strength progress over time. It works fully offline — workouts log locally and sync automatically once the device reconnects — backed by a custom-built PHP REST API and MySQL database with JWT authentication, email verification, and password reset. The frontend is vanilla JavaScript (ES modules) with a service worker for offline caching and installability, and the app includes a gamification layer (points, achievements, streaks) to keep users motivated. Deployed independently on a live production domain with HTTPS, rate limiting, and CSRF protection.",
    image: "/images/project-1.png",
    tag: "Fitness App",
    status: "in-progress",
    info: [
      { label: "Year", value: "2026" },
      { label: "Role", value: "Full-stack Developer" },
    ],
    links: [
      { label: "Live Demo", href: "https://xiron.cu.ma", icon: "arrow" },
    ],
  },
  {
    title: "Coffee Chapters",
    description:
      "Coffee Chapters is a full-stack ordering platform built for a fictional Philippine coffee shop, covering the entire flow from browsing the menu to order tracking and admin management. Customers can place orders, upload proof of payment for GCash or Maya, and receive automated email receipts. The system correctly handles Philippine-specific pricing rules — BIR-compliant VAT and Senior Citizen/PWD discounts — along with a cascading address selector for Metro Manila and nearby provinces. On the backend, an admin dashboard provides sales analytics and order management through interactive charts.",
    image: "/images/project-2.png",
    tag: "Coffee Shop",
    status: "in-progress",
    info: [
      { label: "Year", value: "2026" },
      { label: "Role", value: "Full-stack Developer" },
    ],
    links: [
      { label: "Live Demo", href: "https://coffeechapters.freedev.app", icon: "arrow" },
    ],
  },
];

export const EXPERIENCES: ExperienceEntry[] = [
  {
    title: "Crew Member",
    company: "McDonald's",
    dateRange: "Aug 2025 — Dec 2025",
    type: "part-time",
    description:
      "Developed strong communication and teamwork skills in a high-volume, fast-paced environment. Cross-trained across all stations within three months — from kitchen operations to front counter and drive-thru — and consistently performed at a high level under pressure during peak hours.",
    achievements: [
      "Cross-trained and certified on all stations in under 3 months",
      "Handled peak-hour rushes while maintaining speed and order accuracy",
      "Built strong rapport with team members through clear, efficient communication",
    ],
    tools: ["Teamwork", "Communication", "Time Management", "Multitasking", "Customer Service"],
    image: "/images/exp-1.png",
  },
  {
    title: "Data Encoder",
    company: "Cruz Rabe Maternity and General Hospital",
    dateRange: "Jan 2025 — Feb 2025",
    type: "internship",
    description:
      "Handled data encoding for the hospital's drug testing department during a 20-day work immersion program. Responsible for accurately inputting patient records and test requests into the hospital system, ensuring data integrity and confidentiality under strict deadlines.",
    achievements: [
      "Processed and encoded patient drug test records with high accuracy over a 20-day period",
      "Maintained strict confidentiality handling sensitive medical information",
      "Adapted quickly to hospital workflows and administrative procedures",
    ],
    tools: ["Data Entry", "Attention to Detail", "MS Office", "Record Management", "Confidentiality"],
    image: "/images/exp-2.png",
  },
  {
    title: "Data Analyst",
    company: "PESO — General Service Office, City Hall",
    dateRange: "20-Day Student Contract",
    type: "internship",
    description:
      "Analyzed and tracked public inquiries at the General Service Office under PESO (Public Employment Service Office). Categorized citizen requests to identify recurring issues and produce reports that helped the office understand demand patterns and allocate resources accordingly.",
    achievements: [
      "Categorized and tracked hundreds of citizen inquiries for trend analysis",
      "Produced summary reports identifying the most common public service requests",
      "Helped the office visualize workload distribution across inquiry types",
    ],
    tools: ["Data Analysis", "MS Excel", "Record Keeping", "Report Writing", "Problem Categorization"],
    image: "/images/exp-3.png",
  },
];

export const EVENTS: EventEntry[] = [
  {
    title: "Kiro Workshop Week 1 — 10-Week Series",
    organizer: "AWS User Group Philippines",
    date: "June 2026",
    description:
      "Attended the first session of a 10-week Kiro Workshop held at AWS HQ, Arthaland BGC (15th Floor). Discovered Kiro for the first time and explored a completely different approach to software development — from defining applications with Specs to guiding AI output with Steering and Hooks. Built Flappy Kiro as a hands-on project and received 1,000 Kiro credits to keep experimenting.",
    type: "workshop",
    learned: [
      "Specs — defining apps from requirements to implementation using AI",
      "Steering & Hooks — guiding AI for structured, maintainable output",
      "Hands-on project: Built and deployed Flappy Kiro to GitHub",
      "Discovered how AI-assisted workflows change project planning",
    ],
    image: "/images/event-1.png",
  },
  {
    title: "Kiro Workshop Week 2 — Figma to Portfolio",
    organizer: "AWS User Group Philippines",
    date: "July 2026",
    description:
      "Explored how Kiro connects with Figma to accelerate development workflows. Built a personalized, game-inspired portfolio from a Figma design in roughly 30 minutes. Also learned how Kiro integrates with third-party tools to streamline repetitive tasks, letting developers focus on building. Connected with mentors and the Data Engineering Pilipinas community after the session.",
    type: "workshop",
    learned: [
      "Figma-to-code workflow using Kiro for rapid prototyping",
      "Third-party tool integrations within Kiro for smoother development",
      "Turning a monotone layout into an interactive, personalized portfolio",
      "The value of community — met DEP admin who enabled my DataCamp scholarship",
    ],
    image: "/images/event-2.png",
  },
  {
    title: "Ascend to Cloud — Career & Community",
    organizer: "Tempest Group",
    date: "July 2026",
    description:
      "Attended a career-focused tech event at AWS HQ, Arthaland BGC. Learned that success in tech isn't just about code — it's about community involvement, giving back, and augmenting work with AI. Networked with professionals, participated in the Q&A (got called twice), and left with new connections, career advice, and a renewed motivation to grow as a developer.",
    type: "conference",
    learned: [
      "Career building — what employers look for beyond technical skills",
      "Community involvement as a resume differentiator",
      "Learning to augment development work with AI",
      "Networking and the value of showing up and asking questions",
    ],
    image: "/images/event-3.png",
  },
  {
    title: "Kiro BuildKnights — Terminal First Development",
    organizer: "AWS User Group (AWSUG)",
    date: "July 2026",
    description:
      "Learned how to use the Kiro CLI for faster, terminal-first development. Discovered practical workflow tips like Ctrl+J for multiline prompts, and how the CLI Plan approach enables rapid development when you already have a clear direction. Built BudgetWise, a budgeting app, using the Kiro CLI to put the concepts into practice.",
    type: "workshop",
    learned: [
      "Kiro CLI workflow — terminal-first development for speed",
      "CLI Plan vs Spec-Driven workflow and when to use each",
      "\"You are the pilot\" — AI assists, but the developer leads",
      "Hands-on project: Built BudgetWise budgeting app via Kiro CLI",
    ],
    image: "/images/event-4.png",
  },
];

export const SITE_CONFIG = {
  name: "Xedric Andrei Viar",
  email: "xedricandreiviar@gmail.com",
  heroHeading: "hi, i am\nXedric Andrei Viar.",
  heroSubtitle:
    "A 2ND YEAR COMPUTER SCIENCE STUDENT DEDICATED TO LEARN, PASSIONATE ABOUT CODING, AND TAKE ON CHALLENGES",
  aboutHeading: "I am a full-stack web developer based in Taguig City, Philippines. Currently a Computer Science student at the University of Makati.",
  aboutDescription:
    "I build full-stack web apps from scratch — database design, backend APIs, and frontend, all the way to live deployment. Comfortable working independently across the whole stack and picking up new tools fast. Currently building Xiron, an offline-first fitness tracking PWA, and Coffee Chapters, a full ordering system with local payment integration. While I'm not coding, I'm usually at the gym or grinding freelance projects on the side. Always leveling up new skills.",
  copyright: "© 2026 Xedric Andrei Viar",
};
