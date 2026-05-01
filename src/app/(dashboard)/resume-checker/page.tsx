import type { Metadata } from "next";
import Link from "next/link";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ResumeCheckerPanel } from "@/components/resume/ResumeCheckerPanel";
import { ResumeCheckerSeoIntro } from "@/components/resume/ResumeCheckerSeoIntro";
import { ResumeCheckerWebApplicationJsonLd } from "@/components/seo/ResumeCheckerWebApplicationJsonLd";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata: Metadata = {
  title: {
    absolute:
      "Free ATS Resume Checker – Improve Your Resume Score Instantly",
  },
  description:
    "Free ATS resume checker: instant score (0–100), strengths & weaknesses, and improvement tips. Upload PDF/DOCX or paste text; optional job post for keyword match — no login.",
  keywords: [
    "ATS resume checker",
    "free resume checker",
    "improve resume score",
    "ATS score",
    "resume analyzer",
    "CV checker",
  ],
  alternates: { canonical: RESUME_CHECKER_PATH },
  openGraph: {
    title:
      "Free ATS Resume Checker – Improve Your Resume Score Instantly | ResumeIQ",
    description:
      "Improve your resume score instantly: ATS-style check, clear feedback, optional job match — free.",
    type: "website",
  },
};

export default function ResumeCheckerPage() {
  return (
    <>
      <ResumeCheckerWebApplicationJsonLd />
      <div className="min-h-full w-full">
        <div className="border-b border-zinc-200/90 bg-white/90 px-4 py-3 backdrop-blur sm:px-8">
          <nav
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="font-medium transition hover:text-zinc-900">
              Home
            </Link>
            <span aria-hidden className="text-zinc-300">
              /
            </span>
            <span className="font-semibold text-zinc-800">Resume checker</span>
          </nav>
        </div>
        <ResumeCheckerSeoIntro />
        <ErrorBoundary>
          <ResumeCheckerPanel />
        </ErrorBoundary>
      </div>
    </>
  );
}
