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
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <aside
      aria-label="바로가기"
      className="fixed left-4 top-24 z-40 hidden flex-col items-center gap-2.5 min-[1400px]:flex"
    >
      {ITEMS.map((it) => (
        <Link
          key={it.href}
          href={it.href}
          aria-label={it.alt}
          className="group block w-[104px] overflow-hidden rounded-xl border border-line bg-white shadow-[0_5px_16px_rgba(30,42,99,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_9px_24px_rgba(30,42,99,0.2)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={it.img} alt={it.alt} width={120} height={120} className="block h-auto w-full" />
        </Link>
      ))}
      <button
        onClick={() => setOpen(false)}
        className="mt-0.5 flex items-center gap-1 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white transition hover:bg-ink"
        aria-label="바로가기 닫기"
      >
        닫기
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>
    </aside>
  );
}
