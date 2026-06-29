import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
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
    default: "Resume Checker — Free ATS Score & Keywords",
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
  applicationName: "ATS Resume Checker",
  authors: [{ name: "ATS Resume Checker" }],
  creator: "ATS Resume Checker",
  publisher: "ATS Resume Checker",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ATS Resume Checker",
    title: "ATS Resume Checker — Free Score, Keywords & Fixes",
    description:
      "Free ATS resume checker: upload PDF, get your score, missing ATS keywords, and resume optimization fixes. Build an ATS friendly resume—no signup.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATS Resume Checker — Free Score, Keywords & Fixes",
    description:
      "Free ATS resume checker: upload PDF, get your score, missing ATS keywords, and resume optimization fixes. Build an ATS friendly resume—no signup.",
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
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
