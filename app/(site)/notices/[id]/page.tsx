import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNotices } from "@/lib/content";

export const dynamic = "force-dynamic";

async function findNotice(id: string) {
  const notices = await getNotices();
  return notices.find((n) => n.id === id) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const n = await findNotice(id);
  return { title: n ? `${n.title} | 5A 아카데미` : "공지사항 | 5A 아카데미" };
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notice = await findNotice(id);
  if (!notice) notFound();

  return (
    <main className="flex-1 pb-16">
      {/* 상단 헤더 */}
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light/50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[170%] -translate-y-1/2 select-none opacity-[0.15] sm:right-6"
        />
        <div className="mx-auto max-w-3xl px-5 py-9 lg:px-8">
          <Link href="/notices" className="inline-flex items-center gap-1 text-sm text-muted hover:text-brand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            공지사항 목록
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {notice.category && (
              <span className="rounded bg-brand px-2 py-0.5 text-xs font-bold text-white">{notice.category}</span>
            )}
            {notice.badge && (
              <span className="rounded bg-red-50 px-1.5 py-0.5 text-[11px] font-bold text-red-500">{notice.badge}</span>
            )}
          </div>

          <h1 className="mt-3 text-2xl font-extrabold leading-snug text-ink sm:text-[28px]">
            {notice.title}
          </h1>
          <p className="mt-2 text-sm text-gray-400">{notice.date}</p>
        </div>
      </div>

      {/* 본문 */}
      <div className="mx-auto max-w-3xl px-5 py-9 lg:px-8">
        {notice.content ? (
          <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
            {notice.content.split("\n").map((line, i) =>
              line.trim() === "" ? (
                <div key={i} className="h-1" />
              ) : (
                <p key={i}>{line}</p>
              ),
            )}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-muted">본문 내용이 없습니다.</p>
        )}

        <div className="mt-10 border-t border-line pt-6">
          <Link
            href="/notices"
            className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:text-ink"
          >
            목록으로
          </Link>
        </div>
      </div>
    </main>
  );
}
