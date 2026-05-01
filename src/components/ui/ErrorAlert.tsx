import type { ReactNode } from "react";

type Props = { children: ReactNode };

export function ErrorAlert({ children }: Props) {
  return (
    <div
      className="flex gap-3 rounded-xl border border-red-100 bg-red-50/90 px-4 py-3 text-sm text-red-900 shadow-sm"
      role="alert"
    >
      <span className="mt-0.5 shrink-0 text-red-600" aria-hidden>
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
          />
        </svg>
      </span>
      <div className="min-w-0 leading-relaxed">{children}</div>
    </div>
  );
}
