import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marwan Abdelaal | Backend & AI Engineering",
  description:
    "Backend & Full-Stack Developer and AI Engineering Intern. Building production systems and shipping personal AI agents.",
  keywords: [
    "Marwan Abdelaal",
    "Backend Developer",
    "Full-Stack Developer",
    "AI Engineering",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Marwan Abdelaal" }],
  openGraph: {
    title: "Marwan Abdelaal | Backend & AI Engineering",
    description:
      "Backend & Full-Stack Developer and AI Engineering Intern. Building production systems and shipping personal AI agents.",
    url: "https://your-future-domain.com", // change later
    siteName: "Marwan Abdelaal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marwan Abdelaal | Backend & AI Engineering",
    description:
      "Backend & Full-Stack Developer and AI Engineering Intern.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}