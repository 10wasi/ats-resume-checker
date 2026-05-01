import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-mesh"
        aria-hidden
      />
      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center px-4 py-24 text-center">
        <p className="font-display text-6xl font-bold tracking-tight text-gradient">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
          That page doesn&apos;t exist.
        </h1>
        <p className="mt-3 text-slate-600">
          The link might be old, or the page moved. Try the resume checker
          or head back home.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-gradient px-6 text-sm">
            Back to home
          </Link>
          <Link
            href="/resume-checker"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-accent-400 hover:text-accent-500"
          >
            Open resume checker
          </Link>
        </div>
      </div>
    </div>
  );
}
