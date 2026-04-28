import type { ArchiveEntry, Capability, Project, SiteData } from "@/types";

export const site: SiteData = {
  name: "신미래",
  nameEn: "Mirae Shin",
  headline: "게임의 첫인상을 설계하는 광고·모션 디자이너",
  intro:
    "Photoshop, Illustrator, After Effects를 기반으로 웹 배너, SNS 콘텐츠, 프로모션 키비주얼, 모션 광고를 제작합니다. 게임 제작 경험을 바탕으로 플레이 화면과 유저 맥락을 이해하고, 이를 광고 비주얼로 전환합니다.",
  about:
    "게임 마케팅과 광고 크리에이티브에 필요한 그래픽, 모션, 배너 제작 역량을 중심으로 작업합니다.",
  highlight:
    "Photoshop, Illustrator, After Effects 기반의 시각 콘텐츠 제작 경험을 중심으로 웹 배너, SNS 콘텐츠, 프로모션 키비주얼, 모션 광고를 제작합니다. Unity, Godot, Blender 경험은 게임 화면과 제작 맥락을 이해하는 보조 역량으로 활용합니다.",
  email: "miraetto@gmail.com",
  itchUrl: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
  keywords: [
    "Graphic Design",
    "Motion Design",
    "Web Banner",
    "SNS Creative",
    "Game Marketing",
    "Key Visual"
  ],
  navItems: [
    { href: "#advertising-works", label: "Advertising Works" },
    { href: "#social-motion", label: "Social Motion" },
    { href: "#web-banner", label: "Banners" },
    { href: "#game-marketing", label: "Spec Campaign" },
    { href: "#motion-design-archive", label: "Archive" },
    { href: "#contact", label: "Contact" }
  ]
};

export const capabilities: Capability[] = [
  {
    title: "Graphic",
    description: "웹 배너, SNS 콘텐츠, 프로모션 키비주얼을 목적에 맞게 구성합니다.",
    tools: ["Photoshop", "Illustrator", "ComfyUI"]
  },
  {
    title: "Motion",
    description: "광고 소재의 메시지와 리듬이 짧은 시간 안에 전달되도록 편집합니다.",
    tools: ["Premiere Pro", "After Effects"]
  },
  {
    title: "Game Context",
    description: "게임 화면, 플레이 흐름, 유저 맥락을 고려해 광고 비주얼로 전환합니다.",
    tools: ["Unity", "Godot"]
  },
  {
    title: "Additional Skills",
    description: "필요한 경우 3D, 이미지 편집, 엔진 기반 제작 경험을 보조 역량으로 활용합니다.",
    tools: ["Blender", "ComfyUI", "Engine basics"]
  }
];

