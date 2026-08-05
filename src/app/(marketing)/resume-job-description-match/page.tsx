import Link from "next/link";
import dynamic from "next/dynamic";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { KnowledgeCenterRelated } from "@/components/knowledge/KnowledgeCenterRelated";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ToolPageSeoEnrichment } from "@/components/seo/ToolPageSeoEnrichment";
import { MandatoryHubLinks } from "@/components/seo/MandatoryHubLinks";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { ContentFreshnessLabel } from "@/components/seo/ContentFreshnessLabel";
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
import { resumeJdMatchFaqItems } from "@/lib/seo/resume-job-description-match-faq";
import { RESUME_CHECKER_PATH, RESUME_EXAMPLES_PATH } from "@/lib/site-nav";
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

const WORKFLOW_STEPS = [
  { step: "Upload resume", detail: "PDF, DOCX, or pasted text" },
  { step: "Paste job description", detail: "Full posting or responsibilities section" },
  { step: "ATS compatibility score", detail: "Parse health + structure vs posting" },
  { step: "Keyword match %", detail: "Posting terms found vs missing" },
  { step: "Missing keywords & skills", detail: "Technical, tools, soft skills, certs" },
  { step: "Section feedback", detail: "Summary, experience, and skills notes" },
  { step: "Improvement checklist", detail: "Prioritized fixes before you apply" },
] as const;

export const metadata = buildCtrMetadata(CTR_RESUME_MATCH, {
  canonical: RESUME_JD_MATCH_PATH,
  keywords: [
    "job description match",
    "match resume to job description",
    "resume match score",
    "ATS keyword checker",
    "ATS compatibility checker",
  ],
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
          { name: "Job Description Match", path: RESUME_JD_MATCH_PATH },
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
                <Link href="/" className="font-semibold text-[#16a34a] underline underline-offset-2">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">Job Description Match</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Flagship workflow · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {CTR_RESUME_MATCH.h1}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Tailor every application with one workflow: upload your resume, paste the job posting,
              and read your{" "}
              <strong className="font-semibold text-slate-800">ATS compatibility score</strong>,{" "}
              <strong className="font-semibold text-slate-800">keyword match %</strong>, missing
              skills, section-by-section feedback, and a prioritized fix checklist—before you hit
              apply.
            </p>
            <GuideArticleMeta path={RESUME_JD_MATCH_PATH} />
            <ContentFreshnessLabel path={RESUME_JD_MATCH_PATH} className="mt-3" />
          </header>

          <section
            className="not-prose mt-10 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6"
            aria-labelledby="match-workflow-heading"
          >
            <h2 id="match-workflow-heading" className="font-display text-lg font-bold text-slate-900">
              What this analyzer shows
            </h2>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {WORKFLOW_STEPS.map((item, i) => (
                <li
                  key={item.step}
                  className="flex gap-3 rounded-xl border border-white bg-white p-3 text-sm shadow-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{item.step}</p>
                    <p className="text-xs text-slate-600">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="mt-10 rounded-2xl border border-emerald-200/80 bg-white p-5 shadow-soft sm:p-8"
            aria-labelledby="match-analyzer-heading"
          >
            <h2
              id="match-analyzer-heading"
              className="font-display text-xl font-semibold text-slate-900 sm:text-2xl"
            >
              Run your job description match
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Upload resume → paste job description → analyze match
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
              FAQ: Job description match
            </h2>
            <div className="mt-10 space-y-10">
              {resumeJdMatchFaqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                  <p className="mt-2 leading-relaxed text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8">
            <p className="font-display text-lg font-semibold text-slate-900">
              Need AI rewrites and PDF export?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              After matching, open the{" "}
              <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline underline-offset-2">
                ATS Resume Checker
              </Link>{" "}
              for bullet rewrites, improvement plans, and export—or browse{" "}
              <Link href={RESUME_EXAMPLES_PATH} className="font-semibold text-slate-800 underline">
                resume examples by role
              </Link>
              .
            </p>
          </div>

          <MandatoryHubLinks className="mt-12" />
          <RelatedResources path={RESUME_JD_MATCH_PATH} excludeHref={RESUME_JD_MATCH_PATH} />
          <KnowledgeCenterRelated
            excludeId="match"
            relatedIds={["keywords", "score", "industry-keywords", "checklist"]}
          />
          <BlogResumeCta />
        </div>
      </article>
      <ToolPageSeoEnrichment path={RESUME_JD_MATCH_PATH} pageTitle={CTR_RESUME_MATCH.h1} />
    </>
  );
}
