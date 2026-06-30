import dynamic from "next/dynamic";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomePlatformJsonLd } from "@/components/seo/HomePlatformJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import {
  FeatureHighlights,
  HeroSection,
  HomeChecklistSection,
  HomeCoreToolsGridSection,
  HomeKeywordsGuidePreviewSection,
  HomeQuickResumeTipsSection,
  HomeResumeMatchPreviewSection,
  HomeStrongCtaSection,
  HomeTrustedBySection,
  HowItWorksSection,
  ProblemSolutionSection,
} from "@/components/home/HomeSections";
import { HomeInstantAnswersSection } from "@/components/home/HomeInstantAnswersSection";
import { HomeProductDifferentiationSection } from "@/components/home/HomeProductDifferentiationSection";
import { HomeSeoContent } from "@/components/home/HomeSeoContent";
import { HomeWhoItsForSection } from "@/components/home/HomeWhoItsForSection";
import {
  HomeMethodologyPreviewSection,
  HomeTrustScoringSection,
  HomeWhyTrustSection,
} from "@/components/home/HomeAuthoritySections";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildCtrMetadata, CTR_HOME } from "@/lib/seo/ctr-metadata";

const FaqSection = dynamic(
  () =>
    import("@/components/home/FaqSection").then((m) => ({
      default: m.FaqSection,
    })),
  {
    loading: () => (
      <div className="container-page py-20">
        <div className="h-96 animate-pulse rounded-2xl bg-slate-100" />
      </div>
    ),
  }
);

const BlogHighlightsSection = dynamic(
  () =>
    import("@/components/home/BlogHighlightsSection").then((m) => ({
      default: m.BlogHighlightsSection,
    })),
  {
    loading: () => (
      <div className="container-page py-16">
        <div className="h-64 animate-pulse rounded-2xl bg-slate-100" />
      </div>
    ),
  }
);

const AdPlaceholder = dynamic(
  () =>
    import("@/components/monetization/AdPlaceholder").then((m) => ({
      default: m.AdPlaceholder,
    })),
  { loading: () => null }
);

export const metadata = buildCtrMetadata(CTR_HOME, {
  canonical: "/",
  keywords: [
    "resume checker",
    "resume score checker",
    "free resume checker online",
    "ATS resume checker",
    "resume optimization tool",
    "free ATS score checker",
    "resume rejected by ATS",
    "resume checker free online",
  ],
});

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <WebSiteJsonLd />
      <HomeWebApplicationJsonLd />
      <HomePlatformJsonLd />
      <FaqJsonLd />

      {/* What it is + primary CTA */}
      <HeroSection />
      <HomeInstantAnswersSection />
      <HomeTrustedBySection />

      {/* Benefits & features */}
      <HomeWhoItsForSection />
      <FeatureHighlights />

      {/* Workflow + ATS explained */}
      <HowItWorksSection />
      <ProblemSolutionSection />

      {/* Score, match, keywords, formatting */}
      <HomeTrustScoringSection />
      <HomeResumeMatchPreviewSection />
      <HomeKeywordsGuidePreviewSection />
      <HomeChecklistSection />

      {/* Success tips + differentiation */}
      <HomeQuickResumeTipsSection />
      <HomeProductDifferentiationSection />
      <HomeCoreToolsGridSection />

      {/* Trust & methodology */}
      <HomeWhyTrustSection />
      <HomeMethodologyPreviewSection />
      <HomeSeoContent />

      {/* Latest resources + conversion */}
      <BlogHighlightsSection />
      <AdPlaceholder
        label="Advertisement · resume tools"
        className="border-b border-slate-100 py-6 sm:py-8"
      />
      <FaqSection />
      <HomeStrongCtaSection />
    </>
  );
}
