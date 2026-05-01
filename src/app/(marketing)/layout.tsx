import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <AdPlaceholder
        label="Advertisement · below header"
        className="border-b border-slate-100 bg-white py-3"
      />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
