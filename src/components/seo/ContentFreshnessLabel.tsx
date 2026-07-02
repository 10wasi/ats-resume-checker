import Link from "next/link";
import {
  formatContentLastUpdated,
  getContentLastUpdated,
} from "@/lib/seo/content-freshness";

type Props = {
  path: string;
  className?: string;
};

/** Visible freshness signal for guides — aligns with sitemap lastModified. */
export function ContentFreshnessLabel({ path, className = "" }: Props) {
  const iso = getContentLastUpdated(path);
  return (
    <p className={`text-xs text-slate-500 ${className}`}>
      Last updated{" "}
      <time dateTime={iso}>{formatContentLastUpdated(iso)}</time>
      {" · "}
      <Link href="/editorial-policy" className="font-semibold text-[#16a34a] underline">
        Editorial standards
      </Link>
    </p>
  );
}
