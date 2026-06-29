import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="flex flex-col items-start gap-2 py-3 md:flex-row md:items-center md:justify-between md:gap-4">
        <Link href="#hero" className="brand-mark" aria-label="Mirae Shin home">
          Mirae Shin
        </Link>
        <nav className="flex w-full max-w-full flex-wrap items-center gap-1 md:w-auto md:max-w-none md:flex-nowrap md:gap-2">
          {site.navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
