import Link from "next/link";
import { notFound } from "next/navigation";
import { NAV_MENUS } from "@/lib/nav";

export const dynamic = "force-dynamic";

// 정책 링크 등 nav 외 계획된 경로
const EXTRA: Record<string, string> = {
  "/policy/terms": "이용약관",
  "/policy/privacy": "개인정보 처리방침",
};

/** nav + 정책 링크에서 (아직 페이지가 없어도) '계획된' 경로와 라벨을 수집 */
function planned(): Map<string, string> {
  const map = new Map<string, string>(Object.entries(EXTRA));
  for (const m of NAV_MENUS) {
    if (m.href) map.set(m.href.split("?")[0], m.label);
    for (const g of m.groups) {
      if (g.href) map.set(g.href.split("?")[0], g.heading ?? m.label);
      for (const it of g.items) if (it.href) map.set(it.href.split("?")[0], it.label);
    }
  }
  return map;
}

export default async function ComingSoonPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = "/" + (slug ?? []).join("/");
  const label = planned().get(path);

  // 메뉴에 없는(계획되지 않은) 경로는 정상 404 처리
  if (!label) notFound();

  return (
    <main className="flex-1">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-20 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-brand">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        </span>
        <h1 className="mt-6 text-2xl font-extrabold text-ink sm:text-3xl">{label}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          해당 페이지는 준비 중입니다.
          <br />
          더 좋은 내용으로 곧 찾아뵙겠습니다.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-1.5 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
