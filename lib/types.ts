// 도메인 타입 정의 — 홈페이지에 노출되는 모든 콘텐츠 모델입니다.

export type ID = string;

/** 히어로 왼쪽 롤링 슬라이드 (이미지 + 링크) */
export interface Slide {
  id: ID;
  image: string;
  mobileImage?: string; // 모바일 전용 이미지 (없으면 image 사용)
  href: string;
  alt: string;
  order: number;
  active: boolean;
}

/** 히어로 오른쪽 포스터 (이미지 + 링크) */
export interface Poster {
  id: ID;
  image: string;
  href: string;
  alt: string;
  order: number;
  active: boolean;
}

/** 합격실적 배너의 개별 통계 항목 */
export interface StatItem {
  id: ID;
  label: string;
  value: string;
  order: number;
}

/** 합격실적 배너 (단일 설정) */
export interface Stats {
  brand: string;      // 예: "러셀 평촌"
  title: string;      // 예: "대입 합격 결과"
  note: string;       // 예: "데이터 산출 기준"
  items: StatItem[];
}

/** 강사 카드 */
export interface Teacher {
  id: ID;
  name: string;
  subject: string;    // subjects 목록 중 하나
  tags: string[];     // 예: ["고3", "N수"]
  photo: string;
  order: number;
  active: boolean;
}

/** 공지사항 항목 */
export interface Notice {
  id: ID;
  title: string;
  date: string;       // YYYY.MM.DD
  href: string;
  badge?: string;     // 선택: 강조 뱃지 텍스트
  order: number;
}

/** 입시설명회 / 입시교실 항목 */
export interface EventItem {
  id: ID;
  title: string;
  date: string;
  href: string;
  category: string;   // "입시설명회" | "입시교실"
  order: number;
}

/** 영상 (유튜브) 항목 */
export interface VideoItem {
  id: ID;
  title: string;
  youtube: string;    // 유튜브 영상 ID 또는 전체 URL
  order: number;
  active: boolean;
}

/** 우측 하단 홍보 사각배너 (단일 설정) */
export interface Promo {
  image: string;
  mobileImage?: string; // 모바일 전용 이미지 (없으면 image 사용)
  href: string;
  alt: string;
}

/** 사이트 전역 설정 (헤더 브랜드 / 푸터 정보 / 강사 과목 탭) */
export interface SiteSettings {
  brandName: string;      // 헤더 로고 옆 텍스트
  sectionTitle: string;   // 영상 섹션 제목
  subjects: string[];     // 강사 과목 탭
  footer: {
    company: string;
    address: string;
    bizNo: string;
    tel: string;
    fax: string;
    regNo: string;
    copyright: string;
    brand: string;        // 푸터 로고 텍스트
  };
  social: {
    naver: string;
    instagram: string;
    facebook: string;
    youtube: string;
    kakao: string;
    phone: string;
  };
}
