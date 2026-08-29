import type { CSSProperties } from "react";

/** 구글 지도 임베드 (API 키 불필요). address 위치를 지도에 표시합니다. */
export default function LocationMap({
  name,
  address,
  lat,
  lng,
  className = "",
}: {
  name: string;
  address: string;
  lat?: number;
  lng?: number;
  className?: string;
}) {
  const query = address || (lat != null && lng != null ? `${lat},${lng}` : name);
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&hl=ko&output=embed`;
  const style: CSSProperties = { border: 0 };
  return (
    <iframe
      title={`${name} 지도`}
      src={src}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      style={style}
      className={`h-[320px] w-full sm:h-[420px] ${className}`}
    />
  );
}
