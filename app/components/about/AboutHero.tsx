"use client";

import { useEffect, useState } from "react";

const LINES = ["입시를 제대로 아는 곳", "학습을 제대로 시키는 곳", "목표대학에 합격시키는 곳"];

export default function AboutHero() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOn(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0d0f1a]">
      {/* 손글씨 폰트 */}
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
        rel="stylesheet"
      />

      {/* 배경 사진 (천천히 확대) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/about-hero.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full select-none object-cover transition-transform duration-[6000ms] ease-out"
        style={{ transform: on ? "scale(1.06)" : "scale(1)" }}
      />
      {/* 어둡게 */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />

      {/* 내용 */}
      <div className="relative mx-auto flex min-h-[64vh] max-w-6xl items-center justify-center px-5 py-20 lg:px-8 lg:py-24">
        {/* 프레임 */}
        <div
          className="w-full max-w-2xl border border-white/35 px-6 py-16 text-center transition-all duration-[900ms] ease-out sm:px-10 sm:py-20"
          style={{ opacity: on ? 1 : 0, transform: on ? "scale(1)" : "scale(0.97)" }}
        >
          <div className="space-y-2 sm:space-y-2.5">
            {LINES.map((line, i) => (
              <p
                key={line}
                className="text-[17px] font-medium leading-relaxed text-white/90 transition-all duration-[700ms] ease-out sm:text-xl"
                style={{
                  opacity: on ? 1 : 0,
                  transform: on ? "translateY(0)" : "translateY(14px)",
                  transitionDelay: `${on ? 350 + i * 180 : 0}ms`,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <p
            className="mt-10 text-4xl leading-tight text-white transition-all duration-[900ms] ease-out sm:mt-12 sm:text-5xl"
            style={{
              fontFamily: "'Nanum Pen Script', system-ui, sans-serif",
              opacity: on ? 1 : 0,
              transform: on ? "translateY(0)" : "translateY(18px)",
              transitionDelay: `${on ? 1050 : 0}ms`,
            }}
          >
            그 곳에 5A아카데미가 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
