import type { ArchiveEntry, Capability, Project, SiteData } from "@/types";

export const site: SiteData = {
  name: "신미래",
  nameEn: "Mirae Shin",
  headline: "감각을 시스템으로 바꾸는 크리에이터",
  intro:
    "그래픽 디자인과 모션을 기반으로, AI·3D·실시간 엔진을 연결해 더 효율적이고 완성도 높은 제작 흐름을 만듭니다.",
  about:
    "그래픽과 모션 경험을 바탕으로, AI와 3D, 실시간 엔진을 연결한 작업 흐름을 설계합니다.",
  highlight:
    "그래픽 및 영상 디자인 경험을 바탕으로, AI와 3D, 실시간 엔진을 제작 과정에 자연스럽게 연결해왔습니다. Adobe 기반의 시각 콘텐츠 제작 경험 위에 Unity, Godot, Blender 등으로 작업 영역을 넓혀왔으며, 반복적인 작업을 줄이고 더 나은 결과를 만드는 흐름을 설계하는 일을 좋아합니다.",
  email: "miraetto@gmail.com",
  itchUrl: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
  keywords: [
    "Graphic Design",
    "Motion",
    "AI Workflow",
    "3D",
    "Unity",
    "Godot"
  ],
  navItems: [
    { href: "#about", label: "소개" },
    { href: "#capabilities", label: "역량" },
    { href: "#projects", label: "프로젝트" },
    { href: "#archive", label: "아카이브" },
    { href: "#contact", label: "연락" }
  ]
};

export const capabilities: Capability[] = [
  {
    title: "Visual",
    description: "브랜드와 화면의 첫 인상을 세밀하게 설계합니다.",
    tools: ["Photoshop", "Illustrator", "ComfyUI"]
  },
  {
    title: "Motion",
    description: "짧은 시간 안에서도 메시지가 선명하게 전달되도록 리듬을 만듭니다.",
    tools: ["Premiere Pro", "After Effects"]
  },
  {
    title: "Realtime",
    description: "실시간 엔진으로 경험을 더 입체적이고 상호작용적으로 확장합니다.",
    tools: ["Unity", "Godot"]
  },
  {
    title: "3D / Workflow",
    description: "3D와 AI를 제작 파이프라인에 연결해 반복을 줄이고 완성도를 높입니다.",
    tools: ["Blender", "AI-assisted production"]
  }
];

export const projects: Project[] = [
  {
    slug: "day6-fangame",
    title: "2D게임 프로토타입 및 티저 제작",
    description:
      "밴드 DAY6를 모티브로 한 2D 픽셀 플랫포머 팬게임을 제작했습니다. 게임 제작뿐 아니라 티저 영상도 직접 제작해, 기획부터 홍보까지 하나의 톤으로 연결했습니다.",
    tools: ["Godot", "SORA", "Photoshop", "After Effects"],
    href: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
    mediaType: "video",
    mediaSrc: "/videos/day6-teaser.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "beauty-instastory",
    title: "뷰티 브랜드 인스타스토리 모션",
    description:
      "인스타스토리 포맷에 맞춘 짧은 모션그래픽 콘텐츠를 제작했습니다. 제한된 시간 안에서 제품의 인상과 메시지가 분명하게 전달되도록 화면 구성과 리듬을 설계했습니다.",
    tools: ["Photoshop", "After Effects", "ChatGPT"],
    mediaType: "video",
    mediaSrc: "/videos/scs-instastory-page3.mp4",
    aspectRatio: "portrait"
  }
];

