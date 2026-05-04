import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Indexable SEO body copy (~600 words) — supports homepage H1 and topic clusters. */
export function HomeSeoContent() {
  return (
    <section
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="home-seo-guide-heading"
    >
      <div className="container-page max-w-4xl">
        <h2
          id="home-seo-guide-heading"
          className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Free ATS resume checker for real job applications
        </h2>
        <div className="prose-custom mt-8 space-y-6 text-base leading-relaxed text-slate-700 sm:text-[17px]">
          <p>
            When you apply online, your resume often meets an{" "}
            <strong className="font-semibold text-slate-900">
              applicant tracking system (ATS)
            </strong>{" "}
            before a recruiter reads a single line. Our{" "}
            <strong className="font-semibold text-slate-900">
              ATS resume checker
            </strong>{" "}
            gives you a clear{" "}
            <Link
              href={RESUME_CHECKER_PATH}
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              resume score
            </Link>
            , shows how your text is likely extracted, and highlights gaps you
            can fix for stronger{" "}
            <strong className="font-semibold text-slate-900">
              CV optimization
            </strong>{" "}
            — without a paywall or login.
          </p>

          <h3 className="pt-2 font-display text-xl font-bold text-slate-900">
            What is ATS and how it works
          </h3>
          <p>
            An ATS collects applications, stores résumés, and helps hiring teams
            search, filter, and move candidates through stages. Behind the scenes,
            parsers try to pull your{" "}
            <strong className="font-semibold text-slate-900">
              ATS keywords
            </strong>{" "}
            — job titles, skills, certifications — into consistent fields so
            recruiters can query “Python + AWS + clearance,” for example. If
            your layout breaks text order or hides content in graphics, those
            terms may never make it into search — even when you are qualified.
            That is why a dedicated{" "}
            <Link
              href={RESUME_CHECKER_PATH}
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              resume score check
            </Link>{" "}
            that previews extraction matters for modern job applications.
          </p>

          <h3 className="pt-2 font-display text-xl font-bold text-slate-900">
            Why resumes get rejected by ATS
          </h3>
          <p>
            Rejection is not always “the algorithm hated you.” Often the system
            never surfaces your best proof: unreadable PDFs, multi-column
            templates, missing standard section labels, or{" "}
            <strong className="font-semibold text-slate-900">
              ATS keywords
            </strong>{" "}
            that do not match how the employer describes the role. Sometimes the
            fit is off; other times a small formatting fix unlocks visibility.
            We unpack common failure modes in our guide{" "}
            <Link
              href="/blog/why-resume-rejected-by-ats"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              why resumes get rejected by ATS
            </Link>{" "}
            — pair it with the checker to separate parsing issues from true role
            mismatch before you mass-apply.
          </p>

          <h3 className="pt-2 font-display text-xl font-bold text-slate-900">
            How to improve resume score
          </h3>
          <p>
            Start with machine readability: one-column flow, conventional
            headings (Experience, Education, Skills), and bullets that lead with
            outcomes. Then align language with the posting — honestly — so your{" "}
            <strong className="font-semibold text-slate-900">
              job application resume
            </strong>{" "}
            echoes the skills you can defend in an interview.             Tighten weak lines,
            add one metric where you can, and re-run our tool to confirm your{" "}
            <strong className="font-semibold text-slate-900">
              resume score
            </strong>{" "}
            moved for the right reasons. See our{" "}
            <Link
              href="/blog/best-resume-format-job-interviews-2026"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              best resume format for ATS (step-by-step)
            </Link>{" "}
            for layout choices that help parsers read your CV. For a fast checklist, read{" "}
            <Link
              href="/blog/how-to-improve-resume-score-instantly"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              how to improve resume score instantly
            </Link>
            .
          </p>

          <h3 className="pt-2 font-display text-xl font-bold text-slate-900">
            Best keywords for ATS resumes
          </h3>
          <p>
            The “best” keywords are truthful overlaps between your experience and
            the employer’s language: tools, methods, domains, and compliance terms
            repeated in the description — not invisible stuffing. Use them in
            context inside experience and skills, and verify with extraction +
            match feedback in our{" "}
            <Link
              href={RESUME_CHECKER_PATH}
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              free ATS resume checker
            </Link>
            . For examples and placement ideas, see{" "}
            <Link
              href="/blog/top-resume-keywords-that-get-you-hired-fast"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              top resume keywords that get you hired fast
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/how-to-pass-ats-resume-screening-2026"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
            >
              how to pass ATS resume screening in 2026
            </Link>
            .
          </p>

          <p className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-slate-600">
            Ready to optimize your CV?{" "}
            <Link
              href={RESUME_CHECKER_PATH}
              className="font-semibold text-[#4ade80] hover:text-[#16a34a]"
            >
              Run the ATS resume checker
            </Link>{" "}
            — then explore more{" "}
            <Link
              href="/blog"
              className="font-semibold text-slate-800 underline underline-offset-2 hover:text-slate-950"
            >
              career and resume articles on our blog
            </Link>{" "}
            for format, screening, and keyword strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
