import type { Metadata } from "next";
import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  atsResumeHubBody,
  atsResumeHubSeo,
  ATS_RESUME_HUB_PATH,
} from "@/lib/content/ats-resume-hub-body";
import { atsResumeHubFaqItems } from "@/lib/seo/ats-resume-hub-faq";
import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PAGE_TITLE = "The Complete ATS Resume Resource Hub for Job Seekers";

const KEYWORDS = [
  "ATS Resume Checker",
  "ATS friendly resume",
  "improve ATS score",
  "ATS compatible resume",
  "ATS resume keywords",
  "ATS resume examples",
  "ATS resume checklist",
  "resume optimization",
  "ATS resume format",
  "ATS resume mistakes",
  "online resume checker",
  "ATS resume tips",
  "US UK job seekers",
];

export const metadata: Metadata = {
  title: atsResumeHubSeo.title,
  description: atsResumeHubSeo.description,
  keywords: KEYWORDS,
  alternates: {
    canonical: ATS_RESUME_HUB_PATH,
  },
  openGraph: {
    title: atsResumeHubSeo.title,
    description: atsResumeHubSeo.description,
    url: `${getSiteUrl().replace(/\/$/, "")}${ATS_RESUME_HUB_PATH}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: atsResumeHubSeo.title,
    description: atsResumeHubSeo.description,
  },
  robots: { index: true, follow: true },
};

export default function AtsResumeHubPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={ATS_RESUME_HUB_PATH}
        title={atsResumeHubSeo.title}
        description={atsResumeHubSeo.description}
      />
      <PageFaqJsonLd items={atsResumeHubFaqItems} />
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
              <li className="text-slate-700">ATS resume hub</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Free resource hub · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {PAGE_TITLE}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Your central home for{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume format
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume keywords
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume examples
              </strong>
              , and the{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume checklist
              </strong>{" "}
              —everything in one place so you can{" "}
              <strong className="font-semibold text-slate-800">
                improve ATS score
              </strong>{" "}
              signals without tab-hopping at midnight. Start with our{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
              >
                ATS Resume Checker
              </Link>
              , then follow the path that matches your problem.
            </p>
          </header>

          <AdPlaceholder label="Advertisement · resource hub" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={atsResumeHubBody} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="ats-hub-faq-heading"
          >
            <h2
              id="ats-hub-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: Using the ATS Resume Hub
            </h2>
            <p className="mt-3 text-slate-600">
              Quick answers on navigating hub resources, the{" "}
              <strong className="font-semibold text-slate-800">
                online resume checker
              </strong>
              , and building an{" "}
              <strong className="font-semibold text-slate-800">
                ATS friendly resume
              </strong>{" "}
              step by step.
            </p>
            <div className="mt-10 space-y-10">
              {atsResumeHubFaqItems.map((item) => (
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
              href="/ultimate-ats-resume-guide"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              Ultimate ATS guide
            </Link>
            {" · "}
            <Link
              href="/ats-resume-checklist-2026"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              ATS resume checklist
            </Link>
            {" · "}
            <Link
              href="/blog"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              all articles
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
