import type { ArchiveEntry, Capability, Project, SiteData } from "@/types";

export const site: SiteData = {
  name: "신미래",
  nameEn: "Mirae Shin",
  headline: "Game Web/UI Designer",
  intro:
    "광고 그래픽과 게임 화면 사이에서, 플레이어가 마주하는 장면을 설계합니다.\n직접 게임을 제작한 경험을 바탕으로, 보기 좋은 화면을 넘어 플레이하고 싶어지는 비주얼을 고민합니다.",
  email: "miraetto@gmail.com",
  itchUrl: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
  keywords: [
    "Graphic Design",
    "AI Retouching",
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Figma",
    "Godot",
    "Unity"
  ],
  navItems: [
    { href: "#social-motion", label: "Social Motion" },
    { href: "#web-banner", label: "Banners" },
    { href: "#game-marketing", label: "Game Project" },
    { href: "#motion-design-archive", label: "Archive" },
    { href: "#contact", label: "Contact" }
  ]
};

export const capabilities: Capability[] = [
  {
    title: "Graphic / Advertising Design",
    description: "광고 목적에 맞는 이미지 편집, 레이아웃, 키비주얼을 구성합니다.",
    tools: ["Photoshop", "Illustrator", "layout design", "print / outdoor advertising"]
  },
  {
    title: "Web / Digital Design",
    description: "제한된 화면 안에서 CTA와 정보 위계가 빠르게 읽히도록 정리합니다.",
    tools: ["web banner", "DA banner", "SNS creative"]
  },
  {
    title: "Motion / Video",
    description: "짧은 모션 콘텐츠와 티저 영상에서 메시지와 리듬을 조정합니다.",
    tools: ["After Effects", "Premiere Pro", "social motion", "text motion"]
  },
  {
    title: "Game / Interactive",
    description: "직접 만든 게임 프로젝트 경험을 바탕으로 화면 구성과 플레이 흐름을 이해합니다.",
    tools: ["Godot", "Unity", "solo game development"]
  },
  {
    title: "AI / Retouching",
    description: "AI 이미지 워크플로우를 보조적으로 활용해 편집과 보정을 진행합니다.",
    tools: ["AI image workflow", "image retouching", "visual direction", "editing and refinement"]
  }
];

