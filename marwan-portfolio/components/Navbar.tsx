import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          MARWAN ABDELAAL
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#skills" className="hover:text-white transition">Skills</Link>
          <Link href="#experience" className="hover:text-white transition">Experience</Link>
          <Link href="#agent" className="hover:text-white transition">AI Agent</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}