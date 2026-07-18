import { IconShield } from "@/components/ui/Icons";

const BADGES = [
  { label: "Free to start", detail: "No signup for first check" },
  { label: "Parse-tested", detail: "Real PDF/DOCX extraction" },
  { label: "Transparent scoring", detail: "Methodology published" },
  { label: "Privacy-first", detail: "See privacy policy" },
] as const;

export function TrustBadgesStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`not-prose grid gap-3 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
      aria-label="Trust signals"
    >
      {BADGES.map((b) => (
        <div
          key={b.label}
          className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3"
        >
          <IconShield className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
          <div>
            <p className="text-xs font-bold text-slate-900">{b.label}</p>
            <p className="text-xs text-slate-600">{b.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
