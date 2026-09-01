"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Slide, Poster } from "@/lib/types";

const DURATION = 5000; // 슬라이드 전환 간격(ms)

export default function Hero({ slides, poster }: { slides: Slide[]; poster: Poster | null }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
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

  return (
    <section className="mx-auto max-w-6xl px-5 pt-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-[5fr_2fr]">
        {/* 왼쪽: 롤링창 (컨트롤 오버레이) */}
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line bg-brand-light lg:aspect-[7/4]">
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
                <picture>
                  <source media="(min-width: 1024px)" srcSet={slide.image} />
                  <img
                    src={slide.mobileImage || slide.image}
                    alt={slide.alt}
                    className="h-full w-full object-cover"
                  />
                </picture>
              </a>
            ))}

            {/* dn-slider-ctrl 스타일 컨트롤 */}
            {count > 0 && (
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-white/20 px-2 py-1 backdrop-blur-md sm:bottom-5 sm:right-5">
                <span className="pl-1 pr-0.5 text-xs font-bold tracking-wide text-ink/60">
                  {index + 1}/{count}
                </span>
                <button
                  type="button"
                  aria-label="이전 슬라이드"
                  onClick={() => go(index - 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/25 text-white transition hover:bg-ink/40"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
                </button>
                <button
                  type="button"
                  aria-label={playing ? "정지" : "재생"}
                  onClick={() => setPlaying((v) => !v)}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/25 text-white transition hover:bg-ink/40"
                >
                  {playing ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  )}
                </button>
                <button
                  type="button"
                  aria-label="다음 슬라이드"
                  onClick={() => go(index + 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/25 text-white transition hover:bg-ink/40"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </div>            )}
          </div>
        </div>

        {/* 오른쪽: 포스터 (롤링창과 세로 끝선 정렬) */}
        <div className="hidden lg:block">
          <a
            href={poster?.href || "#"}
            className="block h-full w-full overflow-hidden rounded-2xl border border-line bg-white"
          >
            {poster ? (
              // eslint-disable-next-line @next/next/no-img-element
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
