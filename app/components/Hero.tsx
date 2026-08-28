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

  useEffect(() => {
    if (!playing || count <= 1) return;
    timer.current = setTimeout(() => go(index + 1), DURATION);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, playing, count, go]);

  // 진행바 채움: (현재 슬라이드 번호) / (전체) — 슬라이드 개수에 비례
  const progress = count ? ((index + 1) / count) * 100 : 0;

  return (
    <section className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* 왼쪽: 롤링창(위) + 내비게이션 바(아래) — 서로 분리, 높이는 포스터에 맞춤 */}
        <div className="flex h-[340px] flex-col gap-3 sm:h-[400px] lg:col-span-2 lg:h-auto">
          {/* 롤링 슬라이드 (독립 카드) */}
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-line bg-brand-light shadow-sm">
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

          {/* 내비게이션 바 (박스 없이) */}
          <div className="flex h-12 shrink-0 items-center gap-5">
            {/* 진행바 */}
            <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-gray-200">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-ink transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* 이전/다음 (원형 캡슐) */}
            <div className="flex items-center rounded-full border border-line text-gray-500">
              <button
                type="button"
                aria-label="이전 슬라이드"
                onClick={() => go(index - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-l-full transition-colors hover:text-brand"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              <button
                type="button"
                aria-label="다음 슬라이드"
                onClick={() => go(index + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-r-full border-l border-line transition-colors hover:text-brand"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>

            {/* 재생/일시정지 (원형) */}
            <CircleBtn label={playing ? "일시정지" : "재생"} onClick={() => setPlaying((v) => !v)}>
              {playing ? (
                <>
                  <line x1="9" y1="6" x2="9" y2="18" />
                  <line x1="15" y1="6" x2="15" y2="18" />
                </>
              ) : (
                <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />
              )}
            </CircleBtn>

            {/* 전체 보기 (원형) */}
            <CircleBtn label="전체 슬라이드 보기" onClick={() => setShowThumbs((v) => !v)}>
              <rect x="5" y="5" width="6" height="6" rx="1" />
              <rect x="13" y="5" width="6" height="6" rx="1" />
              <rect x="5" y="13" width="6" height="6" rx="1" />
              <rect x="13" y="13" width="6" height="6" rx="1" />
            </CircleBtn>
          </div>
        </div>

        {/* 오른쪽: 포스터 (기준 높이) */}
        <div className="lg:col-span-1">
          <a
            href={poster?.href || "#"}
            className="block aspect-[79/84] w-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
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

function CircleBtn({
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-gray-500 transition-colors hover:text-brand"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </button>
  );
}
