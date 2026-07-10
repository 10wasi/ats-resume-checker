import Link from "next/link";
import { BlogResumeCta } from "@/components/blog/BlogExtras";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { resumeGrammarCheckerFaqItems } from "@/lib/seo/resume-grammar-checker-faq";
import { buildCtrMetadata, CTR_RESUME_GRAMMAR_CHECKER } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PATH = "/resume-grammar-checker";

export const metadata = buildCtrMetadata(CTR_RESUME_GRAMMAR_CHECKER, {
  canonical: PATH,
  keywords: [
    "resume grammar checker",
    "resume proofreading",
    "resume grammar mistakes",
    "resume tense errors",
    "passive voice resume",
  ],
});

const TENSE_RULES = [
  { section: "Current job bullets", tense: "Present tense", example: "Lead a team of 6 engineers" },
  { section: "Past job bullets", tense: "Past tense", example: "Led a team of 6 engineers" },
  { section: "Professional summary", tense: "Present tense", example: "Backend Engineer with 5 years…" },
  { section: "Certifications section", tense: "Past tense (when obtained)", example: "Completed AWS certification in 2024" },
  { section: "Education dates", tense: "Past tense", example: "Graduated May 2021" },
];

const PASSIVE_FIXES = [
  { passive: "Was responsible for managing…", active: "Managed…" },
  { passive: "Was involved in the development of…", active: "Built / Developed…" },
  { passive: "Helped with the implementation…", active: "Implemented…" },
  { passive: "Was tasked with leading…", active: "Led…" },
  { passive: "Was part of the team that delivered…", active: "Delivered…" },
  { passive: "Assisted with the rollout…", active: "Contributed to the rollout of…" },
];

const COMMON_ERRORS = [
  {
    error: "Inconsistent verb tense",
    example: "Led product launches and manages daily standups (same role)",
    fix: "Use past tense for all bullets in completed roles, present for current role only.",
  },
  {
    error: "Passive voice",
    example: "Was responsible for increasing sales by 20%",
    fix: "Increased sales by 20% through targeted outbound campaigns.",
  },
  {
    error: "First person pronouns",
    example: "I managed a team of 8 engineers and I improved deployment time.",
    fix: "Managed a team of 8 engineers. Reduced deployment time 40% using CI/CD.",
  },
  {
    error: "Misspelled tool names",
    example: "Phython, JavaScripts, Node JS, AWS Lamda, Power Bi",
    fix: "Python, JavaScript, Node.js, AWS Lambda, Power BI",
  },
  {
    error: "Wordy phrasing",
    example: "Utilized a wide variety of different technical methodologies",
    fix: "Applied Agile, Kanban, and Scrum frameworks",
  },
  {
    error: "Clichés and filler",
    example: "Results-driven professional with excellent communication skills",
    fix: "Remove or replace with a specific claim backed by a metric.",
  },
];

export default function ResumeGrammarCheckerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Grammar Checker", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={resumeGrammarCheckerFaqItems} />

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
        <GuideArticleMeta path={PATH} />

        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {CTR_RESUME_GRAMMAR_CHECKER.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Grammar errors on a resume signal carelessness to recruiters — and they silently reduce your ATS keyword density when vague phrasing replaces precise terminology. This guide covers the most common resume grammar mistakes, how to fix passive voice, and the tense rules that every resume should follow.
        </p>

        <BlogResumeCta />

        {/* Tense rules */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Tense rules by resume section
        </h2>
        <p className="mt-3 text-slate-600">
          Inconsistent tense is the most common grammar mistake on resumes. The rule is simple: past tense for completed work, present tense for current work and your summary.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Section</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Tense</th>
                <th className="hidden px-4 py-3 text-left font-semibold text-slate-700 sm:table-cell">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {TENSE_RULES.map((row) => (
                <tr key={row.section}>
                  <td className="px-4 py-3 font-medium text-slate-800">{row.section}</td>
                  <td className="px-4 py-3 text-emerald-700">{row.tense}</td>
                  <td className="hidden px-4 py-3 italic text-slate-600 sm:table-cell">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Passive voice */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Fix passive voice — 6 direct rewrites
        </h2>
        <p className="mt-3 text-slate-600">
          Passive voice hides your ownership of work. Replace every instance with a strong action verb. Here are the six most common passive constructions and their active replacements:
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-rose-600">Passive (before)</th>
                <th className="px-4 py-3 text-left font-semibold text-emerald-600">Active (after)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {PASSIVE_FIXES.map((row) => (
                <tr key={row.passive}>
                  <td className="px-4 py-3 text-slate-600 line-through">{row.passive}</td>
                  <td className="px-4 py-3 font-medium text-slate-800">{row.active}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Common errors */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          6 common resume grammar errors — and exact fixes
        </h2>
        <div className="mt-6 space-y-4">
          {COMMON_ERRORS.map((e) => (
            <div
              key={e.error}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="font-semibold text-slate-900">{e.error}</p>
              <p className="mt-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-red-100">
                <span className="font-semibold text-red-600">Wrong: </span>
                {e.example}
              </p>
              <p className="mt-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-emerald-100">
                <span className="font-semibold text-emerald-700">Fix: </span>
                {e.fix}
              </p>
            </div>
          ))}
        </div>

        {/* Proofreading checklist */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Resume proofreading checklist
        </h2>
        <p className="mt-3 text-slate-600">
          Run through this checklist before submitting every application:
        </p>
        <ul className="mt-5 space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
          {[
            "All bullets in completed roles use past tense",
            "Current job bullets use present tense",
            "No first-person pronouns (I, my, me)",
            "No passive voice ('was responsible for')",
            "Every tool name is spelled correctly (Python, JavaScript, AWS Lambda)",
            "No clichés ('results-driven', 'team player', 'excellent communication')",
            "No contractions (don't, I've, they're)",
            "Summary is written in present tense",
            "Bullet points all start with action verbs",
            "File tested in ATS checker after final edit",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-700">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-[11px] font-bold text-emerald-800">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* ATS checker CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="font-display text-xl font-bold text-slate-900">
            Check grammar and ATS score at the same time
          </p>
          <p className="mt-2 text-slate-600">
            Our ATS checker flags keyword issues, weak bullets, and formatting problems in the same scan. Fix grammar first, then verify your score.
          </p>
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-5 inline-flex px-8 text-base">
            Run free ATS check
          </Link>
          <p className="mt-2 text-sm text-slate-500">No signup · PDF or paste text</p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <AccordionFaq items={resumeGrammarCheckerFaqItems} headingId="grammar-faq" />

        <RelatedResources path={PATH} heading="Related resume tools" />
      </main>
    </>
  );
}
