import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026 모의고사 일정 | 5A 아카데미",
  description: "2027학년도 수능 대비 2026년 모의고사 시행 일정 안내",
};

export default function MockSchedulePage() {
  return (
    <main className="flex-1 pb-16">
      {/* 헤더 */}
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">학원생활</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">2026 모의고사 일정</h1>
          <p className="mt-2 text-sm text-muted">2027학년도 수능 대비 모의고사 시행 일정을 안내합니다.</p>
        </div>
      </div>

      {/* 일정 이미지 (가운데 정렬) */}
      <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mock-2026.png"
          alt="2026년 모의고사 시행 일정"
          className="mx-auto w-full rounded-2xl border border-line"
        />
      </div>
    </main>
  );
}
