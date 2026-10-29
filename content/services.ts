export interface ServicePackage {
  id: string;
  number: string;
  title: string;
  tagline: string;
  whoItsFor: string[];
  whatYouGet: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  timeline: string;
  conversationStarter: string;
}

export const services: ServicePackage[] = [
  {
    id: "web-wordpress-rebuilds",
    number: "01",
    title: "High-Performance Web & WordPress Engineering",
    tagline: "Custom web applications and clean WordPress architectures that load instantly and don't break under traffic.",
    whoItsFor: [
      "Agencies and companies with a slow, bloated WordPress site that needs a modern rebuild.",
      "Design studios who need an engineer capable of turning Figma files into 100% faithful, responsive code.",
      "Publishers who want bespoke Gutenberg editing workflows without 50 conflicting third-party plugins.",
    ],
    whatYouGet: [
      "Custom, lightweight WordPress theme or Next.js frontend with 95+ mobile Lighthouse score.",
      "Semantic, accessible HTML and clean CSS tailored to your exact brand guidelines.",
      "Edge caching setup (Cloudflare / Vercel) and database query optimization.",
      "Full video walkthrough and handoff documentation for your content team.",
    ],
    process: [
      { step: "01", title: "Audit & Architecture", description: "Reviewing your current bottlenecks, database query count, and design specs." },
      { step: "02", title: "Clean Build Sprint", description: "Developing modular components with strict typing, responsive states, and zero bloat." },
      { step: "03", title: "Content Migration & Cache Tuning", description: "Importing existing posts, verifying redirects, and tuning Redis and edge caching." },
      { step: "04", title: "Launch & Handoff", description: "Zero-downtime DNS cutover with monitoring and team training." },
    ],
    timeline: "Typically 3 to 6 weeks depending on page count and custom block complexity.",
    conversationStarter: "Let's talk about your site speed, your current publishing headaches, and your target launch date.",
  },
  {
    id: "custom-software-apis",
    number: "02",
    title: "Custom Software & API Engineering",
    tagline: "Disciplined backend services, internal tooling, and clean integrations that connect your systems seamlessly.",
    whoItsFor: [
      "Startups needing a dependable engineer to build or refactor core REST/GraphQL endpoints.",
      "Operations teams struggling with manual spreadsheets who need automated internal tools.",
      "Product teams looking for reliable contract engineering to accelerate a milestone.",
    ],
    whatYouGet: [
      "Type-safe backend services with predictable error handling and validation.",
      "Clean relational database schema with indexed queries and migrations.",
      "Interactive API documentation and comprehensive unit/integration test coverage.",
      "Containerized deployment scripts (Docker) ready for your cloud environment.",
    ],
    process: [
      { step: "01", title: "Requirements & Data Modeling", description: "Mapping entity relationships, access controls, and boundary conditions." },
      { step: "02", title: "API Development & Staging", description: "Iterative development with live staging endpoints for client review." },
      { step: "03", title: "Security & Load Testing", description: "Validating input bounds, rate limits, and stress testing heavy endpoints." },
      { step: "04", title: "Deployment & Observability", description: "Deploying to production with health checks, error logging, and alerts." },
    ],
    timeline: "Typically 4 to 8 weeks for dedicated modules or standalone tools.",
    conversationStarter: "Share your functional spec or system diagram, and let's map out the architecture together.",
  },
  {
    id: "ai-cv-prototypes",
    number: "03",
    title: "AI / ML & Computer Vision Solutions",
    tagline: "Practical edge vision pipelines, image processing, and machine learning models tailored to real hardware.",
    whoItsFor: [
      "Hardware and manufacturing teams needing real-time visual inspection on edge boards (Jetson, Raspberry Pi).",
      "Companies wanting to automate image classification, defect detection, or document parsing.",
      "Founders needing a fast, technically sound feasibility prototype before raising capital.",
    ],
    whatYouGet: [
      "Custom dataset augmentation pipeline resilient to real-world lighting and noise.",
      "Trained and evaluated model (PyTorch / YOLOv8 / OpenCV) with benchmarked metrics.",
      "Quantized edge engine (TensorRT / ONNX) with low latency and low thermal footprint.",
      "Working API endpoint or local daemon with clean logging and error fallback.",
    ],
    process: [
      { step: "01", title: "Feasibility & Data Assessment", description: "Evaluating sample images, camera specs, lighting swings, and latency limits." },
      { step: "02", title: "Data Curation & Baseline Model", description: "Augmenting dataset and establishing clear quantitative baseline metrics." },
      { step: "03", title: "Model Optimization & Quantization", description: "Tuning architecture and applying INT8/FP16 quantization for edge hardware." },
      { step: "04", title: "Hardware Integration & Benchmarking", description: "Testing under live camera streams and logging accuracy." },
    ],
    timeline: "Typically 4 to 8 weeks for a scoped proof-of-concept or edge deployment.",
    conversationStarter: "Tell me about your hardware constraints, lighting environment, and target inference speed.",
  },
  {
    id: "technical-advisory-audits",
    number: "04",
    title: "Performance Audits & Technical Advisory",
    tagline: "Honest, deep-dive reviews of your existing web code, database queries, and architectural bottlenecks.",
    whoItsFor: [
      "Founders and product managers preparing for a major product launch or investor demo.",
      "Teams dealing with mystery server crashes, high cloud bills, or abysmal mobile scores.",
      "Non-technical founders who need an independent technical opinion before committing to a development quote.",
    ],
    whatYouGet: [
      "Detailed written audit report with prioritized recommendations (quick wins vs. deep fixes).",
      "Core Web Vitals breakdown and database query bottleneck profile.",
      "Code review of architectural patterns, security oversights, and maintainability risks.",
      "90-minute live video call to walk through the findings and answer your team's questions.",
    ],
    process: [
      { step: "01", title: "Access & Observation", description: "Non-destructive read access to repository, staging environment, and telemetry logs." },
      { step: "02", title: "Deep Profiling", description: "Running automated and manual profiling on network payloads, query logs, and DOM depth." },
      { step: "03", title: "Synthesis & Action Plan", description: "Writing pragmatic, actionable fixes with estimated effort and business impact." },
      { step: "04", title: "Consultation Call", description: "Discussing recommendations with your stakeholders and technical leads." },
    ],
    timeline: "Typically 3 to 5 business days from receiving repository access.",
    conversationStarter: "Send me your site URL and current pain points, and I'll confirm if an audit is the right fit.",
  },
];

