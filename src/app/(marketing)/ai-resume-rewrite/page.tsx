import type { Metadata } from "next";
import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  AI_RESUME_REWRITE_PATH,
  aiResumeRewriteBody,
  aiResumeRewriteSeo,
} from "@/lib/content/ai-resume-rewrite-body";
import { aiResumeRewriteFaqItems } from "@/lib/seo/ai-resume-rewrite-faq";
import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "AI resume rewrite",
  "ATS resume checker",
  "resume improvement tool",
  "resume optimization",
  "ATS friendly resume",
  "AI resume improvements",
  "resume rewrite assistant",
];

export const metadata: Metadata = {
  title: aiResumeRewriteSeo.title,
  description: aiResumeRewriteSeo.description,
  keywords: KEYWORDS,
  alternates: { canonical: AI_RESUME_REWRITE_PATH },
  openGraph: {
    title: aiResumeRewriteSeo.title,
    description: aiResumeRewriteSeo.description,
    url: `${getSiteUrl().replace(/\/$/, "")}${AI_RESUME_REWRITE_PATH}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: aiResumeRewriteSeo.title,
    description: aiResumeRewriteSeo.description,
  },
  robots: { index: true, follow: true },
};

export default function AiResumeRewritePage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={AI_RESUME_REWRITE_PATH}
        title={aiResumeRewriteSeo.title}
        description={aiResumeRewriteSeo.description}
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
              AI Resume Rewrite & ATS Optimization
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Get AI resume improvements with original vs improved text, ATS
              scoring, and keyword suggestions. Start with our{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
              >
                ATS resume checker
              </Link>{" "}
              — free, no account required.
            </p>
          </header>

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={aiResumeRewriteBody} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="ai-resume-rewrite-faq-heading"
          >
            <h2
              id="ai-resume-rewrite-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: AI Resume Rewrite & ATS Optimization
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

          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
