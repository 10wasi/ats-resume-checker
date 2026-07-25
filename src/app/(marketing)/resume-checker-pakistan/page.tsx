import { COUNTRY_PAGES } from "@/lib/content/sprint3/countries";
import { Sprint3LandingPage, sprint3Metadata } from "@/lib/content/sprint3/page";

const spec = COUNTRY_PAGES.find((p) => p.id === "resume-checker-pakistan")!;

export const metadata = sprint3Metadata(spec);

export default function Page() {
  return <Sprint3LandingPage spec={spec} />;
}
