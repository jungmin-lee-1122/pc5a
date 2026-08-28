"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="입시설명회"
      description="설명회/입시교실 리스트입니다. 분류에 따라 탭이 자동 생성됩니다."
      endpoint="/api/events"
      fields={[
        { key: "title", label: "제목", type: "text" },
        { key: "date", label: "날짜", type: "text", placeholder: "2026.09.06" },
        { key: "category", label: "분류", type: "text", placeholder: "입시설명회 / 입시교실" },
        { key: "href", label: "링크", type: "text", placeholder: "#" },
      ]}
      defaults={{ title: "", date: "", category: "입시설명회", href: "#" }}
      summary={(item) => (
        <span>
          <span className="text-muted">[{String(item.category)}] </span>
          {String(item.title)}
        </span>
      )}
    />
  );
}
