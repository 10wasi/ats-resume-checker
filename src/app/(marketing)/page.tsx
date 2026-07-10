import dynamic from "next/dynamic";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomePlatformJsonLd } from "@/components/seo/HomePlatformJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { HeroSection, HomeBenefitsSection } from "@/components/home/HomeSections";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildCtrMetadata, CTR_HOME } from "@/lib/seo/ctr-metadata";
import { HomeBeforeAfterSection } from "@/components/home/HomeBeforeAfterSection";
import { HomeAtsReportPreviewSection } from "@/components/home/HomeAtsReportPreviewSection";
import { HomeAtsMistakesSection } from "@/components/home/HomeAtsMistakesSection";
import { HomeRecruiterReviewSection } from "@/components/home/HomeRecruiterReviewSection";
import { HomeRelatedToolsSection } from "@/components/home/HomeRelatedToolsSection";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";

function SectionSkeleton({ height = "h-48" }: { height?: string }) {
  return (
    <div className="container-page py-16" aria-hidden>
      <div className={`${height} animate-pulse rounded-2xl bg-slate-100`} />
    </div>
  );
}

const HowItWorksSection = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.HowItWorksSection })),
  { loading: () => <SectionSkeleton /> }
);
const FeatureHighlights = dynamic(
  () => import("@/components/home/HomeSections").then((m) => ({ default: m.FeatureHighlights })),
  { loading: () => <SectionSkeleton /> }
);
const FaqSection = dynamic(
  () => import("@/components/home/FaqSection").then((m) => ({ default: m.FaqSection })),
  { loading: () => <SectionSkeleton height="h-96" /> }
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

      {/* 1 — Hero: headline, paste form, trust badges */}
      <HeroSection />

      {/* 2 — Three Key Benefits */}
      <HomeBenefitsSection />

      {/* 3 — How It Works (3 steps) */}
      <HowItWorksSection />

      {/* 4 — ATS Report Preview */}
      <HomeAtsReportPreviewSection />

      {/* 5 — Before vs After Resume (2 examples) */}
      <HomeBeforeAfterSection />

      {/* 6 — Top Features */}
      <FeatureHighlights />

      {/* 7 — Recruiter Review Example */}
      <HomeRecruiterReviewSection />

      {/* 8 — Common ATS Mistakes (6 cards) */}
      <HomeAtsMistakesSection />

      {/* 9 — Related Resume Tools */}
      <HomeRelatedToolsSection />

      {/* 10 — Compact FAQ */}
      <FaqSection />

      <StickyCheckerCta />
    </>
  );
}
