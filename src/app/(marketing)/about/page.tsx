import type { Metadata } from "next";
import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata: Metadata = {
  title: "About ResumeIQ",
  description:
    "ResumeIQ is a free AI resume checker and ATS score analyzer for job seekers, students, new graduates, and software engineers.",
};

export default function AboutPage() {
  return (
    <div className="container-prose py-16 sm:py-20">
      <p className="section-eyebrow">About</p>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        A free utility — not another resume SaaS.
      </h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
        <p>
          ResumeIQ exists because applying for jobs already costs enough time
          and anxiety. We wanted a fast, honest AI resume analyzer that shows
          ATS-style signals, keyword gaps, and formatting risks without hiding
          the useful parts behind a paywall.
        </p>
        <p>
          The site is aimed at job seekers, students, bootcamp grads, and
          software engineers who need a resume optimization tool that behaves
          more like a search utility than a subscription product.
        </p>
        <p>
          If the score helps you tighten one bullet, fix one parsing issue, or
          align your CV with a real posting, that is the whole point.
        </p>
        <p>
          Editorial guides on the blog are written for job seekers, not for
          algorithms — each article links back to the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 visited:text-[#22c55e] hover:text-[#16a34a]"
          >
            ATS resume checker
          </Link>{" "}
          so you can verify changes on your own file.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-7">
          Improve Your Resume
        </Link>
        <Link
          href="/blog"
          className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-accent-400 hover:text-accent-500"
        >
          Career blog
        </Link>
      </div>
    </div>
  );
}
