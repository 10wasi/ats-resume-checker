import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { KnowledgeCenterRelated } from "@/components/knowledge/KnowledgeCenterRelated";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  ultimateAtsResumeGuideBody,
  ULTIMATE_ATS_GUIDE_PATH,
} from "@/lib/content/ultimate-ats-resume-guide-body";
import { KNOWLEDGE_CENTER_PATH } from "@/lib/content/knowledge-center-pages";
import { ultimateAtsGuideFaqItems } from "@/lib/seo/ultimate-ats-guide-faq";
import { buildCtrMetadata, CTR_ULTIMATE_GUIDE } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "resume optimization",
  "ATS Resume Checker",
  "ATS friendly resume",
  "ATS keywords",
  "resume match score",
  "ATS compatible resume",
  "ATS resume format",
  "online resume checker",
];

export const metadata = buildCtrMetadata(CTR_ULTIMATE_GUIDE, {
  canonical: ULTIMATE_ATS_GUIDE_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function UltimateAtsResumeGuidePage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={ULTIMATE_ATS_GUIDE_PATH}
        title={CTR_ULTIMATE_GUIDE.title}
        description={CTR_ULTIMATE_GUIDE.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Knowledge Center", path: KNOWLEDGE_CENTER_PATH },
          { name: "Ultimate ATS Guide", path: ULTIMATE_ATS_GUIDE_PATH },
        ]}
      />
      <PageFaqJsonLd items={ultimateAtsGuideFaqItems} />
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
              <li>
                <Link
                  href={KNOWLEDGE_CENTER_PATH}
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  Knowledge Center
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">Ultimate ATS guide</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">ATS Knowledge Center · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {CTR_ULTIMATE_GUIDE.h1}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Everything practical about{" "}
              <strong className="font-semibold text-slate-800">
                resume optimization
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                ATS keywords
              </strong>
              , and building an{" "}
              <strong className="font-semibold text-slate-800">
                ATS friendly resume
              </strong>
              —for US and UK job seekers tired of silence after submit. Run the{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
              >
                free ATS Resume Checker
              </Link>{" "}
              when you are ready to score your file.
            </p>
          </header>

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={ultimateAtsResumeGuideBody} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="ultimate-ats-faq-heading"
          >
            <h2
              id="ultimate-ats-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: ATS Resume Checker, scores, and resume optimization
            </h2>
            <p className="mt-3 text-slate-600">
              Quick answers on{" "}
              <strong className="font-semibold text-slate-800">
                ATS friendly resume
              </strong>{" "}
              builds,{" "}
              <strong className="font-semibold text-slate-800">
                resume match score
              </strong>{" "}
              tools, and how to{" "}
              <strong className="font-semibold text-slate-800">
                improve ATS score
              </strong>{" "}
              without keyword stuffing.
            </p>
            <div className="mt-10 space-y-10">
              {ultimateAtsGuideFaqItems.map((item) => (
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

          <KnowledgeCenterRelated
            excludeId="friendly"
            relatedIds={["keywords", "score", "match", "checklist"]}
          />

          <RelatedResources path={ULTIMATE_ATS_GUIDE_PATH} excludeHref={ULTIMATE_ATS_GUIDE_PATH} />

          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
