import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  ATS_RESUME_EXAMPLES_PATH,
  atsResumeExamplesBody,
  atsResumeExamplesSeo,
} from "@/lib/content/ats-resume-examples-body";
import { atsResumeExamplesFaqItems } from "@/lib/seo/ats-resume-examples-faq";
import { buildCtrMetadata, CTR_ATS_EXAMPLES } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "ATS resume examples",
  "ATS friendly resume examples",
  "good ATS resume",
  "ATS resume format",
  "resume optimization",
  "ATS Resume Checker",
];

export const metadata = buildCtrMetadata(CTR_ATS_EXAMPLES, {
  canonical: ATS_RESUME_EXAMPLES_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function AtsResumeExamplesPage() {
  return (
    <KnowledgeGuidePage
      path={ATS_RESUME_EXAMPLES_PATH}
      breadcrumbLabel="ATS resume examples"
      knowledgeCenterId="examples"
      h1={CTR_ATS_EXAMPLES.h1}
      intro={
        <>
          Real <strong className="font-semibold text-slate-800">ATS resume examples</strong>{" "}
          show what parsers extract—and what they scramble. Compare good vs bad
          layouts, bullets, and keyword placement, then test your export in our{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>
          .
        </>
      }
      body={atsResumeExamplesBody}
      faqItems={atsResumeExamplesFaqItems}
      faqHeading="FAQ: ATS resume examples"
      faqIntro={
        <>
          Quick answers on layouts, columns, photos, and how to validate your
          file against working examples.
        </>
      }
      seo={atsResumeExamplesSeo}
      relatedIds={["templates", "format", "friendly", "mistakes"]}
    />
  );
}
