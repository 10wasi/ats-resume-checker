import Link from "next/link";
import { MandatoryHubLinks } from "@/components/seo/MandatoryHubLinks";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

type Props = {
  /** e.g. "headline examples", "skills lists" */
  resourceLabel: string;
  /** Short tip unique to this page */
  workflowTip: string;
  className?: string;
};

/** Honest labeling + workflow for example-library generator landings (no automated tool). */
export function ExampleLibraryWorkflow({
  resourceLabel,
  workflowTip,
  className = "mt-10",
}: Props) {
  return (
    <section
      className={`not-prose rounded-2xl border border-amber-200/80 bg-amber-50/40 p-5 sm:p-6 ${className}`}
      aria-labelledby="example-library-workflow"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
        Example library · not an automated generator
      </p>
      <h2
        id="example-library-workflow"
        className="mt-2 font-display text-lg font-bold text-slate-900"
      >
        How to use these {resourceLabel}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{workflowTip}</p>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
        <li>Pick a role-matched example and adapt it to your tools, scope, and metrics.</li>
        <li>
          Paste the line into your draft resume, then run the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            ATS resume checker
          </Link>{" "}
          on the exact PDF you will submit.
        </li>
        <li>
          Tailor keywords against the job post in the{" "}
          <Link
            href="/resume-job-description-match"
            className="font-semibold text-slate-800 underline"
          >
            match analyzer
          </Link>{" "}
          before applying.
        </li>
      </ol>
      <MandatoryHubLinks className="mt-6" />
    </section>
  );
}
