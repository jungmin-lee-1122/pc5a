"use client";

import { BRANCHES } from "@/config/branches";

/** PC 전용 상단 지점 바 — 브랜드 네이비로 채운 고급형 톱바 (높이 36px) */
export default function BranchTopBar({ onOpenAll }: { onOpenAll: () => void }) {
  return (
    <div className="hidden bg-brand-dark text-white lg:block">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-5 lg:px-8">
        {/* 지점 목록 */}
        <div className="flex items-center gap-2.5 text-[13px]">
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="text-white/45"
            aria-hidden="true"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <div className="flex items-center gap-1">
            {BRANCHES.map((b) =>
              b.current ? (
                <a
                  key={b.id}
                  href={b.href || "/"}
                  className="rounded-full bg-white/15 px-2.5 py-0.5 font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/25"
                >
                  {b.name}
                </a>
              ) : (
                <a
                  key={b.id}
                  href={b.href || "/"}
                  className="rounded-full px-2 py-0.5 font-medium text-white/60 transition-colors hover:text-white"
                >
                  {b.name}
                </a>
              ),
            )}
          </div>
        </div>

        {/* 전체 지점 보기 */}
        <button
          type="button"
          onClick={onOpenAll}
          className="group flex items-center gap-1.5 text-[13px] font-medium text-white/70 transition-colors hover:text-white"
        >
          전체 지점 보기
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white/15 text-[12px] leading-none text-white transition-colors group-hover:bg-white/30">
            +
          </span>
        </button>
      </div>
    </div>
  );
}
