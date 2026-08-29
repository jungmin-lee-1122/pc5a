import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "학원소개 | 5A 아카데미",
  description: "입시를 제대로 아는 곳, 학습을 제대로 시키는 곳, 목표대학에 합격시키는 곳 — 5A 아카데미",
};

const STATS = [
  { value: "35%", label: "Medical 합격자 중 5A 출신" },
  { value: "23%", label: "서울대 합격자 중 5A 학생" },
  { value: "20%", label: "연고대 합격자 중 5A 출신" },
  { value: "1.5%", label: "고양·파주 지역 고3 중 단 1.5%의 성과" },
];

const REASONS = [
  { title: "개별 맞춤 학습 분석", desc: "학생별 데이터 분석으로 철저하게 관리합니다." },
  { title: "최고의 입시 전문가 그룹", desc: "입시 전문가 그룹이 직접 지도합니다." },
  { title: "상위권 최적화 학습 환경", desc: "상위권 학생을 위한 최적화된 환경을 제공합니다." },
  { title: "1:1 멘토링 + 전문 교육", desc: "멘토진의 1:1 상담과 강사진의 전문 교육으로 지원합니다." },
];

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
      {/* 헤더 */}
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">학원소개</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">5A 아카데미</h1>
          <p className="mt-2 text-sm text-muted">입시를 제대로 아는 곳, 학습을 제대로 시키는 곳.</p>
        </div>
      </div>

      {/* 슬로건 */}
      <section className="mx-auto max-w-6xl px-5 py-14 text-center lg:px-8 lg:py-20">
        <p className="text-xl font-extrabold leading-relaxed text-ink sm:text-3xl sm:leading-[1.5]">
          입시를 <span className="text-brand">제대로 아는</span> 곳
          <br />
          학습을 <span className="text-brand">제대로 시키는</span> 곳
          <br />
          목표대학에 <span className="text-brand">합격시키는</span> 곳
        </p>
      </section>

      {/* 핵심 성과 */}
      <div className="bg-brand-light/50">
        <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
          <p className="text-center text-sm font-bold text-brand">합격 실적</p>
          <h2 className="mt-1.5 text-center text-2xl font-extrabold text-ink sm:text-3xl">숫자로 보는 5A</h2>
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-white px-4 py-7 text-center">
                <p className="text-3xl font-extrabold text-brand sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 선택 이유 */}
      <Section eyebrow="WHY 5A" title="5A아카데미를 선택하는 이유">
        <div className="grid gap-4 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <div key={r.title} className="flex gap-4 rounded-2xl border border-line bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-sm font-extrabold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-base font-bold text-ink">{r.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

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
