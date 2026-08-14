import Link from "next/link";
import { profile } from "@/lib/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-zinc-300 font-medium">Marwan Abdelaal</p>
          <p className="text-sm text-zinc-500 mt-1">
            Backend & AI Engineering · Cairo, Egypt
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 transition"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 transition"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-zinc-100 transition"
          >
            Email
          </a>
        </div>

        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </footer>
  );
}