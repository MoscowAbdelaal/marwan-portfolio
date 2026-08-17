import { skills } from "@/lib/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
          Skills
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-zinc-50">
          Tools and Techniques
        </h2>
        <p className="text-zinc-400 mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
          Technologies I use to build production systems and AI-powered applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5"
            >
              <h3 className="text-sm font-medium text-zinc-200 mb-3 sm:mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.items.slice(0, 8).map((item) => (
                  <span
                    key={item}
                    className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {item}
                  </span>
                ))}
                {group.items.length > 8 && (
                  <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-800 text-zinc-500 border border-zinc-700">
                    +{group.items.length - 8}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}