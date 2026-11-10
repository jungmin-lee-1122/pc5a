// 2027 윈터스쿨 상세 — 레이아웃·모바일 개선 레이어 (평촌/수원 공용)
// 핸드오프 HTML(인라인 스타일)은 그대로 두고, 섹션 id 기준으로 덮어쓰는 스타일 + 동작만 추가합니다.

export const ENHANCE_CSS = `
/* ───────── 공통(PC·모바일) ───────── */
.tb-sub{margin-left:.3em}

/* 커리큘럼: 과목별 표 레이아웃 */
#curriculum [style*="padding: 18px 0"]{display:grid !important;grid-template-columns:110px 1fr;gap:18px !important;align-items:start;padding:22px 0 !important}
#curriculum [style*="flex: 0 0 110px"]{display:flex;align-items:center;justify-content:center;min-height:44px;border-radius:12px;background:#102041;color:#fff !important;font-size:16px !important;letter-spacing:.02em}
#curriculum [style*="flex: 1 1 520px"]{border:1px solid #e4e7ee;border-radius:14px;overflow:hidden;gap:0 !important;background:#fff}
#curriculum [style*="flex: 1 1 520px"] > div{display:grid !important;grid-template-columns:minmax(140px,190px) 132px 1fr;gap:0 18px !important;align-items:center !important;padding:13px 18px;border-top:1px solid #eef0f5}
#curriculum [style*="flex: 1 1 520px"] > div:nth-child(odd){background:#fafbfd}
#curriculum [style*="flex: 1 1 520px"] > div > span:nth-child(2){justify-self:start;background:#fff3ec;color:#c4501a !important;font-weight:700;border-radius:999px;padding:4px 11px;font-size:12px !important;white-space:nowrap}
#curriculum [style*="flex: 1 1 520px"] > div.cur-head{background:#f5f6fa !important;border-top:0;padding:10px 18px}
#curriculum [style*="flex: 1 1 520px"] > div.cur-head > span{background:none !important;color:#5a6275 !important;padding:0 !important;font-size:12.5px !important;font-weight:700;border-radius:0}

/* 일과표: 시간 | 활동 타임라인 (PC 2열, 세로 순서) */
#schedule [style*="minmax(260px"]{grid-template-columns:1fr 1fr !important;grid-auto-flow:column;grid-template-rows:repeat(var(--sch-rows,4),auto);gap:10px 18px !important}
#schedule [style*="minmax(260px"] > div{display:grid !important;grid-template-columns:118px 1fr;column-gap:16px;row-gap:3px !important;align-items:start;padding:16px 20px !important}
#schedule [style*="minmax(260px"] > div > span:first-child{grid-row:1 / span 2;padding-top:2px}
#schedule [style*="minmax(260px"] > div > strong,#schedule [style*="minmax(260px"] > div > span:last-child{grid-column:2}

/* 모바일 전용 요소 기본 숨김 */
.adm-tabs,.adm-hint,.fac-dots,.rvw-ctrl,.rvw-bar{display:none}

/* ───────── 모바일 ───────── */
@media (max-width: 640px){
  /* 섹션 여백·제목 크기 축소 */
  section[style*="padding: 80px 24px"],section[style*="padding: 72px 24px"],
  section > div[style*="padding: 80px 24px"],section > div[style*="padding: 72px 24px"]{padding:52px 20px !important}
  section h2{font-size:25px !important}

  /* 섹션 바로가기 칩: 가로 스크롤 한 줄 */
  .sec-chips{flex-wrap:nowrap !important;overflow-x:auto;scrollbar-width:none;padding:10px 20px !important}
  .sec-chips::-webkit-scrollbar{display:none}
  .sec-chips > a{flex:0 0 auto;min-height:38px !important;font-size:13.5px !important;padding:0 13px !important}

  /* 진단~연속성 7단계: 2열 */
  #why [style*="minmax(250px"]{grid-template-columns:1fr 1fr !important;gap:10px !important}
  #why [style*="minmax(250px"] > div{padding:16px 14px !important;gap:6px !important;border-radius:14px !important}
  #why [style*="minmax(250px"] > div:last-child:nth-child(odd){grid-column:1 / -1}
  #why [style*="minmax(250px"] > div > div > span:first-child{font-size:20px !important}
  #why [style*="minmax(250px"] > div > div > span:last-child{font-size:16px !important}
  #why [style*="minmax(250px"] > div > strong{font-size:13.5px !important;line-height:1.4}
  #why [style*="minmax(250px"] > div > p{font-size:12.5px !important;line-height:1.55 !important}

  /* 특화 프로그램: 상단 2개 나란히 */
  #program [style*="minmax(340px"]{grid-template-columns:1fr 1fr !important;gap:10px !important}
  #program [style*="minmax(340px"] > div{padding:16px 13px !important;gap:8px !important;border-radius:16px !important}
  #program [style*="minmax(340px"] > div > strong{font-size:15px !important;line-height:1.35}
  #program [style*="minmax(340px"] > div > p{font-size:12.5px !important;line-height:1.6 !important}
  #program [style*="minmax(340px"] [style*="align-items: flex-end"]{flex-direction:column;align-items:flex-start !important;gap:4px !important;padding-top:4px !important}
  #program [style*="minmax(340px"] [style*="font-size: 64px"]{font-size:38px !important}
  #program [style*="minmax(340px"] [style*="align-items: flex-end"] > span{font-size:11.5px !important;line-height:1.45 !important}
  #program [style*="minmax(340px"] span[style*="border-radius: 999px"]{font-size:11px !important;padding:4px 8px !important}
  /* 특화 프로그램: 하단 3개 2열 (마지막 전체폭) */
  #program [style*="minmax(300px"]{grid-template-columns:1fr 1fr !important;gap:10px !important}
  #program [style*="minmax(300px"] > div{padding:16px 13px !important;gap:8px !important;border-radius:16px !important}
  #program [style*="minmax(300px"] > div:last-child:nth-child(odd){grid-column:1 / -1}
  #program [style*="minmax(300px"] > div > strong{font-size:15px !important}
  #program [style*="minmax(300px"] ul{font-size:12.5px !important;gap:4px !important;padding-left:15px !important;line-height:1.5 !important}

  /* 모집요강 표: 라벨 / 내용 카드형 */
  #admission [style*="flex: 0 0 180px"]{flex:0 0 100% !important;box-sizing:border-box;padding:10px 16px !important;font-size:13px !important}
  #admission [style*="flex: 0 0 180px"] + div{flex:0 0 100% !important;box-sizing:border-box;padding:12px 16px 14px !important;font-size:14px !important;line-height:1.65 !important;word-break:keep-all;overflow-wrap:anywhere}

  /* 프리미엄 테스트: 시험범위 표 화면폭 맞춤 + 진단 단계 2×2 */
  #program table{min-width:0 !important;font-size:12.5px !important}
  #program table th,#program table td{padding:10px 8px !important;line-height:1.45}
  #program table tr > *:first-child{white-space:nowrap}
  .prog-steps{display:grid !important;grid-template-columns:1fr 1fr;gap:8px !important;align-items:stretch !important}
  .prog-steps > div{padding:10px 12px !important}

  /* 장학제도: 2개 나란히 */
  #scholarship [style*="minmax(340px"]{grid-template-columns:1fr 1fr !important;gap:8px !important}
  #scholarship [style*="minmax(340px"] > div > div:first-child{flex-direction:column;align-items:flex-start !important;gap:2px !important;padding:14px 12px !important}
  #scholarship [style*="minmax(340px"] > div > div:first-child > strong{font-size:14.5px !important}
  #scholarship [style*="minmax(340px"] > div > div:first-child > span{font-size:11.5px !important}
  #scholarship [style*="minmax(340px"] > div > div:first-child > span > span{font-size:22px !important}
  #scholarship [style*="minmax(340px"] > div > div:last-child{padding:4px 12px 14px !important}
  #scholarship [style*="minmax(340px"] > div > div:last-child > div{flex-direction:column;gap:2px !important;padding:10px 0 !important}
  #scholarship [style*="minmax(340px"] > div > div:last-child > div > span:first-child{flex:none !important;font-size:11.5px !important}
  #scholarship [style*="minmax(340px"] > div > div:last-child > div > span:last-child{font-size:12.5px !important;line-height:1.5 !important}
  #scholarship [style*="minmax(340px"] > div > div:last-child > p{font-size:11.5px !important}
  #scholarship ul{font-size:12.5px !important}

  /* 입학전형·반 편성: 학년 탭 */
  .adm-hint{display:block;margin:14px 0 8px;font-size:12px;color:#c9d0e0}
  .adm-tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:12px}
  .adm-tabs button{min-height:46px;border-radius:12px;border:1px solid rgba(255,255,255,.25);background:transparent;color:#c9d0e0;font:inherit;font-size:13px;font-weight:700;line-height:1.3;padding:6px 4px;cursor:pointer}
  .adm-tabs button small{display:block;font-size:11px;font-weight:500;opacity:.85}
  .adm-tabs button.on{background:#ec6926;border-color:#ec6926;color:#fff}
  #admission [data-admgrid]{margin-top:0 !important}
  #admission [data-admgrid] > .adm-off{display:none !important}
  #admission [data-admgrid] > div{padding:18px 16px !important;gap:12px !important}
  #admission [data-admgrid] > div > strong{font-size:16px !important}
  #admission [data-admgrid] span[style*="min-width: 84px"]{min-width:72px !important;font-size:11.5px !important}
  #admission [data-admgrid] span[style*="color: #dfe4ef"]{font-size:13px !important}

  /* 커리큘럼: 학년 탭 3등분 + 행은 [과목 | 수준] / 내용 */
  #curriculum [role="tablist"]{display:grid !important;grid-template-columns:repeat(3,1fr);gap:6px !important}
  #curriculum [role="tablist"] button{min-height:48px !important;padding:6px 4px !important;font-size:13px !important;line-height:1.3 !important;border-radius:12px !important}
  .tb-sub{display:block;margin-left:0;font-size:11px;opacity:.85}
  #curriculum [role="tabpanel"]{padding:20px 14px !important;border-radius:16px !important;gap:16px !important;margin-top:14px !important}
  #curriculum [role="tabpanel"] > div:first-child > strong{font-size:16.5px !important;line-height:1.4}
  #curriculum [role="tabpanel"] > p{font-size:13.5px !important;line-height:1.7 !important}
  #curriculum [style*="padding: 18px 0"]{grid-template-columns:1fr !important;gap:10px !important;padding:16px 0 !important}
  #curriculum [style*="flex: 0 0 110px"]{justify-self:start;min-height:32px;padding:0 16px;font-size:14px !important}
  #curriculum [style*="flex: 1 1 520px"] > div.cur-head{display:none !important}
  #curriculum [style*="flex: 1 1 520px"] > div.cur-head + div{border-top:0}
  #curriculum [style*="flex: 1 1 520px"] > div{grid-template-columns:1fr auto;grid-template-areas:"n l" "d d";gap:5px 10px !important;padding:12px 14px}
  #curriculum [style*="flex: 1 1 520px"] > div > span:nth-child(1){grid-area:n;font-size:14px !important}
  #curriculum [style*="flex: 1 1 520px"] > div > span:nth-child(2){grid-area:l;font-size:11px !important;padding:3px 9px}
  #curriculum [style*="flex: 1 1 520px"] > div > span:nth-child(3){grid-area:d;font-size:13px !important;line-height:1.6 !important}

  /* 일과표: 1열 타임라인 */
  #schedule [style*="minmax(260px"]{grid-template-columns:1fr !important;grid-auto-flow:row;grid-template-rows:none;gap:8px !important}
  #schedule [style*="minmax(260px"] > div{grid-template-columns:92px 1fr;column-gap:12px;padding:13px 14px !important;border-radius:12px !important}
  #schedule [style*="minmax(260px"] > div > span:first-child{font-size:12.5px !important}
  #schedule [style*="minmax(260px"] > div > strong{font-size:15px !important}
  #schedule [style*="minmax(260px"] > div > span:last-child{font-size:12.5px !important}
  #schedule ul{font-size:12.5px !important;padding-left:16px !important}

  /* 생활규정: 2열 + 벌점표 가로 정렬 */
  #rules [style*="minmax(250px"]{grid-template-columns:1fr 1fr !important;gap:8px !important}
  #rules [style*="minmax(250px"] > div{padding:14px 13px !important;gap:5px !important;border-radius:12px !important}
  #rules [style*="minmax(250px"] > div:last-child:nth-child(odd){grid-column:1 / -1}
  #rules [style*="minmax(250px"] > div > strong{font-size:14px !important}
  #rules [style*="minmax(250px"] > div > span{font-size:12px !important;line-height:1.6 !important}
  #rules [data-if="penaltyOpen"] [style*="flex-wrap: wrap"]{flex-wrap:nowrap !important}
  #rules [data-if="penaltyOpen"] [style*="flex: 0 0 140px"]{flex:0 0 84px !important;padding:12px 8px 12px 14px !important;font-size:13px !important}
  #rules [data-if="penaltyOpen"] [style*="flex: 0 0 140px"] + span{flex:1 1 0 !important;padding:12px 14px 12px 4px !important;font-size:12.5px !important;line-height:1.6 !important}

  /* 시설·급식: 자동 넘김 캐러셀 (스와이프 + 점) */
  #facility [style*="minmax(260px"]{display:flex !important;overflow-x:auto;scroll-snap-type:x mandatory;gap:12px !important;scrollbar-width:none;margin:0 -20px;padding:0 20px 4px;scroll-padding:0 20px}
  #facility [style*="minmax(260px"]::-webkit-scrollbar{display:none}
  #facility [style*="minmax(260px"] > figure{flex:0 0 82% !important;scroll-snap-align:start}
  #facility [style*="minmax(260px"] img{height:200px !important}
  .fac-dots{display:flex;justify-content:center;gap:6px;margin-top:14px}
  .fac-dots i{width:6px;height:6px;border-radius:99px;background:#d5d9e3;transition:all .3s}
  .fac-dots i.on{width:18px;background:#ec6926}
  #facility [style*="minmax(240px"]{padding:18px !important;gap:14px !important}

  /* 후기: 한 장씩 페이드 전환 + 진행바 (시설과 다른 방식) */
  #review [data-rvw]{display:grid !important;grid-template-columns:1fr !important;gap:0 !important}
  #review [data-rvw] > div{grid-area:1 / 1;padding:22px 20px !important;opacity:0;visibility:hidden;transform:translateX(18px);transition:opacity .5s ease,transform .55s cubic-bezier(.16,1,.3,1),visibility 0s linear .55s}
  #review [data-rvw] > div.rvw-on{opacity:1;visibility:visible;transform:none;transition:opacity .5s ease,transform .55s cubic-bezier(.16,1,.3,1),visibility 0s}
  .rvw-bar{display:block;height:3px;background:rgba(255,255,255,.15);border-radius:3px;margin-top:16px;overflow:hidden}
  .rvw-bar i{display:block;height:100%;width:0;background:#ec6926}
  .rvw-bar i.run{width:100%;transition:width 5s linear}
  .rvw-ctrl{display:flex;align-items:center;justify-content:space-between;margin-top:12px}
  .rvw-ctrl button{width:42px;height:42px;border-radius:999px;border:1px solid rgba(255,255,255,.28);background:transparent;color:#fff;font-size:20px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer}
  .rvw-ctrl .rvw-count{font-family:Poppins,sans-serif;font-size:14px;color:#c9d0e0;letter-spacing:.06em}
  .rvw-ctrl .rvw-count b{color:#fff}
}
`;

