export type ProjectCategory =
  | "Computer Vision"
  | "AI/ML"
  | "Web Development"
  | "WordPress"
  | "Software Engineering"
  | "Data Science";

export interface ProjectMetric {
  label: string;
  value: string;
  unit?: string;
  context: string;
}

export interface MarginalNote {
  anchorId: string;
  content: string;
  noteType: "technical" | "anecdote" | "decision";
}

export interface ArchitectureNode {
  name: string;
  subtitle: string;
  badge?: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  clientOrOrg: string;
  hook: string;
  category: ProjectCategory;
  secondaryCategories: ProjectCategory[];
  year: string;
  duration: string;
  role: string;
  team: string;
  stack: string[];
  links: {
    live?: string;
    github?: string;
    caseStudyDoc?: string;
  };
  metrics: ProjectMetric[];
  plainEnglishExplanation?: string;
  problem: {
    lead: string;
    paragraphs: string[];
    pullQuote?: string;
  };
  decisions: {
    title: string;
    rationale: string;
    alternativesRejected: string;
  }[];
  architecture: {
    summary: string;
    steps: { step: string; title: string; description: string }[];
  };
  results: {
    summary: string;
    keyTakeaways: string[];
    whatLearned: string;
  };
  marginalNotes: MarginalNote[];
  interactiveType?: "before-after" | "metrics-toggle" | "lighthouse";
  beforeAfterConfig?: {
    beforeLabel: string;
    afterLabel: string;
    beforeCaption: string;
    afterCaption: string;
  };
  lighthouseScores?: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
}

