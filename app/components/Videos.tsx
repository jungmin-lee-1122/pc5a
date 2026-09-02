"use client";

import { useRef } from "react";
import type { VideoItem, Promo } from "@/lib/types";

/** 유튜브 ID 또는 URL 에서 영상 ID 추출 */
function youtubeId(input: string): string {
  const s = input.trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  const m = s.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : s;
}

export default function Videos({
  videos,
  promo,
  title,
}: {
  videos: VideoItem[];
  promo: Promo | null;
  title: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const active = videos.filter((v) => v.active).sort((a, b) => a.order - b.order);

  const scrollBy = (dir: number) => scroller.current?.scrollBy({ left: dir * 260, behavior: "smooth" });

  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-12">
        {/* 영상 섹션 (박스) */}
        <div className="min-w-0 lg:col-span-8">
          <div className="h-full rounded-2xl border border-line bg-white p-6 sm:p-7">
            <h2 className="mb-5 text-xl font-extrabold text-ink">{title}</h2>

            <div className="relative">
              <div ref={scroller} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth lg:snap-none">
                {active.map((video) => {
                  const id = youtubeId(video.youtube);
                  return (
                    <a
                      key={video.id}
                      href={`https://www.youtube.com/watch?v=${id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-[calc((100%-1rem)/2)] shrink-0 snap-start min-w-0 lg:w-[calc((100%-2rem)/3)] lg:min-w-[190px]"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-gray-100">
                        <img
                          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                          alt={video.title}
                          className="h-full w-full object-cover transition group-hover:scale-105"
                        />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition group-hover:bg-brand">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </span>
                      </div>
                      <p className="mt-2.5 line-clamp-2 text-[14px] font-medium text-gray-700 group-hover:text-brand">
                        {video.title}
                      </p>
                    </a>
                  );
                })}
                {active.length === 0 && (
                  <div className="flex h-40 w-full items-center justify-center text-muted">
                    등록된 영상이 없습니다
                  </div>
                )}
              </div>

              {active.length > 3 && (
                <>
                  <button
                    onClick={() => scrollBy(-1)}
                    aria-label="이전 영상"
                    className="absolute -left-1 top-[26%] hidden h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-gray-500 hover:text-brand lg:flex"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
                  </button>
                  <button
                    onClick={() => scrollBy(1)}
                    aria-label="다음 영상"
                    className="absolute -right-1 top-[26%] hidden h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-gray-500 hover:text-brand lg:flex"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 홍보 사각배너 — 영상 박스와 세로 끝선 맞춤 */}
        <div className="min-w-0 lg:col-span-4">
          <a
            href={promo?.href || "#"}
            className="relative block h-44 overflow-hidden rounded-2xl border border-line bg-white lg:h-full"
          >
            {promo ? (
              <img src={promo.image} alt={promo.alt} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted">홍보 배너</div>
            )}
          </a>
        </div>
      </div>
    </section>
  );
}
