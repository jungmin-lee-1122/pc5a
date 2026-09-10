"use client";
// deploy test: 2026-09-10

import { useEffect, useMemo, useRef, useState } from "react";
import type { AdmissionResult, UnivGroup } from "@/lib/types";
import { UNIV_GROUPS } from "@/lib/univ";

const ALL = "전체 대학합격자";
const NOTES = [
  "2016~2026학년도 5A 아카데미 합격자수 총합",
  "본 결과는 최종 합격자를 기준으로 하며, 복수대학 합격자가 포함되어 있습니다.",
  "UPDATE : 실시간 반영",
];

/* 탭 전환 시 이전값 → 새값으로 굴러가는 큰 숫자 */
function RollingNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  const fromRef = useRef(0);
  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    const dur = 900;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = to;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{display.toLocaleString()}</>;
}

const PAGE = 30;

export default function UnivPassView({
  results,
  groups,
}: {
  results: AdmissionResult[];
  groups: UnivGroup[];
}) {
  const [active, setActive] = useState<string>(ALL);
  const [q, setQ] = useState("");
  const [visible, setVisible] = useState(PAGE);

  // 그룹별 카운트 맵 + 전체(합)
  const counts = useMemo(() => {
    const m = new Map<string, number>();
    groups.forEach((g) => m.set(g.label, (m.get(g.label) ?? 0) + (Number(g.count) || 0)));
    return m;
  }, [groups]);
  const total = useMemo(
    () => Array.from(counts.values()).reduce((a, b) => a + b, 0),
    [counts],
  );
  const activeCount = active === ALL ? total : counts.get(active) ?? 0;

  const tabs = [ALL, ...UNIV_GROUPS];

  const filtered = useMemo(() => {
    let list = active === ALL ? results : results.filter((r) => r.group === active);
    const key = q.trim().toLowerCase();
    if (key) {
      list = list.filter((r) =>
        [r.university, r.major, r.name, r.school, r.year].join(" ").toLowerCase().includes(key),
      );
    }
    return list;
  }, [results, active, q]);

  const shown = filtered.slice(0, visible);

  function pick(tab: string) {
    setActive(tab);
    setVisible(PAGE);
  }

  return (
    <>
      {/* ===== 히어로 (다크) ===== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#1e2a63] via-[#1a2456] to-[#131b42] text-white">
        {/* 브랜드 글로우 */}
        <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-[#8b90f5]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 -top-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />

        {/* 오른쪽 트로피 영상 */}
        <div className="pointer-events-none absolute right-[3%] top-1/2 hidden h-[88%] max-h-[470px] -translate-y-1/2 lg:block">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src="/univ-trophy.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold text-white/45">합격을 진심으로 축하합니다!</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#8b90f5] sm:text-4xl lg:text-5xl">
            5A 아카데미 대입결과
          </h1>

          {/* 큰 숫자 */}
          <p className="mt-1 font-extrabold leading-none text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.15)] text-[76px] sm:text-[110px] lg:text-[132px]">
            <RollingNumber value={activeCount} />
          </p>

          {/* 그룹 탭 */}
          <div className="mt-6 max-w-3xl overflow-x-auto lg:max-w-4xl">
            <div className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] p-1.5">
              {tabs.map((tab) => {
                const on = tab === active;
                return (
                  <button
                    key={tab}
                    onClick={() => pick(tab)}
                    className={
                      "whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-bold transition-colors sm:px-5 sm:text-sm " +
                      (on
                        ? "bg-[#8b90f5] text-[#1e2a63] shadow-[0_0_20px_rgba(139,144,245,0.45)]"
                        : "text-white/65 hover:text-white")
                    }
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 각주 */}
          <ul className="mt-7 space-y-1">
            {NOTES.map((n) => (
              <li key={n} className="text-[12px] text-white/40">* {n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 합격자 명단 ===== */}
      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-brand">{active}</p>
            <h2 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">합격자 명단</h2>
          </div>
          <div className="relative sm:w-72">
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setVisible(PAGE); }}
              placeholder="대학·학과·고교·이름 검색"
              className="w-full rounded-full border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition focus:border-brand"
            />
          </div>
        </div>

        {/* PC 표 */}
        <div className="mt-7 hidden overflow-hidden rounded-2xl border border-line lg:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="px-4 py-3.5 text-left font-semibold">대학</th>
                <th className="px-4 py-3.5 text-left font-semibold">학과</th>
                <th className="px-4 py-3.5 text-center font-semibold">이름</th>
                <th className="px-4 py-3.5 text-center font-semibold">출신고교</th>
                <th className="w-24 px-4 py-3.5 text-center font-semibold">학년도</th>
              </tr>
            </thead>
            <tbody>
              {shown.map((r) => (
                <tr key={r.id} className="border-t border-line transition-colors hover:bg-brand-light/40">
                  <td className="px-4 py-3.5 font-bold text-ink">{r.university}</td>
                  <td className="px-4 py-3.5 text-gray-700">{r.major}</td>
                  <td className="px-4 py-3.5 text-center font-medium text-gray-800">{r.name}</td>
                  <td className="px-4 py-3.5 text-center text-gray-600">{r.school}</td>
                  <td className="px-4 py-3.5 text-center text-gray-500">{r.year}</td>
                </tr>
              ))}
              {shown.length === 0 && (
                <tr><td colSpan={5} className="px-4 py-16 text-center text-sm text-muted">명단이 없습니다.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 모바일 카드 */}
        <div className="mt-7 space-y-3 lg:hidden">
          {shown.map((r) => (
            <div key={r.id} className="rounded-xl border border-line bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold text-ink">{r.university}</p>
                <span className="rounded bg-brand-light px-2 py-0.5 text-[11px] font-semibold text-brand">{r.year}</span>
              </div>
              <p className="mt-1 text-sm text-gray-700">{r.major}</p>
              <p className="mt-2 text-[13px] text-gray-500">{r.name} · {r.school}</p>
            </div>
          ))}
          {shown.length === 0 && (
            <p className="rounded-xl border border-dashed border-line py-14 text-center text-sm text-muted">명단이 없습니다.</p>
          )}
        </div>

        {visible < filtered.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisible((v) => v + PAGE)}
              className="rounded-full border border-brand/30 bg-white px-6 py-2.5 text-sm font-bold text-brand transition hover:bg-brand-light/50"
            >
              더보기 (+{Math.min(PAGE, filtered.length - visible)})
            </button>
          </div>
        )}
      </section>
    </>
  );
}
