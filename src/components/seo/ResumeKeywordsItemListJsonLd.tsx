import { getSiteUrl } from "@/lib/site-url";
import { RESUME_KEYWORDS, RESUME_KEYWORDS_PATH } from "@/lib/content/resume-keywords/registry";

export function ResumeKeywordsItemListJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Resume Keywords Database by Profession",
    description:
      "ATS-friendly resume keywords for software engineers, analysts, managers, and more.",
    url: `${base}${RESUME_KEYWORDS_PATH}`,
    itemListElement: RESUME_KEYWORDS.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${entry.roleTitle} Resume Keywords`,
      url: `${base}${entry.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
