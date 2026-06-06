import type { HowToStep } from "@/lib/seo/how-to-steps";
import { getSiteUrl } from "@/lib/site-url";

type Props = {
  name: string;
  description: string;
  steps: HowToStep[];
  path: string;
};

/** HowTo schema for checklist and analyzer pages. */
export function HowToJsonLd({ name, description, steps, path }: Props) {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: `${base}${path}`,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
