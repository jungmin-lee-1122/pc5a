import type { EventStatus } from "@/lib/types";

const STYLES: Record<EventStatus, string> = {
  접수중: "bg-brand text-white",
  접수예정: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  마감: "bg-gray-100 text-gray-400 ring-1 ring-gray-200",
};

export default function StatusBadge({
  status,
  className = "",
}: {
  status?: EventStatus;
  className?: string;
}) {
  const s: EventStatus = status ?? "접수중";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${STYLES[s]} ${className}`}
    >
      {s}
    </span>
  );
}
