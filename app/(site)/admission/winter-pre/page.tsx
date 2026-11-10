"use client";

import { useEffect, useRef } from "react";
import { PRE_CSS, PRE_HTML, PRE_JS } from "./winterPreData";
import AdmissionTabs from "@/app/components/admission/AdmissionTabs";

const REVEAL_CSS = `
.rv{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
.rv.in{opacity:1;transform:none}
`;

function setupReveal(root: ShadowRoot) {
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  const grids = Array.from(root.querySelectorAll<HTMLElement>('[style*="grid-template-columns"]'));
  const staggerSections = new Set<Element>();
  grids.forEach((g) => {
    const sec = g.closest("section");
    if (sec) staggerSections.add(sec);
    const kids = Array.from(g.children).filter((c): c is HTMLElement => c instanceof HTMLElement);
    if (kids.length < 2) return;
    kids.forEach((c, i) => {
      c.classList.add("rv");
      c.style.transitionDelay = `${Math.min(i, 6) * 70}ms`;
    });
  });

  root.querySelectorAll("section").forEach((sec) => {
    if (staggerSections.has(sec)) {
      const h = sec.querySelector("h2, h3");
      if (h) h.classList.add("rv");
    } else {
      sec.classList.add("rv");
    }
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  root.querySelectorAll(".rv").forEach((el) => io.observe(el));
}

export default function WinterPrePage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    document.title = "2027 PRE 윈터스쿨 | 5A 아카데미 평촌점";
    const host = hostRef.current;
    if (!host) return;

    let shadow = shadowRef.current;
    if (!shadow) {
      shadow = host.attachShadow({ mode: "open" });
      shadowRef.current = shadow;
    }

    const css = PRE_CSS
      .replace(/:root\s*\{/g, ":host{")
      .replace(/html\s*,\s*body\s*\{/g, ":host{")
      .replace(/(^|[^\w-])body\s*\{/g, "$1:host{")
      .replace(/(^|[^\w-])html\s*\{/g, "$1:host{");

    shadow.innerHTML = `<style>${css}\n${REVEAL_CSS}</style>${PRE_HTML}`;

    if (PRE_JS.trim()) {
      const js = PRE_JS
        .replace(/document\.querySelectorAll/g, "root.querySelectorAll")
        .replace(/document\.querySelector/g, "root.querySelector")
        .replace(/document\.addEventListener/g, "root.addEventListener");
      try {
        new Function("root", js)(shadow);
      } catch (e) {
        console.error("[winter-pre] script error", e);
      }
    }

    setupReveal(shadow);

    const onNavClick = (e: Event) => {
      const a = e
        .composedPath()
        .find(
          (n) => n instanceof HTMLAnchorElement && n.getAttribute("href")?.startsWith("#"),
        ) as HTMLAnchorElement | undefined;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      if (!id) return;
      const t = shadow!.querySelector("#" + CSS.escape(id)) as HTMLElement | null;
      if (t) {
        e.preventDefault();
        const y = t.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }
    };
    shadow.addEventListener("click", onNavClick);
    return () => shadow?.removeEventListener("click", onNavClick);
  }, []);

  return (
    <main className="flex-1">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Poppins:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="relative isolate overflow-hidden border-b border-line bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[190%] -translate-y-1/2 select-none opacity-[0.7] sm:right-6"
        />
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="text-sm font-bold text-brand">모집안내</p>
          <h1 className="mt-1.5 text-2xl font-extrabold text-ink sm:text-3xl">2027 PRE 윈터스쿨</h1>
          <p className="mt-2 text-sm text-muted">윈터스쿨보다 한 달 먼저, 고등 수학을 시작합니다.</p>
        </div>
      </div>

      <AdmissionTabs contained />

      <div ref={hostRef} className="w-full" />
    </main>
  );
}
