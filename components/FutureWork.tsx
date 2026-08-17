export default function FutureWork() {
  return (
    <section id="future" className="py-16 sm:py-24 px-4 sm:px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
            Future Work
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-zinc-50">
            Currently exploring
          </h2>
          <p className="text-zinc-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            I&apos;m still early in my career. These are the areas I&apos;m actively learning and plan to go deeper into.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-left">
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
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6"
            >
              <h3 className="font-semibold text-zinc-50 mb-2 text-sm sm:text-base">{item.title}</h3>
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