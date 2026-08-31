"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// 강의계획서 등 이미지를 눌러 전체화면에서 확대/축소(핀치·드래그·더블탭·휠·버튼)
export default function ZoomableImage({
  src,
  alt,
  label = "강의계획서",
}: {
  src: string;
  alt: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative mx-auto block w-full max-w-2xl cursor-zoom-in overflow-hidden rounded-2xl border border-line"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full" />
        <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white transition group-hover:bg-brand">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
          </svg>
          확대
        </span>
      </button>
      {open && <Lightbox src={src} alt={alt} label={label} onClose={() => setOpen(false)} />}
    </>
  );
}

function Lightbox({
  src,
  alt,
  label,
  onClose,
}: {
  src: string;
  alt: string;
  label: string;
  onClose: () => void;
}) {
  const areaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const st = useRef({
    scale: 1, tx: 0, ty: 0,
    mode: "" as "" | "pan" | "pinch",
    dist: 0, sc: 1, lx: 0, ly: 0, lastTap: 0,
  });
  const [pct, setPct] = useState(100);
  const MIN = 1, MAX = 6;
  const clamp = (v: number) => Math.min(MAX, Math.max(MIN, v));

  const apply = useCallback(() => {
    const s = st.current;
    if (s.scale <= 1) { s.tx = 0; s.ty = 0; }
    if (imgRef.current) imgRef.current.style.transform = `translate(${s.tx}px, ${s.ty}px) scale(${s.scale})`;
    setPct(Math.round(s.scale * 100));
  }, []);

  const zoomTo = useCallback((v: number) => { st.current.scale = clamp(v); apply(); }, [apply]);
  const reset = useCallback(() => { st.current.scale = 1; st.current.tx = 0; st.current.ty = 0; apply(); }, [apply]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);

    const el = areaRef.current;
    const move = (e: TouchEvent) => {
      const s = st.current;
      if (s.mode === "pinch" && e.touches.length === 2) {
        e.preventDefault();
        const d = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY,
        );
        s.scale = clamp(s.sc * (d / s.dist));
        apply();
      } else if (s.mode === "pan" && e.touches.length === 1 && s.scale > 1) {
        e.preventDefault();
        const t = e.touches[0];
        s.tx += t.clientX - s.lx;
        s.ty += t.clientY - s.ly;
        s.lx = t.clientX; s.ly = t.clientY;
        apply();
      }
    };
    const wheel = (e: WheelEvent) => {
      e.preventDefault();
      st.current.scale = clamp(st.current.scale - e.deltaY * 0.0016 * st.current.scale);
      apply();
    };
    el?.addEventListener("touchmove", move, { passive: false });
    el?.addEventListener("wheel", wheel, { passive: false });
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      el?.removeEventListener("touchmove", move);
      el?.removeEventListener("wheel", wheel);
    };
  }, [apply, onClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    const s = st.current;
    if (e.touches.length === 2) {
      s.mode = "pinch";
      s.dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
      s.sc = s.scale;
    } else if (e.touches.length === 1) {
      s.mode = "pan";
      s.lx = e.touches[0].clientX;
      s.ly = e.touches[0].clientY;
      const now = Date.now();
      if (now - s.lastTap < 300) { zoomTo(s.scale > 1 ? 1 : 2.5); s.lastTap = 0; }
      else s.lastTap = now;
    }
  };
  const onTouchEnd = (e: React.TouchEvent) => { if (e.touches.length === 0) st.current.mode = ""; };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-sm font-semibold text-white/80">{label}</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div
        ref={areaRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative flex flex-1 select-none items-center justify-center overflow-hidden px-2"
        style={{ touchAction: "none" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          draggable={false}
          className="max-h-full max-w-full origin-center will-change-transform"
          style={{ transform: "translate(0px, 0px) scale(1)" }}
        />
      </div>

      <div className="flex items-center justify-center gap-2 px-4 py-3">
        <button type="button" onClick={() => zoomTo(st.current.scale - 0.5)} aria-label="축소" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition hover:bg-white/20">−</button>
        <button type="button" onClick={reset} className="min-w-[64px] rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20">{pct}%</button>
        <button type="button" onClick={() => zoomTo(st.current.scale + 0.5)} aria-label="확대" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition hover:bg-white/20">+</button>
      </div>
      <p className="pb-4 text-center text-xs text-white/50">두 손가락으로 확대 · 드래그로 이동 · 더블탭 확대</p>
    </div>
  );
}
