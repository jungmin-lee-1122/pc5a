import type { Metadata } from "next";
import AdmissionTabs from "@/app/components/admission/AdmissionTabs";
import AllcareContent from "@/app/components/admission/AllcareContent";

export const metadata: Metadata = {
  title: "고등 올케어반 | 5A 아카데미",
  description: "5A 아카데미 고등 올케어반 모집 안내",
};

export default function AllcarePage() {
  return (
    <main className="flex-1">
      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">모집안내</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">고등 올케어반</h1>
          <p className="mt-2 text-sm text-muted">상위권 도약을 위한 밀착 관리형 올케어 과정.</p>
        </div>
      </div>

      <AdmissionTabs contained />

      <AllcareContent />
    </main>
  );
}
