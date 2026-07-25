import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  RESUME_LENGTH_GUIDE_PATH,
  resumeLengthGuideBody,
  resumeLengthGuideSeo,
  RESUME_LENGTH_GUIDE_FAQ,
} from "@/lib/content/resume-length-guide-body";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(
  {
    title: ctrTitle("Resume Length Guide", "One Page vs Two ATS"),
    description: ctrMeta(
      "Resume length guide for ATS — one page vs two by experience. Trim fluff, keep keywords, scan free."
    ),
    h1: "Resume Length Guide",
    primaryKeyword: "resume length guide",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  { canonical: RESUME_LENGTH_GUIDE_PATH, ogType: "article" }
);

export default function ResumeLengthGuidePage() {
  return (
    <KnowledgeGuidePage
      path={RESUME_LENGTH_GUIDE_PATH}
      breadcrumbLabel="Resume length guide"
      knowledgeCenterId="format"
      h1="Resume Length Guide"
      intro={
        <>
          Use this <strong className="font-semibold text-slate-800">resume length guide</strong> with
          the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            free ATS resume checker
          </Link>{" "}
          so trims do not drop posting keywords.
        </>
      }
      body={resumeLengthGuideBody}
      faqItems={RESUME_LENGTH_GUIDE_FAQ}
      faqHeading="FAQ: Resume length"
      faqIntro="Page count norms for ATS and recruiters."
      seo={resumeLengthGuideSeo}
      relatedIds={["format", "mistakes", "templates", "keywords"]}
    />
  );
}
