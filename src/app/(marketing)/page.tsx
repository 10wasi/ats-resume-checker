import dynamic from "next/dynamic";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomePlatformJsonLd } from "@/components/seo/HomePlatformJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import {
  HeroSection,
  HomeStrongCtaSection,
  HomeTrustedBySection,
  HomeTrustStrip,
  HowItWorksSection,
} from "@/components/home/HomeSections";
import { HomeGlobalReachSection } from "@/components/home/HomeGlobalReachSection";
import {
  HomeMethodologyPreviewSection,
  HomeToolEcosystemSection,
  HomeVsCompetitorsSection,
  HomeWhyTrustSection,
} from "@/components/home/HomeAuthoritySections";
import { HomePillarFeaturesSection } from "@/components/home/HomePillarFeaturesSection";
import { HomeProblemSection } from "@/components/home/HomeProblemSection";
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

const HomeAuthorityHubSection = dynamic(
  () =>
    import("@/components/home/HomeSections").then((m) => ({
      default: m.HomeAuthorityHubSection,
    })),
  { loading: () => null }
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
    "ATS Resume Checker",
    "Resume Optimization Tool",
    "Resume Score Checker",
    "Resume Keyword Analyzer",
    "Resume Match Analyzer",
    "CV Scanner Tool",
    "AI Resume Checker",
    "Resume Improvement Tool",
    "resume analyzer free online",
    "best resume checker tool",
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
      <HomeProblemSection />
      <HomeWhyTrustSection />
      <HomePillarFeaturesSection />
      <HomeMethodologyPreviewSection />
      <HowItWorksSection />
      <HomeVsCompetitorsSection />
      <HomeToolEcosystemSection />
      <HomeGlobalReachSection />
      <HomeTrustedBySection />
      <HomeTrustStrip />
      <AdPlaceholder
        label="Advertisement · resume tools"
        className="border-b border-slate-100 py-6 sm:py-8"
      />
      <HomeAuthorityHubSection />
      <FaqSection />
      <HomeStrongCtaSection />
    </>
  );
}
