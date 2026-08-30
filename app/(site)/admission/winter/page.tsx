"use client";

import { useEffect } from "react";
import RecruitTabs from "@/app/components/admission/RecruitTabs";
import { WINTER_CSS, WINTER_HTML, WINTER_JS } from "./winterData";

export default function WinterPage() {
  useEffect(() => {
    document.title = "2027 윈터스쿨 | 5A 아카데미";
    // 원본 스크립트(눈 내리기 + 스크롤 등장) 실행
    try {
      new Function(WINTER_JS)();
    } catch (e) {
      console.error("[winter] script error", e);
    }
  }, []);

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

      {/* 헤더밴드 */}
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

      {/* 탭 */}
      <div className="mx-auto max-w-6xl px-5 pt-6 lg:px-8">
        <RecruitTabs active="/admission/winter" />
      </div>

      {/* 원본 스타일 + 콘텐츠 (윈터스쿨 전용) */}
      <div className="winter-embed">
        <style dangerouslySetInnerHTML={{ __html: WINTER_CSS }} />
        <div dangerouslySetInnerHTML={{ __html: WINTER_HTML }} />
      </div>
    </main>
  );
}
