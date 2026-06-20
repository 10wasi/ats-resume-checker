"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { IconClose, IconMenu } from "@/components/ui/DashboardIcons";
import {
  RESUME_CHECKER_PATH,
  SITE_MARKETING_NAV,
  SITE_MARKETING_NAV_MOBILE,
} from "@/lib/site-nav";

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  item,
  pathname,
  onClick,
  className = "",
}: {
  item: { href: string; label: string };
  pathname: string;
  onClick?: () => void;
  className?: string;
}) {
  const active = navActive(pathname, item.href);
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
        active
          ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/80"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      } ${className}`}
    >
      {item.label}
    </Link>
  );
}

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
              <Logo />
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
              {SITE_MARKETING_NAV.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  onClick={close}
                  className="px-4 py-3.5 text-base"
                />
              ))}
            </nav>
            <nav
              className="mt-4 flex flex-col gap-1 border-t border-slate-100 pt-4"
              aria-label="More"
            >
              {SITE_MARKETING_NAV_MOBILE.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  onClick={close}
                  className="px-4 py-3 text-base text-slate-600"
                />
              ))}
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

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
        <div
          className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-8"
          style={{
            paddingLeft: "max(1rem, env(safe-area-inset-left))",
            paddingRight: "max(1rem, env(safe-area-inset-right))",
            paddingTop: "max(0px, env(safe-area-inset-top))",
          }}
        >
          <Link
            href="/"
            aria-label="ResumeIQ home"
            className="shrink-0 transition-opacity hover:opacity-90"
          >
            <Logo wordmarkClassName="hidden min-[400px]:inline" />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex"
            aria-label="Primary"
          >
            {SITE_MARKETING_NAV.map((item) => (
              <NavLink key={item.href} item={item} pathname={pathname} />
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
            <Link
              href={RESUME_CHECKER_PATH}
              className="btn-gradient hidden h-9 items-center whitespace-nowrap px-3.5 text-sm font-semibold sm:h-10 sm:px-4 md:inline-flex"
            >
              <span className="hidden lg:inline">Check resume score free</span>
              <span className="lg:hidden">Check free</span>
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
