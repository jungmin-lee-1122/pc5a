import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGallery } from "@/lib/content";

export const dynamic = "force-dynamic";

async function findItem(id: string) {
  const items = await getGallery();
  return items.find((g) => g.id === id) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const g = await findItem(id);
  return { title: g ? `${g.title} | 5A 아카데미` : "설명회 현장 | 5A 아카데미" };
}

export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const g = await findItem(id);
  if (!g) notFound();

  return (
    <main className="flex-1 pb-16">
      <div className="border-b border-line bg-brand-light/50">
        <div className="mx-auto max-w-3xl px-5 py-9 lg:px-8">
          <Link href="/gallery" className="inline-flex items-center gap-1 text-sm text-muted hover:text-brand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            설명회 현장 목록
          </Link>
          <h1 className="mt-3 text-2xl font-extrabold leading-snug text-ink sm:text-[28px]">{g.title}</h1>
          <p className="mt-2 text-sm text-muted">
            {g.date}
            {g.location ? ` · ${g.location}` : ""}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-8 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-line bg-gray-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={g.image} alt={g.title} className="w-full" />
        </div>
        {g.caption && (
          <p className="mt-5 text-[15px] leading-relaxed text-gray-700">{g.caption}</p>
        )}
      </div>
    </main>
  );
}
