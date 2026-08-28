"use client";

import { useEffect, useState, type ReactNode } from "react";
import ImageInput from "./ImageInput";
import { input, label, btn, btnSecondary, btnGhost, btnDanger, card } from "./ui";

export type Field = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "image" | "tags" | "checkbox";
  placeholder?: string;
  help?: string;
  maxLength?: number;
};

type Item = Record<string, unknown> & { id: string; order?: number };
type Draft = Record<string, unknown>;

const jsonHeaders = { "Content-Type": "application/json" };
const str = (v: unknown) => (v == null ? "" : String(v));

export default function ResourceManager({
  title,
  description,
  endpoint,
  fields,
  defaults,
  summary,
  thumbKey,
}: {
  title: string;
  description?: string;
  endpoint: string;
  fields: Field[];
  defaults: Draft;
  summary: (item: Item) => ReactNode;
  thumbKey?: string;
}) {
  const [items, setItems] = useState<Item[]>([]);
  const [mode, setMode] = useState<"idle" | "new" | "edit">("idle");
  const [draft, setDraft] = useState<Draft>(defaults);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const sorted = [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  async function load() {
    setLoading(true);
    const res = await fetch(endpoint, { cache: "no-store" });
    setItems(await res.json());
    setLoading(false);
  }
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  function startNew() {
    setDraft({ ...defaults });
    setEditingId(null);
    setError("");
    setMode("new");
  }
  function startEdit(item: Item) {
    setDraft({ ...item });
    setEditingId(item.id);
    setError("");
    setMode("edit");
  }
  function set(key: string, value: unknown) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  async function save() {
    const url = mode === "new" ? endpoint : `${endpoint}/${editingId}`;
    const method = mode === "new" ? "POST" : "PUT";
    const res = await fetch(url, { method, headers: jsonHeaders, body: JSON.stringify(draft) });
    if (!res.ok) {
      setError("저장에 실패했습니다. 로그인 상태를 확인하세요.");
      return;
    }
    setMode("idle");
    await load();
  }

  async function remove(id: string) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await fetch(`${endpoint}/${id}`, { method: "DELETE" });
    await load();
  }

  async function move(item: Item, dir: number) {
    const i = sorted.findIndex((x) => x.id === item.id);
    const j = i + dir;
    if (j < 0 || j >= sorted.length) return;
    const a = sorted[i];
    const b = sorted[j];
    await Promise.all([
      fetch(`${endpoint}/${a.id}`, { method: "PUT", headers: jsonHeaders, body: JSON.stringify({ order: b.order ?? j }) }),
      fetch(`${endpoint}/${b.id}`, { method: "PUT", headers: jsonHeaders, body: JSON.stringify({ order: a.order ?? i }) }),
    ]);
    await load();
  }

  return (
    <div>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-ink">{title}</h1>
          {description && <p className="mt-1 text-sm text-muted">{description}</p>}
        </div>
        {mode === "idle" && (
          <button className={btn} onClick={startNew}>
            + 새로 추가
          </button>
        )}
      </div>

      {/* 편집 폼 */}
      {mode !== "idle" && (
        <div className={`${card} mb-6`}>
          <h2 className="mb-4 text-base font-bold text-ink">
            {mode === "new" ? "새 항목 추가" : "항목 수정"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((f) => (
              <div key={f.key} className={f.type === "textarea" || f.type === "image" ? "sm:col-span-2" : ""}>
                <label className={label}>{f.label}</label>
                {renderField(f, draft, set)}
                {f.help && <p className="mt-1 text-xs text-muted">{f.help}</p>}
              </div>
            ))}
          </div>
          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
          <div className="mt-5 flex gap-2">
            <button className={btn} onClick={save}>
              저장
            </button>
            <button className={btnSecondary} onClick={() => setMode("idle")}>
              취소
            </button>
          </div>
        </div>
      )}

      {/* 목록 */}
      <div className={card}>
        {loading ? (
          <p className="py-10 text-center text-sm text-muted">불러오는 중…</p>
        ) : sorted.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted">등록된 항목이 없습니다.</p>
        ) : (
          <ul className="divide-y divide-line">
            {sorted.map((item, i) => (
              <li key={item.id} className="flex items-center gap-3 py-3">
                {thumbKey && str(item[thumbKey]) && (
                  <img
                    src={str(item[thumbKey])}
                    alt=""
                    className="h-12 w-12 shrink-0 rounded-lg border border-line bg-gray-50 object-cover"
                  />
                )}
                <div className="min-w-0 flex-1 text-sm text-ink">{summary(item)}</div>
                <div className="flex items-center gap-1">
                  <button className={btnGhost} onClick={() => move(item, -1)} disabled={i === 0} aria-label="위로">
                    ↑
                  </button>
                  <button
                    className={btnGhost}
                    onClick={() => move(item, 1)}
                    disabled={i === sorted.length - 1}
                    aria-label="아래로"
                  >
                    ↓
                  </button>
                  <button className={btnGhost} onClick={() => startEdit(item)}>
                    수정
                  </button>
                  <button className={btnDanger} onClick={() => remove(item.id)}>
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function renderField(f: Field, draft: Draft, set: (k: string, v: unknown) => void) {
  const value = draft[f.key];
  switch (f.type) {
    case "textarea":
      return (
        <textarea
          value={str(value)}
          onChange={(e) => set(f.key, e.target.value)}
          placeholder={f.placeholder}
          rows={3}
          className={input}
        />
      );
    case "number":
      return (
        <input
          type="number"
          value={str(value)}
          onChange={(e) => set(f.key, e.target.value === "" ? "" : Number(e.target.value))}
          placeholder={f.placeholder}
          className={input}
        />
      );
    case "checkbox":
      return (
        <label className="inline-flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => set(f.key, e.target.checked)}
            className="h-4 w-4 accent-[var(--color-brand)]"
          />
          노출
        </label>
      );
    case "image":
      return <ImageInput value={str(value)} onChange={(v) => set(f.key, v)} />;
    case "tags":
      return (
        <input
          value={Array.isArray(value) ? (value as string[]).join(", ") : str(value)}
          onChange={(e) =>
            set(
              f.key,
              e.target.value
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
            )
          }
          placeholder={f.placeholder}
          className={input}
        />
      );
    default:
      return (
        <input
          value={str(value)}
          onChange={(e) => set(f.key, e.target.value)}
          placeholder={f.placeholder}
          maxLength={f.maxLength}
          className={input}
        />
      );
  }
}
