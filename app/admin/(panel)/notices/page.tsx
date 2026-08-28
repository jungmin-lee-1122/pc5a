"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="공지사항"
      description="메인 하단 공지사항 리스트입니다."
      endpoint="/api/notices"
      fields={[
        { key: "title", label: "제목", type: "text" },
        { key: "date", label: "날짜", type: "text", placeholder: "2026.08.03" },
        { key: "href", label: "링크", type: "text", placeholder: "#" },
        { key: "badge", label: "뱃지(선택)", type: "text", placeholder: "예: NEW" },
      ]}
      defaults={{ title: "", date: "", href: "#", badge: "" }}
      summary={(item) => (
        <span>
          <span className="text-muted">[{String(item.date)}] </span>
          {String(item.title)}
        </span>
      )}
    />
  );
}
