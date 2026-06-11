import { CareerLandingPage } from "@/components/career/CareerLandingPage";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import { atsResumeCheckerEntry } from "@/lib/content/career-success-hub/ats-resume-checker";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

export const metadata = buildCtrMetadata(atsResumeCheckerEntry.ctr, {
  canonical: atsResumeCheckerEntry.path,
  keywords: [
    "ATS Resume Checker",
    "resume checker",
    "ATS friendly resume",
    "resume optimization",
  ],
  ogType: "article",
});

export default function AtsResumeCheckerLandingPage() {
  return (
    <CareerLandingPage
      entry={atsResumeCheckerEntry}
      intro={
        <>
          The free <strong className="font-semibold text-slate-800">ATS resume checker</strong>{" "}
          built for job seekers who need parse diagnostics, keyword gaps, and a clear improvement
          plan—not a paywalled score with no context.
        </>
      }
      toolCta={<CareerToolCta />}
      faqHeading="FAQ: ATS resume checker"
    />
  );
}
