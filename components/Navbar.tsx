"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#agent", label: "Moscow AI" },
    { href: "#future", label: "Future" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-zinc-50 text-sm sm:text-base">
          <Image
            src="/favicon.svg"
            alt="Logo"
            width={24}
            height={24}
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          MARWAN ABDELAAL
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-zinc-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-zinc-100 transition"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="/cv/Marwan_Abdelaal_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 sm:px-4 py-1.5 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition text-xs sm:text-sm"
          >
            Download CV
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <div className="flex flex-col px-4 sm:px-6 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-white transition py-2 text-sm"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/cv/Marwan_Abdelaal_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white transition py-2 text-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}