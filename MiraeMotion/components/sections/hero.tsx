import Link from "next/link";
import { pageContent } from "@/data/content";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="hero" className="hero-section section-anchor">
      <Container>
        <div className="hero-content">
          {pageContent.hero.badgeLabel ? (
            <p className="archive-badge">{pageContent.hero.badgeLabel}</p>
          ) : null}
          <p className="eyebrow">
            {site.name} · {site.nameEn}
          </p>
          <h1 className="hero-title">{site.headline}</h1>
          <p className="hero-subtitle">{pageContent.hero.subtitle}</p>
          <p className="hero-copy whitespace-pre-line">{site.intro}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {site.keywords.map((keyword) => (
              <span key={keyword} className="tag-pill">
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#advertising-works" className="action-primary">
              {pageContent.hero.primaryActionLabel}
            </Link>
            <Link href="#contact" className="action-secondary">
              {pageContent.hero.secondaryActionLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
