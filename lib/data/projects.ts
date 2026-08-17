export const projects = [
  {
    id: "billing-engine",
    title: "Usage Metering and Billing Engine",
    description:
      "SaaS usage metering and billing engine with exactly-once metering using idempotency keys, quota enforcement (honest 429/402 responses), AI token cost calculation with cached/reasoning token pricing, and Stripe test mode integration with signature-verified deduplicating webhooks.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe", "BullMQ", "Idempotency"],
    github: "https://github.com/MoscowAbdelaal/flyrank-capstone-metering-billing.git",
    highlight: "FlyRank Capstone · Stripe + Exactly-once",
  },
  {
    id: "social-publisher",
    title: "Multi-Platform Social Campaign Publisher",
    description:
      "Idempotent multi-platform social campaign publisher with durable BullMQ/Redis scheduler, HMAC-verified webhooks that reject forgeries with 400, AES-GCM encrypted OAuth tokens, and rate-limit-aware retry logic with backoff.",
    tech: ["Node.js", "BullMQ", "Redis", "HMAC", "AES-GCM", "OAuth"],
    github: "https://github.com/MoscowAbdelaal/flyrank-capstone-social-studio.git",
    highlight: "FlyRank Capstone · Idempotency + Security",
  },
  {
    id: "giu-nexus",
    title: "GIU Nexus – AI-Powered Career & Talent Platform",
    description:
      "Led a team of 10 to build a full-stack MERN application with Hugging Face NLP for skill extraction and zero-shot classification, cosine similarity recommendations, JWT authentication, and webhook-based notifications.",
    tech: ["React (Vite)", "Node.js", "Express", "MongoDB", "Hugging Face", "JWT"],
    github: "https://github.com/MoscowAbdelaal/GIU-Nexus",
    highlight: "Team lead · 10 people · Full MERN + AI",
  },
  {
    id: "crud-api",
    title: "Production REST API with Auth & Testing",
    description:
      "Full REST API with 12 endpoints, persistent SQLite then PostgreSQL in Docker, 23 automated tests at 100% pass rate, JWT auth via Supabase, reusable middleware, and Swagger UI documentation.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker", "Supabase Auth", "JWT", "Swagger UI"],
    github: "https://github.com/MoscowAbdelaal/crud-api",
    highlight: "100% test pass rate · Production-ready",
  },
  {
    id: "web-scraping",
    title: "Web Scraping Pipeline with AI Enrichment",
    description:
      "Production-grade scraper collecting 60 books with Zod validation, exponential backoff, caching (45s → 1s), CSV export, and local AI enrichment via Ollama for category and summary generation.",
    tech: ["Node.js", "Cheerio", "Axios", "Zod", "Ollama"],
    github: "https://github.com/MoscowAbdelaal/crud-api/tree/main/scraper",
    highlight: "AI-enriched · Caching + retry logic",
  },
  {
    id: "clash-of-clans",
    title: "Clash of Clans: Heroes – 2-Player Strategy Game",
    description:
      "Independently built a complete 2-player turn-based strategy game with full OOP architecture (abstract classes, interfaces, inheritance, custom exceptions) and a JavaFX frontend with real-time updates.",
    tech: ["Java", "JavaFX", "OOP"],
    github: "https://github.com/MoscowAbdelaal/Clash-of-clans-Legends",
    highlight: "Full game engine from scratch",
  },
  {
    id: "hrms",
    title: "Human Resource Management System (HRMS)",
    description:
      "Full EERD and relational schema design with optimized SQL stored procedures for a multi-role system covering payroll, attendance, leave, hiring, and performance reviews.",
    tech: ["Microsoft SQL Server", "Node.js", "SQL", "Stored Procedures"],
    github: null,
    highlight: "Complete database design + backend",
  },
  {
    id: "cryptography",
    title: "Cryptography Suite – 3DES & Diffie-Hellman/RSA",
    description:
      "Implemented Triple DES encryption from scratch using EDE structure, and built a secure communication system combining Diffie-Hellman key exchange with RSA digital signatures.",
    tech: ["Python", "Jupyter Notebook"],
    github: null,
    highlight: "From-scratch cryptography",
  },
  {
    id: "ml-classification",
    title: "Machine Learning – Classification & Clustering",
    description:
      "Built Naive Bayes and KNN classifiers for metabolic syndrome prediction, plus K-Means, GMM, BIRCH and Agglomerative Clustering on 561-feature HAR sensor data with PCA visualization.",
    tech: ["Python", "scikit-learn", "pandas", "matplotlib"],
    github: null,
    highlight: "Classification + Clustering + PCA",
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems – MapReduce & Theater Booking",
    description:
      "Implemented MapReduce for inverted index and aggregations, and built a distributed theater booking simulation with parallel counters, weak consistency, and distributed locking.",
    tech: ["Python", "Google Colab"],
    github: null,
    highlight: "MapReduce + Distributed locking",
  },
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