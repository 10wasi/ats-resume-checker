"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">
        Something went wrong
      </p>
      <h1 className="mt-3 font-display text-2xl font-bold text-slate-900">
        We couldn&apos;t load this page
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {error.message || "An unexpected error occurred. Try again or go back home."}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Try again
        </button>
        <a
          href="/"
          className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          Home
        </a>
      </div>
    </div>
  );
}
