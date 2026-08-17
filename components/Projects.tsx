import { projects } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-900/40 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
            Projects
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-zinc-50">
            Selected Work
          </h2>
          <p className="text-zinc-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Production systems, AI integrations, cryptography, machine learning, and full-stack applications I&apos;ve built and shipped.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 hover:border-zinc-700 transition text-left"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-snug text-zinc-50">
                  {project.title}
                </h3>
                {project.highlight && (
                  <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap shrink-0">
                    {project.highlight}
                  </span>
                )}
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4 sm:mb-5 whitespace-normal break-words">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                {project.tech.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 6 && (
                  <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-800 text-zinc-500 border border-zinc-700">
                    +{project.tech.length - 6}
                  </span>
                )}
              </div>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-zinc-200 transition inline-flex items-center gap-1"
                >
                  View on GitHub →
                </a>
              ) : (
                <span className="text-sm text-zinc-600">Private / Academic</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}