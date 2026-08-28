"use client";

import { useEffect, useState } from "react";
import type { EventItem } from "@/lib/types";

/** 예약하기 버튼 + 팝업 모달(구글폼 임베드). 상세 페이지에서 사용합니다. */
export default function EventApply({ event }: { event: EventItem }) {
  const [open, setOpen] = useState(false);
  const closed = event.status === "마감";

  // 모달 열렸을 때 배경 스크롤 잠금 + ESC 닫기
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* 데스크톱/공통 CTA */}
      <button
        type="button"
        disabled={closed}
        onClick={() => setOpen(true)}
        className={
          closed
            ? "inline-flex w-full items-center justify-center rounded-xl bg-gray-100 px-6 py-3.5 text-[15px] font-bold text-gray-400 sm:w-auto"
            : "inline-flex w-full items-center justify-center rounded-xl bg-brand px-8 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-brand-dark sm:w-auto"
        }
      >
        {closed ? "접수 마감" : "예약하기"}
      </button>

      {/* 모바일 하단 고정 바 */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <button
          type="button"
          disabled={closed}
          onClick={() => setOpen(true)}
          className={
            closed
              ? "flex w-full items-center justify-center rounded-xl bg-gray-100 py-3.5 text-[15px] font-bold text-gray-400"
              : "flex w-full items-center justify-center rounded-xl bg-brand py-3.5 text-[15px] font-bold text-white"
          }
        >
          {closed ? "접수 마감" : "예약하기"}
        </button>
      </div>

      {/* 모달 */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-white sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
              <div className="min-w-0">
                <p className="text-xs font-bold text-brand">설명회 예약</p>
                <h3 className="mt-0.5 truncate text-[15px] font-bold text-ink">{event.title}</h3>
                {event.eventDate && (
                  <p className="mt-0.5 text-xs text-muted">{event.eventDate}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="닫기"
                className="shrink-0 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-ink"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>

            {/* 모달 본문 */}
            {event.applyUrl ? (
              <div className="flex min-h-0 flex-1 flex-col">
                <iframe
                  src={event.applyUrl}
                  title="설명회 예약 신청서"
                  className="h-[70vh] w-full flex-1 border-0"
                >
                  로딩 중…
                </iframe>
                <div className="border-t border-line px-5 py-3 text-center">
                  <a
                    href={event.applyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-medium text-brand hover:underline"
                  >
                    새 창에서 신청서 열기 ↗
                  </a>
                </div>
              </div>
            ) : (
              <div className="px-6 py-10 text-center">
                <p className="text-sm text-muted">
                  온라인 예약 신청서가 준비 중입니다.
                  <br />
                  전화로 예약을 도와드리겠습니다.
                </p>
                <a
                  href="tel:031-347-5151"
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-brand px-8 py-3 text-[15px] font-bold text-white hover:bg-brand-dark"
                >
                  031-347-5151 전화 예약
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
