# Mirae Portfolio

Next.js + Tailwind CSS 기반의 원페이지 포트폴리오 사이트입니다.

## 로컬 실행

1. 의존성 설치

```bash
npm install
```

2. 환경 변수 설정

`.env.local` 파일을 만들고 아래 값을 설정합니다.

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. 개발 서버 실행

```bash
npm run dev
```

## 배포 전 체크

```bash
npm run typecheck
npm run build
```

## Vercel 배포

1. 저장소를 Vercel에 연결합니다.
2. Framework Preset은 `Next.js`로 자동 인식됩니다.
3. Environment Variable에 `NEXT_PUBLIC_SITE_URL`을 실제 배포 도메인으로 설정합니다.
   예: `https://your-portfolio.vercel.app`
4. 배포 후 Open Graph, sitemap, robots 경로가 정상 생성되는지 확인합니다.

## 구조

- `app/`: App Router 페이지와 메타데이터 파일
- `components/`: 섹션 및 공통 UI 컴포넌트
- `data/`: 포트폴리오 문안과 프로젝트 데이터
- `public/`: 이미지, 영상 등 정적 자산
