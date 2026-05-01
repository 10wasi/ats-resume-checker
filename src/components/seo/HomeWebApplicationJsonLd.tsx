import { getSiteUrl } from "@/lib/site-url";

/** Schema.org WebApplication for the homepage / primary web app entry. */
export function HomeWebApplicationJsonLd() {
  const base = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ATS Resume Checker",
    url: `${base}/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
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
