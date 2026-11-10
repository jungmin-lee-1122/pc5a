"use client";

import { useEffect, useRef } from "react";
import { PRE_CSS, PRE_HTML } from "./winterPreData";

/**
 * 2027 PRE 윈터스쿨 — 핸드오프 디자인 미리보기(테스트) 페이지.
 * 경로: /admission/winter-pre-test  (승인 후 /admission/winter-pre 로 이관 예정)
 * 사이트 공통 헤더·푸터·하단 상담바는 (site) 레이아웃에서 그대로 적용됨.
 */
export default function WinterPreTestPage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    document.title = "2027 PRE 윈터스쿨 (테스트) | 5A 아카데미 평촌점";
    const host = hostRef.current;
    if (!host) return;

    let shadow = shadowRef.current;
    if (!shadow) {
      shadow = host.attachShadow({ mode: "open" });
      shadowRef.current = shadow;
    }

    const css = PRE_CSS
      .replace(/:root\s*\{/g, ":host{")
      .replace(/html\s*,\s*body\s*\{/g, ":host{")
      .replace(/(^|[^\w-])body\s*\{/g, "$1:host{")
      .replace(/(^|[^\w-])html\s*\{/g, "$1:host{");

    shadow.innerHTML = `<style>${css}</style>${PRE_HTML}`;
  }, []);

  return (
    <main className="flex-1">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Poppins:wght@600;700;800&display=swap"
        rel="stylesheet"
      />
      <div ref={hostRef} className="w-full" />
    </main>
  );
}
