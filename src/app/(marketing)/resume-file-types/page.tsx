import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  RESUME_FILE_TYPES_PATH,
  resumeFileTypesBody,
  resumeFileTypesSeo,
  RESUME_FILE_TYPES_FAQ,
} from "@/lib/content/resume-file-types-body";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(
  {
    title: ctrTitle("Resume File Types", "PDF vs DOCX ATS"),
    description: ctrMeta(
      "Resume file types for ATS — PDF vs DOCX, naming & size limits. Upload the right format & parser test free."
    ),
    h1: "Resume File Types",
    primaryKeyword: "resume file types",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  { canonical: RESUME_FILE_TYPES_PATH, ogType: "article" }
);

export default function ResumeFileTypesPage() {
  return (
    <KnowledgeGuidePage
      path={RESUME_FILE_TYPES_PATH}
      breadcrumbLabel="Resume file types"
      knowledgeCenterId="format"
      h1="Resume File Types"
      intro={
        <>
          Pick the right <strong className="font-semibold text-slate-800">resume file type</strong>{" "}
          for each portal, then scan the same export in the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            ATS resume checker
          </Link>
          .
        </>
      }
      body={resumeFileTypesBody}
      faqItems={RESUME_FILE_TYPES_FAQ}
      faqHeading="FAQ: Resume file types"
      faqIntro="PDF, Word, and upload troubleshooting."
      seo={resumeFileTypesSeo}
      relatedIds={["format", "templates", "mistakes", "keywords"]}
    />
  );
}
