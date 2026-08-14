import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-zinc-50">
          MARWAN ABDELAAL
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <Link href="#about" className="hover:text-zinc-100 transition">About</Link>
          <Link href="#projects" className="hover:text-zinc-100 transition">Projects</Link>
          <Link href="#skills" className="hover:text-zinc-100 transition">Skills</Link>
          <Link href="#experience" className="hover:text-zinc-100 transition">Experience</Link>
          <Link href="#agent" className="hover:text-zinc-100 transition">Moscow AI</Link>
          <Link href="#contact" className="hover:text-zinc-100 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}