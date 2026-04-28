import Image from "next/image";
import Link from "next/link";
import { pageContent } from "@/data/content";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

const heroHeadlineLines = [
  "게임의 첫인상을",
  "설계하는",
  "광고·모션 디자이너"
];

export function Hero() {
  return (
    <section className="section-anchor relative pt-6">
      <Container>
        <div className="surface-card editorial-shell hero-shell overflow-hidden">
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
            className="section-anchor grid gap-12 px-5 py-14 md:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)] md:px-8 md:py-20"
          >
            <div className="md:order-2">
              <p className="eyebrow">
                {site.name} · {site.nameEn}
              </p>
              <h1
                className="headline-display mt-5 max-w-4xl text-[32px] leading-[40px] tracking-[-0.03em] md:text-[56px] md:leading-[63px]"
                aria-label={site.headline}
              >
                {heroHeadlineLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-[24px] tracking-[-0.03em] text-muted md:text-lg md:leading-[28px]">
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
                  href="#advertising-works"
                  className="action-primary px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {pageContent.hero.primaryActionLabel}
                </Link>
                <Link
                  href="#contact"
                  className="action-secondary px-5 py-3 text-sm font-medium transition-colors hover:bg-white/80"
                >
                  {pageContent.hero.secondaryActionLabel}
                </Link>
              </div>
            </div>

            <div className="surface-card editorial-shell hero-reel-shell h-fit md:order-1">
              <div className="hero-reel-frame media-stage mx-auto aspect-[4/5] w-full max-w-[420px] md:max-w-none">
                <Image
                  src="/images/m8s-squad.jpg"
                  alt="M8s Squad"
                  fill
                  className="h-full w-full object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 38vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
