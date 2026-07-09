"use client";

import { useEffect, useRef } from "react";

/**
 * Thin progress bar at the top of long articles.
 * Tracks scroll depth relative to the article element (not the full page).
 * Uses a ref-based approach — no global state, minimal re-renders.
 */
export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    function onScroll() {
      const article = document.querySelector("article");
      if (!article || !bar) return;

      const { top, height } = article.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = Math.max(0, -top);
      const total = Math.max(1, height - windowHeight);
      const pct = Math.min(100, Math.round((scrolled / total) * 100));
      bar.style.width = `${pct}%`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed left-0 top-0 z-50 h-[3px] w-full bg-slate-100"
    >
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-emerald-500 to-emerald-400 transition-[width] duration-75"
      />
    </div>
  );
}
