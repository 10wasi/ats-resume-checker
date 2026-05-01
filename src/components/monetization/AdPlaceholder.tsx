"use client";

type Props = {
  label?: string;
  className?: string;
};

export function AdPlaceholder({
  label = "Display ad slot (reserved)",
  className = "",
}: Props) {
  return (
    <div
      className={`mx-auto flex max-w-6xl justify-center px-4 sm:px-6 lg:px-8 ${className}`}
      role="complementary"
      aria-label="Advertisement space"
    >
      <div className="flex min-h-[4.5rem] w-full max-w-4xl items-center justify-center rounded-xl border border-dashed border-slate-200/70 bg-slate-50/80 text-center text-[11px] font-medium leading-snug tracking-wide text-slate-400">
        {label}
      </div>
    </div>
  );
}
