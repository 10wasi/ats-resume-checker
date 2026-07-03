import Link from "next/link";
import type { ReactNode } from "react";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { RolePageAuthorityPanel } from "@/components/content/RolePageAuthorityPanel";
import { ProfessionRelatedCareers } from "@/components/hub/ProfessionRelatedCareers";
import { ResumeExamplesRelated } from "@/components/examples/ResumeExamplesRelated";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { ContentFreshnessLabel } from "@/components/seo/ContentFreshnessLabel";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";
import type { ResumeExampleEntry } from "@/lib/content/resume-examples/types";
import { RESUME_EXAMPLES_LIBRARY_PATH } from "@/lib/content/resume-examples/registry";

type Props = {
  example: ResumeExampleEntry;
  intro: ReactNode;
  faqHeading: string;
  faqIntro: ReactNode;
  breadcrumbParent?: { label: string; path: string };
  eyebrow?: string;
};

export function ResumeExamplePage({
  example,
  intro,
  faqHeading,
  faqIntro,
  breadcrumbParent,
  eyebrow = "Resume Examples Library · ResumeIQ",
}: Props) {
  const parent = breadcrumbParent ?? {
    label: "Resume Examples",
    path: RESUME_EXAMPLES_LIBRARY_PATH,
  };
  return (
    <>
      <ResourceGuideJsonLd
        path={example.path}
        title={example.seo.title}
        description={example.seo.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: parent.label, path: parent.path },
          { name: example.breadcrumbLabel, path: example.path },
        ]}
      />
      <PageFaqJsonLd items={example.faqItems} />
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
                  href={parent.path}
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  {parent.label}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">{example.breadcrumbLabel}</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">{eyebrow}</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {example.ctr.h1}
            </h1>
            <div className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              {intro}
            </div>
            <ContentFreshnessLabel path={example.path} className="mt-4" />
          </header>

          <RolePageAuthorityPanel
            roleTitle={example.breadcrumbLabel.replace(/ resume$/i, "")}
            slug={example.slug}
            seoKeywords={example.keywords}
            variant="example"
          />

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={example.body} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="resume-example-faq-heading"
          >
            <h2
              id="resume-example-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              {faqHeading}
            </h2>
            <div className="mt-3 text-slate-600">{faqIntro}</div>
            <div className="mt-10 space-y-10">
              {example.faqItems.map((item) => (
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

          <RelatedResources path={example.path} excludeHref={example.path} />

          <ProfessionRelatedCareers
            currentSlug={example.slug}
            roleTitle={example.breadcrumbLabel.replace(/ resume$/i, "")}
          />

          <div className="not-prose mt-10">
            <GuideEeatSection path={example.path} />
          </div>

          <ResumeExamplesRelated currentSlug={example.slug} />

          <BlogResumeCta />
        </div>
      </article>
      <StickyCheckerCta />
    </>
  );
}
