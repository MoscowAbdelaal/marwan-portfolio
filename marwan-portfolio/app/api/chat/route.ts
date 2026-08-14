import { NextRequest, NextResponse } from "next/server";
import { knowledgeBase } from "@/lib/data/knowledge";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const lower = message.toLowerCase().trim();

    let reply = "I don't have that information in Marwan's verified portfolio.";

    // ========== PROFILE / ABOUT ==========
    if (
      lower.includes("who is marwan") ||
      lower.includes("about marwan") ||
      lower.includes("who are you") ||
      lower.includes("tell me about yourself") ||
      lower.includes("introduce") ||
      lower === "hi" ||
      lower === "hello"
    ) {
      reply = `Marwan Abdelaal is a Backend & Full-Stack Developer and AI Engineering Intern based in Cairo, Egypt. He is a 2nd-year Software Engineering student at the German International University (GIU) with a Minor in IT Security (GPA 2.4 – Very Good). He is currently interning at FlyRank AI and holds 20 Anthropic Academy certifications.`;
    }

    // ========== PROJECTS (general) ==========
    else if (
      lower.includes("project") ||
      lower.includes("what has he built") ||
      lower.includes("what did he build") ||
      lower.includes("portfolio")
    ) {
      reply = `Marwan has built the following projects:

• GIU Nexus – AI-powered MERN career & talent platform (led a team of 10)
• Production REST API & Scraping Pipeline (FlyRank) with JWT, Docker, PostgreSQL and Ollama
• Web Scraping Pipeline with AI Enrichment
• Clash of Clans: Heroes – full 2-player Java/JavaFX strategy game
• Human Resource Management System (HRMS)
• Cryptography Suite (3DES + Diffie-Hellman/RSA)
• Machine Learning – Classification & Clustering (Naive Bayes, KNN, K-Means, etc.)
• Distributed Systems – MapReduce & Theater Booking Simulation
• Interactive Media Experience built with Unity

You can ask about any specific project for more details.`;
    }

    // ========== SPECIFIC PROJECTS ==========
    else if (lower.includes("giu nexus") || lower.includes("nexus")) {
      reply = `GIU Nexus is an AI-powered Career & Talent Platform. Marwan led a team of 10 to build a full-stack MERN application using React (Vite), Node.js, Express, MongoDB, Hugging Face API, JWT and Nodemailer. It features skill extraction (NER), zero-shot job classification, cosine similarity recommendations, and webhook-based email notifications.`;
    } else if (lower.includes("crud") || lower.includes("rest api") || lower.includes("flyrank api")) {
      reply = `The Production REST API (crud-api) is a full Node.js/Express API with 12 endpoints, SQLite then PostgreSQL, 23 automated tests (100% pass rate), JWT authentication via Supabase, reusable middleware, Swagger UI, and a clean repository pattern with Docker.`;
    } else if (lower.includes("scraping") || lower.includes("scraper") || lower.includes("ollama")) {
      reply = `Marwan built a production-grade web scraping pipeline that collects 60 books using Cheerio + Axios. It includes Zod validation, exponential backoff, polite rate limiting, caching (45s → 1s), CSV export, change detection, and local AI enrichment via Ollama for category and summary generation.`;
    } else if (lower.includes("clash") || lower.includes("game")) {
      reply = `Clash of Clans: Heroes is a complete 2-player turn-based strategy game that Marwan built independently in Java + JavaFX. It has full OOP architecture (abstract classes, interfaces, inheritance, custom exceptions) and a real-time JavaFX frontend.`;
    } else if (lower.includes("hrms") || lower.includes("human resource")) {
      reply = `The Human Resource Management System (HRMS) includes full EERD and relational schema design. Marwan implemented optimized SQL stored procedures and functions as the backend for a multi-role system covering payroll, attendance, leave, hiring, and performance reviews.`;
    } else if (lower.includes("crypto") || lower.includes("3des") || lower.includes("diffie") || lower.includes("rsa")) {
      reply = `The Cryptography Suite implements Triple DES (3DES) encryption from scratch using the EDE structure across 16-round blocks, plus a secure communication system that combines Diffie-Hellman key exchange with RSA digital signatures (simulating HTTPS-like transmission).`;
    } else if (lower.includes("machine learning") || lower.includes("ml") || lower.includes("knn") || lower.includes("naive") || lower.includes("clustering")) {
      reply = `Marwan built Naive Bayes and KNN classifiers to predict metabolic syndrome risk (with hyperparameter tuning and Kaggle submission). He also applied K-Means, GMM, BIRCH and Agglomerative Clustering on 561-feature HAR sensor data with PCA visualization and anomaly detection.`;
    } else if (lower.includes("distributed") || lower.includes("mapreduce") || lower.includes("theater")) {
      reply = `In Distributed Systems, Marwan implemented MapReduce for inverted index, temperature aggregation, movie ratings and product sales. He also built a distributed theater booking simulation with 4 parallel counters, weak consistency, local queuing, and synchronized global state using distributed locking.`;
    } else if (lower.includes("unity")) {
      reply = `The Interactive Media Experience is a Unity project with 4+ media types (graphics, animation, audio, text), 3+ meaningful user interactions, state-based media responses, and a fully playable build.`;
    }

    // ========== EXPERIENCE ==========
    else if (
      lower.includes("experience") ||
      lower.includes("intern") ||
      lower.includes("work") ||
      lower.includes("flyrank") ||
      lower.includes("job")
    ) {
      reply = `Marwan’s experience:

• Backend AI Engineering Intern at FlyRank AI (Jun 2026 – Present, Remote)
  – Built production REST APIs, JWT auth, scraping pipelines with Ollama, Docker + PostgreSQL migration, and prompt engineering. Completed 20 Anthropic certifications.

• Part-Time Teaching Assistant at ICTeam El Komy (Jun 2024 – May 2026)
  – Guided 20+ students in lab sessions and adapted content using agile feedback.

• Event Volunteer & Usher (2024 – Present)
  – Coordinated university graduations, career fairs, seniors photoshoots, and served as university representative at Educate Event 2026.`;
    }

    // ========== SKILLS ==========
    else if (
      lower.includes("skill") ||
      lower.includes("tech") ||
      lower.includes("stack") ||
      lower.includes("technologies") ||
      lower.includes("tools")
    ) {
      reply = `Marwan’s main skills:

Backend: Node.js, Express.js, REST APIs, JWT, Middleware, Supabase Auth, Swagger UI
Languages: JavaScript, Python, Java, C#, SQL, HTML & CSS
Databases: PostgreSQL, SQLite, MongoDB, Microsoft SQL Server
AI & ML: Hugging Face, Ollama, NLP, Prompt Engineering, Embeddings, Naive Bayes, KNN, K-Means, PCA
Security: 3DES, RSA, Diffie-Hellman, AES, SQL Injection Prevention
DevOps: Docker, Docker Compose, Git, GitHub, GitLab
Other: React.js, JavaFX, Unity, MapReduce, Distributed Locking, Agile/Scrum`;
    }

    // ========== CERTIFICATIONS ==========
    else if (
      lower.includes("certif") ||
      lower.includes("anthropic") ||
      lower.includes("claude") ||
      lower.includes("academy")
    ) {
      reply = `Marwan holds 20 Anthropic Academy certifications (completed Jul–Aug 2026), including:

AI Fluency series, Claude 101, Claude Code 101, Claude Code in Action, Building with the Claude API, Introduction to Agent Skills, Introduction to Subagents, Model Context Protocol (MCP), Claude on Google Cloud, Claude with Amazon Bedrock, Teaching AI Fluency, and more.`;
    }

    // ========== EDUCATION ==========
    else if (
      lower.includes("education") ||
      lower.includes("university") ||
      lower.includes("giu") ||
      lower.includes("study") ||
      lower.includes("student") ||
      lower.includes("gpa")
    ) {
      reply = `Marwan is a 2nd-year Software Engineering student at the German International University (GIU) in Cairo, with a Minor in IT Security. His GPA is 2.4 (Very Good on the German scale). Expected graduation is 2028.`;
    }

    // ========== CONTACT ==========
    else if (
      lower.includes("contact") ||
      lower.includes("email") ||
      lower.includes("phone") ||
      lower.includes("reach") ||
      lower.includes("linkedin") ||
      lower.includes("github") ||
      lower.includes("how can i")
    ) {
      reply = `You can contact Marwan at:

Email: marwan.abdelaal@outlook.com
Phone: +201111210005
LinkedIn: linkedin.com/in/marwan-abdelaal
GitHub: github.com/MoscowAbdelaal
Location: Cairo, Egypt`;
    }

    // ========== LOCATION ==========
    else if (lower.includes("where") || lower.includes("location") || lower.includes("based") || lower.includes("cairo")) {
      reply = `Marwan is based in Cairo, Egypt.`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}