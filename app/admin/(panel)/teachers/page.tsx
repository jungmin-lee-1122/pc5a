"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="강사진"
      description="과목별 선생님 카드입니다. 과목명은 사이트 정보의 과목 탭과 일치해야 해당 탭에 노출됩니다."
      endpoint="/api/teachers"
      thumbKey="photo"
      fields={[
        { key: "name", label: "이름", type: "text", placeholder: "예: 김연호" },
        { key: "subject", label: "과목", type: "text", placeholder: "예: 국어" },
        { key: "tags", label: "태그", type: "tags", placeholder: "고3, N수", help: "쉼표로 구분" },
        { key: "photo", label: "사진", type: "image" },
        { key: "active", label: "노출 여부", type: "checkbox" },
      ]}
      defaults={{ name: "", subject: "국어", tags: ["고3", "N수"], photo: "/placeholders/teacher.svg", active: true }}
      summary={(item) => (
        <span>
          <span className="font-semibold">{String(item.name)}</span>
          <span className="text-muted"> · {String(item.subject)}</span>
        </span>
      )}
    />
  );
}
