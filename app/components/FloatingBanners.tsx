"use client";

import Link from "next/link";
import { useState } from "react";

/** 롤링창 좌측 플로팅 배너 버튼 (PC 전용) */
const ITEMS = [
  { img: "/floating-winter.png", alt: "2027 윈터스쿨 모집안내 바로가기", href: "/admission/winter" },
  { img: "/floating-schedule.png", alt: "고등부 단과 시간표 바로보기", href: "/schedule" },
  { img: "/floating-sms.png", alt: "모집 및 설명회 문자알리미 신청", href: "/events" },
];

export default function FloatingBanners() {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      {/* ===== 배너 스택 ===== */}
      <aside
        aria-label="바로가기"
        aria-hidden={hidden}
        className={
          "fixed left-16 top-24 z-40 hidden origin-top flex-col items-center gap-2.5 transition-all duration-500 ease-out min-[1400px]:flex " +
          (hidden ? "pointer-events-none -translate-y-[140%] opacity-0" : "translate-y-0 opacity-100")
        }
      >
        {ITEMS.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            aria-label={it.alt}
            tabIndex={hidden ? -1 : 0}
            className="group block w-[104px] overflow-hidden rounded-xl border border-line bg-white shadow-[0_5px_16px_rgba(30,42,99,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_9px_24px_rgba(30,42,99,0.2)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.img} alt={it.alt} width={120} height={120} className="block h-auto w-full" />
          </Link>
        ))}
        <button
          onClick={() => setHidden(true)}
          className="mt-0.5 flex items-center gap-1 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white transition hover:bg-ink"
          aria-label="바로가기 숨기기"
        >
          숨기기
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 15l6-6 6 6" />
          </svg>
        </button>
      </aside>

      {/* ===== 다시 열기 탭 ===== */}
      <button
        onClick={() => setHidden(false)}
        aria-label="바로가기 열기"
        aria-hidden={!hidden}
        tabIndex={hidden ? 0 : -1}
        className={
          "fixed left-10 top-24 z-40 hidden items-center gap-1 rounded-full bg-ink/70 px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_5px_16px_rgba(30,42,99,0.18)] transition-all duration-300 ease-out hover:bg-ink min-[1400px]:flex " +
          (hidden ? "translate-y-0 opacity-100 delay-200" : "pointer-events-none -translate-y-2 opacity-0")
        }
      >
        바로가기
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </>
  );
}
