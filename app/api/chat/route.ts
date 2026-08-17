import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { knowledgeBase } from "@/lib/data/knowledge";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

function getLocalReply(message: string): string {
  const lower = message.toLowerCase().trim();

  // ===== Greetings & Casual =====
  if (lower === "hi" || lower === "hello" || lower === "hey" || lower === "yo") {
    return "Hi there! I'm Moscow AI, Marwan's personal assistant. How can I help you learn about Marwan today?";
  }

  if (lower.includes("how are you") || lower.includes("how're you") || lower.includes("how are ya")) {
    return "I'm doing great, thanks for asking! I'm here to help you learn about Marwan. What would you like to know about him?";
  }

  if (lower === "okay" || lower === "ok" || lower === "cool" || lower === "nice") {
    return "Awesome! Feel free to ask me about Marwan's projects, experience, skills, or certifications. I'm here to help!";
  }

  if (lower.includes("thanks") || lower.includes("thank you") || lower.includes("thx")) {
    return "You're welcome! Let me know if you have any other questions about Marwan.";
  }

  if (lower.includes("bye") || lower.includes("goodbye") || lower.includes("see you")) {
    return "Goodbye! Feel free to come back anytime if you have more questions about Marwan.";
  }

  // ===== AI Identity =====
  if (
    lower === "who are you" ||
    lower === "who're you" ||
    lower === "tell me about yourself" ||
    lower === "introduce yourself"
  ) {
    return "I'm Moscow AI, Marwan's personal portfolio assistant. I'm here to help you learn about Marwan's background, projects, and experience. What would you like to know?";
  }

  // ===== About Marwan =====
  if (
    lower.includes("who is marwan") ||
    lower.includes("about marwan") ||
    lower.includes("tell me about marwan") ||
    lower.includes("introduce marwan") ||
    lower.includes("marwan's background") ||
    lower.includes("marwan abdelaal")
  ) {
    return "Marwan Abdelaal is a Backend & Full-Stack Developer and a Software Engineering student at GIU with a minor in IT Security. He's currently interning as a Backend AI Engineering Intern at FlyRank AI, where he builds production-grade systems and AI-powered solutions.";
  }

  // ===== SPECIFIC PROJECTS =====
  
  if (lower.includes("billing") || lower.includes("metering") || lower.includes("stripe")) {
    return "That's his FlyRank capstone project — a usage metering and billing engine with Stripe integration, exactly-once processing, and AI token cost calculation. It's a production-grade system built with Node.js, PostgreSQL, and Redis. The system handles quota enforcement with honest 429/402 responses and includes signature-verified webhooks for Stripe integration.";
  }

  if (lower.includes("social") || lower.includes("campaign") || lower.includes("publisher")) {
    return "The Multi-Platform Social Campaign Publisher is one of Marwan's FlyRank capstone projects. It's a robust system with idempotent publishing, durable BullMQ/Redis scheduling, HMAC-verified webhooks that reject forgeries with 400, AES-GCM encrypted OAuth tokens, and rate-limit-aware retry logic with backoff. It was built with Node.js, BullMQ, Redis, and security best practices.";
  }

  if (lower.includes("giu nexus") || lower.includes("nexus")) {
    return "GIU Nexus is an AI-powered career platform Marwan led as a team of 10 developers. It's built with the MERN stack and Hugging Face NLP for skill extraction and zero-shot classification, with cosine similarity recommendations, JWT authentication, and webhook-based notifications.";
  }

  if (lower.includes("clash") || lower.includes("game")) {
    return "A 2-player turn-based strategy game Marwan built from scratch in Java and JavaFX with full OOP architecture including abstract classes, interfaces, inheritance, and custom exceptions.";
  }

  if (lower.includes("api") || lower.includes("rest")) {
    return "Marwan built a production REST API with 12 endpoints, JWT authentication via Supabase Auth with reusable middleware, 23 automated tests at 100% pass rate, and Swagger UI documentation. He built it with SQLite persistence then migrated to PostgreSQL in Docker using a clean repository pattern.";
  }

  if (lower.includes("scraping") || lower.includes("scraper")) {
    return "Marwan built a production-grade web scraping pipeline that collects data with Zod validation, exponential backoff, caching (45s → 1s), CSV export, and local AI enrichment via Ollama for category and summary generation. It uses Cheerio and Axios with Node.js.";
  }

  if (lower.includes("hrms") || lower.includes("human resource")) {
    return "Marwan designed a complete Human Resource Management System with full EERD and relational schema design, using optimized SQL stored procedures for a multi-role system covering payroll, attendance, leave, hiring, and performance reviews with Microsoft SQL Server.";
  }

  if (lower.includes("cryptography") || lower.includes("3des") || lower.includes("diffie-hellman")) {
    return "Marwan implemented a Cryptography Suite including Triple DES encryption from scratch using EDE structure, and built a secure communication system combining Diffie-Hellman key exchange with RSA digital signatures using Python and Jupyter Notebook.";
  }

  if (lower.includes("machine learning") || lower.includes("classification") || lower.includes("clustering")) {
    return "Marwan built Machine Learning models including Naive Bayes and KNN classifiers for metabolic syndrome prediction, plus K-Means, GMM, BIRCH and Agglomerative Clustering on 561-feature HAR sensor data with PCA visualization using Python, scikit-learn, and pandas.";
  }

  if (lower.includes("mapreduce") || lower.includes("distributed")) {
    return "Marwan implemented MapReduce for inverted index and aggregations, and built a distributed theater booking simulation with parallel counters, weak consistency, and distributed locking using Python and Google Colab.";
  }

  if (lower.includes("unity")) {
    return "Marwan built an interactive Unity experience with multiple media types, meaningful user interactions, state-based responses, and a fully playable build using Unity and C#.";
  }

  // ===== GENERAL PROJECTS =====
  if (lower.includes("project") || lower.includes("built") || lower.includes("work")) {
    return "Marwan has built some impressive projects including a SaaS usage metering and billing engine, a multi-platform social campaign publisher, the AI-powered GIU Nexus career platform, a production REST API, a 2-player strategy game, and several ML and distributed systems projects. Would you like me to tell you more about any specific one?";
  }

  // ===== Experience =====
  if (lower.includes("flyrank") || lower.includes("intern")) {
    return "Marwan is currently interning at FlyRank AI as a Backend AI Engineering Intern. He's built two major capstone projects there — a usage metering and billing engine and a multi-platform social campaign publisher. He's also built production REST APIs, web scraping pipelines, and earned 20 Anthropic Academy certifications. His work includes building production-ready REST APIs, durable webhooks, and SaaS metering systems.";
  }

  if (lower.includes("teaching") || lower.includes("ta") || lower.includes("assistant")) {
    return "Marwan worked as a Teaching Assistant at ICTeam El Komy, providing technical guidance to 20+ students across lab sessions, simplifying complex concepts, troubleshooting issues in real time, and adapting session content based on student feedback across multiple class cycles.";
  }

  if (lower.includes("event") || lower.includes("volunteer") || lower.includes("usher")) {
    return "Marwan has worked as an Event Volunteer and Usher, coordinating operations across multiple large-scale university events including graduations, career fairs, and seniors photoshoots. He served as university representative at EduGate Event 2026 and managed volunteer teams under high-pressure conditions.";
  }

  // ===== Skills =====
  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack") || lower.includes("technologies")) {
    return "Marwan is proficient in Node.js, Express, PostgreSQL, Redis, Docker, BullMQ, Python, React, and various AI tools. He also has strong skills in security (AES-GCM, HMAC, RSA, 3DES, Diffie-Hellman), reliability (idempotency, rate limiting, retry logic), and distributed systems (MapReduce, weak consistency, distributed locking).";
  }

  if (lower.includes("certif") || lower.includes("anthropic") || lower.includes("claude") || lower.includes("cert")) {
    return "Marwan holds 20 Anthropic Academy certifications covering AI fluency, Claude tooling, Model Context Protocol (MCP), agent skills, and integrations with Amazon Bedrock and Google Cloud. He also has certifications in AI Capabilities and Limitations, AI Fluency for Builders, Educators, and Students.";
  }

  // ===== Education =====
  if (lower.includes("education") || lower.includes("study") || lower.includes("giu") || lower.includes("university") || lower.includes("student")) {
    return "Marwan is a 3rd-year Software Engineering student at German International University (GIU) with a minor in IT Security. He's currently maintaining a 2.4 GPA (Very Good, German Scale).";
  }

  // ===== Contact =====
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("phone") || lower.includes("linkedin")) {
    return "You can reach Marwan via email at marwan.abdelaal@outlook.com or connect with him on LinkedIn at linkedin.com/in/marwan-abdelaal. His phone number is +201111210005.";
  }

  // ===== Opinion =====
  if (lower.includes("smart") || lower.includes("intelligent") || lower.includes("clever") || lower.includes("think of")) {
    return "From what I can see, Marwan is a solid developer with real production experience. He's shipped multiple production-grade systems and has a strong mix of backend, AI, and practical engineering skills.";
  }

  if (lower.includes("opinion") || lower.includes("what do you think")) {
    return "Marwan seems highly capable — he has good backend and AI experience, ships real production systems, and has led teams effectively. His work at FlyRank demonstrates strong engineering discipline.";
  }

  if (lower.includes("company") || lower.includes("hire") || lower.includes("asset")) {
    return "Based on his work, Marwan has solid production experience and ships real systems. He's built everything from billing engines to AI platforms, so he'd be a valuable asset to any engineering team.";
  }

  // ===== Fallback =====
  return "I don't have that information in Marwan's portfolio. But I'd be happy to tell you about his projects, experience, skills, certifications, or education. What would you like to know?";
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const lower = message.toLowerCase();

    // Check for casual/greeting messages FIRST (use local replies)
    const isCasual = 
      lower === "hi" || lower === "hello" || lower === "hey" || lower === "yo" ||
      lower === "okay" || lower === "ok" || lower === "cool" || lower === "nice" ||
      lower.includes("how are you") || lower.includes("how're you") ||
      lower.includes("thanks") || lower.includes("thank you") ||
      lower.includes("bye") || lower.includes("goodbye");
    
    if (isCasual) {
      return NextResponse.json({ reply: getLocalReply(message) });
    }

    // Try Gemini for all other questions with proper promotional prompt
    if (process.env.GEMINI_API_KEY) {
      try {
        const model = genAI.getGenerativeModel({
          model: "gemini-3.1-flash-lite",
        });

        const promotionalPrompt = `You are Moscow AI — a polished, professional, and warm portfolio assistant representing Marwan Abdelaal.

Your role is to promote Marwan's work and skills in the best possible light while staying truthful. You are his digital ambassador.

**Your communication style:**
- Professional yet warm and approachable
- Confident but not arrogant
- Engaging and enthusiastic about Marwan's work
- Clear, concise, and impactful
- Use a "show, don't tell" approach — highlight achievements through specifics
- Always complete your sentences and thoughts fully
- Provide complete, detailed responses

**Your personality:**
- You genuinely admire Marwan's work
- You're excited to share his accomplishments
- You're helpful and eager to answer questions
- You make complex technical work sound exciting

**Response guidelines:**
- Always be truthful — only use the verified information below
- Frame Marwan's work as impressive and impactful
- Use specific numbers, technologies, and achievements
- Keep responses concise but substantive (3-5 sentences)
- Always complete your responses fully — never cut off mid-sentence
- If asked about something outside the knowledge base, politely redirect to Marwan's projects, skills, or experience

**Brand voice examples:**
- Instead of: "He built a billing system"
- Say: "He engineered a production-grade usage metering and billing engine with Stripe integration, exactly-once processing, and AI token cost calculation — a true demonstration of his backend expertise."

- Instead of: "He has skills in Node.js"
- Say: "Marwan is deeply proficient in Node.js, having built multiple production systems including robust REST APIs, durable webhooks, and scalable background job processors with BullMQ."

- Instead of: "He interned at FlyRank"
- Say: "Marwan is currently making an impact at FlyRank AI as a Backend AI Engineering Intern, where he's already shipped two major capstone projects and earned 20 Anthropic Academy certifications."

Here is Marwan's verified information:

${knowledgeBase}

Now answer this question naturally and professionally: ${message}`;

        const result = await model.generateContent(promotionalPrompt);
        let reply = result.response.text()?.trim() || "";

        // Clean up formatting
        reply = reply
          .replace(/\*\*(.*?)\*\*/g, "$1")
          .replace(/\*(.*?)\*/g, "$1")
          .replace(/`(.*?)`/g, "$1")
          .trim();

        // REMOVED the character limit - now responses can be complete
        // Only limit if it's absurdly long (over 300 words)
        if (reply.split(" ").length > 300) {
          reply = reply.split(".").slice(0, 5).join(".") + ".";
        }

        if (reply) {
          return NextResponse.json({ reply });
        }
      } catch (err: any) {
        console.warn("Gemini failed:", err?.message);
      }
    }

    // Fallback to local replies
    return NextResponse.json({ reply: getLocalReply(message) });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ 
      reply: "I'm having a technical moment. Could you try asking that again?" 
    }, { status: 500 });
  }
}