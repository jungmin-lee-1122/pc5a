import Link from "next/link";
import type { SiteSettings } from "@/lib/types";

export default function Footer({ site }: { site: SiteSettings }) {
  const { footer, social } = site;
  const info = [
    `주소 : ${footer.address}`,
    `사업자등록번호 : ${footer.bizNo}`,
    `TEL : ${footer.tel}`,
    `FAX : ${footer.fax}`,
    `학원등록번호 : ${footer.regNo}`,
  ];

  return (
    <footer className="mt-20 border-t border-line">
      {/* 상단: 정책 링크 + 소셜 */}
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-5 text-[13px] text-gray-400 sm:flex-row sm:justify-between lg:px-8">
        <nav className="flex items-center gap-3">
          <Link href="/policy/terms" className="hover:text-ink">이용약관</Link>
          <span className="text-line">|</span>
          <Link href="/policy/privacy" className="font-medium text-gray-500 hover:text-ink">
            개인정보 취급(처리)방침
          </Link>
          <span className="text-line">|</span>
          <Link href="/about/location" className="hover:text-ink">찾아오시는 길</Link>
        </nav>
        <div className="flex items-center gap-2.5">
          <Social href={social.naver} label="네이버 블로그"><NaverBlogIcon /></Social>
          <Social href={social.instagram} label="인스타그램"><InstagramIcon /></Social>
        </div>
      </div>

      {/* 하단: 로고 + 학원 정보 */}
      <div className="border-t border-line bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center lg:px-8">
          <div className="flex shrink-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt={footer.brand} className="h-9 w-auto" />
          </div>
          <div className="text-[13px] leading-6 text-gray-500">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {info.map((line, i) => (
                <span key={i} className="flex items-center gap-x-3">
                  {i > 0 && <span className="text-line">|</span>}
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-1 text-gray-400">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href || "#"}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex transition-opacity hover:opacity-80"
    >
      {children}
    </a>
  );
}

/** 네이버 블로그 — 그린 배지 + 흰 blog 워드마크 */
function NaverBlogIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
      <rect width="30" height="30" rx="8" fill="#03C75A" />
      <text
        x="15"
        y="19.5"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="9.5"
        fontWeight="800"
        fill="#ffffff"
      >
        blog
      </text>
    </svg>
  );
}

/** 인스타그램 — 정품 그라데이션 배지 */
function InstagramIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
      <defs>
        <linearGradient id="igGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset="0.35" stopColor="#FA7E1E" />
          <stop offset="0.6" stopColor="#D62976" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="30" height="30" rx="8" fill="url(#igGrad)" />
      <g fill="none" stroke="#ffffff" strokeWidth="2">
        <rect x="8" y="8" width="14" height="14" rx="4.5" />
        <circle cx="15" cy="15" r="3.6" />
      </g>
      <circle cx="21.3" cy="8.7" r="1.2" fill="#ffffff" />
    </svg>
  );
}
