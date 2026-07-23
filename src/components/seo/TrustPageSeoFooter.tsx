import { GuideAuthorBlock } from "@/components/seo/GuideAuthorBlock";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { TrustBadgesStrip } from "@/components/seo/TrustBadgesStrip";

/** EEAT footer stack for trust, legal, and company pages. */
export function TrustPageSeoFooter({ path }: { path: string }) {
  return (
    <div className="not-prose mt-14 space-y-6 border-t border-slate-200 pt-12">
      <TrustBadgesStrip />
      <GuideAuthorBlock path={path} />
      <GuideEeatSection path={path} />
    </div>
  );
}
