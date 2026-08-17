import { projects } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-900/40 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-50">
          Selected Work
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Production systems, AI integrations, cryptography, machine learning, and full-stack applications I&apos;ve built and shipped.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold leading-snug text-zinc-50">
                  {project.title}
                </h3>
                {project.highlight && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap shrink-0">
                    {project.highlight}
                  </span>
                )}
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
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