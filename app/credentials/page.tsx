import Link from "next/link";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

export default function CredentialsPage() {
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
    // ✅ REORDERED: Backend AI Engineering cert first
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

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header - Added pt-8 to push it down from navbar */}
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

        {/* Documents - Reordered */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-zinc-200">Official Documents</h2>
          <div className="space-y-6">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden"
              >
                <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
                  <span className="font-medium text-zinc-200">{doc.title}</span>
                  <span className="text-xs text-zinc-500">PDF</span>
                </div>
                <div className="h-[500px] w-full">
                  <object
                    data={doc.file}
                    type="application/pdf"
                    className="w-full h-full"
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
    </div>
  );
}