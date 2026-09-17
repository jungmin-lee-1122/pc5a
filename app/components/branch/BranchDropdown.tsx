"use client";

import { useEffect, useState } from "react";
import { BRANCHES, CURRENT_BRANCH, isBranchLinkReady } from "@/config/branches";

/** 모바일 전용 지점 선택 드롭다운 (로고 옆 "평촌점 ⌄") */
export default function BranchDropdown() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="지점 선택"
        className="flex items-center gap-0.5 rounded-md px-1.5 py-1 text-[13px] font-bold text-brand"
      >
        {CURRENT_BRANCH.label}
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <>
          {/* 바깥 클릭 닫기 */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="absolute left-0 top-full z-50 mt-1.5 w-52 overflow-hidden rounded-xl border border-line bg-white shadow-xl">
            {BRANCHES.map((b) => {
              const ready = isBranchLinkReady(b);
              const note = b.current ? "현재 지점" : b.status === "준비중" ? "준비 중" : "";
              const inner = (
                <span className="flex items-center justify-between">
                  <span className={b.current ? "font-bold text-brand" : "font-semibold text-gray-700"}>{b.label}</span>
                  {note && (
                    <span className={`text-[11px] ${b.current ? "text-brand" : "text-gray-400"}`}>— {note}</span>
                  )}
                </span>
              );
              if (b.current || !ready) {
                return (
                  <div
                    key={b.id}
                    className={`border-b border-line px-4 py-3 text-[14px] last:border-0 ${b.current ? "bg-brand-light/50" : ""}`}
                  >
                    {inner}
                  </div>
                );
              }
              return (
                <a
                  key={b.id}
                  href={b.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line px-4 py-3 text-[14px] transition-colors last:border-0 hover:bg-brand-light/40"
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
