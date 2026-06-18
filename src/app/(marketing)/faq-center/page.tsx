import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { buildCtrMetadata, CTR_FAQ_CENTER } from "@/lib/seo/ctr-metadata";
import {
  FAQ_CENTER_PATH,
  FAQ_CENTER_SECTIONS,
  faqCenterAllItems,
} from "@/lib/seo/faq-center-items";
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
      <PageFaqJsonLd items={faqCenterAllItems} />
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
            </Link>.
          </p>
        </header>

        <div className="mt-12 space-y-16">
          {FAQ_CENTER_SECTIONS.map((section) => (
            <section key={section.id} aria-labelledby={`faq-${section.id}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2
                  id={`faq-${section.id}`}
                  className="font-display text-2xl font-bold text-slate-900"
                >
                  {section.title}
                </h2>
                <Link
                  href={section.href}
                  className="text-sm font-semibold text-[#16a34a] underline"
                >
                  Full guide →
                </Link>
              </div>
              <div className="mt-8 space-y-8">
                {section.items.map((item) => (
                  <div key={item.question}>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.question}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <RelatedResources path={FAQ_CENTER_PATH} excludeHref={FAQ_CENTER_PATH} />
      </div>
    </>
  );
}
