import type { SVGProps } from "react";

type Props = {
  className?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
};

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#4ade80] text-white shadow-[0_4px_16px_-4px_rgba(22,163,74,0.45),0_0_0_1px_rgba(255,255,255,0.25)_inset] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-1/2 w-1/2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 6h14M5 12h9M5 18h6"
          stroke="white"
          strokeWidth={2.4}
          strokeLinecap="round"
        />
        <path
          d="M16 14l2.2 2.2L23 12"
          stroke="white"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.45),transparent_60%)]" />
    </span>
  );
}

export function Logo({
  className = "",
  showWordmark = true,
  wordmarkClassName = "",
}: Props) {
  return (
    <span
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark />
      {showWordmark && (
        <span
          className={`font-display text-[1.05rem] font-bold tracking-tight text-slate-900 ${wordmarkClassName}`}
        >
          Resume<span className="text-gradient">IQ</span>
        </span>
      )}
    </span>
  );
}

export function IconSpark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zM19 14l.9 2.5 2.5.9-2.5.9L19 21l-.9-2.7-2.5-.9 2.5-.9L19 14z" />
    </svg>
  );
}
