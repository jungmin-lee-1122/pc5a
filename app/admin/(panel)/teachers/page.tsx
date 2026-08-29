"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="강사진"
      description="과목별 선생님 카드입니다. 과목명은 사이트 정보의 과목 탭과 일치해야 해당 탭에 노출됩니다. 상세 항목(캐치프레이즈·이력·소개)은 강사 상세 페이지에 표시됩니다."
      endpoint="/api/teachers"
      thumbKey="photo"
      fields={[
        { key: "name", label: "이름", type: "text", placeholder: "예: 김연호" },
        { key: "subject", label: "과목", type: "text", placeholder: "예: 국어" },
        { key: "tags", label: "태그", type: "tags", placeholder: "고3, N수", help: "쉼표로 구분" },
        { key: "photo", label: "사진", type: "image" },
        {
          key: "slogan",
          label: "한 줄 캐치프레이즈",
          type: "text",
          maxLength: 60,
          placeholder: "예: 국어의 신세계를 맛보다!!",
          help: "상세 페이지 상단에 크게 표시됩니다. (선택)",
        },
        {
          key: "career",
          label: "이력",
          type: "textarea",
          placeholder: "현) 5A 아카데미  /  전) OO학원",
          help: "한 줄에 하나씩 입력하세요. (선택)",
        },
        { key: "videoUrl", label: "소개 영상 링크", type: "text", placeholder: "유튜브 주소 (선택)" },
        {
          key: "introPoster",
          label: "강사 소개 포스터 (A4)",
          type: "image",
          help: "하단 '강사 소개' 탭에 표시됩니다. A4 비율(세로형) 이미지를 권장합니다. (선택)",
        },
        { key: "active", label: "노출 여부", type: "checkbox" },
      ]}
      defaults={{
        name: "",
        subject: "국어",
        tags: ["고3", "N수"],
        photo: "/placeholders/teacher.svg",
        slogan: "",
        career: "",
        videoUrl: "",
        introPoster: "",
        active: true,
      }}
      summary={(item) => (
        <span>
          <span className="font-semibold">{String(item.name)}</span>
          <span className="text-muted"> · {String(item.subject)}</span>
        </span>
      )}
    />
  );
}
