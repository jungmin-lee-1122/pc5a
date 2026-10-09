import Link from "next/link";

/** 모바일 전용 빠른 이동 (메인 상단) — 아이콘 + 라벨 카드 4칸 */
type Item = { label: string; href: string; strong?: boolean; icon: React.ReactNode };

const S = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const ITEMS: Item[] = [
  {
    label: "시간표",
    href: "/schedule",
    icon: (
      <svg {...S}>
        <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
        <path d="M3 9.5h18M8 2.5v4M16 2.5v4M7.5 13.5h2M11 13.5h2M14.5 13.5h2M7.5 17h2M11 17h2" />
      </svg>
    ),
  },
  {
    label: "모집요강",
    href: "/admission",
    icon: (
      <svg {...S}>
        <path d="M14 2.5H6.5A2 2 0 0 0 4.5 4.5v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8z" />
        <path d="M14 2.5V8h5.5M8.5 13h7M8.5 17h5" />
      </svg>
    ),
  },
  {
    label: "설명회",
    href: "/events",
    icon: (
      <svg {...S}>
        <path d="M3 11.5v2a1 1 0 0 0 1 1h2l5 4v-12l-5 4H4a1 1 0 0 0-1 1z" />
        <path d="M15.5 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" />
      </svg>
    ),
  },
  {
    label: "온라인접수",
    href: "/life/counsel",
    strong: true,
    icon: (
      <svg {...S}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    ),
  },
];

export default function MobileQuickNav() {
  return (
    <nav className="px-5 pt-4 lg:hidden" aria-label="빠른 이동">
      <div className="mx-auto grid max-w-6xl grid-cols-4 gap-2">
        {ITEMS.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className={
              "flex flex-col items-center justify-center gap-1.5 rounded-2xl border py-3 transition active:scale-[0.97] " +
              (it.strong
                ? "border-brand bg-brand text-white shadow-[0_4px_14px_rgba(47,71,184,0.28)]"
                : "border-brand/10 bg-gradient-to-b from-brand-light to-[#f7f9ff] text-ink shadow-[0_2px_10px_rgba(30,42,99,0.06)]")
            }
          >
            <span
              className={
                "flex h-9 w-9 items-center justify-center rounded-xl " +
                (it.strong ? "bg-white/20 text-white" : "bg-white text-brand shadow-[0_1px_4px_rgba(47,71,184,0.12)]")
              }
            >
              {it.icon}
            </span>
            <span className="text-[13px] font-bold tracking-tight">{it.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
