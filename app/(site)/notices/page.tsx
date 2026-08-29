import type { Metadata } from "next";
import { getNotices } from "@/lib/content";
import NoticesView from "@/app/components/notices/NoticesView";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "공지사항 | 5A 아카데미",
  description: "5A 아카데미 공지사항",
};

export default async function NoticesPage() {
  const notices = await getNotices();

  return (
    <main className="flex-1 pb-16">
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light/50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[170%] -translate-y-1/2 select-none opacity-[0.15] sm:right-6"
        />
        <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">학원소개</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">공지사항</h1>
          <p className="mt-2 text-sm text-muted">5A 아카데미의 새로운 소식과 안내사항입니다.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-8 lg:px-8">
        <NoticesView notices={notices} />
      </div>
    </main>
  );
}
