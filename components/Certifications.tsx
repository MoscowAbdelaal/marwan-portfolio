"use client";

import { useState, useRef, useEffect } from "react";
import { certifications } from "@/lib/data/certifications";

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [height, setHeight] = useState("auto");
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isCollapsing, setIsCollapsing] = useState(false);

  const displayCertifications = showAll ? certifications : certifications.slice(0, 10);

  useEffect(() => {
    if (contentRef.current) {
      const timer = setTimeout(() => {
        if (contentRef.current) {
          const extraPadding = 16;
          setHeight(`${contentRef.current.scrollHeight + extraPadding}px`);
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [displayCertifications]);

  useEffect(() => {
    if (contentRef.current) {
      const extraPadding = 16;
      setHeight(`${contentRef.current.scrollHeight + extraPadding}px`);
    }
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    const newShowAll = !showAll;
    
    if (!newShowAll && sectionRef.current) {
      // Start collapsing and scrolling at the same time
      setIsCollapsing(true);
      setShowAll(false);
      
      const navbarHeight = 64;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const offsetTop = sectionTop + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      
      setTimeout(() => {
        setIsCollapsing(false);
      }, 600);
    } else {
      setShowAll(true);
    }
  };

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="py-24 px-6 animate-fade-in"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3 text-center">
          Certifications
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-50 text-center">
          Anthropic Academy
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl mx-auto text-center">
          {certifications.length} Anthropic Academy certifications focused on AI fluency, Claude tooling, agents, MCP, and subagents.
        </p>

        <div 
          className={`overflow-hidden transition-[height] duration-500 ease-in-out ${
            isCollapsing ? 'transition-[height] duration-500' : ''
          }`}
          style={{ height: height }}
        >
          <div ref={contentRef} className="grid sm:grid-cols-2 gap-4 pb-4">
            {displayCertifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="text-sm font-medium text-zinc-100">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">{cert.issuer}</p>
                </div>
                <span className="text-xs text-zinc-600 whitespace-nowrap">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {certifications.length > 10 && (
          <div className="text-center mt-8">
            <button
              onClick={handleToggle}
              className="text-sm text-zinc-400 hover:text-zinc-200 transition font-medium cursor-pointer"
              type="button"
            >
              {showAll ? "Show Less" : `Show +${certifications.length - 10} More Certifications`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}