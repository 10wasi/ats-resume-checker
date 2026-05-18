import { getSiteUrl } from "@/lib/site-url";

export function ResourceGuideJsonLd({
  path,
  title,
  description,
  date = "2026-05-14",
}: {
  path: string;
  title: string;
  description: string;
  date?: string;
}) {
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: "ResumeIQ" },
    publisher: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: siteUrl,
    },
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${path}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
