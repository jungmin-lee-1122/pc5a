"use client";

import { useState } from "react";
import Link from "next/link";
import type { Teacher } from "@/lib/types";

export default function TeacherDetail({
  teachers,
  current,
  subjects,
  activeSubject,
}: {
  teachers: Teacher[];
  current: Teacher;
  subjects: string[];
  activeSubject: string;
}) {
  const [tab, setTab] = useState<"intro" | "courses">("intro");

  const active = teachers
    .filter((t) => t.active)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const TABS = ["전체", ...subjects];
  const group = activeSubject === "전체" ? active : active.filter((t) => t.subject === activeSubject);
  const firstOf = (subj: string) => (subj === "전체" ? active[0] : active.find((t) => t.subject === subj));

  const careerLines = (current.career ?? "").split("\n").map((s) => s.trim()).filter(Boolean);
  const introParas = (current.intro ?? "").split("\n").map((s) => s.trim()).filter(Boolean);

  return (
    <div>
      {/* 과목 탭 */}
      <div className="flex flex-wrap gap-2">
        {TABS.map((subj) => {
          const on = subj === activeSubject;
          const target = firstOf(subj);
          const href = target
            ? `/teachers/${target.id}?subject=${encodeURIComponent(subj)}`
            : `/teachers?subject=${encodeURIComponent(subj)}`;
          return (
            <Link
              key={subj}
              href={href}
              className={
                on
                  ? "rounded-full bg-ink px-4 py-2 text-sm font-bold text-white"
                  : "rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-gray-300"
              }
            >
              {subj}
            </Link>
          );
        })}
      </div>

      {/* 강사 얼굴 선택줄 */}
      {group.length > 0 && (
        <div className="no-scrollbar mt-6 flex gap-3 overflow-x-auto pb-2">
          {group.map((t) => {
            const on = t.id === current.id;
            return (
              <Link
                key={t.id}
                href={`/teachers/${t.id}?subject=${encodeURIComponent(activeSubject)}`}
                className="group flex w-[76px] shrink-0 flex-col items-center gap-2"
              >
                <span
                  className={
                    "relative block h-16 w-16 overflow-hidden rounded-full border-2 bg-brand-light/40 transition " +
                    (on ? "border-brand" : "border-transparent group-hover:border-line")
                  }
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.photo} alt={t.name} className="h-full w-full object-cover object-top" />
                </span>
                <span className={"truncate text-xs " + (on ? "font-bold text-brand" : "text-gray-500")}>
                  {t.name}
                </span>
              </Link>
            );
          })}
        </div>
      )}

      {/* 선택된 강사 프로필 */}
      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-brand-light/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.photo}
              alt={`${current.name} 선생님`}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="min-w-0 lg:col-span-3">
          {current.slogan && (
            <p className="text-lg font-extrabold leading-snug text-brand sm:text-xl">{current.slogan}</p>
          )}
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="rounded bg-brand-light px-2 py-0.5 text-xs font-bold text-brand">{current.subject}</span>
            {current.tags.map((tag) => (
              <span key={tag} className="rounded border border-line bg-gray-50 px-1.5 py-0.5 text-[11px] font-semibold text-gray-500">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-ink">
            {current.name} <span className="text-xl font-bold text-gray-400">선생님</span>
          </h2>

          {current.videoUrl && (
            <a
              href={current.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              선생님 소개 영상 보기
            </a>
          )}

          {careerLines.length > 0 && (
            <ul className="mt-6 space-y-1.5">
              {careerLines.map((line, i) => (
                <li key={i} className="flex gap-2 text-[15px] text-gray-700">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  {line}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 하위 탭: 강사 소개 / 개설 강좌 */}
      <div className="mt-10 border-t border-line">
        <div className="-mb-px flex gap-6">
          {([["intro", "강사 소개"], ["courses", "개설 강좌"]] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={
                "border-b-2 px-1 py-4 text-[15px] font-bold transition-colors " +
                (tab === key ? "border-brand text-brand" : "border-transparent text-gray-400 hover:text-ink")
              }
            >
              {label}
            </button>
          ))}
        </div>

        <div className="pt-6">
          {tab === "intro" ? (
            introParas.length > 0 ? (
              <div className="space-y-3 text-[15px] leading-relaxed text-gray-700">
                {introParas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : (
              <p className="py-8 text-center text-sm text-muted">강사 소개가 준비 중입니다.</p>
            )
          ) : (
            <p className="py-8 text-center text-sm text-muted">개설 강좌 정보가 준비 중입니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
