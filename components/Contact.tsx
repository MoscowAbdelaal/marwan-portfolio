import { profile } from "@/lib/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900/40 animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-50">
          Get in touch
        </h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
          Have a backend, full-stack, or AI project in mind? Let’s connect.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition"
          >
            Email
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition"
          >
            Phone
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm text-zinc-500">{profile.location}</p>
      </div>
    </section>
  );
}