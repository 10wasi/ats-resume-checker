import Link from "next/link";
import { CareerLandingPage } from "@/components/career/CareerLandingPage";
import { resumeOptimizationEntry } from "@/lib/content/career-success-hub/resume-optimization";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(resumeOptimizationEntry.ctr, {
  canonical: resumeOptimizationEntry.path,
  keywords: [
    "resume optimization guide",
    "ATS Resume Checker",
    "resume match score",
    "how to improve resume",
  ],
  ogType: "article",
});

export default function ResumeOptimizationPage() {
  return (
    <CareerLandingPage
      entry={resumeOptimizationEntry}
      intro={
        <>
          This <strong className="font-semibold text-slate-800">resume optimization guide</strong> is for job seekers who keep applying but rarely get interviews. Follow the workflow—score, tailor, bullets, checklist—with the free{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
          >
            ATS Resume Checker
          </Link>{" "}
          or read{" "}
          <Link href="/why-resume-not-getting-interviews" className="font-semibold text-slate-800 underline">
            why resumes get no interviews
          </Link>{" "}
          first.
        </>
      }
      faqHeading="FAQ: Resume optimization guide"
    />
  );
}
