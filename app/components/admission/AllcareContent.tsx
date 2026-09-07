"use client";

import Link from "next/link";
import AllcareHero from "@/app/components/admission/AllcareHero";

// 세부 이동 탭 (대탭 바로 아래 sticky)
const SECTIONS = [
  { label: "올케어반이란?", target: "ac-about" },
  { label: "관리 방식", target: "ac-manage" },
  { label: "맞춤 시간표", target: "ac-habit" },
  { label: "선정 기준", target: "ac-criteria" },
  { label: "재원생 후기", target: "ac-review" },
];

// 히어로 아래 섹션 이미지 (풀블리드)
const IMG_SECTIONS = [
  { id: "ac-about", src: "/allcare-s4.png", bg: "#EFEFEF", alt: "Q. 고등부 올케어반이란?" },
  { id: "ac-manage", src: "/allcare-s1.png", bg: "#A6D4FE", alt: "학습·생활·입시 관리가 필요한 학생을 위한 PREMIUM ALL-CARE — 학습관리·생활관리·자습관리" },
  { id: "ac-habit", src: "/allcare-s2.png", bg: "#EFEFEF", alt: "혼자서는 잡기 어려운 공부습관, 철저한 관리로 올케어반과 함께 — 나만의 맞춤 시간표" },
  { id: "ac-criteria", src: "/allcare-s5.png", bg: "#C4EAE7", alt: "학년별 맞춤 선정 기준 안내 — 올케어반 선정기준" },
  { id: "ac-review", src: "/allcare-s3.png", bg: "#1050FF", alt: "실제 올케어반 재원생 후기" },
];

export default function AllcareContent() {
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  return (
    <>
      {/* ===== 섹션 이동 탭 ===== */}
      <div className="sticky top-20 z-30 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="no-scrollbar flex items-center gap-1 overflow-x-auto sm:gap-2">
            {SECTIONS.map((s) => (
              <button
                key={s.target}
                onClick={() => goTo(s.target)}
                className="shrink-0 whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500 transition-colors hover:text-brand sm:px-4"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AllcareHero />

      {/* ===== 섹션 1~5 (풀블리드 이미지) ===== */}
      {IMG_SECTIONS.map((s) => (
        <section key={s.id} id={s.id} className="w-full scroll-mt-32" style={{ backgroundColor: s.bg }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt={s.alt} className="block w-full select-none" draggable={false} />
        </section>
      ))}

      {/* ===== CTA ===== */}
      <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-brand to-[#4a5fd0]">
        {/* 장식 원 */}
        <span aria-hidden className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <span aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/[0.07]" />

        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-20 lg:px-8">
          <h2 className="text-2xl font-extrabold leading-snug text-white sm:text-[32px]">
            지금, 올케어반 접수하세요
          </h2>
          <p className="mt-3 text-sm text-blue-50/90 sm:text-base">
            모집대상 : <b className="font-bold text-white">고1 · 고2 · 고3</b> 재학생
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/life/counsel"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand shadow-md shadow-brand-dark/20 transition hover:bg-blue-50"
            >
              올케어반 접수하기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/schedule"
              className="rounded-xl border border-white/50 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              학년별 단과 시간표 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
