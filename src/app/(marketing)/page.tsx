import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomePlatformJsonLd } from "@/components/seo/HomePlatformJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import {
  HeroSection,
  HomeAtsResumeExamplesSection,
  HomeChecklistSection,
  HomeCoreToolsGridSection,
  HomeStrongCtaSection,
  HomeWhyAtsRejectsSection,
} from "@/components/home/HomeSections";

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

const HOME_TITLE =
  "ATS Resume Checker & Optimization Platform | Free ATS Score & Match";
const HOME_DESCRIPTION =
  "Free ATS Resume Checker platform: analyze resumes, get resume match score, find missing resume keywords, explore ATS resume examples, and improve ATS friendly resume visibility—US & UK job seekers.";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  keywords: [
    "ATS Resume Checker",
    "ATS friendly resume",
    "resume optimization",
    "resume keywords",
    "ATS resume examples",
    "resume match score",
    "ATS resume checklist",
    "AI resume rewrite",
    "ATS compatible resume",
    "online resume checker",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
  },
  twitter: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <WebSiteJsonLd />
      <HomeWebApplicationJsonLd />
      <HomePlatformJsonLd />
      <FaqJsonLd />
      <HeroSection />
      <HomeCoreToolsGridSection />
      <AdPlaceholder
        label="Advertisement · platform tools"
        className="border-b border-slate-100 py-6 sm:py-8"
      />
      <HomeWhyAtsRejectsSection />
      <HomeAtsResumeExamplesSection />
      <HomeChecklistSection />
      <AdPlaceholder
        label="Advertisement · resources"
        className="border-b border-slate-100 py-6 sm:py-8"
      />
      <FaqSection />
      <HomeStrongCtaSection />
    </>
  );
}
