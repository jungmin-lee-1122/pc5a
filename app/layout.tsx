import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://www.pc5aacademy.com";
const SITE_NAME = "5A아카데미 평촌점";
const SITE_DESC = "대입 전문 5A 아카데미 — 윈터스쿨, 정규 단과, 논술 특강. 최고의 강사진과 함께합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESC,
  // 카카오톡·문자 등 링크 공유 미리보기 (이미지는 app/opengraph-image.png 자동 사용)
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESC,
    locale: "ko_KR",
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: SITE_DESC },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