export const projects: Project[] = [
  {
    slug: "vision-defect-detection",
    number: "01",
    title: "[PROJECT NAME: Real-Time Defect Detection for Manufacturing Lines]",
    clientOrOrg: "[CLIENT / CAPSTONE LAB: Industrial Quality Assurance Partner]",
    hook: "Replacing slow manual surface inspections with an edge-optimized YOLOv8 pipeline that spots micro-defects in 14 milliseconds.",
    category: "Computer Vision",
    secondaryCategories: ["AI/ML", "Software Engineering"],
    year: "2025",
    duration: "[3 MONTHS]",
    role: "Computer Vision Engineer & ML Pipeline Lead",
    team: "[2 ENGINEERS: 1 ML ENGINEER, 1 HARDWARE INTEGRATOR]",
    stack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "TensorRT", "FastAPI", "Docker"],
    links: {
      live: "[https://demo-inspection-preview.example.com]",
      github: "[https://github.com/asibmahmud/inspection-cv-pipeline]",
    },
    metrics: [
      {
        label: "Inference Latency",
        value: "[14.2]",
        unit: "ms",
        context: "Batch size 1 on NVIDIA Jetson Orin Nano",
      },
      {
        label: "mAP@50",
        value: "[94.8]",
        unit: "%",
        context: "Across 4 defect classes on custom industrial dataset",
      },
      {
        label: "Dataset Scale",
        value: "[12,400]",
        unit: "frames",
        context: "Curated, augmented, and contrast-balanced",
      },
      {
        label: "False Positive Reduction",
        value: "[68]",
        unit: "%",
        context: "Compared against the baseline heuristic thresholding",
      },
    ],
    plainEnglishExplanation:
      "When manufacturing items glide past a high-speed camera, human eyes get tired after 20 minutes. We trained a model to spot hairline fractures, scratches, and misalignment in real time, alerting the conveyor arm to discard broken items before packaging.",
    problem: {
      lead: "The factory floor operated on manual spot-checks where inspectors examined parts under high-glare LED bars.",
      paragraphs: [
        "Inspectors caught roughly 82% of surface flaws at shift start, but fatigue reduced consistency by mid-shift. The hardware partner needed an automated edge vision system that could run directly inside the inspection housing without relying on an external cloud connection.",
        "Crucially, lighting conditions fluctuated by 18% throughout the day due to skylight variation, confounding standard OpenCV edge-detection filters and causing unacceptable false rejects.",
      ],
      pullQuote: "If an inspection algorithm takes more than 20 milliseconds per frame, the conveyor belt has already moved the part past the pneumatic rejection arm.",
    },
    decisions: [
      {
        title: "Selected YOLOv8-Nano quantized with TensorRT over larger ResNet backbones",
        rationale:
          "Heavy transformer vision models offered marginal accuracy gains (+1.2% mAP) at the cost of 4x higher latency and double the thermal footprint on edge hardware. Quantizing YOLOv8n to INT8 brought inference latency under 15ms while keeping accuracy above 94%.",
        alternativesRejected:
          "Rejected cloud API roundtrips (too slow, unreliable local network) and large multi-stage mask-RCNN architectures.",
      },
      {
        title: "Synthetic shadow and specular glare augmentation during training",
        rationale:
          "Rather than installing expensive polarizing filter glass on the factory ceiling, we generated randomized specular glare patches and Gaussian contrast shifts across 3,000 baseline images to make the model invariant to daylight shifts.",
        alternativesRejected:
          "Rejected relying solely on factory-captured validation images.",
      },
    ],
    architecture: {
      summary:
        "High-framerate GigE camera capture feeds an in-memory ring buffer, processed via OpenCV CUDA bindings into a TensorRT execution engine running on edge hardware.",
      steps: [
        {
          step: "01",
          title: "Optical Capture & Region Normalization",
          description: "Industrial camera streams 60fps at 1080p. Frame is cropped to the conveyor ROI and normalized.",
        },
        {
          step: "02",
          title: "TensorRT INT8 Inference Engine",
          description: "Quantized weights evaluate bounding boxes and surface classification masks in under 15ms.",
        },
        {
          step: "03",
          title: "GPIO Signal & Telemetry Egress",
          description: "If confidence exceeds 0.88, a hardware trigger actuates the reject valve; metadata is batched to SQLite.",
        },
      ],
    },
    results: {
      summary:
        "The automated pipeline ran continuously for [TEST DURATION: 3-WEEK PILOT], reducing manual inspection overhead and catching micro-cracks before shipping.",
      keyTakeaways: [
        "Edge hardware thermals matter just as much as validation loss.",
        "Data augmentation targeting real environmental noise (lighting, dust) outperforms raw model size every time.",
        "Clean fallback logic is required when a camera lens collects surface dust.",
      ],
      whatLearned:
        "Computer vision in the real world is 80% data curation and deployment constraints, and 20% model selection.",
    },
    marginalNotes: [
      {
        anchorId: "lighting-note",
        content: "We measured ambient lumen swings between 1,200 lux at 10 AM and 3,400 lux at 2 PM.",
        noteType: "technical",
      },
      {
        anchorId: "latency-note",
        content: "TensorRT INT8 quantization gave us a 2.8x speedup over float32 on the same Jetson board.",
        noteType: "decision",
      },
    ],
    interactiveType: "before-after",
    beforeAfterConfig: {
      beforeLabel: "Raw Camera Feed (High Glare)",
      afterLabel: "Model Segmentation & Defect Bounding",
      beforeCaption: "Raw factory frame showing faint hair crack obscured by overhead lamp reflection.",
      afterCaption: "TensorRT inference isolating the fissure with 96.4% confidence score.",
    },
  },
  {
    slug: "editorial-media-wordpress",
    number: "02",
    title: "[PROJECT NAME: High-Performance Editorial CMS & Headless Publisher]",
    clientOrOrg: "[CLIENT: Independent Culture & News Publication]",
    hook: "Rebuilding a bloated 80-plugin WordPress monolith into a clean, sub-second publishing engine that handles viral traffic spikes without breaking.",
    category: "WordPress",
    secondaryCategories: ["Web Development", "Software Engineering"],
    year: "2024",
    duration: "[6 WEEKS]",
    role: "Lead Full-Stack Web & WordPress Engineer",
    team: "[SOLO ENGINEER COLLABORATING WITH DESIGNER & MANAGING EDITOR]",
    stack: ["WordPress (Custom Theme & Block API)", "PHP 8.3", "Tailwind CSS", "Redis Object Cache", "Cloudflare", "Docker"],
    links: {
      live: "[https://editorial-press-sample.example.com]",
      github: "[https://github.com/asibmahmud/editorial-lightweight-theme]",
    },
    metrics: [
      {
        label: "PageSpeed Mobile Score",
        value: "[98]",
        unit: "/100",
        context: "Up from 34/100 on the prior commercial theme",
      },
      {
        label: "Largest Contentful Paint",
        value: "[1.1]",
        unit: "s",
        context: "Cold cache mobile test over 4G simulated connection",
      },
      {
        label: "Database Queries per Request",
        value: "[16]",
        unit: "queries",
        context: "Down from 114 queries on the old plugin stack",
      },
      {
        label: "Hosting Bill Reduction",
        value: "[45]",
        unit: "%",
        context: "Migrated away from bloated oversized server instances",
      },
    ],
    plainEnglishExplanation:
      "A media brand was losing readers because their site took seven seconds to load on phones. I stripped out dozens of conflicting plugins, built a bespoke theme using native WordPress blocks, configured caching at the edge, and made reading enjoyable again.",
    problem: {
      lead: "The client ran a decade-old WordPress installation that had accumulated 64 active plugins.",
      paragraphs: [
        "Every article page rendered 1.4 MB of unused JavaScript and triggered over 110 unindexed SQL queries. Whenever an article was featured on social platforms, database CPU spiked to 100% and readers were met with 504 Gateway Timeout errors.",
        "The editorial team also dreaded writing articles because the bloated visual page builder took 15 seconds just to load an edit draft.",
      ],
      pullQuote: "A publishing site's entire reason for existing is to get words onto a human being's screen without friction.",
    },
    decisions: [
      {
        title: "Bespoke Gutenberg Blocks instead of Heavy Page Builders",
        rationale:
          "Replaced Elementor with 9 lean, semantic WordPress Block components written with native Block APIs and vanilla markup. Editors retained drag-and-drop flexibility without emitting 400 nested <div> elements per paragraph.",
        alternativesRejected:
          "Rejected keeping the page builder with aggressive caching wrappers (caching doesn't fix terrible DOM depth).",
      },
      {
        title: "Edge Page Caching with Stale-While-Revalidate via Cloudflare Workers",
        rationale:
          "Editorial content changes only when published or revised. We configured edge caching with instant tag-based invalidation upon article save, ensuring 94% of visitors hit an edge node in less than 50ms.",
        alternativesRejected:
          "Rejected pure client-side SPA rendering which penalizes search engine crawlers and cold mobile visits.",
      },
    ],
    architecture: {
      summary:
        "A streamlined PHP 8.3 core with Redis transient caching, custom semantic Gutenberg blocks, and Cloudflare edge micro-caching with automated cache purge hooks.",
      steps: [
        {
          step: "01",
          title: "Clean Core Theme & Custom Block Suite",
          description: "Zero external framework dependencies. Semantic HTML5 markup styled with purposeful utility CSS.",
        },
        {
          step: "02",
          title: "Persistent Redis Object Cache",
          description: "Complex navigation trees, taxonomy lookups, and author bios cached in memory.",
        },
        {
          step: "03",
          title: "Automated Edge Invalidation",
          description: "Post publish hooks purge only the updated post, category archives, and RSS feeds across edge nodes.",
        },
      ],
    },
    results: {
      summary:
        "The site successfully weathered multiple front-page traffic spikes with zero downtime and a [SCORE: 98/100] mobile Lighthouse profile.",
      keyTakeaways: [
        "WordPress is not inherently slow; careless plugin accumulation is.",
        "Native Gutenberg blocks provide modern editing ergonomics without payload baggage.",
        "Edge caching transforms server requirements by an order of magnitude.",
      ],
      whatLearned:
        "Clients appreciate code speed when it translates directly to lower hosting costs and happier journalists.",
    },
    marginalNotes: [
      {
        anchorId: "query-note",
        content: "Adding two composite database indexes on wp_postmeta cut archive query execution from 320ms to 8ms.",
        noteType: "technical",
      },
      {
        anchorId: "editor-note",
        content: "Editorial feedback: 'Drafting articles finally feels like typing in a text editor instead of wading through molasses.'",
        noteType: "anecdote",
      },
    ],
    interactiveType: "lighthouse",
    lighthouseScores: {
      performance: 98,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    },
  },
  {
    slug: "distributed-telemetry-platform",
    number: "03",
    title: "[PROJECT NAME: Real-Time Fleet Telemetry & Anomaly Analytics]",
    clientOrOrg: "[ORGANIZATION / RESEARCH INITIATIVE: IoT Fleet Monitoring Lab]",
    hook: "Architecting a fault-tolerant stream processing pipeline ingesting 18,000 sensor events/sec with real-time drift detection.",
    category: "Data Science",
    secondaryCategories: ["Software Engineering", "AI/ML"],
    year: "2024",
    duration: "[4 MONTHS]",
    role: "Data Systems & Back-End Engineer",
    team: "[3 DEVELOPERS: 1 SYSTEMS LEAD, 1 FRONT-END, 1 EMBEDDED DEV]",
    stack: ["TypeScript", "Node.js", "Python", "Apache Kafka", "ClickHouse", "TimescaleDB", "Next.js"],
    links: {
      live: "[https://telemetry-stream-demo.example.com]",
      github: "[https://github.com/asibmahmud/telemetry-stream-engine]",
    },
    metrics: [
      {
        label: "Throughput Capacity",
        value: "[18,500]",
        unit: "events/s",
        context: "Sustained throughput under simulated fleet peak",
      },
      {
        label: "Query Response Time",
        value: "[42]",
        unit: "ms",
        context: "95th percentile aggregate query over 30 days of sensor points",
      },
      {
        label: "Data Ingestion Pipeline Uptime",
        value: "[99.94]",
        unit: "%",
        context: "Across the entire 90-day testbed window",
      },
      {
        label: "Storage Footprint Reduction",
        value: "[62]",
        unit: "%",
        context: "Via columnar delta compression in ClickHouse",
      },
    ],
    plainEnglishExplanation:
      "Thousands of vehicle sensors were sending temperature, vibration, and GPS readings every second. We built an analytics engine that compresses this torrent of data, flags abnormal mechanical vibrations in milliseconds, and lets dispatchers view fleet health without waiting for slow database queries.",
    problem: {
      lead: "The telemetry team was storing sensor events in an unpartitioned PostgreSQL instance.",
      paragraphs: [
        "As connected test vehicles scaled up, table locks began causing write timeouts. Historic queries over weeks of vibration data took up to 35 seconds to render, blocking operations staff from reacting to sensor alarms in real time.",
        "Furthermore, transient network drops in rural test corridors led to duplicated sensor batches upon reconnection, skewing anomaly calculations.",
      ],
      pullQuote: "Sensors don't wait for your database to catch its breath. A telemetry architecture must ingest writes under pressure without complaining.",
    },
    decisions: [
      {
        title: "Partitioned ClickHouse Columnar Store for Time-Series Analytics",
        rationale:
          "Traditional row-oriented databases choke on aggregate time-series math. By streaming pre-validated Kafka records into ClickHouse with delta-of-delta encoding, query times plummeted from 35s to under 50ms while cutting disk usage in half.",
        alternativesRejected:
          "Rejected scaling up PostgreSQL memory and compute (prohibitively expensive and still fundamentally row-oriented).",
      },
      {
        title: "Idempotency Keys with Redis Deduplication Buffer",
        rationale:
          "To eliminate duplicate bursts when vehicles regain cellular signals, each sensor frame is stamped with device-generated monotonic UUIDs checked against a 15-minute sliding Redis bloom filter.",
        alternativesRejected:
          "Rejected relying on client-side retry suppression (vehicle firmware was fixed).",
      },
    ],
    architecture: {
      summary:
        "Vehicle telemetry is received via MQTT broker, normalized, queued in Kafka, and fanned out to real-time alerting workers and columnar ClickHouse cold storage.",
      steps: [
        {
          step: "01",
          title: "Edge Ingestion & Deduplication",
          description: "Incoming telemetry streams through an edge gateway that drops duplicates using sliding bloom filters.",
        },
        {
          step: "02",
          title: "Kafka Event Distribution",
          description: "Partitioned topics stream high-frequency vibration signals and lower-frequency GPS packets independently.",
        },
        {
          step: "03",
          title: "Columnar Storage & Anomaly Scoring",
          description: "Batch inserts commit directly to ClickHouse; streaming anomaly worker flags Z-score outliers.",
        },
      ],
    },
    results: {
      summary:
        "The revised engine handled [BENCHMARK: 18,500 EVENTS/SEC] with zero event loss and gave operators instantaneous dashboard feedback.",
      keyTakeaways: [
        "Pick the right storage engine for the shape of the data: columnar engines dominate time-series.",
        "Idempotency is not an afterthought; it must be built into the ingestion edge.",
        "Real-time streaming pipelines should fail gracefully by preserving raw append-only logs.",
      ],
      whatLearned:
        "Building resilient distributed systems requires designing for connection failure as a normal daily event.",
    },
    marginalNotes: [
      {
        anchorId: "compression-note",
        content: "ClickHouse's Gorilla delta compression achieved 12:1 compression on smooth float sensor readings.",
        noteType: "technical",
      },
      {
        anchorId: "dispatcher-note",
        content: "Operators went from refreshing queries once an hour to seeing dashboard numbers update live every 3 seconds.",
        noteType: "decision",
      },
    ],
    interactiveType: "metrics-toggle",
  },
];

