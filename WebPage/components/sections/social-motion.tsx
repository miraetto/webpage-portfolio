import { pageContent } from "@/data/content";
import { ArchiveGrid } from "@/components/sections/archive-grid";
import { socialMotionItems } from "@/components/sections/section-data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function SocialMotion() {
  return (
    <section id="social-motion" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading
          label={pageContent.socialMotion.sectionLabel}
          title={pageContent.socialMotion.sectionTitle}
        />
        <ArchiveGrid items={socialMotionItems} />
      </Container>
    </section>
  );
}
