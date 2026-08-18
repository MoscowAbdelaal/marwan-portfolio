import Link from "next/link";
import { profile } from "@/lib/data/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-center md:text-left">
          <p className="text-zinc-300 font-medium text-sm sm:text-base">Marwan Abdelaal</p>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Full-Stack & Backend AI Engineering · Cairo, Egypt
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-400">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 transition flex items-center gap-1.5"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 transition flex items-center gap-1.5"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-zinc-100 transition flex items-center gap-1.5"
          >
            <MdEmail className="w-4 h-4" />
            Email
          </a>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600">
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </footer>
  );
}