import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  HOW_RESUME_ANALYSIS_WORKS_PATH,
  howResumeAnalysisWorksBody,
} from "@/lib/content/how-resume-analysis-works-body";
import { buildCtrMetadata, CTR_HOW_RESUME_ANALYSIS } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const FAQ = [
  {
    question: "What does resume analysis include?",
    answer:
      "Extraction, format flags, keyword and skills signals, readability, optional job match, AI section feedback, checklist, and downloadable reports—not just a single score.",
  },
  {
    question: "Is resume analysis the same as employer ATS?",
    answer:
      "No. We approximate common parser and keyword patterns. Employers use proprietary systems—use our report to prioritize fixes, not as a guarantee of ranking.",
  },
  {
    question: "Do I need a job description for full analysis?",
    answer:
      "Baseline score and format checks work without a JD. Paste a posting for match %, tailored missing keywords, and stronger rewrite suggestions.",
  },
];

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
      <PageFaqJsonLd items={FAQ} />
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
            receive. Try it on your file in the{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              free resume checker
            </Link>.
          </p>
        </header>
        <div className="mt-10">
          <BlogContent content={howResumeAnalysisWorksBody} />
        </div>
        <section className="mt-14 border-t border-slate-200 pt-12">
          <h2 className="font-display text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="mt-8 space-y-8">
            {FAQ.map((item) => (
              <div key={item.question}>
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 leading-relaxed text-slate-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <RelatedResources
          path={HOW_RESUME_ANALYSIS_WORKS_PATH}
          excludeHref={HOW_RESUME_ANALYSIS_WORKS_PATH}
        />
        <BlogResumeCta />
      </article>
    </>
  );
}
