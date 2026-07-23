import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { getSiteUrl } from "@/lib/site-url";
import { getDefaultOgImages } from "@/lib/seo/og-defaults";

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
    default: "ResumeIQ — Free ATS Resume Checker & Score",
    template: "%s | ResumeIQ",
  },
  description:
    "Free resume checker online—upload PDF, get ATS score, missing keywords, and format fixes. Resume score checker built for job seekers worldwide.",
  keywords: [
    "resume checker",
    "resume score checker",
    "ATS resume checker",
    "free resume checker online",
    "resume optimization",
  ],
  applicationName: "ResumeIQ",
  authors: [{ name: "ResumeIQ" }],
  creator: "ResumeIQ",
  publisher: "ResumeIQ",
  verification: {
    google: "Fzn210VwpRc6YzJJrIe3FN8Zn239C9hf6s4mbcZ89QM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName: "ResumeIQ",
    title: "ResumeIQ — Free ATS Resume Checker & Score",
    description:
      "Free resume checker online—upload PDF, get ATS score, missing keywords, and format fixes. Built for job seekers worldwide.",
    images: getDefaultOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: "ResumeIQ — Free ATS Resume Checker & Score",
    description:
      "Free resume checker online—upload PDF, get ATS score, missing keywords, and format fixes. Built for job seekers worldwide.",
    images: getDefaultOgImages().map((img) => img.url),
  },
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "ResumeIQ Blog RSS" }],
    },
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
      <body
        className="min-h-screen bg-[#f8f9fb] text-slate-900 antialiased"
        suppressHydrationWarning
      >
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
