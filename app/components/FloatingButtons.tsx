"use client";

import { useEffect, useState } from "react";

export default function FloatingButtons({ phone, kakao }: { phone: string; kakao: string }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-center gap-2.5 sm:right-6">
      <a
        href={kakao || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white shadow-lg transition hover:brightness-110"
      >
        <ChatIcon />
        상담
      </a>
      <a
        href={`tel:${phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-gray-600 shadow-lg transition hover:text-brand"
        aria-label="전화 상담"
      >
        <PhoneIcon />
      </a>
      <a
        href={kakao || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEE500] text-[#3c1e1e] shadow-lg transition hover:brightness-95"
        aria-label="카카오톡 상담"
      >
        <KakaoIcon />
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="맨 위로"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-gray-500 shadow-lg transition hover:text-brand"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
        </button>
      )}
    </div>
  );
}

function ChatIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function KakaoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.7 6.7-.2.7-.7 2.6-.8 3-.1.5.2.5.4.4.2-.1 2.6-1.8 3.7-2.5.7.1 1.4.2 2 .2 5.5 0 10-3.6 10-8S17.5 3 12 3z" />
    </svg>
  );
}
