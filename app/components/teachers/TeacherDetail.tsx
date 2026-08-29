"use client";

import { useState } from "react";
import Link from "next/link";
import type { Teacher, TeacherCourse } from "@/lib/types";

/** 유튜브 ID 추출 (아니면 null) */
function ytId(input: string): string | null {
  const s = input.trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  const m = s.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : null;
}

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
  const courses = (current.courses ?? []).filter((c) => c.title);
  const hasBelow = Boolean(current.videoUrl) || careerLines.length > 0;
  const vid = current.videoUrl ? ytId(current.videoUrl) : null;

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

      {/* 프로필 블록 */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-brand-light/70 to-brand-light/15">
        <div className="grid lg:grid-cols-2">
          {/* 사진 (모바일 위 / 데스크톱 오른쪽) */}
          <div className="relative order-1 min-h-[240px] lg:order-2 lg:min-h-[380px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.photo}
              alt={`${current.name} 선생님`}
              className="absolute inset-0 h-full w-full object-contain object-bottom"
            />
          </div>

          {/* 정보 */}
          <div className="order-2 p-6 lg:order-1 lg:p-8">
            <div className="flex flex-wrap gap-1.5">
              {current.tags.map((tag) => (
                <span key={tag} className="rounded border border-line bg-gray-50 px-2 py-0.5 text-[11px] font-semibold text-gray-500">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-2xl leading-tight text-ink sm:text-[26px]">
              <span className="font-semibold text-brand">{current.subject}</span>{" "}
              <span className="font-extrabold">{current.name}</span>{" "}
              <span className="text-lg font-bold text-gray-400">선생님</span>
            </p>

            {current.slogan && (
              <p className="mt-3 text-lg font-bold leading-snug text-brand sm:text-xl">{current.slogan}</p>
            )}

            {hasBelow && (
              <>
                <hr className="my-5 border-line" />
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  {current.videoUrl && (
                    <a
                      href={current.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative block aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-line bg-gray-100 sm:w-52"
                    >
                      {vid ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={`https://img.youtube.com/vi/${vid}/hqdefault.jpg`} alt="소개 영상" className="h-full w-full object-cover" />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-xs text-muted">소개 영상</span>
                      )}
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white transition group-hover:bg-brand">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                        </span>
                      </span>
                    </a>
                  )}

                  {careerLines.length > 0 && (
                    <ul className="min-w-0 space-y-1.5">
                      {careerLines.map((line, i) => (
                        <li key={i} className="flex gap-2 text-[14px] text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                          <span className="min-w-0">{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 하단 탭: 강사 소개 / 개설 강좌 */}
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
          {([["intro", "강사 소개"], ["courses", "개설 강좌"]] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={
                "py-4 text-[15px] font-bold transition-colors " +
                (tab === key ? "bg-ink text-white" : "bg-gray-50 text-gray-500 hover:text-ink")
              }
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "intro" ? (
            current.introPoster ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={current.introPoster}
                alt={`${current.name} 강사 소개`}
                className="mx-auto w-full max-w-2xl rounded-2xl border border-line"
              />
            ) : (
              <p className="rounded-2xl border border-line py-16 text-center text-sm text-muted">
                강사 소개가 준비 중입니다.
              </p>
            )
          ) : courses.length > 0 ? (
            <CoursesTable teacher={current} courses={courses} />
          ) : (
            <p className="rounded-2xl border border-line py-16 text-center text-sm text-muted">
              개설 강좌 정보가 준비 중입니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function CoursesTable({ teacher, courses }: { teacher: Teacher; courses: TeacherCourse[] }) {
  const chips = (c: TeacherCourse) => (c.tags && c.tags.length ? c.tags : [teacher.subject]);
  return (
    <div>
      <p className="mb-3 text-right text-sm text-muted">
        총 <span className="font-bold text-ink">{courses.length}</span> 건
      </p>

      {/* 데스크톱 표 */}
      <div className="hidden overflow-hidden rounded-2xl border border-line lg:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line bg-gray-50 text-gray-500">
              <th className="px-4 py-3 text-center font-semibold">강사</th>
              <th className="px-4 py-3 text-left font-semibold">강좌명</th>
              <th className="px-4 py-3 text-center font-semibold">개강일</th>
              <th className="px-4 py-3 text-center font-semibold">수업기간</th>
              <th className="px-4 py-3 text-center font-semibold">수업시간</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, i) => (
              <tr key={i} className="border-b border-line last:border-0">
                <td className="px-4 py-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="h-11 w-11 overflow-hidden rounded-lg border border-line bg-gray-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={teacher.photo} alt={teacher.name} className="h-full w-full object-cover object-top" />
                    </span>
                    <span className="text-[13px] text-gray-600">{teacher.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {chips(c).map((t) => (
                      <span key={t} className="rounded bg-brand-light px-1.5 py-0.5 text-[11px] font-semibold text-brand">{t}</span>
                    ))}
                  </div>
                  <p className="mt-1.5 font-semibold text-ink">{c.title}</p>
                </td>
                <td className="px-4 py-4 text-center text-gray-600">{c.startDate || "-"}</td>
                <td className="px-4 py-4 text-center text-gray-600">{c.period || "-"}</td>
                <td className="px-4 py-4 text-center text-gray-600">{c.time || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 모바일 카드 */}
      <ul className="space-y-3 lg:hidden">
        {courses.map((c, i) => (
          <li key={i} className="rounded-2xl border border-line p-4">
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-line bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={teacher.photo} alt={teacher.name} className="h-full w-full object-cover object-top" />
              </span>
              <span className="text-[13px] text-gray-600">{teacher.name}</span>
              <div className="ml-auto flex flex-wrap justify-end gap-1">
                {chips(c).map((t) => (
                  <span key={t} className="rounded bg-brand-light px-1.5 py-0.5 text-[11px] font-semibold text-brand">{t}</span>
                ))}
              </div>
            </div>
            <p className="mt-2 font-semibold text-ink">{c.title}</p>
            <dl className="mt-2 space-y-1 text-[13px] text-gray-500">
              {c.startDate && (
                <div className="flex gap-2"><dt className="w-14 shrink-0 text-gray-400">개강일</dt><dd>{c.startDate}</dd></div>
              )}
              {c.period && (
                <div className="flex gap-2"><dt className="w-14 shrink-0 text-gray-400">수업기간</dt><dd>{c.period}</dd></div>
              )}
              {c.time && (
                <div className="flex gap-2"><dt className="w-14 shrink-0 text-gray-400">수업시간</dt><dd>{c.time}</dd></div>
              )}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
