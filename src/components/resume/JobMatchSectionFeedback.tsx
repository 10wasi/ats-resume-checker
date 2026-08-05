import type { AtsAnalysisResult } from "@/lib/ats/types";

type SectionRow = {
  label: string;
  feedback: string;
  status: "strong" | "needs-work" | "missing";
};

function classifyFeedback(text: string): SectionRow["status"] {
  const lower = text.toLowerCase();
  if (
    lower.includes("missing") ||
    lower.includes("not found") ||
    lower.includes("add ") ||
    lower.includes("no ")
  ) {
    return "missing";
  }
  if (
    lower.includes("weak") ||
    lower.includes("improve") ||
    lower.includes("consider") ||
    lower.includes("short")
  ) {
    return "needs-work";
  }
  return "strong";
}

const STATUS_LABEL: Record<SectionRow["status"], string> = {
  strong: "On track",
  "needs-work": "Improve",
  missing: "Action needed",
};

const STATUS_CLASS: Record<SectionRow["status"], string> = {
  strong: "border-emerald-200 bg-emerald-50/60",
  "needs-work": "border-amber-200 bg-amber-50/50",
  missing: "border-rose-200 bg-rose-50/40",
};

type Props = {
  analysis: AtsAnalysisResult;
};

/** Section-by-section feedback from analysis.section_feedback. */
export function JobMatchSectionFeedback({ analysis }: Props) {
  const sf = analysis.section_feedback;
  const sections: SectionRow[] = [
    {
      label: "Summary / headline",
      feedback: sf.summary || "No summary feedback available—add a 2-line professional summary with role title and core tools.",
      status: classifyFeedback(sf.summary || ""),
    },
    {
      label: "Experience bullets",
      feedback: sf.experience || "Strengthen recent bullets with posting keywords, tools, and measurable outcomes.",
      status: classifyFeedback(sf.experience || ""),
    },
    {
      label: "Skills section",
      feedback: sf.skills || "Align skills with posting terms and mirror them in experience bullets where you have proof.",
      status: classifyFeedback(sf.skills || ""),
    },
  ];

  if (analysis.missing_sections?.length) {
    sections.push({
      label: "Missing sections",
      feedback: `Parser did not detect: ${analysis.missing_sections.join(", ")}. Use standard headings (Experience, Education, Skills).`,
      status: "missing",
    });
  }

  return (
    <section className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-6">
      <h3 className="font-display text-lg font-semibold text-zinc-950">
        Section-by-section feedback
      </h3>
      <p className="mt-1 text-sm text-zinc-600">
        Tailored notes for this job description—edit one section at a time, then re-analyze.
      </p>
      <ul className="mt-5 space-y-3">
        {sections.map((row) => (
          <li
            key={row.label}
            className={`rounded-xl border p-4 ${STATUS_CLASS[row.status]}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-zinc-900">{row.label}</p>
              <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-zinc-600">
                {STATUS_LABEL[row.status]}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">{row.feedback}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
