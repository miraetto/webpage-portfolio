import { archiveEntries as rawArchiveEntries } from "@/data/content";
import type { ArchiveEntry } from "@/types";

const CATEGORY_BY_SLUG: Record<string, ArchiveEntry["category"]> = {
  "mirae-showreel": "Showreel",
  "day6-teaser": "PV / Teaser",
  "bf-instastory-1": "Short-form Motion Ads",
  "cmf-instastory": "Short-form Motion Ads",
  "dhl-page1": "Short-form Motion Ads",
  "flc-instastory": "Short-form Motion Ads",
  "ggl-day2-page3": "Short-form Motion Ads",
  "gss-day1-page1": "Short-form Motion Ads",
  "instastory-page2": "Short-form Motion Ads",
  "scs-instastory-page3": "Short-form Motion Ads",
  "cpf-instastory-01": "Short-form Motion Ads",
  "sneaker-commerce-hero-ui": "Image Ads",
  "untitled-2": "Short-form Motion Ads",
  "radiant-matte": "Image Ads",
  "hyaluponic-set": "Image Ads",
  "m8s-squad": "Character Visual",
  "magical-girl-transformation": "3D Basic",
  "blender-camera-motion": "3D Basic",
  "unity-vfx-01": "VFX Basic"
};

const PRIORITY_ORDER = [
  "mirae-showreel",
  "scs-instastory-page3",
  "cpf-instastory-01",
  "gss-day1-page1",
  "instastory-page2",
  "day6-teaser",
  "hyaluponic-set",
  "radiant-matte",
  "blender-camera-motion"
] as const;

const PRIORITY_INDEX = new Map<string, number>(
  PRIORITY_ORDER.map((slug, index) => [slug, index] as const)
);

export const archiveEntries: ArchiveEntry[] = rawArchiveEntries
  .map((item, index) => ({
    ...item,
    category: CATEGORY_BY_SLUG[item.slug] ?? item.category,
    posterSrc: undefined,
    originalIndex: index
  }))
  .sort((a, b) => {
    const aPriority = PRIORITY_INDEX.get(a.slug);
    const bPriority = PRIORITY_INDEX.get(b.slug);

    if (aPriority !== undefined && bPriority !== undefined) {
      return aPriority - bPriority;
    }

    if (aPriority !== undefined) {
      return -1;
    }

    if (bPriority !== undefined) {
      return 1;
    }

    return a.originalIndex - b.originalIndex;
  })
  .map(({ originalIndex, ...item }) => item);
