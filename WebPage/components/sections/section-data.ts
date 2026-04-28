import { archiveEntries } from "@/data/archive";
import { projects } from "@/data/projects";

const getArchiveItems = (slugs: string[]) =>
  slugs
    .map((slug) => archiveEntries.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);

export const advertisingProjects = projects.filter(
  (project) => project.slug === "beauty-instastory"
);

export const gameProjects = projects.filter(
  (project) => project.slug === "day6-fangame"
);

export const socialMotionItems = getArchiveItems([
  "scs-instastory-page3",
  "gss-day1-page1",
  "instastory-page2",
  "ggl-day2-page3",
  "bf-instastory-1",
  "cmf-instastory",
  "dhl-page1",
  "flc-instastory"
]);

export const webBannerItems = getArchiveItems([
  "untitled-2",
  "radiant-matte",
  "hyaluponic-set"
]);

export const motionDesignArchiveItems = getArchiveItems([
  "mirae-showreel",
  "unity-vfx-01",
  "blender-camera-motion",
  "magical-girl-transformation"
]);
