import type { Metadata } from "next";
import { LOCATION, SITE } from "@/config/homepage";
import NaverMap from "@/app/components/about/NaverMap";

export const metadata: Metadata = {
  title: "오시는 길 | 5A 아카데미",
  description: "5A 아카데미 평촌점 오시는 길 — 위치, 버스·지하철 안내",
};

const GENERAL_BUS = ["1", "3", "52-1", "52", "5-2", "22"];
const VILLAGE_BUS = ["03", "5-5", "7", "10-2", "11"];

export default function LocationPage() {
  const tel = SITE.footer.tel;
  const naverUrl = `https://map.naver.com/p/search/${encodeURIComponent(LOCATION.mapQuery)}`;

  return (
    <main className="flex-1 pb-16">
      {/* 헤더 */}
      <div className="border-b border-line bg-brand-light/50">
        <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">학원소개</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">오시는 길</h1>
          <p className="mt-2 text-sm text-muted">{LOCATION.name} · {LOCATION.address}</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-8 px-5 py-8 lg:px-8">
        {/* 지도 */}
        <div className="overflow-hidden rounded-2xl border border-line">
          <NaverMap
            clientId={LOCATION.naverClientId}
            lat={LOCATION.lat}
            lng={LOCATION.lng}
            name={LOCATION.name}
            address={LOCATION.address}
            mapQuery={LOCATION.mapQuery}
          />
        </div>

        {/* 주소 + 액션 */}
        <div className="rounded-2xl border border-line p-6 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-lg font-extrabold text-ink">{LOCATION.name}</p>
            <p className="mt-1 text-sm text-muted">{LOCATION.address}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 sm:mt-0 sm:shrink-0">
            <a
              href={naverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              네이버 지도
            </a>
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-line px-5 py-2.5 text-sm font-bold text-ink transition hover:border-brand hover:text-brand"
            >
              전화 {tel}
            </a>
          </div>
        </div>

        {/* 교통편 */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* 버스 */}
          <section className="rounded-2xl border border-line p-6">
            <div className="mb-5 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-light text-brand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 16V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" />
                  <path d="M4 11h16" /><path d="M4 16h16v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1M6 16v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1" />
                  <circle cx="7.5" cy="13.5" r="0.6" fill="currentColor" /><circle cx="16.5" cy="13.5" r="0.6" fill="currentColor" />
                </svg>
              </span>
              <h2 className="text-lg font-extrabold text-ink">버스</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-semibold text-gray-500">일반버스</p>
                <div className="flex flex-wrap gap-1.5">
                  {GENERAL_BUS.map((n) => (
                    <span key={n} className="rounded-lg bg-[#3d5bdb]/10 px-2.5 py-1 text-sm font-bold text-[#3d5bdb]">{n}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-gray-500">마을버스</p>
                <div className="flex flex-wrap gap-1.5">
                  {VILLAGE_BUS.map((n) => (
                    <span key={n} className="rounded-lg bg-[#0a9d5a]/10 px-2.5 py-1 text-sm font-bold text-[#0a9d5a]">{n}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 지하철 */}
          <section className="rounded-2xl border border-line p-6">
            <div className="mb-5 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-light text-brand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="3" width="14" height="14" rx="4" /><path d="M5 11h14" />
                  <path d="M8 21l2-3M16 21l-2-3" /><circle cx="8.5" cy="14" r="0.6" fill="currentColor" /><circle cx="15.5" cy="14" r="0.6" fill="currentColor" />
                </svg>
              </span>
              <h2 className="text-lg font-extrabold text-ink">지하철</h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00A5DE] text-xs font-bold text-white">4</span>
              <span className="font-bold text-ink">범계역 <span className="font-medium text-gray-400">4호선</span></span>
            </div>

            <ol className="mt-4 space-y-3">
              {[
                "4-1번 출구",
                "마을버스 03, 5-2, 10-2 환승",
                "먹자골목 정류장 하차",
              ].map((step, i, arr) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand">
                    {i + 1}
                  </span>
                  <span className="text-[15px] text-gray-700">
                    {step}
                    {i === arr.length - 1 && <span className="ml-1.5 text-sm font-semibold text-brand">(약 15분)</span>}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
