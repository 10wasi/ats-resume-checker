import Link from "next/link";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomeWebApplicationJsonLd } from "@/components/seo/HomeWebApplicationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BlogHighlightsSection } from "@/components/home/BlogHighlightsSection";
import {
  FeatureHighlights,
  HeroSection,
  HowItWorksSection,
} from "@/components/home/HomeSections";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const TestimonialsSection = dynamic(
  () =>
    import("@/components/home/TestimonialsSection").then((m) => ({
      default: m.TestimonialsSection,
    })),
  {
    loading: () => (
      <div className="container-page py-20">
        <div className="h-64 animate-pulse rounded-2xl bg-slate-100" />
      </div>
    ),
  }
);

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

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <WebSiteJsonLd />
      <HomeWebApplicationJsonLd />
      <FaqJsonLd />
      <HeroSection />
      <AdPlaceholder
        label="Advertisement · content area"
        className="py-6 sm:py-8"
      />
      <BlogHighlightsSection />
      <FeatureHighlights />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <section className="container-page pb-24 pt-12">
        <AdPlaceholder
          label="Advertisement · mid-page"
          className="pb-10"
        />
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center shadow-soft-lg sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(74,222,128,0.35),transparent_60%)]"
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Free AI resume checker — built for traffic, not upsells.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              Run a free ATS score check, fix keyword gaps, and ship a cleaner
              CV. No pricing tiers — just a utility site that helps you apply
              with confidence.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-8 text-base">
                Improve Your Resume
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-8 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
              >
                Read the blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
