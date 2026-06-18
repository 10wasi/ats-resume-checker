import { CareerLandingPage } from "@/components/career/CareerLandingPage";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import { resumeMatchAnalyzerEntry } from "@/lib/content/career-success-hub/resume-match-analyzer";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

export const metadata = buildCtrMetadata(resumeMatchAnalyzerEntry.ctr, {
  canonical: resumeMatchAnalyzerEntry.path,
  keywords: [
    "Resume Match Analyzer",
    "resume match tool",
    "resume optimization",
    "ATS keywords",
  ],
  ogType: "article",
});

export default function ResumeMatchAnalyzerPage() {
  return (
    <CareerLandingPage
      entry={resumeMatchAnalyzerEntry}
      intro={
        <>
          The free <strong className="font-semibold text-slate-800">Resume Match Analyzer</strong>{" "}
          scores your resume against any job description—missing keywords, match %, and
          tailoring steps for global applications.
        </>
      }
      toolCta={
        <CareerToolCta
          href="/resume-job-description-match"
          buttonLabel="Run Resume Match Analyzer"
        />
      }
      faqHeading="FAQ: Resume match analyzer"
    />
  );
}
