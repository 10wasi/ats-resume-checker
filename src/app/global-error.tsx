"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-white px-4 font-sans text-slate-900 antialiased"
        suppressHydrationWarning
      >
        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center py-16 text-center">
          <h1 className="text-xl font-bold">ResumeIQ — critical error</h1>
          <p className="mt-4 text-sm text-slate-600">{error.message}</p>
          <button
            type="button"
            onClick={reset}
            className="mx-auto mt-8 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
