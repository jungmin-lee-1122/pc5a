import Link from "next/link";
import type { SiteSettings } from "@/lib/types";

export default function Footer({ site }: { site: SiteSettings }) {
  const { footer, social } = site;
  const info = [
    footer.company,
    `주소 : ${footer.address}`,
    `사업자등록번호 : ${footer.bizNo}`,
    `TEL : ${footer.tel}`,
    `FAX : ${footer.fax}`,
    `학원등록번호 : ${footer.regNo}`,
  ];

  return (
    <footer className="mt-20 border-t border-line">
      {/* 상단: 정책 링크 + 소셜 */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-5 text-[13px] text-gray-400 sm:flex-row sm:justify-between lg:px-8">
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
          <Social href={social.naver} label="네이버 블로그">N</Social>
          <Social href={social.instagram} label="인스타그램"><InstagramIcon /></Social>
          <Social href={social.facebook} label="페이스북"><FacebookIcon /></Social>
        </div>
      </div>

      {/* 하단: 학원 정보 */}
      <div className="border-t border-line bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center lg:px-8">
          <div className="flex shrink-0 items-center gap-3">
            <Seal />
            <span className="text-lg font-extrabold tracking-tight text-gray-600">{footer.brand}</span>
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
      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-brand-light hover:text-brand"
    >
      {children}
    </a>
  );
}

function Seal() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
      <circle cx="23" cy="23" r="21" stroke="#9ca3af" strokeWidth="1.5" />
      <circle cx="23" cy="23" r="16" stroke="#9ca3af" strokeWidth="1" />
      <text x="23" y="20" textAnchor="middle" fontSize="7" fontWeight="700" fill="#6b7280" fontFamily="Arial">JONGRO</text>
      <text x="23" y="30" textAnchor="middle" fontSize="7" fontWeight="700" fill="#6b7280" fontFamily="Arial">ACADEMY</text>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}
