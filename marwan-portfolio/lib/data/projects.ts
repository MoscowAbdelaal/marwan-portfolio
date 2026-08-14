export const projects = [
  {
    id: "giu-nexus",
    title: "GIU Nexus – AI-Powered Career & Talent Platform",
    description:
      "Led a team of 10 to build a full-stack MERN application with Hugging Face NLP for skill extraction and zero-shot classification, cosine similarity recommendations, JWT authentication, and webhook-based notifications. Optimized backend performance and validated all endpoints via Postman.",
    tech: ["React (Vite)", "Node.js", "Express", "MongoDB", "Hugging Face", "JWT", "Nodemailer", "GitLab"],
    github: "https://github.com/MoscowAbdelaal/GIU-Nexus",
    highlight: "Team lead · 10 people · Full MERN + AI",
  },
  {
    id: "crud-api",
    title: "CRUD API – Production REST API with Auth & Testing",
    description:
      "Built a full REST API with 12 endpoints, persistent SQLite storage, 23 automated tests at 100% pass rate, JWT auth via Supabase, reusable middleware, and Swagger UI docs. Later migrated to PostgreSQL in Docker using a clean repository pattern.",
    tech: ["Node.js", "Express", "SQLite", "PostgreSQL", "Docker", "Supabase Auth", "JWT", "Swagger UI"],
    github: "https://github.com/MoscowAbdelaal/crud-api",
    highlight: "100% test pass rate · Production-ready",
  },
  {
    id: "web-scraping",
    title: "Web Scraping Pipeline with AI Enrichment",
    description:
      "Production-grade scraper collecting 60 books with Zod validation, exponential backoff, polite rate limiting, caching (45s → 1s), CSV export, change detection, and local AI enrichment via Ollama for category and summary generation.",
    tech: ["Node.js", "Cheerio", "Axios", "Zod", "Ollama", "HTTP Server"],
    github: null,
    highlight: "AI-enriched · Caching + retry logic",
  },
  {
    id: "clash-of-clans",
    title: "Clash of Clans: Heroes – 2-Player Strategy Game",
    description:
      "Independently built a complete 2-player turn-based strategy game across 3 milestones with full OOP architecture (abstract classes, interfaces, inheritance, custom exceptions) and a JavaFX frontend with real-time updates.",
    tech: ["Java", "JavaFX", "Eclipse", "OOP", "CSV"],
    github: "https://github.com/MoscowAbdelaal/Clash-of-clans-Legends",
    highlight: "Full game engine from scratch",
  },
  {
    id: "hrms",
    title: "Human Resource Management System (HRMS)",
    description:
      "Led full EERD and relational schema design, implemented optimized SQL stored procedures as the backend layer, and delivered a multi-role system covering payroll, attendance, leave, hiring, and performance reviews.",
    tech: ["Microsoft SQL Server", "Node.js", "SQL", "Stored Procedures", "HTML", "CSS"],
    github: null,
    highlight: "Complete database design + backend",
  },
  {
    id: "cryptography",
    title: "Cryptography Suite – 3DES & Diffie-Hellman/RSA",
    description:
      "Implemented Triple DES encryption from scratch using EDE structure across 16-round blocks, and built a secure communication system combining Diffie-Hellman key exchange with RSA digital signatures simulating HTTPS-like secure transmission.",
    tech: ["Python", "Jupyter Notebook"],
    github: null,
    highlight: "From-scratch cryptography",
  },
  {
    id: "ml-classification",
    title: "Machine Learning – Classification & Clustering",
    description:
      "Built Naive Bayes and KNN classifiers to predict metabolic syndrome risk with hyperparameter tuning and Kaggle submission. Applied K-Means, GMM, BIRCH, and Agglomerative Clustering to 561-feature HAR sensor data with PCA visualization and anomaly detection.",
    tech: ["Python", "scikit-learn", "pandas", "matplotlib", "Jupyter", "Kaggle"],
    github: null,
    highlight: "Classification + Clustering + PCA",
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems – MapReduce & Theater Booking",
    description:
      "Implemented MapReduce for inverted index, temperature aggregation, movie ratings, and product sales. Built a distributed theater booking simulation with 4 parallel counters, weak consistency, local queuing, and synchronized global state using distributed locking.",
    tech: ["Python", "Google Colab"],
    github: null,
    highlight: "MapReduce + Distributed locking",
  },
  {
    id: "unity",
    title: "Interactive Media Experience – Unity",
    description:
      "Designed and built an interactive Unity experience with 4+ media types (graphics, animation, audio, text), featuring 3+ meaningful user interactions, state-based media responses, and a fully playable build.",
    tech: ["Unity", "C#", "AudioSource", "Animator", "TextMeshPro"],
    github: null,
    highlight: "Interactive Unity experience",
  },
];