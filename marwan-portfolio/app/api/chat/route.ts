import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { knowledgeBase } from "@/lib/data/knowledge";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

function getLocalReply(message: string): string {
  const lower = message.toLowerCase().trim();

  // ===== Opinion / subjective =====
  if (lower.includes("smart") || lower.includes("intelligent") || lower.includes("clever")) {
    return "Yeah, he seems solid. He’s shipped real production systems and has good backend + AI experience.";
  }

  if (lower.includes("think of") || lower.includes("opinion") || lower.includes("what do you think")) {
    return "He seems capable. Good mix of backend, AI, and real production work.";
  }

  if (lower.includes("company") || lower.includes("asset") || lower.includes("hire") || lower.includes("join")) {
    return "From what I can see, yes — he has solid production experience and ships real systems.";
  }

  if (lower.includes("good") || lower.includes("capable") || lower.includes("strong")) {
    return "He looks capable. He’s already building production-grade systems at FlyRank.";
  }

  // ===== Basic identity =====
  if (
    lower.includes("who is marwan") ||
    lower.includes("about marwan") ||
    lower.includes("who are you") ||
    lower.includes("introduce")
  ) {
    return "Marwan is a Software Engineering student at GIU and a Backend AI Engineering Intern at FlyRank AI.";
  }

  // ===== Projects =====
  if (lower.includes("project") || lower.includes("built") || lower.includes("work")) {
    return "He’s built a billing engine, a social campaign publisher, GIU Nexus, a production API, a Java game, and some ML and distributed systems projects.";
  }

  if (lower.includes("billing") || lower.includes("metering")) {
    return "That’s one of his FlyRank capstones — a usage metering and billing system with Stripe and exactly-once processing.";
  }

  if (lower.includes("social") || lower.includes("campaign") || lower.includes("publisher")) {
    return "Another FlyRank capstone. It’s a multi-platform social campaign publisher with idempotent publishing and secure webhooks.";
  }

  if (lower.includes("giu nexus") || lower.includes("nexus")) {
    return "GIU Nexus is an AI-powered career platform. He led a team of 10 to build it with the MERN stack and Hugging Face.";
  }

  if (lower.includes("clash") || lower.includes("game")) {
    return "It’s a 2-player strategy game he built from scratch in Java and JavaFX.";
  }

  // ===== Experience =====
  if (lower.includes("flyrank") || lower.includes("intern")) {
    return "He’s currently interning at FlyRank as a Backend AI Engineering Intern. He built two main capstones there.";
  }

  if (lower.includes("teaching") || lower.includes("assistant") || lower.includes("ta")) {
    return "He worked as a Teaching Assistant and helped students in lab sessions.";
  }

  // ===== Skills & Education =====
  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack")) {
    return "Mainly Node.js, Express, PostgreSQL, Redis, Docker, BullMQ, Python, React, and some AI tools.";
  }

  if (lower.includes("certif") || lower.includes("anthropic") || lower.includes("claude")) {
    return "He has 20 Anthropic Academy certifications.";
  }

  if (lower.includes("education") || lower.includes("study") || lower.includes("giu") || lower.includes("university") || lower.includes("student")) {
    return "He’s a 3rd-year Software Engineering student at GIU with a minor in IT Security.";
  }

  // ===== Contact =====
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("phone") || lower.includes("linkedin")) {
    return "You can reach him at marwan.abdelaal@outlook.com or on LinkedIn.";
  }

  // ===== Unknown =====
  if (lower.includes("old") || lower.includes("age") || lower.includes("salary") || lower.includes("live")) {
    return "I don't have that information in Marwan's verified portfolio.";
  }

  return "I don't have that information in Marwan's verified portfolio.";
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const lower = message.toLowerCase();

    // Force short local answers for opinion questions
    const isOpinion =
      lower.includes("smart") ||
      lower.includes("think of") ||
      lower.includes("opinion") ||
      lower.includes("company") ||
      lower.includes("asset") ||
      lower.includes("hire") ||
      lower.includes("good") ||
      lower.includes("capable");

    if (isOpinion) {
      return NextResponse.json({ reply: getLocalReply(message) });
    }

    // Try Gemini for factual questions
    if (process.env.GEMINI_API_KEY) {
      try {
        const model = genAI.getGenerativeModel({
          model: "gemini-3.1-flash-lite",
        });

        const systemPrompt = `You are Moscow AI.
Answer in maximum 1 short sentence.
Be casual and natural.
Only use the information below.
If you don't know, say you don't have that information.

${knowledgeBase}`;

        const result = await model.generateContent(message);
        let reply = result.response.text()?.trim() || "";

        reply = reply
          .replace(/\*\*(.*?)\*\*/g, "$1")
          .replace(/\*(.*?)\*/g, "$1")
          .replace(/`(.*?)`/g, "$1")
          .trim();

        if (reply.split(" ").length > 22) {
          reply = reply.split(".")[0] + ".";
        }

        if (reply) {
          return NextResponse.json({ reply });
        }
      } catch (err: any) {
        console.warn("Gemini failed:", err?.message);
      }
    }

    // Fallback
    return NextResponse.json({ reply: getLocalReply(message) });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ reply: "Sorry, something went wrong." }, { status: 500 });
  }
}