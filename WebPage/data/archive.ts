import { archiveEntries as rawArchiveEntries } from "@/data/content";
import type { ArchiveEntry } from "@/types";

const CATEGORY_BY_SLUG: Record<string, ArchiveEntry["category"]> = {
  "day6-teaser": "게임 티저",
  "bf-instastory-1": "소셜 모션",
  "cmf-instastory": "소셜 모션",
  "dhl-page1": "소셜 모션",
  "flc-instastory": "소셜 모션",
  "ggl-day2-page3": "소셜 모션",
  "gss-day1-page1": "소셜 모션",
  "instastory-page2": "소셜 모션",
  "scs-instastory-page3": "소셜 모션",
  "untitled-2": "소셜 모션",
  "magical-girl-transformation": "3D 모션",
  "blender-camera-motion": "3D 모션",
  "unity-vfx-01": "VFX"
};

export const archiveEntries: ArchiveEntry[] = rawArchiveEntries.map((item) => ({
  ...item,
  category: CATEGORY_BY_SLUG[item.slug] ?? item.category,
  posterSrc: undefined
}));
