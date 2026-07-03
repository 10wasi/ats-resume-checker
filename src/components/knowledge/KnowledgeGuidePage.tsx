import Link from "next/link";
import type { ReactNode } from "react";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { KnowledgeCenterRelated } from "@/components/knowledge/KnowledgeCenterRelated";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { ContentFreshnessLabel } from "@/components/seo/ContentFreshnessLabel";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";
import { KNOWLEDGE_CENTER_PATH } from "@/lib/content/knowledge-center-pages";
import type { FaqItem } from "@/lib/seo/faq";
import type { HowToStep } from "@/lib/seo/how-to-steps";

type Props = {
  path: string;
  breadcrumbLabel: string;
  knowledgeCenterId: string;
  h1: string;
  intro: ReactNode;
  body: string;
  faqItems: FaqItem[];
  faqHeading: string;
  faqIntro: ReactNode;
  seo: { title: string; description: string };
  relatedIds?: string[];
  howTo?: { name: string; description: string; steps: HowToStep[]; path: string };
};

export function KnowledgeGuidePage({
  path,
  breadcrumbLabel,
  knowledgeCenterId,
  h1,
  intro,
  body,
  faqItems,
  faqHeading,
  faqIntro,
  seo,
  relatedIds,
  howTo,
}: Props) {
  return (
    <>
      <ResourceGuideJsonLd
        path={path}
        title={seo.title}
        description={seo.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Knowledge Center", path: KNOWLEDGE_CENTER_PATH },
          { name: breadcrumbLabel, path },
        ]}
      />
      {howTo ? (
        <HowToJsonLd
          name={howTo.name}
          description={howTo.description}
          steps={howTo.steps}
          path={howTo.path}
        />
      ) : null}
      <PageFaqJsonLd items={faqItems} />
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
              <li className="text-slate-700">{breadcrumbLabel}</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">ATS Knowledge Center · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {h1}
            </h1>
            <div className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              {intro}
            </div>
            <ContentFreshnessLabel path={path} className="mt-4" />
          </header>

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={body} />
          </div>

          <div className="not-prose mt-10">
            <GuideEeatSection path={path} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="kc-faq-heading"
          >
            <h2
              id="kc-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              {faqHeading}
            </h2>
            <div className="mt-3 text-slate-600">{faqIntro}</div>
            <div className="mt-10 space-y-10">
              {faqItems.map((item) => (
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

          <RelatedResources path={path} excludeHref={path} />

          <KnowledgeCenterRelated
            excludeId={knowledgeCenterId}
            relatedIds={relatedIds}
            heading="More guides in the Knowledge Center"
          />

          <BlogResumeCta />
        </div>
      </article>
      <StickyCheckerCta />
    </>
  );
}
