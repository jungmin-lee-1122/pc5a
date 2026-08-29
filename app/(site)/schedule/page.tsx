import type { Metadata } from "next";
import Link from "next/link";
import { getAllCourses } from "@/lib/content";
import { SCHEDULE_TABS } from "@/lib/types";
import { SITE } from "@/config/homepage";
import CategoryTabs from "@/app/components/schedule/CategoryTabs";
import CourseTable from "@/app/components/schedule/CourseTable";

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
          <p className="text-sm font-bold text-brand">단과시간표</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">단과시간표</h1>
          <p className="mt-2 text-sm text-muted">모집대상과 과목으로 원하는 강좌를 찾아보세요.</p>
        </div>
      </div>

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
