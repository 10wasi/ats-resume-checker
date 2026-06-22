import dynamic from "next/dynamic";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomePlatformJsonLd } from "@/components/seo/HomePlatformJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import {
  HeroSection,
  HomeStrongCtaSection,
  HowItWorksSection,
} from "@/components/home/HomeSections";
import { HomeGscIntentSection } from "@/components/home/HomeGscIntentSection";
import { HomePlatformHubsSection } from "@/components/home/HomePlatformHubsSection";
import {
  HomeMethodologyPreviewSection,
  HomeTrustScoringSection,
  HomeWhyTrustSection,
} from "@/components/home/HomeAuthoritySections";
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
      <HeroSection />
      <HomePlatformHubsSection />
      <HowItWorksSection />
      <HomeProblemSection />
      <HomeWhyTrustSection />
      <HomeTrustScoringSection />
      <HomeMethodologyPreviewSection />
      <HomeGscIntentSection />
      <AdPlaceholder
        label="Advertisement · resume tools"
        className="border-b border-slate-100 py-6 sm:py-8"
      />
      <FaqSection />
      <HomeStrongCtaSection />
    </>
  );
}
