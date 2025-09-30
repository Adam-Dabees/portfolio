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
  aboutMe: "I'm not just a software engineer—I'm a well-rounded professional with a unique blend of technical expertise and soft skills that sets me apart. Beyond my technical capabilities in full-stack development, cloud architecture, and AI integration, I bring exceptional teachability, problem-solving skills, and adaptability to every project.\n\nMy approach combines strong technical foundations with excellent communication, collaboration, and learning agility. I thrive in dynamic environments where I can quickly adapt to new technologies and methodologies while maintaining high-quality deliverables.\n\nThis holistic skill set enables me to not only build scalable applications but also effectively work with teams, understand business requirements, and continuously evolve with the ever-changing tech landscape.",
  skills: ["Next.js", "React", "FastAPI", "Python", "AWS", "Kubernetes", "Docker", "PostgreSQL", "WebSockets", "Stripe", "Firebase", "Groq AI", "Tailwind CSS", "TypeScript"],
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
  ],
  projects: [
    {
      name: "ShopifyShop - E-commerce Product Tracking & Automation Platform",
      description:
        "Full-stack e-commerce monitoring and automation platform enabling real-time Shopify product tracking, inventory monitoring, and automated checkout assistance. Built with Next.js 15, React 19, and FastAPI on AWS serverless architecture. Features AWS Cognito authentication, Stripe-powered subscription model with Pro/Premium tiers, DynamoDB data persistence, and Playwright-powered browser automation. Implements real-time product scraping with JSON endpoints, responsive dashboard with mobile-friendly UI, and comprehensive error handling. Achieves scalable serverless deployment with API Gateway and Lambda functions, supporting growing user base with automated checkout system and subscription-based revenue model.",
      link: "https://shopify-shop-three.vercel.app",
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
