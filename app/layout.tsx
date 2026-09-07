import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // ✅ Add metadataBase with your production URL
  metadataBase: new URL("https://marwan-abdelaal-portfolio.vercel.app"),
  title: "Marwan Abdelaal | Full-Stack & Backend AI Engineer",
  description:
    "Backend & Full-Stack Developer and Backend AI Engineering Intern. Building production systems and shipping personal AI agents.",
  keywords: [
    "Marwan Abdelaal",
    "Backend Developer",
    "Full-Stack Developer",
    "Backend AI Engineering",
    "Node.js",
    "Portfolio",
    "FlyRank",
    "AI Engineer",
    "Software Engineer",
  ],
  authors: [{ name: "Marwan Abdelaal" }],
  creator: "Marwan Abdelaal",
  publisher: "Marwan Abdelaal",
  robots: "index, follow",
  openGraph: {
    title: "Marwan Abdelaal | Full-Stack & Backend AI Engineer",
    description:
      "Backend & Full-Stack Developer and Backend AI Engineering Intern. Building production systems and shipping personal AI agents.",
    url: "https://marwan-abdelaal-portfolio.vercel.app/",
    siteName: "Marwan Abdelaal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marwan Abdelaal - Full-Stack & Backend AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marwan Abdelaal | Full-Stack & Backend AI Engineer",
    description:
      "Backend & Full-Stack Developer and Backend AI Engineering Intern. Building production systems and shipping personal AI agents.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#09090b" />
        <link rel="canonical" href="https://marwan-abdelaal-portfolio.vercel.app/" />
      </head>
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}