import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Schema.org WebApplication for the unified resume / ATS checker. */
export function ResumeCheckerWebApplicationJsonLd() {
  const base = getSiteUrl();
  const url = `${base}${RESUME_CHECKER_PATH}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ResumeIQ Resume ATS Checker",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript.",
    url,
    description:
      "Free ATS Resume Checker: analyze score, keyword match %, missing terms, formatting flags, and compatibility. Upload PDF or paste text.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    isAccessibleForFree: true,
    featureList: [
      "ATS score (0–100)",
      "Keyword gap analysis",
      "Format parse test",
      "Resume match analyzer",
      "AI bullet suggestions",
    ],
    potentialAction: {
      "@type": "UseAction",
      target: url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2400",
      bestRating: "5",
      worstRating: "1",
    },
    publisher: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: base,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
