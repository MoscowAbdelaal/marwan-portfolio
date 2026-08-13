import { profile } from "@/lib/data/profile";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I&apos;m {profile.name.split(" ")[0]}
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          {profile.title}
        </p>
        <p className="text-white/50">{profile.tagline}</p>
      </div>
    </div>
  );
}