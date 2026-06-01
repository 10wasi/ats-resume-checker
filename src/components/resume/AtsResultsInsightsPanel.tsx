"use client";

import Link from "next/link";
import { useMemo } from "react";
import type { AtsAnalysisResult } from "@/lib/ats/types";
import { buildResultRecommendations } from "@/lib/ats/build-result-recommendations";

type Props = {
  analysis: AtsAnalysisResult;
  showJobMatch: boolean;
  onRecheck?: () => void;
  recheckLoading?: boolean;
  recheckDisabled?: boolean;
};

function TagList({
  items,
  variant,
}: {
  items: string[];
  variant: "found" | "missing";
}) {
  if (items.length === 0) return null;
  const cls =
    variant === "found"
      ? "border-emerald-200/90 bg-emerald-50/90 text-emerald-950"
      : "border-amber-200/90 bg-amber-50/90 text-amber-950";
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function PriorityCard({
  title,
  detail,
  accent,
}: {
  title: string;
  detail: string;
  accent: "rose" | "emerald";
}) {
  const border =
    accent === "rose"
      ? "border-rose-200/80 bg-gradient-to-br from-rose-50/50 to-white"
      : "border-emerald-200/80 bg-gradient-to-br from-emerald-50/50 to-white";
  const dot = accent === "rose" ? "bg-rose-500" : "bg-emerald-500";
  return (
    <li className={`rounded-xl border p-4 shadow-sm ${border}`}>
      <div className="flex gap-3">
        <span
          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dot}`}
          aria-hidden
        />
        <div>
          <p className="text-sm font-semibold text-zinc-900">{title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{detail}</p>
        </div>
      </div>
    </li>
  );
}

export function AtsResultsInsightsPanel({
  analysis,
  showJobMatch,
  onRecheck,
  recheckLoading = false,
  recheckDisabled = false,
}: Props) {
  const recs = useMemo(
    () =>
      buildResultRecommendations(analysis, {
        hasJobDescription: showJobMatch,
      }),
    [analysis, showJobMatch]
  );

  const matched = analysis.matched_keywords ?? [];
  const missing = useMemo(() => {
    const set = new Set<string>();
    for (const k of analysis.missing_keywords) {
      const t = k.trim();
      if (t) set.add(t);
    }
    return Array.from(set).slice(0, 16);
  }, [analysis.missing_keywords]);

  const detectedSkills = (analysis.detected_skills ?? []).slice(0, 20);
  const keywordDetail = analysis.keyword_match_detail;
  const compatibility = analysis.ats_compatibility_rating;

  return (
    <div className="space-y-6 sm:space-y-8">
      {(compatibility || keywordDetail) && showJobMatch ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {compatibility ? (
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                ATS compatibility rating
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-zinc-950">
                {compatibility.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {compatibility.description}
              </p>
            </div>
          ) : null}
          {keywordDetail ? (
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                Keyword match vs posting
              </p>
              <p className="mt-2 font-display text-2xl font-bold tabular-nums text-zinc-950">
                {keywordDetail.matched}/{keywordDetail.total}
                <span className="ml-2 text-lg font-semibold text-emerald-700">
                  ({keywordDetail.coverage_percent}%)
                </span>
              </p>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-zinc-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                  style={{ width: `${keywordDetail.coverage_percent}%` }}
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                Percentage of job-description terms found in your resume text.
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
      <section
        className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-7"
        aria-labelledby="why-score-matters-heading"
      >
        <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
          Beginner-friendly
        </p>
        <h2
          id="why-score-matters-heading"
          className="mt-2 font-display text-xl font-semibold text-zinc-950 sm:text-2xl"
        >
          Why your ATS score matters
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
          {recs.whyScoreMatters}
        </p>
        <blockquote className="mt-5 rounded-xl border-l-4 border-brand-400 bg-brand-50/60 px-4 py-3 text-sm italic leading-relaxed text-zinc-700">
          <span className="font-semibold not-italic text-zinc-800">
            Recruiter-style read:
          </span>{" "}
          {recs.recruiterNote}
        </blockquote>
        {recs.roleRelevanceNote ? (
          <p className="mt-4 rounded-xl border border-zinc-100 bg-zinc-50/80 px-4 py-3 text-sm leading-relaxed text-zinc-700">
            <span className="font-semibold text-zinc-900">Role relevance: </span>
            {recs.roleRelevanceNote}
          </p>
        ) : null}
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section
          className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-6"
          aria-labelledby="high-priority-heading"
        >
          <h2
            id="high-priority-heading"
            className="font-display text-lg font-semibold text-zinc-950"
          >
            What to improve first
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            High-priority fixes for an{" "}
            <strong className="font-medium text-zinc-700">
              ATS compatible resume
            </strong>
            .
          </p>
          <ul className="mt-5 space-y-3">
            {recs.highPriority.length > 0 ? (
              recs.highPriority.map((item) => (
                <PriorityCard
                  key={item.id}
                  title={item.title}
                  detail={item.detail}
                  accent="rose"
                />
              ))
            ) : (
              <li className="rounded-xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-900">
                No critical blockers flagged—focus on tailoring and metrics.
              </li>
            )}
          </ul>
        </section>

        <section
          className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-6"
          aria-labelledby="quick-wins-heading"
        >
          <h2
            id="quick-wins-heading"
            className="font-display text-lg font-semibold text-zinc-950"
          >
            Quick ATS wins
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Small changes that help you{" "}
            <strong className="font-medium text-zinc-700">
              improve ATS score
            </strong>{" "}
            fast.
          </p>
          <ul className="mt-5 space-y-3">
            {recs.quickWins.map((item) => (
              <PriorityCard
                key={item.id}
                title={item.title}
                detail={item.detail}
                accent="emerald"
              />
            ))}
          </ul>
        </section>
      </div>

      <section
        className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-7"
        aria-labelledby="keyword-insights-heading"
      >
        <h2
          id="keyword-insights-heading"
          className="font-display text-xl font-semibold text-zinc-950"
        >
          ATS keyword insights
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {keywordDetail && showJobMatch ? (
            <>
              Posting terms matched:{" "}
              <strong className="font-semibold text-zinc-800">
                {keywordDetail.matched} of {keywordDetail.total} (
                {keywordDetail.coverage_percent}%)
              </strong>
              . Overall keyword signal:{" "}
              <strong className="font-semibold text-zinc-800">
                {Math.round(analysis.keyword_match_score)}/100
              </strong>
              .
            </>
          ) : (
            <>
              Keyword coverage:{" "}
              <strong className="font-semibold text-zinc-800">
                {Math.round(analysis.keyword_match_score)}/100
              </strong>
              . Honest{" "}
              <strong className="font-semibold text-zinc-800">
                resume optimization
              </strong>
              , not stuffing.
            </>
          )}
        </p>

        {showJobMatch && matched.length > 0 ? (
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Matched from posting
            </p>
            <div className="mt-3">
              <TagList items={matched} variant="found" />
            </div>
            </div>
        ) : null}

        {missing.length > 0 ? (
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
              {showJobMatch ? "Missing or weak vs posting" : "Terms to consider"}
            </p>
            <div className="mt-3">
              <TagList items={missing} variant="missing" />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              Add each term only where you can explain it in an interview.
            </p>
          </div>
        ) : showJobMatch ? (
          <p className="mt-4 text-sm text-zinc-600">
            No major keyword gaps flagged for this posting.
          </p>
        ) : null}

        {detectedSkills.length > 0 ? (
          <div className="mt-6 border-t border-zinc-100 pt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Skills &amp; tools detected in your text
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {detectedSkills.map((sk) => (
                <span
                  key={sk}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section
        className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-7"
        aria-labelledby="actionable-heading"
      >
        <h2
          id="actionable-heading"
          className="font-display text-xl font-semibold text-zinc-950"
        >
          Actionable resume suggestions
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          From this{" "}
          <strong className="font-semibold text-zinc-800">
            resume ATS analysis
          </strong>
          .
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <SuggestionBlock
            title="Summary"
            body={analysis.section_feedback.summary}
            emptyHint="Add a two-line summary with role, years, and your biggest win."
          />
          <SuggestionBlock
            title="Experience"
            body={analysis.section_feedback.experience}
            emptyHint="Lead bullets with outcomes and scope."
          />
          <SuggestionBlock
            title="Skills"
            body={analysis.section_feedback.skills}
            emptyHint="Group skills and mirror the posting where true."
          />
          <SuggestionBlock
            title="ATS compatibility"
            items={analysis.formatting_issues}
            emptyHint="No layout flags—keep a one-column export."
          />
        </div>
        {analysis.grammar_issues.length > 0 ? (
          <div className="mt-4 rounded-xl border border-zinc-100 bg-zinc-50/60 p-4">
            <p className="text-xs font-bold uppercase text-zinc-500">
              Wording &amp; clarity
            </p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-700">
              {analysis.grammar_issues.map((g, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-brand-500" aria-hidden>
                    •
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section
        className="rounded-2xl border border-brand-200/60 bg-gradient-to-br from-brand-50/80 via-white to-emerald-50/40 p-5 sm:p-7"
        aria-labelledby="ats-tips-heading"
      >
        <h2
          id="ats-tips-heading"
          className="font-display text-lg font-semibold text-zinc-950"
        >
          ATS resume tips
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
          <li>
            <strong className="text-zinc-900">ATS friendly resume format:</strong>{" "}
            one column, standard headings—see our{" "}
            <Link
              href="/ultimate-ats-resume-guide"
              className="font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-2 hover:text-emerald-900"
            >
              ultimate ATS resume guide
            </Link>
            .
          </li>
          <li>
            <strong className="text-zinc-900">ATS keywords:</strong> mirror the
            posting in bullets you can defend.
          </li>
          <li>
            <strong className="text-zinc-900">Resume formatting tips:</strong> if
            copy/paste scrambles order, fix the source PDF first.
          </li>
          <li>
            <strong className="text-zinc-900">Why resumes get rejected:</strong>{" "}
            <Link
              href="/blog/why-resume-rejected-ats-top-reasons-fixes"
              className="font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-2 hover:text-emerald-900"
            >
              top reasons + fixes
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-zinc-900 bg-zinc-950 px-5 py-8 text-center shadow-soft-lg sm:px-8">
        <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
          Compare your score after you edit
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-zinc-300">
          Re-upload and run another{" "}
          <strong className="font-medium text-white">resume ATS test</strong> on
          the file you will submit.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400">
          Use our free <strong className="text-zinc-200">ATS Resume Checker</strong>{" "}
          to instantly analyze your resume and improve ATS compatibility.
        </p>
        {onRecheck ? (
          <button
            type="button"
            onClick={onRecheck}
            disabled={recheckDisabled || recheckLoading}
            className="btn-gradient mt-6 inline-flex px-8 text-base disabled:opacity-50"
          >
            {recheckLoading ? "Checking…" : "Recheck my resume"}
          </button>
        ) : (
          <Link
            href="/resume-checker"
            className="btn-gradient mt-6 inline-flex px-8 text-base"
          >
            Open ATS Resume Checker
          </Link>
        )}
        <p className="mt-4 text-xs text-zinc-500">
          <Link href="/" className="underline underline-offset-2 hover:text-zinc-300">
            Homepage
          </Link>
          {" · "}
          <Link
            href="/blog/how-to-make-your-resume-ats-friendly-2026-complete-guide"
            className="underline underline-offset-2 hover:text-zinc-300"
          >
            ATS-friendly guide
          </Link>
        </p>
      </section>
    </div>
  );
}

function SuggestionBlock({
  title,
  body,
  items,
  emptyHint,
}: {
  title: string;
  body?: string;
  items?: string[];
  emptyHint: string;
}) {
  const hasBody = Boolean(body?.trim());
  const list = items?.filter(Boolean) ?? [];
  return (
    <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
        {title}
      </p>
      {hasBody ? (
        <p className="mt-2 text-sm leading-relaxed text-zinc-700">{body}</p>
      ) : list.length > 0 ? (
        <ul className="mt-2 space-y-1.5 text-sm text-zinc-700">
          {list.slice(0, 4).map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-orange-500" aria-hidden>
                ▸
              </span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm italic text-zinc-500">{emptyHint}</p>
      )}
    </div>
  );
}
