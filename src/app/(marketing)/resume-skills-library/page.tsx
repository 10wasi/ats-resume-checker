import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  RESUME_SKILLS_LIBRARY_PATH,
  resumeSkillsLibraryBody,
  resumeSkillsLibrarySeo,
  RESUME_SKILLS_LIBRARY_FAQ,
} from "@/lib/content/resume-skills-library-body";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(
  {
    title: ctrTitle("Resume Skills Library", "ATS Keyword Lists"),
    description: ctrMeta(
      "Resume skills library — hard skills, tools & ATS phrases by function. Build searchable skills, then test free."
    ),
    h1: "Resume Skills Library",
    primaryKeyword: "resume skills library",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  { canonical: RESUME_SKILLS_LIBRARY_PATH, ogType: "article" }
);

export default function ResumeSkillsLibraryPage() {
  return (
    <KnowledgeGuidePage
      path={RESUME_SKILLS_LIBRARY_PATH}
      breadcrumbLabel="Resume skills library"
      knowledgeCenterId="keywords"
      h1="Resume Skills Library"
      intro={
        <>
          The <strong className="font-semibold text-slate-800">resume skills library</strong> indexes
          ATS-searchable tools and phrases—use it with the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            free ATS resume checker
          </Link>{" "}
          and{" "}
          <Link href="/resume-resources" className="font-semibold text-[#16a34a] underline">
            resume resources hub
          </Link>
          .
        </>
      }
      body={resumeSkillsLibraryBody}
      faqItems={RESUME_SKILLS_LIBRARY_FAQ}
      faqHeading="FAQ: Resume skills library"
      faqIntro="Skills section strategy for applicant tracking systems."
      seo={resumeSkillsLibrarySeo}
      relatedIds={["keywords", "keywords-database", "format", "mistakes"]}
    />
  );
}
