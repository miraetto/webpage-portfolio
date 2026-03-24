import { About } from "@/components/sections/about";
import { Archive } from "@/components/sections/archive";
import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { InterludeMarquee } from "@/components/sections/interlude-marquee";

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip bg-sand text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-glow" />
      <Hero />
      <InterludeMarquee />
      <About />
      <Capabilities />
      <FeaturedProjects />
      <Archive />
      <Contact />
    </main>
  );
}
