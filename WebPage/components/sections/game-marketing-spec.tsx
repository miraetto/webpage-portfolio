import { pageContent } from "@/data/content";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { gameProjects } from "@/components/sections/section-data";

export function GameMarketingSpec() {
  return (
    <section id="game-marketing" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading
          label={pageContent.gameMarketing.sectionLabel}
          title={pageContent.gameMarketing.sectionTitle}
        />
        <div className="mt-12 space-y-8 md:space-y-10">
          {gameProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
