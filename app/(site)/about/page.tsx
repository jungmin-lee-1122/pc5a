import type { Metadata } from "next";
import Link from "next/link";
import AboutHero from "@/app/components/about/AboutHero";
import AboutResults from "@/app/components/about/AboutResults";

export const metadata: Metadata = {
  title: "학원소개 | 5A 아카데미",
  description: "입시를 제대로 아는 곳, 학습을 제대로 시키는 곳, 목표대학에 합격시키는 곳 — 5A 아카데미",
};

const TEACHERS = [
  { name: "박하나", subject: "수학" },
  { name: "최원용", subject: "국어" },
  { name: "김대원", subject: "영어" },
];

const SERVICES = [
  { title: "정시·내신 대비", desc: "수학 · 영어 · 국어 전 과목 정시와 내신을 함께 대비합니다." },
  { title: "SA반 운영", desc: "상위권 학생을 위한 SA반을 별도로 운영합니다." },
  { title: "체계적 커리큘럼", desc: "시기별·수준별로 설계된 체계적인 커리큘럼을 제공합니다." },
];

const FACILITIES = ["상담실", "강의실", "자습실"];

// 5A PROGRAM (T·A·R·G·E·T 등에서 A만 강조)
const PROGRAM = [
  {
    pre: "T",
    post: "RGET",
    a: "A",
    desc: "입학을 하면 상담을 통해 학생의 꿈을 실현시킬 목표대학, 희망학과를 설정합니다.",
  },
  {
    pre: "RO",
    post: "DMAP",
    a: "A",
    desc: "목표대학, 희망학과가 결정되면 현재 성적과 학생부 상태를 파악하고, 목표대학 합격을 위한 학생부종합·학생부교과·논술·특기자전형 또는 수능 등 개개인에게 적합한 학습프로그램을 제시합니다.",
  },
  {
    pre: "",
    post: "CTION",
    a: "A",
    desc: "학생의 성적 향상과 학생부 최적화를 위해 중간·기말고사 전 기출 및 예상문제 제공과 서울대 멘토진의 1:1 클리닉을 진행하고, 교내 활동을 체계적으로 운영하며, 필요 시 서울대 멘토와의 상담 및 5A입시연구소 컨설팅을 통해 개별 맞춤 지원을 제공합니다.",
  },
  {
    pre: "",
    post: "DJUST",
    a: "A",
    desc: "학습기록장과 4주 단위 계획표로 학습 상태를 점검하고, 격주 검사를 통해 보완합니다. 모의고사 성적 분석 후 과목별 맞춤 학습법을 제안하며, 필요한 과제도 제시·검사합니다. 학교 활동까지 포함해 전반적인 학습을 관리하며, 학원 ROADMAP에 맞춰 밀착 지도합니다.",
  },
  {
    pre: "P",
    post: "SS",
    a: "A",
    desc: "Action과 Adjust를 반복적으로 진행하다 보면 학원에서 제시한 Roadmap에 가장 적합한 활동으로 만들어지며, 결국 학생과 학부모님이 꿈꾸는 대학 희망학과에 합격을 할 수 있게 됩니다.",
  },
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

      {/* 5A PROGRAM */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-brand-dark sm:text-[28px]">5A PROGRAM</h2>

          <div className="relative mt-10">
            {/* 가로 그라데이션 라인 (PC) */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-[86px] hidden h-[3px] rounded-full lg:block"
              style={{ background: "linear-gradient(to right, #2f47b8 0%, #2f47b8 55%, #22d3ee 100%)" }}
            />

            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
              {PROGRAM.map((p) => (
                <div key={p.a === p.a ? p.pre + p.post : ""} className="relative">
                  {/* 집 아이콘 */}
                  <svg
                    viewBox="0 0 120 96"
                    className="mx-auto block h-[86px] w-auto text-[#d6ddef]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M60 6 L112 42 L112 94 L8 94 L8 42 Z" />
                  </svg>

                  <h3 className="mt-6 text-center text-xl font-extrabold tracking-tight text-ink sm:text-left">
                    {p.pre}
                    <span className="text-red-600">A</span>
                    {p.post}
                  </h3>
                  <p className="mt-3 text-center text-[13.5px] leading-relaxed text-gray-500 sm:text-left">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 최고의 입시 결과 증명 (사진 + 텍스트, 스크롤 애니메이션) */}
      <AboutResults />

      {/* 전문 강사진 */}
      <div className="bg-brand-light/40">
        <Section eyebrow="TEACHERS" title="전문 강사진">
          <div className="grid grid-cols-3 gap-4">
            {TEACHERS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-line bg-white px-4 py-6 text-center">
                <p className="text-[13px] font-semibold text-brand">{t.subject}</p>
                <p className="mt-0.5 text-lg font-extrabold text-ink sm:text-xl">{t.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/teachers"
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              강사진 전체 보기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </Link>
          </div>
        </Section>
      </div>

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

      {/* 시설 안내 */}
      <Section eyebrow="FACILITY" title="시설 안내">
        <div className="grid gap-4 sm:grid-cols-3">
          {FACILITIES.map((f) => (
            <div key={f} className="overflow-hidden rounded-2xl border border-line">
              <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-brand-light to-brand-light/30">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <p className="border-t border-line py-3 text-center text-sm font-bold text-ink">{f}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted">* 시설 사진은 추후 등록됩니다.</p>
      </Section>
    </main>
  );
}
