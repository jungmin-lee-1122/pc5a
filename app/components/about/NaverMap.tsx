"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    naver?: any;
  }
}

export default function NaverMap({
  clientId,
  lat,
  lng,
  name,
  address,
  mapQuery,
  className = "",
}: {
  clientId: string;
  lat: number;
  lng: number;
  name: string;
  address: string;
  mapQuery: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const naverUrl = `https://map.naver.com/p/search/${encodeURIComponent(mapQuery)}`;

  useEffect(() => {
    if (!clientId) return;
    let cancelled = false;

    function init() {
      if (cancelled || !window.naver?.maps || !ref.current) return;
      const loc = new window.naver.maps.LatLng(lat, lng);
      const map = new window.naver.maps.Map(ref.current, { center: loc, zoom: 16 });
      new window.naver.maps.Marker({ position: loc, map });
    }

    if (window.naver?.maps) {
      init();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>("script[data-naver-map]");
    if (existing) {
      existing.addEventListener("load", init);
      return () => {
        cancelled = true;
        existing.removeEventListener("load", init);
      };
    }

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
    script.async = true;
    script.dataset.naverMap = "1";
    script.onload = init;
    script.onerror = () => !cancelled && setFailed(true);
    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [clientId, lat, lng]);

  // 지도 표시 (Client ID 있음)
  if (clientId && !failed) {
    return <div ref={ref} className={`h-[320px] w-full sm:h-[420px] ${className}`} />;
  }

  // 폴백 안내 카드 (Client ID 없음/로드 실패)
  return (
    <div className={`flex h-[320px] w-full flex-col items-center justify-center bg-brand-light/40 px-6 text-center sm:h-[420px] ${className}`}>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand shadow-sm">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </span>
      <p className="mt-4 text-base font-extrabold text-ink">{name}</p>
      <p className="mt-1 text-sm text-muted">{address}</p>
      <a
        href={naverUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#03C75A] px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-95"
      >
        네이버 지도에서 보기
      </a>
    </div>
  );
}
