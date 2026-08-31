import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCourses } from "@/lib/content";
import { SCHEDULE_TABS } from "@/lib/types";
import CategoryTabs from "@/app/components/schedule/CategoryTabs";
import ZoomableImage from "@/app/components/schedule/ZoomableImage";

export const dynamic = "force-dynamic";

async function findCourse(id: string) {
  const all = await getAllCourses();
  return all.find((c) => c.id === id) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const c = await findCourse(id);
  return { title: c ? `${c.title} | 5A 아카데미` : "단과시간표 | 5A 아카데미" };
}

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-3 border-b border-line py-3.5">
      <dt className="w-20 shrink-0 text-sm font-semibold text-gray-400">{label}</dt>
      <dd className="text-sm font-medium text-ink">{value}</dd>
    </div>
  );
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await findCourse(id);
  if (!course) notFound();

  const activeTab =
    SCHEDULE_TABS.find((t) => (course.target ?? []).some((x) => t.targets.includes(x)))?.label ??
    SCHEDULE_TABS[0].label;

  return (
    <main className="flex-1 pb-16">
      <div className="mx-auto max-w-5xl px-5 pt-6 lg:px-8">
        <Link href={`/schedule?category=${encodeURIComponent(activeTab)}`} className="inline-flex items-center gap-1 text-sm text-muted hover:text-brand">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          단과시간표
        </Link>
        <div className="mt-4">
          <CategoryTabs active={activeTab} />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-8 lg:px-8">
        <div className="grid gap-7 sm:grid-cols-[220px_1fr]">
          <div className="relative aspect-[3/4] w-36 overflow-hidden rounded-2xl border border-line bg-brand-light/30 sm:w-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={course.teacherPhoto || "/placeholders/teacher.svg"}
              alt={`${course.teacherName} 선생님`}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap gap-1.5">
              {(course.target ?? []).map((t) => (
                <span key={t} className="rounded bg-ink px-2 py-0.5 text-xs font-bold text-white">{t}</span>
              ))}
              {(course.tags ?? []).map((t) => (
                <span key={t} className="rounded bg-brand-light px-2 py-0.5 text-xs font-bold text-brand">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-2.5 text-xl font-extrabold leading-snug text-ink sm:text-2xl">{course.title}</h1>

            <dl className="mt-5 grid gap-x-8 sm:grid-cols-2">
              <div className="flex items-center gap-3 border-b border-line py-3.5">
                <dt className="w-20 shrink-0 text-sm font-semibold text-gray-400">선생님</dt>
                <dd className="flex flex-wrap items-center gap-2 text-sm font-medium text-ink">
                  {course.teacherName}
                  <Link
                    href={`/teachers/${course.teacherId}`}
                    className="rounded-lg border border-line px-2.5 py-1 text-xs font-semibold text-gray-500 transition hover:border-brand hover:text-brand"
                  >
                    개설강좌 전체보기
                  </Link>
                </dd>
              </div>
              <Row label="모집대상" value={(course.target ?? []).join(", ")} />
              <Row label="개강일" value={course.startDate} />
              <Row label="수업기간" value={course.period} />
              <Row label="수업시간" value={course.time} />
              <Row label="수강료" value={course.price} />
              <Row label="교재" value={course.material} />
            </dl>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-extrabold text-ink">강의 계획서</h2>
          {course.syllabus ? (
            <ZoomableImage src={course.syllabus} alt={`${course.title} 강의계획서`} label="강의 계획서" />
          ) : (
            <p className="rounded-2xl border border-line py-16 text-center text-sm text-muted">
              강의 계획서가 준비 중입니다.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
