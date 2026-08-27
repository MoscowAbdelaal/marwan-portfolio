export const projects = [
  // ===== #1 — AI IMAGE UNDERSTANDING (Most Impressive) =====
  {
    id: "image-understanding",
    title: "AI Image Understanding & Content Matching Engine",
    description:
      "An AI-powered system that automatically tags images and matches them to articles with a mismatch guard that rejects wrong matches. Images are processed through Gemini Flash to extract subject, category, attributes, caption, and confidence score. The mismatch guard combines tag validation, semantic similarity, and confidence thresholds to decide if a match is good enough — rejecting incorrect pairings with human-readable explanations. All vision processing runs as background jobs with retries and per-call cost tracking.",
    tech: ["Node.js", "Express", "PostgreSQL", "Gemini API", "Zod", "Docker", "Background Jobs"],
    github: "https://github.com/MoscowAbdelaal/flyrank-capstone-image-relevance",
    highlight: "FlyRank Capstone · AI Vision · Mismatch Guard",
  },

  // ===== #2 — AI MEETING ASSISTANT (Live Deployment) =====
  {
    id: "ai-meeting-assistant",
    title: "AI Meeting Assistant – Summarization & Action Items",
    description:
      "A full-stack application that extracts summaries, decisions, and action items from meeting transcripts using AI. Features user authentication, PDF reporting, 24-hour caching for AI results, and automated daily reminders for overdue tasks. Built as a 7-concept FlyRank capstone and deployed live.",
    tech: ["React", "Node.js", "Express", "Supabase", "Gemini API", "pdfmake", "node-cron"],
    github: "https://github.com/MoscowAbdelaal/ai-meeting-assistant",
    live: "https://ai-meeting-assistant-frontend-h2po.onrender.com",
    highlight: "FlyRank 10x Capstone · Live Deployment",
  },

  // ===== #3 — EMBEDDABLE WIDGET PLATFORM (Complete SaaS) =====
  {
    id: "widget-platform",
    title: "Embeddable Widget Platform – Signup Forms, CTAs, Popovers",
    description:
      "A platform that lets customers create signup forms, CTAs, and popovers — then install them on any website with a single <script> tag. Handles rendering, validation, rate limiting, spam detection, geo enrichment, GDPR compliance, and real-time dashboard updates. Production bundle with versioning, targeting rules, and proof-of-work CAPTCHA.",
    tech: ["Node.js", "Express", "PostgreSQL", "SSE", "Docker", "CORS", "Rate Limiting"],
    github: "https://github.com/MoscowAbdelaal/flyrank-capstone-widget-platform",
    highlight: "FlyRank Capstone · Embeddable Widgets · 7 Concepts",
  },

  // ===== #4 — AI DECISION FLOW (Visual + AI) =====
  {
    id: "ai-decision-flow",
    title: "AI Decision Flow with React Flow & Inngest",
    description:
      "A full-stack application for visualizing and managing AI decision-making processes. Uses React Flow for an interactive flowchart interface and Inngest for durable background job processing.",
    tech: ["React", "React Flow", "Node.js", "Inngest", "TypeScript"],
    github: "https://github.com/MoscowAbdelaal/ai-decision-flow",
    highlight: "React Flow · Inngest · Full-Stack AI",
  },

  // ===== #5 — BILLING ENGINE (Stripe + Exactly-once) =====
  {
    id: "billing-engine",
    title: "Usage Metering and Billing Engine",
    description:
      "SaaS usage metering and billing engine with exactly-once metering using idempotency keys, quota enforcement (honest 429/402 responses), AI token cost calculation with cached/reasoning token pricing, and Stripe test mode integration with signature-verified deduplicating webhooks.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe", "BullMQ", "Idempotency"],
    github: "https://github.com/MoscowAbdelaal/flyrank-capstone-metering-billing.git",
    highlight: "FlyRank Capstone · Stripe + Exactly-once",
  },

  // ===== #6 — GIU NEXUS (Team Lead + AI) =====
  {
    id: "giu-nexus",
    title: "GIU Nexus – AI-Powered Career & Talent Platform",
    description:
      "Led a team of 10 to build a full-stack MERN application with Hugging Face NLP for skill extraction and zero-shot classification, cosine similarity recommendations, JWT authentication, and webhook-based notifications.",
    tech: ["React (Vite)", "Node.js", "Express", "MongoDB", "Hugging Face", "JWT"],
    github: "https://github.com/MoscowAbdelaal/GIU-Nexus",
    highlight: "Team lead · 10 people · Full MERN + AI",
  },

  // ===== #7 — SOCIAL CAMPAIGN PUBLISHER (Security) =====
  {
    id: "social-publisher",
    title: "Multi-Platform Social Campaign Publisher",
    description:
      "Idempotent multi-platform social campaign publisher with durable BullMQ/Redis scheduler, HMAC-verified webhooks that reject forgeries with 400, AES-GCM encrypted OAuth tokens, and rate-limit-aware retry logic with backoff.",
    tech: ["Node.js", "BullMQ", "Redis", "HMAC", "AES-GCM", "OAuth"],
    github: "https://github.com/MoscowAbdelaal/flyrank-capstone-social-studio.git",
    highlight: "FlyRank Capstone · Idempotency + Security",
  },

  // ===== #8 — PRODUCTION REST API (100% Tests) =====
  {
    id: "crud-api",
    title: "Production REST API with Auth & Testing",
    description:
      "Full REST API with 12 endpoints, persistent SQLite then PostgreSQL in Docker, 23 automated tests at 100% pass rate, JWT auth via Supabase, reusable middleware, and Swagger UI documentation.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker", "Supabase Auth", "JWT", "Swagger UI"],
    github: "https://github.com/MoscowAbdelaal/crud-api",
    highlight: "100% test pass rate · Production-ready",
  },

  // ===== #9 — PDF REPORT GENERATOR =====
  {
    id: "pdf-report-generator",
    title: "PDF Report Generator with Parameterized Queries",
    description:
      "A service that generates branded PDF sales reports from SQL data. Features parameterized queries (e.g., last N days), a control panel to list all reports, idempotent generation, and download endpoints.",
    tech: ["Node.js", "Express", "Playwright", "SQLite", "PDF Generation"],
    github: "https://github.com/MoscowAbdelaal/flyrank-pdf-report-generator",
    highlight: "FlyRank AI · PDF Generation + Idempotency",
  },

  // ===== #10 — BACKGROUND JOBS (Async Processing) =====
  {
    id: "flyrank-background-jobs",
    title: "Background Jobs with Inngest",
    description:
      "An Express API that offloads slow work to background jobs with Inngest. Demonstrates fast API responses (202 Accepted), status polling, automatic retries on failure, and scheduled cron jobs for routine tasks. Built as a FlyRank AI internship project.",
    tech: ["Node.js", "Express", "Inngest", "TypeScript", "Cron"],
    github: "https://github.com/MoscowAbdelaal/flyrank-background-jobs",
    highlight: "FlyRank AI · Background Jobs + Cron",
  },

  // ===== #11 — WEB SCRAPING (Data Pipeline) =====
  {
    id: "web-scraping",
    title: "Web Scraping Pipeline with AI Enrichment",
    description:
      "Production-grade scraper collecting 60 books with Zod validation, exponential backoff, caching (45s → 1s), CSV export, and local AI enrichment via Ollama for category and summary generation.",
    tech: ["Node.js", "Cheerio", "Axios", "Zod", "Ollama"],
    github: "https://github.com/MoscowAbdelaal/crud-api/tree/main/scraper",
    highlight: "AI-enriched · Caching + retry logic",
  },

  // ===== #12 — CLASH OF CLANS (Game Engine) =====
  {
    id: "clash-of-clans",
    title: "Clash of Clans: Heroes – 2-Player Strategy Game",
    description:
      "Independently built a complete 2-player turn-based strategy game with full OOP architecture (abstract classes, interfaces, inheritance, custom exceptions) and a JavaFX frontend with real-time updates.",
    tech: ["Java", "JavaFX", "OOP"],
    github: "https://github.com/MoscowAbdelaal/Clash-of-clans-Legends",
    highlight: "Full game engine from scratch",
  },

  // ===== #13 — CRYPTOGRAPHY (Low-level Security) =====
  {
    id: "cryptography",
    title: "Cryptography Suite – 3DES & Diffie-Hellman/RSA",
    description:
      "Implemented Triple DES encryption from scratch using EDE structure, and built a secure communication system combining Diffie-Hellman key exchange with RSA digital signatures.",
    tech: ["Python", "Jupyter Notebook"],
    github: null,
    highlight: "From-scratch cryptography",
  },

  // ===== #14 — ML CLASSIFICATION (Data Science) =====
  {
    id: "ml-classification",
    title: "Machine Learning – Classification & Clustering",
    description:
      "Built Naive Bayes and KNN classifiers for metabolic syndrome prediction, plus K-Means, GMM, BIRCH and Agglomerative Clustering on 561-feature HAR sensor data with PCA visualization.",
    tech: ["Python", "scikit-learn", "pandas", "matplotlib"],
    github: null,
    highlight: "Classification + Clustering + PCA",
  },

  // ===== #15 — DISTRIBUTED SYSTEMS =====
  {
    id: "distributed-systems",
    title: "Distributed Systems – MapReduce & Theater Booking",
    description:
      "Implemented MapReduce for inverted index and aggregations, and built a distributed theater booking simulation with parallel counters, weak consistency, and distributed locking.",
    tech: ["Python", "Google Colab"],
    github: null,
    highlight: "MapReduce + Distributed locking",
  },

  // ===== #16 — HRMS (Database Design) =====
  {
    id: "hrms",
    title: "Human Resource Management System (HRMS)",
    description:
      "Full EERD and relational schema design with optimized SQL stored procedures for a multi-role system covering payroll, attendance, leave, hiring, and performance reviews.",
    tech: ["Microsoft SQL Server", "Node.js", "SQL", "Stored Procedures"],
    github: null,
    highlight: "Complete database design + backend",
  },

  // ===== #17 — UNITY (Game Dev) =====
  {
    id: "unity",
    title: "Interactive Media Experience – Unity",
    description:
      "Interactive Unity experience with multiple media types, meaningful user interactions, state-based responses, and a fully playable build.",
    tech: ["Unity", "C#"],
    github: null,
    highlight: "Interactive Unity experience",
  },
];