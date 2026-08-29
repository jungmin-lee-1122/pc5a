"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { CourseWithTeacher } from "@/lib/content";

export default function CourseTable({ courses }: { courses: CourseWithTeacher[] }) {
  const router = useRouter();
  const chips = (c: CourseWithTeacher) => (c.tags && c.tags.length ? c.tags : [c.subject]);

  if (courses.length === 0) {
    return (
      <div className="rounded-2xl border border-line py-20 text-center text-sm text-muted">
        해당 조건의 강좌가 없습니다.
      </div>
    );
  }

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
            {courses.map((c) => (
              <tr
                key={c.id}
                onClick={() => router.push(`/schedule/${c.id}`)}
                className="cursor-pointer border-b border-line transition-colors last:border-0 hover:bg-brand-light/30"
              >
                <td className="px-4 py-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="h-11 w-11 overflow-hidden rounded-lg border border-line bg-gray-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.teacherPhoto} alt={c.teacherName} className="h-full w-full object-cover object-top" />
                    </span>
                    <span className="text-[13px] text-gray-600">{c.teacherName}</span>
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
        {courses.map((c) => (
          <li key={c.id}>
            <Link href={`/schedule/${c.id}`} className="block rounded-2xl border border-line p-4">
              <div className="flex items-center gap-2">
                <span className="h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-line bg-gray-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.teacherPhoto} alt={c.teacherName} className="h-full w-full object-cover object-top" />
                </span>
                <span className="text-[13px] text-gray-600">{c.teacherName}</span>
                <div className="ml-auto flex flex-wrap justify-end gap-1">
                  {chips(c).map((t) => (
                    <span key={t} className="rounded bg-brand-light px-1.5 py-0.5 text-[11px] font-semibold text-brand">{t}</span>
                  ))}
                </div>
              </div>
              <p className="mt-2 font-semibold text-ink">{c.title}</p>
              <dl className="mt-2 space-y-1 text-[13px] text-gray-500">
                {c.startDate && <div className="flex gap-2"><dt className="w-14 shrink-0 text-gray-400">개강일</dt><dd>{c.startDate}</dd></div>}
                {c.period && <div className="flex gap-2"><dt className="w-14 shrink-0 text-gray-400">수업기간</dt><dd>{c.period}</dd></div>}
                {c.time && <div className="flex gap-2"><dt className="w-14 shrink-0 text-gray-400">수업시간</dt><dd>{c.time}</dd></div>}
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
