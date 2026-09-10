"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="대입 성공 스토리"
      description="대입성공수기·성공영상 페이지에 노출됩니다. 유형(수기/영상)으로 탭이 나뉘고, 합격 대학 그룹은 필터 배지로 쓰입니다. 영상은 유튜브 링크를, 수기는 본문 텍스트(또는 이미지)를 넣으세요."
      endpoint="/api/stories"
      fields={[
        { key: "kind", label: "유형", type: "select", options: ["수기", "영상"], help: "성공수기 탭 / 성공영상 탭 구분" },
        { key: "group", label: "합격 대학 그룹", type: "text", placeholder: "예: 의치한약수, 서연고, 서울대", help: "배지·필터에 사용됩니다." },
        { key: "title", label: "제목", type: "text", placeholder: "예: 2026학년도 고려대 생명공학학과_안O욱" },
        { key: "date", label: "등록일", type: "text", placeholder: "예: 2026.01.07" },
        { key: "videoUrl", label: "유튜브 링크", type: "text", placeholder: "https://youtu.be/... (영상 탭 권장, 수기 선택)" },
        { key: "image", label: "본문/포스터 이미지", type: "image", help: "선택 — 상세 페이지 본문에 표시됩니다." },
        { key: "content", label: "본문 (수기)", type: "textarea", placeholder: "합격 수기 본문. 줄바꿈으로 문단을 구분하세요.", help: "선택 — 수기 상세 본문." },
      ]}
      defaults={{ kind: "수기", group: "", title: "", date: "", videoUrl: "", image: "", content: "" }}
      summary={(item) => (
        <span>
          <span className="rounded bg-brand-light px-1.5 py-0.5 text-[11px] font-semibold text-brand">{String(item.kind)}</span>
          <span className="ml-2 font-semibold">{String(item.group)}</span>
          <span className="text-muted"> · {String(item.title)}</span>
        </span>
      )}
    />
  );
}
