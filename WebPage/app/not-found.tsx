import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sand px-5 text-ink">
      <div className="surface-card max-w-xl p-8 text-center md:p-10">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          주소가 변경되었거나 잘못된 링크일 수 있습니다. 메인 페이지에서 다시 작업을 확인해보세요.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          메인으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
