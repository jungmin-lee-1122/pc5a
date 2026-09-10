import type { Metadata } from "next";
import Link from "next/link";
import { getAllCourses } from "@/lib/content";
import { SCHEDULE_TABS } from "@/lib/types";
import { SITE } from "@/config/homepage";
import CategoryTabs from "@/app/components/schedule/CategoryTabs";
import CourseTable from "@/app/components/schedule/CourseTable";
import AdmissionTabs from "@/app/components/admission/AdmissionTabs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "단과시간표 | 5A 아카데미",
  description: "5A 아카데미 단과 강좌 시간표 — 모집대상·과목별 안내",
};

export default async function SchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; subject?: string }>;
}) {
  const { category, subject } = await searchParams;
  const active =
    category && SCHEDULE_TABS.some((t) => t.label === category) ? category : SCHEDULE_TABS[0].label;
  const tab = SCHEDULE_TABS.find((t) => t.label === active)!;

  const SUBJECTS = ["전체", ...SITE.subjects];
  const activeSubject = subject && SITE.subjects.includes(subject) ? subject : "전체";

  let list = (await getAllCourses()).filter((c) => (c.target ?? []).some((t) => tab.targets.includes(t)));
  if (activeSubject !== "전체") list = list.filter((c) => c.subject === activeSubject);

  return (
    <main className="flex-1 pb-16">
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold text-brand">단과시간표</p>
              <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">단과시간표</h1>
              <p className="mt-2 text-sm text-muted">모집대상과 과목으로 원하는 강좌를 찾아보세요.</p>
            </div>

            {/* 9월 단과 브로셔 — 바로보기 · 다운로드 */}
            <div className="flex items-center gap-3 rounded-2xl border border-brand/15 bg-white/70 p-2.5 pl-4 shadow-[0_4px_16px_rgba(30,42,99,0.08)] backdrop-blur">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                  <path d="M9 13h6M9 17h4" />
                </svg>
              </span>
              <div className="mr-1 leading-tight">
                <p className="text-[13px] font-bold text-ink">2026 9월 단과 브로셔</p>
                <p className="text-[11px] text-muted">단과 강좌 안내 PDF</p>
              </div>
              <div className="flex gap-1.5">
                <a
                  href="/2026-09-schedule-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-brand px-3.5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  바로보기
                </a>
                <a
                  href="/2026-09-schedule-brochure.pdf"
                  download
                  className="inline-flex items-center gap-1 rounded-lg border border-line bg-white px-3 py-2 text-[13px] font-semibold text-gray-700 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
                    <path d="M5 21h14" />
                  </svg>
                  다운로드
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdmissionTabs contained />

      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        {/* 모집대상 탭 */}
        <CategoryTabs active={active} />

        {/* 과목 필터 */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-semibold text-gray-400">과목</span>
          {SUBJECTS.map((sub) => {
            const on = sub === activeSubject;
            const href =
              sub === "전체"
                ? `/schedule?category=${encodeURIComponent(active)}`
                : `/schedule?category=${encodeURIComponent(active)}&subject=${encodeURIComponent(sub)}`;
            return (
              <Link
                key={sub}
                href={href}
                className={
                  on
                    ? "rounded-full bg-brand px-3.5 py-1.5 text-sm font-bold text-white"
                    : "rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-gray-600 hover:border-gray-300"
                }
              >
                {sub}
              </Link>
            );
          })}
        </div>

        <div className="mt-7">
          <CourseTable courses={list} />
        </div>
      </div>
    </main>
  );
}
