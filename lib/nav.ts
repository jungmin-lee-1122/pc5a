// 헤더 네비게이션 구조. (메뉴 구조는 코드에서 관리 — 여기만 고치면
// 호버 드롭다운과 전체 메가메뉴에 동시에 반영됩니다.)

export interface NavItem {
  label: string;
  href: string;
  strong?: boolean; // 강조 표시 (예: 추석특강)
}

export interface NavGroup {
  heading?: string;
  href?: string; // 대제목 자체가 링크일 때
  items: NavItem[];
}

export interface NavMenu {
  label: string;
  href: string;
  groups: NavGroup[];
}

export const NAV_MENUS: NavMenu[] = [
  {
    label: "학원소개",
    href: "/about",
    groups: [
      {
        items: [
          { label: "학원소개", href: "/about" },
          { label: "운영시스템", href: "/about/system" },
          { label: "시설안내", href: "/about/facility" },
          { label: "오시는 길", href: "/about/location" },
          { label: "공지사항", href: "/about/notice" },
        ],
      },
    ],
  },
  {
    label: "모집안내",
    href: "/admission",
    groups: [
      { heading: "2027 윈터스쿨", href: "/admission/winter", items: [] },
      {
        heading: "2027 고등단과",
        items: [
          { label: "고1 9월 단과", href: "/admission/h1" },
          { label: "고2 9월 단과", href: "/admission/h2" },
          { label: "고3 9월 단과", href: "/admission/h3" },
        ],
      },
      { items: [{ label: "접수 및 확인", href: "/admission/apply" }] },
    ],
  },
  {
    label: "단과시간표",
    href: "/schedule",
    groups: [
      {
        heading: "N수 · 고3",
        items: [
          { label: "9월 정규 단과", href: "/schedule/n-regular" },
          { label: "약술형 논술 대비반", href: "/schedule/n-essay" },
          { label: "대학별 논술 파이널 특강", href: "/schedule/n-final" },
        ],
      },
      {
        heading: "고1 · 고2",
        items: [
          { label: "8,9월 내신대비반", href: "/schedule/h-naesin" },
          { label: "고2 정규 수능대비반", href: "/schedule/h2-suneung" },
        ],
      },
      {
        heading: "N수 · 고3 · 고1 · 고2",
        items: [{ label: "추석특강", href: "/schedule/chuseok", strong: true }],
      },
    ],
  },
  {
    label: "강사진 소개",
    href: "/teachers",
    groups: [
      {
        items: [
          { label: "선생님별 커리큘럼", href: "/teachers" },
          { label: "국어", href: "/teachers?subject=국어" },
          { label: "수학", href: "/teachers?subject=수학" },
          { label: "영어", href: "/teachers?subject=영어" },
          { label: "탐구", href: "/teachers?subject=탐구" },
          { label: "논술", href: "/teachers?subject=논술" },
        ],
      },
    ],
  },
  {
    label: "설명회/이벤트",
    href: "/events",
    groups: [
      {
        heading: "설명회 신청",
        items: [{ label: "2027 윈터스쿨 설명회", href: "/events/winter" }],
      },
    ],
  },
  {
    label: "학원생활",
    href: "/life",
    groups: [
      {
        items: [
          { label: "주간식단표", href: "/life/menu" },
          { label: "학사일정", href: "/life/calendar" },
          { label: "재원생 후기", href: "/life/review" },
          { label: "온라인 상담", href: "/life/counsel" },
          { label: "2026 모의고사 일정", href: "/life/mock" },
        ],
      },
    ],
  },
];
