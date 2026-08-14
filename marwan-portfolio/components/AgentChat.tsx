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
        "Hi, I'm Moscow AI. I answer using verified information from this portfolio only. Ask me about Marwan's projects, skills, experience, certifications, or how to contact him.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
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
    <section id="agent" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-white/40 mb-3">
          Assistant
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Moscow AI
        </h2>
        <p className="text-white/60 mb-8">
          A personal AI assistant that answers questions using verified portfolio information only.
        </p>

        <div className="rounded-2xl border border-white/10 bg-black overflow-hidden">
          {/* Messages */}
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
                      : "bg-white/5 text-white/80 border border-white/10"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-white/40 text-sm">Moscow AI is thinking...</div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="px-6 pb-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-4 border-t border-white/10 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Marwan's work..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-5 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 disabled:opacity-40 transition"
            >
              Send
            </button>
          </form>
        </div>

        <p className="text-xs text-white/30 mt-4 text-center">
          Currently running on verified portfolio data only.
        </p>
      </div>
    </section>
  );
}