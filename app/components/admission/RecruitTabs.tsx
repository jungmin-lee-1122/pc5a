import Link from "next/link";

const TABS = [
  { label: "2027 윈터스쿨", href: "/admission/winter" },
  { label: "고등 올케어반", href: "/admission/allcare" },
  { label: "2027 고등단과", href: "/schedule" },
];

export default function RecruitTabs({ active }: { active: string }) {
  return (
    <div className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto border-b border-line px-5 sm:mx-0 sm:gap-2 sm:px-0">
      {TABS.map((t) => {
        const on = t.href === active;
        return (
          <Link
            key={t.href}
            href={t.href}
            className={
              "shrink-0 whitespace-nowrap border-b-2 px-3 py-3.5 text-sm transition-colors sm:px-5 " +
              (on
                ? "border-ink font-bold text-ink"
                : "border-transparent font-medium text-gray-400 hover:text-ink")
            }
          >
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
