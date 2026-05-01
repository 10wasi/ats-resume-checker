"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import {
  IconClose,
  IconMenu,
} from "@/components/ui/DashboardIcons";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import {
  SITE_COMPANY,
  SITE_DASHBOARD_NAV,
  SITE_LEGAL,
  SITE_TOOLS,
} from "@/lib/site-nav";

function TopNavLinks({
  onNavigate,
  className = "",
  layout = "row",
}: {
  onNavigate?: () => void;
  className?: string;
  layout?: "row" | "stack";
}) {
  const pathname = usePathname();
  const stack = layout === "stack";

  return (
    <nav
      className={`${stack ? "flex flex-col gap-1" : "flex w-full max-w-full flex-nowrap items-center gap-1 overflow-x-auto overscroll-x-contain"} ${className}`}
      aria-label="Product"
    >
      {SITE_DASHBOARD_NAV.map(({ href, label }) => {
        const active =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={`rounded-lg px-3 text-sm font-medium transition duration-200 ${
              stack ? "w-full py-3.5 sm:py-3" : "shrink-0 py-2"
            } ${
              active
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f4f4f5]">
      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-[100] bg-slate-900/25 backdrop-blur-sm md:hidden"
          onClick={close}
        />
      ) : null}

      {open ? (
        <div
          className="fixed inset-0 z-[110] flex flex-col bg-white md:hidden"
          style={{
            paddingBottom: "env(safe-area-inset-bottom)",
            paddingTop: "env(safe-area-inset-top)",
          }}
        >
          <div className="flex items-center justify-between gap-2 border-b border-zinc-100 px-4 py-3">
            <Link href="/" onClick={close} className="min-w-0">
              <Logo showWordmark wordmarkClassName="truncate" />
            </Link>
            <button
              type="button"
              className="touch-manipulation shrink-0 rounded-lg p-2.5 text-zinc-500 hover:bg-zinc-100"
              onClick={close}
              aria-label="Close navigation"
            >
              <IconClose className="h-6 w-6" />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <TopNavLinks onNavigate={close} layout="stack" />
            <div className="mt-6 space-y-1 border-t border-zinc-100 pt-4">
              <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wide text-zinc-400">
                Legal
              </p>
              {SITE_LEGAL.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  className="block rounded-lg px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white/95 shadow-[0_1px_0_rgba(9,9,11,0.04),0_8px_24px_-12px_rgba(34,197,94,0.08)] backdrop-blur-md">
        <div
          className="relative mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8"
          style={{
            paddingLeft: "max(1rem, env(safe-area-inset-left))",
            paddingRight: "max(1rem, env(safe-area-inset-right))",
            paddingTop: "max(0.5rem, env(safe-area-inset-top))",
          }}
        >
          <Link href="/" className="relative z-10 min-w-0 shrink-0" aria-label="ResumeIQ home">
            <Logo showWordmark wordmarkClassName="truncate max-[380px]:hidden" />
          </Link>

          <TopNavLinks className="absolute left-1/2 top-1/2 z-10 hidden max-w-[min(100%,calc(100vw-12rem))] -translate-x-1/2 -translate-y-1/2 md:flex md:justify-center" />

          <div className="relative z-10 flex shrink-0 items-center justify-end">
            <span
              className="pointer-events-none hidden select-none opacity-0 md:inline-flex"
              aria-hidden
            >
              <Logo showWordmark wordmarkClassName="truncate max-[380px]:hidden" />
            </span>
            <button
              type="button"
              className="touch-manipulation rounded-lg p-2.5 text-[#4ade80] hover:bg-brand-50 md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
              aria-expanded={open}
            >
              <IconMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AdPlaceholder
        label="Advertisement · tool page"
        className="border-b border-zinc-100 bg-[#f4f4f5] py-3"
      />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-[1600px]">{children}</div>
      </main>

      <footer className="border-t border-zinc-200/80 bg-white py-8 text-xs text-zinc-500">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-between"
            aria-label="Footer"
          >
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {SITE_TOOLS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-zinc-600 transition hover:text-zinc-900"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {SITE_COMPANY.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-zinc-600 transition hover:text-zinc-900"
                >
                  {label}
                </Link>
              ))}
              {SITE_LEGAL.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-zinc-600 transition hover:text-zinc-900"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
          <p className="text-center">
            © {new Date().getFullYear()} ResumeIQ · Free resume &amp; ATS
            tools
          </p>
        </div>
      </footer>
    </div>
  );
}