/** 섹션별 동작 추가. 반환값은 타이머 정리 함수 */
export function enhanceWinter(root: ShadowRoot): () => void {
  const cleanups: Array<() => void> = [];
  const mq = window.matchMedia("(max-width: 640px)");
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // 섹션 바로가기 칩
  root.querySelector('a[href="#why"]')?.parentElement?.classList.add("sec-chips");

  // 프리미엄 테스트 진단 단계 묶음
  root.querySelector('#program [style*="flex: 1 1 120px"]')?.parentElement?.classList.add("prog-steps");

  // 커리큘럼 탭 버튼: "(현 중3)" 줄 분리
  root.querySelectorAll<HTMLButtonElement>('#curriculum [role="tablist"] button').forEach((b) => {
    if (b.querySelector(".tb-sub")) return;
    const m = (b.textContent || "").trim().match(/^(.*?)\s*(\(.*\))$/);
    if (m) b.innerHTML = `${m[1]}<span class="tb-sub">${m[2]}</span>`;
  });

  // 커리큘럼 표 머리행
  root.querySelectorAll<HTMLElement>('#curriculum [style*="flex: 1 1 520px"]').forEach((box) => {
    if (box.querySelector(":scope > .cur-head")) return;
    const h = document.createElement("div");
    h.className = "cur-head";
    h.innerHTML = "<span>과목</span><span>수준 · 시간</span><span>수업 내용</span>";
    box.prepend(h);
  });

  // 일과표 세로 순서용 행 수
  const sch = root.querySelector<HTMLElement>('#schedule [style*="minmax(260px"]');
  if (sch) sch.style.setProperty("--sch-rows", String(Math.ceil(sch.children.length / 2)));

  // 입학전형·반 편성: 모바일 학년 탭
  const adm = root.querySelector<HTMLElement>('#admission [style*="minmax(320px"]');
  if (adm && !adm.dataset.admgrid) {
    adm.dataset.admgrid = "1";
    const cards = Array.from(adm.children).filter((c): c is HTMLElement => c instanceof HTMLElement);
    const hint = document.createElement("p");
    hint.className = "adm-hint";
    hint.textContent = "아래 학년 탭을 눌러 학년별 반 편성 기준을 확인하세요";
    const tabs = document.createElement("div");
    tabs.className = "adm-tabs";
    tabs.setAttribute("role", "tablist");
    const select = (idx: number, user = false) => {
      cards.forEach((c, i) => {
        c.classList.toggle("adm-off", i !== idx);
        if (user && i === idx) {
          c.style.transitionDelay = "0ms";
          c.classList.add("in");
        }
      });
      Array.from(tabs.children).forEach((b, i) => {
        b.classList.toggle("on", i === idx);
        b.setAttribute("aria-selected", String(i === idx));
      });
    };
    cards.forEach((c, i) => {
      const label = c.querySelector("strong")?.textContent?.trim() ?? `${i + 1}`;
      const m = label.match(/^(.*?)\s*(\(.*\))$/);
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.innerHTML = m ? `${m[1]}<small>${m[2]}</small>` : label;
      b.addEventListener("click", () => select(i, true));
      tabs.appendChild(b);
    });
    adm.before(hint, tabs);
    select(0);
  }

  // 시설·급식: 모바일 자동 넘김 캐러셀
  const fac = root.querySelector<HTMLElement>('#facility [style*="minmax(260px"]');
  if (fac && !fac.dataset.fac) {
    fac.dataset.fac = "1";
    const items = Array.from(fac.children).filter((c): c is HTMLElement => c instanceof HTMLElement);
    const dots = document.createElement("div");
    dots.className = "fac-dots";
    items.forEach(() => dots.appendChild(document.createElement("i")));
    fac.after(dots);
    let idx = 0;
    let pausedUntil = 0;
    let visible = false;
    const pos = (k: number) => items[k].offsetLeft - items[0].offsetLeft;
    const setDot = (k: number) => Array.from(dots.children).forEach((d, j) => d.classList.toggle("on", j === k));
    setDot(0);
    const onScroll = () => {
      let best = 0;
      let bd = Infinity;
      items.forEach((_, k) => {
        const d = Math.abs(pos(k) - fac.scrollLeft);
        if (d < bd) {
          bd = d;
          best = k;
        }
      });
      idx = best;
      setDot(best);
    };
    const pause = () => {
      pausedUntil = Date.now() + 6000;
    };
    fac.addEventListener("scroll", onScroll, { passive: true });
    fac.addEventListener("touchstart", pause, { passive: true });
    fac.addEventListener("pointerdown", pause);
    const io = new IntersectionObserver((es) => {
      visible = es.some((e) => e.isIntersecting);
    }, { threshold: 0.4 });
    io.observe(fac);
    const timer = window.setInterval(() => {
      if (reduce || !mq.matches || !visible || document.hidden || Date.now() < pausedUntil) return;
      fac.scrollTo({ left: pos((idx + 1) % items.length), behavior: "smooth" });
    }, 3200);
    cleanups.push(() => {
      window.clearInterval(timer);
      io.disconnect();
    });
  }

  // 후기: 모바일 한 장씩 페이드 전환 (진행바 + 이전/다음 + 스와이프)
  const rv = root.querySelector<HTMLElement>('#review [style*="minmax(300px"]');
  if (rv && !rv.dataset.rvw) {
    rv.dataset.rvw = "1";
    const cards = Array.from(rv.children).filter((c): c is HTMLElement => c instanceof HTMLElement);
    const bar = document.createElement("div");
    bar.className = "rvw-bar";
    bar.innerHTML = "<i></i>";
    const ctrl = document.createElement("div");
    ctrl.className = "rvw-ctrl";
    ctrl.innerHTML =
      `<button type="button" aria-label="이전 후기">‹</button>` +
      `<span class="rvw-count"><b>1</b> / ${cards.length}</span>` +
      `<button type="button" aria-label="다음 후기">›</button>`;
    rv.after(bar, ctrl);
    const fill = bar.firstElementChild as HTMLElement;
    const countEl = ctrl.querySelector(".rvw-count b") as HTMLElement;
    let i = 0;
    let visible = false;
    let t: number | undefined;
    const show = (n: number, user = false) => {
      i = (n + cards.length) % cards.length;
      cards.forEach((c, k) => {
        c.classList.toggle("rvw-on", k === i);
        if (user && k === i) {
          c.style.transitionDelay = "0ms";
          c.classList.add("in");
        }
      });
      countEl.textContent = String(i + 1);
      fill.classList.remove("run");
      void fill.offsetWidth;
      if (!reduce) fill.classList.add("run");
    };
    const schedule = () => {
      window.clearTimeout(t);
      t = window.setTimeout(() => {
        if (!reduce && mq.matches && visible && !document.hidden) show(i + 1, true);
        schedule();
      }, 5000);
    };
    const [prevBtn, , nextBtn] = Array.from(ctrl.children) as HTMLElement[];
    prevBtn.addEventListener("click", () => {
      show(i - 1, true);
      schedule();
    });
    nextBtn.addEventListener("click", () => {
      show(i + 1, true);
      schedule();
    });
    let sx = 0;
    rv.addEventListener("touchstart", (e) => {
      sx = e.touches[0].clientX;
    }, { passive: true });
    rv.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 40) {
        show(dx < 0 ? i + 1 : i - 1, true);
        schedule();
      }
    }, { passive: true });
    const io = new IntersectionObserver((es) => {
      visible = es.some((e) => e.isIntersecting);
    }, { threshold: 0.3 });
    io.observe(rv);
    show(0);
    schedule();
    cleanups.push(() => {
      window.clearTimeout(t);
      io.disconnect();
    });
  }

  return () => cleanups.forEach((fn) => fn());
}
