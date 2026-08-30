"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_MENUS } from "@/lib/nav";

// 모집안내 대탭 (2027 윈터스쿨 · 고등 올케어반 · 2027 고등단과)
// 현재 페이지는 브랜드색 + 밑줄로 강조. 2027 고등단과는 단과시간표(/schedule)로 이동.
export default function AdmissionTabs({ contained = false }: { contained?: boolean }) {
  const pathname = usePathname();
  const items = NAV_MENUS.find((m) => m.label === "모집안내")?.groups[0]?.items ?? [];

  return (
    <div className="border-b border-line bg-white">
      <div className={contained ? "mx-auto max-w-6xl px-5 lg:px-8" : "px-5 sm:px-8 lg:px-10"}>
        <nav className="no-scrollbar flex items-center gap-6 overflow-x-auto sm:gap-9">
          {items.map((it) => {
            const active = pathname === it.href;
            return (
              <Link
                key={it.href}
                href={it.href}
                aria-current={active ? "page" : undefined}
                className={`relative shrink-0 whitespace-nowrap py-4 text-[15px] font-bold tracking-tight transition-colors sm:text-base ${
                  active ? "text-brand" : "text-ink hover:text-brand"
                }`}
              >
                {it.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-px h-[3px] rounded-full bg-brand" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
