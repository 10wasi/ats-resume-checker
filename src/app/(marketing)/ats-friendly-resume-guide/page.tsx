import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  ATS_FRIENDLY_RESUME_GUIDE_PATH,
  atsFriendlyResumeGuideBody,
  atsFriendlyResumeGuideSeo,
} from "@/lib/content/ats-friendly-resume-guide-body";
import { atsFriendlyResumeGuideFaqItems } from "@/lib/seo/ats-friendly-resume-guide-faq";
import { buildCtrMetadata, CTR_ATS_FRIENDLY } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "ATS friendly resume",
  "how to make resume ATS friendly",
  "ATS compatible resume",
  "ATS resume format",
  "ATS resume keywords",
  "ATS Resume Checker",
];

export const metadata = buildCtrMetadata(CTR_ATS_FRIENDLY, {
  canonical: ATS_FRIENDLY_RESUME_GUIDE_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function AtsFriendlyResumeGuidePage() {
  return (
    <KnowledgeGuidePage
      path={ATS_FRIENDLY_RESUME_GUIDE_PATH}
      breadcrumbLabel="ATS-friendly resume guide"
      knowledgeCenterId="friendly"
      h1={CTR_ATS_FRIENDLY.h1}
      intro={
        <>
          A step-by-step path to an{" "}
          <strong className="font-semibold text-slate-800">ATS friendly resume</strong>
          —structure, bullets, keywords, export QA, and a final check in our{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>
          . Pair with the{" "}
          <Link
            href="/ats-resume-checklist-2026"
            className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-2 hover:text-slate-950"
          >
            ATS resume checklist
          </Link>{" "}
          before every apply batch.
        </>
      }
      body={atsFriendlyResumeGuideBody}
      faqItems={atsFriendlyResumeGuideFaqItems}
      faqHeading="FAQ: building an ATS-friendly resume"
      faqIntro={
        <>
          Templates, file types, tailoring frequency, and how to test your
          finished file.
        </>
      }
      seo={atsFriendlyResumeGuideSeo}
      relatedIds={["checklist", "examples", "format", "keywords"]}
    />
  );
}
