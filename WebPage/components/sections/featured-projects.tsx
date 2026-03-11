import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Projects"
          title="Selected Motion Projects"
          description="대표 작업은 영상 중심으로 배치해, 기획부터 제작과 전달까지의 흐름이 바로 보이도록 구성했습니다."
        />
        <div className="mt-12 space-y-8 md:space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}