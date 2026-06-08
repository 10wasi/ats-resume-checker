import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  ATS_RESUME_FORMAT_PATH,
  atsResumeFormatBody,
  atsResumeFormatSeo,
} from "@/lib/content/ats-resume-format-body";
import { atsResumeFormatFaqItems } from "@/lib/seo/ats-resume-format-faq";
import { buildCtrMetadata, CTR_ATS_FORMAT } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "ATS resume format",
  "ATS resume formatting",
  "ATS friendly resume",
  "ATS compatible resume",
  "resume PDF ATS",
  "ATS Resume Checker",
];

export const metadata = buildCtrMetadata(CTR_ATS_FORMAT, {
  canonical: ATS_RESUME_FORMAT_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function AtsResumeFormatPage() {
  return (
    <KnowledgeGuidePage
      path={ATS_RESUME_FORMAT_PATH}
      breadcrumbLabel="ATS resume format"
      knowledgeCenterId="format"
      h1={CTR_ATS_FORMAT.h1}
      intro={
        <>
          <strong className="font-semibold text-slate-800">ATS resume format</strong>{" "}
          is the foundation—single column, standard headings, and a PDF that
          pastes cleanly. Fix layout first, then run the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>{" "}
          on the file you plan to upload.
        </>
      }
      body={atsResumeFormatBody}
      faqItems={atsResumeFormatFaqItems}
      faqHeading="FAQ: ATS resume formatting"
      faqIntro={
        <>
          Columns, fonts, PDF vs Word, and how to test whether your layout
          parses.
        </>
      }
      seo={atsResumeFormatSeo}
      relatedIds={["templates", "mistakes", "examples", "checklist"]}
    />
  );
}
