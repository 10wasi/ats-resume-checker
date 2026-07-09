import dynamic from "next/dynamic";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomePlatformJsonLd } from "@/components/seo/HomePlatformJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { HeroSection } from "@/components/home/HomeSections";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildCtrMetadata, CTR_HOME } from "@/lib/seo/ctr-metadata";
import { HomeBeforeAfterSection } from "@/components/home/HomeBeforeAfterSection";
import { HomeAtsReportPreviewSection } from "@/components/home/HomeAtsReportPreviewSection";
import { HomeAtsMistakesSection } from "@/components/home/HomeAtsMistakesSection";
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
const BlogHighlightsSection = dynamic(
  () => import("@/components/home/BlogHighlightsSection").then((m) => ({ default: m.BlogHighlightsSection })),
  { loading: () => <SectionSkeleton height="h-64" /> }
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

      {/* 1 — Hero */}
      <HeroSection />

      {/* 2 — How it Works */}
      <HowItWorksSection />

      {/* 3 — ATS Report Demo */}
      <HomeAtsReportPreviewSection />

      {/* 4 — Before vs After */}
      <HomeBeforeAfterSection />

      {/* 5 — Top Features */}
      <FeatureHighlights />

      {/* 6 — Common ATS Mistakes */}
      <HomeAtsMistakesSection />

      {/* 7 — FAQ */}
      <FaqSection />

      {/* 8 — Latest Guides */}
      <BlogHighlightsSection />

      <StickyCheckerCta />
    </>
  );
}
