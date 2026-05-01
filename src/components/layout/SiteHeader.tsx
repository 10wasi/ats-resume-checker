"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { IconClose, IconMenu } from "@/components/ui/DashboardIcons";
import {
  RESUME_CHECKER_PATH,
  SITE_MARKETING_NAV,
} from "@/lib/site-nav";

export function SiteHeader() {
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
    <>
      {/*
        Mobile menu must NOT live inside the blurred header: backdrop-filter creates a
        containing block, so position:fixed overlays are clipped and taps appear "broken".
      */}
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
          id="marketing-mobile-nav"
          className="fixed inset-0 z-[110] flex flex-col bg-white md:hidden"
          style={{
            paddingBottom: "env(safe-area-inset-bottom)",
            paddingTop: "env(safe-area-inset-top)",
          }}
        >
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
            <Link href="/" onClick={close} className="min-w-0">
              <Logo wordmarkClassName="truncate" />
            </Link>
            <button
              type="button"
              className="touch-manipulation shrink-0 rounded-lg p-2.5 text-slate-500 hover:bg-slate-100"
              onClick={close}
              aria-label="Close navigation"
            >
              <IconClose className="h-6 w-6" />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <nav className="flex flex-col gap-1" aria-label="Primary">
              {SITE_MARKETING_NAV.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className={`rounded-xl px-4 py-3.5 text-base font-medium transition ${
                      active
                        ? "bg-slate-900 text-white shadow-sm"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto border-t border-slate-100 pt-6">
              <Link
                href={RESUME_CHECKER_PATH}
                onClick={close}
                className="btn-gradient flex h-12 w-full items-center justify-center text-sm font-semibold"
              >
                Check resume score free
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 shadow-[0_8px_24px_-12px_rgba(34,197,94,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div
          className="relative mx-auto flex min-h-14 max-w-6xl w-full items-center justify-between gap-3 px-4 py-2 sm:min-h-[4.25rem] sm:px-6 lg:px-8"
          style={{
            paddingLeft: "max(1rem, env(safe-area-inset-left))",
            paddingRight: "max(1rem, env(safe-area-inset-right))",
            paddingTop: "max(0.5rem, env(safe-area-inset-top))",
          }}
        >
          <Link
            href="/"
            aria-label="ResumeIQ home"
            className="relative z-10 min-w-0 shrink-0 transition-opacity hover:opacity-90"
          >
            <Logo wordmarkClassName="truncate max-[360px]:hidden" />
          </Link>

          <nav
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden max-w-[min(100%,calc(100vw-14rem))] -translate-x-1/2 -translate-y-1/2 md:block"
            aria-label="Primary"
          >
            <div className="pointer-events-auto flex max-w-full flex-nowrap items-center justify-center gap-1 overflow-x-auto overscroll-x-contain px-2 py-1">
              {SITE_MARKETING_NAV.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-slate-900 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="relative z-10 flex shrink-0 items-center gap-2">
            <Link
              href={RESUME_CHECKER_PATH}
              className="btn-gradient hidden h-10 whitespace-nowrap px-4 text-sm md:inline-flex"
            >
              Check resume score free
            </Link>
            <button
              type="button"
              className="touch-manipulation rounded-lg p-2.5 text-[#4ade80] hover:bg-brand-50 md:hidden"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Open navigation"
            >
              <IconMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
