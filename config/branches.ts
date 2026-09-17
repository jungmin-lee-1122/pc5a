// ─────────────────────────────────────────────────────────────────
//  지점(분원) 공통 설정  —  PC 상단 지점바 · 모바일 지점 드롭다운 ·
//  전체 지점 안내창이 모두 이 파일 하나를 사용합니다.
//
//  · 현재 사이트는 "평촌점" 입니다 (current: true).
//  · 수원점은 홈페이지 주소가 확정되기 전까지 status "준비중" 으로 두세요.
//    → 수원 주소가 정해지면 아래 suwon 의 `href` 에 값을 넣고
//      status 를 "운영중" 으로 바꾸면 자동으로 이동 링크가 활성화됩니다.
//    href 는 내부 경로("/..."), 서브도메인, 별도 도메인 무엇이든 됩니다.
// ─────────────────────────────────────────────────────────────────
import { SITE } from "./homepage";

export type BranchStatus = "운영중" | "준비중";

export interface Branch {
  id: string;
  name: string;      // 짧은 이름 (상단바 표기) — 예: "평촌"
  label: string;     // 지점명 — 예: "평촌점"
  full: string;      // 전체 명칭 — 예: "5A 아카데미 평촌점"
  href: string;      // 이동 주소 (비어 있으면 준비중 취급)
  current: boolean;  // 현재 보고 있는 지점인지
  status: BranchStatus;
  address?: string;  // 확인된 정보만 (없으면 표시 안 함)
  tel?: string;      // 확인된 정보만
  region?: string;   // 카드용 짧은 위치 표기 (선택)
}

export const BRANCHES: Branch[] = [
  {
    id: "pyeongchon",
    name: "평촌",
    label: "평촌점",
    full: "5A 아카데미 평촌점",
    href: "/",                 // 현재 사이트 홈
    current: true,
    status: "운영중",
    address: SITE.footer.address,
    tel: SITE.footer.tel,
    region: "경기 안양 평촌",
  },
  {
    id: "suwon",
    name: "수원",
    label: "수원점",
    full: "5A 아카데미 수원점",
    href: "",                  // ← 수원 홈페이지 주소 확정 시 여기에 입력
    current: false,
    status: "준비중",
    // 주소·전화번호는 확정 전까지 비워둡니다. (임의로 채우지 마세요)
  },
];

export const CURRENT_BRANCH: Branch = BRANCHES.find((b) => b.current) ?? BRANCHES[0];

/** 다른 지점으로 실제 이동이 가능한 상태인지 (준비중/주소없음/현재지점이면 false) */
export function isBranchLinkReady(b: Branch): boolean {
  return !b.current && b.status === "운영중" && b.href.trim() !== "";
}
