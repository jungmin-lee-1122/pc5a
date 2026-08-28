import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEvents } from "@/lib/content";
import StatusBadge from "@/app/components/events/StatusBadge";
import EventForm from "@/app/components/events/EventForm";

export const dynamic = "force-dynamic";

async function findEvent(id: string) {
  const events = await getEvents();
  return events.find((e) => e.id === id) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const e = await findEvent(id);
  return { title: e ? `${e.title} | 5A 아카데미` : "설명회 | 5A 아카데미" };
}

function InfoRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-3 py-3">
      <dt className="w-20 shrink-0 text-sm font-semibold text-gray-400">{label}</dt>
      <dd className="text-sm font-medium text-ink">{value}</dd>
    </div>
  );
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await findEvent(id);
  if (!event) notFound();

  return (
    <main className="flex-1 pb-16">
      {/* 상단 헤더 */}
      <div className="border-b border-line bg-brand-light/50">
        <div className="mx-auto max-w-6xl px-5 py-9 lg:px-8">
          <Link href="/events" className="inline-flex items-center gap-1 text-sm text-muted hover:text-brand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            설명회 목록
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <StatusBadge status={event.status} />
            <span className="rounded bg-brand px-2 py-0.5 text-xs font-bold text-white">{event.category}</span>
            {(event.targets ?? []).map((t) => (
              <span key={t} className="rounded bg-white px-2 py-0.5 text-xs font-medium text-gray-500 ring-1 ring-line">
                {t}
              </span>
            ))}
          </div>

          <h1 className="mt-3 text-2xl font-extrabold leading-snug text-ink sm:text-[28px]">
            {event.title}
          </h1>
          {event.summary && <p className="mt-2 text-[15px] text-muted">{event.summary}</p>}
        </div>
      </div>

      {/* 본문: 좌측 내용 + 우측 예약폼 */}
      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* 좌측 내용 */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-line bg-white px-6 py-2">
              <dl className="divide-y divide-line">
                <InfoRow label="일시" value={event.eventDate || event.date} />
                <InfoRow label="장소" value={event.location} />
                <InfoRow label="정원" value={event.capacity} />
                <InfoRow label="대상" value={(event.targets ?? []).join(", ") || undefined} />
                <InfoRow label="주최" value={event.host} />
              </dl>
            </div>

            {event.intro && (
              <section className="mt-9">
                <h2 className="mb-3 text-lg font-extrabold text-ink">설명회 소개</h2>
                <div className="space-y-3 text-[15px] leading-relaxed text-gray-700">
                  {event.intro.split("\n").filter(Boolean).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            )}

            {event.agenda && event.agenda.length > 0 && (
              <section className="mt-9">
                <h2 className="mb-3 text-lg font-extrabold text-ink">프로그램 순서</h2>
                <ol className="overflow-hidden rounded-2xl border border-line">
                  {event.agenda.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 border-b border-line px-5 py-4 last:border-0">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand">
                        {i + 1}
                      </span>
                      <span className="text-[15px] text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          {/* 우측 예약폼 (데스크톱은 sticky) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <EventForm event={event} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
