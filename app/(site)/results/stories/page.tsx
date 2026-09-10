import type { Metadata } from "next";
import { getStories } from "@/lib/content";
import StoriesView from "@/app/components/results/StoriesView";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "대입 성공 스토리 | 5A 아카데미",
  description: "5A 아카데미 대입 성공수기·성공영상 — 합격생들의 생생한 이야기",
};

export default async function StoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const stories = await getStories();
  const initialTab = tab === "video" ? "영상" : "수기";
  return (
    <main className="flex-1 pb-16">
      <StoriesView stories={stories} initialTab={initialTab} />
    </main>
  );
}
