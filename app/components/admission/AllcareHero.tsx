"use client";

import { useEffect, useRef, useState } from "react";

const BUBBLE = "ALL-CARE 프로그램";
const CHARS = Array.from(BUBBLE);
const BASE = 640; // 말풍선이 올라온 뒤 글자 시작(ms)
const STEP = 60; // 글자 간 간격(ms)

export default function AllcareHero() {
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
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const subDelay = BASE + CHARS.length * STEP - 120;

  return (
    <section ref={ref} className="w-full" style={{ backgroundColor: "#357CD1" }}>
      <div className="w-full">
        {/* 이미지 폭 기준 컨테이너 쿼리 → 글자/여백이 배경과 함께 스케일 */}
        <div className="relative w-full [container-type:inline-size]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/allcare-hero.png"
            alt="고등부를 위한 프리미엄 올케어 프로그램"
            className="block w-full select-none"
            draggable={false}
          />

          {/* ===== 말풍선: ALL-CARE 프로그램 ===== */}
          <div
            className="absolute left-[31%] top-[52.5%] origin-bottom-left transition-all duration-[600ms] ease-out"
            style={{ opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(7%)" }}
          >
            <div className="relative inline-block whitespace-nowrap rounded-[1.9cqw] bg-white px-[2.6cqw] py-[1.25cqw] shadow-[0_6px_20px_rgba(20,40,90,0.16)]">
              <span className="text-[3.1cqw] font-extrabold leading-none tracking-tight text-[#111]">
                {CHARS.map((ch, i) => (
                  <span
                    key={i}
                    className="inline-block transition-all duration-[420ms] ease-out"
                    style={{
                      opacity: on ? 1 : 0,
                      transform: on ? "translateY(0)" : "translateY(0.55em)",
                      transitionDelay: `${on ? BASE + i * STEP : 0}ms`,
                    }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
              {/* 꼬리 */}
              <span
                aria-hidden
                className="absolute -bottom-[1cqw] left-[2.4cqw] h-[2.2cqw] w-[2.2cqw] rotate-45 rounded-[0.4cqw] bg-white"
              />
            </div>
          </div>

          {/* ===== 서브 카피 ===== */}
          <p
            className="absolute left-[50.4%] top-[64%] w-[80%] text-center text-[2cqw] font-bold leading-[1.5] text-white transition-all duration-[700ms] ease-out"
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "translate(-50%, 0)" : "translate(-50%, 1.2cqw)",
              transitionDelay: `${on ? subDelay : 0}ms`,
            }}
          >
            수업부터 자습, 생활·입시관리까지
            <br />
            빈틈없는 하루를 완성!
          </p>
        </div>
      </div>
    </section>
  );
}
