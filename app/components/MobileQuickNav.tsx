import Link from "next/link";

/** 모바일 전용 빠른 이동 바 (메인 상단) */
const ITEMS = [
  { label: "시간표", href: "/schedule" },
  { label: "모집요강", href: "/admission" },
  { label: "설명회", href: "/events" },
  { label: "온라인접수", href: "/life/counsel", strong: true },
];

export default function MobileQuickNav() {
  return (
    <nav className="border-b border-line bg-white lg:hidden" aria-label="빠른 이동">
      <div className="mx-auto flex max-w-6xl">
        {ITEMS.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className={
              "flex-1 py-4 text-center text-[15px] font-bold transition-colors " +
              (it.strong ? "text-brand" : "text-gray-800 hover:text-brand")
            }
          >
            {it.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
