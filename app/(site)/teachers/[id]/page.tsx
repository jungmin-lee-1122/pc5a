import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeachers } from "@/lib/content";
import { SITE } from "@/config/homepage";
import TeacherDetail from "@/app/components/teachers/TeacherDetail";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const t = (await getTeachers()).find((x) => x.id === id);
  return { title: t ? `${t.name} 선생님 | 5A 아카데미` : "강사진 | 5A 아카데미" };
}

export default async function TeacherViewPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ subject?: string }>;
}) {
  const [{ id }, { subject }] = await Promise.all([params, searchParams]);
  const teachers = await getTeachers();
  const current = teachers.find((t) => t.id === id);
  if (!current) notFound();

  const courses = current.courses ?? [];

  const activeSubject =
    subject && (subject === "전체" || SITE.subjects.includes(subject)) ? subject : current.subject;

  return (
    <main className="flex-1 pb-16">
      {/* 헤더 */}
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-5xl px-5 py-9 lg:px-8">
          <Link
            href={`/teachers?subject=${encodeURIComponent(activeSubject)}`}
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-brand"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            강사진 목록
          </Link>
          <h1 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">강사 라인업</h1>
          <p className="mt-2 text-sm text-muted">선별된 강사 라인업으로 제대로 된 수업을 제공합니다.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-8 lg:px-8">
        <TeacherDetail
          teachers={teachers}
          current={current}
          subjects={SITE.subjects}
          activeSubject={activeSubject}
          courses={courses}
        />
      </div>
    </main>
  );
}
