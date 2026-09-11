export interface Experience {
  company: string;
  context: string;
  title: string;
  dateRange: string;
  location: string;
  /** Marks the role as ongoing; renders a live pulse on the timeline. */
  current?: boolean;
  website?: string;
  bullets: string[];
}

export interface Project {
  name: string;
  tagline: string;
  year: string;
  description: string;
  link?: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  dateRange: string;
  location: string;
  achievements: string[];
  coursework?: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  now: { role: string; org: string; location: string };
  availability: string;
  social: { email: string; linkedin?: string; github?: string; twitter?: string };
  highlights: { value: string; unit: string; label: string }[];
  aboutMe: string;
  skillGroups: { label: string; items: string[] }[];
  experience: Experience[];
  projects: Project[];
  leadership: { role: string; org: string; dateRange: string; description: string }[];
  education: Education[];
}

export const siteConfig: SiteConfig = {
  name: "Adam Dabees",
  title: "Software Engineer: machine vision, distributed systems, infrastructure",
  description:
    "Adam Dabees is a software engineer working on machine vision at Tesla, distributed systems, and infrastructure. B.Eng. Software Engineering (Co-Op) at McMaster University.",

  // Current status, surfaced quietly in the hero and header.
  now: {
    role: "Machine Vision Software Engineering Intern",
    org: "Tesla, Vision Systems",
    location: "Palo Alto, CA",
  },
  availability: "Available May – Aug 2027",

  social: {
    email: "adamdabees8@gmail.com",
    linkedin: "https://linkedin.com/in/adam-dabees-bab51a217",
    github: "https://github.com/Adam-Dabees",
  },

  // Small data strip under the hero. Kept short on purpose.
  highlights: [
    { value: "3.91", unit: "/ 4.00", label: "GPA, top 1% of cohort" },
    { value: "30K+", unit: "", label: "monthly users served in production" },
    { value: "<100", unit: "ms", label: "at 1,000+ concurrent connections" },
  ],

  aboutMe:
    "I write software for systems where being wrong is expensive: vision pipelines running on a moving production line, platform infrastructure at a $247B pension fund, services that have to stay up while traffic triples.\n\nMost of what I'm good at is diagnostic. Working out which layer a failure actually lives in (application, container, network, or the camera itself) is usually harder than the fix, and I've gotten fast at it. The rest of the job is building the tooling so the same problem doesn't need a person the next time it shows up.\n\nRight now that's machine vision at Tesla. Before that, distributed platform work at Ontario Teachers' Pension Plan and a few years of shipping things real users depended on. Outside of that I founded McMaster's self-driving car club, where we're building a ROS perception stack from the ground up.",

  skillGroups: [
    {
      label: "Languages",
      items: ["Python", "C/C++", "C#", "Go", "Java", "TypeScript", "JavaScript", "SQL", "Bash/Shell"],
    },
    {
      label: "Systems & Networking",
      items: [
        "Linux",
        "Concurrent multi-process programming",
        "Real-time systems",
        "Computer architecture",
        "TCP/IP & sockets",
        "Memory and caching behavior",
        "Low-level debugging",
      ],
    },
    {
      label: "Containers & Infrastructure",
      items: [
        "Kubernetes (AKS)",
        "Docker",
        "Microservices",
        "Autoscaling",
        "Azure",
        "AWS (Lambda, DynamoDB, S3, EC2, API Gateway)",
        "OpenStack",
        "Terraform",
        "Ansible",
      ],
    },
    {
      label: "ML & Vision",
      items: [
        "Computer vision",
        "Image processing",
        "Real-time inference pipelines",
        "Model training & tuning",
        "Model evaluation",
        "Latency-budgeted inference",
        "LLMs & LLM serving (Groq)",
        "AI agents",
        "Model Context Protocol",
        "ROS perception",
      ],
    },
    {
      label: "Data & Storage",
      items: [
        "PostgreSQL",
        "SQLite",
        "Schema design",
        "DynamoDB",
        "Firestore",
        "Redis",
        "Kafka",
        "Query optimization",
        "Caching",
        "Data pipelines",
      ],
    },
    {
      label: "Tooling & Practice",
      items: [
        "Git/GitHub",
        "Jenkins",
        "CI/CD",
        "Dynatrace",
        "Distributed tracing",
        "Performance analysis",
        "Test design",
        "Code review",
        "Agile",
      ],
    },
  ],

  // Metrics wrapped in **double asterisks** render in the accent color.
  experience: [
    {
      company: "Tesla",
      context: "Vision Systems",
      title: "Machine Vision Software Engineering Intern",
      dateRange: "Aug 2026 – Present",
      location: "Palo Alto, CA",
      current: true,
      bullets: [
        "Architected and own an internal full-stack platform end to end: Python backend, Next.js frontend, containerized with Docker and deployed on Kubernetes as a self-service tool for other Tesla teams. It computes optimal camera placement and count from CAD geometry, lens configuration, and scan height, replacing manual iteration on lines where each camera runs **over $100K**.",
        "Designed the database schemas behind that platform, and am migrating its store from SQLite to PostgreSQL as the data model and query load outgrew it.",
        "Build the decisioning layer for Mantis, the in-house lineside vision software, in Python and C#: working across raw and processed production data, training and tuning models against it, and holding inference inside a fixed latency budget so pass/fail calls run inline at line speed rather than after the fact.",
        "Standing up a dedicated ML training machine to train models for Coherix, another internal application.",
        "Debug system-level failures on high-volume production lines alongside manufacturing, controls, and process engineering, tracing faults across software, camera and lighting hardware, and network layers.",
        "Contributed Go to a same-day fix for a live production failure in my first week, revised through senior code review.",
      ],
    },
    {
      company: "Ontario Teachers' Pension Plan",
      context: "$247B AUM, Canada's largest single-profession pension fund",
      title: "Software Engineer (Co-Op)",
      dateRange: "May 2026 – Aug 2026",
      location: "Toronto, ON",
      bullets: [
        "Built Python AI agents and MCP-based systems that replaced manual log inspection with automated anomaly surfacing across a large internal codebase.",
        "Deployed and operated containerized services on Kubernetes (AKS) with Docker: rollout config, resource requests, and scaling behavior for internal platform workloads.",
        "Debugged production issues across distributed services using Dynatrace distributed tracing, isolating faults spanning application, container, and network layers.",
        "Automated provisioning with Terraform and Ansible, replacing manual setup with consistent, auditable environments across **5+ internal services**.",
        "Shipped through Jenkins CI/CD pipelines covering build, automated test, and release.",
      ],
    },
    {
      company: "Brandeck Egypt",
      context: "E-commerce platform",
      title: "Software Developer (Contract)",
      dateRange: "Jan 2025 – May 2026",
      location: "Remote",
      website: "https://brandeckegypt.com",
      bullets: [
        "Built distributed AWS Lambda and DynamoDB pipelines serving **30K+ monthly users**, cutting end-to-end latency **80%** and compute cost **35%** through request batching and better I/O patterns.",
        "Added idempotent writes, exponential-backoff retries, and rate limiting to absorb **3× traffic spikes** without unplanned downtime.",
        "Established structured logging, distributed tracing, and alerting that cut average incident resolution time **50%**.",
      ],
    },
  ],

  projects: [
    {
      name: "LiveCategories",
      tagline: "Real-time multiplayer platform",
      year: "2024",
      description:
        "A real-time distributed platform running on Kubernetes, holding **1,000+ concurrent connections** at **sub-100ms latency** over persistent WebSocket/TCP sockets. Kafka handles inter-service event streaming; request routing and horizontal autoscaling keep throughput steady across replicas under load.",
      link: "https://live-categories.vercel.app",
      skills: ["Kubernetes", "Docker", "Kafka", "PostgreSQL", "WebSockets", "FastAPI", "Next.js"],
    },
    {
      name: "ResumeMatcher Pro",
      tagline: "LLM inference platform",
      year: "2025",
      description:
        "Scores resume-to-job compatibility and returns structured gap analysis over a RESTful API. The inference layer runs as its own FastAPI service, decoupled from the frontend so the serving path scales independently, and end-to-end response holds **under 2 seconds**. Includes LaTeX editing that folds job-specific keywords back into the source document.",
      link: "https://resumematcherandlatexeditor.vercel.app",
      skills: ["Python", "FastAPI", "Groq LLM", "Next.js 15", "LaTeX", "Vercel"],
    },
    {
      name: "Shopifly",
      tagline: "E-commerce monitoring & automation",
      year: "2025",
      description:
        "Tracks product availability across arbitrary online stores and executes automated purchases. A WebSocket-driven queue dispatches Playwright browser jobs across AWS Lambda, with DynamoDB persistence, Cognito auth, and Stripe subscription tiers behind API Gateway.",
      link: "https://www.shopifly.io",
      skills: ["Next.js 15", "AWS Lambda", "DynamoDB", "API Gateway", "Playwright", "Stripe", "Cognito"],
    },
    {
      name: "Rescue Mission",
      tagline: "Island exploration engine",
      year: "2024",
      description:
        "An exploration command center for the Island serious game: Java game logic on Maven, with map exploration, point-of-interest detection, and the decision algorithms that drive search strategy under a fuel budget.",
      link: "https://github.com/arian-fallahpour/2AA4-A2",
      skills: ["Java", "Maven", "Algorithm Design", "JUnit"],
    },
    {
      name: "Revenge of the Recycling System",
      tagline: "Systems analysis",
      year: "2024",
      description:
        "System design and data analysis on recycling and waste-management processes, working from measured throughput rather than assumptions about where the losses were.",
      link: "https://ember-dormouse-ef0.notion.site/P3-Revenge-of-the-Recycling-System-6bcd090e3756483bb9ad353e5270fddf",
      skills: ["System Design", "Data Analysis", "Modeling"],
    },
  ],

  leadership: [
    {
      role: "Founder",
      org: "McMaster Self-Driving Car Club",
      dateRange: "Jan 2025 – Present",
      description:
        "Started the club and grew it to **20+ members**, building a ROS perception stack on Linux: real-time camera pipelines, publish/subscribe messaging between concurrent processes, and simulation-based edge case validation against labeled failure scenarios.",
    },
    {
      role: "President",
      org: "McMaster Egyptian Student Association",
      dateRange: "Sep 2024 – Present",
      description:
        "Run a **25-person exec team** across marketing, finance, and operations. **8+ events** delivered for **1,000+ attendees**, and a rebuilt planning process that cut event overhead **30%** after tracking where the time and budget were actually going.",
    },
  ],

  education: [
    {
      school: "McMaster University",
      degree: "B.Eng. Software Engineering (Co-Op)",
      dateRange: "Sep 2023 – May 2028 (Expected)",
      location: "Hamilton, ON",
      achievements: [
        "**3.91 / 4.00** GPA, top 1% of cohort",
        "Admitted under Free Choice Admission, top 1% of all applicants",
      ],
      coursework: [
        "Computer Architecture",
        "Real-Time Systems",
        "Distributed Systems",
        "Data Structures & Algorithms",
        "Database Systems",
        "Machine Learning",
        "Software Design",
      ],
    },
  ],
};
