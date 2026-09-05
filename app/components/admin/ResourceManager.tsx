"use client";

import { useEffect, useState, type ReactNode } from "react";
import ImageInput from "./ImageInput";
import { input, label, btn, btnSecondary, btnGhost, btnDanger, card } from "./ui";
import { COURSE_TARGETS } from "@/lib/types";

export type Field = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "image" | "tags" | "checkbox" | "courses" | "select";
  placeholder?: string;
  help?: string;
  maxLength?: number;
  options?: string[];
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

  // 번호(위치)로 직접 이동 — 순서를 1..n 으로 정규화해 저장합니다. (빈 번호/중복 자동 정리)
  async function reorderTo(item: Item, newPos: number) {
    const arr = [...sorted];
    const from = arr.findIndex((x) => x.id === item.id);
    if (from < 0) return;
    const to = Math.max(1, Math.min(arr.length, newPos)) - 1;
    if (to === from) return;
    const [moved] = arr.splice(from, 1);
    arr.splice(to, 0, moved);
    const updates = arr
      .map((x, idx) => ({ id: x.id, order: idx + 1, changed: (x.order ?? 0) !== idx + 1 }))
      .filter((u) => u.changed);
    await Promise.all(
      updates.map((u) =>
        fetch(`${endpoint}/${u.id}`, { method: "PUT", headers: jsonHeaders, body: JSON.stringify({ order: u.order }) }),
      ),
    );
    await load();
  }

  async function move(item: Item, dir: number) {
    const i = sorted.findIndex((x) => x.id === item.id);
    await reorderTo(item, i + 1 + dir);
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
              <div key={f.key} className={f.type === "textarea" || f.type === "image" || f.type === "courses" ? "sm:col-span-2" : ""}>
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
                  <input
                    type="number"
                    min={1}
                    max={sorted.length}
                    defaultValue={i + 1}
                    key={`pos-${item.id}-${item.order ?? i}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") e.currentTarget.blur();
                    }}
                    onBlur={(e) => {
                      const el = e.currentTarget;
                      const v = parseInt(el.value, 10);
                      if (!Number.isNaN(v) && v !== i + 1) reorderTo(item, v);
                      else el.value = String(i + 1);
                    }}
                    aria-label="순서 번호"
                    title="번호를 입력하고 Enter — 해당 위치로 이동합니다"
                    className="mr-1 w-14 rounded-lg border border-line px-2 py-1 text-center text-sm text-ink outline-none focus:border-brand"
                  />
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
    case "courses":
      return <CourseRowsEditor value={value} onChange={(v) => set(f.key, v)} />;
    case "select":
      return (
        <select
          value={str(value)}
          onChange={(e) => set(f.key, e.target.value)}
          className={input}
        >
          <option value="">선택해 주세요</option>
          {(f.options ?? []).map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
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

type CourseDraft = {
  id?: string;
  target?: string[];
  title?: string;
  tags?: string[];
  startDate?: string;
  period?: string;
  time?: string;
  price?: string;
  material?: string;
  syllabus?: string;
};

function newCourseId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function CourseRowsEditor({ value, onChange }: { value: unknown; onChange: (v: unknown) => void }) {
  const rows: CourseDraft[] = Array.isArray(value) ? (value as CourseDraft[]) : [];
  const setRow = (i: number, patch: Partial<CourseDraft>) =>
    onChange(rows.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  const add = () =>
    onChange([
      ...rows,
      { id: newCourseId(), target: [], title: "", tags: [], startDate: "", period: "", time: "", price: "", material: "자체 제작교재", syllabus: "" },
    ]);
  const remove = (i: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    onChange(rows.filter((_, idx) => idx !== i));
  };

  return (
    <div className="space-y-4">
      {rows.length === 0 && (
        <p className="rounded-lg border border-dashed border-line px-3 py-4 text-center text-xs text-muted">
          등록된 강좌가 없습니다. 아래 버튼으로 추가하세요.
        </p>
      )}
      {rows.map((r, i) => {
        const targets = Array.isArray(r.target) ? r.target : [];
        return (
          <div key={r.id ?? i} className="rounded-xl border border-line bg-gray-50/50 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500">강좌 {i + 1}</span>
              <button type="button" onClick={() => remove(i)} className="text-xs font-medium text-red-500 hover:underline">
                삭제
              </button>
            </div>

            <div>
              <span className="mb-1 block text-[11px] font-semibold text-gray-500">강좌명 (예: [단과] 9월-고3 수학(토,4회) 확률과통계 -남상보T)</span>
              <input
                value={r.title ?? ""}
                onChange={(e) => setRow(i, { title: e.target.value })}
                placeholder="강좌명을 입력하세요"
                className={input}
              />
            </div>

            <div className="mt-2">
              <span className="mb-1 block text-[11px] font-semibold text-gray-500">모집대상 (복수 선택 · 단과시간표 탭)</span>
              <div className="flex flex-wrap gap-1.5">
                {COURSE_TARGETS.map((t) => {
                  const on = targets.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setRow(i, { target: on ? targets.filter((x) => x !== t) : [...targets, t] })}
                      className={
                        "rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors " +
                        (on ? "border-brand bg-brand-light/60 text-brand" : "border-line bg-white text-gray-500 hover:border-gray-300")
                      }
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <div>
                <span className="mb-1 block text-[11px] font-semibold text-gray-500">태그 (예: 수학, 고3·N수)</span>
                <input value={Array.isArray(r.tags) ? r.tags.join(", ") : ""} onChange={(e) => setRow(i, { tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} placeholder="쉼표로 구분" className={input} />
              </div>
              <div>
                <span className="mb-1 block text-[11px] font-semibold text-gray-500">개강일 (예: 8월 29일(토))</span>
                <input value={r.startDate ?? ""} onChange={(e) => setRow(i, { startDate: e.target.value })} className={input} />
              </div>
              <div>
                <span className="mb-1 block text-[11px] font-semibold text-gray-500">수업시간 (예: 토 09:00 ~ 12:00)</span>
                <input value={r.time ?? ""} onChange={(e) => setRow(i, { time: e.target.value })} className={input} />
              </div>
              <div>
                <span className="mb-1 block text-[11px] font-semibold text-gray-500">수업기간 (예: 8/29(토) ~ 9/19(토))</span>
                <input value={r.period ?? ""} onChange={(e) => setRow(i, { period: e.target.value })} className={input} />
              </div>
              <div>
                <span className="mb-1 block text-[11px] font-semibold text-gray-500">수강료 (예: 280,000원)</span>
                <input value={r.price ?? ""} onChange={(e) => setRow(i, { price: e.target.value })} className={input} />
              </div>
              <div>
                <span className="mb-1 block text-[11px] font-semibold text-gray-500">교재 (예: 자체 제작교재)</span>
                <input value={r.material ?? ""} onChange={(e) => setRow(i, { material: e.target.value })} className={input} />
              </div>
            </div>

            <div className="mt-2">
              <span className="mb-1 block text-[11px] font-semibold text-gray-500">강의계획서 (A4 이미지)</span>
              <ImageInput value={r.syllabus ?? ""} onChange={(v) => setRow(i, { syllabus: v })} />
            </div>
          </div>
        );
      })}
      <button
        type="button"
        onClick={add}
        className="w-full rounded-lg border border-dashed border-brand/40 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand-light/40"
      >
        + 강좌 추가
      </button>
    </div>
  );
}
