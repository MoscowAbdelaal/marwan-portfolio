"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AgentChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I'm Moscow AI. I answer using verified information from this portfolio only. Ask me about Marwan's projects, skills, experience, certifications, or how to contact him.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  // Only scroll inside the chat box, not the whole page
  if (messages.length > 1) {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}, [messages]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Something went wrong." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't process that." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const suggestions = [
    "Who is Marwan?",
    "What projects has he built?",
    "Tell me about the FlyRank internship",
    "What certifications does he have?",
    "How can I contact him?",
  ];

  return (
    <section id="agent" className="py-24 px-6 bg-zinc-900/40 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
          Assistant
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-zinc-50">
          Moscow AI
        </h2>
        <p className="text-zinc-400 mb-8">
          A personal AI assistant that answers questions using verified portfolio information only.
        </p>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
          <div className="h-[420px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-900 text-zinc-300 border border-zinc-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-zinc-500 text-sm">Moscow AI is thinking...</div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="px-6 pb-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="text-xs px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition"
              >
                {s}
              </button>
            ))}
          </div>

          <form onSubmit={sendMessage} className="p-4 border-t border-zinc-800 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Marwan's work..."
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-5 py-3 rounded-xl bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-white disabled:opacity-40 transition"
            >
              Send
            </button>
          </form>
        </div>

        <p className="text-xs text-zinc-600 mt-4 text-center">
          Currently running on verified portfolio data only.
        </p>
      </div>
    </section>
  );
}