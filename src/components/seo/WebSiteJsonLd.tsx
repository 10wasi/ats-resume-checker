import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export function WebSiteJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ResumeIQ",
    alternateName: "ATS Resume Checker",
    description:
      "Free ATS resume checker — instant score, keyword analysis, formatting check, and recruiter suggestions for job seekers worldwide.",
    url: base,
    publisher: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: base,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}${RESUME_CHECKER_PATH}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
      name: "Run free resume checker",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
