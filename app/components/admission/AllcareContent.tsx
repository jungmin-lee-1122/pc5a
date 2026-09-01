"use client";

import Link from "next/link";
import AllcareHero from "@/app/components/admission/AllcareHero";

const SECTIONS = [
  { label: "학습 관리 시스템", target: "ac-system" },
  { label: "맞춤 시간표", target: "ac-schedule" },
  { label: "선정 기준", target: "ac-criteria" },
  { label: "학생 인터뷰", target: "ac-interview" },
];

const SYSTEM = [
  "정해진 시간까지 입실 필수",
  "단과 이외의 시간은 필수 자습",
  "수준별 맞춤 수업 배정",
  "시간표에 따라 루틴대로 학습 진행",
];

const DAYS = ["", "월", "화", "수", "목", "금", "토"];
const TIMETABLE: string[][] = [
  ["1교시", "", "", "", "국어", "", "자습"],
  ["2교시", "수학", "", "", "국어", "", "자습"],
  ["3교시", "자습", "국어", "", "자습", "", "자습"],
  ["4교시", "", "", "자습", "", "영어", "자습"],
  ["5교시", "", "", "자습", "", "영어", "자습"],
  ["6교시", "자습", "자습", "", "자습", "", "자습"],
  ["7교시", "", "", "", "국어", "TEST", "자습"],
];

const CRITERIA = [
  {
    grade: "고1",
    req: "수학 포함 3과목 이상 수강 필수",
    perks: ["관리형 독서실 이용 (4주 단위)", "학습·입시 컨설팅 제공 (성적·생기부 상담)"],
  },
  {
    grade: "고2",
    req: "수학 포함 3과목 이상 수강 필수",
    perks: ["관리형 독서실 이용 (4주 단위)", "학습·입시 컨설팅 제공 (성적·생기부 상담)"],
  },
  {
    grade: "고3",
    req: "수학 2강좌 포함 4강좌 이상 수강 필수",
    perks: ["관리형 독서실 이용 (4주 단위)", "학습·입시 컨설팅 제공 (성적·생기부·수시/정시 원서 상담)"],
  },
];

const INTERVIEWS = [
  {
    who: "고1 재원생 이○서 학부모님",
    quote: "학원에서 출결까지 꼼꼼히 확인해줘서 안심돼요",
    body: "무단결석이나 지각 시 바로 연락이 오니까 아이도 책임감을 갖고 다녀요. 그냥 맡기면 되는 학습 분위기가 만들어집니다.",
  },
  {
    who: "고2 재원생 이○영",
    quote: "혼자 할 땐 흐트러졌는데, 선배들이랑 공부하니 자극이 돼요",
    body: "집에선 자꾸 무너졌는데, 올케어반에서 조용히 공부하는 선배들을 보면서 자연스럽게 집중하게 돼요. 분위기 자체가 자극이 돼서 딴짓할 틈이 없어요.",
  },
  {
    who: "고3 재원생 정○은",
    quote: "쌤들이 계속 체크해주셔서 공부 습관이 생겼어요",
    body: "예전엔 책상에 앉아도 뭐부터 해야 할지 몰라 시간만 버릴 때가 많았는데, 여기선 쌤들이 계속 챙겨주니 저절로 루틴이 만들어졌어요. 지금은 공부하는 게 일상이 된 느낌이에요.",
  },
];

function cellCls(v: string) {
  if (!v) return "text-transparent";
  if (v === "자습") return "bg-gray-100 text-gray-500";
  if (v === "TEST") return "bg-amber-100 font-bold text-amber-700";
  return "bg-brand-light font-bold text-brand";
}

