import dynamic from "next/dynamic";
import Link from "next/link";
import type { ReactNode } from "react";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { CareerHubRelated } from "@/components/career/CareerHubRelated";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { GuideAuthorBlock } from "@/components/seo/GuideAuthorBlock";
import { GuideContentEnrichment } from "@/components/seo/GuideContentEnrichment";
import { GuideConversionStrip } from "@/components/seo/GuideConversionStrip";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { MandatoryHubLinks } from "@/components/seo/MandatoryHubLinks";
import { PaaAnswersSection } from "@/components/seo/PaaAnswersSection";
import { SemanticEntitySection } from "@/components/seo/SemanticEntitySection";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";
import { TrustBadgesStrip } from "@/components/seo/TrustBadgesStrip";
import { TopicPillarBanner } from "@/components/seo/TopicPillarBanner";
import { CAREER_SUCCESS_HUB_PATH } from "@/lib/content/career-success-hub/registry";
import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { getPlatformHubByPath } from "@/lib/content/platform-hubs/registry";
import { PlatformHubSections } from "@/components/hub/PlatformHubSections";
import type { FaqItem } from "@/lib/seo/faq";

const ReadingProgress = dynamic(
  () => import("@/components/ui/ReadingProgress").then((m) => ({ default: m.ReadingProgress })),
  { ssr: false }
);

type Props = {
  entry: CareerLandingEntry;
  intro: ReactNode;
  faqHeading: string;
  faqIntro?: ReactNode;
  toolCta?: ReactNode;
};

const REJECTION_PILLAR_IDS = new Set([
  "resume-rejected-by-ats",
  "why-resume-gets-rejected",
  "common-ats-rejection-reasons",
  "resume-not-passing-ats",
  "resume-mistakes-interviews",
  "why-not-getting-interviews",
  "resume-screening-explained",
]);

const CHECKER_FUNNEL_IDS = new Set([
  "free-resume-checker-online",
  "free-ats-score-checker",
  "ats-resume-checker",
  "ai-resume-review",
  "cv-checker",
  "resume-score-checker",
  "resume-review",
  "resume-keywords-checker",
  "resume-keywords-missing",
]);

export function CareerLandingPage({
  entry,
  intro,
  faqHeading,
  faqIntro,
  toolCta,
}: Props) {
  const faqItems: FaqItem[] = entry.faqItems;
  const platformHub = getPlatformHubByPath(entry.path);
  const isCheckerFunnel = CHECKER_FUNNEL_IDS.has(entry.id);
  return (
    <>
      <ResourceGuideJsonLd
        path={entry.path}
        title={entry.ctr.title}
        description={entry.ctr.description}
        schemaType={isCheckerFunnel ? "WebPage" : "Article"}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Career Success Hub", path: CAREER_SUCCESS_HUB_PATH },
          { name: entry.breadcrumbLabel, path: entry.path },
        ]}
      />
      <PageFaqJsonLd items={faqItems} />
      <ReadingProgress />
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
                  href={CAREER_SUCCESS_HUB_PATH}
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  Career Success Hub
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">{entry.breadcrumbLabel}</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Career Success Hub · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {entry.ctr.h1}
            </h1>
            <div className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              {intro}
            </div>
            <GuideArticleMeta path={entry.path} />
          </header>

          {REJECTION_PILLAR_IDS.has(entry.id) ? (
            <div className="mt-8">
              <TopicPillarBanner
                pillarHref="/complete-guide-ats-resume-optimization"
                pillarTitle="Complete ATS resume optimization guide"
                context="This page focuses on one angle of rejection or screening. The master guide connects checker, score, keywords, format, and interview readiness in one workflow."
              />
            </div>
          ) : null}

          {toolCta ? <div className="mt-10">{toolCta}</div> : null}

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-8">
            <TableOfContents content={entry.body} />
          </div>

          <div className="mt-6">
            <BlogContent content={entry.body} />
          </div>

          <GuideConversionStrip />

          <GuideContentEnrichment path={entry.path} pageTitle={entry.ctr.primaryKeyword} />

          <SemanticEntitySection path={entry.path} />

          <div className="not-prose mt-10 space-y-6">
            <TrustBadgesStrip />
            <GuideAuthorBlock path={entry.path} />
            <GuideEeatSection path={entry.path} />
          </div>

          <MandatoryHubLinks />

          <RelatedResources path={entry.path} excludeHref={entry.path} />

          {platformHub ? <PlatformHubSections hub={platformHub} /> : null}

          <AccordionFaq
            items={faqItems}
            heading={faqHeading}
            headingId="career-faq-heading"
            intro={faqIntro}
          />

          <PaaAnswersSection path={entry.path} />

          <GuideConversionStrip className="mt-10" />

          <CareerHubRelated currentId={entry.id} />
          <BlogResumeCta />
        </div>
      </article>
      <StickyCheckerCta />
    </>
  );
}
