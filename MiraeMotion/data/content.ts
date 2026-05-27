import type { ArchiveEntry, Capability, Project, SiteData } from "@/types";

export const site: SiteData = {
  name: "신미래",
  nameEn: "Mirae Shin",
  headline: "2D Motion Graphic / Ads Visual Designer",
  intro:
    "브랜드와 콘텐츠가 가진 장면, 무드, 카피를 짧은 영상과 이미지 광고 소재로 풀어내는 작업을 해왔습니다.\nAfter Effects, Photoshop, Illustrator를 중심으로 키비주얼을 다듬고, 텍스트 모션과 컷 편집을 더해 모바일 환경에서 빠르게 읽히는 화면을 만듭니다.",
  email: "miraetto@gmail.com",
  itchUrl: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
  keywords: [
    "2D Motion Graphic",
    "Short-form Motion Ads",
    "PV / Teaser",
    "Ads Visual Design",
    "Image Ads",
    "After Effects",
    "Premiere Pro",
    "Photoshop",
    "Illustrator",
    "AI-assisted Study",
    "3D Basic"
  ],
  navItems: [
    { href: "#advertising-works", label: "Selected" },
    { href: "#social-motion", label: "Motion Ads" },
    { href: "#game-marketing", label: "PV / Teaser" },
    { href: "#web-banner", label: "Image Ads" },
    { href: "#motion-design-archive", label: "Studies" },
    { href: "#skills-about", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ]
};

export const capabilities: Capability[] = [
  {
    title: "2D Motion Graphic",
    description:
      "After Effects를 중심으로 이미지, 타이포, 키비주얼을 짧은 모션 광고 형태로 구성합니다.",
    tools: ["After Effects", "text motion", "key visual motion", "short-form edit"]
  },
  {
    title: "PV / Teaser Video",
    description:
      "프로젝트의 분위기와 핵심 장면을 짧은 티저 흐름으로 정리하고, 컷 전환과 텍스트 타이밍을 맞춥니다.",
    tools: ["After Effects", "Premiere Pro", "teaser edit", "story pacing"]
  },
  {
    title: "Ads Visual Design",
    description:
      "광고 목적에 맞게 이미지, 카피, 레이아웃을 정리하고 모바일 화면에서 먼저 보여야 할 요소를 잡습니다.",
    tools: ["Photoshop", "Illustrator", "key visual", "campaign visual"]
  },
  {
    title: "Image Ads / Banner Design",
    description:
      "작은 광고 영역 안에서도 핵심 이미지, 문구, CTA가 빠르게 보이도록 배너형 소재를 제작합니다.",
    tools: ["image ads", "banner design", "layout design", "SNS creative"]
  },
  {
    title: "Compositing / VFX Basic",
    description:
      "이미지 보정, 합성, 간단한 이펙트를 활용해 영상의 분위기와 전환감을 보완합니다.",
    tools: ["Photoshop", "After Effects", "compositing", "VFX basic"]
  },
  {
    title: "AI-assisted Study / 3D Basic",
    description:
      "AI와 3D 툴은 보조 실험 영역으로 활용하며, 필요한 장면 표현과 아이디어 탐색에 적용하고 있습니다.",
    tools: ["AI-assisted study", "Blender basic", "3D camera motion", "visual exploration"]
  }
];

export const projects: Project[] = [
  {
    slug: "beauty-instastory",
    title: "키비주얼 중심의 숏폼 모션 콘텐츠",
    titleEn: "Short-form Motion Ads",
    type: "2D Motion Graphic / Vertical Ads",
    description:
      "인스타그램 스토리 포맷에 맞춘 세로형 모션그래픽 광고 콘텐츠를 제작했습니다.",
    details: [
      {
        label: "Brief",
        value: "9:16 모바일 화면에 맞춰 제품 이미지와 카피가 먼저 보이도록 배치하고, 텍스트와 그래픽 요소에 작은 움직임을 더한 짧은 광고 영상입니다."
      },
      {
        label: "Role",
        value: "키비주얼 구성, 이미지 편집, 제품·그래픽 요소 배치, 텍스트 모션, 은은한 효과 적용"
      },
      {
        label: "Deliverables",
        value: "Vertical motion ads, social media creatives, key visual variations"
      },
      {
        label: "Design Focus",
        value:
          "강한 전환보다 제품의 분위기와 브랜드 톤이 부드럽게 드러나도록 움직임의 크기, 속도, 여백을 조정했습니다. 텍스트와 그래픽 요소는 제품을 방해하지 않으면서 화면에 생기를 더하는 방향으로 구성했습니다."
      },
      {
        label: "Tools",
        value: "Photoshop, Illustrator, After Effects"
      }
    ],
    tools: ["Photoshop", "Illustrator", "After Effects"],
    mediaType: "video",
    mediaSrc: "/videos/scs-instastory-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "day6-fangame",
    title: "PV / 티저 영상 케이스",
    titleEn: "PV / Teaser Video",
    type: "IP-inspired Teaser / Side Project",
    description:
      "직접 만든 2D 프로젝트를 짧은 티저 영상과 홍보 비주얼로 정리했습니다.",
    details: [
      {
        label: "Brief",
        value: "픽셀 캐릭터와 우주 배경을 활용한 개인 프로젝트를 짧은 홍보용 티저로 소개했습니다."
      },
      {
        label: "Role",
        value: "개인 프로젝트 기획·제작, 티저 영상 편집, SNS 홍보 비주얼 제작"
      },
      {
        label: "Deliverables",
        value: "Promotional teaser video, itch.io project page, SNS promotion posts"
      },
      {
        label: "Result",
        value: "일일 방문자 1,000명 달성"
      },
      {
        label: "Design Focus",
        value:
          "캐릭터, 배경, 전환 장면을 중심으로 프로젝트의 분위기가 빠르게 전달되도록 컷 흐름과 텍스트 타이밍을 맞췄습니다."
      },
      {
        label: "Tools",
        value: "Photoshop, After Effects, Godot"
      }
    ],
    tools: ["Photoshop", "After Effects", "Godot"],
    href: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
    ctaLabel: "View Teaser Side Project",
    mediaType: "video",
    mediaSrc: "/videos/day6-teaser.mp4",
    aspectRatio: "landscape"
  }
];

export const archiveEntries: ArchiveEntry[] = [
  {
    slug: "mirae-showreel",
    title: "Motion / Ads Design Reel",
    description: "Selected motion and visual design works",
    category: "Showreel",
    mediaType: "video",
    src: "/videos/mirae-showreel.mp4",
    aspectRatio: "landscape",
    contribution: "90%"
  },
  {
    slug: "day6-teaser",
    title: "PV / Teaser Video",
    description: "After Effects + side project footage",
    category: "PV / Teaser",
    mediaType: "video",
    src: "/videos/day6-teaser.mp4",
    posterSrc: "/images/game.webp",
    aspectRatio: "portrait"
  },
  {
    slug: "bf-instastory-1",
    title: "Key Visual Motion Ad",
    description: "Illustrator + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/bf-instastory-1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "cmf-instastory",
    title: "Infographic Motion Ad",
    description: "Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/cmf-instastory03.mp4",
    aspectRatio: "portrait",
    contribution: "80%"
  },
  {
    slug: "dhl-page1",
    title: "Text Motion Ad",
    description: "Illustrator + Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/dhl-page1.mp4",
    aspectRatio: "portrait",
    contribution: "70%"
  },
  {
    slug: "flc-instastory",
    title: "Product Text Motion Ad",
    description: "Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/flc-instastory-1.mp4",
    aspectRatio: "portrait",
    contribution: "70%"
  },
  {
    slug: "ggl-day2-page3",
    title: "Key Visual Short-form Motion",
    description: "Illustrator + Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/ggl-day2-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "gss-day1-page1",
    title: "Product Key Visual Motion",
    description: "Illustrator + Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/gss-day1-page1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "instastory-page2",
    title: "Short-form Video Edit",
    description: "Premiere Pro + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/instastory-page2.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "scs-instastory-page3",
    title: "Key Visual Motion Ad",
    description: "Illustrator + Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/scs-instastory-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "cpf-instastory-01",
    title: "Product Motion Ad",
    description: "Illustrator + Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/cpf-instastory-01.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "sneaker-commerce-hero-ui",
    title: "Campaign Hero Visual",
    description: "Photoshop",
    category: "Image Ads",
    mediaType: "image",
    src: "/images/sneaker-commerce-hero-ui.png",
    aspectRatio: "landscape",
    note: "Portfolio concept work. Not an official campaign."
  },
  {
    slug: "untitled-2",
    title: "Animated Banner",
    description: "Illustrator + Photoshop",
    category: "Image Ads / Motion Study",
    mediaType: "video",
    src: "/videos/untitled-2.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "radiant-matte",
    title: "Square Image Ad",
    description: "Photoshop",
    category: "Image Ads",
    mediaType: "image",
    src: "/images/radiant-matte.jpg",
    aspectRatio: "square"
  },
  {
    slug: "hyaluponic-set",
    title: "Image Ad / Hero Visual",
    description: "Photoshop + Illustrator",
    category: "Image Ads",
    mediaType: "image",
    src: "/images/hyaluponic-set.png",
    aspectRatio: "landscape"
  },
  {
    slug: "m8s-squad",
    title: "Character-inspired Visual Study",
    description: "AI-assisted concept study + Photoshop",
    category: "Character Visual",
    mediaType: "image",
    src: "/images/m8s-squad.jpg",
    aspectRatio: "portrait",
    note: "Personal concept study using AI-assisted image exploration and Photoshop editing."
  },
  {
    slug: "magical-girl-transformation",
    title: "3D Motion Study",
    description: "Blender + After Effects",
    category: "3D Basic",
    mediaType: "video",
    src: "/videos/magical-girl-transformation.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "blender-camera-motion",
    title: "3D Camera Motion Study",
    description: "Blender + After Effects",
    category: "3D Basic",
    mediaType: "video",
    src: "/videos/blender-camera-motion.mkv",
    aspectRatio: "portrait"
  },
  {
    slug: "unity-vfx-01",
    title: "VFX Study",
    description: "Unity VFX test",
    category: "VFX Basic",
    mediaType: "video",
    src: "/videos/unity-vfx-01.mp4",
    aspectRatio: "portrait"
  }
];

export const pageContent = {
  hero: {
    subtitle: "짧은 시간 안에 분위기와 메시지가 읽히는 모션 광고를 만듭니다.",
    primaryActionLabel: "View Works",
    secondaryActionLabel: "Contact",
    badgeLabel: "",
    panelLabel: "Approach",
    panelTitle:
      "웹툰 2D 모션그래픽·PV 영상 디자인 지원을 위해 광고·모션 작업과 티저 제작 경험을 하나의 흐름으로 정리했습니다.",
    panelBullets: [
      "숏폼 모션 광고, PV/티저 영상, 이미지 광고 소재를 제작합니다.",
      "캐릭터와 콘텐츠의 분위기가 모바일 화면에서 빠르게 전달되도록 비주얼과 움직임을 정리합니다."
    ]
  },
  capabilities: {
    sectionLabel: "Capabilities",
    sectionTitle: "Motion Toolkit"
  },
  projects: {
    sectionLabel: "Projects",
    sectionTitle: "Projects",
    viewProjectLabel: "프로젝트 보기"
  },
  advertisingWorks: {
    sectionLabel: "Selected",
    sectionTitle: "Selected Motion / Ads Work",
    description:
      "정적인 키비주얼에 작은 움직임을 더해 브랜드의 분위기가 자연스럽게 살아나도록 만든 모션 광고 작업입니다. 제품 이미지, 카피, 그래픽 요소가 과하지 않게 어우러지도록 속도와 여백을 조정했습니다."
  },
  socialMotion: {
    sectionLabel: "Motion Ads",
    sectionTitle: "Short-form Motion Ads",
    description:
      "제품 이미지와 카피를 중심으로, 텍스트와 그래픽 요소에 은은한 움직임을 더해 브랜드 무드가 자연스럽게 느껴지도록 만든 숏폼 모션 작업입니다."
  },
  webBanner: {
    sectionLabel: "Image Ads",
    sectionTitle: "Image Ads / Banner Design",
    description:
      "작은 영역 안에서도 브랜드 이미지, 핵심 문구, CTA가 먼저 보이도록 정리한 이미지 광고와 배너 작업입니다."
  },
  gameMarketing: {
    sectionLabel: "PV",
    sectionTitle: "PV / Teaser Video",
    description:
      "직접 만든 2D 프로젝트를 짧은 티저 영상과 홍보 비주얼로 정리한 케이스입니다.",
    placeholderTitle: "PV / 티저 케이스 준비 중",
    placeholderDescription:
      "웹툰·캐릭터 IP를 가정한 PV, 키비주얼, 숏폼 모션 구성을 정리할 예정입니다."
  },
  motionDesignArchive: {
    sectionLabel: "Studies",
    sectionTitle: "Motion / VFX / 3D Studies",
    description:
      "모션 광고 작업에 응용할 수 있는 쇼릴, 3D 카메라 모션, VFX, AI 보조 비주얼 테스트입니다."
  },
  skillsAbout: {
    sectionLabel: "Skills",
    sectionTitle: "Skills"
  },
  gameSideProject: {
    sectionLabel: "Side Project",
    sectionTitle: "PV Side Project"
  },
  archive: {
    sectionLabel: "Studies",
    sectionTitle: "Video Studies"
  },
  contact: {
    sectionLabel: "Contact",
    sectionTitle: "함께 만들 이야기가 있다면",
    description: "2D Motion Graphic · PV / Teaser · Ads Visual Design",
    supportText:
      "2D Motion Graphic · Short-form Motion Ads · PV / Teaser · Image Ads"
  },
  notFound: {
    codeLabel: "404",
    title: "페이지를 찾을 수 없습니다.",
    description:
      "주소가 변경되었거나 잘못된 링크일 수 있습니다. 메인 페이지에서 다시 작업을 확인해보세요.",
    actionLabel: "메인으로 돌아가기"
  }
} as const;

export const metadataContent = {
  defaultTitle: "신미래 | 2D Motion Graphic / Ads Visual Portfolio",
  titleTemplate: "%s | 신미래 포트폴리오",
  description:
    "짧은 모션 광고, PV/티저 영상, 이미지 광고 작업을 정리한 신미래의 포트폴리오.",
  openGraphDescription:
    "2D 모션그래픽, PV/티저 영상, 숏폼 모션 광고, 이미지 광고 작업을 담은 포트폴리오.",
  siteName: "신미래 포트폴리오",
  openGraphImageAlt: "신미래 2D 모션그래픽 및 광고 비주얼 포트폴리오 대표 이미지"
} as const;

export const manifestContent = {
  name: "신미래 포트폴리오",
  shortName: "Mirae",
  description: "2D 모션그래픽·광고 비주얼 디자이너 신미래의 포트폴리오"
} as const;
