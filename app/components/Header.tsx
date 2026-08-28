"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Dday from "./Dday";
import { NAV_MENUS, type NavMenu } from "@/lib/nav";

export default function Header({ brand, phone }: { brand: string; phone: string }) {
  // 호버 중인 상위 메뉴 인덱스 (단일 드롭다운)
  const [hovered, setHovered] = useState<number | null>(null);
  // 전체 메가메뉴 열림 여부 (햄버거 클릭)
  const [megaOpen, setMegaOpen] = useState(false);

  // 메가메뉴 열렸을 때 ESC 로 닫기 + 바디 스크롤 잠금
  useEffect(() => {
    if (!megaOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [megaOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        {/* 로고 + 수능 D-day */}
        <div className="flex items-center gap-3" onMouseEnter={() => setHovered(null)}>
          <Link href="/" className="flex items-center text-ink">
            <Logo brand={brand} />
          </Link>
          <Dday />
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav
          className="relative hidden items-center gap-8 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV_MENUS.map((menu, i) => (
            <div key={menu.label} className="relative" onMouseEnter={() => setHovered(i)}>
              <Link
                href={menu.href}
                className={`inline-block py-7 text-[15px] font-semibold transition-colors ${
                  hovered === i ? "text-brand" : "text-ink hover:text-brand"
                }`}
              >
                {menu.label}
              </Link>

              {/* 단일 드롭다운 — 해당 메뉴에 마우스를 올렸을 때만 그 메뉴의 리스트가 열림 */}
              {hovered === i && <SingleDropdown menu={menu} onNavigate={() => setHovered(null)} />}
            </div>
          ))}

          {/* 전체 카테고리 버튼 (햄버거) */}
          <button
            type="button"
            aria-label="전체 카테고리 열기"
            aria-expanded={megaOpen}
            onClick={() => setMegaOpen((v) => !v)}
            onMouseEnter={() => setHovered(null)}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-brand-light hover:text-brand"
          >
            <HamburgerIcon open={megaOpen} />
          </button>
        </nav>

        {/* 모바일: 전체 카테고리 버튼만 노출 */}
        <button
          type="button"
          aria-label="전체 카테고리 열기"
          onClick={() => setMegaOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
        >
          <HamburgerIcon open={megaOpen} />
        </button>
      </div>

      {/* 데스크톱: 전체 메가메뉴 / 모바일: 아코디언 메뉴 */}
      {megaOpen && (
        <>
          <div className="hidden lg:block">
            <MegaMenu onClose={() => setMegaOpen(false)} />
          </div>
          <MobileMenu phone={phone} onClose={() => setMegaOpen(false)} />
        </>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* 단일 드롭다운                                                        */
/* ------------------------------------------------------------------ */
function SingleDropdown({ menu, onNavigate }: { menu: NavMenu; onNavigate: () => void }) {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-1">
      <div className="w-60 overflow-hidden border border-line bg-white shadow-xl shadow-black/5">
        <div className="h-1.5 w-full bg-brand-dark" />
        <ul className="py-2">
          {menu.groups.map((group, gi) => (
            <li key={gi}>
              {group.heading &&
                (group.href ? (
                  <Link
                    href={group.href}
                    onClick={onNavigate}
                    className="mx-5 mb-1 mt-2.5 block border-b border-line pb-2 text-[15px] font-extrabold text-ink transition-colors hover:text-brand"
                  >
                    {group.heading}
                  </Link>
                ) : (
                  <p className="mx-5 mb-1 mt-2.5 border-b border-line pb-2 text-[15px] font-extrabold text-ink">{group.heading}</p>
                ))}
              {group.items.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  onClick={onNavigate}
                  className={`block px-5 py-2 text-[14px] transition-colors hover:bg-brand-light hover:text-brand ${
                    item.strong ? "font-bold text-brand" : "font-semibold text-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 전체 메가메뉴                                                        */
/* ------------------------------------------------------------------ */
function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <>
      {/* 바깥 클릭 시 닫힘 */}
      <div className="fixed inset-0 top-20 z-40 bg-black/20" onClick={onClose} aria-hidden="true" />
      <div className="absolute inset-x-0 top-full z-50 border-t-2 border-brand-dark bg-white shadow-xl">
        <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
            {NAV_MENUS.map((menu) => (
              <div key={menu.label}>
                <Link
                  href={menu.href}
                  onClick={onClose}
                  className="mb-3 block border-b border-line pb-3 text-[17px] font-bold text-ink transition-colors hover:text-brand"
                >
                  {menu.label}
                </Link>
                <div className="space-y-3">
                  {menu.groups.map((group, gi) => (
                    <div key={gi}>
                      {group.heading &&
                        (group.href ? (
                          <Link
                            href={group.href}
                            onClick={onClose}
                            className="mb-1.5 block border-b border-line pb-1.5 text-[15px] font-extrabold text-ink transition-colors hover:text-brand"
                          >
                            {group.heading}
                          </Link>
                        ) : (
                          <p className="mb-1.5 border-b border-line pb-1.5 text-[15px] font-extrabold text-ink">{group.heading}</p>
                        ))}
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item.href + item.label}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className={`text-[14px] transition-colors hover:text-brand ${
                                item.strong ? "font-bold text-brand" : "font-medium text-gray-700"
                              }`}
                            >
                              {group.heading ? `· ${item.label}` : item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 모바일 아코디언 메뉴                                                  */
/* ------------------------------------------------------------------ */
function MobileMenu({ phone, onClose }: { phone: string; onClose: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
      {/* 상단 바 */}
      <div className="flex h-20 shrink-0 items-center justify-between border-b-2 border-brand-dark px-5">
        <Logo brand="아카데미" />
        <div className="flex items-center gap-4">
          <a href={`tel:${phone}`} className="flex items-center gap-1.5 text-[15px] font-bold text-brand-dark">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
            </svg>
            {phone}
          </a>
          <button type="button" aria-label="메뉴 닫기" onClick={onClose} className="text-ink">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>

      {/* 아코디언 목록 */}
      <nav className="min-h-0 flex-1 overflow-y-auto pb-10">
        {NAV_MENUS.map((menu, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={menu.label} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className={`flex w-full items-center justify-between px-5 py-5 text-lg font-extrabold ${
                  isOpen ? "text-brand" : "text-ink"
                }`}
              >
                {menu.label}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-brand-dark transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {isOpen && (
                <div className="border-t border-line bg-brand-light/40 px-5 py-3">
                  {menu.groups.map((g, gi) => (
                    <div key={gi} className="py-1">
                      {g.heading &&
                        (g.href ? (
                          <Link href={g.href} onClick={onClose} className="block py-2 text-[15px] font-extrabold text-ink">
                            {g.heading}
                          </Link>
                        ) : (
                          <p className="py-2 text-[15px] font-extrabold text-ink">{g.heading}</p>
                        ))}
                      <ul>
                        {g.items.map((it) => (
                          <li key={it.href + it.label}>
                            <Link
                              href={it.href}
                              onClick={onClose}
                              className={`flex items-center gap-2 py-2.5 text-[15px] ${
                                it.strong ? "font-bold text-brand" : "font-semibold text-gray-700"
                              }`}
                            >
                              <span className="text-[9px] text-brand">●</span>
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 아이콘                                                              */
/* ------------------------------------------------------------------ */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
