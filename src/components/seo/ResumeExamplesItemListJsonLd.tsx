import { RESUME_EXAMPLES } from "@/lib/content/resume-examples/registry";
import { getSiteUrl } from "@/lib/site-url";

export function ResumeExamplesItemListJsonLd() {
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Resume Examples Library",
    description:
      "ATS-friendly resume examples by role: software engineer, data analyst, project manager, marketing manager, customer service, accountant, graphic designer, and HR manager.",
    numberOfItems: RESUME_EXAMPLES.length,
    itemListElement: RESUME_EXAMPLES.map((ex, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: ex.ctr.h1,
      url: `${siteUrl}${ex.path}`,
      description: ex.seo.description,
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
