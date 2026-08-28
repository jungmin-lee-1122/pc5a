"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="영상"
      description="영상 섹션의 유튜브 영상입니다."
      endpoint="/api/videos"
      fields={[
        { key: "title", label: "제목", type: "text" },
        { key: "youtube", label: "유튜브", type: "text", placeholder: "영상 ID 또는 URL", help: "예: ScMzIvxBSi4 또는 https://youtu.be/ScMzIvxBSi4" },
        { key: "active", label: "노출 여부", type: "checkbox" },
      ]}
      defaults={{ title: "", youtube: "", active: true }}
      summary={(item) => <span className="font-medium">{String(item.title || "(제목 없음)")}</span>}
    />
  );
}
