import { FaRocket } from "react-icons/fa";

export default function FutureWork() {
  return (
    <section id="future" className="py-24 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="flex items-center gap-3 justify-center mb-3">
            <FaRocket className="w-4 h-4 text-blue-400" />
            <p className="text-sm uppercase tracking-widest text-zinc-500">Future Work</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-50">
            Currently exploring
          </h2>
          <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
            I&apos;m still early in my career. These are the areas I&apos;m actively learning and plan to go deeper into.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 text-left">
          {[
            {
              title: "Stronger Personal Agents",
              description:
                "Improving Moscow AI with better retrieval, memory, and real tool use so it becomes genuinely useful instead of just a demo.",
            },
            {
              title: "Production Backend Skills",
              description:
                "Going deeper into API design, database performance, Docker, testing, and security based on what I'm learning at FlyRank.",
            },
            {
              title: "AI Engineering Fundamentals",
              description:
                "Continuing with prompt engineering, local models (Ollama), embeddings, and Anthropic tooling so I can build real AI features.",
            },
            {
              title: "Shipping More Public Work",
              description:
                "Turning private/academic projects into cleaner public repositories and documenting them properly on GitHub.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="font-semibold text-zinc-50 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}