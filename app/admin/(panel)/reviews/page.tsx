"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="재원생 후기"
      description="재원생 합격·수강 후기를 관리합니다. 프론트 '재원생 후기' 게시판(목록/상세)에 표시됩니다."
      endpoint="/api/reviews"
      thumbKey="image"
      fields={[
        { key: "title", label: "제목", type: "text", placeholder: "예: 불안했던 재수, 5A에서 서울대 합격까지" },
        { key: "author", label: "이름", type: "text", placeholder: "예: 김OO" },
        { key: "university", label: "합격/재원 정보", type: "text", placeholder: "예: 서울대학교 경영학과 26학번 (선택)" },
        { key: "date", label: "날짜", type: "text", placeholder: "2026.02.10" },
        { key: "image", label: "대표 이미지", type: "image" },
        { key: "content", label: "본문", type: "textarea", placeholder: "후기 본문. 줄바꿈(엔터)으로 문단을 나눕니다." },
        { key: "active", label: "노출 여부", type: "checkbox" },
      ]}
      defaults={{ title: "", author: "", university: "", date: "", image: "/placeholders/review.svg", content: "", active: true }}
      summary={(item) => (
        <span>
          <span className="text-muted">[{String(item.author)}] </span>
          {String(item.title)}
        </span>
      )}
    />
  );
}
