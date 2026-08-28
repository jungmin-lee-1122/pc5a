"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Slide, Poster } from "@/lib/types";

const DURATION = 5000; // 슬라이드 전환 간격(ms)

export default function Hero({ slides, poster }: { slides: Slide[]; poster: Poster | null }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [showThumbs, setShowThumbs] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const count = slides.length;
  const go = useCallback((next: number) => setIndex((c) => (count ? (next + count) % count : 0)), [count]);

  // 자동 재생
  useEffect(() => {
    if (!playing || count <= 1) return;
    timer.current = setTimeout(() => go(index + 1), DURATION);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, playing, count, go]);

  return (
    <section className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* 왼쪽: 롤링 슬라이더 */}
        <div className="lg:col-span-2">
          <div className="flex h-[360px] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm sm:h-[420px]">
            {/* 슬라이드 이미지 영역 */}
            <div className="relative flex-1 overflow-hidden bg-brand-light">
              {count === 0 && (
                <div className="flex h-full items-center justify-center text-muted">
                  등록된 슬라이드가 없습니다
                </div>
              )}
              {slides.map((slide, i) => (
                <a
                  key={slide.id}
                  href={slide.href || "#"}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
                  aria-hidden={i !== index}
                >
                  <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
                </a>
              ))}

              {/* 썸네일 빠른 이동 (전체보기 버튼으로 토글) */}
              {showThumbs && count > 0 && (
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-black/40 p-3 backdrop-blur-sm">
                  {slides.map((slide, i) => (
                    <button
                      key={slide.id}
                      onClick={() => go(i)}
                      className={`h-9 w-14 overflow-hidden rounded border-2 ${
                        i === index ? "border-white" : "border-transparent opacity-70"
                      }`}
                      aria-label={`${i + 1}번 슬라이드`}
                    >
                      <img src={slide.image} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 컨트롤 바 (진행바 + 이전/다음/재생/전체보기) */}
            <div className="flex h-12 items-center gap-4 px-4">
              <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-gray-200">
                <div
                  key={`${index}-${playing}`}
                  className="absolute inset-y-0 left-0 bg-brand"
                  style={{
                    animation: playing && count > 1 ? `progressFill ${DURATION}ms linear forwards` : "none",
                    width: playing && count > 1 ? undefined : "100%",
                  }}
                />
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <CtrlButton label="이전 슬라이드" onClick={() => go(index - 1)}>
                  <path d="M15 6l-6 6 6 6" />
                </CtrlButton>
                <CtrlButton label="다음 슬라이드" onClick={() => go(index + 1)}>
                  <path d="M9 6l6 6-6 6" />
                </CtrlButton>
                <CtrlButton label={playing ? "일시정지" : "재생"} onClick={() => setPlaying((p) => !p)}>
                  {playing ? (
                    <>
                      <line x1="9" y1="6" x2="9" y2="18" />
                      <line x1="15" y1="6" x2="15" y2="18" />
                    </>
                  ) : (
                    <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />
                  )}
                </CtrlButton>
                <CtrlButton label="전체 슬라이드 보기" onClick={() => setShowThumbs((v) => !v)}>
                  <rect x="5" y="5" width="6" height="6" rx="1" />
                  <rect x="13" y="5" width="6" height="6" rx="1" />
                  <rect x="5" y="13" width="6" height="6" rx="1" />
                  <rect x="13" y="13" width="6" height="6" rx="1" />
                </CtrlButton>
                <span className="ml-1 text-xs tabular-nums text-gray-400">
                  {count ? String(index + 1).padStart(2, "0") : "00"} / {String(count).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽: 포스터 */}
        <div className="lg:col-span-1">
          <a
            href={poster?.href || "#"}
            className="block h-[360px] overflow-hidden rounded-2xl border border-line bg-white shadow-sm sm:h-[420px]"
          >
            {poster ? (
              <img src={poster.image} alt={poster.alt} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted">
                등록된 포스터가 없습니다
              </div>
            )}
          </a>
        </div>
      </div>
    </section>
  );
}

function CtrlButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-brand-light hover:text-brand"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </button>
  );
}
