import { capabilities, pageContent } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsAbout() {
  return (
    <section id="skills-about" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading
          label={pageContent.skillsAbout.sectionLabel}
          title={pageContent.skillsAbout.sectionTitle}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.title} className="surface-card archive-record p-5">
              <p className="text-lg font-semibold text-ivory">{capability.title}</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {capability.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {capability.tools.map((tool) => (
                  <span key={tool} className="tag-pill">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
