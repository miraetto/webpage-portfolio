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
  titleEn?: string;
  type?: string;
  description: string;
  details?: Array<{
    label: string;
    value: string;
  }>;
  tools: string[];
  href?: string;
  ctaLabel?: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  posterSrc?: string;
  aspectRatio?: "landscape" | "portrait" | "square";
};

export type ArchiveEntry = {
  slug: string;
  title: string;
  description?: string;
  category: string;
  mediaType: "image" | "video";
  src: string;
  posterSrc?: string;
  aspectRatio?: "landscape" | "portrait" | "square";
  contribution?: string;
  note?: string;
};

export type SiteData = {
  name: string;
  nameEn: string;
  headline: string;
  intro: string;
  email: string;
  itchUrl?: string;
  keywords: string[];
  navItems: NavItem[];
};
