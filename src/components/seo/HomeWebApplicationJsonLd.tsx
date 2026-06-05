import { getSiteUrl } from "@/lib/site-url";

/** Schema.org WebApplication for the homepage / primary web app entry. */
export function HomeWebApplicationJsonLd() {
  const base = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ATS Resume Checker",
    description:
      "Free ATS resume optimization platform: ATS score, resume match score, missing keywords, ATS resume examples, checklist, and AI resume rewrite assistant.",
    url: `${base}/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    inLanguage: "en-US",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
