import Link from "next/link";
import { targetLabel } from "@/lib/types";
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
        <div className="min-w-0">
          <PanelHeader title="공지사항" moreHref="/notices" />
          <Panel className="bg-[#F6F7FB]">
            <ul>
              {sortedNotices.map((n) => (
                <Row key={n.id} href={n.href && n.href !== "#" ? n.href : `/notices/${n.id}`} title={n.title} date={n.date} badge={n.badge} />
              ))}
              {sortedNotices.length === 0 && <Empty>등록된 공지사항이 없습니다</Empty>}
            </ul>
          </Panel>
        </div>

        {/* 입시설명회 */}
        <div className="min-w-0">
          <PanelHeader title="입시설명회" moreHref="/events" />
          <Panel className="bg-[#bedbff33]">
            <ul>
              {sortedEvents.map((e) => (
                <EventRow key={e.id} event={e} />
              ))}
              {sortedEvents.length === 0 && <Empty>등록된 입시설명회가 없습니다</Empty>}
            </ul>
          </Panel>
        </div>
      </div>
    </section>
  );
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={"rounded-2xl border border-line p-6 sm:p-7 " + className}>{children}</div>;
}

function PanelHeader({ title, moreHref }: { title: string; moreHref: string }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h3 className="text-xl font-extrabold text-ink">{title}</h3>
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

function EventRow({ event }: { event: EventItem }) {
  const targets = targetLabel(event.targets).split(/[,\u00b7]/).map((t) => t.trim()).filter(Boolean);
  const status = event.status || "접수중";
  const closed = /마감|종료/.test(status);
  const href = event.href && event.href !== "#" ? event.href : `/events/${event.id}`;
  const when = event.eventDate || event.date;
  return (
    <li className="border-b border-line last:border-0">
      <Link href={href} className="group flex items-center gap-3 py-5 sm:gap-4">
        <div className="min-w-0 flex-1">
          {targets.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {targets.map((t, i) => (
                <span key={i} className="rounded-md border border-line bg-white px-2 py-0.5 text-[13px] font-medium text-gray-600">
                  {t}
                </span>
              ))}
            </div>
          )}
          <p className="mt-2 text-[17px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
            {event.title}
          </p>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-0.5 text-[14px] text-gray-600">
            {when && (
              <span>
                <b className="mr-1.5 font-semibold text-ink">· 일시</b>
                {when}
              </span>
            )}
            {event.location && (
              <span>
                <b className="mr-1.5 font-semibold text-ink">· 장소</b>
                {event.location}
              </span>
            )}
          </div>
        </div>
        <span
          className={
            "flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border text-center text-[13px] font-semibold leading-tight transition " +
            (closed
              ? "border-gray-300 bg-gray-50 text-gray-400"
              : "border-brand bg-white text-brand group-hover:bg-brand group-hover:text-white")
          }
        >
          {status}
        </span>
      </Link>
    </li>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <li className="py-10 text-center text-sm text-muted">{children}</li>;
}
