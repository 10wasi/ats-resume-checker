import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { KnowledgeCenterGrid } from "@/components/knowledge/KnowledgeCenterGrid";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { KnowledgeCenterItemListJsonLd } from "@/components/seo/KnowledgeCenterItemListJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { knowledgeCenterBody } from "@/lib/content/knowledge-center-body";
import { KNOWLEDGE_CENTER_PATH } from "@/lib/content/knowledge-center-pages";
import { knowledgeCenterFaqItems } from "@/lib/seo/knowledge-center-faq";
import { buildCtrMetadata, CTR_KNOWLEDGE_CENTER } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "ATS Knowledge Center",
  "ATS resume guide",
  "ATS friendly resume",
  "ATS resume examples",
  "ATS resume checklist",
  "ATS resume keywords",
  "ATS resume format",
  "resume match score",
  "ATS score",
  "resume optimization",
];

export const metadata = buildCtrMetadata(CTR_KNOWLEDGE_CENTER, {
  canonical: KNOWLEDGE_CENTER_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function KnowledgeCenterPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={KNOWLEDGE_CENTER_PATH}
        title={CTR_KNOWLEDGE_CENTER.title}
        description={CTR_KNOWLEDGE_CENTER.description}
      />
      <KnowledgeCenterItemListJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Knowledge Center", path: KNOWLEDGE_CENTER_PATH },
        ]}
      />
      <PageFaqJsonLd items={knowledgeCenterFaqItems} />
      <article className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px] bg-mesh"
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
              <li className="text-slate-700">Knowledge Center</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Free resource library · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {CTR_KNOWLEDGE_CENTER.h1}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Ten guides. One workflow. Build topical depth across{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume examples
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                keywords
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">format</strong>,
              matching, and scoring—then validate every export in our{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
              >
                ATS Resume Checker
              </Link>
              .
            </p>
          </header>

          <div className="mt-10">
            <KnowledgeCenterGrid />
          </div>

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={knowledgeCenterBody} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="kc-index-faq-heading"
          >
            <h2
              id="kc-index-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: using the ATS Knowledge Center
            </h2>
            <div className="mt-10 space-y-10">
              {knowledgeCenterFaqItems.map((item) => (
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
