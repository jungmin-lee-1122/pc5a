"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Teacher } from "@/lib/types";

// 모바일에서 한 줄에 담기 위한 짧은 라벨
const SHORT: Record<string, string> = { 사회탐구: "사탐", 과학탐구: "과탐" };

export default function Teachers({
  teachers,
  subjects,
}: {
  teachers: Teacher[];
  subjects: string[];
}) {
  const TABS = useMemo(() => ["전체", ...subjects], [subjects]);
  const [active, setActive] = useState("전체");
  const [canScroll, setCanScroll] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = useMemo(() => {
    const base = teachers.filter((t) => t.active).sort((a, b) => a.order - b.order);
    return active === "전체" ? base : base.filter((t) => t.subject === active);
  }, [teachers, active]);

  // 카드 한 장 + 간격 만큼 이동 (첫 카드 실측, 폴백 282px)
  const step = useCallback(() => {
    const el = scroller.current;
    const first = el?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 16 : 282;
  }, []);

  const scrollByDir = useCallback(
    (dir: number) => {
      scroller.current?.scrollBy({ left: dir * step(), behavior: "smooth" });
    },
    [step],
  );

  // 실제로 넘칠 때만 버튼/자동재생 활성화 (모바일·데스크탑 공통)
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollWidth > el.clientWidth + 4);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener("resize", check);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, [filtered]);

  // 과목 탭 바뀌면 맨 앞으로
  useEffect(() => {
    scroller.current?.scrollTo({ left: 0 });
  }, [active]);

  // 자동 순환
  useEffect(() => {
    const el = scroller.current;
    if (!el || !canScroll) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollBy({ left: step(), behavior: "smooth" });
    }, 3500);
    return () => clearInterval(id);
  }, [canScroll, filtered, active, step]);

  const pause = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);
  const scheduleResume = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, 4000);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 lg:px-8">
      {/* 헤더: 라벨 + 과목 탭 */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-4">
        <h2 className="w-full text-2xl font-extrabold text-ink sm:w-auto">선생님</h2>
        <div className="flex w-full items-center gap-x-3 sm:w-auto sm:flex-1 sm:gap-x-5">
          <div className="flex items-center gap-x-3 gap-y-1 sm:flex-wrap sm:gap-x-5">
          {TABS.map((subject) => (
            <button
              key={subject}
              onClick={() => setActive(subject)}
              className={`shrink-0 whitespace-nowrap text-[15px] transition-colors ${
                active === subject
                  ? "font-bold text-brand"
                  : "font-medium text-gray-500 hover:text-ink"
              }`}
            >
              <span className="sm:hidden">{SHORT[subject] ?? subject}</span>
              <span className="hidden sm:inline">{subject}</span>
            </button>
          ))}
        </div>
        <Link
          href="/teachers"
          className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-brand-light hover:text-brand"
          aria-label="강사진 전체 보기"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </Link>
        </div>
      </div>

      {/* 카드 캐러셀 */}
      <div className="relative mt-6">
        {filtered.length === 0 ? (
          <div className="flex h-40 items-center justify-center text-muted">
            등록된 {active === "전체" ? "" : active + " "}선생님이 없습니다
          </div>
        ) : (
          <>
            <div
              ref={scroller}
              onMouseEnter={pause}
              onMouseLeave={scheduleResume}
              onPointerDown={pause}
              onTouchEnd={scheduleResume}
              className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-2"
            >
              {filtered.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>

            {canScroll && (
              <>
                <button
                  onClick={() => scrollByDir(1)}
                  aria-label="다음 강사"
                  className="absolute -right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/95 text-gray-600 shadow-md backdrop-blur transition hover:text-brand lg:-right-3"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollByDir(-1)}
                  aria-label="이전 강사"
                  className="absolute -left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/95 text-gray-600 shadow-md backdrop-blur transition hover:text-brand lg:-left-3"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}

function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <Link
      href={`/teachers/${teacher.id}?subject=${encodeURIComponent(teacher.subject)}`}
      className="group relative h-[276px] w-[266px] shrink-0 overflow-hidden rounded-2xl border border-line bg-white transition"
    >
      {/* 텍스트 (위) */}
      <div className="relative z-10 p-6">
        <div className="flex gap-1.5">
          {teacher.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-line bg-gray-50 px-1.5 py-0.5 text-[11px] font-semibold text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-5 text-[14px] font-semibold text-brand">{teacher.subject}</p>
        <p className="text-[26px] font-extrabold leading-tight text-ink">{teacher.name}</p>
      </div>

      {/* 사진 (오른쪽 아래를 크게 채움) */}
      <img
        src={teacher.photo}
        alt={`${teacher.name} 선생님`}
        className="pointer-events-none absolute bottom-0 right-0 h-[80%] w-auto max-w-[80%] object-contain object-bottom transition duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
