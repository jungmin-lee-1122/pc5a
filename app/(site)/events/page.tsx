import type { Metadata } from "next";
import { getEvents } from "@/lib/content";
import EventsView from "@/app/components/events/EventsView";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "설명회/이벤트 | 5A 아카데미",
  description: "5A 아카데미 입시설명회 · 입시교실 신청 안내",
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="flex-1 pb-16">
      {/* 페이지 헤더 */}
      <div className="border-b border-line bg-brand-light/50">
        <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">설명회/이벤트</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">설명회 신청</h1>
          <p className="mt-2 text-sm text-muted">
            원하는 설명회를 선택해 자세한 내용을 확인하고 예약하세요.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-8 lg:px-8">
        <EventsView events={events} />
      </div>
    </main>
  );
}
