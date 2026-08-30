import { Suspense } from "react";
import type { Metadata } from "next";
import { getTeachers } from "@/lib/content";
import { SITE } from "@/config/homepage";
import TeachersView from "@/app/components/teachers/TeachersView";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "강사진 소개 | 5A 아카데미",
  description: "5A 아카데미 강사진 소개 — 과목별 선생님 라인업",
};

export default async function TeachersPage() {
  const teachers = await getTeachers();

  return (
    <main className="flex-1 pb-16">
      {/* 페이지 헤더 */}
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">강사진 소개</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">강사진</h1>
          <p className="mt-2 text-sm text-muted">
            선별된 강사 라인업으로 제대로 된 수업을 제공합니다.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <Suspense fallback={null}>
          <TeachersView teachers={teachers} subjects={SITE.subjects} />
        </Suspense>
      </div>
    </main>
  );
}
