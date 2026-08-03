import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { MandatoryHubLinks } from "@/components/seo/MandatoryHubLinks";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { buildCtrMetadata, CTR_FAQ_CENTER } from "@/lib/seo/ctr-metadata";
import { faqCenterHubFaqItems } from "@/lib/seo/faq-center-hub-faq";
import { FAQ_CENTER_PATH, FAQ_CENTER_TOPICS } from "@/lib/seo/faq-center-items";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_FAQ_CENTER, {
  canonical: FAQ_CENTER_PATH,
  keywords: [
    "ATS resume FAQ",
    "resume checker help",
    "ATS scoring",
    "resume optimization",
  ],
});

export default function FaqCenterPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={FAQ_CENTER_PATH}
        title={CTR_FAQ_CENTER.title}
        description={CTR_FAQ_CENTER.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ Center", path: FAQ_CENTER_PATH },
        ]}
      />
      <PageFaqJsonLd items={faqCenterHubFaqItems} />
      <div className="container-prose py-12 sm:py-16">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "FAQ Center", path: FAQ_CENTER_PATH },
          ]}
        />
        <header className="mt-8">
          <p className="section-eyebrow">Help center · ResumeIQ</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            {CTR_FAQ_CENTER.h1}
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Answers about ATS scoring, resume optimization, and interview readiness—for job seekers applying{" "}
            <strong className="font-semibold text-slate-800">worldwide</strong>. Still stuck? Run the{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              free resume checker
            </Link>{" "}
            or read our{" "}
            <Link href="/methodology" className="font-semibold text-slate-800 underline">
              methodology
            </Link>
            .
          </p>
        </header>

        <section className="mt-10 border-b border-slate-200 pb-10" aria-labelledby="faq-hub-heading">
          <h2 id="faq-hub-heading" className="font-display text-xl font-bold text-slate-900">
            Using this FAQ Center
          </h2>
          <div className="mt-6 space-y-6">
            {faqCenterHubFaqItems.map((item) => (
              <div key={item.question}>
                <h3 className="text-base font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 leading-relaxed text-slate-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="faq-topics-heading">
          <h2 id="faq-topics-heading" className="font-display text-2xl font-bold text-slate-900">
            Browse by topic
          </h2>
          <p className="mt-3 text-slate-600">
            Each topic links to the canonical guide with full answers—this hub keeps hub-only FAQs above to avoid duplicate content.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {FAQ_CENTER_TOPICS.map((topic) => (
              <li
                key={topic.id}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-slate-900">
                  <Link href={topic.href} className="hover:text-[#16a34a]">
                    {topic.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{topic.description}</p>
                <p className="mt-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Example question: </span>
                  {topic.previewQuestion}
                </p>
                <Link
                  href={topic.href}
                  className="mt-4 inline-block text-sm font-semibold text-[#16a34a] underline"
                >
                  Read full {topic.title.toLowerCase()} guide →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <MandatoryHubLinks className="mt-14" />
        <RelatedResources path={FAQ_CENTER_PATH} excludeHref={FAQ_CENTER_PATH} />
      </div>
    </>
  );
}
