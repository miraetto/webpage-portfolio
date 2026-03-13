import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="section-anchor relative pt-6">
      <Container>
        <div className="surface-card overflow-hidden">
          <header className="border-b border-black/10 px-5 py-4 md:px-8">
            <div className="flex items-center justify-between gap-6">
              <Link href="#hero" className="text-sm font-medium tracking-[0.08em]">
                {site.nameEn}
              </Link>
              <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
                {site.navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-70">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <nav className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
              {site.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-xl border border-black/10 bg-white/70 px-3 py-1.5 text-sm text-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <div
            id="hero"
            className="section-anchor grid gap-12 px-5 py-14 md:grid-cols-[minmax(0,1.2fr)_320px] md:px-8 md:py-20"
          >
            <div>
              <p className="eyebrow">
                {site.name} · {site.nameEn}
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
                {site.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
                {site.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {site.keywords.map((keyword) => (
                  <span key={keyword} className="tag-pill">
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  프로젝트 보기
                </Link>
                <Link
                  href="#contact"
                  className="rounded-xl border border-black/10 px-5 py-3 text-sm font-medium transition-colors hover:bg-white/70"
                >
                  연락하기
                </Link>
              </div>
            </div>

            <aside className="surface-card h-fit p-6 md:p-7">
              <p className="eyebrow">Approach</p>
              <p className="mt-4 text-lg font-medium leading-8">
                시각적 감각을 구조화하고, 작업 시스템으로 연결해 결과물의 밀도를 높입니다.
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-muted">
                <li>디자인과 모션 감각을 바탕으로 메시지를 정리합니다.</li>
                <li>AI와 실시간 엔진을 활용해 제작 흐름을 확장합니다.</li>
              </ul>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}