import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { knowledgeBase } from "@/lib/data/knowledge";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// ---------- Local fallback (same smart answers as before) ----------
function getLocalReply(message: string): string {
  const lower = message.toLowerCase().trim();

  if (
    lower.includes("who is marwan") ||
    lower.includes("about marwan") ||
    lower.includes("who are you") ||
    lower.includes("introduce")
  ) {
    return `Marwan Abdelaal is a Backend & Full-Stack Developer and AI Engineering Intern based in Cairo, Egypt. He is a Software Engineering student at GIU with a Minor in IT Security and currently interns at FlyRank AI. He holds 20 Anthropic Academy certifications.`;
  }

  if (lower.includes("project") || lower.includes("built") || lower.includes("portfolio")) {
    return `Marwan has built several projects including:

• GIU Nexus (AI-powered MERN platform, team lead of 10)
• Production REST API & Scraping Pipeline (FlyRank)
• Clash of Clans: Heroes (Java game)
• HRMS, Cryptography Suite, Machine Learning models, Distributed Systems, and a Unity experience

Ask about any specific project for more details.`;
  }

  if (lower.includes("giu nexus") || lower.includes("nexus")) {
    return `GIU Nexus is an AI-powered career platform. Marwan led a team of 10 to build it with React, Node.js, MongoDB, and Hugging Face for skill extraction and recommendations.`;
  }

  if (lower.includes("flyrank") || lower.includes("intern")) {
    return `At FlyRank AI, Marwan built production REST APIs, JWT authentication, a web scraping pipeline with Ollama, and migrated the backend to PostgreSQL + Docker. He also completed 20 Anthropic certifications.`;
  }

  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack")) {
    return `Main skills: Node.js, Express, PostgreSQL, Docker, JWT, Python, React, Hugging Face, Ollama, Prompt Engineering, cryptography, and distributed systems.`;
  }

  if (lower.includes("certif") || lower.includes("anthropic") || lower.includes("claude")) {
    return `Marwan holds 20 Anthropic Academy certifications covering AI Fluency, Claude tooling, Agent Skills, Subagents, Model Context Protocol, and more (Jul–Aug 2026).`;
  }

  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("phone")) {
    return `You can reach Marwan at marwan.abdelaal@outlook.com or via LinkedIn: linkedin.com/in/marwan-abdelaal`;
  }

  if (lower.includes("education") || lower.includes("study") || lower.includes("giu") || lower.includes("university")) {
    return `Marwan is a Software Engineering student at the German International University (GIU) in Cairo, with a Minor in IT Security.`;
  }

  return "I don't have that information in Marwan's verified portfolio.";
}

// ---------- Main handler ----------
export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Try Gemini first
    if (process.env.GEMINI_API_KEY) {
      try {
        const model = genAI.getGenerativeModel({
          model: "gemini-3.1-flash-lite",
        });

        const systemPrompt = `You are Moscow AI, a personal assistant for Marwan Abdelaal.

Rules:
- Answer ONLY using the verified information below.
- If the information is not available, say: "I don't have that information in Marwan's verified portfolio."
- Keep answers short and easy to read.
- Use simple language.
- Prefer short paragraphs or a few clear bullet points.
- Do not invent any information.

Verified information:
${knowledgeBase}`;

        const result = await model.generateContent([
          { text: systemPrompt },
          { text: `User question: ${message}` },
        ]);

        let reply = result.response.text()?.trim() || "";
        reply = reply
          .replace(/\*\*(.*?)\*\*/g, "$1")   // remove **bold**
          .replace(/\*(.*?)\*/g, "$1")       // remove *italic*
          .replace(/`(.*?)`/g, "$1")         // remove `code`
          .replace(/^#+\s*/gm, "")           // remove headings
          .replace(/^\s*[-•*]\s*/gm, "• ")   // normalize bullets
          .trim();

        if (reply) {
          return NextResponse.json({ reply });
        }
      } catch (geminiError: any) {
        console.warn("Gemini failed, using local fallback:", geminiError?.message);
        // Fall through to local reply
      }
    }

    // Fallback to local answers
    const localReply = getLocalReply(message);
    return NextResponse.json({ reply: localReply });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { reply: "Sorry, something went wrong." },
      { status: 500 }
    );
  }
}