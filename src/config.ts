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
    "Adam Dabees | Machine Vision Software Engineer Intern at Tesla. Machine vision, distributed systems, infrastructure. Available Jan–Aug 2027.",

  // Current status, surfaced quietly in the hero and header.
  now: {
    role: "Machine Vision Software Engineering Intern",
    org: "Tesla, Vision Systems",
    location: "Palo Alto, CA",
  },
  availability: "Available Jan – Aug 2027 (up to 8 months)",

  social: {
    email: "adamdabees8@gmail.com",
    linkedin: "https://linkedin.com/in/adam-dabees-bab51a217",
    github: "https://github.com/Adam-Dabees",
  },

  // Small data strip under the hero. Kept short on purpose.
  highlights: [
    { value: "3.92", unit: "/ 4.00", label: "GPA, top 1% of cohort" },
    { value: "24×", unit: "faster", label: "data pipeline load, 41.5s to 1.7s" },
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
        "HALCON",
        "OpenCV",
        "PyTorch",
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
        "MySQL",
        "pgvector",
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
        "Build the decision layer of lineside computer vision software on a live battery production line using HALCON, making inline pass/fail calls on real camera sensor data within a fixed latency budget.",
        "Built and own an internal platform end to end for a **~100-person org** (Python, Go, and C# services, React frontend, Docker, Kubernetes, CI/CD) that tests camera placement in 3D against live CAD, replacing estimates worth **$100K per camera**.",
        "Cut the platform's data pipeline load time **24x (41.5s to 1.7s)** by profiling Python and C++ hot paths, caching parsed geometry in a binary format, and batching calls over **1.3M vertices**.",
        "Migrated the platform's data store from SQLite to PostgreSQL and load-balanced image uploads from vision machines across FTP servers.",
        "Training a computer vision model from scratch in PyTorch for the team's machine vision systems.",
        "Debug production line failures on the floor across software, hardware, and network layers; learned Go in my first week to ship a same-day fix for a live production failure.",
      ],
    },
    {
      company: "Ontario Teachers' Pension Plan",
      context: "$247B pension fund",
      title: "Software Engineer (Co-Op)",
      dateRange: "May 2026 – Aug 2026",
      location: "Toronto, ON",
      bullets: [
        "Built LLM agents with Model Context Protocol (MCP) integrations into Dynatrace, Jira, and Azure that flag **5–10 failing VMs a day**, replacing **2+ hours** of daily log review for 3 engineers; adopted by the **15+ person** InfoSec team.",
        "Automated a **15–25 minute** manual per-VM override with Ansible, removing it from every cloud deployment; shipped production services on Kubernetes (AKS) in Azure with Terraform.",
        "Wrote hundreds of unit, integration, and end-to-end tests gating every release through CI/CD (Jenkins, GitHub Actions), with security review on a 10-person team.",
        "Debugged production issues using Dynatrace distributed tracing.",
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
    {
      company: "AFA Solutions",
      context: "Software consultancy",
      title: "Founder",
      dateRange: "Jan 2024 – Aug 2026",
      location: "Remote",
      bullets: [
        "Built CRMs, booking systems, and websites for **25 small-business clients** as sole engineer, from requirements to deployment; one salon's deposit flow took its show rate to **98%** with **100+ bookings** in two months.",
        "Handed operations to partners in August 2026.",
      ],
    },
  ],
  projects: [
    {
      name: "StringBench",
      tagline: "Translation review platform",
      year: "Sep 2026 – Present",
      description:
        "Concurrent Go workers claim jobs from a database queue with SKIP LOCKED so no job runs twice, with a rebuildable pgvector index and LLM checks scored against a labelled evaluation set. The full stack runs in Docker Compose with a Jenkins pipeline.",
      skills: ["Go", "Gin", "Python", "MySQL", "PostgreSQL", "pgvector", "Docker Compose", "Jenkins"],
    },
    {
      name: "Shopifly",
      tagline: "Real-time monitoring product",
      year: "2024 – Present",
      description:
        "Live real-time monitoring product with paying customers, tracking **140K+ records** at **sub-800ms** latency. Built the data pipeline, schema, backend, and Stripe billing.",
      link: "https://www.shopifly.io",
      skills: ["Next.js 15", "AWS Lambda", "DynamoDB", "API Gateway", "Playwright", "Stripe", "Cognito"],
    },
    {
      name: "LiveCategories",
      tagline: "Real-time distributed platform",
      year: "2025",
      description:
        "Real-time distributed platform handling **1,000+ concurrent users** at **sub-100ms** latency: events stream through Kafka into stateful services with Redis caching and horizontal scaling on Kubernetes.",
      link: "https://live-categories.vercel.app",
      skills: ["Go", "Python", "Kafka", "Redis", "Kubernetes", "Docker"],
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
        "**3.92 / 4.00** GPA, top 1% of cohort",
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
