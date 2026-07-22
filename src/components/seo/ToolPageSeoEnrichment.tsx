import { GuideAuthorBlock } from "@/components/seo/GuideAuthorBlock";
import { GuideContentEnrichment } from "@/components/seo/GuideContentEnrichment";
import { GuideConversionStrip } from "@/components/seo/GuideConversionStrip";
import { MandatoryHubLinks } from "@/components/seo/MandatoryHubLinks";
import { PaaAnswersSection } from "@/components/seo/PaaAnswersSection";
import { SemanticEntitySection } from "@/components/seo/SemanticEntitySection";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";
import { TrustBadgesStrip } from "@/components/seo/TrustBadgesStrip";

type Props = {
  path: string;
  pageTitle?: string;
};

/** Shared EEAT + engagement footer for interactive tool pages. */
export function ToolPageSeoEnrichment({ path, pageTitle }: Props) {
  return (
    <>
      <GuideConversionStrip className="mt-10" />
      <GuideContentEnrichment path={path} pageTitle={pageTitle} />
      <SemanticEntitySection path={path} className="mt-12" />
      <div className="not-prose mt-10 space-y-6">
        <TrustBadgesStrip />
        <GuideAuthorBlock path={path} />
      </div>
      <MandatoryHubLinks />
      <PaaAnswersSection path={path} className="mt-10" />
      <GuideConversionStrip className="mt-10" />
      <StickyCheckerCta />
    </>
  );
}
