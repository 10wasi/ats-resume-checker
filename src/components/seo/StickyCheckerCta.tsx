import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Mobile-first sticky upload CTA on long-form guides. */
export function StickyCheckerCta() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-3 sm:hidden"
      aria-hidden={false}
    >
      <Link
        href={RESUME_CHECKER_PATH}
        className="pointer-events-auto btn-gradient flex h-12 w-full items-center justify-center rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/20"
      >
        Free ATS resume check →
      </Link>
    </div>
  );
}
