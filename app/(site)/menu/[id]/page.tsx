import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMenus } from "@/lib/content";

export const dynamic = "force-dynamic";

async function findMenu(id: string) {
  const menus = await getMenus();
  return menus.find((m) => m.id === id) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const m = await findMenu(id);
  return { title: m ? `${m.title} | 5A 아카데미` : "주간식단표 | 5A 아카데미" };
}

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const menu = await findMenu(id);
  if (!menu) notFound();

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
        <div className="mx-auto max-w-3xl px-5 py-9 lg:px-8">
          <Link href="/menu" className="inline-flex items-center gap-1 text-sm text-muted hover:text-brand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            주간식단표 목록
          </Link>
          <h1 className="mt-3 text-2xl font-extrabold leading-snug text-ink sm:text-[28px]">
            {menu.title}
          </h1>
          {menu.date && <p className="mt-2 text-sm text-gray-400">{menu.date}</p>}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-8 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-line bg-white p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={menu.image} alt={menu.title} className="w-full rounded-xl" />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={menu.image}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark"
          >
            원본 이미지 크게 보기 ↗
          </a>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:text-ink"
          >
            목록으로
          </Link>
        </div>
      </div>
    </main>
  );
}
