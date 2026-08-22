import { skills } from "@/lib/data/skills";
import { FaTools } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 animate-fade-in">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center gap-3 justify-center mb-3">
          <FaTools className="w-4 h-4 text-blue-400" />
          <p className="text-sm uppercase tracking-widest text-zinc-500">Skills</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-50">
          Tools and Techniques
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
          Technologies I use to build production systems and AI-powered applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5"
            >
              <h3 className="text-sm font-medium text-zinc-200 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
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