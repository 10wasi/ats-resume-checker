import Link from "next/link";
import { ContentFreshnessLabel } from "@/components/seo/ContentFreshnessLabel";

type Props = {
  path: string;
  audience?: string;
  notFor?: string;
  limitations?: string;
};

/** Full EEAT block: audience, methodology, limitations, editorial standards. */
export function GuideEeatSection({
  path,
  audience = "Job seekers worldwide applying through online portals, job boards, and employer ATS systems—especially when applications go silent after submit.",
  notFor = "This advice does not replace legal immigration counsel, executive branding consultants, or guaranteed interview outcomes. It cannot override hard filters (visa, clearance, degree requirements) you do not meet.",
  limitations = "ResumeIQ scores parser health, keyword overlap, and format signals—not hiring manager preference, culture fit, or network referrals. Scores are estimates, not employment guarantees.",
}: Props) {
  return (
    <aside
      className="not-prose rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-6"
      aria-label="Editorial standards and research methodology"
    >
      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
        Editorial standards &amp; methodology
      </p>

      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
        <div>
          <h3 className="font-semibold text-slate-900">Who this guide is for</h3>
          <p className="mt-1">{audience}</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Who should not rely on this alone</h3>
          <p className="mt-1">{notFor}</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Research methodology</h3>
          <p className="mt-1">
            Guidance is based on documented applicant tracking system behavior (text extraction,
            keyword search, recruiter workflow), parse testing via the{" "}
            <Link href="/resume-checker" className="font-semibold text-[#16a34a] underline">
              free resume checker
            </Link>
            , and editorial review against our{" "}
            <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
              scoring methodology
            </Link>
            . We do not claim affiliation with ATS vendors.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Limitations</h3>
          <p className="mt-1">{limitations}</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Privacy &amp; file security</h3>
          <p className="mt-1">
            Standard checks process your file for analysis—we do not sell resume data. See{" "}
            <Link href="/privacy" className="font-semibold text-[#16a34a] underline">
              privacy policy
            </Link>{" "}
            for retention details. Export a copy before editing; we recommend not uploading
            confidential employer documents you are not permitted to share.
          </p>
        </div>
      </div>

      <ContentFreshnessLabel path={path} className="mt-4" />
      <p className="mt-2 text-xs text-slate-500">
        Reviewed under{" "}
        <Link href="/editorial-policy" className="font-semibold text-[#16a34a] underline">
          editorial policy
        </Link>
        . Report errors via{" "}
        <Link href="/contact" className="font-semibold text-[#16a34a] underline">
          contact
        </Link>
        .
      </p>
    </aside>
  );
}
