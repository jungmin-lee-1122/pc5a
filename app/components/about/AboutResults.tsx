"use client";

import { useEffect, useRef, useState } from "react";

const STATS: [string, string, string][] = [
  ["Medical 합격자의 ", "35%", "가 5A 출신입니다."],
  ["서울대 합격자의 ", "23%", "가 5A 학생이었습니다."],
  ["연고대 합격자의 ", "20%", "가 5A 출신 학생입니다."],
];
const REASONS = [
  "개별 맞춤 학습 분석으로 철저한 관리",
  "최고의 입시 전문가 그룹이 직접 지도",
  "상위권 학생을 위한 최적화된 학습 환경",
  "멘토진의 1:1 상담과 강사진의 전문 교육 지원",
];

export default function AboutResults() {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => e.some((x) => x.isIntersecting) && (setOn(true), io.disconnect()),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const up = (delay: number) => ({
    opacity: on ? 1 : 0,
    transform: on ? "translateY(0)" : "translateY(16px)",
    transition: "opacity 700ms ease-out, transform 700ms ease-out",
    transitionDelay: `${on ? delay : 0}ms`,
  });

  return (
    <section ref={ref} className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        {/* 사진 */}
        <div
          className="overflow-hidden rounded-2xl border border-line shadow-sm"
          style={{
            opacity: on ? 1 : 0,
            transform: on ? "translateX(0)" : "translateX(-24px)",
            transition: "opacity 800ms ease-out, transform 800ms ease-out",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/about-results.jpg" alt="5A 아카데미 입시설명회 현장" className="aspect-[4/3] w-full object-cover" />
        </div>

        {/* 텍스트 */}
        <div>
          <h2 className="text-2xl font-extrabold leading-snug text-ink sm:text-[28px]" style={up(120)}>
            5A아카데미 <span className="text-brand">– 최고의 입시 결과 증명</span>
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-gray-600" style={up(220)}>
            지난 4년간 최상위권 대학 합격 실적을 기록하며 대한민국 최고 수준의 성과를 만들어 왔습니다. 이는
            학부모님의 신뢰와 5A 학생들의 노력 덕분이며, 이제 평촌에서도 최고의 결과를 만들겠습니다.
            <br />
            <b className="font-bold text-ink">압도적인 성과 – 5A아카데미</b>
          </p>

          <ul className="mt-6 space-y-2.5">
            {STATS.map((s, i) => (
              <li key={s[1]} className="flex items-start gap-2 text-[15px] text-gray-700" style={up(340 + i * 110)}>
                <span className="mt-0.5 shrink-0 text-xs text-brand">▼</span>
                <span>
                  {s[0]}
                  <b className="font-extrabold text-brand">{s[1]}</b>
                  {s[2]}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[13.5px] leading-relaxed text-gray-400" style={up(700)}>
            고양/파주 지역 고3 학생 중 단 <b className="font-bold text-gray-500">1.5%</b>가 이뤄낸 놀라운 성과입니다.
          </p>

          <h3 className="mt-9 text-xl font-extrabold text-ink" style={up(820)}>
            왜 5A아카데미인가?
          </h3>
          <ul className="mt-4 space-y-2.5">
            {REASONS.map((r, i) => (
              <li key={r} className="flex items-start gap-2.5 text-[15px] font-medium text-gray-700" style={up(920 + i * 110)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-brand" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="currentColor" />
                  <path d="M8 12.5l2.5 2.5 5-5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
