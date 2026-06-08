import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  ATS_RESUME_KEYWORDS_PATH,
  atsResumeKeywordsBody,
  atsResumeKeywordsSeo,
} from "@/lib/content/ats-resume-keywords-body";
import { atsResumeKeywordsFaqItems } from "@/lib/seo/ats-resume-keywords-faq";
import { buildCtrMetadata, CTR_ATS_KEYWORDS } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "ATS resume keywords",
  "resume keywords",
  "keyword optimization",
  "ATS friendly resume",
  "resume match score",
  "ATS Resume Checker",
];

export const metadata = buildCtrMetadata(CTR_ATS_KEYWORDS, {
  canonical: ATS_RESUME_KEYWORDS_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function AtsResumeKeywordsPage() {
  return (
    <KnowledgeGuidePage
      path={ATS_RESUME_KEYWORDS_PATH}
      breadcrumbLabel="ATS resume keywords"
      knowledgeCenterId="keywords"
      h1={CTR_ATS_KEYWORDS.h1}
      intro={
        <>
          <strong className="font-semibold text-slate-800">ATS resume keywords</strong>{" "}
          connect your file to a posting—when they appear with proof, not in a
          dump. Learn placement, ethical tailoring, and how to find gaps with
          our{" "}
          <Link
            href="/resume-job-description-match"
            className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-2 hover:text-slate-950"
          >
            Resume Match Analyzer
          </Link>{" "}
          and{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>
          .
        </>
      }
      body={atsResumeKeywordsBody}
      faqItems={atsResumeKeywordsFaqItems}
      faqHeading="FAQ: ATS resume keywords"
      faqIntro={
        <>
          Placement, volume, synonyms, and how to find missing terms before you
          apply.
        </>
      }
      seo={atsResumeKeywordsSeo}
      relatedIds={["industry-keywords", "match", "score", "checklist"]}
    />
  );
}
