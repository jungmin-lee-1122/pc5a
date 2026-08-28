import type { Stats } from "@/lib/types";

export default function StatsBanner({ stats }: { stats: Stats }) {
  const items = [...stats.items].sort((a, b) => a.order - b.order);

  return (
    <section className="mx-auto max-w-7xl px-5 pt-5 lg:px-8">
      <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-accent to-accent-2 px-7 py-6 text-white shadow-sm md:flex-row md:items-center md:justify-between">
        {/* 왼쪽: 브랜드 + 타이틀 */}
        <div className="flex items-center gap-3">
          <TrophyIcon />
          <div>
            <p className="text-[13px] font-medium text-white/80">{stats.brand}</p>
            <p className="flex items-center gap-1.5 text-xl font-extrabold">
              {stats.title}
              <span
                title={stats.note}
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/60 text-[10px] font-normal"
              >
                i
              </span>
              <span className="text-[12px] font-normal text-white/70">{stats.note}</span>
            </p>
          </div>
        </div>

        {/* 오른쪽: 통계 항목 */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 md:flex md:items-center md:gap-0">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={`flex flex-col items-center px-4 md:px-8 ${
                i > 0 ? "md:border-l md:border-white/25" : ""
              }`}
            >
              <span className="text-[13px] text-white/80">{item.label}</span>
              <span className="text-2xl font-extrabold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrophyIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" />
    </svg>
  );
}
