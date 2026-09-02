"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { EventItem, EventStatus } from "@/lib/types";
import { targetLabel } from "@/lib/types";
import StatusBadge from "./StatusBadge";

type Filter = "전체" | EventStatus;
const FILTERS: Filter[] = ["전체", "접수중", "접수예정", "마감"];

// 아이콘 (일시/장소)
function Meta({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] text-gray-500">
      <span className="text-gray-400">{icon}</span>
      {children}
    </span>
  );
}

const IconCal = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconPin = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

export default function EventsView({ events }: { events: EventItem[] }) {
  const [filter, setFilter] = useState<Filter>("전체");

  const sorted = useMemo(
    () => [...events].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    [events],
  );
  const counts = useMemo(() => {
    const c: Record<string, number> = { 전체: sorted.length, 접수중: 0, 접수예정: 0, 마감: 0 };
    for (const e of sorted) c[e.status ?? "접수중"]++;
    return c;
  }, [sorted]);

  const list = filter === "전체" ? sorted : sorted.filter((e) => (e.status ?? "접수중") === filter);

  return (
    <div>
      {/* 상태 필터 탭 */}
      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const on = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={
                on
                  ? "rounded-full bg-ink px-4 py-2 text-sm font-bold text-white"
                  : "rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-gray-300"
              }
            >
              {f} <span className={on ? "text-white/70" : "text-gray-400"}>{counts[f] ?? 0}</span>
            </button>
          );
        })}
      </div>

      {/* 목록 */}
      {list.length === 0 ? (
        <div className="rounded-2xl border border-line py-20 text-center text-sm text-muted">
          해당하는 설명회가 없습니다.
        </div>
      ) : (
        <ul className="space-y-4">
          {list.map((e) => {
            const closed = (e.status ?? "접수중") === "마감";
            const isDb = /DB\s*제공/.test(e.title ?? "");
            return (
              <li key={e.id}>
                <Link
                  href={`/events/${e.id}`}
                  className={
                    isDb
                      ? "group block rounded-2xl border border-brand/25 border-l-[5px] border-l-brand bg-brand-light/25 p-5 shadow-sm transition-colors hover:border-brand/50 sm:p-6"
                      : "group block rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand/40 sm:p-6"
                  }
                >
                  <div className="mb-2.5 flex flex-wrap items-center gap-2">
                    <StatusBadge status={e.status} />
                    <span className="rounded bg-brand-light px-2 py-0.5 text-xs font-bold text-brand">
                      {e.category}
                    </span>
                    {targetLabel(e.targets) && (
                      <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">
                        {targetLabel(e.targets)}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-brand">
                    {e.title}
                  </h3>
                  {e.summary && <p className="mt-1.5 text-sm text-muted">{e.summary}</p>}

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {e.eventDate && <Meta icon={IconCal}>{e.eventDate}</Meta>}
                    {e.location && <Meta icon={IconPin}>{e.location}</Meta>}
                  </div>

                  <div className="mt-4 border-t border-line pt-3.5 text-right">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      {closed ? "내용 보기" : "자세히 보고 예약"}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
