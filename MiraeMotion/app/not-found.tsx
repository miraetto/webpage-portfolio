import Link from "next/link";
import { pageContent } from "@/data/content";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-obsidian px-5 text-ivory">
      <section className="surface-card archive-record max-w-xl p-8 text-center">
        <p className="eyebrow">{pageContent.notFound.codeLabel}</p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          {pageContent.notFound.title}
        </h1>
        <p className="mt-4 text-sm leading-6 text-muted md:text-base">
          {pageContent.notFound.description}
        </p>
        <Link href="/" className="action-primary mt-8 inline-flex">
          {pageContent.notFound.actionLabel}
        </Link>
      </section>
    </main>
  );
}
