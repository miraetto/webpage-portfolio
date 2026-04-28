import { pageContent } from "@/data/content";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { advertisingProjects } from "@/components/sections/section-data";

export function AdvertisingWorks() {
  return (
    <section id="advertising-works" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading
          label={pageContent.advertisingWorks.sectionLabel}
          title={pageContent.advertisingWorks.sectionTitle}
        />
        <div className="mt-12 space-y-8 md:space-y-10">
          {advertisingProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
