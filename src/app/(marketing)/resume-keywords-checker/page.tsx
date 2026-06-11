import Link from "next/link";
import { CareerLandingPage } from "@/components/career/CareerLandingPage";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import { resumeKeywordsCheckerEntry } from "@/lib/content/career-success-hub/resume-keywords-checker";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

export const metadata = buildCtrMetadata(resumeKeywordsCheckerEntry.ctr, {
  canonical: resumeKeywordsCheckerEntry.path,
  keywords: [
    "resume keywords",
    "resume keywords checker",
    "ATS keywords",
    "resume match score",
  ],
  ogType: "article",
});

export default function ResumeKeywordsCheckerPage() {
  return (
    <CareerLandingPage
      entry={resumeKeywordsCheckerEntry}
      intro={
        <>
          Find missing <strong className="font-semibold text-slate-800">resume keywords</strong>{" "}
          vs any job post—extract terms, compare to your resume, and place them ethically with our
          free keywords finder and match tool.
        </>
      }
      toolCta={
        <CareerToolCta
          title="Extract keywords from a job post"
          description="Paste a job description into the ATS Keywords Finder, then run Resume Match to see gaps in your resume."
          buttonLabel="Open ATS Keywords Finder →"
          href="/ats-keywords-finder"
        />
      }
      faqHeading="FAQ: Resume keywords checker"
    />
  );
}
