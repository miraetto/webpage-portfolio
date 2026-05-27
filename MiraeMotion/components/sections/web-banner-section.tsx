import { pageContent } from "@/data/content";
import { ArchiveGrid } from "@/components/sections/archive-grid";
import { webBannerItems } from "@/components/sections/section-data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function WebBannerSection() {
  return (
    <section id="web-banner" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading
          label={pageContent.webBanner.sectionLabel}
          title={pageContent.webBanner.sectionTitle}
          description={pageContent.webBanner.description}
        />
        <ArchiveGrid items={webBannerItems} variant="banner" />
      </Container>
    </section>
  );
}
