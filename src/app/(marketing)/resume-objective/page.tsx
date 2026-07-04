import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  RESUME_OBJECTIVE_PATH,
  resumeObjectiveBody,
  resumeObjectiveSeo,
} from "@/lib/content/resume-objective-body";
import { resumeObjectiveFaqItems } from "@/lib/seo/resume-objective-faq";
import {
  buildCtrMetadata,
  CTR_RESUME_OBJECTIVE,
} from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "resume objective",
  "resume objective vs summary",
  "resume objective examples",
  "career objective for resume",
  "resume objective for freshers",
  "resume objective career change",
  "professional summary vs objective",
];

export const metadata = buildCtrMetadata(CTR_RESUME_OBJECTIVE, {
  canonical: RESUME_OBJECTIVE_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function ResumeObjectivePage() {
  return (
    <KnowledgeGuidePage
      path={RESUME_OBJECTIVE_PATH}
      breadcrumbLabel="Resume objective"
      knowledgeCenterId="examples"
      h1={CTR_RESUME_OBJECTIVE.h1}
      intro={
        <>
          A{" "}
          <strong className="font-semibold text-slate-800">resume objective</strong>{" "}
          is a 2–4 line statement that declares your goal and what you bring—ideal
          for entry-level applicants, career changers, and internship seekers. A
          professional summary works better when you have 5+ years in the same
          field. Either way, include role-relevant keywords and check the result
          with the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>{" "}
          before applying.
        </>
      }
      body={resumeObjectiveBody}
      faqItems={resumeObjectiveFaqItems}
      faqHeading="FAQ: Resume objective"
      faqIntro={
        <>
          Answers to the most common questions about writing, formatting, and
          ATS-optimizing your resume objective or professional summary.
        </>
      }
      seo={resumeObjectiveSeo}
      relatedIds={["examples", "keywords", "format", "mistakes"]}
    />
  );
}
