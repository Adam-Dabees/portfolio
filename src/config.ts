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
  aboutMe:
    "Through internships and projects, I've gained real-world experience building production systems that serve thousands of users.\n\nI've worked on cloud infrastructure at Horus Tech, implementing monitoring systems and CI/CD pipelines, and developed AI-powered applications that help people optimize their resumes.\n\nWhat drives me is solving complex problems and seeing my code make a real difference in people's lives.",
  skills: ["Python", "Java", "JavaScript", "React", "Next.js", "FastAPI", "Node.js", "Docker", "Kubernetes", "AWS", "MongoDB", "PostgreSQL", "Git", "Linux"],
  projects: [
    {
      name: "Shopify Bot Platform",
      description:
        "Developed a full-stack automation platform enabling real-time Shopify product tracking and automated checkout preparation. Implemented user authentication with MongoDB, integrated Stripe API for tiered subscription plans, and built responsive UI with React/Tailwind.",
      link: "https://github.com/Adam-Dabees",
      skills: ["Next.js", "React", "FastAPI", "MongoDB", "Stripe", "Docker"],
    },
    {
      name: "AI Resume Matcher",
      description:
        "Built an AI-powered web application that scans resumes against job descriptions, returning compatibility scores and actionable feedback. Designed modular, scalable backend services with FastAPI + Uvicorn, integrating Groq LLMs for natural language analysis.",
      link: "https://resumematcherandlatexeditor.vercel.app",
      skills: ["Next.js", "React", "Tailwind", "FastAPI", "Groq AI"],
    },
    {
      name: "Real-Time Collaboration Platform",
      description:
        "Designing an AI-assisted multi-user editor/whiteboard with live WebSocket-based collaboration, role-based access control, and audit logging. Containerizing services with Docker and orchestrating deployment on Kubernetes (EKS), with CI/CD pipelines using GitHub Actions.",
      link: "https://github.com/Adam-Dabees",
      skills: ["Next.js", "FastAPI", "Redis", "WebSockets", "Kubernetes"],
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
