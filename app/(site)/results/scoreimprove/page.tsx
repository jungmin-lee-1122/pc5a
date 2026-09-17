import type { Metadata } from "next";
import { getScoreCases } from "@/lib/content";
import ScoreImproveView from "@/app/components/results/ScoreImproveView";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "성적향상사례 | 5A 아카데미",
  description: "재수 전/후 실제 성적 변화 — 5A 아카데미 성적 향상 사례",
};

export default async function ScoreImprovePage() {
  const cases = await getScoreCases();
  return (
    <main className="flex-1 pb-16">
      <ScoreImproveView cases={cases} />
    </main>
  );
}
