"use client";

import { useEffect, useState } from "react";

// 2026학년도 수능일: 2026년 11월 19일 (목) — 매년 바뀌면 이 값만 수정하세요.
const EXAM_YEAR = 2026;
const EXAM_MONTH = 11; // 1~12
const EXAM_DAY = 19;

export default function Dday() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const exam = new Date(EXAM_YEAR, EXAM_MONTH - 1, EXAM_DAY);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = Math.round((exam.getTime() - today.getTime()) / 86_400_000);
    setDays(diff);
  }, []);

  if (days === null || days < 0) return null; // 계산 전 / 수능 이후엔 표시 안 함
  const label = days === 0 ? "D-DAY" : `D-${days}`;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[12px] font-medium text-gray-600 sm:px-3.5 sm:text-[13px]">
      수능일까지
      <span className="font-bold text-brand">{label}</span>
    </span>
  );
}
