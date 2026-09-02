"use client";

import { useState } from "react";
import type { EventItem } from "@/lib/types";
import { targetLabel } from "@/lib/types";

const GRADE_MID = ["중1", "중2", "중3"];
const GRADE_HIGH = ["고1", "고2", "고3", "재수/N수"];
const GRADE = [...GRADE_MID, ...GRADE_HIGH];
const COMPANIONS = ["1명", "2명", "3명", "4명"];
const SOURCE = ["지인 추천", "학원 안내 문자", "인터넷 검색", "SNS", "현수막/전단", "기타"];
const PHONE = "031-347-5151";

// 라벨 + 필수 표시
function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-sm font-semibold text-ink">
      {children}
      {required && <span className="ml-1 text-xs font-bold text-red-500">필수</span>}
    </label>
  );
}

const fieldCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-brand";

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
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
      <option value="">선택해 주세요</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

// 학년 선택 (체크/라디오 형식) — 우리 디자인 유지
function GradeSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const Item = ({ o }: { o: string }) => {
    const active = value === o;
    return (
      <label className="flex cursor-pointer select-none items-center gap-1.5">
        <input
          type="radio"
          name="grade"
          value={o}
          checked={active}
          onChange={() => onChange(o)}
          className="h-4 w-4 shrink-0 accent-[var(--color-brand)]"
        />
        <span className={`whitespace-nowrap text-[13px] ${active ? "font-semibold text-brand" : "text-gray-600"}`}>{o}</span>
      </label>
    );
  };
  return (
    <div className="rounded-xl border border-line bg-gray-50 p-4">
      <div className="grid grid-cols-3 gap-x-1.5 gap-y-3.5 sm:grid-cols-4">
        {GRADE_MID.map((o) => (
          <Item key={o} o={o} />
        ))}
        <span className="hidden sm:block" />
        {GRADE_HIGH.map((o) => (
          <Item key={o} o={o} />
        ))}
      </div>
    </div>
  );
}

function formatPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length < 4) return d;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
}

