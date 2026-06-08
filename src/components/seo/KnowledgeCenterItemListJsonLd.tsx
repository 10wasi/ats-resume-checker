import { KNOWLEDGE_CENTER_PAGES } from "@/lib/content/knowledge-center-pages";
import { getSiteUrl } from "@/lib/site-url";

export function KnowledgeCenterItemListJsonLd() {
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ATS Knowledge Center",
    description:
      "Complete library of ATS resume guides: examples, checklist, keywords, format, mistakes, job matching, score, templates, and industry keywords.",
    numberOfItems: KNOWLEDGE_CENTER_PAGES.length,
    itemListElement: KNOWLEDGE_CENTER_PAGES.map((page, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: page.title,
      url: `${siteUrl}${page.href}`,
      description: page.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
