import { experience } from "@/lib/data/experience";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-900/40 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="flex items-center gap-3 justify-center mb-3">
            <FaBriefcase className="w-4 h-4 text-blue-400" />
            <p className="text-sm uppercase tracking-widest text-zinc-500">Experience</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-zinc-50">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12 text-left">
          {experience.map((job) => (
            <div key={job.id} className="relative pl-6 border-l border-zinc-800">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-zinc-50">
                    {job.role}
                  </h3>
                  {job.status === "Completed" && (
                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                      <FaCheckCircle className="w-3 h-3" />
                      Completed
                    </span>
                  )}
                </div>
                <span className="text-sm text-zinc-500 whitespace-nowrap">{job.period}</span>
              </div>

              <p className="text-blue-400 text-sm mb-4">
                {job.company} · {job.location}
              </p>

              <ul className="space-y-2">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-zinc-400 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-zinc-600 mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Verification Link to Credentials Page */}
              {job.id === "flyrank" && (
                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <Link
                    href="/credentials"
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    View credentials dossier
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}