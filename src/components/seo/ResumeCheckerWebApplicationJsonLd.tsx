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
      "Free ATS-style resume check: score 0–100, strengths, weaknesses, improvements, keyword and posting match. Upload PDF or DOCX or paste text.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
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
