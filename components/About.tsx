export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
          About
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 sm:mb-8 text-zinc-50">
          A practical approach to backend systems and AI
        </h2>

        <div className="space-y-4 sm:space-y-6 text-zinc-400 leading-relaxed text-base sm:text-lg">
          <p>
            I&apos;m a 3rd-year Software Engineering student at the German
            International University (GIU) with a Minor in IT Security, currently
            working as a Backend AI Engineering Intern at FlyRank AI.
          </p>
          <p>
            At FlyRank I ship production-ready Node.js/Express REST APIs,
            implement JWT authentication, design persistent database systems with
            PostgreSQL + Docker, and build web scraping pipelines enriched with
            local AI models.
          </p>
          <p>
            I also led a team of 10 to ship an AI-powered MERN platform (GIU
            Nexus) and hold 20 Anthropic Academy certifications focused on AI
            fluency, Claude tooling, agents, MCP, and more.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: "GIU", value: "Software Engineering" },
            { label: "FlyRank AI", value: "AI Engineering Intern" },
            { label: "20", value: "Anthropic Certifications" },
            { label: "Cairo", value: "Based in Egypt" },
          ].map((item) => (
            <div key={item.label} className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-semibold text-zinc-50">{item.label}</p>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}