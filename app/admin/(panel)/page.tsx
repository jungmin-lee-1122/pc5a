import Link from "next/link";

const CARDS = [
  { href: "/admin/slides", label: "히어로 슬라이드", desc: "메인 상단 롤링 배너" },
  { href: "/admin/posters", label: "포스터", desc: "히어로 우측 포스터" },
  { href: "/admin/stats", label: "합격실적", desc: "보라색 합격 결과 배너" },
  { href: "/admin/teachers", label: "강사진", desc: "과목별 선생님 카드" },
  { href: "/admin/notices", label: "공지사항", desc: "공지사항 리스트" },
  { href: "/admin/events", label: "입시설명회", desc: "설명회/입시교실 리스트" },
  { href: "/admin/videos", label: "영상", desc: "유튜브 영상 3종" },
  { href: "/admin/promo", label: "홍보 배너", desc: "우측 하단 사각 배너" },
  { href: "/admin/site", label: "사이트 정보", desc: "헤더/푸터/과목 탭" },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-ink">대시보드</h1>
      <p className="mt-1 text-sm text-muted">관리할 콘텐츠를 선택하세요.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
          >
            <p className="text-base font-bold text-ink">{c.label}</p>
            <p className="mt-1 text-sm text-muted">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
