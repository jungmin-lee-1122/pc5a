import type { Metadata } from "next";
import Link from "next/link";
import { getReviews } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "재원생 후기 | 5A 아카데미",
  description: "5A 아카데미 재원생 합격·수강 후기",
};

export default async function ReviewListPage() {
  const items = (await getReviews())
    .filter((r) => r.active !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

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
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">학원생활</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">재원생 후기</h1>
          <p className="mt-2 text-sm text-muted">5A 아카데미와 함께한 재원생들의 생생한 합격·수강 후기입니다.</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-line py-20 text-center text-sm text-muted">
            등록된 후기가 없습니다.
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((r) => (
              <li key={r.id} className="min-w-0">
                <Link
                  href={`/life/review/${r.id}`}
                  className="group block overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-brand/40"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.image}
                      alt={r.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="px-5 py-4">
                    {r.university && (
                      <p className="mb-1 line-clamp-1 text-[12px] font-bold text-brand">{r.university}</p>
                    )}
                    <h3 className="line-clamp-2 text-[15px] font-bold text-ink transition-colors group-hover:text-brand">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-gray-400">
                      {r.author}
                      {r.date ? ` · ${r.date}` : ""}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
