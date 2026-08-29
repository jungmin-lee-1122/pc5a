import Link from "next/link";
import { COURSE_CATEGORIES } from "@/lib/types";

export default function CategoryTabs({ active }: { active: string }) {
  return (
    <div className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto border-b border-line px-5 sm:mx-0 sm:gap-2 sm:px-0">
      {COURSE_CATEGORIES.map((c) => {
        const on = c === active;
        return (
          <Link
            key={c}
            href={`/schedule?category=${encodeURIComponent(c)}`}
            className={
              "shrink-0 whitespace-nowrap border-b-2 px-3 py-3.5 text-sm transition-colors sm:px-5 " +
              (on
                ? "border-ink font-bold text-ink"
                : "border-transparent font-medium text-gray-400 hover:text-ink")
            }
          >
            {c}
          </Link>
        );
      })}
    </div>
  );
}
