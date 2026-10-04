export interface PortfolioMeta {
  name: string;
  role: string;
  titles: string[];
  headline: string;
  subheadline: string;
  experienceBadge: string;
  techBadge: string;
  locationBadge: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  liveUrl: string;
  resumeUrl: string;
  logoUrl: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  profileImage: string;
  stats: {
    value: string;
    label: string;
    sublabel: string;
  }[];
}

export const portfolioData: PortfolioMeta = {
  name: "Suresh K.",
  role: "Python / Django Full Stack Developer",
  titles: [
    "Python / Django Developer",
    "Backend Engineer",
    "Computer Vision & Automation Developer"
  ],
  headline: "I build backend systems for the real world.",
  subheadline:
    "I'm a Python Full Stack Developer focused on building Django applications, REST APIs, workforce platforms, automation workflows, and computer-vision solutions.",
  experienceBadge: "01+ YEAR EXPERIENCE",
  techBadge: "PYTHON / DJANGO",
  locationBadge: "CHENNAI, INDIA",
  email: "sureshksureshk04@gmail.com",
  location: "Chennai, India",
  linkedin: "https://linkedin.com/in/suresh-pythondev",
  github: "https://github.com/SureshK2004",
  liveUrl: "https://suresh-dev.netlify.app",
  resumeUrl: "/suresh_resume_2026.pdf",
  logoUrl: "/logo.png",
  profileImage: "/image.png",
  aboutParagraph1:
    "I am a Python Backend Developer with 1 year of production experience building scalable, production-grade backend systems using Python, Django, and Django REST Framework at Datamoo AI. My primary work centers around FaceViz — an AI-powered enterprise workforce management and biometric attendance platform serving active businesses.",
  aboutParagraph2:
    "My hands-on engineering spans architecting RESTful APIs, building real-time punch-in/out workflows, optimizing complex SQL queries across PostgreSQL and MySQL, and integrating end-to-end computer-vision CCTV pipelines using OpenCV, InsightFace, and RTSP streams for automatic employee attendance.",
  stats: [
    { value: "01 YEAR", label: "PRODUCTION", sublabel: "EXPERIENCE" },
    { value: "10 STAGES", label: "CCTV VISION", sublabel: "PIPELINE" },
    { value: "09 MODULES", label: "FACEVIZ PLATFORM", sublabel: "BACKEND & APIS" },
    { value: "8.05 CGPA", label: "BCA DEGREE", sublabel: "ACADEMIC MERIT" }
  ]
};
