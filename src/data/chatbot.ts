export interface QuickQuestion {
  id: string;
  text: string;
  response: string;
}

export const chatbotConfig = {
  header: "✦ SURESH AI",
  subtitle: "Portfolio Assistant",
  welcomeMessage:
    "Hi! I'm Suresh's portfolio assistant. Ask me about his experience, projects, skills, or technical work.",
  quickQuestions: [
    {
      id: "role",
      text: "What does Suresh do?",
      response:
        "Suresh K. is a Python/Django Full Stack Developer and Computer Vision Engineer based in Chennai, India. He builds production-oriented backend systems, workforce management platforms, REST APIs, Linux automation workflows, and edge computer-vision pipelines."
    },
    {
      id: "workforce",
      text: "Tell me about the Workforce Management Platform",
      response:
        "At DataMoo AI, Suresh contributes directly to the backend APIs and computer vision systems for an enterprise workforce operations platform (FaceViz). His work spans attendance logic, location geofencing, payroll workflows, tasks, timesheets, tickets, leave, expenses, PostgreSQL reporting, and real-time CCTV edge integration."
    },
    {
      id: "technologies",
      text: "What technologies does Suresh use?",
      response:
        "Suresh specializes in Python, Django, Django REST Framework, PostgreSQL, and MySQL for the backend; React, TypeScript, and Tailwind CSS for the frontend; OpenCV, InsightFace, SCRFD, and ONNX Runtime for Computer Vision; and Linux cron jobs, S3 storage, and Streamlit for automation."
    },
    {
      id: "cctv",
      text: "Tell me about the CCTV pipeline",
      response:
        "Suresh implemented a computer-vision pipeline for automated attendance. It connects to IP camera video feeds, performs real-time face detection with quality validation checks, and reliably synchronizes attendance logs with backend systems via secure APIs."
    },
    {
      id: "projects",
      text: "What projects has Suresh built?",
      response:
        "Beyond his professional work on enterprise workforce systems and the CCTV pipeline, Suresh has built CartGenius (a full-stack Django + React e-commerce platform), Translator Pro (a web translation tool with Flask & MongoDB), Aluminium Pro (a Django enterprise quotation and inventory system), and a Library Management System (Django + MySQL)."
    },
    {
      id: "contact",
      text: "How can I contact Suresh?",
      response:
        "You can reach Suresh via email at sureshksureshk04@gmail.com, connect on LinkedIn at linkedin.com/in/suresh-pythondev, or check out his open-source work on GitHub at github.com/SureshK2004."
    }
  ]
};

export function getMockResponse(query: string): string {
  const normalized = query.toLowerCase().trim();

  // Match quick questions first
  const match = chatbotConfig.quickQuestions.find(
    (q) => q.text.toLowerCase() === normalized
  );
  if (match) return match.response;

  // Keyword-based fallback matching
  if (normalized.includes("workforce") || normalized.includes("faceviz") || normalized.includes("platform")) {
    return "Suresh contributes to an enterprise workforce management and employee operations platform (FaceViz) at DataMoo AI, focusing on Python/Django REST APIs, attendance logic, location geofencing, payroll workflows, PostgreSQL reporting, and real-time CCTV edge processing.";
  }
  if (
    normalized.includes("contact") ||
    normalized.includes("email") ||
    normalized.includes("reach") ||
    normalized.includes("phone")
  ) {
    return "You can get in touch with Suresh at sureshksureshk04@gmail.com or on LinkedIn at https://linkedin.com/in/suresh-pythondev. He is open to backend, Python/Django, and computer vision opportunities.";
  }
  if (
    normalized.includes("cctv") ||
    normalized.includes("face recognition") ||
    normalized.includes("opencv") ||
    normalized.includes("vision")
  ) {
    return "The CCTV face recognition pipeline ingests live camera video streams, applies real-time face detection and image quality checks, and automatically syncs attendance punches with backend enterprise systems with zero manual intervention.";
  }
  if (
    normalized.includes("skill") ||
    normalized.includes("stack") ||
    normalized.includes("tech")
  ) {
    return "Suresh's core stack is Python, Django, DRF, PostgreSQL, SQL, React, TypeScript, OpenCV, InsightFace, Linux, and S3-compatible cloud storage.";
  }
  if (
    normalized.includes("experience") ||
    normalized.includes("job") ||
    normalized.includes("datamoo") ||
    normalized.includes("work")
  ) {
    return "Suresh currently works as a Python Backend Developer at DataMoo AI in Chennai (1 year of production experience), engineering backend APIs and computer vision systems for workforce platforms. He holds a BCA degree (8.05 CGPA) and completed developer internships at Shiash Info Solutions and Polenza Tech Solutions.";
  }
  if (
    normalized.includes("education") ||
    normalized.includes("college") ||
    normalized.includes("degree") ||
    normalized.includes("bca")
  ) {
    return "Suresh holds a Bachelor of Computer Applications (BCA) from Agurchand Manmull Jain College, Chennai (Batch 2024) with an 8.05 CGPA.";
  }
  if (
    normalized.includes("cartgenius") ||
    normalized.includes("ecommerce") ||
    normalized.includes("project")
  ) {
    return "Key projects include CartGenius (full-stack Django + React e-commerce), Translator Pro (Flask + MongoDB), Aluminium Pro (Django business tool), and Library Management System.";
  }
  if (
    normalized.includes("resume") ||
    normalized.includes("cv") ||
    normalized.includes("download")
  ) {
    return "You can view or download Suresh's complete resume using the button in the hero section or contact section, or directly link to /suresh_resume_2026.pdf.";
  }

  return "I can answer questions regarding Suresh's experience at DataMoo AI, his work on Workforce Management Platforms, the CCTV Face Recognition pipeline, his technical skills, or how to contact him. Try one of the suggested prompts below!";
}
