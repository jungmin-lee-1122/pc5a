import Link from "next/link";
import type { Notice, EventItem } from "@/lib/types";

export default function NoticeEvents({
  notices,
  events,
}: {
  notices: Notice[];
  events: EventItem[];
}) {
  const sortedNotices = [...notices].sort((a, b) => a.order - b.order);
  const sortedEvents = [...events].sort((a, b) => a.order - b.order);

  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-2">
        {/* 공지사항 */}
        <Panel>
          <PanelHeader title="공지사항" moreHref="/notices" />
          <ul>
            {sortedNotices.map((n) => (
              <Row key={n.id} href={n.href && n.href !== "#" ? n.href : `/notices/${n.id}`} title={n.title} date={n.date} badge={n.badge} />
            ))}
            {sortedNotices.length === 0 && <Empty>등록된 공지사항이 없습니다</Empty>}
          </ul>
        </Panel>

        {/* 입시설명회 */}
        <Panel>
          <PanelHeader title="입시설명회" moreHref="/events" />
          <ul>
            {sortedEvents.map((e) => (
              <Row key={e.id} href={e.href && e.href !== "#" ? e.href : `/events/${e.id}`} title={e.title} date={e.date} />
            ))}
            {sortedEvents.length === 0 && <Empty>등록된 입시설명회가 없습니다</Empty>}
          </ul>
        </Panel>
      </div>
    </section>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-line bg-white p-6 sm:p-7">{children}</div>;
}

function PanelHeader({ title, moreHref }: { title: string; moreHref: string }) {
  return (
    <div className="mb-2 flex items-center justify-between border-b border-line pb-4">
      <h3 className="text-lg font-extrabold text-ink">{title}</h3>
      <Link href={moreHref} aria-label={`${title} 더보기`} className="text-gray-400 hover:text-brand">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </Link>
    </div>
  );
}

function Row({
  href,
  title,
  date,
  badge,
}: {
  href: string;
  title: string;
  date: string;
  badge?: string;
}) {
  return (
    <li className="border-b border-line/70 last:border-0">
      <Link href={href} className="group flex items-center gap-3 py-3.5">
        <span className="flex-1 truncate text-[15px] text-gray-700 transition-colors group-hover:text-brand">
          {badge && (
            <span className="mr-2 rounded bg-brand-light px-1.5 py-0.5 text-[11px] font-bold text-brand">
              {badge}
            </span>
          )}
          {title}
        </span>
        <span className="shrink-0 text-[13px] text-gray-400">{date}</span>
      </Link>
    </li>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <li className="py-10 text-center text-sm text-muted">{children}</li>;
}
