// src/constants.ts

export const PROJECTS = [
  {
    id: 1,
    tags: [{ text: "AI", type: "normal" }, { text: "MCP", type: "normal" }, { text: "Playwright", type: "mint" }],
    title: "AI QA Agent",
    desc: "Built an AI-powered QA agent that reads natural-language requirements, explores live web applications via the Playwright Model Context Protocol (MCP), and generates executable Playwright tests using accessibility-tree snapshots. Implemented origin allowlisting and manual tool-call approval as safety guardrails.",
    videoUrl: "https://drive.google.com/file/d/1IyG4Y19xG7mBnqtT5oTFAAHE5agojX7J/preview",
    link: "https://github.com/Trushiii/AI-QA-Agent",
    linkText: "View Repository →"
  },
  {
    id: 2,
    tags: [{ text: "API", type: "normal" }, { text: "Postman", type: "mint" }],
    title: "API Test Suite",
    desc: "Production-grade API test automation with 19 requests and 34 assertions against a public REST API. Covers auth chaining, CRUD, schema validation, response-time checks, and security tests (SQL injection, XSS). Runs in CI via Newman + GitHub Actions with rich HTML reports.",
    videoUrl: "https://drive.google.com/file/d/1bVkeW6MDh7RzPPdd94iK8QgGRh6-HlOU/preview",
    link: "https://github.com/Trushiii/Api-test-suite",
    linkText: "View Repository →"
  },
  {
    id: 3,
    tags: [{ text: "Automation", type: "normal" }, { text: "Playwright", type: "mint" }],
    title: "Playwright E2E Framework",
    desc: "Production-grade test automation framework using Page Object Model, data-driven tests, cross-browser execution, and CI/CD via GitHub Actions. Tests a local e-commerce app with 14 test cases across login, inventory, cart, and checkout — running across 3 browsers for 42 total executions.",
    videoUrl: "https://drive.google.com/file/d/1c-MaQ9RwNJxWSNqfLLKlskO-9n2PiAMc/preview",
    link: "https://github.com/Trushiii/playwright-e2e-framework",
    linkText: "View Repository →"
  },
  {
    id: 4,
    tags: [{ text: "Education", type: "normal" }, { text: "QA/BA", type: "mint" }],
    title: "Univize",
    desc: "A university-centric social ecosystem for resource sharing. Owned QA strategy across 11 app screens and worked with developers to log and confirm defect fixes.",
    videoUrl: "https://drive.google.com/file/d/17YkBwZdJEb3_PVV6gq7u26x3DLU_MkZX/preview",
    link: "https://github.com/NightKing-V/FacultySocialApp",
    linkText: "View Repository →"
  },
  {
    id: 5,
    tags: [{ text: "Mobile", type: "normal" }, { text: "QA", type: "mint" }],
    title: "UniCollab",
    desc: "A task management mobile app helping university students organise coursework, deadlines, and personal tasks in one place.",
    videoUrl: "https://drive.google.com/file/d/1AYrp7TgNpeArY5LLJ3NRBfrEWjl7PPzv/preview",
    link: "https://github.com/SupunDisanayaka/UniCollab",
    linkText: "View Repository →"
  },
  {
    id: 6,
    tags: [{ text: "AI", type: "normal" }, { text: "NLP", type: "mint" }],
    title: "Sentiment Analyser",
    desc: "Integrated Reddit's API to collect real discussion data, then applied AI-based sentiment analysis to extract and classify opinion trends.",
    videoUrl: "https://drive.google.com/file/d/1WZuog8vs3mPaxyHV1Zu6VoJy5ibmx82M/preview",
    link: "https://github.com/Trushiii/SentimentAnalyser",
    linkText: "View Repository →"
  },
  {
    id: 7,
    tags: [{ text: "Complex Systems", type: "normal" }, { text: "ML", type: "mint" }],
    title: "Tumor Growth Simulation",
    desc: "A NetLogo simulation of tumor cell growth exported through BehaviorSpace and used to train a Random Forest classifier, deployed end to end as a live Streamlit app.",
    videoUrl: "https://drive.google.com/file/d/1fNKru38B-rfa0ptkZMXQU9T9wQBRCBRT/preview",
    link: "https://tumor-growth-predictor-stcs.streamlit.app/",
    linkText: "View Live App →"
  },
  {
    id: 8,
    tags: [{ text: "Complex Systems", type: "normal" }, { text: "Agent Tech", type: "mint" }],
    title: "Traffic & EV Charging Simulation",
    desc: "Extending NetLogo's Traffic Grid model with EV-specific logic — charging stations, battery levels, charging behaviour — to study how station placement affects congestion.",
    videoUrl: "https://drive.google.com/file/d/1UfQ57pf99LwsmxnorU3tVHH6FgwyoSqX/preview",
    link: "https://ev-traffic-app.streamlit.app/",
    linkText: "View Live App →"
  },
  {
    id: 9,
    tags: [{ text: "Web", type: "normal" }, { text: "Research Tool", type: "mint" }],
    title: "SpiceGarden",
    desc: "A restaurant ordering site built as a live data-collection instrument to study how prompt engineering shapes user interaction and feedback loops.",
    videoUrl: "https://drive.google.com/file/d/1_uf7xMATrlTfJp_P2TkeJETTWvKnktns/preview",
    link: "https://trushiii.github.io/SpiceGarden/",
    linkText: "View Live Web →"
  }
];

