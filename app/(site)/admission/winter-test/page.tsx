"use client";

import { useEffect, useRef } from "react";
import { WINTER_CSS, WINTER_HTML, WINTER_JS } from "./winterTestData";

/**
 * 2027 윈터스쿨 — 핸드오프 디자인 미리보기(테스트) 페이지.
 * 경로: /admission/winter-test  (기존 /admission/winter 는 건드리지 않음)
 * 사이트 공통 헤더·푸터·하단 상담바는 (site) 레이아웃에서 그대로 적용됨.
 */
export default function WinterTestPage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    document.title = "2027 윈터스쿨 (테스트) | 5A 아카데미 평촌점";
    const host = hostRef.current;
    if (!host) return;

    let shadow = shadowRef.current;
    if (!shadow) {
      shadow = host.attachShadow({ mode: "open" });
      shadowRef.current = shadow;
    }

    // 전역 셀렉터를 :host 로 치환해 셰도우에 격리 적용
    const css = WINTER_CSS
      .replace(/:root\s*\{/g, ":host{")
      .replace(/html\s*,\s*body\s*\{/g, ":host{")
      .replace(/(^|[^\w-])body\s*\{/g, "$1:host{")
      .replace(/(^|[^\w-])html\s*\{/g, "$1:host{");

    shadow.innerHTML = `<style>${css}</style>${WINTER_HTML}`;

    // document 질의/이벤트를 셰도우 루트로 치환 (셰도우 내부에선 e.target 리타게팅 없음)
    const js = WINTER_JS
      .replace(/document\.querySelectorAll/g, "root.querySelectorAll")
      .replace(/document\.querySelector/g, "root.querySelector")
      .replace(/document\.addEventListener/g, "root.addEventListener");
    try {
      new Function("root", js)(shadow);
    } catch (e) {
      console.error("[winter-test] script error", e);
    }
  }, []);

  return (
    <main className="flex-1">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Poppins:wght@600;700;800&display=swap"
        rel="stylesheet"
      />
      {/* 핸드오프 본문 (Shadow DOM 격리) */}
      <div ref={hostRef} className="w-full" />
    </main>
  );
}
