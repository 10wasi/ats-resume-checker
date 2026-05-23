import type { Metadata } from "next";
import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  atsResumeChecklistBody,
  atsResumeChecklistSeo,
  ATS_RESUME_CHECKLIST_PATH,
} from "@/lib/content/ats-resume-checklist-body";
import { atsResumeChecklistFaqItems } from "@/lib/seo/ats-resume-checklist-faq";
import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PAGE_TITLE = "The Ultimate ATS Resume Checklist for 2026";

const KEYWORDS = [
  "ATS Resume Checklist",
  "ATS Resume Checker",
  "ATS friendly resume",
  "improve ATS score",
  "ATS compatible resume",
  "resume optimization",
  "ATS keywords",
  "ATS resume format",
  "ATS resume mistakes",
  "online resume checker",
  "resume ATS test",
  "US UK job seekers",
];

export const metadata: Metadata = {
  title: atsResumeChecklistSeo.title,
  description: atsResumeChecklistSeo.description,
  keywords: KEYWORDS,
  alternates: {
    canonical: ATS_RESUME_CHECKLIST_PATH,
  },
  openGraph: {
    title: atsResumeChecklistSeo.title,
    description: atsResumeChecklistSeo.description,
    url: `${getSiteUrl().replace(/\/$/, "")}${ATS_RESUME_CHECKLIST_PATH}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: atsResumeChecklistSeo.title,
    description: atsResumeChecklistSeo.description,
  },
  robots: { index: true, follow: true },
};

export default function AtsResumeChecklistPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={ATS_RESUME_CHECKLIST_PATH}
        title={atsResumeChecklistSeo.title}
        description={atsResumeChecklistSeo.description}
      />
      <PageFaqJsonLd items={atsResumeChecklistFaqItems} />
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
              <li className="text-slate-700">ATS resume checklist</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Free resource · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {PAGE_TITLE}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              A practical, print-friendly{" "}
              <strong className="font-semibold text-slate-800">
                ATS Resume Checklist
              </strong>{" "}
              for US and UK job seekers—covering{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume format
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                ATS keywords
              </strong>
              , structure, and the{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume mistakes
              </strong>{" "}
              that quietly kill callbacks. When you are ready to{" "}
              <strong className="font-semibold text-slate-800">
                check your ATS score
              </strong>
              , use our{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
              >
                ATS Resume Checker
              </Link>
              . Want the long-form story first? See the{" "}
              <Link
                href="/ultimate-ats-resume-guide"
                className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-2 hover:text-slate-950"
              >
                ultimate ATS resume guide
              </Link>
              .
            </p>
          </header>

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={atsResumeChecklistBody} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="ats-checklist-faq-heading"
          >
            <h2
              id="ats-checklist-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: ATS resume checklist and scoring
            </h2>
            <p className="mt-3 text-slate-600">
              Quick answers on using this checklist with an{" "}
              <strong className="font-semibold text-slate-800">
                online resume checker
              </strong>
              , how to{" "}
              <strong className="font-semibold text-slate-800">
                improve ATS score
              </strong>{" "}
              signals, and building an{" "}
              <strong className="font-semibold text-slate-800">
                ATS friendly resume
              </strong>{" "}
              without keyword stuffing.
            </p>
            <div className="mt-10 space-y-10">
              {atsResumeChecklistFaqItems.map((item) => (
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
              href="/blog/best-ats-friendly-resume-examples-2026"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              ATS-friendly resume examples
            </Link>
            {" · "}
            <Link
              href="/blog"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              all resume articles
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