export const QA_ARTIFACTS = [
  {
    id: 1,
    type: "IEEE 829 Standard",
    icon: "FileCheck",
    title: "Master Test Plan",
    subtitle: "Web Architecture QA Strategy",
    desc: "Structured blueprint detailing system test strategy, scope, entry/exit criteria, execution schedule, and risk analysis matrices.",
    specs: ["Risk Matrix", "Entry/Exit Criteria", "Coverage Scope"],
    pdf: "/qa-test-plan.pdf"
  },
  {
    id: 2,
    type: "50+ Test Cases",
    icon: "CheckCheck",
    title: "Test Case Suite",
    subtitle: "Univize Platform Validation",
    desc: "Exhaustive functional and edge scenarios covering auth, CRUD flows, and permission boundaries using systematic test design techniques.",
    specs: ["Equivalence Classes", "Boundary Values", "Traceability"],
    pdf: "/Univize_Test_Cases.pdf"
  },
  {
    id: 3,
    type: "Defect Protocol",
    icon: "ShieldAlert",
    title: "Defect Template",
    subtitle: "Industry-Standard Bug Format",
    desc: "Deterministic reporting template with severity/priority grading, step-by-step reproduction guidelines, and environment logging requirements.",
    specs: ["Severity Matrix", "Repro Steps", "Proof Standards"],
    pdf: "/qa-bug-template.pdf"
  }
];

