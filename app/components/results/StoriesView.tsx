"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { SuccessStory } from "@/lib/types";

type Kind = "수기" | "영상";
const PER = 15;

/** 유튜브 URL → 썸네일 이미지 */
function ytThumb(url?: string): string {
  if (!url) return "";
  const m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([\w-]{11})/);
  return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : "";
}

export default function StoriesView({
  stories,
  initialTab = "수기",
}: {
  stories: SuccessStory[];
  initialTab?: Kind;
}) {
  const router = useRouter();
  const [tab, setTab] = useState<Kind>(initialTab);
  const [group, setGroup] = useState("전체");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const inTab = useMemo(() => stories.filter((s) => s.kind === tab), [stories, tab]);
  const groups = useMemo(
    () => ["전체", ...Array.from(new Set(inTab.map((s) => s.group.trim()).filter(Boolean)))],
    [inTab],
  );

  const filtered = useMemo(() => {
    let list = group === "전체" ? inTab : inTab.filter((s) => s.group === group);
    const key = q.trim().toLowerCase();
    if (key) list = list.filter((s) => `${s.title} ${s.group}`.toLowerCase().includes(key));
    return list;
  }, [inTab, group, q]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER));
  const cur = Math.min(page, pages);
  const shown = filtered.slice((cur - 1) * PER, cur * PER);

  function pickTab(k: Kind) {
    setTab(k);
    setGroup("전체");
    setQ("");
    setPage(1);
  }

  return (
    <>
      {/* 헤더 */}
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">대입결과</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">대입 성공 스토리</h1>
          <p className="mt-2 text-sm text-muted">합격생들의 생생한 합격 수기와 인터뷰 영상을 만나보세요.</p>
        </div>
      </div>

      {/* 탭 */}
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-3xl">
          {(["수기", "영상"] as Kind[]).map((k) => {
            const on = tab === k;
            return (
              <button
                key={k}
                onClick={() => pickTab(k)}
                className={
                  "flex-1 border-b-2 py-4 text-center text-[15px] font-bold transition-colors sm:text-base " +
                  (on ? "border-brand text-brand" : "border-transparent text-gray-400 hover:text-gray-600")
                }
              >
                {k === "수기" ? "성공수기" : "성공영상"}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        {/* 총 건수 + 필터 + 검색 */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            총 <span className="font-bold text-brand">{filtered.length}</span>건
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={group}
              onChange={(e) => {
                setGroup(e.target.value);
                setPage(1);
              }}
              className="rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand"
            >
              {groups.map((g) => (
                <option key={g} value={g}>
                  {g === "전체" ? "합격 대학" : g}
                </option>
              ))}
            </select>
            <div className="relative">
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="검색어를 입력하세요"
                className="w-56 rounded-lg border border-line bg-white py-2 pl-9 pr-3 text-sm text-ink outline-none focus:border-brand"
              />
            </div>
          </div>
        </div>

        {/* 목록 */}
        {shown.length === 0 ? (
          <p className="mt-5 rounded-2xl border border-dashed border-line px-4 py-16 text-center text-sm text-muted">
            등록된 {tab === "수기" ? "성공수기" : "성공영상"}가 없습니다.
          </p>
        ) : tab === "영상" ? (
          /* 성공영상 — 썸네일 카드 그리드 */
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((s) => {
              const thumb = ytThumb(s.videoUrl) || s.image || "";
              return (
                <button
                  key={s.id}
                  onClick={() => router.push(`/results/stories/${s.id}?tab=video`)}
                  className="group text-left"
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-brand-dark">
                    {thumb ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={thumb}
                        alt={s.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : null}
                    <span className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
                    <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition group-hover:scale-110">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-brand">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="inline-block rounded-full bg-brand-light px-2.5 py-1 text-[11px] font-bold text-brand">{s.group || "-"}</span>
                    <p className="mt-2 line-clamp-2 font-semibold leading-snug text-ink group-hover:text-brand">{s.title}</p>
                    <p className="mt-1.5 text-[13px] text-gray-400">{s.date}</p>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          /* 성공수기 — 표 */
          <div className="mt-5 overflow-hidden rounded-2xl border border-line">
            <div className="hidden bg-gray-50 text-sm font-semibold text-gray-500 sm:grid sm:grid-cols-[150px_1fr_120px]">
              <div className="px-4 py-3 text-center">합격 대학</div>
              <div className="px-4 py-3">제목</div>
              <div className="px-4 py-3 text-center">등록일</div>
            </div>
            {shown.map((s) => (
              <button
                key={s.id}
                onClick={() => router.push(`/results/stories/${s.id}?tab=memoir`)}
                className="block w-full border-t border-line text-left transition-colors first:border-t-0 hover:bg-brand-light/40 sm:grid sm:grid-cols-[150px_1fr_120px] sm:items-center"
              >
                <div className="px-4 pt-3.5 sm:py-4 sm:text-center">
                  <span className="inline-block rounded-full bg-brand-light px-2.5 py-1 text-[12px] font-bold text-brand">
                    {s.group || "-"}
                  </span>
                </div>
                <div className="px-4 pb-3.5 pt-1.5 sm:py-4">
                  <p className="font-semibold text-ink">{s.title}</p>
                </div>
                <div className="px-4 pb-4 text-[13px] text-gray-400 sm:py-4 sm:text-center">{s.date}</div>
              </button>
            ))}
          </div>
        )}

        {/* 페이지네이션 */}
        {pages > 1 && (
          <div className="mt-7 flex items-center justify-center gap-1.5">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={cur === 1}
              className="rounded-lg border border-line px-3 py-1.5 text-sm text-gray-500 disabled:opacity-40 hover:border-brand hover:text-brand"
            >
              이전
            </button>
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={
                  "h-9 w-9 rounded-lg text-sm font-semibold transition-colors " +
                  (n === cur ? "bg-brand text-white" : "text-gray-500 hover:bg-brand-light hover:text-brand")
                }
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(pages, p + 1))}
              disabled={cur === pages}
              className="rounded-lg border border-line px-3 py-1.5 text-sm text-gray-500 disabled:opacity-40 hover:border-brand hover:text-brand"
            >
              다음
            </button>
          </div>
        )}
      </div>
    </>
  );
}
