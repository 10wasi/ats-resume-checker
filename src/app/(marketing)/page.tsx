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
import { HomeAtsToolSection } from "@/components/home/HomeAtsToolSection";
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
const FaqSection = dynamic(
  () => import("@/components/home/FaqSection").then((m) => ({ default: m.FaqSection })),
  { loading: () => <SectionSkeleton height="h-96" /> }
);

export const metadata = buildCtrMetadata(CTR_HOME, {
  canonical: "/",
  keywords: [
    "free ATS resume checker",
    "ATS resume checker",
    "resume ATS score",
    "resume scanner",
    "resume checker free",
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

      {/* 2 — ATS Resume Checker Tool */}
      <HomeAtsToolSection />

      {/* 3 — Three Benefits */}
      <HomeBenefitsSection />

      {/* 4 — How It Works */}
      <HowItWorksSection />

      {/* 5 — ATS Sample Report */}
      <HomeAtsReportPreviewSection />

      {/* 6 — Before vs After Resume */}
      <HomeBeforeAfterSection />

      {/* 7 — Recruiter Feedback Example */}
      <HomeRecruiterReviewSection />

      {/* 8 — ATS Mistakes */}
      <HomeAtsMistakesSection />

      {/* 9 — Related Resume Tools */}
      <HomeRelatedToolsSection />

      {/* 10 — Compact FAQ */}
      <FaqSection />

      <StickyCheckerCta />
    </>
  );
}
