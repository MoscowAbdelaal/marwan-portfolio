export default function FutureWork() {
  return (
    <section id="future" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-white/40 mb-3">
          Future Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Currently exploring
        </h2>
        <p className="text-white/60 mb-12 max-w-2xl">
          I’m still early in my career. These are the areas I’m actively learning and plan to go deeper into.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              title: "Stronger Personal Agents",
              description:
                "Improving Moscow AI with better retrieval, memory, and real tool use so it becomes genuinely useful instead of just a demo.",
            },
            {
              title: "Production Backend Skills",
              description:
                "Going deeper into API design, database performance, Docker, testing, and security based on what I’m learning at FlyRank.",
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
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}