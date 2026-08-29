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

  // ── 상세 페이지용 (모두 선택 항목) ──────────────────────────
  slogan?: string;    // 한 줄 캐치프레이즈 (예: "국어의 신세계를 맛보다!!")
  career?: string;    // 이력 (줄바꿈으로 구분, 한 줄에 하나씩)
  videoUrl?: string;  // 선생님 소개 영상 링크 (유튜브 등, 선택)
  introPoster?: string; // 강사 소개 A4 포스터 이미지 (하단 '강사 소개' 탭)
}

/** 공지사항 항목 */
export interface Notice {
  id: ID;
  title: string;
  date: string;       // YYYY.MM.DD
  href: string;       // 외부 링크(선택). 비우거나 "#"이면 사이트 내 상세페이지로 연결됩니다.
  badge?: string;     // 선택: 강조 뱃지 텍스트 (예: NEW)
  order: number;
  category?: string;  // 선택: 분류 (예: 공지사항 / 모집 / 학사)
  content?: string;   // 선택: 상세 페이지 본문 (줄바꿈으로 문단 구분)
}

/** 설명회 참석 신청 상태 */
export type EventStatus = "접수중" | "접수예정" | "마감";

/** 입시설명회 / 입시교실 항목 */
export interface EventItem {
  id: ID;
  title: string;
  date: string;        // 목록 표시용 날짜 (YYYY.MM.DD)
  href: string;        // 외부 링크(선택). 비우거나 "#"이면 사이트 내 상세페이지로 연결됩니다.
  category: string;    // "입시설명회" | "입시교실" | "공개특강" 등
  order: number;

  // ── 상세 페이지용 (모두 선택 항목) ────────────────────────────────
  summary?: string;    // 목록/상단에 보이는 한 줄 요약
  eventDate?: string;  // 실제 일시 (예: "2026.09.20(일) 14:00~16:00")
  location?: string;   // 장소 (예: "평촌 롯데백화점 문화홀")
  targets?: string;    // 대상 (자유 입력, 최대 50자. 예: "현 고1, 현 고2") — 구버전 배열 데이터도 허용
  status?: EventStatus; // 접수중 / 접수예정 / 마감
  intro?: string;      // 소개 문단 (줄바꿈으로 여러 문단)
  poster?: string;     // 안내 포스터 이미지 (A4 형태) — 프로그램 순서 대신 표시
  host?: string;       // 주최/주관
  applyUrl?: string;   // 예약하기 모달에 띄울 구글폼 링크 (비우면 전화 안내)
  thumbnail?: string;  // 목록 썸네일 (선택)
}

/** 영상 (유튜브) 항목 */
export interface VideoItem {
  id: ID;
  title: string;
  youtube: string;    // 유튜브 영상 ID 또는 전체 URL
  order: number;
  active: boolean;
}

/** 주간식단표 항목 (사진 첨부) */
export interface MealMenu {
  id: ID;
  title: string;      // 예: "8월 4주차 식단표"
  date: string;       // 예: "2026.08.18 ~ 08.22"
  image: string;      // 식단표 사진
  order: number;
  active?: boolean;   // 노출 여부 (기본 노출)
}

/** 설명회 현장 갤러리 항목 (현장 사진) */
export interface GalleryItem {
  id: ID;
  title: string;      // 예: "2027 윈터스쿨 설명회 현장"
  date: string;       // 예: "2026.09.06"
  image: string;      // 현장 사진
  location?: string;  // 장소 (선택)
  caption?: string;   // 한 줄 설명 (선택)
  order: number;
  active?: boolean;   // 노출 여부 (기본 노출)
}

/** 재원생 후기 게시글 */
export interface ReviewItem {
  id: ID;
  title: string;       // 후기 제목
  author: string;      // 재원생 이름 (예: "김OO")
  university?: string; // 합격/재원 정보 (예: "서울대학교 26학번")
  date: string;        // YYYY.MM.DD
  image: string;       // 대표 이미지
  content?: string;    // 본문 (줄바꿈으로 문단 구분)
  order: number;
  active?: boolean;    // 노출 여부 (기본 노출)
}

/** 단과시간표 분류(탭) */
export const COURSE_CATEGORIES = [
  "N수 · 고3 단과",
  "고2 단과",
  "고1 단과",
  "중3 단과",
  "특강",
] as const;

/** 단과 강좌 */
export interface Course {
  id: ID;
  category: string;    // COURSE_CATEGORIES 중 하나
  title: string;       // 강좌명
  teacher: string;     // 선생님 이름 (강사진 이름과 동일하게)
  tags: string[];      // 과목·대상 태그
  target?: string;     // 추천대상
  startDate?: string;  // 개강일
  period?: string;     // 수업기간
  time?: string;       // 수업시간
  price?: string;      // 수강료
  material?: string;   // 교재
  syllabus?: string;   // 강의계획서 (A4 이미지)
  order: number;
  active?: boolean;
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

/** 대상 표시용 — 문자열은 그대로, 구버전 배열 데이터는 쉼표로 합칩니다. */
export function targetLabel(t?: string | string[]): string {
  if (Array.isArray(t)) return t.join(", ");
  return (t ?? "").trim();
}
