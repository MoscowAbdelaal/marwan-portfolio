import { certifications } from "@/lib/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-white/40 mb-3">
          Certifications
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Anthropic Academy
        </h2>
        <p className="text-white/60 mb-12 max-w-2xl">
          20 Anthropic Academy certifications focused on AI fluency, Claude tooling, agents, and subagents.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 flex items-start justify-between gap-4"
            >
              <div>
                <h3 className="text-sm font-medium text-white">
                  {cert.title}
                </h3>
                <p className="text-xs text-white/40 mt-1">{cert.issuer}</p>
              </div>
              <span className="text-xs text-white/30 whitespace-nowrap">
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}