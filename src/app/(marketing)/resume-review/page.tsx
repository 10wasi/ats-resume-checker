import Link from "next/link";
import { CareerLandingPage } from "@/components/career/CareerLandingPage";
import { resumeReviewEntry } from "@/lib/content/career-success-hub/resume-review";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(resumeReviewEntry.ctr, {
  canonical: resumeReviewEntry.path,
  keywords: ["resume review", "ATS Resume Checker", "resume optimization", "resume checker"],
  ogType: "article",
});

export default function ResumeReviewPage() {
  return (
    <CareerLandingPage
      entry={resumeReviewEntry}
      intro={
        <>
          A practical <strong className="font-semibold text-slate-800">resume review</strong>{" "}
          rubric for job seekers—what recruiters scan first, what ATS filters out, and how to
          fix both with our free{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
          >
            ATS Resume Checker
          </Link>
          .
        </>
      }
      faqHeading="FAQ: Free resume review"
    />
  );
}
