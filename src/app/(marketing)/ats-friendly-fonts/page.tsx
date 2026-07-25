import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  ATS_FRIENDLY_FONTS_PATH,
  atsFriendlyFontsBody,
  atsFriendlyFontsSeo,
  ATS_FRIENDLY_FONTS_FAQ,
} from "@/lib/content/ats-friendly-fonts-body";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(
  {
    title: ctrTitle("ATS Friendly Fonts", "Safe Resume Typography"),
    description: ctrMeta(
      "ATS friendly fonts — Arial, Calibri, Georgia sizes & PDF rules. Export parse-safe resumes & test free."
    ),
    h1: "ATS Friendly Fonts",
    primaryKeyword: "ATS friendly fonts",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  { canonical: ATS_FRIENDLY_FONTS_PATH, ogType: "article" }
);

export default function AtsFriendlyFontsPage() {
  return (
    <KnowledgeGuidePage
      path={ATS_FRIENDLY_FONTS_PATH}
      breadcrumbLabel="ATS friendly fonts"
      knowledgeCenterId="format"
      h1="ATS Friendly Fonts"
      intro={
        <>
          Choose <strong className="font-semibold text-slate-800">ATS friendly fonts</strong> before
          you export—then validate in the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            ATS resume checker
          </Link>
          . See also{" "}
          <Link href="/ats-resume-format" className="font-semibold text-[#16a34a] underline">
            ATS formatting guide
          </Link>
          .
        </>
      }
      body={atsFriendlyFontsBody}
      faqItems={ATS_FRIENDLY_FONTS_FAQ}
      faqHeading="FAQ: ATS friendly fonts"
      faqIntro="Typography questions for parse-safe PDFs."
      seo={atsFriendlyFontsSeo}
      relatedIds={["format", "templates", "mistakes", "keywords"]}
    />
  );
}
