"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="공지사항"
      description="공지사항을 작성·관리합니다. 홈 목록과 공지 페이지(/notices/[id])에 함께 반영됩니다."
      endpoint="/api/notices"
      fields={[
        { key: "title", label: "제목", type: "text" },
        { key: "date", label: "날짜", type: "text", placeholder: "2026.08.03" },
        { key: "category", label: "분류", type: "text", placeholder: "공지사항 / 모집 / 학사" },
        { key: "badge", label: "뱃지(선택)", type: "text", placeholder: "예: NEW" },
        {
          key: "content",
          label: "본문",
          type: "textarea",
          placeholder: "공지 내용을 입력하세요. 줄바꿈(엔터)으로 문단을 나눌 수 있습니다.",
          help: "상세 페이지에 표시되는 본문입니다.",
        },
        {
          key: "href",
          label: "외부 링크(선택)",
          type: "text",
          placeholder: "비우면 사이트 내 상세페이지로 연결됩니다",
          help: "외부 페이지로 바로 연결하고 싶을 때만 입력하세요. 보통은 비워둡니다.",
        },
      ]}
      defaults={{ title: "", date: "", category: "공지사항", badge: "", content: "", href: "" }}
      summary={(item) => (
        <span>
          <span className="text-muted">
            [{String(item.category || "공지사항")}·{String(item.date)}]{" "}
          </span>
          {String(item.title)}
        </span>
      )}
    />
  );
}
