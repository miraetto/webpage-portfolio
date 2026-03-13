import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Contact() {
  return (
    <section id="contact" className="section-anchor py-20 md:py-28">
      <Container>
        <div className="surface-card px-5 py-12 md:px-8 md:py-14">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            함께 만들 이야기가 있다면
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
            협업, 프로젝트, 포트폴리오 문의는 아래 이메일로 연락해주세요.
          </p>

          <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <Link
                href={`mailto:${site.email}`}
                className="block text-2xl font-semibold tracking-[-0.03em] transition-opacity hover:opacity-70 md:text-4xl"
              >
                {site.email}
              </Link>

              {site.itchUrl ? (
                <Link
                  href={site.itchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-xl border border-black/10 px-4 py-2 text-sm text-muted transition-colors hover:bg-white/70"
                >
                  대표 프로젝트 링크 보기
                </Link>
              ) : null}
            </div>

            <p className="max-w-sm text-sm leading-6 text-muted">
              Graphic Design, Motion, AI Workflow, 3D, Realtime Engine 기반의 협업을 환영합니다.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}