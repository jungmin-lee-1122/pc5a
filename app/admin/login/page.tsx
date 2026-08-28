"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { input, btn } from "@/app/components/admin/ui";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (!res.ok) {
      setError("비밀번호가 올바르지 않습니다.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl border border-line bg-white p-8">
        <h1 className="text-xl font-extrabold text-ink">5A 관리자 로그인</h1>
        <p className="mt-1 text-sm text-muted">관리자 비밀번호를 입력하세요.</p>
        <div className="mt-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            autoFocus
            className={input}
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        <button type="submit" disabled={busy} className={`${btn} mt-5 w-full justify-center`}>
          {busy ? "확인 중…" : "로그인"}
        </button>
        <p className="mt-4 text-center text-xs text-muted">
          기본 비밀번호: admin1234 &nbsp;(ADMIN_PASSWORD 환경변수로 변경)
        </p>
      </form>
    </div>
  );
}
