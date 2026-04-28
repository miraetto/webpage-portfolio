import { AdvertisingWorks } from "@/components/sections/advertising-works";
import { Contact } from "@/components/sections/contact";
import { GameMarketingSpec } from "@/components/sections/game-marketing-spec";
import { Hero } from "@/components/sections/hero";
import { MotionDesignArchive } from "@/components/sections/motion-design-archive";
import { SocialMotion } from "@/components/sections/social-motion";
import { WebBannerSection } from "@/components/sections/web-banner-section";

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip bg-sand text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-glow" />
      <Hero />
      <AdvertisingWorks />
      <SocialMotion />
      <WebBannerSection />
      <GameMarketingSpec />
      <MotionDesignArchive />
      <Contact />
    </main>
  );
}
