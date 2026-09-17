"use client";

import { BRANCHES } from "@/config/branches";

/** 상단 지점 바 — 라이트 그레이 단색 톱바 (PC·모바일 공통, 모바일은 축소 배치) */
export default function BranchTopBar({ onOpenAll }: { onOpenAll: () => void }) {
  return (
    <div className="border-b border-[#E5E9F5] bg-[#F2F4FC]">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-4 text-[12px] sm:text-[13px] lg:px-8">
        {/* 지점 목록 */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <svg
            width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="shrink-0 text-[#46527A] sm:h-[14px] sm:w-[14px]"
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
                  className="rounded-full bg-[#3D50C8] px-2.5 py-0.5 font-semibold text-white"
                >
                  {b.name}
                </a>
              ) : (
                <a
                  key={b.id}
                  href={b.href || "/"}
                  className="rounded-full px-2 py-0.5 font-medium text-[#46527A] transition-colors hover:text-[#3D50C8]"
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
          className="flex shrink-0 items-center gap-1 font-semibold text-[#46527A] transition-colors hover:text-[#3D50C8]"
        >
          전체 지점 보기
          <span className="text-[15px] font-bold leading-none text-[#3D50C8]">+</span>
        </button>
      </div>
    </div>
  );
}
