"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Notice } from "@/lib/types";

export default function NoticesView({ notices }: { notices: Notice[] }) {
  const sorted = useMemo(
    () => [...notices].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    [notices],
  );

  // 분류가 있는 항목이 2개 이상일 때만 탭을 노출합니다.
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const n of sorted) if (n.category) set.add(n.category);
    return Array.from(set);
  }, [sorted]);
  const showTabs = categories.length > 1;

  const [filter, setFilter] = useState<string>("전체");
  const list =
    filter === "전체" ? sorted : sorted.filter((n) => (n.category ?? "") === filter);

  return (
    <div>
      {showTabs && (
        <div className="mb-6 flex flex-wrap gap-2">
          {["전체", ...categories].map((f) => {
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
                {f}
              </button>
            );
          })}
        </div>
      )}

      {list.length === 0 ? (
        <div className="rounded-2xl border border-line py-20 text-center text-sm text-muted">
          등록된 공지사항이 없습니다.
        </div>
      ) : (
        <ul className="overflow-hidden rounded-2xl border border-line bg-white">
          {list.map((n) => {
            const external = n.href && n.href !== "#";
            const href = external ? n.href : `/notices/${n.id}`;
            return (
              <li key={n.id} className="border-b border-line last:border-0">
                <Link
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-brand-light/40 sm:px-6"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {n.category && (
                        <span className="rounded bg-brand-light px-2 py-0.5 text-xs font-bold text-brand">
                          {n.category}
                        </span>
                      )}
                      {n.badge && (
                        <span className="rounded bg-red-50 px-1.5 py-0.5 text-[11px] font-bold text-red-500">
                          {n.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 truncate text-[15px] font-medium text-ink transition-colors group-hover:text-brand">
                      {n.title}
                    </p>
                  </div>
                  <span className="shrink-0 text-[13px] text-gray-400">{n.date}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
