"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Teacher } from "@/lib/types";

export default function Teachers({
  teachers,
  subjects,
}: {
  teachers: Teacher[];
  subjects: string[];
}) {
  const [active, setActive] = useState(subjects[0] ?? "");
  const scroller = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => teachers.filter((t) => t.active && t.subject === active).sort((a, b) => a.order - b.order),
    [teachers, active],
  );

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 lg:px-8">
      {/* 헤더: 라벨 + 과목 탭 */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-4">
        <h2 className="text-2xl font-extrabold text-ink">선생님</h2>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setActive(subject)}
              className={`text-[15px] transition-colors ${
                active === subject
                  ? "font-bold text-brand"
                  : "font-medium text-gray-500 hover:text-ink"
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
        <Link
          href="/teachers"
          className="ml-auto flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:bg-brand-light hover:text-brand"
          aria-label="강사진 전체 보기"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </Link>
      </div>

      {/* 카드 캐러셀 */}
      <div className="relative mt-6">
        {filtered.length === 0 ? (
          <div className="flex h-40 items-center justify-center text-muted">
            등록된 {active} 선생님이 없습니다
          </div>
        ) : (
          <>
            <div ref={scroller} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-2">
              {filtered.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>

            {filtered.length > 4 && (
              <>
                <button
                  onClick={() => scrollBy(1)}
                  aria-label="다음 강사"
                  className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-gray-500 transition hover:text-brand lg:flex"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollBy(-1)}
                  aria-label="이전 강사"
                  className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-gray-500 transition hover:text-brand lg:flex"
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
      href="/teachers"
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
