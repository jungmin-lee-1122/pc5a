"use client";

import { useState } from "react";
import { input, btnSecondary } from "./ui";

// Vercel 서버 함수 업로드 본문 제한(4.5MB)에 걸리지 않도록,
// 업로드 전에 브라우저에서 이미지를 적당한 크기로 줄입니다.
const MAX_SIDE = 1400; // 가장 긴 변 최대 픽셀
const SIZE_LIMIT = 4_000_000; // 약 4MB (여유 두고 4.5MB 미만)

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("이미지를 읽을 수 없습니다."));
    };
    img.src = url;
  });
}

function toBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), type, quality));
}

/** 이미지를 리사이즈해 4MB 미만 파일로 변환 (필요할 때만). */
async function shrink(file: File): Promise<File> {
  // 이미 충분히 작으면 그대로 사용
  if (file.size < SIZE_LIMIT) return file;

  const img = await loadImage(file);
  const scale = Math.min(1, MAX_SIDE / Math.max(img.width, img.height));
  const w = Math.max(1, Math.round(img.width * scale));
  const h = Math.max(1, Math.round(img.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(img, 0, 0, w, h);

  // 우선 PNG(투명 유지) 시도
  let blob = await toBlob(canvas, "image/png");
  // 그래도 크면 흰 배경 위 JPEG 로 압축
  if (!blob || blob.size > SIZE_LIMIT) {
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    blob = await toBlob(canvas, "image/jpeg", 0.85);
  }
  if (!blob) return file;

  const ext = blob.type === "image/jpeg" ? ".jpg" : ".png";
  const base = file.name.replace(/\.[^.]+$/, "") || "image";
  return new File([blob], `${base}${ext}`, { type: blob.type });
}

export default function ImageInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function upload(original: File) {
    setBusy(true);
    setErr("");
    try {
      const file = await shrink(original);
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
