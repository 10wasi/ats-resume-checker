import Link from "next/link";
import { CareerLandingPage } from "@/components/career/CareerLandingPage";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import { resumeScoreCheckerEntry } from "@/lib/content/career-success-hub/resume-score-checker";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(resumeScoreCheckerEntry.ctr, {
  canonical: resumeScoreCheckerEntry.path,
  keywords: [
    "resume score checker",
    "ATS score",
    "resume checker",
    "ATS Resume Checker",
  ],
  ogType: "article",
});

export default function ResumeScoreCheckerPage() {
  return (
    <CareerLandingPage
      entry={resumeScoreCheckerEntry}
      intro={
        <>
          Understand what a <strong className="font-semibold text-slate-800">resume score checker</strong>{" "}
          measures, how ATS ratings differ from resume match score, and how to improve fast—with a
          free{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
          >
            ATS scan
          </Link>{" "}
          built in.
        </>
      }
      toolCta={
        <CareerToolCta
          title="Check your resume score free"
          description="Instant ATS compatibility score, keyword analysis, and format warnings—upload the exact PDF you will submit."
        />
      }
      faqHeading="FAQ: Resume score checker"
    />
  );
}
