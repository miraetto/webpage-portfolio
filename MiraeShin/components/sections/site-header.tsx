import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="#hero" className="brand-mark" aria-label="Mirae Shin home">
          Mirae Shin
        </Link>
        <nav className="no-scrollbar flex max-w-[72vw] items-center gap-1 overflow-x-auto md:max-w-none md:gap-2">
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
