import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import {
  HOW_RESUME_ANALYSIS_WORKS_PATH,
  howResumeAnalysisWorksBody,
} from "@/lib/content/how-resume-analysis-works-body";
import { howResumeAnalysisFaqItems } from "@/lib/seo/how-resume-analysis-faq";
import { buildCtrMetadata, CTR_HOW_RESUME_ANALYSIS } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_HOW_RESUME_ANALYSIS, {
  canonical: HOW_RESUME_ANALYSIS_WORKS_PATH,
  keywords: [
    "how resume analysis works",
    "ATS resume checker",
    "resume score",
    "resume checker",
  ],
  ogType: "article",
});

export default function HowResumeAnalysisWorksPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={HOW_RESUME_ANALYSIS_WORKS_PATH}
        title={CTR_HOW_RESUME_ANALYSIS.title}
        description={CTR_HOW_RESUME_ANALYSIS.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "How Resume Analysis Works", path: HOW_RESUME_ANALYSIS_WORKS_PATH },
        ]}
      />
      <PageFaqJsonLd items={howResumeAnalysisFaqItems} />
      <article className="container-prose py-12 sm:py-16">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "How Resume Analysis Works", path: HOW_RESUME_ANALYSIS_WORKS_PATH },
          ]}
        />
        <header className="mt-8">
          <p className="section-eyebrow">Transparency · ResumeIQ</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            {CTR_HOW_RESUME_ANALYSIS.h1}
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Every stage from PDF upload to ATS score—what we measure and what you
            receive. Results are guidance, not guarantees—see our{" "}
            <Link href="/disclaimer" className="font-semibold text-[#16a34a] underline">
              disclaimer
            </Link>
            . Scoring weights:{" "}
            <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
              methodology
            </Link>
            . Try it on your file in the{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              free resume checker
            </Link>
            .
          </p>
        </header>
        <div className="mt-10">
          <BlogContent content={howResumeAnalysisWorksBody} />
        </div>
        <section className="mt-14 border-t border-slate-200 pt-12">
          <h2 className="font-display text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="mt-8 space-y-8">
            {howResumeAnalysisFaqItems.map((item) => (
              <div key={item.question}>
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 leading-relaxed text-slate-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="not-prose mt-10">
          <GuideEeatSection
            path={HOW_RESUME_ANALYSIS_WORKS_PATH}
            audience="Job seekers who want to understand exactly what the ResumeIQ checker measures before relying on results."
            notFor="This page does not guarantee that our analysis matches any specific employer's ATS configuration or hiring criteria."
          />
        </div>
        <RelatedResources
          path={HOW_RESUME_ANALYSIS_WORKS_PATH}
          excludeHref={HOW_RESUME_ANALYSIS_WORKS_PATH}
        />
        <BlogResumeCta />
      </article>
    </>
  );
}
