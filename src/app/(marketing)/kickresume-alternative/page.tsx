import { KICKRESUME_COMPARISON } from "@/lib/content/sprint3/comparisons";
import { Sprint3LandingPage, sprint3Metadata } from "@/lib/content/sprint3/page";

export const metadata = sprint3Metadata(KICKRESUME_COMPARISON);

export default function Page() {
  return <Sprint3LandingPage spec={KICKRESUME_COMPARISON} />;
}
