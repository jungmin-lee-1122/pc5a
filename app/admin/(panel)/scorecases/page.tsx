"use client";
import ResourceManager from "@/app/components/admin/ResourceManager";

export default function Page() {
  return (
    <ResourceManager
      title="성적향상사례"
      description="성적향상사례 페이지의 학생별 재수 전/후 성적 비교 카드입니다. 성적 표는 한 줄에 한 과목씩 '과목,표준점수,백분위,등급' 형식으로 입력하세요 (영어처럼 표준점수·백분위가 없으면 비워둠: 예 '영어,,,3')."
      endpoint="/api/scorecases"
      fields={[
        { key: "year", label: "학년도", type: "text", placeholder: "예: 2026학년도" },
        { key: "name", label: "이름", type: "text", placeholder: "예: 김O민" },
        { key: "school", label: "출신고교", type: "text", placeholder: "예: 평촌고" },
        { key: "metric", label: "지표명", type: "text", placeholder: "예: 국수탐 백분위" },
        { key: "beforeLabel", label: "이전 라벨", type: "text", placeholder: "예: 2025 수능" },
        { key: "afterLabel", label: "이후 라벨", type: "text", placeholder: "예: 2026 수능" },
        { key: "beforeScore", label: "이전 지표값", type: "number", placeholder: "예: 255" },
        { key: "afterScore", label: "이후 지표값", type: "number", placeholder: "예: 291" },
        { key: "beforeTitle", label: "이전 표 제목", type: "text", placeholder: "예: 재수 시작 전 2025 수능 성적" },
        { key: "afterTitle", label: "이후 표 제목", type: "text", placeholder: "예: 재수 시작 후 2026 수능 성적" },
        { key: "beforeRows", label: "이전 성적표", type: "textarea", placeholder: "언어와매체,120,80,3\n미적분,128,94,2\n영어,,,3\n화학I,60,80,3", help: "한 줄에 한 과목: 과목,표준점수,백분위,등급" },
        { key: "afterRows", label: "이후 성적표", type: "textarea", placeholder: "언어와매체,135,97,1\n미적분,133,99,1\n영어,,,2\n화학I,66,95,1", help: "한 줄에 한 과목: 과목,표준점수,백분위,등급" },
      ]}
      defaults={{
        year: "2026학년도", name: "", school: "", metric: "국수탐 백분위",
        beforeLabel: "2025 수능", afterLabel: "2026 수능", beforeScore: 0, afterScore: 0,
        beforeTitle: "재수 시작 전 2025 수능 성적", afterTitle: "재수 시작 후 2026 수능 성적",
        beforeRows: "", afterRows: "",
      }}
      summary={(item) => (
        <span>
          <span className="font-semibold">{String(item.name)}</span>
          <span className="text-muted"> · {String(item.school)} · {String(item.beforeScore)}→{String(item.afterScore)}</span>
        </span>
      )}
    />
  );
}
