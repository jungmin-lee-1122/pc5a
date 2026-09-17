"use client";

import { Fragment } from "react";
import { BRANCHES, isBranchLinkReady } from "@/config/branches";

/** PC 전용 상단 얇은 지점 바 (기존 헤더 위, 높이 36px) */
export default function BranchTopBar({ onOpenAll }: { onOpenAll: () => void }) {
  return (
    <div className="hidden border-b border-line bg-white lg:block">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-5 lg:px-8">
        {/* 지점 목록 */}
        <div className="flex items-center gap-2 text-[13px]">
          {BRANCHES.map((b, i) => {
            const ready = isBranchLinkReady(b);
            return (
              <Fragment key={b.id}>
                {i > 0 && <span className="text-gray-300">·</span>}
                {b.current ? (
                  <span className="border-b-2 border-brand pb-0.5 font-bold text-brand">{b.name}</span>
                ) : ready ? (
                  <a href={b.href} className="font-medium text-gray-500 transition-colors hover:text-brand">
                    {b.name}
                  </a>
                ) : (
                  <span className="cursor-default font-medium text-gray-300" title="준비 중">
                    {b.name}
                  </span>
                )}
              </Fragment>
            );
          })}
        </div>

        {/* 전체 지점 보기 */}
        <button
          type="button"
          onClick={onOpenAll}
          className="flex items-center gap-1 text-[13px] font-semibold text-gray-500 transition-colors hover:text-brand"
        >
          전체 지점 보기
          <span className="text-[15px] leading-none text-brand">+</span>
        </button>
      </div>
    </div>
  );
}
