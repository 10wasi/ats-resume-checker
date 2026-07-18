import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { aboutFaqItems } from "@/lib/seo/about-faq";
import { buildCtrMetadata, CTR_ABOUT } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_ABOUT, {
  canonical: "/about",
  keywords: ["about ResumeIQ", "ATS resume checker", "resume optimization"],
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <PageFaqJsonLd items={aboutFaqItems} />
      <div className="container-prose py-16 sm:py-20">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]}
        />
        <p className="section-eyebrow mt-8">About</p>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {CTR_ABOUT.h1}
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
          <p>
            ResumeIQ exists because applying for jobs already costs enough time
            and anxiety. We built a fast, honest resume checker for job seekers
            worldwide—whether you apply locally, remotely, or across borders. You
            get ATS-style signals, keyword gaps, and formatting risks without
            hiding the useful parts behind a paywall.
          </p>
          <p>
            <strong className="font-semibold text-slate-900">Our mission:</strong>{" "}
            Turn every job application into a measurable workflow—check, match,
            fix, re-check—so qualified candidates are not filtered out by broken
            PDFs or missing keywords. We publish{" "}
            <Link href="/how-ats-works" className="font-semibold text-[#16a34a] underline">
              how ATS works
            </Link>
            ,{" "}
            <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
              how scoring works
            </Link>
            ,{" "}
            <Link href="/how-we-score-resumes" className="font-semibold text-[#16a34a] underline">
              how we score resumes
            </Link>
            ,{" "}
            <Link href="/our-algorithm" className="font-semibold text-[#16a34a] underline">
              our algorithm
            </Link>
            ,{" "}
            <Link href="/editorial-policy" className="font-semibold text-[#16a34a] underline">
              editorial policy
            </Link>
            ,{" "}
            <Link href="/how-resume-analysis-works" className="font-semibold text-[#16a34a] underline">
              how analysis works
            </Link>
            , and connect guides to the{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              free resume checker
            </Link>
            so you can verify every change.
          </p>
          <p>
            If the score helps you tighten one bullet, fix one parsing issue, or
            align your CV with a real posting, that is the whole point. Read{" "}
            <Link
              href="/methodology"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 visited:text-[#22c55e] hover:text-[#16a34a]"
            >
              how ATS scoring works
            </Link>{" "}
            or browse the{" "}
            <Link
              href="/faq-center"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 visited:text-[#22c55e] hover:text-[#16a34a]"
            >
              FAQ Center
            </Link>{" "}
            for transparent answers.
          </p>
          <p>
            Editorial guides in the{" "}
            <Link
              href="/career-success-hub"
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 visited:text-[#22c55e] hover:text-[#16a34a]"
            >
              Career Success Hub
            </Link>{" "}
            and blog are written for job seekers—not for algorithms. Each guide
            links back to the{" "}
            <Link
              href={RESUME_CHECKER_PATH}
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 visited:text-[#22c55e] hover:text-[#16a34a]"
            >
              ATS resume checker
            </Link>{" "}
            so you can verify changes on your own file.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <TrustCard
            title="Privacy-first"
            body="Resumes are processed for your request—not sold or stored long-term. Read our Privacy Policy."
            href="/privacy"
          />
          <TrustCard
            title="Scoring methodology"
            body="Transparent explanation of what ATS checks and how scores are calculated."
            href="/methodology"
          />
          <TrustCard
            title="Real support"
            body="Questions or feedback? We read the contact inbox and update docs when something is unclear."
            href="/contact"
          />
        </div>
        <section className="mt-14 border-t border-slate-200 pt-12">
          <h2 className="font-display text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="mt-8 space-y-8">
            {aboutFaqItems.map((item) => (
              <div key={item.question}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <RelatedResources path="/about" excludeHref="/about" />
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-7">
            Check resume free
          </Link>
          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-accent-400 hover:text-accent-500"
          >
            Career blog
          </Link>
        </div>
      </div>
    </>
  );
}

function TrustCard({
  title,
  body,
  href,
}: {
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300"
    >
      <h2 className="font-display text-lg font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </Link>
  );
}
