import type { Metadata } from "next";
import Link from "next/link";
import { getGallery } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "설명회 현장 | 5A 아카데미",
  description: "5A 아카데미 입시설명회 현장 스케치",
};

export default async function GalleryPage() {
  const items = (await getGallery())
    .filter((g) => g.active !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <main className="flex-1 pb-16">
      <div className="border-b border-line bg-brand-light/50">
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">설명회/이벤트</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">설명회 현장</h1>
          <p className="mt-2 text-sm text-muted">
            5A 아카데미 입시설명회·입시교실의 생생한 현장을 전해드립니다.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-line py-20 text-center text-sm text-muted">
            등록된 현장 사진이 없습니다.
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((g) => (
              <li key={g.id} className="min-w-0">
                <Link
                  href={`/gallery/${g.id}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-gray-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.image}
                    alt={g.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[12px] font-medium text-white/80">
                      {g.date}
                      {g.location ? ` · ${g.location}` : ""}
                    </p>
                    <h3 className="mt-0.5 line-clamp-2 text-[15px] font-bold text-white">{g.title}</h3>
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
