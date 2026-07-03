import Link from "next/link";
import type { ReactNode } from "react";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { RolePageAuthorityPanel } from "@/components/content/RolePageAuthorityPanel";
import { ProfessionRelatedCareers } from "@/components/hub/ProfessionRelatedCareers";
import { ResumeKeywordsRelated } from "@/components/keywords/ResumeKeywordsRelated";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { ContentFreshnessLabel } from "@/components/seo/ContentFreshnessLabel";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";
import { RESUME_KEYWORDS_PATH } from "@/lib/content/resume-keywords/registry";
import type { ResumeKeywordsEntry } from "@/lib/content/resume-keywords/types";

type Props = {
  entry: ResumeKeywordsEntry;
  intro: ReactNode;
  faqHeading: string;
  faqIntro?: ReactNode;
};

export function ResumeKeywordsPage({
  entry,
  intro,
  faqHeading,
  faqIntro,
}: Props) {
  return (
    <>
      <ResourceGuideJsonLd
        path={entry.path}
        title={entry.seo.title}
        description={entry.seo.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Keywords", path: RESUME_KEYWORDS_PATH },
          { name: entry.breadcrumbLabel, path: entry.path },
        ]}
      />
      <PageFaqJsonLd items={entry.faqItems} />
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
                  href={RESUME_KEYWORDS_PATH}
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  Resume Keywords
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">{entry.breadcrumbLabel}</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Resume Keywords Database · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {entry.ctr.h1}
            </h1>
            <div className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              {intro}
            </div>
            <ContentFreshnessLabel path={entry.path} className="mt-4" />
          </header>

          <RolePageAuthorityPanel
            roleTitle={entry.roleTitle}
            slug={entry.slug}
            seoKeywords={[entry.ctr.primaryKeyword, entry.roleTitle]}
            variant="keywords"
          />

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={entry.body} />
          </div>

          <RelatedResources path={entry.path} excludeHref={entry.path} />

          <ProfessionRelatedCareers currentSlug={entry.slug} roleTitle={entry.roleTitle} />

          <div className="not-prose mt-10">
            <GuideEeatSection path={entry.path} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="keywords-faq-heading"
          >
            <h2
              id="keywords-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              {faqHeading}
            </h2>
            {faqIntro ? (
              <div className="mt-3 text-slate-600">{faqIntro}</div>
            ) : null}
            <div className="mt-10 space-y-10">
              {entry.faqItems.map((item) => (
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

          <ResumeKeywordsRelated currentSlug={entry.slug} />
          <BlogResumeCta />
        </div>
      </article>
      <StickyCheckerCta />
    </>
  );
}
