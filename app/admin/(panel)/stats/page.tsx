"use client";

import { useEffect, useState } from "react";
import { input, label, btn, btnGhost, btnDanger, card } from "@/app/components/admin/ui";
import type { Stats, StatItem } from "@/lib/types";

export default function Page() {
  const [data, setData] = useState<Stats | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/stats", { cache: "no-store" }).then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <p className="text-sm text-muted">불러오는 중…</p>;

  const items = [...data.items].sort((a, b) => a.order - b.order);

  function setItem(id: string, patch: Partial<StatItem>) {
    setData({ ...data!, items: data!.items.map((it) => (it.id === id ? { ...it, ...patch } : it)) });
  }
  function addItem() {
    const maxOrder = data!.items.reduce((m, it) => Math.max(m, it.order), 0);
    const item: StatItem = { id: Date.now().toString(36), label: "", value: "", order: maxOrder + 1 };
    setData({ ...data!, items: [...data!.items, item] });
  }
  function removeItem(id: string) {
    setData({ ...data!, items: data!.items.filter((it) => it.id !== id) });
  }
  function move(id: string, dir: number) {
    const sorted = [...data!.items].sort((a, b) => a.order - b.order);
    const i = sorted.findIndex((x) => x.id === id);
    const j = i + dir;
    if (j < 0 || j >= sorted.length) return;
    const a = sorted[i].order;
    sorted[i].order = sorted[j].order;
    sorted[j].order = a;
    setData({ ...data!, items: sorted });
  }

  async function save() {
    const res = await fetch("/api/stats", {
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
      <h1 className="mb-1 text-xl font-bold text-ink">합격실적</h1>
      <p className="mb-6 text-sm text-muted">보라색 합격 결과 배너의 문구와 통계 항목입니다.</p>

      <div className={`${card} space-y-4`}>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={label}>브랜드</label>
            <input className={input} value={data.brand} onChange={(e) => setData({ ...data, brand: e.target.value })} />
          </div>
          <div>
            <label className={label}>타이틀</label>
            <input className={input} value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
          </div>
          <div>
            <label className={label}>비고</label>
            <input className={input} value={data.note} onChange={(e) => setData({ ...data, note: e.target.value })} />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className={label + " mb-0"}>통계 항목</label>
            <button className={btnGhost} onClick={addItem}>+ 항목 추가</button>
          </div>
          <ul className="space-y-2">
            {items.map((it, i) => (
              <li key={it.id} className="flex items-center gap-2">
                <input
                  className={input}
                  placeholder="항목명 (예: 서울대)"
                  value={it.label}
                  onChange={(e) => setItem(it.id, { label: e.target.value })}
                />
                <input
                  className={`${input} w-32`}
                  placeholder="값 (예: 16명)"
                  value={it.value}
                  onChange={(e) => setItem(it.id, { value: e.target.value })}
                />
                <button className={btnGhost} onClick={() => move(it.id, -1)} disabled={i === 0}>↑</button>
                <button className={btnGhost} onClick={() => move(it.id, 1)} disabled={i === items.length - 1}>↓</button>
                <button className={btnDanger} onClick={() => removeItem(it.id)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button className={btn} onClick={save}>저장</button>
          {saved && <span className="text-sm text-green-600">저장되었습니다 ✓</span>}
        </div>
      </div>
    </div>
  );
}
