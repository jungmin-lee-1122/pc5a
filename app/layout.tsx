import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5A 아카데미 | 평촌종로학원",
  description:
    "평촌 대입 전문 5A 아카데미 — 윈터스쿨, 정규 단과, 논술 특강. 최고의 강사진과 함께합니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
