import Link from "next/link";

const CARDS = [
  { href: "/admin/teachers", label: "강사진", desc: "과목별 선생님 카드" },
  { href: "/admin/notices", label: "공지사항", desc: "공지사항 리스트" },
  { href: "/admin/events", label: "입시설명회", desc: "설명회/입시교실 리스트" },
  { href: "/admin/videos", label: "영상", desc: "유튜브 영상" },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-ink">대시보드</h1>
      <p className="mt-1 text-sm text-muted">
        관리할 콘텐츠를 선택하세요. (슬라이드·포스터·홍보배너·합격실적·사이트정보는 코드의 config/homepage.ts 에서 수정합니다.)
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
