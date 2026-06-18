import { CareerLandingPage } from "@/components/career/CareerLandingPage";
import { resumeKeywordToolEntry } from "@/lib/content/career-success-hub/resume-keyword-tool";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import Link from "next/link";

export const metadata = buildCtrMetadata(resumeKeywordToolEntry.ctr, {
  canonical: resumeKeywordToolEntry.path,
  keywords: [
    "Resume Keyword Analyzer",
    "resume keyword tool",
    "ATS keywords",
    "resume optimization",
  ],
  ogType: "article",
});

export default function ResumeKeywordToolPage() {
  return (
    <CareerLandingPage
      entry={resumeKeywordToolEntry}
      intro={
        <>
          The <strong className="font-semibold text-slate-800">Resume Keyword Tool</strong> hub
          connects finders, checkers, and profession databases—so you place{" "}
          <strong className="font-semibold text-slate-800">ATS keywords</strong> ethically in any
          market.
        </>
      }
      toolCta={
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/ats-keywords-finder" className="btn-gradient px-7">
            ATS Keywords Finder
          </Link>
          <Link
            href="/resume-keywords"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-accent-400"
          >
            Keywords database
          </Link>
        </div>
      }
      faqHeading="FAQ: Resume keyword tool"
    />
  );
}
