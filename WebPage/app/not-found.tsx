import Link from "next/link";
import { pageContent } from "@/data/content";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sand px-5 text-ink">
      <div className="surface-card max-w-xl p-8 text-center md:p-10">
        <p className="eyebrow">{pageContent.notFound.codeLabel}</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          {pageContent.notFound.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          {pageContent.notFound.description}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-accent px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          {pageContent.notFound.actionLabel}
        </Link>
      </div>
    </main>
  );
}
