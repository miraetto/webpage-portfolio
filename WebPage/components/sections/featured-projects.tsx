import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading label="Projects" title="Selected Motion Projects" />
        <div className="mt-12 space-y-8 md:space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}