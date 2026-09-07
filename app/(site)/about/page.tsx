import type { Metadata } from "next";
import AboutHero from "@/app/components/about/AboutHero";
import AboutResults from "@/app/components/about/AboutResults";

export const metadata: Metadata = {
  title: "학원소개 | 5A 아카데미",
  description: "입시를 제대로 아는 곳, 학습을 제대로 시키는 곳, 목표대학에 합격시키는 곳 — 5A 아카데미",
};

const SERVICES = [
  { title: "정시·내신 대비", desc: "수학 · 영어 · 국어 전 과목 정시와 내신을 함께 대비합니다." },
  { title: "SA반 운영", desc: "상위권 학생을 위한 SA반을 별도로 운영합니다." },
  { title: "체계적 커리큘럼", desc: "시기별·수준별로 설계된 체계적인 커리큘럼을 제공합니다." },
];


function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
      {eyebrow && <p className="text-sm font-bold text-brand">{eyebrow}</p>}
      <h2 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">{title}</h2>
      <div className="mt-7">{children}</div>
    </section>
  );
}

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

      {/* 주요 서비스 */}
      <Section eyebrow="SERVICE" title="주요 서비스">
        <div className="grid gap-4 sm:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl border border-line bg-white p-6">
              <p className="text-base font-bold text-ink">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

    </main>
  );
}
