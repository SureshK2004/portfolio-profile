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
    "Developed and maintained core backend services for FaceViz using Python and Django.",
    "Designed and implemented REST APIs using Django REST Framework for attendance, employee management, and HR analytics.",
    "Built Punch In / Punch Out workflows enabling real-time attendance capture, shift matching, and automated logging.",
    "Integrated CCTV camera feeds via RTSP video streams for continuous, real-time edge processing.",
    "Implemented end-to-end facial recognition pipeline using OpenCV and InsightFace for accurate biometric identification.",
    "Optimized SQL queries and database schemas across PostgreSQL and MySQL to ensure rapid reporting response times.",
    "Automated attendance workflows and scheduled cron workers, minimizing manual intervention and data errors.",
    "Collaborated with cross-functional teams in an Agile environment, participating in sprint reviews and Git-based code reviews."
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
