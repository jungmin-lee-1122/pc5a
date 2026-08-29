"use client";

import { useState } from "react";

const GRADE = ["중3", "고1", "고2", "고3", "N수", "기타"];
const FIELD = ["윈터스쿨", "고등종합(올케어)", "국어단과", "수학단과", "영어단과", "탐구[고3만 해당]"];
const PHONE = "031-347-5151";

const fieldCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-brand";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-sm font-semibold text-ink">
      {children}
      {required && <span className="ml-1 text-xs font-bold text-red-500">필수</span>}
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder = "선택해 주세요",
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${fieldCls} ${value ? "" : "text-gray-400"} appearance-none bg-[right_1rem_center] bg-no-repeat pr-10`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='4 6 8 10 12 6'/%3E%3C/svg%3E\")",
      }}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function formatPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length < 4) return d;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
}

export default function ConsultForm() {
  const [f, setF] = useState({ name: "", phone: "", gender: "", school: "", grade: "", field: "", message: "" });
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof f, v: string) => setF((s) => ({ ...s, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!f.name.trim()) return setError("학생 이름을 입력해 주세요.");
    if (f.phone.replace(/\D/g, "").length < 10) return setError("연락처를 정확히 입력해 주세요.");
    if (!agree) return setError("개인정보 수집 및 이용에 동의해 주세요.");

    setSubmitting(true);
    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      if (!res.ok) throw new Error("fail");
      setDone(true);
    } catch {
      setError("접수 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-extrabold text-ink">상담 신청이 접수되었습니다</h3>
        <p className="mt-2 text-sm text-muted">
          등록하신 연락처로 순차적으로 연락드리겠습니다.
          <br />
          문의: {PHONE}
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <div className="border-b border-line bg-brand-light/40 px-6 py-5">
        <h3 className="text-base font-extrabold text-ink">상담 신청서</h3>
        <p className="mt-1 text-[13px] text-muted">아래 정보를 남겨주시면 순차적으로 연락을 드리겠습니다.</p>
      </div>

      <form onSubmit={submit} className="px-6 py-5">
        <div className="mb-4">
          <Label required>학생이름</Label>
          <input
            value={f.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="학생 이름을 입력해 주세요"
            className={fieldCls}
          />
        </div>

        <div className="mb-4">
          <Label required>연락처</Label>
          <input
            value={f.phone}
            onChange={(e) => set("phone", formatPhone(e.target.value))}
            inputMode="numeric"
            placeholder="010-0000-0000"
            className={fieldCls}
          />
        </div>

        <div className="mb-4">
          <Label>성별</Label>
          <div className="grid grid-cols-2 gap-2">
            {["남", "여"].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => set("gender", g)}
                className={`rounded-xl border py-3 text-sm font-semibold transition-colors ${
                  f.gender === g
                    ? "border-brand bg-brand-light/60 text-brand"
                    : "border-line bg-white text-gray-500 hover:border-gray-300"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <Label>학교명</Label>
          <input
            value={f.school}
            onChange={(e) => set("school", e.target.value)}
            placeholder="예) 평촌고등학교"
            className={fieldCls}
          />
        </div>

        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Label>학년</Label>
            <Select value={f.grade} onChange={(v) => set("grade", v)} options={GRADE} />
          </div>
          <div>
            <Label>상담 분야</Label>
            <Select value={f.field} onChange={(v) => set("field", v)} options={FIELD} />
          </div>
        </div>

        <div className="mb-5">
          <Label>상담 내용</Label>
          <textarea
            value={f.message}
            onChange={(e) => set("message", e.target.value)}
            rows={4}
            placeholder="궁금하신 점이나 상담받고 싶은 내용을 자유롭게 남겨주세요. (선택)"
            className={fieldCls}
          />
        </div>

        <label className="mb-5 flex items-start gap-2 rounded-xl border border-line p-4 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[var(--color-brand)]"
          />
          <span>
            <span className="font-bold text-red-500">(필수)</span> 개인정보 수집 및 이용 동의 — 상담 접수·연락 목적으로 이름·연락처를 수집하며, 상담 완료 후 파기합니다.
          </span>
        </label>

        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-brand py-4 text-[15px] font-bold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
        >
          {submitting ? "접수 중…" : "상담 신청하기"}
        </button>
      </form>
    </div>
  );
}
