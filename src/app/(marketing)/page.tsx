import dynamic from "next/dynamic";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomePlatformJsonLd } from "@/components/seo/HomePlatformJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import {
  HeroSection,
  HomeAtsResumeExamplesSection,
  HomeAuthorityHubSection,
  HomeChecklistSection,
  HomeCoreToolsGridSection,
  HomeKeywordsGuidePreviewSection,
  HomeResumeKeywordsByProfessionSection,
  HomeResumeMatchPreviewSection,
  HomeRoleExamplesSection,
  HomeStrongCtaSection,
  HomeTrustedBySection,
  HomeTrustStrip,
} from "@/components/home/HomeSections";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
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

export const metadata = buildCtrMetadata(CTR_HOME, {
  canonical: "/",
  keywords: [
    "ATS Resume Checker",
    "ATS friendly resume",
    "resume optimization",
    "ATS keywords",
    "ATS resume examples",
    "resume match score",
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
      <HomeTrustedBySection />
      <HomeCoreToolsGridSection />
      <HomeTrustStrip />
      <TestimonialsSection />
      <HomeAtsResumeExamplesSection />
      <HomeChecklistSection />
      <HomeResumeMatchPreviewSection />
      <HomeKeywordsGuidePreviewSection />
      <HomeResumeKeywordsByProfessionSection />
      <HomeRoleExamplesSection />
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
