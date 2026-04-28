import { pageContent } from "@/data/content";
import { ArchiveGrid } from "@/components/sections/archive-grid";
import { motionDesignArchiveItems } from "@/components/sections/section-data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function MotionDesignArchive() {
  return (
    <section id="motion-design-archive" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading
          label={pageContent.motionDesignArchive.sectionLabel}
          title={pageContent.motionDesignArchive.sectionTitle}
        />
        <ArchiveGrid items={motionDesignArchiveItems} />
      </Container>
    </section>
  );
}
