import { singletonRoutes } from "@/lib/api";
import type { Stats } from "@/lib/types";

const fallback: Stats = { brand: "러셀 평촌", title: "대입 합격 결과", note: "데이터 산출 기준", items: [] };

export const dynamic = "force-dynamic";
export const { GET, PUT } = singletonRoutes<Stats>("stats", fallback);
