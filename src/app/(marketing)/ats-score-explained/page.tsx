import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  ATS_SCORE_EXPLAINED_PATH,
  atsScoreExplainedBody,
  atsScoreExplainedSeo,
} from "@/lib/content/ats-score-explained-body";
import { atsScoreExplainedFaqItems } from "@/lib/seo/ats-score-explained-faq";
import { buildCtrMetadata, CTR_ATS_SCORE } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "ATS score",
  "what is ATS score",
  "improve ATS score",
  "resume match score",
  "ATS Resume Checker",
  "ATS friendly resume",
];

export const metadata = buildCtrMetadata(CTR_ATS_SCORE, {
  canonical: ATS_SCORE_EXPLAINED_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function AtsScoreExplainedPage() {
  return (
    <KnowledgeGuidePage
      path={ATS_SCORE_EXPLAINED_PATH}
      breadcrumbLabel="ATS score explained"
      knowledgeCenterId="score"
      h1={CTR_ATS_SCORE.h1}
      intro={
        <>
          Your <strong className="font-semibold text-slate-800">ATS score</strong>{" "}
          is a rehearsal signal—not a hiring verdict. Learn what it measures, how
          it differs from{" "}
          <strong className="font-semibold text-slate-800">resume match score</strong>
          , and how to improve both in the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>
          .
        </>
      }
      body={atsScoreExplainedBody}
      faqItems={atsScoreExplainedFaqItems}
      faqHeading="FAQ: ATS score and match score"
      faqIntro={
        <>
          What counts as a good score, what employers see, and how to improve
          without keyword gaming.
        </>
      }
      seo={atsScoreExplainedSeo}
      relatedIds={["match", "keywords", "checklist", "mistakes"]}
    />
  );
}
