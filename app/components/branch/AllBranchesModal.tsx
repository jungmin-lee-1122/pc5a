"use client";

import { useEffect, useRef } from "react";
import { BRANCHES, isBranchLinkReady, type Branch } from "@/config/branches";

/** 전체 지점 안내 팝업 — PC 상단바·모바일 전체메뉴에서 공용으로 엽니다. */
export default function AllBranchesModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    // 열릴 때 닫기 버튼으로 포커스 이동
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="5A 아카데미 전체 지점"
    >
      <div className="absolute inset-0 bg-black/45" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-extrabold text-ink sm:text-xl">5A 아카데미 전체 지점</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-ink"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {BRANCHES.map((b) => (
            <BranchCard key={b.id} b={b} onNavigate={onClose} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BranchCard({ b, onNavigate }: { b: Branch; onNavigate: () => void }) {
  const ready = isBranchLinkReady(b);
  const canGo = b.current || ready; // 현재 지점(홈) 또는 이동 준비된 지점

  return (
    <div className="flex flex-col rounded-xl border border-line bg-white p-5">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-base font-extrabold text-ink">{b.full}</p>
        {b.current ? (
          <span className="rounded-full bg-brand-light px-2 py-0.5 text-[11px] font-bold text-brand">현재 지점</span>
        ) : b.status === "준비중" ? (
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-bold text-gray-400">준비 중</span>
        ) : null}
      </div>

      {/* 확인된 위치 정보만 표시 */}
      {b.region || b.address ? (
        <p className="mt-2 text-sm text-gray-600">{b.region || b.address}</p>
      ) : (
        <p className="mt-2 text-sm text-gray-400">위치 정보 준비 중</p>
      )}
      {b.address && b.region && <p className="text-[13px] text-gray-400">{b.address}</p>}
      {b.tel && <p className="mt-0.5 text-[13px] text-gray-400">{b.tel}</p>}

      <div className="mt-4">
        {canGo ? (
          <a
            href={b.href || "/"}
            onClick={onNavigate}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            홈페이지 이동
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        ) : (
          <span className="inline-flex w-full cursor-default items-center justify-center rounded-lg border border-line bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-400">
            준비 중
          </span>
        )}
      </div>
    </div>
  );
}
