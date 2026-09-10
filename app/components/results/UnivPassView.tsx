"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { AdmissionResult } from "@/lib/types";

/** 홍보영상 경로 — public 폴더에 파일을 넣고 여기에 경로를 지정하면 자동 재생 슬롯으로 바뀝니다.
 *  예: "/univpass-promo.mp4"  (비워두면 '준비 중' 플레이스홀더가 표시됩니다) */
const PROMO_VIDEO = "";
const PROMO_POSTER = ""; // 영상 썸네일(선택)

/* ── 스크롤 진입 시 나타나는 래퍼 ─────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── 숫자 카운트업 ─────────────────────────────────────────── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const dur = 1300;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const PAGE = 30;

export default function UnivPassView({ results }: { results: AdmissionResult[] }) {
  const [q, setQ] = useState("");
  const [visible, setVisible] = useState(PAGE);

  const stats = useMemo(() => {
    const univ = new Set(results.map((r) => r.university.trim()).filter(Boolean));
    const school = new Set(results.map((r) => r.school.trim()).filter(Boolean));
    return { total: results.length, univ: univ.size, school: school.size };
  }, [results]);

  const filtered = useMemo(() => {
    const key = q.trim().toLowerCase();
    if (!key) return results;
    return results.filter((r) =>
      [r.university, r.major, r.name, r.school, r.year]
        .join(" ")
        .toLowerCase()
        .includes(key),
    );
  }, [results, q]);

  const shown = filtered.slice(0, visible);

  return (
    <>
      {/* ===== 히어로 ===== */}
      <section className="relative isolate overflow-hidden bg-brand-dark text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-sm font-bold tracking-wide text-brand-light">2026 대입 실적</p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px]">
              눈부신 대입결과,
              <br className="sm:hidden" /> 5A 아카데미가 증명합니다
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
              최상위권 대학부터 의약학 계열까지 — 5A 아카데미 학생들의 합격 실적을 확인하세요.
            </p>
          </Reveal>

          {/* 카운터 */}
          <Reveal delay={120}>
            <div className="mt-9 grid grid-cols-3 gap-3 sm:max-w-2xl sm:gap-5">
              {[
                { label: "누적 합격", to: stats.total, suffix: "건" },
                { label: "진학 대학", to: stats.univ, suffix: "개교" },
                { label: "배출 고교", to: stats.school, suffix: "개교" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-white/15 bg-white/10 px-3 py-5 text-center backdrop-blur sm:px-5"
                >
                  <p className="text-2xl font-extrabold text-white sm:text-4xl">
                    <CountUp to={c.to} suffix={c.suffix} />
                  </p>
                  <p className="mt-1.5 text-[12px] font-medium text-white/70 sm:text-sm">{c.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 홍보영상 슬롯 */}
          <Reveal delay={220}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl">
              <div className="relative aspect-video w-full">
                {PROMO_VIDEO ? (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video
                    src={PROMO_VIDEO}
                    poster={PROMO_POSTER || undefined}
                    controls
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-dark to-brand text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <p className="text-sm font-semibold text-white/80">합격 스토리 홍보영상 준비 중</p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== 합격자 명단 ===== */}
      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold text-brand">5A 아카데미 대입결과</p>
              <h2 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">합격자 명단</h2>
            </div>
            <div className="relative sm:w-72">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setVisible(PAGE);
                }}
                placeholder="대학·학과·고교·이름 검색"
                className="w-full rounded-full border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition focus:border-brand"
              />
            </div>
          </div>
        </Reveal>

        {/* PC 표 */}
        <Reveal delay={80} className="mt-7 hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="w-16 px-4 py-3.5 text-center font-semibold">No.</th>
                  <th className="px-4 py-3.5 text-left font-semibold">대학</th>
                  <th className="px-4 py-3.5 text-left font-semibold">학과</th>
                  <th className="px-4 py-3.5 text-center font-semibold">이름</th>
                  <th className="px-4 py-3.5 text-center font-semibold">출신고교</th>
                  <th className="w-24 px-4 py-3.5 text-center font-semibold">학년도</th>
                </tr>
              </thead>
              <tbody>
                {shown.map((r, i) => (
                  <tr key={r.id} className="border-t border-line transition-colors hover:bg-brand-light/40">
                    <td className="px-4 py-3.5 text-center text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3.5 font-bold text-ink">{r.university}</td>
                    <td className="px-4 py-3.5 text-gray-700">{r.major}</td>
                    <td className="px-4 py-3.5 text-center font-medium text-gray-800">{r.name}</td>
                    <td className="px-4 py-3.5 text-center text-gray-600">{r.school}</td>
                    <td className="px-4 py-3.5 text-center text-gray-500">{r.year}</td>
                  </tr>
                ))}
                {shown.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-16 text-center text-sm text-muted">
                      검색 결과가 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* 모바일 카드 */}
        <div className="mt-7 space-y-3 lg:hidden">
          {shown.map((r, i) => (
            <Reveal key={r.id} delay={Math.min(i, 6) * 40}>
              <div className="rounded-xl border border-line bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-ink">{r.university}</p>
                  <span className="rounded bg-brand-light px-2 py-0.5 text-[11px] font-semibold text-brand">{r.year}</span>
                </div>
                <p className="mt-1 text-sm text-gray-700">{r.major}</p>
                <p className="mt-2 text-[13px] text-gray-500">
                  {r.name} · {r.school}
                </p>
              </div>
            </Reveal>
          ))}
          {shown.length === 0 && (
            <p className="rounded-xl border border-dashed border-line py-14 text-center text-sm text-muted">
              검색 결과가 없습니다.
            </p>
          )}
        </div>

        {/* 더보기 */}
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
