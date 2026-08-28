"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="입시설명회"
      description="설명회/입시교실을 관리합니다. 상세 페이지(/events/[id])와 홈 목록에 함께 반영됩니다."
      endpoint="/api/events"
      fields={[
        { key: "title", label: "제목", type: "text" },
        { key: "date", label: "목록 표시 날짜", type: "text", placeholder: "2026.09.06" },
        { key: "category", label: "분류", type: "text", placeholder: "입시설명회 / 입시교실 / 공개특강" },
        { key: "status", label: "접수 상태", type: "text", placeholder: "접수중 / 접수예정 / 마감" },
        { key: "summary", label: "한 줄 요약", type: "text", placeholder: "목록·상단에 보이는 짧은 설명" },
        { key: "eventDate", label: "일시", type: "text", placeholder: "2026.09.20(일) 14:00~16:00" },
        { key: "location", label: "장소", type: "text", placeholder: "평촌 롯데백화점 식품관 2층 문화홀" },
        { key: "capacity", label: "정원", type: "text", placeholder: "선착순 300석" },
        {
          key: "targets",
          label: "대상",
          type: "tags",
          placeholder: "학부모, 고3, N수 (쉼표로 구분)",
        },
        { key: "host", label: "주최/주관", type: "text", placeholder: "5A 아카데미 입시전략연구소" },
        {
          key: "intro",
          label: "설명회 소개",
          type: "textarea",
          placeholder: "소개 문단. 줄바꿈(엔터)으로 문단을 나눌 수 있습니다.",
        },
        {
          key: "agenda",
          label: "프로그램 순서",
          type: "tags",
          placeholder: "인사말, 제도 변화 총정리, 질의응답 (쉼표로 구분)",
        },
        {
          key: "href",
          label: "외부 링크(선택)",
          type: "text",
          placeholder: "비우면 사이트 내 상세페이지로 연결됩니다",
          help: "외부 페이지로 바로 연결하고 싶을 때만 입력하세요. 보통은 비워둡니다.",
        },
      ]}
      defaults={{
        title: "",
        date: "",
        category: "입시설명회",
        status: "접수중",
        summary: "",
        eventDate: "",
        location: "",
        capacity: "",
        targets: [],
        host: "",
        intro: "",
        agenda: [],
        href: "",
      }}
      summary={(item) => (
        <span>
          <span className="text-muted">
            [{String(item.status || "접수중")}·{String(item.category)}]{" "}
          </span>
          {String(item.title)}
        </span>
      )}
    />
  );
}
