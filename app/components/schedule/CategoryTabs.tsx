import Link from "next/link";
import { SCHEDULE_TABS } from "@/lib/types";

export default function CategoryTabs({ active }: { active: string }) {
  return (
    <div className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto border-b border-line px-5 sm:mx-0 sm:gap-2 sm:px-0">
      {SCHEDULE_TABS.map((t) => {
        const on = t.label === active;
        return (
          <Link
            key={t.label}
            href={`/schedule?category=${encodeURIComponent(t.label)}`}
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
