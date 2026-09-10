import type { Metadata } from "next";
import { getUnivPass } from "@/lib/content";
import UnivPassView from "@/app/components/results/UnivPassView";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "대입합격현황 | 5A 아카데미",
  description: "눈부신 대입결과 — 5A 아카데미 역대 대입 합격자 명단",
};

export default async function UnivPassPage() {
  const results = await getUnivPass();
  return (
    <main className="flex-1 pb-16">
      <UnivPassView results={results} />
    </main>
  );
}
