import Link from "next/link";
import dynamic from "next/dynamic";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { KnowledgeCenterRelated } from "@/components/knowledge/KnowledgeCenterRelated";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { ResumeJdMatchWebApplicationJsonLd } from "@/components/seo/ResumeJdMatchWebApplicationJsonLd";
import {
  RESUME_JD_MATCH_PATH,
  resumeJdMatchBody,
  resumeJdMatchSeo,
} from "@/lib/content/resume-job-description-match-body";
import { KNOWLEDGE_CENTER_PATH } from "@/lib/content/knowledge-center-pages";
import { resumeJdMatchFaqItems } from "@/lib/seo/resume-job-description-match-faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { buildCtrMetadata, CTR_RESUME_MATCH } from "@/lib/seo/ctr-metadata";
import {
  HOWTO_RESUME_MATCH,
  HOWTO_URLS,
} from "@/lib/seo/how-to-steps";

const ResumeJobMatchAnalyzer = dynamic(
  () =>
    import("@/components/resume/ResumeJobMatchAnalyzer").then((m) => ({
      default: m.ResumeJobMatchAnalyzer,
    })),
  {
    loading: () => (
      <div className="h-96 animate-pulse rounded-2xl bg-slate-100" />
    ),
  }
);

const KEYWORDS = [
  "match resume to job description",
  "ATS resume checker",
  "ATS keyword checker",
  "resume match score",
  "ATS friendly resume",
  "resume optimization",
  "ATS compatibility checker",
  "job description match",
];

export const metadata = buildCtrMetadata(CTR_RESUME_MATCH, {
  canonical: RESUME_JD_MATCH_PATH,
  keywords: KEYWORDS,
});

export default function ResumeJobDescriptionMatchPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={RESUME_JD_MATCH_PATH}
        title={resumeJdMatchSeo.title}
        description={resumeJdMatchSeo.description}
      />
      <ResumeJdMatchWebApplicationJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Knowledge Center", path: KNOWLEDGE_CENTER_PATH },
          { name: "Resume Match Analyzer", path: RESUME_JD_MATCH_PATH },
        ]}
      />
      <HowToJsonLd
        name="How to match your resume to a job description"
        description={CTR_RESUME_MATCH.description}
        steps={HOWTO_RESUME_MATCH}
        path={HOWTO_URLS.match}
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
              <li>
                <Link
                  href={KNOWLEDGE_CENTER_PATH}
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  Knowledge Center
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">Resume vs Job Description Match</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Free ATS keyword checker · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {CTR_RESUME_MATCH.h1}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Match your resume to any job posting—get{" "}
              <strong className="font-semibold text-slate-800">
                resume match score
              </strong>
              , ATS compatibility, missing keywords, and skill gaps. A free{" "}
              <strong className="font-semibold text-slate-800">
                ATS Resume Checker
              </strong>{" "}
              workflow built for{" "}
              <strong className="font-semibold text-slate-800">
                ATS friendly resume
              </strong>{" "}
              optimization.
            </p>
          </header>

          <section
            className="mt-10 rounded-2xl border border-emerald-200/80 bg-white p-5 shadow-soft sm:p-8"
            aria-labelledby="match-analyzer-heading"
          >
            <h2
              id="match-analyzer-heading"
              className="font-display text-xl font-semibold text-slate-900 sm:text-2xl"
            >
              Analyze your match now
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              1. Upload resume · 2. Paste job description · 3. Analyze match
            </p>
            <div className="mt-6">
              <ResumeJobMatchAnalyzer />
            </div>
          </section>

          <AdPlaceholder label="Advertisement · analyzer" className="mt-10" />

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
              FAQ: Match resume to job description
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

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8">
            <p className="font-display text-lg font-semibold text-slate-900">
              Need the full ATS report?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Open the{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline underline-offset-2"
              >
                ATS Resume Checker
              </Link>{" "}
              for AI rewrites, improvement plans, and PDF export.
            </p>
          </div>

          <KnowledgeCenterRelated
            excludeId="match"
            relatedIds={["keywords", "score", "industry-keywords", "checklist"]}
          />

          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
