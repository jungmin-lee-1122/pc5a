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
          { label: "시설안내", href: "/about/facility" },
          { label: "오시는 길", href: "/about/location" },
          { label: "공지사항", href: "/notices" },
        ],
      },
    ],
  },
  {
    label: "모집안내",
    href: "/admission",
    groups: [
      {
        items: [
          { label: "2027 윈터스쿨", href: "/admission/winter" },
          { label: "고등 올케어반", href: "/admission/allcare" },
          { label: "2027 고등단과", href: "/schedule" },
        ],
      },
    ],
  },
  {
    label: "단과시간표",
    href: "/schedule",
    groups: [
      {
        items: [
          { label: "N수 · 고3 단과", href: "/schedule?category=N수 · 고3 단과" },
          { label: "고2 단과", href: "/schedule?category=고2 단과" },
          { label: "고1 단과", href: "/schedule?category=고1 단과" },
          { label: "중3 단과", href: "/schedule?category=중3 단과" },
          { label: "특강", href: "/schedule?category=특강" },
        ],
      },
    ],
  },
  {
    label: "강사진 소개",
    href: "/teachers",
    groups: [
      {
        items: [
          { label: "전체", href: "/teachers" },
          { label: "국어", href: "/teachers?subject=국어" },
          { label: "수학", href: "/teachers?subject=수학" },
          { label: "영어", href: "/teachers?subject=영어" },
          { label: "사회탐구", href: "/teachers?subject=사회탐구" },
          { label: "과학탐구", href: "/teachers?subject=과학탐구" },
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
        href: "/events",
        items: [
          { label: "입시설명회 신청", href: "/events" },
        ],
      },
      {
        heading: "설명회 현장",
        href: "/gallery",
        items: [],
      },
    ],
  },
  {
    label: "학원생활",
    href: "/life",
    groups: [
      {
        items: [
          { label: "주간식단표", href: "/menu" },
          { label: "재원생 후기", href: "/life/review" },
          { label: "온라인 상담", href: "/life/counsel" },
          { label: "2026 모의고사 일정", href: "/life/mock" },
        ],
      },
    ],
  },
];
