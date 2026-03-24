import Link from "next/link";
import { pageContent } from "@/data/content";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

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
            className="section-anchor grid gap-12 px-5 py-14 md:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] md:px-8 md:py-20"
          >
            <div>
              <p className="eyebrow">
                {site.name} · {site.nameEn}
              </p>
              <h1 className="headline-display mt-5 max-w-4xl text-4xl md:text-6xl">
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

            <div className="surface-card editorial-shell hero-reel-shell h-fit">
              <span className="gel-badge floating-gel-badge">Show Reel</span>
              <div className="hero-reel-frame media-stage aspect-video">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/mirae-showreel.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
