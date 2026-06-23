import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { RESUME_CHECKER_MONEY_BODY } from "@/lib/content/money-pages/resume-checker-body";
import { resumeCheckerFaqItems } from "@/lib/seo/resume-checker-faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Long-form money page content below the /resume-checker tool. */
export function ResumeCheckerMoneyGuide() {
  return (
    <section
      className="border-t border-zinc-200/90 bg-white"
      aria-labelledby="resume-checker-guide-heading"
    >
      <div className="container-prose mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2
          id="resume-checker-guide-heading"
          className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Free resume checker guide
        </h2>
        <BlogContent content={RESUME_CHECKER_MONEY_BODY} />
        <RelatedResources path={RESUME_CHECKER_PATH} excludeHref={RESUME_CHECKER_PATH} />
        <section className="mt-14 border-t border-slate-200 pt-12" aria-labelledby="checker-faq-heading">
          <h2
            id="checker-faq-heading"
            className="font-display text-2xl font-bold tracking-tight text-slate-900"
          >
            FAQ: Resume checker
          </h2>
          <div className="mt-8 space-y-8">
            {resumeCheckerFaqItems.map((item) => (
              <div key={item.question}>
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 leading-relaxed text-slate-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-10">
          <BlogResumeCta />
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          <Link href="/free-resume-checker-online" className="font-semibold text-[#16a34a] underline">
            Free resume checker online hub
          </Link>
          {" · "}
          <Link href="/resume-score-checker" className="font-semibold text-[#16a34a] underline">
            Resume score checker guide
          </Link>
        </p>
      </div>
    </section>
  );
}
