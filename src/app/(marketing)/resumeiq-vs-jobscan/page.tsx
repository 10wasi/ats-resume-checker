import { RESUMIQ_VS_JOBSCAN } from "@/lib/content/sprint3/vs-comparisons";
import { Sprint3LandingPage, sprint3Metadata } from "@/lib/content/sprint3/page";

export const metadata = sprint3Metadata(RESUMIQ_VS_JOBSCAN);

export default function Page() {
  return <Sprint3LandingPage spec={RESUMIQ_VS_JOBSCAN} />;
}
