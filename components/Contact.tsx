import { profile } from "@/lib/data/profile";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900/40 animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center gap-3 justify-center mb-3">
          <FaEnvelope className="w-4 h-4 text-blue-400" />
          <p className="text-sm uppercase tracking-widest text-zinc-500">Contact</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-50">
          Get in touch
        </h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
          Have a backend, full-stack, or AI project in mind? Let&apos;s connect.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition text-sm sm:text-base inline-flex items-center gap-2"
          >
            <MdEmail className="w-4 h-4" />
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition text-sm sm:text-base inline-flex items-center gap-2"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition text-sm sm:text-base inline-flex items-center gap-2"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
        </div>

        <p className="text-sm text-zinc-500">{profile.location}</p>
      </div>
    </section>
  );
}