export const archiveEntries: ArchiveEntry[] = [
  {
    slug: "day6-teaser",
    title: "Game Teaser",
    description: "Sora + Godot + After Effects",
    category: "티저",
    mediaType: "video",
    src: "/videos/day6-teaser.mp4",
    posterSrc: "/images/game.webp",
    aspectRatio: "portrait"
  },
  {
    slug: "bf-instastory-1",
    title: "인스타스토리 디자인 / 모션그래픽",
    description: "Illustrator + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/bf-instastory-1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "cmf-instastory",
    title: "인스타스토리 디자인 / 인포그래픽 / 제품 촬영·보정",
    description: "Photoshop + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/cmf-instastory03.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "dhl-page1",
    title: "인스타스토리 디자인 / 텍스트이펙트 / 모델 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/dhl-page1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "flc-instastory",
    title: "인스타스토리 디자인 / 텍스트이펙트 / 제품 촬영·보정",
    description: "Photoshop + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/flc-instastory-1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "ggl-day2-page3",
    title: "인스타스토리 디자인 / 모션그래픽 / 모델 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "소셜 모션",
    mediaType: "video",
    src: "/videos/ggl-day2-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "gss-day1-page1",
    title: "인스타스토리 디자인 / 모션그래픽 / 제품 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "소셜 모션",
    mediaType: "video",
    src: "/videos/gss-day1-page1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "instastory-page2",
    title: "영상 기획 / 촬영·보정 / 편집",
    description: "Premiere Pro + After Effects",
    category: "소셜 모션",
    mediaType: "video",
    src: "/videos/instastory-page2.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "scs-instastory-page3",
    title: "인스타스토리 디자인 / AI 이미지 편집 / 모션그래픽 / 제품 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "소셜 모션",
    mediaType: "video",
    src: "/videos/scs-instastory-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "untitled-2",
    title: "웹 배너 디자인",
    description: "Illustrator + Photoshop",
    category: "모션 스터디",
    mediaType: "video",
    src: "/videos/untitled-2.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "magical-girl-transformation",
    title: "Blender 시퀀스",
    description: "Blender + After Effects",
    category: "실험 영상",
    mediaType: "video",
    src: "/videos/magical-girl-transformation.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "blender-camera-motion",
    title: "Blender 카메라 모션",
    description: "Blender + After Effects",
    category: "3D 모션",
    mediaType: "video",
    src: "/videos/blender-camera-motion.mkv",
    aspectRatio: "portrait"
  },
  {
    slug: "unity-vfx-01",
    title: "Unity VFX",
    description: "Unity",
    category: "VFX",
    mediaType: "video",
    src: "/videos/unity-vfx-01.mp4",
    aspectRatio: "portrait"
  }
];

export const pageContent = {
  hero: {
    primaryActionLabel: "프로젝트 보기",
    secondaryActionLabel: "연락하기",
    panelLabel: "Approach",
    panelTitle:
      "시각적 감각을 구조화하고, 작업 시스템으로 연결해 결과물의 밀도를 높입니다.",
    panelBullets: [
      "디자인과 모션 감각을 바탕으로 메시지를 정리합니다.",
      "AI와 실시간 엔진을 활용해 제작 흐름을 확장합니다."
    ]
  },
  about: {
    sectionLabel: "About",
    sectionTitle: "그래픽에서 실시간까지, 하나의 흐름",
    imageAlt: "신미래 포트폴리오 소개 이미지"
  },
  capabilities: {
    sectionLabel: "Capabilities",
    sectionTitle: "What I Work With"
  },
  projects: {
    sectionLabel: "Projects",
    sectionTitle: "Projects",
    viewProjectLabel: "프로젝트 보기"
  },
  archive: {
    sectionLabel: "Archive",
    sectionTitle: "Video Archive"
  },
  contact: {
    sectionLabel: "Contact",
    sectionTitle: "함께 만들 이야기가 있다면",
    description: "협업, 프로젝트, 포트폴리오 문의는 아래 이메일로 연락해주세요.",
    projectLinkLabel: "대표 프로젝트 링크 보기",
    supportText:
      "Graphic Design, Motion, AI Workflow, 3D, Realtime Engine 기반의 협업을 환영합니다."
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
  defaultTitle: "신미래 | 감각을 시스템으로 바꾸는 크리에이터",
  titleTemplate: "%s | 신미래 포트폴리오",
  description:
    "그래픽 디자인, 모션, AI, 3D, Unity, Godot 경험을 바탕으로 감각을 제작 시스템으로 연결하는 신미래의 포트폴리오.",
  openGraphDescription:
    "그래픽 디자인, 모션, AI, 3D, Unity, Godot 경험을 연결한 개인 포트폴리오.",
  siteName: "신미래 포트폴리오",
  openGraphImageAlt: "신미래 포트폴리오 대표 이미지"
} as const;

export const manifestContent = {
  name: "신미래 포트폴리오",
  shortName: "Mirae",
  description: "감각을 시스템으로 바꾸는 크리에이터 신미래의 포트폴리오"
} as const;
