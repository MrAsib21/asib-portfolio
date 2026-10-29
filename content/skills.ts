export interface SkillItem {
  name: string;
  context: string;
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  name: string;
  shortLabel: string;
  colorTheme: "yellow" | "pink" | "blue" | "green" | "orange";
  rotationClass: string;
  pinLocation: string;
  tagline: string;
  honestNote: string;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "web-wordpress",
    name: "Web & WordPress Architecture",
    shortLabel: "Web & WordPress",
    colorTheme: "yellow",
    rotationClass: "-rotate-2",
    pinLocation: "top-right",
    tagline: "Fast frontend interfaces, semantic markup, and reliable WordPress systems without plugin bloat.",
    honestNote:
      "I treat WordPress as a serious publishing engine, not an excuse to install 50 visual builders. For custom web builds, I prioritize clean HTML, sub-second LCP, and dependable component structures.",
    skills: [
      { name: "Next.js / React", context: "App router, SSR, server actions, dynamic pages", highlight: true },
      { name: "TypeScript", context: "Strict typing, interface design, robust API models", highlight: true },
      { name: "WordPress Block API & Theme Dev", context: "Custom blocks, PHP 8.3, REST API & headless setups", highlight: true },
      { name: "Tailwind CSS & Modern CSS", context: "Grid, flexbox, custom properties, responsive systems", highlight: true },
      { name: "Performance & Core Web Vitals", context: "Asset optimization, edge caching, DOM reduction", highlight: true },
      { name: "PHP & Bedrock", context: "Modern WordPress directory architectures, Composer", highlight: false },
      { name: "WooCommerce Customization", context: "Checkout flows, payment gateways, schema overrides", highlight: false },
    ],
  },
  {
    id: "software-engineering",
    name: "Software Engineering & Systems",
    shortLabel: "Software Eng",
    colorTheme: "blue",
    rotationClass: "rotate-1",
    pinLocation: "top-left",
    tagline: "Disciplined software principles, clean REST/GraphQL APIs, and maintainable application logic.",
    honestNote:
      "Graduating in Software Engineering taught me how systems behave at scale: database indexing, state boundaries, error budgets, and how to write code that another human can read six months later.",
    skills: [
      { name: "System Architecture", context: "Modular separation of concerns, DRY patterns, microservices", highlight: true },
      { name: "REST & API Design", context: "Predictable endpoints, idempotency, structured JSON payloads", highlight: true },
      { name: "Relational & NoSQL Databases", context: "PostgreSQL, MySQL, SQLite, query optimization", highlight: true },
      { name: "Node.js & Express / NestJS", context: "Backend services, authentication, task queues", highlight: false },
      { name: "Git Workflow & CI/CD", context: "Semantic commits, automated linting, GitHub Actions", highlight: true },
      { name: "Design Patterns & Refactoring", context: "Repository pattern, adapter pattern, unit test coverage", highlight: false },
    ],
  },
  {
    id: "data-science",
    name: "Data Science & Analytics",
    shortLabel: "Data Science",
    colorTheme: "green",
    rotationClass: "-rotate-1",
    pinLocation: "top-center",
    tagline: "Wrangling noisy datasets, statistical analysis, and making numbers tell the real story.",
    honestNote:
      "Most data problems are won or lost in data cleaning. I focus on dependable ingestion, exploratory analysis, and clear visual synthesis rather than treating metrics like a black box.",
    skills: [
      { name: "Python", context: "Pandas, NumPy, SciPy, custom data extraction pipelines", highlight: true },
      { name: "Exploratory Data Analysis (EDA)", context: "Statistical distributions, outlier detection, imputations", highlight: true },
      { name: "Data Visualization", context: "Matplotlib, Seaborn, interactive web charts", highlight: true },
      { name: "SQL & Query Tuning", context: "Window functions, aggregations, schema partitioning", highlight: true },
      { name: "Time-Series Data", context: "Sensor logs, moving averages, trend decomposition", highlight: false },
      { name: "Feature Engineering", context: "Encoding, scaling, correlation pruning", highlight: false },
    ],
  },
  {
    id: "ai-ml-cv",
    name: "AI / ML & Computer Vision",
    shortLabel: "AI/ML & CV",
    colorTheme: "pink",
    rotationClass: "rotate-3",
    pinLocation: "top-right",
    tagline: "Practical machine learning and computer vision pipelines built for edge devices and real world lighting.",
    honestNote:
      "I don't claim to have rewritten backprop from scratch, but I know how to train, quantize, and deploy models that solve specific industrial, visual, or classification bottlenecks under real hardware constraints.",
    skills: [
      { name: "Computer Vision & OpenCV", context: "Image preprocessing, edge filtering, ROI segmentation", highlight: true },
      { name: "PyTorch & YOLOv8", context: "Object detection, classification, transfer learning", highlight: true },
      { name: "Edge Inference & TensorRT", context: "Model quantization (INT8/FP16), Jetson optimization", highlight: true },
      { name: "Scikit-Learn", context: "Classical ML algorithms, random forests, regression, evaluation", highlight: true },
      { name: "Data Augmentation", context: "Albumentations, glare/shadow synthesis, real-world noise simulation", highlight: false },
      { name: "LLM & Embedding Integrations", context: "API orchestration, prompt engineering, semantic search", highlight: false },
    ],
  },
  {
    id: "tools-workflow",
    name: "Tools, Infrastructure & Craft",
    shortLabel: "Tools & Craft",
    colorTheme: "orange",
    rotationClass: "-rotate-3",
    pinLocation: "top-left",
    tagline: "The daily workbench tools that keep deployments predictable and codebases tidy.",
    honestNote:
      "I value tools that get out of the way. I prefer a sharp command line, clean Docker containers, and clear documentation over complicated proprietary toolchains.",
    skills: [
      { name: "Docker & Containerization", context: "Multi-stage builds, local dev parity, docker-compose", highlight: true },
      { name: "Linux & Bash / Zsh", context: "Shell automation, log diagnosis, server maintenance", highlight: true },
      { name: "Vercel & Cloudflare", context: "Edge routing, DNS, SSL, zero-downtime deployments", highlight: true },
      { name: "Figma to Code", context: "Translating designer intent into responsive, accessible code", highlight: true },
      { name: "Postman & HTTP Clients", context: "Endpoint testing, mock servers, automated checks", highlight: false },
      { name: "VS Code & Neovim", context: "High-productivity editor setup with linting and keybindings", highlight: false },
    ],
  },
];

