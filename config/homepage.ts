// ============================================================================
//  홈페이지 코드 설정 — 관리자 페이지가 아니라 "여기서 직접" 수정하는 항목들
//
//  · 롤링 슬라이드(SLIDES)   · 포스터(POSTER)   · 배너 박스(BANNER)
//  · 홍보 배너(PROMO)        · 사이트 정보(SITE, 헤더/푸터/과목탭/소셜)
//
//  이미지는 public/ 폴더에 넣고 "/파일명" 경로로 적으면 됩니다.
//  (예: public/slide-a.jpg  ->  image: "/slide-a.jpg")
//
//  ※ 선생님 · 공지사항 · 입시설명회 · 영상은 관리자 페이지(/admin)에서 관리합니다.
// ============================================================================

import type { Slide, Poster, Promo, SiteSettings } from "@/lib/types";

/* ── 히어로 왼쪽: 롤링 슬라이드 (위에서부터 순서대로 재생) ────────────────── */
export const SLIDES: Slide[] = [
  { id: "s1", image: "/placeholders/slide-1.svg", href: "#", alt: "2027 윈터스쿨", order: 1, active: true },
  { id: "s2", image: "/placeholders/slide-2.svg", href: "#", alt: "9월 정규 단과 모집", order: 2, active: true },
  { id: "s3", image: "/placeholders/slide-3.svg", href: "#", alt: "대학별 논술 파이널 특강", order: 3, active: true },
];

/* ── 히어로 오른쪽: 포스터 (하나) ─────────────────────────────────────────── */
export const POSTER: Poster = {
  id: "p1",
  image: "/placeholders/poster.svg",
  href: "#",
  alt: "2027 윈터스쿨 포스터",
  order: 1,
  active: true,
};

/* ── 롤링창·포스터 바로 밑: 배너 박스 (이미지 하나로 교체) ─────────────────── */
export const BANNER: Promo = {
  image: "/placeholders/banner.svg",
  href: "#",
  alt: "러셀 평촌 대입 합격 결과",
};

/* ── 영상 섹션 우측 하단: 홍보 사각배너 ───────────────────────────────────── */
export const PROMO: Promo = {
  image: "/placeholders/promo.svg",
  href: "#",
  alt: "2024 연간 학습 프로그램",
};

/* ── 사이트 전역 정보: 헤더 브랜드 / 강사 과목 탭 / 푸터 / 소셜 ──────────────── */
export const SITE: SiteSettings = {
  brandName: "아카데미",
  sectionTitle: "영상으로 만나는 평촌청솔학원",
  subjects: ["국어", "수학", "영어", "한국사", "사회탐구", "과학탐구", "논술"],
  footer: {
    company: "(주)종로학원평촌아카데미",
    address: "경기도 안양시 평촌대로 112",
    bizNo: "297-88-02478",
    tel: "031-386-1881",
    fax: "031-386-1886",
    regNo: "제2014-096호",
    copyright: "Copyright ⓒ 종로학원 평촌 All Right Reserved.",
    brand: "평촌종로학원",
  },
  social: { naver: "#", instagram: "#", facebook: "#", youtube: "#", kakao: "#", phone: "031-386-1881" },
};
