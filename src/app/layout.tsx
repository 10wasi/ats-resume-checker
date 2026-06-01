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
      "Free ATS Resume Checker | ATS Score, Keywords & Resume Optimization",
    template: "%s | ATS Resume Checker",
  },
  description:
    "Free ATS Resume Checker for job seekers: analyze your resume, find missing keywords, fix ATS formatting issues, and improve ATS compatibility. ATS friendly resume tips for US & UK.",
  keywords: [
    "ATS Resume Checker",
    "Free ATS Resume Checker",
    "ATS friendly resume",
    "resume optimization",
    "resume keywords",
    "ATS resume score",
    "resume formatting",
    "ATS compatible resume",
    "online resume checker",
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
    title: "Free ATS Resume Checker – Check Your CV Score in Seconds",
    description:
      "Improve your resume score instantly using our free ATS resume checker. Optimize your CV for job applications and get hired faster.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free ATS Resume Checker – Check Your CV Score in Seconds",
    description:
      "Improve your resume score instantly using our free ATS resume checker. Optimize your CV for job applications and get hired faster.",
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
