import Link from "next/link";
import { CareerLandingPage } from "@/components/career/CareerLandingPage";
import { resumeOptimizationEntry } from "@/lib/content/career-success-hub/resume-optimization";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(resumeOptimizationEntry.ctr, {
  canonical: resumeOptimizationEntry.path,
  keywords: [
    "resume optimization",
    "ATS Resume Checker",
    "resume match score",
    "ATS keywords",
  ],
  ogType: "article",
});

export default function ResumeOptimizationPage() {
  return (
    <CareerLandingPage
      entry={resumeOptimizationEntry}
      intro={
        <>
          The complete <strong className="font-semibold text-slate-800">resume optimization</strong>{" "}
          workflow—score, match, keywords, bullets, and checklist—using free tools that connect
          through the Career Success Hub. Start with the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
          >
            resume checker
          </Link>
          .
        </>
      }
      faqHeading="FAQ: Resume optimization"
    />
  );
}
