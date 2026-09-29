export interface JourneyItem {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export const journeyData: JourneyItem[] = [
  {
    period: "2025 — PRESENT",
    title: "Python Full Stack Developer",
    organization: "DataMoo AI",
    location: "Chennai, India",
    description:
      "Developing and scaling FaceViz, a high-throughput enterprise workforce operations platform. Architecting backend APIs, RTSP CCTV face recognition pipeline, PostgreSQL reporting, and real-time attendance automation.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "Computer Vision", "RTSP", "Automation"],
    isCurrent: true
  },
  {
    period: "2024",
    title: "Django Developer Intern",
    organization: "Shiash Info Solutions",
    location: "Chennai, India",
    description:
      "3-month intensive backend development internship focusing on Django architecture, RESTful API design, database modeling, and authentication workflows.",
    tags: ["Django", "Python", "REST APIs", "Database Integration", "MySQL"]
  },
  {
    period: "2024",
    title: "Flask Developer Intern",
    organization: "Polenza Tech Solutions",
    location: "Chennai, India",
    description:
      "Built web applications and lightweight services using Flask, document data modeling with MongoDB, and integration of dynamic frontend components.",
    tags: ["Flask", "Python", "MongoDB", "Web Development"]
  },
  {
    period: "2021 — 2024",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Agurchand Manmull Jain College, Chennai",
    location: "Chennai, India",
    description:
      "Graduated with 8.05 CGPA. Built strong foundations in data structures, algorithms, relational database systems, and object-oriented programming.",
    tags: ["BCA", "Computer Science", "Database Systems", "Software Engineering"]
  }
];
