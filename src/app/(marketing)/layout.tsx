import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { EditorialPersonJsonLd } from "@/components/seo/PersonJsonLd";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <EditorialPersonJsonLd />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg focus:outline-2 focus:outline-brand-500"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <AdPlaceholder
        label="Advertisement · below header"
        className="border-b border-slate-100 bg-white py-3"
      />
      <main id="main-content" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
