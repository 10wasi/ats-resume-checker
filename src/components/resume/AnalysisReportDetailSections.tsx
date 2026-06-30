import type { AtsAnalysisResult } from "@/lib/ats/types";

function IssueList({
  items,
  emptyMessage,
  tone = "amber",
}: {
  items: string[];
  emptyMessage: string;
  tone?: "amber" | "rose" | "emerald";
}) {
  if (items.length === 0) {
    return (
      <p className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm text-emerald-900">
        {emptyMessage}
      </p>
    );
  }

  const dot =
    tone === "rose" ? "bg-rose-500" : tone === "emerald" ? "bg-emerald-500" : "bg-amber-500";

  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, i) => (
        <li
          key={`${item.slice(0, 40)}-${i}`}
          className="flex gap-3 rounded-xl border border-zinc-100 bg-white/90 px-4 py-3 text-sm leading-relaxed text-zinc-700"
        >
          <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dot}`} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Named report sections so users never stop at a single score. */
export function AnalysisReportDetailSections({ analysis }: { analysis: AtsAnalysisResult }) {
  const weakBullets =
    analysis.ai_resume_improvements?.experience_bullets?.map(
      (b) => b.original || b.label
    ).filter(Boolean) ??
    analysis.improved_bullets.map((b, i) => `Bullet ${i + 1} could be stronger: ${b}`);

  const summaryFeedback = analysis.section_feedback?.summary?.trim() ?? "";
  const experienceFeedback = analysis.section_feedback?.experience?.trim() ?? "";

  return (
    <div className="space-y-6">
      <section
        id="missing-sections"
        className="scroll-mt-24 rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-7"
        aria-labelledby="missing-sections-heading"
      >
        <h2
          id="missing-sections-heading"
          className="font-display text-xl font-semibold text-zinc-950"
        >
          Missing resume sections
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Standard headings parsers and recruiters expect—Experience, Education, Skills, and
          Summary.
        </p>
        {(analysis.missing_sections?.length ?? 0) > 0 ? (
          <>
            <IssueList
              items={analysis.missing_sections!.map(
                (s) =>
                  `No "${s}" section detected — add a clear heading so ATS can map your ${s}.`
              )}
              emptyMessage=""
              tone="rose"
            />
            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              <strong className="text-zinc-700">Why this matters:</strong> without standard
              headers, experience can land under the wrong field or disappear from search.{" "}
              <strong className="text-zinc-700">How to fix:</strong> add plain-text headings
              (Experience, Education, Skills).{" "}
              <strong className="text-zinc-700">Expected impact:</strong> correct parsing and
              keyword indexing on employer portals.
            </p>
          </>
        ) : (
          <p className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm text-emerald-900">
            Core sections detected. Re-check after major layout changes.
          </p>
        )}
      </section>

      <section
        id="formatting-issues"
        className="scroll-mt-24 rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-7"
        aria-labelledby="formatting-issues-heading"
      >
        <h2
          id="formatting-issues-heading"
          className="font-display text-xl font-semibold text-zinc-950"
        >
          Formatting issues
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Layout and export habits that can break ATS parsing or reorder your experience.
        </p>
        <IssueList
          items={analysis.formatting_issues}
          emptyMessage="No major formatting flags—structure looks parse-friendly. Re-check after your next PDF export."
        />
        <p className="mt-4 text-xs leading-relaxed text-zinc-500">
          <strong className="text-zinc-700">Why this matters:</strong> parsers reorder or drop
          text from broken layouts.{" "}
          <strong className="text-zinc-700">Expected impact:</strong> fewer silent rejections on
          employer portals worldwide.
        </p>
      </section>

      <section
        id="weak-summary"
        className="scroll-mt-24 rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-7"
        aria-labelledby="weak-summary-heading"
      >
        <h2
          id="weak-summary-heading"
          className="font-display text-xl font-semibold text-zinc-950"
        >
          Summary review
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          How your professional summary reads to recruiters and screening software.
        </p>
        {summaryFeedback ? (
          <p className="mt-4 rounded-xl border border-amber-100 bg-amber-50/50 px-4 py-3 text-sm leading-relaxed text-zinc-800">
            {summaryFeedback}
          </p>
        ) : (
          <p className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm text-emerald-900">
            Summary section looks workable. Compare with the improved summary in the AI
            rewrites below if you want a sharper opener.
          </p>
        )}
      </section>

      <section
        id="weak-bullets"
        className="scroll-mt-24 rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-7"
        aria-labelledby="weak-bullets-heading"
      >
        <h2
          id="weak-bullets-heading"
          className="font-display text-xl font-semibold text-zinc-950"
        >
          Weak bullet points
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Experience lines that could carry more impact—see side-by-side rewrites in the AI
          section below.
        </p>
        {weakBullets.length > 0 ? (
          <IssueList
            items={weakBullets.slice(0, 8)}
            emptyMessage=""
            tone="rose"
          />
        ) : (
          <p className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm text-emerald-900">
            No weak bullets flagged. Focus on keywords and match if you added a job description.
          </p>
        )}
        {experienceFeedback ? (
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            <span className="font-semibold text-zinc-800">Experience section: </span>
            {experienceFeedback}
          </p>
        ) : null}
      </section>

      <section
        id="grammar-suggestions"
        className="scroll-mt-24 rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-7"
        aria-labelledby="grammar-suggestions-heading"
      >
        <h2
          id="grammar-suggestions-heading"
          className="font-display text-xl font-semibold text-zinc-950"
        >
          Grammar & clarity
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wording fixes that improve readability without changing your facts.
        </p>
        <IssueList
          items={analysis.grammar_issues}
          emptyMessage="No grammar or clarity flags detected in this pass."
        />
      </section>
    </div>
  );
}
