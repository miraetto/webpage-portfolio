import { pageContent } from "@/data/content";
import { archiveEntries } from "@/data/archive";
import { Container } from "@/components/ui/container";
import { ArchiveGallery } from "@/components/sections/archive-gallery";
import { SectionHeading } from "@/components/ui/section-heading";

export function Archive() {
  return (
    <section id="archive" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading
          label={pageContent.archive.sectionLabel}
          title={pageContent.archive.sectionTitle}
        />
        <ArchiveGallery items={archiveEntries} />
      </Container>
    </section>
  );
}
