import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  RESUME_MATCH_SCORE_PATH,
  resumeMatchScoreBody,
  resumeMatchScoreSeo,
} from "@/lib/content/resume-match-score-body";
import { resumeMatchScoreFaqItems } from "@/lib/seo/resume-match-score-faq";
import { buildCtrMetadata, CTR_RESUME_MATCH_SCORE } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_RESUME_MATCH_SCORE, {
  canonical: RESUME_MATCH_SCORE_PATH,
  keywords: [
    "resume match score",
    "resume match",
    "ATS keywords",
    "resume optimization",
    "ATS Resume Checker",
  ],
  ogType: "article",
});

export default function ResumeMatchScorePage() {
  return (
    <KnowledgeGuidePage
      path={RESUME_MATCH_SCORE_PATH}
      breadcrumbLabel="Resume match score"
      knowledgeCenterId="match-score"
      h1={CTR_RESUME_MATCH_SCORE.h1}
      intro={
        <>
          Learn what <strong className="font-semibold text-slate-800">resume match score</strong>{" "}
          measures, how it differs from ATS score, and the free workflow to improve keyword overlap
          before you apply—starting with the{" "}
          <Link
            href="/resume-job-description-match"
            className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
          >
            Resume Match Analyzer
          </Link>{" "}
          and{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
          >
            ATS Resume Checker
          </Link>
          .
        </>
      }
      body={resumeMatchScoreBody}
      faqItems={resumeMatchScoreFaqItems}
      faqHeading="FAQ: Resume match score"
      faqIntro={
        <>
          Common questions about match percentage, tailoring, and how match score relates to ATS
          scoring.
        </>
      }
      seo={resumeMatchScoreSeo}
      relatedIds={["match", "score", "keywords", "checklist"]}
    />
  );
}
