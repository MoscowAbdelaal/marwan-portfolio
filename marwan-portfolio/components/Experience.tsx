import { experience } from "@/lib/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-white/40 mb-3">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.id} className="relative pl-6 border-l border-white/10">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-400" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-lg font-semibold text-white">
                  {job.role}
                </h3>
                <span className="text-sm text-white/40">{job.period}</span>
              </div>

              <p className="text-blue-400/90 text-sm mb-4">
                {job.company} · {job.location}
              </p>

              <ul className="space-y-2">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-white/60 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-white/30 mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}