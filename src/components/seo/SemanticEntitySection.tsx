import Link from "next/link";

export type SemanticEntityBlock = {
  title: string;
  entities: { term: string; definition: string }[];
  relatedSearches: { label: string; href: string }[];
};

const BLOCKS: Record<string, SemanticEntityBlock> = {
  checker: {
    title: "ATS resume checker — key concepts",
    entities: [
      {
        term: "Applicant tracking system (ATS)",
        definition:
          "Hiring software that stores applications, parses resume text, and lets recruiters search by keywords and filters.",
      },
      {
        term: "Resume parser",
        definition:
          "The extraction step that turns your PDF or DOCX into searchable fields—skills, titles, dates, and employers.",
      },
      {
        term: "Resume match score",
        definition:
          "Percentage of job-description terms found in your resume after ethical tailoring—not a guarantee of interview.",
      },
      {
        term: "ATS-friendly format",
        definition:
          "Single-column layout, standard headings (Experience, Education, Skills), and selectable text without image-only blocks.",
      },
    ],
    relatedSearches: [
      { label: "Resume score checker", href: "/resume-score-checker" },
      { label: "Resume keyword checker", href: "/resume-keywords-checker" },
      { label: "CV checker", href: "/cv-checker" },
      { label: "How ATS works", href: "/how-ats-works" },
    ],
  },
  review: {
    title: "Resume review — what recruiters expect",
    entities: [
      {
        term: "Resume screening",
        definition:
          "Initial filter combining ATS keyword search and recruiter skim—often six seconds on page one.",
      },
      {
        term: "AI resume review",
        definition:
          "Automated section feedback on summary, experience, and skills—useful for structure before human polish.",
      },
      {
        term: "Resume optimization",
        definition:
          "Iterative improve-check cycle: parse fix → keyword alignment → bullet proof → re-score.",
      },
    ],
    relatedSearches: [
      { label: "AI resume review", href: "/ai-resume-review" },
      { label: "Resume screening explained", href: "/resume-screening-explained" },
      { label: "Resume rejected by ATS", href: "/resume-rejected-by-ats" },
    ],
  },
  hub: {
    title: "Career resources — related searches",
    entities: [
      {
        term: "Resume keywords by role",
        definition:
          "Profession-specific skills and verbs recruiters filter on—mirror only what you can defend in an interview.",
      },
      {
        term: "Resume examples",
        definition:
          "Before/after layouts showing parse-safe structure and metric-backed bullets.",
      },
    ],
    relatedSearches: [
      { label: "Complete ATS optimization guide", href: "/complete-guide-ats-resume-optimization" },
      { label: "Resource hub", href: "/resource-hub" },
      { label: "Knowledge center", href: "/knowledge-center" },
    ],
  },
};

function resolveBlock(path: string): SemanticEntityBlock {
  if (path.includes("review") || path.includes("screening")) return BLOCKS.review;
  if (path.includes("career-success") || path.includes("resource-hub") || path.includes("knowledge-center"))
    return BLOCKS.hub;
  if (
    path.includes("checker") ||
    path.includes("score") ||
    path.includes("match") ||
    path === "/"
  )
    return BLOCKS.checker;
  return BLOCKS.checker;
}

type Props = {
  path: string;
  className?: string;
};

/** NLP-style entity definitions + related searches for topical depth and AI search. */
export function SemanticEntitySection({ path, className = "mt-12" }: Props) {
  const block = resolveBlock(path);
  return (
    <section
      className={`not-prose rounded-2xl border border-slate-200/90 bg-slate-50/40 p-6 sm:p-8 ${className}`}
      aria-labelledby="semantic-entities-heading"
    >
      <h2
        id="semantic-entities-heading"
        className="font-display text-xl font-bold text-slate-900 sm:text-2xl"
      >
        {block.title}
      </h2>
      <dl className="mt-6 space-y-4">
        {block.entities.map((e) => (
          <div key={e.term}>
            <dt className="text-sm font-semibold text-slate-900">{e.term}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-slate-700">{e.definition}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8 border-t border-slate-200/80 pt-6">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Related searches
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {block.relatedSearches.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:border-emerald-300 hover:text-[#16a34a]"
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
