"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "@/lib/data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [height, setHeight] = useState("auto");
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isCollapsing, setIsCollapsing] = useState(false);

  const displayProjects = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    if (contentRef.current) {
      const timer = setTimeout(() => {
        if (contentRef.current) {
          const extraPadding = 32;
          setHeight(`${contentRef.current.scrollHeight + extraPadding}px`);
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [displayProjects]);

  useEffect(() => {
    if (contentRef.current) {
      const extraPadding = 32;
      setHeight(`${contentRef.current.scrollHeight + extraPadding}px`);
    }
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    const newShowAll = !showAll;
    
    if (!newShowAll && sectionRef.current) {
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
      id="projects" 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 bg-zinc-900/40 animate-fade-in"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-50">
            Selected Work
          </h2>
          <p className="text-zinc-400 mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Production systems, AI integrations, cryptography, machine learning, and full-stack applications I&apos;ve built and shipped.
          </p>
        </div>

        <div 
          className={`overflow-hidden transition-[height] duration-500 ease-in-out w-full ${
            isCollapsing ? 'transition-[height] duration-500' : ''
          }`}
          style={{ height: height }}
        >
          <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pb-8 w-full">
            {displayProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 hover:border-zinc-700 transition text-left w-full overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-snug text-zinc-50 break-words">
                    {project.title}
                  </h3>
                  {project.highlight && (
                    <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap shrink-0">
                      {project.highlight}
                    </span>
                  )}
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4 sm:mb-5 break-words">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700 whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-800 text-zinc-500 border border-zinc-700 whitespace-nowrap">
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-500 hover:text-zinc-200 transition inline-flex items-center gap-1.5"
                    >
                      <FaGithub className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-500 hover:text-zinc-200 transition inline-flex items-center gap-1.5"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show More / Show Less Button — Now matches Certifications style */}
        {projects.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={handleToggle}
              className="text-sm text-zinc-400 hover:text-zinc-200 transition font-medium cursor-pointer"
              type="button"
            >
              {showAll ? "Show Less" : `Show +${projects.length - 4} More Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}