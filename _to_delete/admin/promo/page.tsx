"use client";

import { useEffect, useState } from "react";
import ImageInput from "@/app/components/admin/ImageInput";
import { input, label, btn, card } from "@/app/components/admin/ui";
import type { Promo } from "@/lib/types";

export default function Page() {
  const [data, setData] = useState<Promo | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/promo", { cache: "no-store" }).then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <p className="text-sm text-muted">불러오는 중…</p>;

  async function save() {
    const res = await fetch("/api/promo", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  }

  return (
    <div>
      <h1 className="mb-1 text-xl font-bold text-ink">홍보 배너</h1>
      <p className="mb-6 text-sm text-muted">영상 섹션 우측 하단의 사각 홍보 배너입니다.</p>
      <div className={`${card} space-y-4`}>
        <div>
          <label className={label}>이미지</label>
          <ImageInput value={data.image} onChange={(v) => setData({ ...data, image: v })} />
        </div>
        <div>
          <label className={label}>설명(대체텍스트)</label>
          <input className={input} value={data.alt} onChange={(e) => setData({ ...data, alt: e.target.value })} />
        </div>
        <div>
          <label className={label}>클릭 시 이동 링크</label>
          <input className={input} value={data.href} onChange={(e) => setData({ ...data, href: e.target.value })} placeholder="#" />
        </div>
        <div className="flex items-center gap-3">
          <button className={btn} onClick={save}>저장</button>
          {saved && <span className="text-sm text-green-600">저장되었습니다 ✓</span>}
        </div>
      </div>
    </div>
  );
}