export const projects: Project[] = [
  {
    slug: "beauty-instastory",
    title: "뷰티 브랜드 모션그래픽 콘텐츠",
    titleEn: "Beauty Brand Motion Graphic Contents",
    type: "Social Motion / Beauty Campaign",
    description:
      "인스타그램 스토리 포맷에 맞춘 뷰티 브랜드 모션그래픽 콘텐츠를 제작했습니다.",
    details: [
      {
        label: "Brief",
        value: "인스타그램 스토리 포맷에 맞춘 뷰티 브랜드 모션 광고 콘텐츠 제작"
      },
      {
        label: "Role",
        value: "화면 구성, 이미지 편집, 모션그래픽 제작"
      },
      {
        label: "Deliverables",
        value: "9:16 SNS motion video, product-centered visuals, text motion"
      },
      {
        label: "Design Focus",
        value:
          "짧은 노출 시간 안에서 제품의 매력적인 이미지, 메시지 가독성이 명확하게 보이도록 구성"
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
    title: "인디게임 개발과 티저 영상 제작",
    type: "Game Side Project / Teaser Video / Game Marketing Visual",
    description:
      "밴드 DAY6를 모티브로 한 2D 픽셀 플랫포머 팬게임을 제작했습니다. 게임 제작뿐 아니라 티저 영상도 직접 제작해, 기획부터 홍보까지 하나의 톤으로 연결했습니다.",
    details: [
      {
        label: "Brief",
        value: "1인 인디게임(아이돌밴드 DAY6의 팬게임)을 제작하고 홍보용 티저 영상을 제작"
      },
      {
        label: "Role",
        value: "게임 기획과 제작, 티저 영상 제작, SNS 홍보 게시물 제작"
      },
      {
        label: "Deliverables",
        value: "itch.io game page, promotional teaser video, SNS promotional posts"
      },
      {
        label: "Result",
        value: "일일 방문자 1,000명 달성"
      },
      {
        label: "Design Focus",
        value:
          "DAY6의 캐릭터를 픽셀화한 게임의 비주얼과 우주 배경이라는 내용을 홍보용 티저 영상으로 전달"
      },
      {
        label: "Tools",
        value: "Godot, Photoshop, After Effects, Sora(영상 트랜지션)"
      }
    ],
    tools: ["Godot", "Sora", "Photoshop", "After Effects"],
    href: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
    ctaLabel: "View Game Side Project",
    mediaType: "video",
    mediaSrc: "/videos/day6-teaser.mp4",
    aspectRatio: "landscape"
  }
];

export const archiveEntries: ArchiveEntry[] = [
  {
    slug: "mirae-showreel",
    title: "Show Reel",
    description: "Motion / Design Reel",
    category: "쇼릴",
    mediaType: "video",
    src: "/videos/mirae-showreel.mp4",
    aspectRatio: "landscape",
    contribution: "90%"
  },
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
    title: "키비주얼 / 모션그래픽",
    description: "Illustrator + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/bf-instastory-1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "cmf-instastory",
    title: "인포그래픽 / 제품 촬영·보정",
    description: "Photoshop + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/cmf-instastory03.mp4",
    aspectRatio: "portrait",
    contribution: "80%"
  },
  {
    slug: "dhl-page1",
    title: "텍스트 이펙트 / 모델 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/dhl-page1.mp4",
    aspectRatio: "portrait",
    contribution: "70%"
  },
  {
    slug: "flc-instastory",
    title: "텍스트 이펙트 / 제품 촬영·보정",
    description: "Photoshop + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/flc-instastory-1.mp4",
    aspectRatio: "portrait",
    contribution: "70%"
  },
  {
    slug: "ggl-day2-page3",
    title: "키비주얼 / 모션그래픽 / 모델 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "소셜 모션",
    mediaType: "video",
    src: "/videos/ggl-day2-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "gss-day1-page1",
    title: "키비주얼 / 모션그래픽 / 제품 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "소셜 모션",
    mediaType: "video",
    src: "/videos/gss-day1-page1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "instastory-page2",
    title: "키비주얼 / 영상 기획 / 촬영·보정 / 편집",
    description: "Premiere Pro + After Effects",
    category: "소셜 모션",
    mediaType: "video",
    src: "/videos/instastory-page2.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "scs-instastory-page3",
    title: "키비주얼 / 이미지 편집 / 모션그래픽 / 제품 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "소셜 모션",
    mediaType: "video",
    src: "/videos/scs-instastory-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "cpf-instastory-01",
    title: "키비주얼 / 모션그래픽 / 제품 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "소셜 모션",
    mediaType: "video",
    src: "/videos/cpf-instastory-01.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "sneaker-commerce-hero-ui",
    title: "Sneaker Commerce Hero UI",
    description: "Photoshop",
    category: "Web UI",
    mediaType: "image",
    src: "/images/sneaker-commerce-hero-ui.png",
    aspectRatio: "landscape",
    note: "Unofficial concept design for portfolio use only."
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
    slug: "radiant-matte",
    title: "웹 배너 디자인",
    description: "Photoshop",
    category: "웹 배너",
    mediaType: "image",
    src: "/images/radiant-matte.jpg",
    aspectRatio: "square"
  },
  {
    slug: "hyaluponic-set",
    title: "웹 하이퍼비주얼 디자인",
    description: "Photoshop + Illustrator",
    category: "웹 배너",
    mediaType: "image",
    src: "/images/hyaluponic-set.png",
    aspectRatio: "landscape"
  },
  {
    slug: "m8s-squad",
    title: "M8s Squad 굿즈 디자인",
    description: "ChatGPT + Photoshop",
    category: "키비주얼",
    mediaType: "image",
    src: "/images/m8s-squad.jpg",
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
    subtitle: "대형 옥외광고부터 작은 버튼 하나까지, 시선이 머무는 화면을 만듭니다.",
    primaryActionLabel: "View Works",
    secondaryActionLabel: "Contact",
    badgeLabel: "",
    panelLabel: "Approach",
    panelTitle:
      "게임 웹/UI 디자인 지원을 위해 광고·모션 작업과 게임 제작 경험을 하나의 흐름으로 정리했습니다.",
    panelBullets: [
      "웹 배너, SNS 콘텐츠, 키비주얼, 모션 광고를 제작합니다.",
      "게임 화면과 유저 흐름을 고려해 정보 구조와 광고 비주얼을 정리합니다."
    ]
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
  advertisingWorks: {
    sectionLabel: "Selected",
    sectionTitle: "Selected Advertising Works",
    description: "광고·모션 디자인 경험을 게임 웹/UI 관점으로 정리한 대표 작업입니다."
  },
  socialMotion: {
    sectionLabel: "Social",
    sectionTitle: "Social Motion",
    description: "모바일 화면에서 제품의 분위기가 읽히도록 구성한 모션그래픽 작업"
  },
  webBanner: {
    sectionLabel: "Banner",
    sectionTitle: "Web / Digital Design",
    description: "제한된 영역 안에서 브랜드 이미지, 핵심 문구, CTA가 빠르게 읽히도록 구성한 배너 작업"
  },
  gameMarketing: {
    sectionLabel: "Spec",
    sectionTitle: "Game Marketing Spec Campaign",
    description: "2D 플랫포머 게임과 홍보용 티저 등을 제작해 본 개인 프로젝트",
    placeholderTitle: "게임 마케팅 스펙 캠페인 준비 중",
    placeholderDescription:
      "게임 IP를 가정한 광고 캠페인, 키비주얼, 숏폼 모션 구성을 정리할 예정입니다."
  },
  motionDesignArchive: {
    sectionLabel: "Archive",
    sectionTitle: "Motion / Design Archive",
    description: "게임용 광고디자인의 확장성을 보여주는 아카이브"
  },
  skillsAbout: {
    sectionLabel: "Skills",
    sectionTitle: "Skills"
  },
  gameSideProject: {
    sectionLabel: "Side Project",
    sectionTitle: "Game Side Project"
  },
  archive: {
    sectionLabel: "Archive",
    sectionTitle: "Video Archive"
  },
  contact: {
    sectionLabel: "Contact",
    sectionTitle: "함께 만들 이야기가 있다면",
    description: "광고·모션 디자인 작업 문의",
    supportText:
      "Advertising Design · Social Motion · Web Banner · Game Marketing Visuals"
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
  defaultTitle: "신미래 | Game Web/UI Design Portfolio",
  titleTemplate: "%s | 신미래 포트폴리오",
  description:
    "펄어비스 아트_웹디자인/UI 인턴십 지원을 위해 구성한 신미래의 게임 웹/UI, 광고, 모션 디자인 포트폴리오.",
  openGraphDescription:
    "광고 디자인, 소셜 모션, 웹 배너, 1인게임 제작 경험을 게임 웹/UI 관점으로 정리한 포트폴리오.",
  siteName: "신미래 포트폴리오",
  openGraphImageAlt: "신미래 포트폴리오 대표 이미지"
} as const;

export const manifestContent = {
  name: "신미래 포트폴리오",
  shortName: "Mirae",
  description: "게임 광고·모션 디자이너 신미래의 포트폴리오"
} as const;
