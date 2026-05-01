"use client";

import { useEffect, useId, useState } from "react";

type Props = {
  value: number;
  size?: number;
  className?: string;
  scoreLabel?: string;
  showBand?: boolean;
  /** `premium` = enterprise dashboard gradient ring; `analytics` = monochrome. */
  variant?: "default" | "analytics" | "premium";
};

function bandForScore(
  v: number,
  rich: boolean
): { label: string; className: string } {
  if (v >= 80)
    return {
      label: "Strong",
      className: rich
        ? "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200/90"
        : "bg-zinc-100 text-zinc-800 ring-1 ring-zinc-200/90",
    };
  if (v >= 65)
    return {
      label: "Competitive",
      className: rich
        ? "bg-brand-50 text-brand-900 ring-1 ring-brand-200/90"
        : "bg-zinc-100 text-zinc-800 ring-1 ring-zinc-200/90",
    };
  if (v >= 50)
    return {
      label: "Developing",
      className: rich
        ? "bg-amber-50 text-amber-950 ring-1 ring-amber-200/90"
        : "bg-zinc-100 text-zinc-700 ring-1 ring-zinc-200/90",
    };
  return {
    label: "Needs focus",
    className: rich
      ? "bg-rose-50 text-rose-950 ring-1 ring-rose-200/90"
      : "bg-zinc-100 text-zinc-800 ring-1 ring-zinc-200/90",
  };
}

export function CircularAtsScore({
  value,
  size = 200,
  className = "",
  scoreLabel = "ATS",
  showBand = true,
  variant = "default",
}: Props) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  const stroke = Math.max(8, Math.round(size / 22));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const targetOffset = c - (v / 100) * c;

  const [dashOffset, setDashOffset] = useState(c);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => setDashOffset(targetOffset));
    return () => cancelAnimationFrame(id);
  }, [targetOffset]);

  useEffect(() => {
    const duration = 900;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(v * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [v]);

  const uid = useId();
  const gradientId = `score-ring-${uid.replace(/:/g, "")}`;
  const premium = variant === "premium";
  const analytics = variant === "analytics";
  const useGradient = variant === "default" || premium;
  const band = bandForScore(v, premium || !analytics);

  return (
    <div
      className={`relative flex flex-col items-center ${className}`}
      role="img"
      aria-label={`${scoreLabel} score ${v} out of 100`}
    >
      <div className="relative drop-shadow-[0_8px_28px_-6px_rgba(74,222,128,0.28)]">
        <svg
          width={size}
          height={size}
          className={useGradient ? "-rotate-90" : ""}
          style={analytics ? { transform: "rotate(-90deg)" } : undefined}
        >
          {useGradient ? (
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                {premium ? (
                  <>
                    <stop offset="0%" stopColor="#bbf7d0" />
                    <stop offset="34%" stopColor="#86efac" />
                    <stop offset="67%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </>
                ) : (
                  <>
                    <stop
                      offset="0%"
                      stopColor={
                        v >= 75 ? "#10b981" : v >= 50 ? "#4ade80" : "#f59e0b"
                      }
                    />
                    <stop
                      offset="100%"
                      stopColor={
                        v >= 75 ? "#059669" : v >= 50 ? "#22c55e" : "#ea580c"
                      }
                    />
                  </>
                )}
              </linearGradient>
            </defs>
          ) : null}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            className={analytics ? "text-zinc-200" : "text-slate-100"}
            stroke="currentColor"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={useGradient ? `url(#${gradientId})` : "#18181b"}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={dashOffset}
            className="transition-[stroke-dashoffset] duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px] ${
              analytics ? "text-zinc-500" : "text-slate-500"
            }`}
          >
            {scoreLabel}
          </span>
          <span
            className={`mt-1 font-display text-[2.5rem] font-bold tabular-nums leading-none tracking-tight sm:text-5xl ${
              analytics ? "text-zinc-950" : "text-slate-900"
            }`}
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {display}
          </span>
          <span
            className={`mt-1 text-[11px] font-medium ${analytics ? "text-zinc-500" : "text-slate-500"}`}
          >
            out of 100
          </span>
        </div>
      </div>
      {showBand ? (
        <span
          className={`mt-4 rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${band.className}`}
        >
          {band.label}
        </span>
      ) : null}
    </div>
  );
}
