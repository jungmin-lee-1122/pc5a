"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";
import { COURSE_CATEGORIES } from "@/lib/types";

export default function Page() {
  return (
    <ResourceManager
      title="단과 강좌"
      description="단과시간표에 노출되는 강좌입니다. 분류(탭)·선생님·강의계획서(A4)까지 관리합니다. 선생님 이름은 강사진에 등록된 이름과 동일하게 입력하세요."
      endpoint="/api/courses"
      fields={[
        { key: "category", label: "분류(탭)", type: "select", options: [...COURSE_CATEGORIES] },
        { key: "title", label: "강좌명", type: "text", placeholder: "[단과] 9월-고3 국어(일,4회) 독서문학 -김연호T" },
        { key: "teacher", label: "선생님", type: "text", placeholder: "예: 김연호 (강사진 이름과 동일하게)" },
        { key: "tags", label: "태그", type: "tags", placeholder: "국어, 고3·N수", help: "쉼표로 구분" },
        { key: "target", label: "추천대상", type: "text", placeholder: "고3·N수" },
        { key: "startDate", label: "개강일", type: "text", placeholder: "8월 30일(일)" },
        { key: "period", label: "수업기간", type: "text", placeholder: "8월 30일(일) ~ 9월 20일(일)" },
        { key: "time", label: "수업시간", type: "text", placeholder: "일 14:00 ~ 18:00" },
        { key: "price", label: "수강료", type: "text", placeholder: "280,000원" },
        { key: "material", label: "교재", type: "text", placeholder: "자체 제작교재" },
        {
          key: "syllabus",
          label: "강의계획서 (A4 이미지)",
          type: "image",
          help: "강좌 상세 하단에 표시됩니다. A4 비율(세로형) 이미지를 권장합니다.",
        },
        { key: "active", label: "노출 여부", type: "checkbox" },
      ]}
      defaults={{
        category: "N수 · 고3 단과",
        title: "",
        teacher: "",
        tags: [],
        target: "",
        startDate: "",
        period: "",
        time: "",
        price: "",
        material: "자체 제작교재",
        syllabus: "/placeholders/syllabus.svg",
        active: true,
      }}
      summary={(item) => (
        <span>
          <span className="text-muted">[{String(item.category)}] </span>
          {String(item.title)}
        </span>
      )}
    />
  );
}
