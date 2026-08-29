"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="설명회 현장"
      description="입시설명회·입시교실의 현장 사진을 관리합니다. 프론트 '설명회 현장' 갤러리에 노출됩니다."
      endpoint="/api/gallery"
      thumbKey="image"
      fields={[
        { key: "title", label: "제목", type: "text", placeholder: "예: 2027 윈터스쿨 설명회 현장" },
        { key: "date", label: "날짜", type: "text", placeholder: "2026.09.06" },
        { key: "location", label: "장소", type: "text", placeholder: "평촌 롯데백화점 문화홀 (선택)" },
        { key: "image", label: "현장 사진", type: "image" },
        { key: "caption", label: "한 줄 설명", type: "textarea", placeholder: "현장 분위기를 짧게 소개 (선택)" },
        { key: "active", label: "노출 여부", type: "checkbox" },
      ]}
      defaults={{ title: "", date: "", location: "", image: "/placeholders/scene.svg", caption: "", active: true }}
      summary={(item) => (
        <span>
          <span className="text-muted">[{String(item.date)}] </span>
          {String(item.title)}
        </span>
      )}
    />
  );
}
