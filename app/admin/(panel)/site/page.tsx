"use client";

import { useEffect, useState } from "react";
import { input, label, btn, card } from "@/app/components/admin/ui";
import type { SiteSettings } from "@/lib/types";

export default function Page() {
  const [data, setData] = useState<SiteSettings | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/site", { cache: "no-store" }).then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <p className="text-sm text-muted">불러오는 중…</p>;

  const setTop = (k: "brandName" | "sectionTitle", v: string) => setData({ ...data!, [k]: v });
  const setFooter = (k: keyof SiteSettings["footer"], v: string) =>
    setData({ ...data!, footer: { ...data!.footer, [k]: v } });
  const setSocial = (k: keyof SiteSettings["social"], v: string) =>
    setData({ ...data!, social: { ...data!.social, [k]: v } });

  async function save() {
    const res = await fetch("/api/site", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  }

  return (
    <div>
      <h1 className="mb-1 text-xl font-bold text-ink">사이트 정보</h1>
      <p className="mb-6 text-sm text-muted">헤더 브랜드, 강사 과목 탭, 푸터 정보, 소셜 링크를 관리합니다.</p>

      <div className="space-y-6">
        <section className={`${card} space-y-4`}>
          <h2 className="text-base font-bold text-ink">기본</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label}>헤더 로고 옆 텍스트</label>
              <input className={input} value={data.brandName} onChange={(e) => setTop("brandName", e.target.value)} />
            </div>
            <div>
              <label className={label}>영상 섹션 제목</label>
              <input className={input} value={data.sectionTitle} onChange={(e) => setTop("sectionTitle", e.target.value)} />
            </div>
          </div>
          <div>
            <label className={label}>강사 과목 탭 (쉼표로 구분)</label>
            <input
              className={input}
              value={data.subjects.join(", ")}
              onChange={(e) =>
                setData({ ...data!, subjects: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
              }
            />
          </div>
        </section>

        <section className={`${card} space-y-4`}>
          <h2 className="text-base font-bold text-ink">푸터 정보</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="회사명" value={data.footer.company} onChange={(v) => setFooter("company", v)} />
            <Field label="푸터 로고 텍스트" value={data.footer.brand} onChange={(v) => setFooter("brand", v)} />
            <Field label="주소" value={data.footer.address} onChange={(v) => setFooter("address", v)} />
            <Field label="사업자등록번호" value={data.footer.bizNo} onChange={(v) => setFooter("bizNo", v)} />
            <Field label="전화(TEL)" value={data.footer.tel} onChange={(v) => setFooter("tel", v)} />
            <Field label="팩스(FAX)" value={data.footer.fax} onChange={(v) => setFooter("fax", v)} />
            <Field label="학원등록번호" value={data.footer.regNo} onChange={(v) => setFooter("regNo", v)} />
            <Field label="카피라이트" value={data.footer.copyright} onChange={(v) => setFooter("copyright", v)} />
          </div>
        </section>

        <section className={`${card} space-y-4`}>
          <h2 className="text-base font-bold text-ink">소셜 · 상담</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="네이버 블로그" value={data.social.naver} onChange={(v) => setSocial("naver", v)} />
            <Field label="인스타그램" value={data.social.instagram} onChange={(v) => setSocial("instagram", v)} />
            <Field label="페이스북" value={data.social.facebook} onChange={(v) => setSocial("facebook", v)} />
            <Field label="유튜브" value={data.social.youtube} onChange={(v) => setSocial("youtube", v)} />
            <Field label="카카오 상담 링크" value={data.social.kakao} onChange={(v) => setSocial("kakao", v)} />
            <Field label="전화번호" value={data.social.phone} onChange={(v) => setSocial("phone", v)} />
          </div>
        </section>

        <div className="flex items-center gap-3">
          <button className={btn} onClick={save}>저장</button>
          {saved && <span className="text-sm text-green-600">저장되었습니다 ✓</span>}
        </div>
      </div>
    </div>
  );
}

function Field({ label: lbl, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className={label}>{lbl}</label>
      <input className={input} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
