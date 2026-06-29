import Link from "next/link";
import { pageContent } from "@/data/content";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Contact() {
  return (
    <section id="contact" className="section-anchor py-20 md:py-28">
      <Container>
        <div className="surface-card archive-record px-5 py-12 md:px-8 md:py-14">
          <p className="eyebrow">{pageContent.contact.sectionLabel}</p>
          <p className="mt-3 max-w-2xl text-base font-normal leading-7 text-muted md:text-lg">
            {pageContent.contact.description}
          </p>

          <div className="mt-10 flex flex-col gap-6 border-t border-gold/15 pt-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <Link
                href={`mailto:${site.email}`}
                className="block text-xl font-semibold text-ivory transition-colors hover:text-gold md:text-3xl"
              >
                {site.email}
              </Link>
            </div>

            <div className="max-w-sm text-left md:text-right">
              <p className="text-xl font-semibold leading-none text-gold md:text-2xl">
                {site.name}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {pageContent.contact.supportText}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
