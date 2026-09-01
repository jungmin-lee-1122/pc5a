"use client";

import { useEffect, useRef } from "react";
import { WINTER_CSS, WINTER_HTML, WINTER_JS } from "./winterData";
import AdmissionTabs from "@/app/components/admission/AdmissionTabs";

// 페이지 내 섹션으로 스크롤 이동하는 탭
const TABS: { label: string; target: string }[] = [
  { label: "2027 윈터스쿨", target: "top" },
  { label: "모집안내", target: "#detail" },
  // { label: "수업안내", target: ".section-white" }, // 임시 숨김 (추후 다른 콘텐츠 예정)
  { label: "접수안내", target: ".cta" },
];

export default function WinterPage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    document.title = "2027 윈터스쿨 | 5A 아카데미";
    const host = hostRef.current;
    if (!host) return;

    let shadow = shadowRef.current;
    if (!shadow) {
      shadow = host.attachShadow({ mode: "open" });
      shadowRef.current = shadow;
    }

    // Shadow DOM 격리를 위해 전역 셀렉터를 :host 로 치환 (변수/바디 스타일이 셰도우에 적용되도록)
    const css = WINTER_CSS
      .replace(/:root\s*\{/g, ":host{")
      .replace(/html\s*,\s*body\s*\{/g, ":host{")
      .replace(/(^|[^\w-])body\s*\{/g, "$1:host{")
      .replace(/(^|[^\w-])html\s*\{/g, "$1:host{");

    shadow.innerHTML = `<style>${css}</style>${WINTER_HTML}`;

    // 원본 스크립트: document 질의를 셰도우 루트로 치환 (createElement 는 유지)
    const js = WINTER_JS
      .replace(/document\.querySelectorAll/g, "root.querySelectorAll")
      .replace(/document\.querySelector/g, "root.querySelector");
    try {
      new Function("root", js)(shadow);
    } catch (e) {
      console.error("[winter] script error", e);
    }
  }, []);

  const goTo = (target: string) => {
    if (target === "top") {
      const y = (hostRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - 136;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      return;
    }
    const el = shadowRef.current?.querySelector(target) as HTMLElement | null;
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 136;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  return (
    <main className="flex-1">
      {/* 폰트 (원본과 동일) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        rel="stylesheet"
      />

      {/* 헤더밴드 (다른 페이지와 동일 크기) */}
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

      {/* 모집안내 대탭 */}
      <AdmissionTabs contained />

      {/* 섹션 이동 탭 */}
      <div className="sticky top-20 z-30 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="no-scrollbar flex items-center gap-1 overflow-x-auto sm:gap-2">
            {TABS.map((t) => (
              <button
                key={t.label}
                onClick={() => goTo(t.target)}
                className="shrink-0 whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500 transition-colors hover:text-brand sm:px-4"
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 윈터스쿨 콘텐츠 (Shadow DOM 격리) — 전체 폭 꽉 채움 */}
      <div ref={hostRef} className="w-full" />
    </main>
  );
}
