import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const reasons = [
  {
    icon: "⊞",
    title: "Format breaks parsing",
    body: "Two-column layouts, tables, and text boxes scramble what applicant tracking systems extract — your experience may never reach a recruiter.",
  },
  {
    icon: "🔍",
    title: "Missing job keywords",
    body: "ATS filters search for exact terms from the posting. Generic bullets without role-specific skills get ranked below candidates who mirror the job description.",
  },
  {
    icon: "📉",
    title: "Weak impact bullets",
    body: "Duty lists without metrics or outcomes score low in resume analysis. Recruiters skim for proof — numbers, tools, and results in the first six seconds.",
  },
];

export function HomeWhyAtsRejectsSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-14 sm:py-16"
      aria-labelledby="why-rejects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Why applications stall</p>
          <h2
            id="why-rejects-heading"
            className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Why ATS rejects most resumes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Hiring software filters before a human reads your file. These three issues cause most silent rejections.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {reasons.map((r) => (
            <li
              key={r.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm ring-1 ring-slate-200/80">
                {r.icon}
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-slate-600">
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            Run a free ATS resume scan
          </Link>{" "}
          to see which issue affects your file.
        </p>
      </div>
    </section>
  );
}
