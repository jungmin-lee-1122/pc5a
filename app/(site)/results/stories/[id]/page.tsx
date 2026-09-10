import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStories } from "@/lib/content";

export const dynamic = "force-dynamic";

/** 유튜브 URL → embed id 추출 */
function ytId(url?: string): string | null {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([\w-]{11})/);
  return m ? m[1] : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const s = (await getStories()).find((x) => x.id === id);
  return { title: s ? `${s.title} | 5A 아카데미` : "대입 성공 스토리 | 5A 아카데미" };
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const all = await getStories();
  const story = all.find((x) => x.id === id);
  if (!story) notFound();

  const sameKind = all.filter((x) => x.kind === story.kind);
  const idx = sameKind.findIndex((x) => x.id === story.id);
  const prev = idx > 0 ? sameKind[idx - 1] : null;
  const next = idx < sameKind.length - 1 ? sameKind[idx + 1] : null;
  const listHref = `/results/stories?tab=${story.kind === "영상" ? "video" : "memoir"}`;
  const vid = ytId(story.videoUrl);
  const paragraphs = (story.content ?? "").split("\n").map((l) => l.trim()).filter(Boolean);

  return (
    <main className="flex-1 pb-16">
      <div className="border-b border-line bg-brand-light">
        <div className="mx-auto max-w-4xl px-5 py-8 lg:px-8">
          <span className="inline-block rounded-full bg-white px-3 py-1 text-[12px] font-bold text-brand">{story.group}</span>
          <h1 className="mt-3 text-xl font-extrabold leading-snug text-ink sm:text-2xl">{story.title}</h1>
          <p className="mt-2 text-sm text-gray-400">{story.date}</p>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-5 py-8 lg:px-8">
        {vid && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-line bg-black">
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${vid}`}
                title={story.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        )}

        {story.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={story.image} alt={story.title} className="mb-8 w-full rounded-2xl border border-line" />
        )}

        {paragraphs.length > 0 && (
          <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {!vid && !story.image && paragraphs.length === 0 && (
          <p className="py-10 text-center text-sm text-muted">등록된 본문이 없습니다.</p>
        )}

        {/* 이전/다음 + 목록 */}
        <div className="mt-10 divide-y divide-line border-y border-line">
          {next && (
            <Link href={`/results/stories/${next.id}`} className="flex items-center gap-3 py-3.5 text-sm hover:bg-brand-light/30">
              <span className="w-16 shrink-0 font-semibold text-gray-400">다음글</span>
              <span className="truncate text-gray-700">{next.title}</span>
            </Link>
          )}
          {prev && (
            <Link href={`/results/stories/${prev.id}`} className="flex items-center gap-3 py-3.5 text-sm hover:bg-brand-light/30">
              <span className="w-16 shrink-0 font-semibold text-gray-400">이전글</span>
              <span className="truncate text-gray-700">{prev.title}</span>
            </Link>
          )}
        </div>

        <div className="mt-7 text-center">
          <Link
            href={listHref}
            className="inline-block rounded-full bg-ink px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            목록보기
          </Link>
        </div>
      </article>
    </main>
  );
}
