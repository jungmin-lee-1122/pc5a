import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReviews } from "@/lib/content";

export const dynamic = "force-dynamic";

async function findReview(id: string) {
  const items = await getReviews();
  return items.find((r) => r.id === id) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const r = await findReview(id);
  return { title: r ? `${r.title} | 5A 아카데미` : "재원생 후기 | 5A 아카데미" };
}

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const r = await findReview(id);
  if (!r) notFound();

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
        <div className="mx-auto max-w-3xl px-5 py-9 lg:px-8">
          <Link href="/life/review" className="inline-flex items-center gap-1 text-sm text-muted hover:text-brand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            재원생 후기 목록
          </Link>
          {r.university && <p className="mt-4 text-sm font-bold text-brand">{r.university}</p>}
          <h1 className="mt-1.5 text-2xl font-extrabold leading-snug text-ink sm:text-[28px]">{r.title}</h1>
          <p className="mt-2 text-sm text-muted">
            {r.author}
            {r.date ? ` · ${r.date}` : ""}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-8 lg:px-8">
        {r.image && (
          <div className="mb-7 overflow-hidden rounded-2xl border border-line bg-gray-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={r.image} alt={r.title} className="w-full" />
          </div>
        )}
        {r.content && (
          <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
            {r.content.split("\n").filter(Boolean).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
