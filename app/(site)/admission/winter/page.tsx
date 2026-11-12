"use client";

import { useEffect, useRef } from "react";
import AdmissionTabs from "@/app/components/admission/AdmissionTabs";
import { W27_CSS, initWinter27 } from "./winter27";
import { W27_HTML } from "./winter27Html";

// 본문은 pcjongro winter27 레퍼런스와 같은 UI·애니메이션(.jr-winter27)을 섀도 DOM 안에 그대로 렌더링
export default function WinterPage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    document.title = "2027 윈터스쿨 | 5A 아카데미 평촌점";
    const host = hostRef.current;
    if (!host) return;

    let shadow = shadowRef.current;
    if (!shadow) {
      shadow = host.attachShadow({ mode: "open" });
      shadowRef.current = shadow;
    }
    shadow.innerHTML = `<style>${W27_CSS}</style>${W27_HTML}`;
    const dispose = initWinter27(shadow);
    return () => dispose();
  }, []);

  return (
    <main className="flex-1">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Poppins:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">모집안내</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">2027 윈터스쿨</h1>
          <p className="mt-2 text-sm text-muted">2028 대입 개편, 준비는 이번 겨울부터.</p>
        </div>
      </div>

      <AdmissionTabs contained />

      <div ref={hostRef} className="w-full" />
    </main>
  );
}
