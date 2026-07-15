import dynamic from "next/dynamic";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { HeroSection } from "@/components/home/HomeSections";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildCtrMetadata, CTR_HOME } from "@/lib/seo/ctr-metadata";
import { HomeWhyAtsRejectsSection } from "@/components/home/HomeWhyAtsRejectsSection";
import { HomeAtsFeaturesSection } from "@/components/home/HomeAtsFeaturesSection";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";

function SectionSkeleton({ height = "h-48" }: { height?: string }) {
  return (
    <div className="container-page py-12" aria-hidden>
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
  { loading: () => <SectionSkeleton height="h-80" /> }
);

export const metadata = buildCtrMetadata(CTR_HOME, {
  canonical: "/",
  keywords: [
    "ATS resume checker",
    "free ATS resume checker",
    "ATS score checker",
    "resume checker",
    "resume parser",
    "resume scanner",
    "resume score checker",
    "resume review",
    "resume optimization",
    "applicant tracking system resume",
  ],
});

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <HomeWebApplicationJsonLd />
      <FaqJsonLd />

      <HeroSection />
      <HomeAtsFeaturesSection />
      <HomeWhyAtsRejectsSection />
      <HowItWorksSection />
      <HomeTrustStrip />
      <FaqSection />
    </>
  );
}
