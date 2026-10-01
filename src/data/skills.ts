export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    detail?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "BACKEND",
    subtitle: "Server architecture, micro-services & REST APIs",
    iconName: "Server",
    skills: [
      { name: "Python", detail: "Primary language for services & pipelines" },
      { name: "Django", detail: "Robust MVC architecture & ORM" },
      { name: "Django REST Framework", detail: "API serializers, auth & viewsets" },
      { name: "Flask", detail: "Microservices & lightweight APIs" },
      { name: "REST APIs", detail: "Contract design, status codes & pagination" }
    ]
  },
  {
    title: "FRONTEND",
    subtitle: "Responsive component engineering & user interfaces",
    iconName: "Layout",
    skills: [
      { name: "React", detail: "Hooks, state management & SPAs" },
      { name: "TypeScript", detail: "Strict typing & enterprise maintainability" },
      { name: "JavaScript", detail: "ES6+, async/await & DOM APIs" },
      { name: "HTML", detail: "Semantic markup & accessible structure" },
      { name: "CSS", detail: "Modern layouts, Flexbox & Grid" },
      { name: "Tailwind CSS", detail: "Utility-first design & design tokens" },
      { name: "Bootstrap", detail: "Rapid responsive prototyping" },
      { name: "Vite", detail: "Fast tooling & HMR build systems" }
    ]
  },
  {
    title: "DATABASE",
    subtitle: "Relational modeling, query tuning & persistence",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", detail: "Complex queries, indexing & analytics" },
      { name: "MySQL", detail: "Relational storage & transactional safety" },
      // { name: "MongoDB", detail: "Document stores & dynamic schemas" },
      { name: "SQLite", detail: "Embedded storage & local dev testing" },
      { name: "SQL", detail: "Aggregations, joins & performance tuning" }
    ]
  },
  {
    title: "AI / COMPUTER VISION",
    subtitle: "Real-time edge recognition, detection & pipelines",
    iconName: "Cpu",
    skills: [
      { name: "OpenCV", detail: "Frame capture, colorspace & filtering" },
      { name: "InsightFace", detail: "Deep facial feature extraction & 512D embeddings" },
      { name: "SCRFD", detail: "High-speed face detection & landmark localization" },
      { name: "ONNX Runtime", detail: "Hardware-accelerated neural inference" },
      { name: "Image Processing", detail: "Adaptive histogram equalization & alignment" },
      { name: "Face Recognition", detail: "Cosine distance matching & threshold tuning" }
    ]
  },
  {
    title: "TOOLS / INFRASTRUCTURE",
    subtitle: "Version control, cloud object storage & deployment",
    iconName: "Terminal",
    skills: [
      { name: "Git", detail: "Branching workflows & version control" },
      { name: "GitHub", detail: "Code review, CI/CD actions & repositories" },
      // { name: "Linux", detail: "Server administration, bash & permissions" },
      { name: "Cron", detail: "Scheduled automated maintenance jobs" },
      { name: "S3", detail: "Object storage & asset management" },
      { name: "DigitalOcean", detail: "Spaces bucket integration & compute" },
      { name: "Cloudinary", detail: "Media transform & image delivery CDN" },
      { name: "Streamlit", detail: "Rapid interactive data apps & internal tooling" }
    ]
  }
];
