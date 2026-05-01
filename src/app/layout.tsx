import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { getSiteUrl } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "ResumeIQ — Free AI Resume Checker & ATS Score Analyzer (2026)",
    template: "%s · ResumeIQ",
  },
  description:
    "Free resume checker, AI resume analyzer, and ATS resume score tool. CV checker online free for job seekers, students, and software engineers — resume optimization and resume review AI with no login.",
  keywords: [
    "free resume checker",
    "AI resume analyzer",
    "ATS resume score",
    "CV checker online free",
    "resume optimization tool",
    "resume review AI",
    "job resume checker",
    "ResumeIQ",
  ],
  applicationName: "ResumeIQ",
  authors: [{ name: "ResumeIQ" }],
  creator: "ResumeIQ",
  publisher: "ResumeIQ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ResumeIQ",
    title: "Free AI Resume Checker & ATS Score Analyzer | ResumeIQ",
    description:
      "Free online resume checker with ATS score (0–100), keyword optimization, and formatting feedback.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Resume Checker & ATS Score Analyzer | ResumeIQ",
    description:
      "Free AI resume analyzer and job resume checker — instant ATS-friendly feedback.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} font-sans`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="Fzn210VwpRc6YzJJrIe3FN8Zn239C9hf6s4mbcZ89QM"
        />
      </head>
      <body
        className="min-h-screen bg-[#f8f9fb] text-slate-900 antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
