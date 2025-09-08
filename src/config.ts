export const siteConfig = {
  name: "Adam Dabees",
  title: "Software Engineering Student",
  description: "Portfolio website of Adam Dabees - Software Engineering Student at McMaster University",
  accentColor: "#1d4ed8",
  social: {
    email: "adamdabees8@gmail.com",
    linkedin: "https://linkedin.com/in/adam-dabees-bab51a217",
    github: "https://github.com/Adam-Dabees",
  },
  aboutMe:
    "I'm a passionate Software Engineering student at McMaster University with hands-on experience in full-stack development, cloud infrastructure, and DevOps practices. I love building scalable web applications and have worked with modern technologies like React, FastAPI, Docker, and Kubernetes. My experience spans from cloud-based real estate platforms to AI-powered applications and e-commerce solutions. I'm always eager to learn new technologies and tackle challenging problems in software development.",
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
      link: "https://github.com/Adam-Dabees/ResumeMatcher",
      skills: ["Next.js", "React", "Tailwind", "FastAPI", "Groq AI"],
    },
    {
      name: "Real-Time Collaboration Platform",
      description:
        "Designing an AI-assisted multi-user editor/whiteboard with live WebSocket-based collaboration, role-based access control, and audit logging. Containerizing services with Docker and orchestrating deployment on Kubernetes (EKS), with CI/CD pipelines using GitHub Actions.",
      link: "https://github.com/Adam-Dabees",
      skills: ["Next.js", "FastAPI", "Redis", "WebSockets", "Kubernetes"],
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
