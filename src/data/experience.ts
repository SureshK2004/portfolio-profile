export interface ContributionCard {
  id: string;
  category: string;
  title: string;
  summary: string;
  items: string[];
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  cards: ContributionCard[];
}

export const experienceData: ExperienceData = {
  company: "Datamoo.ai",
  role: "Python Backend Developer",
  period: "1 Year (Current)",
  location: "Chennai, India",
  description:
    "Working on FaceViz, an AI-based facial recognition attendance and workforce management platform designed to automate daily employee operations for enterprise and field teams.",
  responsibilities: [
    "Developed and maintained scalable backend services for workforce operations using Python, Django, and Django REST Framework.",
    "Engineered robust RESTful APIs powering daily punch-in/out workflows, employee directory lookups, shift matching, and operational analytics.",
    "Constructed an edge video pipeline integrating RTSP IP camera feeds with OpenCV for continuous real-time face detection and automated attendance capture.",
    "Optimized complex SQL queries and relational indexing across PostgreSQL, reducing monthly report aggregation and analytics loading times.",
    "Built automated Linux cron jobs and background workers for automated punch reconciliation and scheduled data maintenance.",
    "Implemented automated image quality validation (blur and pose checks) and cooldown logic to eliminate duplicate punch-ins.",
    "Collaborated actively in an Agile sprint cycle, participating in Git pull-request code reviews and API documentation."
  ],
  cards: [
    {
      id: "backend",
      category: "SYSTEM FOUNDATIONS",
      title: "BACKEND DEVELOPMENT",
      summary: "Scalable business services, RESTful design, and enterprise-grade Python/Django micro-workflows.",
      items: [
        "Python",
        "Django",
        "Django REST Framework",
        "REST APIs",
        "Business workflows"
      ]
    },
    {
      id: "workforce",
      category: "ENTERPRISE PLATFORM",
      title: "WORKFORCE MANAGEMENT",
      summary: "Full-lifecycle employee operations, self-service portals, and structured approval channels.",
      items: [
        "Attendance",
        "Location Geofencing",
        "Shift Timings",
        "Payroll",
        "Tasks",
        "Timesheets",
        "Tickets",
        "Leave",
        "Expenses",
        "Reports"
      ]
    },
    {
      id: "database",
      category: "DATA ARCHITECTURE",
      title: "DATABASE & REPORTING",
      summary: "Relational modeling, fast time-series aggregation, and automated operational exports.",
      items: [
        "PostgreSQL",
        "SQL",
        "Aggregations",
        "Reporting APIs",
        "Attendance calculations"
      ]
    },
    {
      id: "automation",
      category: "INFRASTRUCTURE & OPS",
      title: "INTEGRATIONS & AUTOMATION",
      summary: "Geospatial services, S3 cloud storage, scheduled daemon pipelines, and internal tools.",
      items: [
        "REST APIs",
        "GPS workflows",
        "Geofencing",
        "S3-compatible storage",
        "Cron jobs",
        "Python automation",
        "Streamlit"
      ]
    }
  ]
};
