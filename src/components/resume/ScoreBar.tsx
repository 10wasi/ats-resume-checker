"use client";

import { useEffect, useState } from "react";

type Props = {
  label: string;
  value: number;
  /** When set, shown on the right instead of `value` (bar still uses `value` 0–100). */
  displayValue?: string;
  className?: string;
  animated?: boolean;
  /** Tighter bars and labels for dense breakdown lists */
  variant?: "default" | "compact";
  /** Monochrome bar (product analytics surfaces). */
  appearance?: "gradient" | "neutral";
};

export function ScoreBar({
  label,
  value,
  displayValue,
  className = "",
  animated = true,
  variant = "default",
  appearance = "gradient",
}: Props) {
  const v = Math.max(0, Math.min(100, value));
  const [width, setWidth] = useState(animated ? 0 : v);

  useEffect(() => {
    if (!animated) {
      setWidth(v);
      return;
    }
    const id = requestAnimationFrame(() => setWidth(v));
    return () => cancelAnimationFrame(id);
  }, [v, animated]);

  let barColor = "bg-gradient-to-r from-amber-500 to-orange-500";
  if (appearance === "neutral") {
    barColor = "bg-zinc-900";
  } else if (v >= 75) barColor = "bg-gradient-to-r from-emerald-500 to-teal-600";
  else if (v >= 50) barColor = "bg-gradient-to-r from-brand-400 to-brand-600";

  const compact = variant === "compact";

  return (
    <div className={className}>
      <div
        className={`flex items-center justify-between gap-2 ${compact ? "text-xs" : "text-sm"}`}
      >
        <span
          className={`font-medium ${appearance === "neutral" ? "text-zinc-600" : "text-slate-600"} ${compact ? "line-clamp-2 sm:line-clamp-none" : ""}`}
        >
          {label}
        </span>
        <span className={`shrink-0 tabular-nums font-semibold ${appearance === "neutral" ? "text-zinc-950" : "text-slate-900"}`}>
          {displayValue ?? v}
        </span>
      </div>
      <div
        className={`mt-1.5 w-full overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/60 ${compact ? "h-1.5" : "h-2"} ${appearance === "neutral" ? "bg-zinc-100 ring-zinc-200/80" : ""}`}
      >
        <div
          className={`h-full rounded-full shadow-sm transition-[width] duration-1000 ease-out ${barColor}`}
          style={{ width: `${width}%` }}
          role="progressbar"
          aria-valuenow={v}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label}
        />
      </div>
    </div>
  );
}
