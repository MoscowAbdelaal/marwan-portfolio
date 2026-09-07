"use client";

import { useState, useEffect } from "react";
import { FaCheckCircle, FaExternalLinkAlt, FaDownload, FaTrophy, FaExpand } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function CredentialsPage() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  useEffect(() => {
    if (selectedDocument) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedDocument]);

  const verificationLinks = [
    {
      title: "Final Internship Report & Evaluation",
      reference: "FR-D8-36B07-E63C1",
      url: "https://internship.flyrank.ai/verify/FR-D8-36B07-E63C1?first_name=Marwan",
    },
    {
      title: "Recommendation Letter",
      reference: "FR-D10-E67C7-23D77",
      url: "https://internship.flyrank.ai/verify/FR-D10-E67C7-23D77?first_name=Marwan",
    },
  ];

  const documents = [
    {
      title: "Certificate of Completion — Backend AI Engineering",
      file: "/flyrank-certificate-of-completion-backend-ai-engineering.pdf",
    },
    {
      title: "Certificate of Completion — AI Fluency",
      file: "/flyrank-certificate-of-completion-ai-fluency.pdf",
    },
    {
      title: "Final Internship Report & Evaluation",
      file: "/flyrank-final-internship-report-evaluation.pdf",
    },
    {
      title: "Recommendation Letter",
      file: "/flyrank-recommendation-letter.pdf",
    },
  ];

  const metrics = [
    { value: "35", label: "Assignments" },
    { value: "7", label: "Capstones" },
    { value: "44", label: "Events" },
    { value: "56", label: "Resources" },
    { value: "20", label: "Anthropic Certs" },
  ];

  const rankings = [
    { rank: "5th", label: "Worldwide", total: "9,731 interns" },
    { rank: "2nd", label: "Backend AI Engineering Track", total: "3,050 interns" },
    { rank: "2nd", label: "Egypt", total: "896 interns" },
  ];

  const openFullscreen = (file: string, title: string) => {
    setSelectedDocument(file);
    setSelectedTitle(title);
  };

  const closeFullscreen = () => {
    setSelectedDocument(null);
    setSelectedTitle("");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center pt-8 sm:pt-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            FlyRank AI Internship
            <br />
            <span className="text-blue-400">Credential Dossier</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            469+ verified hours · 7 capstone projects · 20 Anthropic Academy certifications
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <FaCheckCircle className="w-3.5 h-3.5" />
              AI Fluency
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FaCheckCircle className="w-3.5 h-3.5" />
              Backend AI Engineering
            </span>
          </div>
        </div>

        {/* Rankings Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-zinc-200">Program Rankings</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {rankings.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50"
              >
                <div className="p-2 rounded-full bg-amber-500/10 text-amber-400">
                  <FaTrophy className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-bold text-amber-400">{item.rank}</p>
                  <p className="text-sm text-zinc-400">{item.label}</p>
                  <p className="text-xs text-zinc-500">out of {item.total}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verification Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-zinc-200">Verify Credentials</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {verificationLinks.map((item) => (
              <a
                key={item.reference}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 transition"
              >
                <div>
                  <p className="font-medium text-zinc-200">{item.title}</p>
                  <p className="text-sm text-zinc-500">{item.reference}</p>
                </div>
                <FaExternalLinkAlt className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition" />
              </a>
            ))}
          </div>
        </section>

        {/* Documents - Fixed for Mobile */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-zinc-200">Official Documents</h2>
          <div className="space-y-6">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden"
              >
                <div className="p-4 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="font-medium text-zinc-200 text-sm sm:text-base">{doc.title}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-500">PDF</span>
                    <button
                      onClick={() => openFullscreen(doc.file, doc.title)}
                      className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition"
                    >
                      <FaExpand className="w-4 h-4" />
                      Preview
                    </button>
                    <a
                      href={doc.file}
                      download
                      className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition"
                    >
                      <FaDownload className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </div>
                {/* Mobile-friendly PDF preview */}
                <div className="w-full">
                  {/* On mobile, show a clickable card with document info instead of tiny PDF */}
                  <div 
                    className="sm:hidden p-6 bg-zinc-800/30 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-zinc-800/50 transition rounded-b-xl"
                    onClick={() => openFullscreen(doc.file, doc.title)}
                  >
                    <div className="text-4xl text-zinc-600">📄</div>
                    <p className="text-sm text-zinc-400 text-center">Tap to preview full document</p>
                    <span className="text-xs text-blue-400 flex items-center gap-1">
                      <FaExpand className="w-3 h-3" />
                      Open fullscreen
                    </span>
                  </div>
                  {/* Desktop: PDF preview */}
                  <div className="hidden sm:block h-[500px] w-full cursor-pointer hover:opacity-90 transition">
                    <object
                      data={doc.file}
                      type="application/pdf"
                      className="w-full h-full pointer-events-none"
                    >
                      <p className="text-zinc-400 p-4">
                        Your browser doesn&apos;t support PDF embedding.{' '}
                        <a
                          href={doc.file}
                          className="text-blue-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download the PDF instead.
                        </a>
                      </p>
                    </object>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Metrics */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-zinc-200">Program Summary</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 text-center"
              >
                <p className="text-2xl font-bold text-blue-400">{metric.value}</p>
                <p className="text-xs text-zinc-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Full-Screen Modal */}
      {selectedDocument && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={closeFullscreen}
        >
          <div 
            className="flex items-center justify-between p-4 bg-zinc-900/80 border-b border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-zinc-200 font-medium truncate text-sm sm:text-base">{selectedTitle}</span>
            <div className="flex items-center gap-3">
              <a
                href={selectedDocument}
                download
                className="text-sm text-blue-400 hover:text-blue-300 transition flex items-center gap-1.5"
                onClick={(e) => e.stopPropagation()}
              >
                <FaDownload className="w-4 h-4" />
                Download
              </a>
              <button
                onClick={closeFullscreen}
                className="text-zinc-400 hover:text-white transition p-1"
                aria-label="Close fullscreen"
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div 
            className="flex-1 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <object
              data={selectedDocument}
              type="application/pdf"
              className="w-full h-full"
            >
              <p className="text-zinc-400 p-4">
                Your browser doesn&apos;t support PDF embedding.{' '}
                <a
                  href={selectedDocument}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download the PDF instead.
                </a>
              </p>
            </object>
          </div>
        </div>
      )}
    </div>
  );
}