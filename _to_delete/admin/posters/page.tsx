"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="포스터"
      description="히어로 우측에 표시되는 포스터입니다. 첫 번째 노출 항목이 사용됩니다."
      endpoint="/api/posters"
      thumbKey="image"
      fields={[
        { key: "image", label: "이미지", type: "image" },
        { key: "alt", label: "설명(대체텍스트)", type: "text" },
        { key: "href", label: "클릭 시 이동 링크", type: "text", placeholder: "#" },
        { key: "active", label: "노출 여부", type: "checkbox" },
      ]}
      defaults={{ image: "", alt: "", href: "#", active: true }}
      summary={(item) => <span className="font-medium">{String(item.alt || "(제목 없음)")}</span>}
    />
  );
}
