"use client";

import { useState } from "react";
import type { ScoreCase } from "@/lib/types";

type Row = { subject: string; standard: string; percentile: string; grade: string };
const PER = 5;

function parseRows(raw: string): Row[] {
  return (raw ?? "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const [subject = "", standard = "", percentile = "", grade = ""] = l.split(",").map((x) => x.trim());
      return { subject, standard, percentile, grade };
    });
}

function ScoreTable({ title, rows, dark }: { title: string; rows: Row[]; dark?: boolean }) {
  return (
    <div>
      <p className="mb-2 text-center text-[13px] font-bold text-ink">{title}</p>
      <div className="overflow-hidden rounded-xl border border-line">
        <table className="w-full text-[13px]">
          <thead>
            <tr className={dark ? "bg-brand-dark text-white" : "bg-gray-100 text-gray-600"}>
              <th className="px-2 py-2 font-semibold">구분</th>
              <th className="px-2 py-2 font-semibold">표준점수</th>
              <th className="px-2 py-2 font-semibold">백분위</th>
              <th className="px-2 py-2 font-semibold">등급</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-line text-center">
                <td className="px-2 py-2 font-medium text-gray-700">{r.subject}</td>
                <td className="px-2 py-2 text-gray-600">{r.standard || "-"}</td>
                <td className="px-2 py-2 text-gray-600">{r.percentile || "-"}</td>
                <td className="px-2 py-2 font-bold text-ink">{r.grade || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Graph({ before, after }: { before: Row[]; after: Row[] }) {
  const n = Math.max(before.length, after.length);
  const rows = Array.from({ length: n }, (_, i) => {
    const b = before[i];
    const a = after[i];
    const bp = Number(b?.percentile);
    const ap = Number(a?.percentile);
    return {
      label: a?.subject || b?.subject || "-",
      before: Number.isFinite(bp) ? bp : null,
      after: Number.isFinite(ap) ? ap : null,
    };
  }).filter((r) => r.before !== null || r.after !== null);

  return (
    <div className="space-y-4 rounded-xl border border-line bg-gray-50/50 p-4">
      {rows.map((r, i) => (
        <div key={i}>
          <p className="mb-1.5 text-[13px] font-semibold text-ink">{r.label}</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-8 shrink-0 text-[11px] text-gray-400">이전</span>
              <div className="h-3.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full rounded-full bg-gray-400" style={{ width: `${r.before ?? 0}%` }} />
              </div>
              <span className="w-8 shrink-0 text-right text-[11px] font-semibold text-gray-500">{r.before ?? "-"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 shrink-0 text-[11px] text-brand">이후</span>
              <div className="h-3.5 flex-1 overflow-hidden rounded-full bg-brand-light">
                <div className="h-full rounded-full bg-brand" style={{ width: `${r.after ?? 0}%` }} />
              </div>
              <span className="w-8 shrink-0 text-right text-[11px] font-bold text-brand">{r.after ?? "-"}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Circle({ label, metric, score, on }: { label: string; metric: string; score: number; on?: boolean }) {
  return (
    <div
      className={
        "flex h-[104px] w-[104px] shrink-0 flex-col items-center justify-center rounded-full border-2 text-center " +
        (on ? "border-brand bg-brand-light/60" : "border-line bg-gray-50")
      }
    >
      <span className={"text-[10px] font-semibold " + (on ? "text-brand" : "text-gray-400")}>{label}</span>
      <span className="text-[10px] text-gray-400">{metric}</span>
      <span className={"mt-0.5 text-[26px] font-extrabold leading-none " + (on ? "text-brand" : "text-gray-500")}>{score}</span>
    </div>
  );
}

function Card({ c }: { c: ScoreCase }) {
  const [graph, setGraph] = useState(false);
  const before = parseRows(c.beforeRows);
  const after = parseRows(c.afterRows);
  const diff = (Number(c.afterScore) || 0) - (Number(c.beforeScore) || 0);

  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_14px_rgba(30,42,99,0.05)] sm:p-7">
      <div className="flex flex-col gap-7 lg:flex-row">
        {/* 좌: 요약 */}
        <div className="shrink-0 lg:w-52">
          <span className="inline-block rounded-full bg-brand-light px-2.5 py-1 text-[11px] font-bold text-brand">{c.year}</span>
          <p className="mt-3 text-2xl font-extrabold text-ink">{c.name}</p>
          <p className="text-sm text-gray-400">{c.school}</p>

          <div className="mt-5 flex items-center gap-4 lg:flex-col lg:items-center lg:gap-2">
            <Circle label={c.afterLabel} metric={c.metric} score={Number(c.afterScore) || 0} on />
            <div className="flex flex-col items-center text-brand">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180 lg:rotate-0">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
              {diff > 0 && <span className="text-[12px] font-extrabold">+{diff}</span>}
            </div>
            <Circle label={c.beforeLabel} metric={c.metric} score={Number(c.beforeScore) || 0} />
          </div>
        </div>

        {/* 우: 표 / 그래프 */}
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex justify-end">
            <button
              onClick={() => setGraph((g) => !g)}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-[13px] font-semibold text-gray-600 transition hover:border-brand hover:text-brand"
            >
              {graph ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
                  표로 보기
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></svg>
                  그래프로 보기
                </>
              )}
            </button>
          </div>

          {graph ? (
            <Graph before={before} after={after} />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <ScoreTable title={c.beforeTitle} rows={before} />
              <ScoreTable title={c.afterTitle} rows={after} dark />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ScoreImproveView({ cases }: { cases: ScoreCase[] }) {
  const [page, setPage] = useState(1);
  const pages = Math.max(1, Math.ceil(cases.length / PER));
  const cur = Math.min(page, pages);
  const shown = cases.slice((cur - 1) * PER, cur * PER);

  return (
    <>
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">대입결과</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">성적향상사례</h1>
          <p className="mt-2 text-sm text-muted">재수 시작 전과 후, 5A 아카데미 학생들의 실제 성적 변화입니다.</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <h2 className="mb-6 text-xl font-extrabold text-ink sm:text-2xl">2026 5A 아카데미 성적 향상 사례</h2>

        {shown.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-line py-16 text-center text-sm text-muted">등록된 사례가 없습니다.</p>
        ) : (
          <div className="space-y-5">
            {shown.map((c) => (
              <Card key={c.id} c={c} />
            ))}
          </div>
        )}

        {pages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-1.5">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={cur === 1} className="rounded-lg border border-line px-3 py-1.5 text-sm text-gray-500 disabled:opacity-40 hover:border-brand hover:text-brand">이전</button>
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button key={n} onClick={() => setPage(n)} className={"h-9 w-9 rounded-lg text-sm font-semibold transition-colors " + (n === cur ? "bg-brand text-white" : "text-gray-500 hover:bg-brand-light hover:text-brand")}>{n}</button>
            ))}
            <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={cur === pages} className="rounded-lg border border-line px-3 py-1.5 text-sm text-gray-500 disabled:opacity-40 hover:border-brand hover:text-brand">다음</button>
          </div>
        )}
      </div>
    </>
  );
}
