import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  ATS_RESUME_TEMPLATES_PATH,
  atsResumeTemplatesBody,
  atsResumeTemplatesSeo,
} from "@/lib/content/ats-resume-templates-body";
import { atsResumeTemplatesFaqItems } from "@/lib/seo/ats-resume-templates-faq";
import { buildCtrMetadata, CTR_ATS_TEMPLATES } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "ATS resume templates",
  "ATS friendly resume template",
  "best ATS resume template",
  "ATS resume format",
  "ATS Resume Checker",
];

export const metadata = buildCtrMetadata(CTR_ATS_TEMPLATES, {
  canonical: ATS_RESUME_TEMPLATES_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function AtsResumeTemplatesPage() {
  return (
    <KnowledgeGuidePage
      path={ATS_RESUME_TEMPLATES_PATH}
      breadcrumbLabel="ATS resume templates"
      knowledgeCenterId="templates"
      h1={CTR_ATS_TEMPLATES.h1}
      intro={
        <>
          Not every <strong className="font-semibold text-slate-800">ATS resume template</strong>{" "}
          survives upload. Learn which layouts parse, which to skip, and how to
          test yours in the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>{" "}
          before you apply.
        </>
      }
      body={atsResumeTemplatesBody}
      faqItems={atsResumeTemplatesFaqItems}
      faqHeading="FAQ: ATS resume templates"
      faqIntro={
        <>
          Canva vs Word, paid templates, two-page layouts, and how to validate
          any design.
        </>
      }
      seo={atsResumeTemplatesSeo}
      relatedIds={["format", "examples", "friendly", "mistakes"]}
    />
  );
}