export default function EventForm({ event }: { event: EventItem }) {
  const closed = event.status === "마감";

  const [f, setF] = useState({
    type: "학부모",
    name: "",
    phone: "",
    studentPhone: "",
    school: "",
    grade: "",
    companions: "",
    source: "",
  });
  const [agreeRequired, setAgreeRequired] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof f, v: string) => setF((s) => ({ ...s, [k]: v }));
  // [DB제공 동의] 이벤트에서는 동반인·유입경로 필드를 숨김
  const isDbConsent = /DB\s*제공/.test(event.title ?? "");
  const allAgreed = agreeRequired && agreeMarketing;
  function toggleAll() {
    const next = !allAgreed;
    setAgreeRequired(next);
    setAgreeMarketing(next);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!f.name.trim()) return setError("학생 이름을 입력해 주세요.");
    if (f.phone.replace(/\D/g, "").length < 10) return setError("학부모 연락처를 정확히 입력해 주세요.");
    if (f.studentPhone && f.studentPhone.replace(/\D/g, "").length < 10) return setError("학생 연락처를 정확히 입력해 주세요.");
    if (!f.school.trim()) return setError("학교명을 입력해 주세요.");
    if (!f.grade) return setError("학년을 선택해 주세요.");
    if (!isDbConsent && !f.companions) return setError("동반인을 선택해 주세요.");
    if (!isDbConsent && !f.source) return setError("유입경로를 선택해 주세요.");
    if (!agreeRequired) return setError("개인정보 수집 및 이용에 동의해 주세요.");

    setSubmitting(true);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: event.id,
          eventTitle: event.title,
          eventDate: event.eventDate || event.date,
          ...f,
          marketing: agreeMarketing ? "동의" : "미동의",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setDone(true);
    } catch {
      setError("예약 접수 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요.");
    } finally {
      setSubmitting(false);
    }
  }

  // 완료 화면
  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-extrabold text-ink">
          {isDbConsent ? "제출이 완료되었습니다" : "예약이 접수되었습니다"}
        </h3>
        <p className="mt-2 text-sm text-muted">
          {isDbConsent
            ? "제공해 주신 연락처로 모집 및 설명회 안내를 드리겠습니다."
            : "등록하신 연락처로 설명회 안내를 보내드립니다."}
          <br />
          문의: {PHONE}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        isDbConsent ? "border-brand/30 bg-brand-light shadow-sm shadow-brand/5" : "border-line bg-white"
      }`}
    >
      {/* 폼 헤더 */}
      <div className={`border-b px-6 py-5 ${isDbConsent ? "border-brand/20 bg-brand/10" : "border-line bg-brand-light/40"}`}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-extrabold text-ink">{isDbConsent ? "정보 제공 동의서" : "예약 신청서"}</h3>
          {!isDbConsent && (
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
                closed ? "bg-gray-100 text-gray-400" : "bg-brand text-white"
              }`}
            >
              {closed ? "접수마감" : "선착순"}
            </span>
          )}
        </div>
        <p className="mt-3 text-[15px] font-bold text-ink">{event.title}</p>
        <dl className="mt-2 space-y-1 text-[13px] text-gray-500">
          {(event.eventDate || event.date) && (
            <div className="flex gap-2">
              <dt className="w-10 shrink-0 text-gray-400">일시</dt>
              <dd>{event.eventDate || event.date}</dd>
            </div>
          )}
          {targetLabel(event.targets) && (
            <div className="flex gap-2">
              <dt className="w-10 shrink-0 text-gray-400">대상</dt>
              <dd>{targetLabel(event.targets)}</dd>
            </div>
          )}
          {event.location && (
            <div className="flex gap-2">
              <dt className="w-10 shrink-0 text-gray-400">장소</dt>
              <dd>{event.location}</dd>
            </div>
          )}
        </dl>
      </div>

      {closed ? (
        <div className="px-6 py-12 text-center">
          <p className="text-sm text-muted">이 설명회는 접수가 마감되었습니다.</p>
          <a href={`tel:${PHONE}`} className="mt-4 inline-block text-sm font-bold text-brand hover:underline">
            문의: {PHONE}
          </a>
        </div>
      ) : (
        <form onSubmit={submit} className="px-6 py-5">
          {/* 안내 문구 */}
          <ul className="mb-5 space-y-1 text-[12px] leading-relaxed text-gray-400">
            {isDbConsent ? (
              <>
                <li>· 제공해 주신 연락처는 모집 및 설명회 안내 목적으로만 사용됩니다.</li>
                <li>· 등록하신 연락처로 안내 문자를 보내드리니 정확하게 입력해 주세요.</li>
                <li>· 문의는 대표번호({PHONE})로 연락해 주세요.</li>
              </>
            ) : (
              <>
                <li>· 예약은 선착순으로 진행되며, 예약 상황에 따라 조기 마감될 수 있습니다.</li>
                <li>· 등록하신 연락처로 설명회 안내 문자를 보내드리니 정확하게 입력해 주세요.</li>
                <li>· 예약 취소·변경은 대표번호({PHONE})로 연락해 주세요.</li>
              </>
            )}
          </ul>

          {/* 예약자 구분 */}
          <div className="mb-4">
            <Label required>예약자 구분</Label>
            <div className="grid grid-cols-2 gap-2">
              {["학부모", "학생"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => set("type", t)}
                  className={`rounded-xl border py-3 text-sm font-semibold transition-colors ${
                    f.type === t
                      ? "border-brand bg-brand-light/60 text-brand"
                      : "border-line bg-white text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

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
            <Label required>학부모 연락처</Label>
            <input
              value={f.phone}
              onChange={(e) => set("phone", formatPhone(e.target.value))}
              inputMode="numeric"
              placeholder="010-0000-0000"
              className={fieldCls}
            />
          </div>

          <div className="mb-4">
            <Label>학생 연락처</Label>
            <input
              value={f.studentPhone}
              onChange={(e) => set("studentPhone", formatPhone(e.target.value))}
              inputMode="numeric"
              placeholder="010-0000-0000 (선택)"
              className={fieldCls}
            />
          </div>

          <div className="mb-4">
            <Label required>학교명</Label>
            <input
              value={f.school}
              onChange={(e) => set("school", e.target.value)}
              placeholder="예) 평촌고등학교"
              className={fieldCls}
            />
          </div>

          <div className="mb-4">
            <Label required>학년</Label>
            <GradeSelect value={f.grade} onChange={(v) => set("grade", v)} />
            <p className="mt-2 text-xs text-gray-400">{"* 예시) 현재 예비 고3의 경우 '고2' 체크"}</p>
          </div>

          {!isDbConsent && (
            <>
              <div className="mb-4">
                <Label required>동반인</Label>
                <Select value={f.companions} onChange={(v) => set("companions", v)} options={COMPANIONS} />
                <p className="mt-1 text-xs text-muted">본인을 포함한 인원으로 좌석을 배정합니다.</p>
              </div>

              <div className="mb-5">
                <Label required>유입경로</Label>
                <Select value={f.source} onChange={(v) => set("source", v)} options={SOURCE} />
              </div>
            </>
          )}

          {/* 개인정보 동의 */}
          <div className="mb-5 rounded-xl border border-line p-4">
            <p className="mb-2 text-sm font-bold text-ink">개인정보 수집 및 이용 동의</p>
            <label className="flex items-center gap-2 border-b border-line pb-2.5 text-sm text-ink">
              <input type="checkbox" checked={allAgreed} onChange={toggleAll} className="h-4 w-4 accent-[var(--color-brand)]" />
              전체 동의
            </label>
            <label className="mt-2.5 flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" checked={agreeRequired} onChange={(e) => setAgreeRequired(e.target.checked)} className="h-4 w-4 accent-[var(--color-brand)]" />
              <span><span className="font-bold text-red-500">(필수)</span> 개인정보 수집 및 이용 동의</span>
            </label>
            <label className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" checked={agreeMarketing} onChange={(e) => setAgreeMarketing(e.target.checked)} className="h-4 w-4 accent-[var(--color-brand)]" />
              (선택) 마케팅·광고 활용 동의
            </label>
          </div>

          {error && <p className="mb-3 text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-brand py-4 text-[15px] font-bold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
          >
            {submitting ? "접수 중…" : "예약하기"}
          </button>
        </form>
      )}
    </div>
  );
}