export const CERTIFICATES = [
   {
    id: 'selenium',
    title: 'Introduction to Selenium',
    issuer: 'Simplilearn',
    date: 'Issued: Oct 2026',
    category: 'Test Automation',
    image: '/certificates/selenium.jpg', 
    pdf: '/certificates/selenium.pdf',
    desc: 'Foundational credential validating core Selenium WebDriver concepts, browser automation, and UI element interaction for end-to-end testing.',
    skills: ['Selenium', 'WebDriver', 'UI Automation', 'E2E Testing']
  },
  {
    id: 'azure',
    title: 'Azure: Create a REST API using Node.js Serverless Functions',
    issuer: 'Coursera',
    date: 'Issued: 2026',
    category: 'Cloud & Serverless',
    image: '/certificates/azurea.png',
    pdf: '/certificates/azurea.pdf',
    desc: 'Specialized credential validating serverless RESTful API development using Azure Functions, Node.js HTTP triggers, schema design, and asynchronous cloud endpoints.',
    skills: ['Azure Functions', 'Node.js', 'REST API', 'Serverless', 'JSON Schema']
  },
  {
    id: 'web',
    title: 'Web Design for Beginners',
    issuer: 'CODL, University of Moratuwa',
    date: 'Issued: 2022',
    category: 'Frontend & UI Architecture',
    image: '/certificates/web.jpg',
    pdf: '/certificates/web.pdf',
    desc: 'Comprehensive study of modern responsive web design standards, semantic HTML5 structure, CSS3 styling techniques, layout algorithms, and cross-browser accessibility.',
    skills: ['HTML5', 'CSS3 Layouts', 'Responsive UI', 'Cross-browser QA']
  },
  {
    id: 'python',
    title: 'Python for Beginners',
    issuer: 'CODL, University of Moratuwa',
    date: 'Issued: 2022',
    category: 'Programming & Logic',
    image: '/certificates/python.jpg',
    pdf: '/certificates/python.pdf',
    desc: 'Core computational logic and programming principles using Python, covering data structures, object-oriented concepts, algorithmic problem solving, and script automation.',
    skills: ['Python 3', 'Data Structures', 'OOP Principles', 'Scripting']
  },
  {
    id: 'ga4',
    title: 'Google Analytics Certification',
    issuer: 'Google',
    date: 'Issued: 2026',
    category: 'Analytics & Telemetry',
    image: '/certificates/ga4.png',
    pdf: '/certificates/ga4.pdf',
    desc: 'Industry-standard Google qualification validating expertise in Google Analytics 4 (GA4), custom event instrumentation, funnel analysis, and user telemetry measurement.',
    skills: ['GA4 Instrumentation', 'Event Tracking', 'Conversion Funnels', 'Data Telemetry']
  },
  {
    id: 'playwright',
    title: 'Introduction to Playwright',
    issuer: 'Applitools — Test Automation University',
    date: 'Issued: 2026',
    category: 'Test Automation',
    image: '/certificates/playwright.png',
    pdf: '/certificates/playwright.pdf',
    desc: 'Advanced test automation credential covering Playwright end-to-end framework, resilient locator strategies, auto-wait mechanics, Page Object Model (POM), and CI pipeline execution.',
    skills: ['Playwright', 'Page Object Model', 'E2E Testing', 'Cross-Browser']
  },
  {
    id: 'postman',
    title: 'API Test Automation with Postman',
    issuer: 'Applitools — Test Automation University',
    date: 'Issued: 2026',
    category: 'API Quality Assurance',
    image: '/certificates/postman.png',
    pdf: '/certificates/postman.pdf',
    desc: 'Production-level API test automation mastering Postman test scripts, environment token chaining, collection runners, Newman CLI automation, and contract validation.',
    skills: ['Postman Collections', 'API Assertions', 'Newman CLI', 'Token Chaining']
  }
];

export const BLOGS = [
  {
    category: "QA & Automation",
    title: "How I QA'd a University Social Network: 71 Test Cases & 15 Modules",
    image: "/blogs/qa-process.jpg",
    readTime: "7 min read",
    link: "https://medium.com/@tharugandarawaththa/testing-a-university-social-network-71-test-cases-15-modules-and-what-i-learned-b17ec11044d9"
  },
  {
    category: "System Architecture",
    title: "Object Pooling: Reuse, Don't Lose Memory & Performance",
    image: "/blogs/object-pooling.jpg",
    readTime: "5 min read",
    link: "https://medium.com/@tharugandarawaththa/know-about-object-pooling-reuse-dont-lose-03bc53d3cf62"
  },
  {
    category: "Software Design",
    title: "Design Patterns Demystified: Singleton, Factory, and Observer in Action",
    image: "/blogs/design-patterns.jpg",
    readTime: "6 min read",
    link: "https://medium.com/@tharugandarawaththa/design-patterns-demystified-singleton-factory-and-observer-in-action-e556808030f8"
  },
  {
    category: "Code Quality",
    title: "From Spaghetti Code to Scalable Systems: SOLID OOP Principles",
    image: "/blogs/solid.jpg",
    readTime: "8 min read",
    link: "https://medium.com/@tharugandarawaththa/from-spaghetti-code-to-scalable-systems-solid-oop-principles-0bca2cc7323b"
  },
  {
    category: "Game Engineering",
    title: "Why Object-Oriented Programming is a Game Developer's Best Friend",
    image: "/blogs/oop.jpeg",
    readTime: "5 min read",
    link: "https://medium.com/@tharugandarawaththa/why-object-oriented-programming-is-a-game-developers-best-friend-c8b0d14bba40"
  },
  {
    category: "Interactive Systems",
    title: "Decoding Gaming Genres: A Taxonomy of Digital Play",
    image: "/blogs/game-genres.jpg",
    readTime: "4 min read",
    link: "https://medium.com/@tharugandarawaththa/decoding-gaming-genres-a-taxonomy-of-digital-play-08c8ebd6b960"
  }
];