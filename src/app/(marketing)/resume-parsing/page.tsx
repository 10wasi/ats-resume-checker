import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  RESUME_PARSING_PATH,
  resumeParsingBody,
  resumeParsingSeo,
} from "@/lib/content/resume-parsing-body";
import { resumeParsingFaqItems } from "@/lib/seo/resume-parsing-faq";
import { buildCtrMetadata, CTR_RESUME_PARSING } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "resume parsing",
  "ATS resume parsing",
  "how ATS reads resume",
  "resume parser",
  "ATS text extraction",
  "resume parse failure",
  "ATS parsing PDF",
];

export const metadata = buildCtrMetadata(CTR_RESUME_PARSING, {
  canonical: RESUME_PARSING_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function ResumeParsingPage() {
  return (
    <KnowledgeGuidePage
      path={RESUME_PARSING_PATH}
      breadcrumbLabel="Resume parsing"
      knowledgeCenterId="format"
      h1={CTR_RESUME_PARSING.h1}
      intro={
        <>
          <strong className="font-semibold text-slate-800">Resume parsing</strong>{" "}
          is the invisible first step every application goes through—before any
          human sees your resume. When a parser fails to extract your job titles,
          skills, or contact details, your application becomes unsearchable. Test
          your file instantly with the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>{" "}
          and see the extracted text preview before you apply.
        </>
      }
      body={resumeParsingBody}
      faqItems={resumeParsingFaqItems}
      faqHeading="FAQ: Resume parsing"
      faqIntro={
        <>
          Common questions about how ATS systems extract and index resume
          content from PDF and DOCX files.
        </>
      }
      seo={resumeParsingSeo}
      relatedIds={["format", "mistakes", "keywords", "friendly"]}
    />
  );
}
