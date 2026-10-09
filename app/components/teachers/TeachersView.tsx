"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Teacher } from "@/lib/types";


// 모바일 탭에서 쓰는 짧은 이름
const SHORT_TAB: Record<string, string> = { 사회탐구: "사탐", 과학탐구: "과탐" };

export default function TeachersView({
  teachers,
  subjects,
}: {
  teachers: Teacher[];
  subjects: string[];
}) {
  const TABS = useMemo(() => ["전체", ...subjects], [subjects]);

  // 활성 과목은 URL(?subject=)에서 읽는다 → 네비 드롭다운/버튼/주소가 항상 일치
  const sp = useSearchParams();
  const raw = sp.get("subject");
  const active = raw && TABS.includes(raw) ? raw : "전체";

  const list = useMemo(() => {
    const base = teachers
      .filter((t) => t.active && !t.hidden)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    return active === "전체" ? base : base.filter((t) => t.subject === active);
  }, [teachers, active]);

  return (
    <div>
      {/* 과목 탭 (URL을 바꾸는 링크) */}
      {/* 모바일: 한 줄로 균등 배치(짧은 이름) / PC: 기존 알약 버튼 */}
      <div className="no-scrollbar mb-7 flex gap-1 overflow-x-auto sm:flex-wrap sm:gap-2 sm:overflow-visible">
        {TABS.map((tab) => {
          const on = active === tab;
          const href =
            tab === "전체" ? "/teachers" : `/teachers?subject=${encodeURIComponent(tab)}`;
          return (
            <Link
              key={tab}
              href={href}
              scroll={false}
              aria-current={on ? "page" : undefined}
              className={
                "min-w-0 flex-1 basis-0 whitespace-nowrap rounded-full py-2 text-center text-[13px] sm:flex-none sm:basis-auto sm:px-4 sm:text-sm " +
                (on
                  ? "bg-ink font-bold text-white"
                  : "border border-line bg-white font-medium text-gray-600 hover:border-gray-300")
              }
            >
              <span className="sm:hidden">{SHORT_TAB[tab] ?? tab}</span>
              <span className="hidden sm:inline">{tab}</span>
            </Link>
          );
        })}
      </div>

      {/* 카드 그리드 */}
      {list.length === 0 ? (
        <div className="rounded-2xl border border-line py-20 text-center text-sm text-muted">
          등록된 {active === "전체" ? "" : active + " "}선생님이 없습니다.
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((t) => (
            <li key={t.id} className="min-w-0">
              <TeacherCard teacher={t} active={active} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TeacherCard({ teacher, active }: { teacher: Teacher; active: string }) {
  const careerLines = (teacher.career ?? "").split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <Link
      href={`/teachers/${teacher.id}?subject=${encodeURIComponent(active)}`}
      className="group relative block aspect-[266/288] overflow-hidden rounded-2xl border border-line bg-white transition hover:border-brand/40"
    >
      <div className="relative z-10 p-5">
        <div className="flex flex-wrap gap-1.5">
          {teacher.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-line bg-gray-50 px-1.5 py-0.5 text-[11px] font-semibold text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-[13px] font-semibold text-brand">{teacher.subject}</p>
        <p className="text-[22px] font-extrabold leading-tight text-ink">{teacher.name}</p>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={teacher.photo}
        alt={`${teacher.name} 선생님`}
        className="pointer-events-none absolute bottom-0 right-0 h-[78%] w-auto max-w-[85%] object-contain object-bottom transition duration-300 group-hover:scale-105"
      />
      {careerLines.length > 0 && (
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-brand-dark/95 via-brand-dark/80 to-brand-dark/10 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-light">약력</p>
          <ul className="space-y-1">
            {careerLines.map((line, i) => (
              <li key={i} className="text-[12.5px] font-medium leading-snug text-white/90">{line}</li>
            ))}
          </ul>
        </div>
      )}
    </Link>
  );
}
