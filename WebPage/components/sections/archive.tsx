import { archiveEntries } from "@/data/archive";
import { Container } from "@/components/ui/container";
import { ArchiveItem } from "@/components/ui/archive-item";
import { SectionHeading } from "@/components/ui/section-heading";

export function Archive() {
  return (
    <section id="archive" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading label="Archive" title="Video Archive" />
        <div className="mt-12 grid items-start grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {archiveEntries.map((item) => (
            <ArchiveItem key={item.slug} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}