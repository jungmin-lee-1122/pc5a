import type { Metadata } from "next";
import Link from "next/link";
import { getMenus } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "주간식단표 | 5A 아카데미",
  description: "5A 아카데미 주간식단표",
};

export default async function MenuPage() {
  const menus = (await getMenus())
    .filter((m) => m.active !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <main className="flex-1 pb-16">
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">학원생활</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">주간식단표</h1>
          <p className="mt-2 text-sm text-muted">주차별 식단표를 확인하세요.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-8 lg:px-8">
        {menus.length === 0 ? (
          <div className="rounded-2xl border border-line py-20 text-center text-sm text-muted">
            등록된 식단표가 없습니다.
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2">
            {menus.map((m) => (
              <li key={m.id}>
                <Link
                  href={`/menu/${m.id}`}
                  className="group block overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-brand/40"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.image}
                      alt={m.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="text-[15px] font-bold text-ink transition-colors group-hover:text-brand">
                      {m.title}
                    </h3>
                    {m.date && <p className="mt-1 text-[13px] text-gray-400">{m.date}</p>}
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
