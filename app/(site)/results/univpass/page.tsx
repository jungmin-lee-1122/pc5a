import type { Metadata } from "next";
import { getUnivPass, getUnivGroups } from "@/lib/content";
import UnivPassView from "@/app/components/results/UnivPassView";

export const dynamic = "force-dynamic";

// 준비 중 표시 (실제 합격자 명단을 공개하려면 false 로 바꾸세요)
const COMING_SOON = true;

export const metadata: Metadata = {
  title: "대입합격현황 | 5A 아카데미",
  description: "눈부신 대입결과 — 5A 아카데미 역대 대입 합격자 명단",
};

function ComingSoon() {
  return (
    <>
      {/* 헤더 밴드 */}
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">대입결과</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">대입합격현황</h1>
          <p className="mt-2 text-sm text-muted">눈부신 대입결과, 5A 아카데미가 증명합니다.</p>
        </div>
      </div>

      {/* 준비 중 안내 */}
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-brand sm:h-20 sm:w-20">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" />
            </svg>
          </span>
          <h2 className="mt-6 text-xl font-extrabold text-ink sm:text-2xl">
            대입합격현황을 준비하고 있습니다
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            2026학년도 합격 실적을 정리해 곧 공개할 예정입니다.
            <br />
            조금만 기다려 주세요.
          </p>
        </div>
      </div>
    </>
  );
}

export default async function UnivPassPage() {
  const [results, groups] = await Promise.all([getUnivPass(), getUnivGroups()]);
  return (
    <main className="flex-1 pb-16">
      {COMING_SOON ? <ComingSoon /> : <UnivPassView results={results} groups={groups} />}
    </main>
  );
}
