import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  RESUME_KEYWORDS_BY_INDUSTRY_PATH,
  resumeKeywordsByIndustryBody,
  resumeKeywordsByIndustrySeo,
} from "@/lib/content/resume-keywords-by-industry-body";
import { resumeKeywordsByIndustryFaqItems } from "@/lib/seo/resume-keywords-by-industry-faq";
import { buildCtrMetadata, CTR_INDUSTRY_KEYWORDS } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "resume keywords by industry",
  "industry resume keywords",
  "ATS resume keywords",
  "tech resume keywords",
  "healthcare resume keywords",
  "ATS Resume Checker",
];

export const metadata = buildCtrMetadata(CTR_INDUSTRY_KEYWORDS, {
  canonical: RESUME_KEYWORDS_BY_INDUSTRY_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function ResumeKeywordsByIndustryPage() {
  return (
    <KnowledgeGuidePage
      path={RESUME_KEYWORDS_BY_INDUSTRY_PATH}
      breadcrumbLabel="Resume keywords by industry"
      knowledgeCenterId="industry-keywords"
      h1={CTR_INDUSTRY_KEYWORDS.h1}
      intro={
        <>
          <strong className="font-semibold text-slate-800">Resume keywords by industry</strong>{" "}
          give you a honest starting list—tech, healthcare, finance, marketing,
          and more. Tailor against the live posting in the{" "}
          <Link
            href="/resume-job-description-match"
            className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-2 hover:text-slate-950"
          >
            Resume Match Analyzer
          </Link>
          , then validate in the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>
          .
        </>
      }
      body={resumeKeywordsByIndustryBody}
      faqItems={resumeKeywordsByIndustryFaqItems}
      faqHeading="FAQ: industry resume keywords"
      faqIntro={
        <>
          How to use sector lists, career changes, and posting-specific
          tailoring.
        </>
      }
      seo={resumeKeywordsByIndustrySeo}
      relatedIds={["keywords", "match", "examples", "friendly"]}
    />
  );
}
