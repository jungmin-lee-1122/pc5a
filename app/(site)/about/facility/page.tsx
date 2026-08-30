import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "시설안내 | 5A 아카데미",
  description: "5A 아카데미 평촌점 시설 안내 — 강의실, 자습실, 상담실, 옥상정원 등",
};

const FACILITIES: { src: string; name: string; desc: string }[] = [
  { src: "/facility/classroom.jpg", name: "강의실", desc: "집중도를 높인 쾌적한 강의 환경" },
  { src: "/facility/study-1.jpg", name: "자습실", desc: "체계적으로 관리되는 자습 공간" },
  { src: "/facility/study-2.jpg", name: "개인 자습실", desc: "개인별 몰입 학습을 위한 1인 부스" },
  { src: "/facility/counsel-1.jpg", name: "상담실", desc: "학습·입시 상담을 위한 전용 공간" },
  { src: "/facility/counsel-2.png", name: "1:1 상담실", desc: "밀착 1:1 상담 공간" },
  { src: "/facility/counsel-3.jpg", name: "상담실 입구", desc: "프라이버시를 배려한 상담 동선" },
  { src: "/facility/lounge.png", name: "라운지·데스크", desc: "안내 데스크와 휴게 라운지" },
  { src: "/facility/office-1.jpg", name: "교무실", desc: "강사·멘토진이 상주하는 교무 공간" },
  { src: "/facility/office-2.jpg", name: "교사 연구실", desc: "수업 연구와 개별 지도가 이뤄지는 공간" },
  { src: "/facility/hallway.jpg", name: "복도", desc: "밝고 정돈된 이동 동선" },
  { src: "/facility/restroom.jpg", name: "화장실", desc: "청결하게 관리되는 편의 시설" },
  { src: "/facility/rooftop.jpg", name: "옥상정원", desc: "잠시 쉬어갈 수 있는 휴식 공간" },
];

export default function FacilityPage() {
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
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">학원소개</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">시설안내</h1>
          <p className="mt-2 text-sm text-muted">학습에만 집중할 수 있도록 설계된 5A 아카데미의 공간을 소개합니다.</p>
        </div>
      </div>

      {/* 갤러리 */}
      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => (
            <li
              key={f.src}
              className="group overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-brand/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.src}
                  alt={f.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 rounded-lg bg-black/55 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  {f.name}
                </span>
              </div>
              <div className="px-5 py-4">
                <p className="text-[15px] font-bold text-ink">{f.name}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
