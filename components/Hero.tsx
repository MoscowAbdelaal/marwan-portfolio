import Link from "next/link";
import { profile } from "@/lib/data/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Backend · Full-Stack · AI Engineering
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Marwan
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        <p className="mt-3 text-base text-white/40">
          {profile.title}
        </p>

        {/* Social Icons - Hero specific */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/10"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5 text-white/80" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/10"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 text-white/80" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/10"
            aria-label="Email"
          >
            <MdEmail className="w-5 h-5 text-white/80" />
          </a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#agent"
            className="px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition text-center w-full sm:w-auto"
          >
            Try Moscow AI
          </Link>
          <Link
            href="#projects"
            className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/5 transition text-center w-full sm:w-auto"
          >
            View Projects
          </Link>
          <a
            href="/cv/Marwan_Abdelaal_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/5 transition text-center w-full sm:w-auto"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}