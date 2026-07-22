import Link from "next/link";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

type Props = { path: string; pageTitle?: string };

const CHECKLIST = [
  "Copy-paste test passed — text extracts in logical order",
  "Single-column layout with standard headings (Experience, Education, Skills)",
  "Posting keywords appear in recent role bullets — not a hidden block",
  "One measurable outcome per recent bullet where honest",
  "Exact file re-checked in the free ATS resume checker before upload",
];

const MISTAKES = [
  "Two-column Canva exports that scramble experience order",
  "Skills listed as icons instead of plain-text tool names",
  "Generic summary with no role or stack from the posting",
  "Same resume sent to every job without tailoring keywords",
];

const SCENARIO =
  "You apply to ten roles in one weekend and hear nothing back. The issue is often not your experience — it is parser failure or missing posting keywords. Run the checker on the exact PDF you will upload, paste one job description, fix the top three flags, and re-check before the next batch.";

/** Structured H2/H3 enrichment — helpful content signals without filler. */
export function GuideContentEnrichment({ path, pageTitle = "this topic" }: Props) {
  return (
    <div className="not-prose mt-12 space-y-12 border-t border-slate-200 pt-12">
      <section aria-labelledby="expert-tips-heading">
        <h2 id="expert-tips-heading" className="font-display text-2xl font-bold text-slate-900">
          Expert advice for {pageTitle}
        </h2>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
          <li>
            <strong className="text-slate-900">Mirror posting language honestly.</strong> Reuse
            terms from the job description only where you can defend them in an interview.
          </li>
          <li>
            <strong className="text-slate-900">Fix parsing before keywords.</strong> If text
            order scrambles on copy-paste, ATS may never index your strongest skills.
          </li>
          <li>
            <strong className="text-slate-900">One metric per recent bullet.</strong> Recruiters
            skim page one in seconds — proof beats duty lists.
          </li>
        </ul>
      </section>

      <section aria-labelledby="real-scenario-heading">
        <h2 id="real-scenario-heading" className="font-display text-2xl font-bold text-slate-900">
          Real scenario
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-700">{SCENARIO}</p>
        <Link
          href={RESUME_CHECKER_PATH}
          className="mt-4 inline-flex text-sm font-semibold text-[#16a34a] underline"
        >
          Run free AI resume check →
        </Link>
      </section>

      <section aria-labelledby="checklist-heading">
        <h2 id="checklist-heading" className="font-display text-2xl font-bold text-slate-900">
          Pre-submit checklist
        </h2>
        <ul className="mt-6 space-y-3">
          {CHECKLIST.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-700">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-800">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="mistakes-heading">
        <h2 id="mistakes-heading" className="font-display text-2xl font-bold text-slate-900">
          Common mistakes
        </h2>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-700">
          {MISTAKES.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      <ComparisonTable
        heading="ATS resume checker vs guessing"
        caption="Why measurable checks beat sending the same file repeatedly."
        rows={[
          {
            feature: "Keyword gaps",
            resumeiq: "Missing terms listed vs your job post",
            typical: "Hope the right words are somewhere on page two",
          },
          {
            feature: "Parser health",
            resumeiq: "See if text extracts in order",
            typical: "Discover failure only after silence",
          },
          {
            feature: "Next step",
            resumeiq: "Priority fix list + re-check",
            typical: "Rewrite random sections without data",
          },
        ]}
      />

      <section
        className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5"
        aria-labelledby="summary-heading"
      >
        <h2 id="summary-heading" className="font-display text-lg font-bold text-slate-900">
          Summary
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          Strong {pageTitle} work combines parse-safe formatting, posting-aligned keywords, and
          proof in bullets — verified with a free{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            AI ATS resume check
          </Link>{" "}
          before every application batch. Pair with{" "}
          <Link href="/resume-review" className="font-semibold text-[#16a34a] underline">
            resume review
          </Link>{" "}
          when you need section-level feedback.
        </p>
      </section>
    </div>
  );
}
