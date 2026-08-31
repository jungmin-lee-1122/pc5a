"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Slide, Poster } from "@/lib/types";

const DURATION = 5000; // 슬라이드 전환 간격(ms)

export default function Hero({ slides, poster }: { slides: Slide[]; poster: Poster | null }) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const count = slides.length;
  const go = useCallback((next: number) => setIndex((c) => (count ? (next + count) % count : 0)), [count]);

  useEffect(() => {
    if (count <= 1) return;
    timer.current = setTimeout(() => go(index + 1), DURATION);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, count, go]);

  const progress = count ? ((index + 1) / count) * 100 : 0;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="mx-auto max-w-6xl px-5 pt-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* 왼쪽: 롤링창 (컨트롤 오버레이) */}
        <div className="lg:col-span-2">
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
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2.5 sm:bottom-7 sm:left-9">
                <button
                  type="button"
                  aria-label="이전 슬라이드"
                  onClick={() => go(index - 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#10192e]/80 text-white backdrop-blur transition hover:bg-[#10192e] sm:h-10 sm:w-10"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
                </button>
                <button
                  type="button"
                  aria-label="다음 슬라이드"
                  onClick={() => go(index + 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#10192e]/80 text-white backdrop-blur transition hover:bg-[#10192e] sm:h-10 sm:w-10"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                </button>

                <span className="flex items-center gap-2.5 rounded-full bg-white/90 px-3.5 py-1.5 text-[13px] font-bold text-ink/50 backdrop-blur">
                  <b className="font-black text-brand-dark">{pad(index + 1)}</b>
                  <span className="relative block h-[3px] w-14 overflow-hidden rounded-full bg-[#10192e]/20 sm:w-16">
                    <i
                      className="absolute inset-y-0 left-0 rounded-full bg-brand-dark transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </span>
                  <span>{pad(count)}</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 오른쪽: 포스터 (롤링창과 세로 끝선 정렬) */}
        <div className="hidden lg:col-span-1 lg:block">
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
