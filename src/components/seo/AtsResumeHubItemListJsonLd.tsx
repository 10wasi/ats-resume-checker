import { getSiteUrl } from "@/lib/site-url";
import { ATS_RESUME_HUB_PATH } from "@/lib/content/ats-resume-hub-body";
import { ATS_HUB_SECTIONS } from "@/lib/content/ats-resume-hub-sections";

export function AtsResumeHubItemListJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Complete ATS Resume Resource Hub",
    description:
      "Curated ATS resume guides: checklist, examples, keywords, format, job match analyzer, mistakes, FAQ, and action plan.",
    url: `${base}${ATS_RESUME_HUB_PATH}`,
    itemListElement: ATS_HUB_SECTIONS.map((section, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: section.title,
      url: section.href.startsWith("#")
        ? `${base}${ATS_RESUME_HUB_PATH}${section.href}`
        : `${base}${section.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
