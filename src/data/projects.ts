export interface WorkforceModule {
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

export const workforcePlatformData = {
  name: "WORKFORCE MANAGEMENT PLATFORM",
  productContext: "FaceViz Enterprise Suite",
  title: "Workforce Operations & Employee Management System",
  description:
    "An enterprise workforce management and employee operations platform centralizing attendance, location validation, payroll workflows, tasks, timesheets, tickets, leave, expenses, and reporting into unified operational dashboards.",
  roleScope:
    "Professional engineering contributions focused on Python/Django REST API development, attendance business logic, location geofencing verification, PostgreSQL reporting optimizations, and edge computer-vision integration.",
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

// Maintained for backward compatibility
export const faceVizData = workforcePlatformData;

export const cvPipelineData = {
  heading: "CCTV Face Recognition & Attendance Pipeline",
  description:
    "An edge computer-vision workflow that processes IP camera video streams, detects faces in real time, verifies image quality, and synchronizes automated attendance records with backend enterprise APIs.",
  pipelineSteps: [
    { step: 1, name: "CAMERA FEED", sub: "RTSP Stream", detail: "Network video stream ingestion from IP cameras" },
    { step: 2, name: "FRAME CAPTURE", sub: "Video Worker", detail: "Real-time frame extraction and processing" },
    { step: 3, name: "FACE DETECTION", sub: "Vision Model", detail: "Lightweight face localization and tracking" },
    { step: 4, name: "QUALITY CHECK", sub: "Filter Rules", detail: "Sharpness and clarity validation for reliable identification" },
    { step: 5, name: "ATTENDANCE SYNC", sub: "Secure REST API", detail: "Verified attendance punch logging and audit storage" }
  ],
  technologies: [
    "Python",
    "OpenCV",
    "Computer Vision",
    "REST APIs",
    "PostgreSQL",
    "Cloud Storage"
  ],
  engineeringHighlights: [
    { title: "Real-Time Processing", desc: "Smooth frame ingestion decoupled from network sync for low latency." },
    { title: "Duplicate Prevention", desc: "Automated cooldown logic prevents multiple accidental punch logs." },
    { title: "Network Resilience", desc: "Graceful retry mechanisms ensure logs are delivered even during network drops." },
    { title: "System Reliability", desc: "Designed for steady, continuous execution on local edge hardware." }
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
