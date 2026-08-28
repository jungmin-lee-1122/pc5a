"use client";

import { useState } from "react";
import { input, btnSecondary } from "./ui";

export default function ImageInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function upload(file: File) {
    setBusy(true);
    setErr("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error || `업로드 실패 (${res.status})`);
      }
      onChange(data.url);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "업로드에 실패했습니다.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/uploads/... 또는 이미지 URL"
          className={input}
        />
        <label className={`${btnSecondary} shrink-0 cursor-pointer`}>
          {busy ? "업로드중…" : "파일 선택"}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) upload(f);
            }}
          />
        </label>
      </div>
      {err && <p className="text-xs text-red-500">{err}</p>}
      {value && (
        <img
          src={value}
          alt="미리보기"
          className="h-24 rounded-lg border border-line bg-gray-50 object-contain p-1"
        />
      )}
    </div>
  );
}
