import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  RESUME_ACTION_VERBS_PATH,
  resumeActionVerbsBody,
  resumeActionVerbsSeo,
} from "@/lib/content/resume-action-verbs-body";
import { resumeActionVerbsFaqItems } from "@/lib/seo/resume-action-verbs-faq";
import {
  buildCtrMetadata,
  CTR_RESUME_ACTION_VERBS,
} from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "resume action verbs",
  "strong resume verbs",
  "resume power words",
  "action words for resume",
  "resume verbs by category",
  "ATS resume keywords",
];

export const metadata = buildCtrMetadata(CTR_RESUME_ACTION_VERBS, {
  canonical: RESUME_ACTION_VERBS_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function ResumeActionVerbsPage() {
  return (
    <KnowledgeGuidePage
      path={RESUME_ACTION_VERBS_PATH}
      breadcrumbLabel="Resume action verbs"
      knowledgeCenterId="keywords"
      h1={CTR_RESUME_ACTION_VERBS.h1}
      intro={
        <>
          <strong className="font-semibold text-slate-800">Resume action verbs</strong>{" "}
          are the first word of every bullet point—the difference between &ldquo;responsible
          for managing&rdquo; and &ldquo;spearheaded.&rdquo; Stronger verbs signal ownership, make bullets
          ATS-searchable, and keep recruiters reading. After updating your verbs, run the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>{" "}
          to verify keyword signals across the full document.
        </>
      }
      body={resumeActionVerbsBody}
      faqItems={resumeActionVerbsFaqItems}
      faqHeading="FAQ: Resume action verbs"
      faqIntro={
        <>
          Common questions about verb choice, tense, ATS indexing, and what to
          avoid on your resume.
        </>
      }
      seo={resumeActionVerbsSeo}
      relatedIds={["keywords", "keywords-database", "mistakes", "format"]}
    />
  );
}
