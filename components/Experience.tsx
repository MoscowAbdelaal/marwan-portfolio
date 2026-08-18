import { experience } from "@/lib/data/experience";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-900/40 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
            Experience
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12 text-zinc-50">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-10 sm:space-y-12 text-left">
          {experience.map((job) => (
            <div key={job.id} className="relative pl-4 sm:pl-6 border-l border-zinc-800">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500" />

              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <h3 className="text-base sm:text-lg font-semibold text-zinc-50">
                  {job.role}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <p className="text-blue-400 text-xs sm:text-sm">
                  {job.company} · {job.location}
                </p>
                <span className="text-xs sm:text-sm text-zinc-500">{job.period}</span>
              </div>

              <ul className="space-y-2 mt-3 sm:mt-4">
                {job.points.slice(0, 5).map((point, i) => (
                  <li
                    key={i}
                    className="text-zinc-400 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-zinc-600 mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
                {job.points.length > 5 && (
                  <li className="text-zinc-500 text-sm flex gap-2">
                    <span className="text-zinc-600 mt-1.5">•</span>
                    <span>+{job.points.length - 5} more bullet points</span>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}