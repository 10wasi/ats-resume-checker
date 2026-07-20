import { GuideAuthorBlock } from "@/components/seo/GuideAuthorBlock";
import { PaaAnswersSection } from "@/components/seo/PaaAnswersSection";
import { SemanticEntitySection } from "@/components/seo/SemanticEntitySection";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";
import { TrustBadgesStrip } from "@/components/seo/TrustBadgesStrip";

/** Shared EEAT + engagement footer for interactive tool pages. */
export function ToolPageSeoEnrichment({ path }: { path: string }) {
  return (
    <>
      <SemanticEntitySection path={path} className="mt-12" />
      <div className="not-prose mt-10 space-y-6">
        <TrustBadgesStrip />
        <GuideAuthorBlock />
      </div>
      <PaaAnswersSection path={path} className="mt-10" />
      <StickyCheckerCta />
    </>
  );
}
