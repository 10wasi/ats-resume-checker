import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  AI_RESUME_REWRITE_PATH,
  aiResumeRewriteBody,
} from "@/lib/content/ai-resume-rewrite-body";
import { aiResumeRewriteFaqItems } from "@/lib/seo/ai-resume-rewrite-faq";
import { buildCtrMetadata, CTR_AI_REWRITE } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "resume optimization",
  "AI resume rewrite",
  "ATS Resume Checker",
  "ATS keywords",
  "ATS friendly resume",
  "resume improvement tool",
];

export const metadata = buildCtrMetadata(CTR_AI_REWRITE, {
  canonical: AI_RESUME_REWRITE_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function AiResumeRewritePage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={AI_RESUME_REWRITE_PATH}
        title={CTR_AI_REWRITE.title}
        description={CTR_AI_REWRITE.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "AI Resume Rewrite", path: AI_RESUME_REWRITE_PATH },
        ]}
      />
      <PageFaqJsonLd items={aiResumeRewriteFaqItems} />
      <article className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-mesh"
          aria-hidden
        />
        <div className="container-prose py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">AI Resume Rewrite</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Free tool · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {CTR_AI_REWRITE.h1}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Get AI-suggested bullet rewrites,{" "}
              <strong className="font-semibold text-slate-800">ATS keywords</strong>
              , and{" "}
              <strong className="font-semibold text-slate-800">
                resume optimization
              </strong>{" "}
              fixes—powered by our{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
              >
                ATS Resume Checker
              </Link>
              . Paste a job description for tailored suggestions.
            </p>
          </header>

          <div className="mt-10 rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/90 to-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
              Run the checker for live AI rewrites
            </p>
            <p className="mt-2 text-base leading-relaxed text-slate-700">
              Upload or paste your resume on the{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
              >
                ATS Resume Checker
              </Link>
              . Add an optional job description for tailored bullet rewrites,
              keyword gaps, and a prioritized improvement plan—free.
            </p>
            <Link
              href={RESUME_CHECKER_PATH}
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#16a34a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d]"
            >
              Open ATS Resume Checker →
            </Link>
          </div>

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={aiResumeRewriteBody} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="ai-rewrite-faq-heading"
          >
            <h2
              id="ai-rewrite-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: AI resume rewrite and ATS optimization
            </h2>
            <div className="mt-10 space-y-10">
              {aiResumeRewriteFaqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <RelatedResources path={AI_RESUME_REWRITE_PATH} excludeHref={AI_RESUME_REWRITE_PATH} />

          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