export const projects: Project[] = [
  {
    slug: "beauty-instastory",
    title: "뷰티 브랜드 모션그래픽 콘텐츠",
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
        value: "9:16 SNS 모션 영상, 제품 중심 비주얼, 텍스트 및 전환 모션"
      },
      {
        label: "Design Focus",
        value:
          "짧은 노출 시간 안에서 제품 인상, 메시지 가독성, 화면 전환 리듬이 명확하게 보이도록 구성"
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
    title: "2D게임 프로토타입 및 티저",
    description:
      "밴드 DAY6를 모티브로 한 2D 픽셀 플랫포머 팬게임을 제작했습니다. 게임 제작뿐 아니라 티저 영상도 직접 제작해, 기획부터 홍보까지 하나의 톤으로 연결했습니다.",
    details: [
      {
        label: "Brief",
        value: "2D 게임 프로토타입과 공개용 티저 영상 제작"
      },
      {
        label: "Role",
        value: "게임 화면 구성, 프로토타입 제작, 티저 영상 편집"
      },
      {
        label: "Deliverables",
        value: "2D 게임 프로토타입, 티저 영상, itch.io 공개 페이지"
      },
      {
        label: "Design Focus",
        value:
          "게임 플레이 화면과 팬 프로젝트의 분위기를 티저 영상에서 이해하기 쉽게 전달"
      },
      {
        label: "Tools",
        value: "Godot, Sora, Photoshop, After Effects"
      }
    ],
    tools: ["Godot", "Sora", "Photoshop", "After Effects"],
    href: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
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
    aspectRatio: "landscape"
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
    title: "인스타그램 스토리 디자인 / 모션그래픽",
    description: "Illustrator + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/bf-instastory-1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "cmf-instastory",
    title: "인스타그램 스토리 디자인 / 인포그래픽 / 제품 촬영·보정",
    description: "Photoshop + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/cmf-instastory03.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "dhl-page1",
    title: "인스타그램 스토리 디자인 / 텍스트 이펙트 / 모델 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/dhl-page1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "flc-instastory",
    title: "인스타그램 스토리 디자인 / 텍스트 이펙트 / 제품 촬영·보정",
    description: "Photoshop + After Effects",
    category: "브랜드 모션",
    mediaType: "video",
    src: "/videos/flc-instastory-1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "ggl-day2-page3",
    title: "인스타그램 스토리 디자인 / 모션그래픽 / 모델 촬영·보정",
    description: "Illustrator + Photoshop + After Effects",
    category: "소셜 모션",
    mediaType: "video",
    src: "/videos/ggl-day2-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "gss-day1-page1",
    title: "인스타그램 스토리 디자인 / 모션그래픽 / 제품 촬영·보정",
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
    title: "인스타그램 스토리 디자인 / 이미지 편집 / 모션그래픽 / 제품 촬영·보정",
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
    title: "웹 배너 디자인",
    description: "Photoshop + Illustrator",
    category: "웹 배너",
    mediaType: "image",
    src: "/images/hyaluponic-set.png",
    aspectRatio: "landscape"
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
      "게임 마케팅 소재의 목적에 맞춰 그래픽과 모션을 구성합니다.",
    panelBullets: [
      "웹 배너, SNS 콘텐츠, 키비주얼, 모션 광고를 제작합니다.",
      "게임 화면과 유저 맥락을 이해하고 광고 비주얼로 정리합니다."
    ]
  },
  about: {
    sectionLabel: "About",
    sectionTitle: "게임 마케팅을 위한 그래픽과 모션",
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
  advertisingWorks: {
    sectionLabel: "Selected",
    sectionTitle: "Selected Advertising Works"
  },
  socialMotion: {
    sectionLabel: "Social",
    sectionTitle: "Social Motion"
  },
  webBanner: {
    sectionLabel: "Banner",
    sectionTitle: "Web Banner / DA Banner"
  },
  gameMarketing: {
    sectionLabel: "Spec",
    sectionTitle: "Game Marketing Spec Campaign",
    placeholderTitle: "게임 마케팅 스펙 캠페인 준비 중",
    placeholderDescription:
      "게임 IP를 가정한 광고 캠페인, 키비주얼, 숏폼 모션 구성을 정리할 예정입니다."
  },
  motionDesignArchive: {
    sectionLabel: "Archive",
    sectionTitle: "Motion / Design Archive"
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
    projectLinkLabel: "Game Side Project 보기",
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
  defaultTitle: "신미래 | 게임 광고·모션 디자인 포트폴리오",
  titleTemplate: "%s | 신미래 포트폴리오",
  description:
    "웹 배너, SNS 콘텐츠, 프로모션 키비주얼, 모션 광고를 중심으로 구성한 신미래의 게임 마케팅 디자인 포트폴리오.",
  openGraphDescription:
    "게임 마케팅과 광고 크리에이티브를 위한 그래픽·모션 디자인 포트폴리오.",
  siteName: "신미래 포트폴리오",
  openGraphImageAlt: "신미래 포트폴리오 대표 이미지"
} as const;

export const manifestContent = {
  name: "신미래 포트폴리오",
  shortName: "Mirae",
  description: "게임 광고·모션 디자이너 신미래의 포트폴리오"
} as const;
