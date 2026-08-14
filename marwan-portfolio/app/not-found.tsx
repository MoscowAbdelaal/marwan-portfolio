import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-zinc-50">404</h1>
        <p className="text-zinc-400 text-lg">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-white transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}