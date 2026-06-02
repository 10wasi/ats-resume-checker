import type { Metadata } from "next";
import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  RESUME_JD_MATCH_PATH,
  resumeJdMatchBody,
  resumeJdMatchSeo,
} from "@/lib/content/resume-job-description-match-body";
import { resumeJdMatchFaqItems } from "@/lib/seo/resume-job-description-match-faq";
import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "resume match score",
  "ATS resume checker",
  "match resume to job description",
  "ATS keyword checker",
  "resume optimization",
  "ATS compatibility checker",
  "ATS friendly resume",
];

export const metadata: Metadata = {
  title: resumeJdMatchSeo.title,
  description: resumeJdMatchSeo.description,
  keywords: KEYWORDS,
  alternates: { canonical: RESUME_JD_MATCH_PATH },
  openGraph: {
    title: resumeJdMatchSeo.title,
    description: resumeJdMatchSeo.description,
    url: `${getSiteUrl().replace(/\/$/, "")}${RESUME_JD_MATCH_PATH}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: resumeJdMatchSeo.title,
    description: resumeJdMatchSeo.description,
  },
  robots: { index: true, follow: true },
};

export default function ResumeJobDescriptionMatchPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={RESUME_JD_MATCH_PATH}
        title={resumeJdMatchSeo.title}
        description={resumeJdMatchSeo.description}
      />
      <PageFaqJsonLd items={resumeJdMatchFaqItems} />
      <article className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-mesh"
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
              <li className="text-slate-700">Resume vs Job Description Match</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Free resource · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              Resume vs Job Description Match Analyzer
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Match your resume to a real posting, uncover keyword gaps, and get
              practical fixes that improve ATS visibility. Start with our{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
              >
                ATS Resume Checker
              </Link>{" "}
              and re-run after edits to track progress.
            </p>
          </header>

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={resumeJdMatchBody} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="resume-jd-match-faq-heading"
          >
            <h2
              id="resume-jd-match-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: Resume Job Match and ATS Keyword Checking
            </h2>
            <div className="mt-10 space-y-10">
              {resumeJdMatchFaqItems.map((item) => (
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
        </div>
      </article>
    </>
  );
}

