// 공용 레이아웃 — 홈/설명회 등 모든 사용자 페이지에 헤더·푸터를 고정으로 넣습니다.
// (관리자 /admin 페이지는 이 그룹 밖이라 이 레이아웃의 영향을 받지 않습니다.)
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FloatingButtons from "@/app/components/FloatingButtons";
import { SITE } from "@/config/homepage";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header brand={SITE.brandName} phone={SITE.social.phone} />
      {children}
      <Footer site={SITE} />
      <FloatingButtons phone={SITE.social.phone} kakao={SITE.social.kakao} />
    </>
  );
}
