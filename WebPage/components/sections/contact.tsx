import Link from "next/link";
import { pageContent } from "@/data/content";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Contact() {
  return (
    <section id="contact" className="section-anchor py-20 md:py-28">
      <Container>
        <div className="surface-card px-5 py-12 md:px-8 md:py-14">
          <p className="eyebrow">{pageContent.contact.sectionLabel}</p>
          <h2 className="headline-display mt-3 text-[2rem] md:text-[3.2rem]">
            {pageContent.contact.sectionTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
            {pageContent.contact.description}
          </p>

          <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <Link
                href={`mailto:${site.email}`}
                className="block text-2xl font-semibold tracking-[-0.03em] transition-opacity hover:opacity-70 md:text-4xl"
              >
                {site.email}
              </Link>

              {site.itchUrl ? (
                <Link
                  href={site.itchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-xl border border-black/10 px-4 py-2 text-sm text-muted transition-colors hover:bg-white/70"
                >
                  {pageContent.contact.projectLinkLabel}
                </Link>
              ) : null}
            </div>

            <p className="max-w-sm text-sm leading-6 text-muted">
              {pageContent.contact.supportText}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
