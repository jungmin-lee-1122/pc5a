import type { Metadata } from "next";
import Link from "next/link";
import { getAllCourses } from "@/lib/content";
import { SCHEDULE_TABS } from "@/lib/types";
import CategoryTabs from "@/app/components/schedule/CategoryTabs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "단과시간표 | 5A 아카데미",
  description: "5A 아카데미 단과 강좌 시간표",
};

export default async function SchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active =
    category && SCHEDULE_TABS.some((t) => t.label === category) ? category : SCHEDULE_TABS[0].label;
  const tab = SCHEDULE_TABS.find((t) => t.label === active)!;

  const list = (await getAllCourses()).filter((c) => tab.targets.includes(c.target));

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
          <p className="mt-2 text-sm text-muted">모집대상별 단과 강좌를 확인하세요.</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <CategoryTabs active={active} />

        <div className="mt-7">
          {list.length === 0 ? (
            <div className="rounded-2xl border border-line py-20 text-center text-sm text-muted">
              등록된 강좌가 없습니다.
            </div>
          ) : (
            <ul className="space-y-4">
              {list.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/schedule/${c.id}`}
                    className="group block rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand/40 sm:p-6"
                  >
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded bg-ink px-2 py-0.5 text-xs font-bold text-white">{c.target}</span>
                      {(c.tags ?? []).map((t) => (
                        <span key={t} className="rounded bg-brand-light px-2 py-0.5 text-xs font-bold text-brand">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-ink transition-colors group-hover:text-brand">
                      {c.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-gray-500">
                      <span className="font-semibold text-gray-600">{c.teacherName} 선생님</span>
                      {c.startDate && <span>개강 {c.startDate}</span>}
                      {c.time && <span>{c.time}</span>}
                      {c.price && <span className="font-semibold text-ink">{c.price}</span>}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
