import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { aboutFaqItems } from "@/lib/seo/about-faq";
import { buildCtrMetadata, CTR_ABOUT } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_ABOUT, {
  canonical: "/about",
  keywords: ["ATS Resume Checker", "resume optimization", "resume checker"],
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
      <p className="section-eyebrow">About</p>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        {CTR_ABOUT.h1}
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
          title="Editorial quality"
          body="Guides include examples, FAQs, and actionable steps—not thin SEO filler."
          href="/knowledge-center"
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
              <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
              <p className="mt-2 leading-relaxed text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
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
