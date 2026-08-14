import { profile } from "@/lib/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-white/40 mb-3">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          A practical approach to backend systems and AI
        </h2>

        <div className="space-y-6 text-white/70 leading-relaxed text-lg">
          <p>
            I&apos;m a 3rd-year Software Engineering student at the German International University (GIU)
            with a Minor in IT Security, currently working as a Backend AI Engineering Intern at FlyRank AI.
          </p>
          <p>
            At FlyRank I ship production-ready Node.js/Express REST APIs,
            implement JWT authentication, design persistent database systems with PostgreSQL + Docker, 
            and build web scraping pipelines enriched with local AI models.
          </p>
          <p>
            I also led a team of 10 to ship an AI-powered MERN platform (GIU Nexus)
            and hold 20 Anthropic Academy certifications focused on AI fluency, Claude tooling, agents, MCP, and more.
          </p>
        </div>

        {/* Quick facts */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-2xl font-semibold text-white">Software Engineering</p>
            <p className="text-sm text-white/50 mt-1">German International University - GIU</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">Backend AI Engineering Intern</p>
            <p className="text-sm text-white/50 mt-1">FlyRank AI</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">20</p>
            <p className="text-sm text-white/50 mt-1">Anthropic Certifications</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">Cairo</p>
            <p className="text-sm text-white/50 mt-1">Based in Egypt</p>
          </div>
        </div>
      </div>
    </section>
  );
}