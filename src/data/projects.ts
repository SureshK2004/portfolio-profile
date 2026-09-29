export interface FaceVizModule {
  title: string;
  description: string;
  badge: string;
}

export interface CVPipelineStep {
  step: number;
  name: string;
  sub: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const faceVizData = {
  name: "FACEVIZ",
  title: "Workforce Management & Employee Operations Platform",
  description:
    "FaceViz is a full-stack workforce management platform designed to simplify and digitize daily employee operations for office-based and field teams.",
  liveLinks: [
    { label: "faceviz.aivapm.com", url: "https://faceviz.aivapm.com" },
    { label: "base.faceviz.com", url: "https://base.faceviz.com" }
  ],
  modules: [
    { title: "Attendance", description: "Real-time punch-in/out, biometric sync, and daily shift calculations.", badge: "Core" },
    { title: "Location & Geofencing", description: "GPS verification, radius validation, and field visit verification.", badge: "Security" },
    { title: "Payroll", description: "Automated salary structures, deductions, allowances, and pay slips.", badge: "Finance" },
    { title: "Timesheets", description: "Project-level billable hours, daily work logs, and team allocation.", badge: "Tracking" },
    { title: "Task Management", description: "Delegation, progress tracking, deadline tracking, and activity audit.", badge: "Ops" },
    { title: "Ticket Management", description: "Internal employee support, IT queries, and resolution workflows.", badge: "Support" },
    { title: "Leave Management", description: "Leave policies, balance tracking, holiday calendars, and manager approvals.", badge: "HR" },
    { title: "Expense Management", description: "Claim submissions, receipt attachments, approval hierarchies, and payouts.", badge: "Finance" },
    { title: "Dashboards & Reports", description: "Aggregated workforce metrics, executive summaries, and scheduled export jobs.", badge: "Analytics" }
  ],
  myContributions: [
    "Backend APIs",
    "Attendance Workflows",
    "Payroll Workflows",
    "Location Validation",
    "PostgreSQL Reporting",
    "Computer Vision",
    "Automation",
    "API Integrations",
    "Production Debugging"
  ],
  architectureFlow: [
    {
      level: "CLIENT LAYER",
      nodes: ["EMPLOYEE (Mobile/Web)", "MANAGER (Approvals)", "ADMIN (HR/Finance)"]
    },
    {
      level: "APPLICATION LAYER",
      nodes: ["DJANGO / DRF (REST APIs, Auth, Business Rules, Celery Tasks)"]
    },
    {
      level: "DATA & STORAGE LAYER",
      nodes: ["POSTGRESQL (Relational Store)", "S3 / OBJECT STORAGE (Media, Logs)"]
    },
    {
      level: "EXECUTION & OPS",
      nodes: ["WORKFORCE OPERATIONS (Payroll, Attendance, Geofencing, Reports)"]
    }
  ]
};

export const cvPipelineData = {
  heading: "CCTV Face Recognition & Attendance Pipeline",
  description:
    "Designed and optimized a production-oriented CCTV processing pipeline that captures camera frames, detects and processes faces, performs quality and duplicate checks, enhances selected images, and synchronizes attendance data with the FaceViz platform.",
  pipelineSteps: [
    { step: 1, name: "CCTV CAMERA", sub: "RTSP Stream", detail: "Continuous IP camera feed ingestion over network" },
    { step: 2, name: "FRAME CAPTURE", sub: "OpenCV", detail: "Threaded frame grabber with FPS throttling & drop-prevention" },
    { step: 3, name: "FACE DETECTION", sub: "SCRFD Model", detail: "High-accuracy lightweight neural face localization" },
    { step: 4, name: "FACE TRACKING", sub: "ID Consistency", detail: "Multi-frame trajectory tracking across frame boundaries" },
    { step: 5, name: "QUALITY CHECK", sub: "Blur & Pose Filter", detail: "Laplacian sharpness & head pose angle validation" },
    { step: 6, name: "FACE CROP", sub: "Affine Normalization", detail: "Bounding box padding & facial landmark alignment" },
    { step: 7, name: "IMAGE ENHANCEMENT", sub: "Histogram & Gamma", detail: "Dynamic contrast adjustment for varying ambient lighting" },
    { step: 8, name: "API UPLOAD", sub: "DRF Endpoints", detail: "Secure signed payload dispatch with retry backoff" },
    { step: 9, name: "FACEVIZ ATTENDANCE", sub: "Business Logic", detail: "Shift matching, duplicate punch deduplication & record write" },
    { step: 10, name: "S3 STORAGE", sub: "DigitalOcean Spaces", detail: "Audit trail archival with retention cleanup policy" }
  ],
  technologies: [
    "Python",
    "OpenCV",
    "InsightFace",
    "SCRFD",
    "ONNX Runtime",
    "NumPy",
    "Django REST Framework",
    "DigitalOcean Spaces",
    "Requests",
    "Multithreading",
    "Linux"
  ],
  engineeringHighlights: [
    { title: "Asynchronous Processing", desc: "Non-blocking frame capture decoupled from neural inference." },
    { title: "Duplicate Detection", desc: "Temporal thresholding avoids repeated punches for lingering personnel." },
    { title: "Retry Handling", desc: "Resilient exponential backoff with local spooling during network drops." },
    { title: "Image Quality Checks", desc: "Heuristic rejection of blurry, occluded, or low-light face crops." },
    { title: "Retention Cleanup", desc: "Automated rotation and expiration of temporary cache frames." },
    { title: "CPU Optimization", desc: "ONNX Runtime with optimized graph execution for low-power edge machines." },
    { title: "Resource Monitoring", desc: "Thread-safe memory bounds and camera watchdog autorecovery." }
  ]
};

export const automationCards = [
  {
    id: "python-automation",
    badge: "WORKFLOW ENGINE",
    title: "PYTHON AUTOMATION",
    description:
      "Python-based automation workflows for scheduled processing, data synchronization, reporting, maintenance, and API-driven operations.",
    details: [
      "Automated attendance calculations and shift anomaly resolution",
      "Bulk batch processing for monthly operational metrics",
      "API polling and webhooks integration across enterprise tools",
      "Threaded task execution with error notifications"
    ],
    tech: ["Python", "Requests", "Multithreading", "JSON", "Pandas"]
  },
  {
    id: "cron-jobs",
    badge: "SYSTEM SCHEDULING",
    title: "CRON JOBS",
    description:
      "Scheduled Linux cron jobs for recurring data processing, synchronization, cleanup, and operational tasks.",
    details: [
      "Nightly database table vacuuming and index maintenance",
      "Daily biometric attendance sync triggers and reconciliation",
      "Automatic expiration of temporary cached CCTV frames",
      "System health monitoring scripts with email alerts"
    ],
    tech: ["Linux", "Crontab", "Bash Scripts", "Systemd", "Logging"]
  },
  {
    id: "streamlit",
    badge: "INTERNAL TOOLS",
    title: "STREAMLIT",
    description:
      "Lightweight Streamlit tools for exposing Python workflows and data-driven internal functionality.",
    details: [
      "Interactive data exploration for attendance anomaly analysis",
      "Quick admin dashboard to test face embedding matching",
      "Internal KPI viewer for HR data sanity checks before payroll",
      "Rapid prototype UI for backend validation scripts"
    ],
    tech: ["Streamlit", "Python", "Altair", "DataFrames", "REST APIs"]
  }
];

export const selectedProjects: ProjectItem[] = [
  {
    id: "cartgenius",
    title: "CartGenius",
    category: "Full-Stack E-Commerce Platform",
    description:
      "Full-stack e-commerce application with product management, authentication, cart workflows, API integration, and media handling.",
    technologies: ["Django", "DRF", "React", "Cloudinary", "Bootstrap", "MySQL"],
    githubUrl: "https://github.com/SureshK2004/CartGenius",
    liveUrl: "https://luxcard.vercel.app",
    featured: true
  },
  {
    id: "translator-pro",
    title: "Translator Pro",
    category: "Multi-Language Web App",
    description:
      "Web-based translation application built with Flask and MongoDB.",
    technologies: ["Flask", "Python", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/SureshK2004/flask_Project",
    liveUrl: "https://translatorpro.onrender.com"
  },
  {
    id: "aluminium-pro",
    title: "Aluminium Pro",
    category: "Enterprise Business App",
    description:
      "Django business application tailored for quotation generation, inventory tracking, and client order management.",
    technologies: ["Python", "Django", "SQLite", "Bootstrap", "HTML/CSS"]
  },
  {
    id: "lms",
    title: "Library Management System",
    category: "Django Web Application",
    description:
      "Web application built with Django and MySQL for cataloging books, managing member accounts, issuing returns, and fine tracking.",
    technologies: ["Python", "Django", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/SureshK2004/library-management-system",
    liveUrl: "https://suresh-lms.onrender.com"
  }
];
