"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="대입합격현황"
      description="대입합격현황 페이지의 합격자 명단 표에 노출됩니다. 위/아래 정렬 순서대로 표시됩니다."
      endpoint="/api/univpass"
      fields={[
        { key: "university", label: "대학", type: "text", placeholder: "예: 서울대학교" },
        { key: "major", label: "학과 (모집단위)", type: "text", placeholder: "예: 경영대학" },
        { key: "name", label: "이름", type: "text", placeholder: "예: 김O민", help: "개인정보 보호를 위해 가운데 글자를 O 등으로 가리는 것을 권장합니다." },
        { key: "school", label: "출신고교", type: "text", placeholder: "예: 평촌고" },
        { key: "year", label: "학년도", type: "text", placeholder: "예: 2026" },
      ]}
      defaults={{
        university: "",
        major: "",
        name: "",
        school: "",
        year: "2026",
      }}
      summary={(item) => (
        <span>
          <span className="font-semibold">{String(item.university)}</span>
          <span className="text-muted"> · {String(item.major)} · {String(item.name)}</span>
        </span>
      )}
    />
  );
}
