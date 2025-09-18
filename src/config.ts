export const siteConfig = {
  name: "Adam Dabees",
  title: "Software Engineering Student @ McMaster University",
  description: "Portfolio website of Adam Dabees - Software Engineering Student at McMaster University",
  accentColor: "#1d4ed8",
  social: {
    email: "adamdabees8@gmail.com",
    linkedin: "https://linkedin.com/in/adam-dabees-bab51a217",
    github: "https://github.com/Adam-Dabees",
  },
  aboutMe: "Through internships and projects, I've gained real-world experience building production systems that serve thousands of users.\n\nI've worked on cloud infrastructure at Horus Tech, implementing monitoring systems and CI/CD pipelines, and developed AI-powered applications that help people optimize their resumes.\n\nWhat drives me is solving complex problems and seeing my code make a real difference in people's lives.",
  skills: ["Python", "Java", "JavaScript", "React", "Next.js", "FastAPI", "Node.js", "Docker", "Kubernetes", "AWS", "MongoDB", "PostgreSQL", "Git", "Linux"],
  projects: [
    {
      name: "ShopifyShop - E-commerce Product Tracking & Automation Platform",
      description:
        "Full-stack e-commerce monitoring and automation platform enabling real-time Shopify product tracking, inventory monitoring, and automated checkout assistance. Built with Next.js 15, React 19, and FastAPI on AWS serverless architecture. Features AWS Cognito authentication, Stripe-powered subscription model with Pro/Premium tiers, DynamoDB data persistence, and Playwright-powered browser automation. Implements real-time product scraping with JSON endpoints, responsive dashboard with mobile-friendly UI, and comprehensive error handling. Achieves scalable serverless deployment with API Gateway and Lambda functions, supporting growing user base with automated checkout system and subscription-based revenue model.",
      link: "https://shopify-shop-adam-dabees-projects.vercel.app",
      skills: ["Next.js", "React", "FastAPI", "AWS Lambda", "DynamoDB", "Stripe", "AWS Cognito", "Playwright", "Tailwind CSS"],
    },
    {
      name: "ResumeMatcher Pro - AI-Powered Resume Optimization Platform",
      description:
        "Full-stack AI-powered resume optimization platform that leverages Groq's language models to analyze resume-job compatibility and generate detailed match scores. Features intelligent LaTeX editing capabilities that automatically enhance resumes by incorporating job-specific keywords and technical skills. Built with Next.js 15, React 19, and FastAPI with modular service architecture. Implements real-time job scraping from URLs, interactive dashboard with responsive design, and score improvement tracking with before/after compatibility metrics. Streamlines resume optimization from hours to minutes while delivering measurable score improvements through targeted enhancements.",
      link: "https://resumematcherandlatexeditor.vercel.app",
      skills: ["Next.js", "React", "FastAPI", "Groq AI", "Tailwind CSS", "LaTeX", "PDF Processing", "Vercel"],
    },
    {
      name: "LiveCategories - Real-Time Multiplayer Word Game Platform",
      description:
        "A scalable, cloud-native multiplayer gaming platform featuring real-time gameplay, user authentication, and comprehensive analytics. Built with modern microservices architecture using Next.js 14, FastAPI, and WebSocket connections for sub-100ms latency game updates. Successfully containerized with Docker and orchestrated on Kubernetes with auto-scaling capabilities, handling 1000+ concurrent players. Implemented Firebase authentication, PostgreSQL/Firestore data persistence, and comprehensive monitoring with 99.9% uptime. Features dynamic category system, responsive mobile-first UI with Framer Motion animations, and intelligent load balancing across game instances.",
      link: "https://live-categories.vercel.app",
      skills: ["Next.js", "React", "FastAPI", "PostgreSQL", "Firestore", "WebSockets", "Kubernetes", "Docker", "Firebase", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Revenge of the Recycling System",
      description:
        "A comprehensive project focused on recycling system optimization and environmental impact analysis. Developed innovative solutions for waste management and recycling processes, incorporating data analysis and system design principles to improve sustainability outcomes.",
      link: "https://ember-dormouse-ef0.notion.site/P3-Revenge-of-the-Recycling-System-6bcd090e3756483bb9ad353e5270fddf",
      skills: ["System Design", "Data Analysis", "Sustainability", "Project Management"],
    },
    {
      name: "Rescue Mission - Island Serious Game",
      description:
        "Developed an exploration command center for the Island serious game as part of a team project. Implemented Java-based game logic with Maven build system, featuring map exploration, point-of-interest detection, and strategic decision-making algorithms. Created automated testing and deployment pipelines with comprehensive output generation.",
      link: "https://github.com/arian-fallahpour/2AA4-A2",
      skills: ["Java", "Maven", "Game Development", "Team Collaboration", "Algorithm Design"],
    },
  ],
  experience: [
    {
      company: "Brandeck Egypt",
      title: "Contract Software Developer",
      dateRange: "Nov 2024 - Present",
      website: "https://brandeckegypt.com",
      bullets: [
        "Maintained and continuously optimized a high-traffic Shopify e-commerce site with 30K+ monthly visitors",
        "Integrated new features with JavaScript, HTML, and Liquid, ensuring responsive, accessible, and performant UI",
        "Provided ongoing support, scalability improvements, and troubleshooting in a production environment",
      ],
    },
    {
      company: "Horus Tech",
      title: "Software Intern",
      dateRange: "May 2024 - Sep 2024",
      bullets: [
        "Engineered and maintained a cloud-based real estate listing platform leveraging OpenStack, Ansible, and Terraform for scalable infrastructure provisioning",
        "Built and optimized CI/CD pipelines using Jenkins and Git, reducing deployment time and ensuring reliable feature releases",
        "Implemented monitoring with Prometheus + Grafana and centralized logging with ELK Stack, achieving high uptime and rapid incident response",
        "Containerized microservices with Docker to streamline development workflows and environment consistency",
      ],
    },
  ],
  education: [
    {
      school: "McMaster University",
      degree: "B.Eng. in Software Engineering (Co-Op)",
      dateRange: "Sep 2023 - Present",
      achievements: [
        "Currently pursuing Bachelor of Engineering in Software Engineering with Co-Op program",
        "Gaining hands-on experience through internships and practical projects",
        "Focusing on full-stack development, cloud infrastructure, and DevOps practices",
      ],
    },
  ],
};
