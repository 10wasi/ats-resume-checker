import Link from "next/link";
import { KnowledgeGuidePage } from "@/components/knowledge/KnowledgeGuidePage";
import {
  ATS_RESUME_MISTAKES_PATH,
  atsResumeMistakesBody,
  atsResumeMistakesSeo,
} from "@/lib/content/ats-resume-mistakes-body";
import { atsResumeMistakesFaqItems } from "@/lib/seo/ats-resume-mistakes-faq";
import { buildCtrMetadata, CTR_ATS_MISTAKES } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "ATS resume mistakes",
  "why resume rejected by ATS",
  "ATS rejection",
  "ATS friendly resume",
  "resume optimization",
  "ATS Resume Checker",
];

export const metadata = buildCtrMetadata(CTR_ATS_MISTAKES, {
  canonical: ATS_RESUME_MISTAKES_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function AtsResumeMistakesPage() {
  return (
    <KnowledgeGuidePage
      path={ATS_RESUME_MISTAKES_PATH}
      breadcrumbLabel="ATS resume mistakes"
      knowledgeCenterId="mistakes"
      h1={CTR_ATS_MISTAKES.h1}
      intro={
        <>
          The worst <strong className="font-semibold text-slate-800">ATS resume mistakes</strong>{" "}
          are fixable in an evening—columns, header traps, keyword dumps, and
          bad exports. Catch yours in the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>{" "}
          before the next silent rejection.
        </>
      }
      body={atsResumeMistakesBody}
      faqItems={atsResumeMistakesFaqItems}
      faqHeading="FAQ: ATS resume mistakes"
      faqIntro={
        <>
          Common rejection triggers, keyword stuffing, and how to recover before
          you apply again.
        </>
      }
      seo={atsResumeMistakesSeo}
      relatedIds={["format", "templates", "keywords", "score"]}
    />
  );
}
