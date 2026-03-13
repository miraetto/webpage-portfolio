import { capabilities } from "@/data/site";
import { Container } from "@/components/ui/container";
import { CapabilityCard } from "@/components/ui/capability-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Capabilities() {
  return (
    <section id="capabilities" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading label="Capabilities" title="What I Work With" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </div>
      </Container>
    </section>
  );
}