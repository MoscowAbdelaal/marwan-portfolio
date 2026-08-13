import Link from "next/link";
import { profile } from "@/lib/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Backend · Full-Stack · AI Engineering
        </div>

        {/* Big heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
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

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#agent"
            className="px-7 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Try Marwan AI
          </Link>
          <Link
            href="#projects"
            className="px-7 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition"
          >
            View Projects
          </Link>
          <a
            href="/cv/Marwan_Abdelaal_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}