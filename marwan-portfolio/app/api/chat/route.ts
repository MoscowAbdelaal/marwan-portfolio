import { NextRequest, NextResponse } from "next/server";
import { knowledgeBase } from "@/lib/data/knowledge";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // For now we use a simple but strict system prompt.
    // Later we can connect a real LLM (Claude / GPT).
    const systemPrompt = `
You are Marwan AI — a personal assistant that answers ONLY using the verified information provided below.
If the answer is not clearly in the information, reply with: "I don't have that information in Marwan's verified portfolio."
Be concise, professional, and helpful.
Never invent details.

${knowledgeBase}
`;

    // Temporary local response logic (works without any API key)
    // We will replace this with a real LLM call in the next step.
    const lower = message.toLowerCase();

    let reply = "I don't have that information in Marwan's verified portfolio.";

    if (lower.includes("who is marwan") || lower.includes("about marwan") || lower.includes("who are you")) {
      reply = `Marwan Abdelaal is a Backend & Full-Stack Developer and AI Engineering Intern based in Cairo, Egypt. He is a 2nd-year Software Engineering student at GIU and currently interning at FlyRank AI.`;
    } else if (lower.includes("project")) {
      reply = `Marwan has built several projects including:\n• GIU Nexus (AI-powered MERN platform)\n• Production REST API & Scraping Pipeline at FlyRank\n• Human Resource Management System\n• Clash of Clans: Heroes (Java game engine)`;
    } else if (lower.includes("experience") || lower.includes("intern") || lower.includes("flyrank")) {
      reply = `Marwan is currently a Backend AI Engineering Intern at FlyRank AI (Jun 2026 – Present), where he built production REST APIs, JWT authentication, web scraping pipelines with AI enrichment, and Dockerized PostgreSQL systems. He also worked as a Teaching Assistant and Event Volunteer.`;
    } else if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack")) {
      reply = `Key skills include Node.js, Express, PostgreSQL, Docker, JWT, Hugging Face, Ollama, Prompt Engineering, React, and more. He focuses on backend systems and AI integration.`;
    } else if (lower.includes("certif") || lower.includes("anthropic")) {
      reply = `Marwan holds 20 Anthropic Academy certifications covering AI Fluency, Claude tooling, Agent Skills, Subagents, Model Context Protocol, and more (completed Jul–Aug 2026).`;
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("reach")) {
      reply = `You can reach Marwan at marwan.abdelaal@outlook.com or via LinkedIn: linkedin.com/in/marwan-abdelaal`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}