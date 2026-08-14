import { profile } from "@/lib/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-white/40 mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Get in touch
        </h2>
        <p className="text-white/60 mb-10 max-w-xl mx-auto">
          Have a backend, full-stack, or AI project in mind? Let’s connect.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm text-white/40">{profile.location}</p>
      </div>
    </section>
  );
}