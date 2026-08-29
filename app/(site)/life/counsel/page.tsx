import type { Metadata } from "next";
import ConsultForm from "@/app/components/consult/ConsultForm";
import { SITE } from "@/config/homepage";

export const metadata: Metadata = {
  title: "온라인 상담 | 5A 아카데미",
  description: "5A 아카데미 온라인 상담 신청 — 입학·수강·학습 상담",
};

export default function CounselPage() {
  const tel = SITE.footer.tel;
  return (
    <main className="flex-1 pb-16">
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">학원생활</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">온라인 상담</h1>
          <p className="mt-2 text-sm text-muted">
            입학·수강·학습에 관해 궁금하신 점을 남겨주시면 담당 선생님이 연락드립니다.
            빠른 상담을 원하시면 전화({tel})로 문의해 주세요.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-8 lg:px-8">
        <ConsultForm />
      </div>
    </main>
  );
}
