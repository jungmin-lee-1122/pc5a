"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LINKS = [
  { href: "/admin", label: "대시보드" },
  { href: "/admin/teachers", label: "강사진" },
  { href: "/admin/notices", label: "공지사항" },
  { href: "/admin/events", label: "입시설명회" },
  { href: "/admin/videos", label: "영상" },
  { href: "/admin/menus", label: "주간식단표" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-line bg-white">
      <div className="border-b border-line px-6 py-5">
        <p className="text-lg font-extrabold text-ink">5A 관리자</p>
        <p className="text-xs text-muted">콘텐츠 관리 시스템</p>
      </div>
      <nav className="flex-1 space-y-0.5 p-3">
        {LINKS.map((l) => {
          const active = l.href === "/admin" ? pathname === "/admin" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`block rounded-lg px-3 py-2 text-sm transition ${
                active ? "bg-brand text-white" : "text-gray-600 hover:bg-brand-light hover:text-brand"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
      <div className="space-y-2 border-t border-line p-3">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
        >
          홈페이지 보기 ↗
        </a>
        <button
          onClick={logout}
          className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 transition hover:bg-red-50 hover:text-red-600"
        >
          로그아웃
        </button>
      </div>
    </aside>
  );
}
