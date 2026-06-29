import { archiveEntries } from "@/data/archive";
import { projects } from "@/data/projects";

const getArchiveItems = (slugs: string[]) =>
  slugs
    .map((slug) => archiveEntries.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);

const getProjectItems = (slugs: string[]) =>
  slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

export const advertisingProjects = projects.filter(
  (project) =>
    project.slug === "beauty-instastory" ||
    project.slug === "commerce-image-ad-set" ||
    project.slug === "weasy-concept-film"
);

export const gameProjects = getProjectItems([
  "babttori-web-service",
  "day6-fangame"
]);

export const socialMotionItems = getArchiveItems([
  "cpf-instastory-01",
  "gss-day1-page1",
  "instastory-page2",
  "ggl-day2-page3",
  "bf-instastory-1",
  "cmf-instastory",
  "dhl-page1",
  "flc-instastory",
  "untitled-2"
]);

export const webBannerItems = getArchiveItems([
  "hyaluponic-set",
  "radiant-matte",
  "sneaker-commerce-hero-ui"
]);

export const motionDesignArchiveItems = getArchiveItems([
  "mirae-showreel",
  "blender-camera-motion",
  "unity-vfx-01"
]);
