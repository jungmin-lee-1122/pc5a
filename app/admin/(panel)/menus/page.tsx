"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="주간식단표"
      description="주간식단표를 관리합니다. 식단표 사진을 첨부해 올리면 식단표 페이지(/menu)에 표시됩니다."
      endpoint="/api/menus"
      thumbKey="image"
      fields={[
        { key: "title", label: "제목", type: "text", placeholder: "예: 8월 4주차 주간식단표" },
        { key: "date", label: "기간/날짜", type: "text", placeholder: "예: 2026.08.18 ~ 08.22" },
        {
          key: "image",
          label: "식단표 사진",
          type: "image",
          help: "식단표 이미지를 업로드하세요. (가로로 긴 표 이미지 권장)",
        },
        { key: "active", label: "노출 여부", type: "checkbox" },
      ]}
      defaults={{ title: "", date: "", image: "/placeholders/menu.svg", active: true }}
      summary={(item) => (
        <span>
          <span className="text-muted">[{String(item.date)}] </span>
          {String(item.title)}
        </span>
      )}
    />
  );
}