export default function AllcareContent() {
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  return (
    <>
      <AllcareHero />

      {/* ===== 2번째 섹션: 올케어 소개 배너 ===== */}
      <section className="w-full" style={{ backgroundColor: "#A6D4FE" }}>
        <div className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/allcare-section2.png"
            alt="학습·생활·입시 관리가 필요한 학생을 위한 프리미엄 올케어 — 고등부 올케어반 소개 및 관리 방식"
            className="block w-full select-none"
            draggable={false}
          />
        </div>
      </section>

      {/* ===== 섹션 이동 탭 ===== */}
      <div className="sticky top-20 z-30 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="no-scrollbar flex items-center gap-1 overflow-x-auto sm:gap-2">
            {SECTIONS.map((s) => (
              <button
                key={s.target}
                onClick={() => goTo(s.target)}
                className="shrink-0 whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500 transition-colors hover:text-brand sm:px-4"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-5 py-14 lg:px-8">
        {/* ===== 학습 관리 시스템 + 맞춤 시간표 ===== */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div id="ac-system" className="scroll-mt-40 rounded-2xl border border-line bg-white p-6 sm:p-7">
            <h3 className="text-xl font-extrabold text-ink">올케어반 학습 관리 시스템</h3>
            <ul className="mt-5 space-y-3">
              {SYSTEM.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-brand" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                    <path d="M8 12.5l2.5 2.5 5-5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[15px] font-medium text-gray-700">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-400">※ 18:10 ~ 18:30 일일 TEST 진행 (단어·암기 클리어)</p>

            <div className="mt-5 rounded-xl bg-brand-light/70 p-4">
              <p className="text-sm font-bold text-ink">필수 자습 시간</p>
              <div className="mt-2 flex flex-wrap gap-x-8 gap-y-1 text-sm text-gray-700">
                <span><b className="text-brand">평일</b> 18:00 ~ 24:00</span>
                <span><b className="text-brand">주말</b> 09:00 ~ 22:00</span>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-red-500">
              ※ 평일 자습은 24:00까지, 주말·공휴일은 22:00까지가 원칙입니다. (귀가 교통편 사정 시 담임 선생님과 상담 후 조정 가능)
            </p>
          </div>

          <div id="ac-schedule" className="scroll-mt-40 rounded-2xl border border-line bg-white p-6 sm:p-7">
            <h3 className="text-xl font-extrabold text-ink">나만의 맞춤 시간표</h3>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[440px] border-collapse text-center text-xs sm:text-sm">
                <thead>
                  <tr>
                    {DAYS.map((d, i) => (
                      <th key={i} className={"border border-line py-2 font-bold " + (i === 0 ? "bg-white" : "bg-brand-light text-brand")}>
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TIMETABLE.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) =>
                        ci === 0 ? (
                          <th key={ci} className="border border-line bg-gray-50 px-2 py-2 text-xs font-semibold text-gray-500">{cell}</th>
                        ) : (
                          <td key={ci} className={"border border-line px-1 py-2 " + cellCls(cell)}>{cell || "·"}</td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              정해진 시간 외 등원·외출·조퇴 시 반드시 담임 선생님의 사전 허락이 필요하며, 무단 시 결석 또는 지각으로 처리됩니다.
            </p>
          </div>
        </div>

        {/* ===== 선정 기준 ===== */}
        <section id="ac-criteria" className="scroll-mt-40">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-ink">올케어반 선정 기준</h3>
            <div className="mx-auto mt-2 h-1 w-14 rounded bg-brand" />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {CRITERIA.map((c) => (
              <div key={c.grade} className="overflow-hidden rounded-2xl border border-line bg-white">
                <div className="bg-brand-dark py-3 text-center text-lg font-extrabold text-white">{c.grade}</div>
                <div className="p-5">
                  <p className="rounded-lg bg-brand-light px-3 py-2 text-center text-sm font-bold text-brand">{c.req}</p>
                  <ul className="mt-4 space-y-2.5">
                    {c.perks.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span className="min-w-0">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 학생 인터뷰 ===== */}
        <section id="ac-interview" className="scroll-mt-40 -mx-5 rounded-none bg-brand-light/50 px-5 py-12 sm:mx-0 sm:rounded-3xl sm:px-8">
          <h3 className="text-center text-2xl font-extrabold text-ink">올케어반 학생들의 이야기</h3>
          <p className="mt-2 text-center text-sm text-muted">생활이 바뀌니 성적이 오릅니다.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {INTERVIEWS.map((v) => (
              <div key={v.who} className="rounded-2xl border border-line bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-bold text-ink">{v.who}</span>
                </div>
                <p className="mt-4 font-bold leading-snug text-brand">“{v.quote}”</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{v.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ===== CTA ===== */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 lg:flex-row lg:items-center lg:px-8">
          <p className="text-xl font-extrabold leading-snug text-ink sm:text-2xl">
            지금, 5A 아카데미 올케어반에서
            <br />
            당신의 성적과 습관을 완성하세요.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/life/counsel" className="rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark">
              올케어반 상담 예약하기
            </Link>
            <Link href="/schedule" className="rounded-xl border border-brand px-6 py-3.5 text-sm font-bold text-brand transition hover:bg-brand-light">
              올케어반 시간표 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
