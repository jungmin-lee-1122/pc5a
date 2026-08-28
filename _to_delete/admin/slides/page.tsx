"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="히어로 슬라이드"
      description="메인 상단 왼쪽에서 자동으로 롤링되는 배너 이미지입니다."
      endpoint="/api/slides"
      thumbKey="image"
      fields={[
        { key: "image", label: "이미지", type: "image" },
        { key: "alt", label: "설명(대체텍스트)", type: "text", placeholder: "예: 2027 윈터스쿨" },
        { key: "href", label: "클릭 시 이동 링크", type: "text", placeholder: "#" },
        { key: "active", label: "노출 여부", type: "checkbox" },
      ]}
      defaults={{ image: "", alt: "", href: "#", active: true }}
      summary={(item) => <span className="font-medium">{String(item.alt || "(제목 없음)")}</span>}
    />
  );
}
