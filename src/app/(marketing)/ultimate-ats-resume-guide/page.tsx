import type { Metadata } from "next";
import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  ultimateAtsGuideSeo,
  ultimateAtsResumeGuideBody,
  ULTIMATE_ATS_GUIDE_PATH,
} from "@/lib/content/ultimate-ats-resume-guide-body";
import { ultimateAtsGuideFaqItems } from "@/lib/seo/ultimate-ats-guide-faq";
import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PAGE_TITLE =
  "The Ultimate ATS Resume Guide for Modern Job Seekers";

const KEYWORDS = [
  "ATS Resume Checker",
  "ATS friendly resume",
  "improve ATS score",
  "ATS compatible resume",
  "resume optimization",
  "ATS resume tips",
  "ATS resume format",
  "online resume checker",
  "resume ATS test",
  "ATS keywords",
  "resume formatting tips",
  "ATS resume mistakes",
  "applicant tracking system resume",
  "US UK job seekers",
];

export const metadata: Metadata = {
  title: ultimateAtsGuideSeo.title,
  description: ultimateAtsGuideSeo.description,
  keywords: KEYWORDS,
  alternates: {
    canonical: ULTIMATE_ATS_GUIDE_PATH,
  },
  openGraph: {
    title: ultimateAtsGuideSeo.title,
    description: ultimateAtsGuideSeo.description,
    url: `${getSiteUrl().replace(/\/$/, "")}${ULTIMATE_ATS_GUIDE_PATH}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: ultimateAtsGuideSeo.title,
    description: ultimateAtsGuideSeo.description,
  },
  robots: { index: true, follow: true },
};

export default function UltimateAtsResumeGuidePage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={ULTIMATE_ATS_GUIDE_PATH}
        title={ultimateAtsGuideSeo.title}
        description={ultimateAtsGuideSeo.description}
      />
      <PageFaqJsonLd items={ultimateAtsGuideFaqItems} />
      <article className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px] bg-mesh"
          aria-hidden
        />
        <div className="container-prose py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">ATS resume guide</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Free resource · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {PAGE_TITLE}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Everything practical about{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume format
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                ATS keywords
              </strong>
              , and{" "}
              <strong className="font-semibold text-slate-800">
                resume optimization
              </strong>
              —written for real job seekers in the US and UK who are tired of
              silence after they hit submit. When you are ready to{" "}
              <strong className="font-semibold text-slate-800">
                analyze resume score
              </strong>{" "}
              signals and{" "}
              <strong className="font-semibold text-slate-800">
                check ATS compatibility
              </strong>
              , use our{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
              >
                free ATS Resume Checker
              </Link>
              . Prefer the short version first? Start with the{" "}
              <Link
                href="/blog/how-to-make-your-resume-ats-friendly-2026-complete-guide"
                className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-2 hover:text-slate-950"
              >
                2026 ATS friendly resume guide on the blog
              </Link>
              .
            </p>
          </header>

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={ultimateAtsResumeGuideBody} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="ultimate-ats-faq-heading"
          >
            <h2
              id="ultimate-ats-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: ATS resume checker, scores, and ATS-friendly resumes
            </h2>
            <p className="mt-3 text-slate-600">
              Quick answers for common searches on{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume rejection
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                resume ATS test
              </strong>{" "}
              tools, and how to{" "}
              <strong className="font-semibold text-slate-800">
                improve ATS score
              </strong>{" "}
              without keyword stuffing.
            </p>
            <div className="mt-10 space-y-10">
              {ultimateAtsGuideFaqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <BlogResumeCta />

          <p className="mt-10 text-center text-sm text-slate-500">
            Related:{" "}
            <Link
              href="/blog"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              all resume &amp; career articles
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
