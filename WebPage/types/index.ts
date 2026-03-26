export type NavItem = {
  href: string;
  label: string;
};

export type Capability = {
  title: string;
  description: string;
  tools: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  href?: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  posterSrc?: string;
  aspectRatio?: "landscape" | "portrait";
};

export type ArchiveEntry = {
  slug: string;
  title: string;
  description?: string;
  category: string;
  mediaType: "image" | "video";
  src: string;
  posterSrc?: string;
  aspectRatio?: "landscape" | "portrait";
};

export type SiteData = {
  name: string;
  nameEn: string;
  headline: string;
  intro: string;
  about: string;
  highlight: string;
  email: string;
  itchUrl?: string;
  keywords: string[];
  navItems: NavItem[];
};
