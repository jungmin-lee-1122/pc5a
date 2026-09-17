import type { Metadata } from "next";
import Link from "next/link";
import AboutHero from "@/app/components/about/AboutHero";
import AboutResults from "@/app/components/about/AboutResults";

export const metadata: Metadata = {
  title: "학원소개 | 5A 아카데미",
  description: "입시를 제대로 아는 곳, 학습을 제대로 시키는 곳, 목표대학에 합격시키는 곳 — 5A 아카데미",
};

export default function AboutPage() {
  return (
    <main className="flex-1 pb-8">
      {/* 히어로 (레퍼런스 재현: 배경사진 + 프레임 + 순차 페이드인) */}
      <AboutHero />

      {/* 5A PROGRAM (이미지) */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about-5aprogram.png"
            alt="5A PROGRAM — TARGET · ROADMAP · ACTION · ADJUST · PASS"
            className="block w-full select-none"
            draggable={false}
          />
        </div>
      </section>

      {/* 최고의 입시 결과 증명 (사진 + 텍스트, 스크롤 애니메이션) */}
      <AboutResults />

      {/* 고등부 수강 안내 (단과 / 올케어반) */}
      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
        <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">5A 고등부 수강 안내</h2>
        <p className="mt-2 text-[15px] text-muted">과목별 수업부터 종합관리까지</p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {/* 고등 단과 */}
          <div className="relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl bg-[#E7ECFD] p-8 sm:p-10">
            <p className="text-sm font-bold text-[#334AB1]">내신 · 수능 대비</p>
            <h3 className="mt-2 text-[34px] font-extrabold leading-tight text-ink sm:text-[40px]">고등 단과</h3>
            <p className="mt-4 max-w-[62%] text-[15px] font-medium leading-relaxed text-gray-600 sm:text-base">
              시기에 맞춰 달라지는 커리큘럼으로 내신과 수능을 준비합니다.
            </p>
            <Link
              href="/schedule"
              className="mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-[15px] font-bold text-[#334AB1] underline decoration-2 underline-offset-4"
            >
              단과 시간표 보기
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about-svc-books.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-5 right-5 w-40 select-none sm:w-52"
              draggable={false}
            />
          </div>

          {/* 올케어반 */}
          <div className="relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl bg-[#E5F4EF] p-8 sm:p-10">
            <p className="text-sm font-bold text-[#127A5E]">고등 종합반</p>
            <h3 className="mt-2 text-[34px] font-extrabold leading-tight text-ink sm:text-[40px]">올케어반</h3>
            <p className="mt-4 max-w-[62%] text-[15px] font-medium leading-relaxed text-gray-600 sm:text-base">
              수업과 학습태도를 함께 관리하고, 입시 주요 시기에 맞춰 컨설팅을 제공합니다.
            </p>
            <Link
              href="/admission/allcare"
              className="mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-[15px] font-bold text-[#127A5E] underline decoration-2 underline-offset-4"
            >
              올케어반 자세히 보기
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about-svc-care.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-5 right-5 w-40 select-none sm:w-52"
              draggable={false}
            />
          </div>
        </div>
      </section>

    </main>
  );
}
