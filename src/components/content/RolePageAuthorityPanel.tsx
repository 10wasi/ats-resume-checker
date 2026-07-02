import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { getProfessionHub } from "@/lib/content/profession-hubs/registry";

type Props = {
  roleTitle: string;
  slug: string;
  seoKeywords?: string[];
  variant: "example" | "keywords";
};

const RECRUITER_NOTES: Record<string, string> = {
  "software-engineer":
    "Recruiters skim for stack terms in recent bullets, shipping proof, and parse-friendly layout—not a portfolio PDF alone.",
  "data-analyst":
    "Hiring managers search SQL, Python, and BI tools in plain text; metrics on dashboards and analyses matter more than tool dumps.",
  "business-analyst":
    "Filters look for requirements, UAT, and process mapping language—match the posting title and spell Agile terms fully.",
  default:
    "Recruiters spend ~6 seconds on structure: title match, recent employer, and bullets with outcomes before reading depth.",
};

/** Surfaces skills, recruiter context, and tool links without changing page layout. */
export function RolePageAuthorityPanel({
  roleTitle,
  slug,
  seoKeywords = [],
  variant,
}: Props) {
  const profession = getProfessionHub(slug);
  const recruiterNote = RECRUITER_NOTES[slug] ?? RECRUITER_NOTES.default;
  const topSkills = seoKeywords.slice(0, 6);

  const tools = [
    { href: RESUME_CHECKER_PATH, label: "ATS resume checker", desc: "Score & parse test" },
    { href: "/resume-score-checker", label: "Resume score guide", desc: "Interpret your %" },
    { href: "/resume-keywords-checker", label: "Keyword checker", desc: "Find missing terms" },
    { href: "/resume-job-description-match", label: "Job match tool", desc: "Compare to posting" },
  ];

  return (
    <aside
      className="not-prose mt-10 grid gap-4 lg:grid-cols-2"
      aria-label={`${roleTitle} resume optimization resources`}
    >
      <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
          Recruiter perspective
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">{recruiterNote}</p>
        {topSkills.length > 0 ? (
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Key {variant === "keywords" ? "keyword" : "SEO"} signals
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {topSkills.map((kw) => (
                <li
                  key={kw}
                  className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {kw}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {profession ? (
          <Link
            href={profession.path}
            className="mt-4 inline-block text-sm font-semibold text-[#16a34a] underline"
          >
            {roleTitle} profession hub →
          </Link>
        ) : null}
      </div>
      <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-5 sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
          Test this {variant === "keywords" ? "keyword list" : "example"} on your file
        </p>
        <ul className="mt-3 space-y-2">
          {tools.map((t) => (
            <li key={t.href}>
              <Link
                href={t.href}
                className="block rounded-lg border border-white/80 bg-white/90 px-3 py-2 text-sm transition hover:border-emerald-300"
              >
                <span className="font-semibold text-slate-900">{t.label}</span>
                <span className="mt-0.5 block text-xs text-slate-600">{t.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
