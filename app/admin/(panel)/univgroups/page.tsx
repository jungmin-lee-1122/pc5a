"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";
import { UNIV_GROUPS } from "@/lib/univ";

export default function Page() {
  return (
    <ResourceManager
      title="대입결과 그룹 카운트"
      description="대입합격현황 상단 히어로의 그룹 탭별 누적 합격자수입니다. '전체 대학합격자' 숫자는 아래 그룹들의 합으로 자동 계산됩니다. 그룹명은 명단 분류와 일치해야 하므로 그대로 두는 것을 권장합니다."
      endpoint="/api/univgroups"
      fields={[
        { key: "label", label: "그룹명", type: "select", options: [...UNIV_GROUPS], help: "명단의 '대학 그룹'과 동일해야 합니다." },
        { key: "count", label: "누적 합격자수", type: "number", placeholder: "예: 428" },
      ]}
      defaults={{ label: UNIV_GROUPS[0], count: 0 }}
      summary={(item) => (
        <span>
          <span className="font-semibold">{String(item.label)}</span>
          <span className="text-muted"> · {Number(item.count).toLocaleString()}명</span>
        </span>
      )}
    />
  );
}
