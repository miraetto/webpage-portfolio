import Image from "next/image";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading label="About" title="감각을 결과로 연결하는 방식" />
        <div className="mt-12 grid gap-6 md:grid-cols-[minmax(280px,380px)_minmax(0,1fr)] md:items-center">
          <div className="surface-card overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
              <Image
                src="/images/m8s-squad.jpg"
                alt="신미래 포트폴리오 소개 이미지"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 34vw"
                priority
              />
            </div>
          </div>

          <div className="surface-card p-6 md:p-8">
            <p className="text-lg font-medium leading-8 md:text-2xl md:leading-10">
              {site.about}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted md:text-base">
              {site.highlight}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}