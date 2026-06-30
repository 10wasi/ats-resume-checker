import dynamic from "next/dynamic";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomePlatformJsonLd } from "@/components/seo/HomePlatformJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { HeroSection } from "@/components/home/HomeSections";
import { HomeInstantAnswersSection } from "@/components/home/HomeInstantAnswersSection";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildCtrMetadata, CTR_HOME } from "@/lib/seo/ctr-metadata";

function SectionSkeleton({ height = "h-48" }: { height?: string }) {
  return (
    <div className="container-page py-16" aria-hidden>
      <div className={`${height} animate-pulse rounded-2xl bg-slate-100`} />
    </div>
  );
}

const HomeTrustedBySection = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.HomeTrustedBySection })),
  { loading: () => <SectionSkeleton /> }
);
const HomeWhoItsForSection = dynamic(
  () => import("@/components/home/HomeWhoItsForSection").then((m) => ({ default: m.HomeWhoItsForSection })),
  { loading: () => <SectionSkeleton height="h-64" /> }
);
const FeatureHighlights = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.FeatureHighlights })),
  { loading: () => <SectionSkeleton /> }
);
const HowItWorksSection = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.HowItWorksSection })),
  { loading: () => <SectionSkeleton /> }
);
const ProblemSolutionSection = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.ProblemSolutionSection })),
  { loading: () => <SectionSkeleton height="h-56" /> }
);
const HomeTrustScoringSection = dynamic(
  () => import("@/components/home/HomeAuthoritySections").then((m) => ({ default: m.HomeTrustScoringSection })),
  { loading: () => <SectionSkeleton /> }
);
const HomeResumeMatchPreviewSection = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.HomeResumeMatchPreviewSection })),
  { loading: () => <SectionSkeleton /> }
);
const HomeKeywordsGuidePreviewSection = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.HomeKeywordsGuidePreviewSection })),
  { loading: () => <SectionSkeleton /> }
);
const HomeChecklistSection = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.HomeChecklistSection })),
  { loading: () => <SectionSkeleton /> }
);
const HomeQuickResumeTipsSection = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.HomeQuickResumeTipsSection })),
  { loading: () => <SectionSkeleton /> }
);
const HomeProductDifferentiationSection = dynamic(
  () =>
    import("@/components/home/HomeProductDifferentiationSection").then((m) => ({
      default: m.HomeProductDifferentiationSection,
    })),
  { loading: () => <SectionSkeleton /> }
);
const HomeCoreToolsGridSection = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.HomeCoreToolsGridSection })),
  { loading: () => <SectionSkeleton height="h-72" /> }
);
const HomeTrustSecuritySection = dynamic(
  () =>
    import("@/components/home/HomeTrustSecuritySection").then((m) => ({
      default: m.HomeTrustSecuritySection,
    })),
  { loading: () => <SectionSkeleton /> }
);
const HomeWhyTrustSection = dynamic(
  () => import("@/components/home/HomeAuthoritySections").then((m) => ({ default: m.HomeWhyTrustSection })),
  { loading: () => <SectionSkeleton /> }
);
const HomeMethodologyPreviewSection = dynamic(
  () =>
    import("@/components/home/HomeAuthoritySections").then((m) => ({
      default: m.HomeMethodologyPreviewSection,
    })),
  { loading: () => <SectionSkeleton /> }
);
const HomeTopicAuthoritySection = dynamic(
  () =>
    import("@/components/home/HomeTopicAuthoritySection").then((m) => ({
      default: m.HomeTopicAuthoritySection,
    })),
  { loading: () => <SectionSkeleton height="h-72" /> }
);
const HomeSeoContent = dynamic(
  () => import("@/components/home/HomeSeoContent").then((m) => ({ default: m.HomeSeoContent })),
  { loading: () => <SectionSkeleton height="h-96" /> }
);
const FaqSection = dynamic(
  () => import("@/components/home/FaqSection").then((m) => ({ default: m.FaqSection })),
  { loading: () => <SectionSkeleton height="h-96" /> }
);
const BlogHighlightsSection = dynamic(
  () => import("@/components/home/BlogHighlightsSection").then((m) => ({ default: m.BlogHighlightsSection })),
  { loading: () => <SectionSkeleton height="h-64" /> }
);
const HomeStrongCtaSection = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.HomeStrongCtaSection })),
  { loading: () => <SectionSkeleton height="h-40" /> }
);
const AdPlaceholder = dynamic(
  () => import("@/components/monetization/AdPlaceholder").then((m) => ({ default: m.AdPlaceholder })),
  { loading: () => null }
);

export const metadata = buildCtrMetadata(CTR_HOME, {
  canonical: "/",
  keywords: [
    "ATS resume checker",
    "resume checker",
    "free ATS resume checker",
    "resume ATS score",
    "resume scanner",
    "resume analysis",
    "CV checker",
    "resume optimization",
    "resume match",
    "resume keywords",
    "ATS compatibility",
    "AI resume checker",
    "resume checker online",
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

      <HeroSection />
      <HomeInstantAnswersSection />
      <HomeTrustedBySection />
      <HomeWhoItsForSection />
      <FeatureHighlights />
      <HowItWorksSection />
      <ProblemSolutionSection />
      <HomeTrustScoringSection />
      <HomeResumeMatchPreviewSection />
      <HomeKeywordsGuidePreviewSection />
      <HomeChecklistSection />
      <HomeQuickResumeTipsSection />
      <HomeProductDifferentiationSection />
      <HomeCoreToolsGridSection />
      <HomeTrustSecuritySection />
      <HomeWhyTrustSection />
      <HomeMethodologyPreviewSection />
      <HomeTopicAuthoritySection />
      <HomeSeoContent />
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
