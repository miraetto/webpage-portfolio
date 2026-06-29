import { AdvertisingWorks } from "@/components/sections/advertising-works";
import { Contact } from "@/components/sections/contact";
import { GameMarketingSpec } from "@/components/sections/game-marketing-spec";
import { Hero } from "@/components/sections/hero";
import { MotionDesignArchive } from "@/components/sections/motion-design-archive";
import { SiteHeader } from "@/components/sections/site-header";
import { SkillsAbout } from "@/components/sections/skills-about";
import { SocialMotion } from "@/components/sections/social-motion";
import { WebBannerSection } from "@/components/sections/web-banner-section";

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip bg-obsidian text-ivory">
      <SiteHeader />
      <Hero />
      <AdvertisingWorks />
      <WebBannerSection />
      <SocialMotion />
      <GameMarketingSpec />
      <MotionDesignArchive />
      <SkillsAbout />
      <Contact />
    </main>
  );
}
