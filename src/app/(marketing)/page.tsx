import dynamic from "next/dynamic";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { HeroSection } from "@/components/home/HomeSections";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildCtrMetadata, CTR_HOME } from "@/lib/seo/ctr-metadata";
import { HomeAtsFeaturesSection } from "@/components/home/HomeAtsFeaturesSection";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";
import { HomePlatformAuthority } from "@/components/home/HomePlatformAuthority";
import { HomeBlogHighlights } from "@/components/home/HomeBlogHighlights";

function SectionSkeleton({ height = "h-64" }: { height?: string }) {
  return (
    <div className="container-page py-10" aria-hidden>
      <div className={`${height} animate-pulse rounded-2xl bg-slate-100`} />
    </div>
  );
}

const HomeTopicHubSection = dynamic(
  () =>
    import("@/components/home/HomeTopicHubSection").then((m) => ({
      default: m.HomeTopicHubSection,
    })),
  { loading: () => <SectionSkeleton /> }
);

const HomeSuccessStories = dynamic(
  () =>
    import("@/components/home/HomeSuccessStories").then((m) => ({
      default: m.HomeSuccessStories,
    })),
  { loading: () => <SectionSkeleton height="h-72" /> }
);

const FaqSection = dynamic(
  () => import("@/components/home/FaqSection").then((m) => ({ default: m.FaqSection })),
  { loading: () => <SectionSkeleton /> }
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/home/TestimonialsSection").then((m) => ({
      default: m.TestimonialsSection,
    })),
  { loading: () => <SectionSkeleton height="h-96" /> }
);

const PaaAnswersSection = dynamic(
  () =>
    import("@/components/seo/PaaAnswersSection").then((m) => ({
      default: m.PaaAnswersSection,
    })),
  { loading: () => <SectionSkeleton height="h-48" /> }
);

const StickyCheckerCta = dynamic(
  () =>
    import("@/components/seo/StickyCheckerCta").then((m) => ({
      default: m.StickyCheckerCta,
    })),
  { ssr: false }
);

export const metadata = buildCtrMetadata(CTR_HOME, {
  canonical: "/",
  keywords: [
    "ATS resume checker",
    "free ATS resume checker",
    "ATS score checker",
    "resume checker",
    "resume parser",
    "resume ATS parser",
    "resume scanner",
    "resume score checker",
  ],
});

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <WebSiteJsonLd />
      <HomeWebApplicationJsonLd />
      <FaqJsonLd />

      <HeroSection />
      <HomeAtsFeaturesSection />
      <HomeTrustStrip />
      <HomeTopicHubSection />
      <HomePlatformAuthority />
      <HomeSuccessStories />
      <HomeBlogHighlights />
      <TestimonialsSection />
      <div className="container-prose pb-4">
        <PaaAnswersSection path="/" />
      </div>
      <FaqSection />
      <StickyCheckerCta />
    </>
  );
}
