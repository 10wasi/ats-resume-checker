import dynamic from "next/dynamic";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { HeroSection, HomeBenefitsSection } from "@/components/home/HomeSections";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildCtrMetadata, CTR_HOME } from "@/lib/seo/ctr-metadata";
import { HomeAtsToolSection } from "@/components/home/HomeAtsToolSection";
import { HomeWhyAtsRejectsSection } from "@/components/home/HomeWhyAtsRejectsSection";
import { HomeAtsFeaturesSection } from "@/components/home/HomeAtsFeaturesSection";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";

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
    "resume score checker",
    "ATS friendly resume",
    "resume optimization",
    "resume analysis",
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
      <HomeAtsToolSection />
      <HomeWhyAtsRejectsSection />
      <HomeAtsFeaturesSection />
      <HowItWorksSection />
      <HomeBenefitsSection />
      <HomeTrustStrip />
      <FaqSection />
    </>
  );
}
