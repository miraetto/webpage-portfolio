import { site } from "@/data/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section-anchor py-20 md:py-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] md:items-start">
          <SectionHeading
            label="About"
            title="감각을 결과로 연결하는 방식"
            description={site.about}
          />

          <div className="surface-card p-6 md:p-7">
            <p className="eyebrow">Core Note</p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
              {site.highlight}
            </p>
            <div className="mt-6 space-y-4 text-sm leading-6 text-muted md:text-base">
              <p>반복적인 작업은 줄이고, 더 높은 완성도로 이어지는 흐름을 지향합니다.</p>
              <p>툴을 많이 쓰는 것보다, 필요한 도구를 적절하게 연결하는 방식에 집중합니다.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
