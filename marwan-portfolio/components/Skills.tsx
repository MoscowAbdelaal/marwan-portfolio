import { skills } from "@/lib/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-white/40 mb-3">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Tools and Techniques
        </h2>
        <p className="text-white/60 mb-12 max-w-2xl">
          Technologies I use to build production systems and AI-powered applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="text-sm font-medium text-white/90 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}