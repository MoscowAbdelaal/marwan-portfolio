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
    <section id="agent" className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-900/40 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
            Assistant
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 text-zinc-50">
            Moscow AI
          </h2>
          <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">
            A personal AI assistant that answers questions using verified portfolio information only.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
          <div className="h-72 sm:h-[420px] overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-sm leading-relaxed ${
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
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                </div>
                <span>Moscow AI is thinking...</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="px-4 sm:px-6 pb-2 sm:pb-3 flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition"
              >
                {s}
              </button>
            ))}
          </div>

          <form onSubmit={sendMessage} className="p-3 sm:p-4 border-t border-zinc-800 flex gap-2 sm:gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Marwan's work..."
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-white disabled:opacity-40 transition"
            >
              Send
            </button>
          </form>
        </div>

        <p className="text-xs text-zinc-600 mt-3 sm:mt-4 text-center">
          Ask me anything about Marwan's work.
        </p>
      </div>
    </section>
  );
}