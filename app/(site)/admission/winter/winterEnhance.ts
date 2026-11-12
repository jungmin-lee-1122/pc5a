// 2027 윈터스쿨 상세 — 레이아웃·모바일 개선 레이어 (평촌/수원 공용)
// 핸드오프 HTML(인라인 스타일)은 그대로 두고, 섹션 id 기준으로 덮어쓰는 스타일 + 동작만 추가합니다.

export const ENHANCE_CSS = `
/* ───────── 공통(PC·모바일) ───────── */
.tb-sub{margin-left:.3em}

/* 커리큘럼: 과목별 표 레이아웃 */
[data-grade] [style*="padding: 18px 0"]{display:grid !important;grid-template-columns:110px 1fr;gap:18px !important;align-items:start;padding:22px 0 !important}
[data-grade] [style*="flex: 0 0 110px"]{display:flex;align-items:center;justify-content:center;min-height:44px;border-radius:12px;background:#102041;color:#fff !important;font-size:16px !important;letter-spacing:.02em}
[data-grade] [style*="flex: 1 1 520px"]{border:1px solid #e4e7ee;border-radius:14px;overflow:hidden;gap:0 !important;background:#fff}
[data-grade] [style*="flex: 1 1 520px"] > div{display:grid !important;grid-template-columns:minmax(140px,190px) 132px 1fr;gap:0 18px !important;align-items:center !important;padding:13px 18px;border-top:1px solid #eef0f5}
[data-grade] [style*="flex: 1 1 520px"] > div:nth-child(odd){background:#fafbfd}
[data-grade] [style*="flex: 1 1 520px"] > div > span:nth-child(2){justify-self:start;background:#fff3ec;color:#c4501a !important;font-weight:700;border-radius:999px;padding:4px 11px;font-size:12px !important;white-space:nowrap}
[data-grade] [style*="flex: 1 1 520px"] > div.cur-head{background:#f5f6fa !important;border-top:0;padding:10px 18px}
[data-grade] [style*="flex: 1 1 520px"] > div.cur-head > span{background:none !important;color:#5a6275 !important;padding:0 !important;font-size:12.5px !important;font-weight:700;border-radius:0}

/* 일과표: 시간 | 활동 타임라인 (PC 2열, 세로 순서) */
#schedule [style*="minmax(260px"]{grid-template-columns:1fr 1fr !important;grid-auto-flow:column;grid-template-rows:repeat(var(--sch-rows,4),auto);gap:10px 18px !important}
#schedule [style*="minmax(260px"] > div{display:grid !important;grid-template-columns:118px 1fr;column-gap:16px;row-gap:3px !important;align-items:start;padding:16px 20px !important}
#schedule [style*="minmax(260px"] > div > span:first-child{grid-row:1 / span 2;padding-top:2px}
#schedule [style*="minmax(260px"] > div > strong,#schedule [style*="minmax(260px"] > div > span:last-child{grid-column:2}

/* 모집요강 요약: 핵심 카드 + 정보 패널 */
.adm-orig{display:none !important}
.adm-sum{margin-top:36px;display:flex;flex-direction:column;gap:14px;color:#1a2238}
.adm-key{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:14px}
.adm-k{background:#fff;border-radius:18px;padding:22px 24px;display:flex;flex-direction:column;gap:8px;min-width:0}
.adm-k .lb{font-size:13px;font-weight:800;color:#c4501a;letter-spacing:.02em}
.adm-k .mv{font-size:23px;font-weight:900;color:#102041;line-height:1.3;letter-spacing:-.01em}
.adm-k .mv b{font-family:Poppins,'Noto Sans KR',sans-serif;font-weight:800;font-size:32px;letter-spacing:-.02em}
.adm-k .mv small{font-size:14px;font-weight:700;color:#5a6275;margin-left:6px}
.adm-k .sv{font-size:13.5px;line-height:1.6;color:#5a6275}
.adm-k.hot{background:#ec6926}
.adm-k.hot .lb{color:#102041}
.adm-k.hot .mv small,.adm-k.hot .sv{color:#102041}
.adm-tags{display:flex;flex-wrap:wrap;gap:6px}
.adm-tags span{font-size:12.5px;font-weight:700;padding:5px 11px;border-radius:999px;background:#f3f5f9;color:#3a4359;line-height:1.3}
.adm-k.hot .adm-tags span{background:rgba(255,255,255,.4);color:#102041}
.adm-info{background:#fff;border-radius:18px;padding:0 26px;display:grid;grid-template-columns:1fr 1fr;column-gap:36px;overflow:hidden}
.adm-i{padding:18px 0;box-shadow:0 -1px 0 #eef0f5;display:grid;grid-template-columns:92px 1fr;gap:14px;align-items:start;min-width:0}
.adm-i.full{grid-column:1 / -1}
.adm-i .lb{font-size:14px;font-weight:800;color:#102041;padding-top:2px}
.adm-i .vv{font-size:15px;line-height:1.65;color:#2a3350;min-width:0}
.adm-i .note{display:block;margin-top:8px;font-size:13px;line-height:1.55;color:#7a8296}
.adm-rows{display:flex;flex-direction:column;gap:6px}
.adm-rows div{display:flex;gap:8px;align-items:baseline}
.adm-rows em{font-style:normal;flex:0 0 auto;font-size:12px;font-weight:800;color:#c4501a;background:#fff3ec;border-radius:6px;padding:2px 8px}
.adm-steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}
.adm-steps div{background:#f5f6fa;border-radius:10px;padding:10px 12px;font-size:13.5px;line-height:1.5;color:#2a3350;font-weight:600}
.adm-steps div b{display:block;font-family:Poppins,sans-serif;font-size:11px;font-weight:800;color:#c4501a;margin-bottom:2px;letter-spacing:.06em}
.adm-i .mn{display:block;font-weight:700;color:#102041}
.adm-i .mn b{color:#c4501a}
.adm-i a[href^="tel:"]{color:#c4501a;font-weight:800;text-decoration:none;border-bottom:1px solid rgba(196,80,26,.35)}
.adm-sum .adm-k,.adm-sum .adm-i{opacity:0;transform:translateY(16px);transition:opacity .6s ease,transform .6s cubic-bezier(.16,1,.3,1)}
.adm-sum.go .adm-k,.adm-sum.go .adm-i{opacity:1;transform:none}

/* 생활규정 카드: 번호 배지 + 줄별 목록 + 핵심어 강조 */
.rl-top{display:flex;align-items:center;gap:10px}
.rl-num{flex:0 0 auto;width:30px;height:30px;border-radius:999px;background:#102041;color:#fff;font-family:Poppins,sans-serif;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center}
.rl-tt{font-size:16.5px;font-weight:900;color:#102041;line-height:1.3}
.rl-list{list-style:none;margin:8px 0 0;padding:0;display:flex;flex-direction:column;gap:6px}
.rl-list li{position:relative;padding-left:13px;font-size:14px;line-height:1.55;color:#4a5268}
.rl-list li::before{content:"";position:absolute;left:0;top:.62em;width:5px;height:5px;border-radius:99px;background:#ec6926}
.rl-list b{color:#c4501a;font-weight:800}
#rules [style*="minmax(250px"] > div{border:1px solid #e9ecf3;transition:transform .25s ease,box-shadow .25s ease}
#rules [style*="minmax(250px"] > div:hover{transform:translateY(-3px);box-shadow:0 12px 26px rgba(16,32,65,.08)}

/* 특화 프로그램: 체크 목록 */
.hl{color:#c4501a;font-weight:800}
#program [style*="minmax(300px"] > div{border-top:4px solid #ec6926}
#program [style*="minmax(300px"] ul{list-style:none !important;padding-left:0 !important}
#program [style*="minmax(300px"] li{position:relative;padding-left:26px}
#program [style*="minmax(300px"] li::before{content:"";position:absolute;left:0;top:.2em;width:17px;height:17px;border-radius:99px;background:#ec6926 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12.5l4.5 4.5L19 7.5'/%3E%3C/svg%3E") center/11px no-repeat}
#program [style*="minmax(300px"] li b{color:#102041;font-weight:800}

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

  /* 특화 프로그램 (모바일): 좁은 2열 대신 1열로 펼쳐 가독성 확보 */
  #program [style*="minmax(340px"]{grid-template-columns:1fr !important;gap:10px !important}
  #program [style*="minmax(340px"] > div{padding:20px 18px !important;gap:10px !important;border-radius:16px !important}
  #program [style*="minmax(340px"] > div > strong{font-size:17px !important;line-height:1.35}
  #program [style*="minmax(340px"] > div > p{font-size:13.5px !important;line-height:1.75 !important}
  #program [style*="minmax(340px"] [style*="align-items: flex-end"]{gap:10px !important;padding-top:6px !important}
  #program [style*="minmax(340px"] [style*="font-size: 64px"]{font-size:46px !important}
  #program [style*="minmax(340px"] [style*="align-items: flex-end"] > span{font-size:12.5px !important;line-height:1.45 !important}
  #program [style*="minmax(340px"] span[style*="border-radius: 999px"]{font-size:12px !important;padding:5px 10px !important}
  #program [style*="minmax(300px"]{grid-template-columns:1fr !important;gap:10px !important}
  #program [style*="minmax(300px"] > div{padding:18px 18px !important;gap:10px !important;border-radius:16px !important}
  #program [style*="minmax(300px"] > div > strong{font-size:16px !important}
  #program [style*="minmax(300px"] ul{font-size:13.5px !important;gap:8px !important;line-height:1.5 !important}

  /* 모집요강 표: 라벨 / 내용 카드형 */
  #admission [style*="flex: 0 0 180px"]{flex:0 0 100% !important;box-sizing:border-box;padding:10px 16px !important;font-size:13px !important}
  #admission [style*="flex: 0 0 180px"] + div{flex:0 0 100% !important;box-sizing:border-box;padding:12px 16px 14px !important;font-size:14px !important;line-height:1.65 !important;word-break:keep-all;overflow-wrap:anywhere}

  /* 하단 상담 CTA (모바일) */
  #apply > div{padding:44px 20px !important;gap:20px !important}
  #apply h2{font-size:23px !important}
  #apply p{font-size:13.5px !important}
  #apply [style*="flex: 0 1 360px"]{flex:1 1 100% !important}
  #apply a{min-height:54px !important;font-size:17px !important}

  /* 모집요강 요약 (모바일) */
  .adm-sum{margin-top:24px;gap:8px}
  .adm-key{grid-template-columns:1fr 1fr;gap:8px}
  .adm-k{padding:15px 16px;border-radius:14px;gap:5px}
  .adm-k.period{grid-column:1 / -1}
  .adm-k .lb{font-size:12px}
  .adm-k .mv{font-size:17px}
  .adm-k .mv small{display:block;font-size:12px;margin:2px 0 0}
  .adm-k .mv b{font-size:21px}
  .adm-k.hot .adm-tags{flex-direction:column;gap:2px}
  .adm-k.hot .adm-tags span{background:none;padding:0 0 0 9px;position:relative;font-size:11.5px;line-height:1.45}
  .adm-k.hot .adm-tags span::before{content:"";position:absolute;left:0;top:.6em;width:4px;height:4px;border-radius:9px;background:#102041}
  .adm-k .sv{font-size:12px;line-height:1.55}
  .adm-tags{gap:5px}
  .adm-tags span{font-size:11.5px;padding:4px 9px}
  .adm-info{grid-template-columns:1fr;padding:0 16px;border-radius:14px}
  .adm-i{grid-template-columns:1fr;gap:6px;padding:14px 0}
  .adm-i .lb{font-size:12.5px;color:#c4501a}
  .adm-i .vv{font-size:13.5px;line-height:1.6}
  .adm-i .note{font-size:12px;margin-top:6px}
  .adm-rows em{font-size:11px}
  .adm-steps{grid-template-columns:1fr 1fr;gap:6px}
  .adm-steps div{font-size:12.5px;padding:9px 10px}

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
  [data-grade] [role="tablist"]{display:grid !important;grid-template-columns:repeat(3,1fr);gap:6px !important}
  [data-grade] [role="tablist"] button{min-height:48px !important;padding:6px 4px !important;font-size:13px !important;line-height:1.3 !important;border-radius:12px !important}
  .tb-sub{display:block;margin-left:0;font-size:11px;opacity:.85}
  [data-grade] [role="tabpanel"]{padding:20px 14px !important;border-radius:16px !important;gap:16px !important;margin-top:14px !important}
  [data-grade] [role="tabpanel"] > div:first-child > strong{font-size:16.5px !important;line-height:1.4}
  [data-grade] [role="tabpanel"] > p{font-size:13.5px !important;line-height:1.7 !important}
  [data-grade] [style*="padding: 18px 0"]{grid-template-columns:1fr !important;gap:10px !important;padding:16px 0 !important}
  [data-grade] [style*="flex: 0 0 110px"]{justify-self:start;min-height:32px;padding:0 16px;font-size:14px !important}
  [data-grade] [style*="flex: 1 1 520px"] > div.cur-head{display:none !important}
  [data-grade] [style*="flex: 1 1 520px"] > div.cur-head + div{border-top:0}
  [data-grade] [style*="flex: 1 1 520px"] > div{grid-template-columns:1fr auto;grid-template-areas:"n l" "d d";gap:5px 10px !important;padding:12px 14px}
  [data-grade] [style*="flex: 1 1 520px"] > div > span:nth-child(1){grid-area:n;font-size:14px !important}
  [data-grade] [style*="flex: 1 1 520px"] > div > span:nth-child(2){grid-area:l;font-size:11px !important;padding:3px 9px}
  [data-grade] [style*="flex: 1 1 520px"] > div > span:nth-child(3){grid-area:d;font-size:13px !important;line-height:1.6 !important}

  /* 일과표: 1열 타임라인 */
  #schedule [style*="minmax(260px"]{grid-template-columns:1fr !important;grid-auto-flow:row;grid-template-rows:none;gap:8px !important}
  #schedule [style*="minmax(260px"] > div{grid-template-columns:92px 1fr;column-gap:12px;padding:13px 14px !important;border-radius:12px !important}
  #schedule [style*="minmax(260px"] > div > span:first-child{font-size:12.5px !important}
  #schedule [style*="minmax(260px"] > div > strong{font-size:15px !important}
  #schedule [style*="minmax(260px"] > div > span:last-child{font-size:12.5px !important}
  #schedule ul{font-size:12.5px !important;padding-left:16px !important}

  /* 생활규정 (모바일): 1열 목록형 */
  #rules [style*="minmax(250px"]{grid-template-columns:1fr !important;gap:8px !important}
  #rules [style*="minmax(250px"] > div{padding:15px 16px !important;gap:0 !important;border-radius:14px !important}
  #rules [style*="minmax(250px"] > div:last-child:nth-child(odd){grid-column:auto}
  .rl-num{width:26px;height:26px;font-size:11px}
  .rl-tt{font-size:15px}
  .rl-list{margin:6px 0 0 36px;gap:4px}
  .rl-list li{font-size:13px}
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
  root.querySelectorAll<HTMLButtonElement>('[data-grade] [role="tablist"] button').forEach((b) => {
    if (b.querySelector(".tb-sub")) return;
    const m = (b.textContent || "").trim().match(/^(.*?)\s*(\(.*\))$/);
    if (m) b.innerHTML = `${m[1]}<span class="tb-sub">${m[2]}</span>`;
  });

  // 커리큘럼 표 머리행
  root.querySelectorAll<HTMLElement>('[data-grade] [style*="flex: 1 1 520px"]').forEach((box) => {
    if (box.querySelector(":scope > .cur-head")) return;
    const h = document.createElement("div");
    h.className = "cur-head";
    h.innerHTML = "<span>과목</span><span>수준 · 시간</span><span>수업 내용</span>";
    box.prepend(h);
  });

  // 일과표 세로 순서용 행 수
  const sch = root.querySelector<HTMLElement>('#schedule [style*="minmax(260px"]');
  if (sch) sch.style.setProperty("--sch-rows", String(Math.ceil(sch.children.length / 2)));

  const escT = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // 생활규정 카드: 번호 배지 + 줄별 목록 + 핵심어(시간·벌점·금지/불가/필수) 강조
  root.querySelectorAll<HTMLElement>('#rules [style*="minmax(250px"] > div').forEach((card) => {
    if (card.dataset.rl) return;
    const st = card.querySelector("strong");
    const sp = card.querySelector("span");
    if (!st || !sp) return;
    const raw = (st.textContent || "").trim();
    const m = raw.match(/^(\d+)\s+(.*)$/);
    const lines = (sp.textContent || "").split("\n").map((l) => l.trim()).filter(Boolean);
    const mark = (l: string) =>
      escT(l).replace(/(\d{1,2}:\d{2}|벌점\s*\d+점|\d+점|\d+분|\d+일|\d+주|금지|불가|필수)/g, "<b>$1</b>");
    card.dataset.rl = "1";
    card.innerHTML =
      `<div class="rl-top">${m ? `<span class="rl-num">${escT(m[1])}</span>` : ""}<strong class="rl-tt">${escT(m ? m[2] : raw)}</strong></div>` +
      `<ul class="rl-list">${lines.map((l) => `<li>${mark(l)}</li>`).join("")}</ul>`;
  });

  // 특화 프로그램 하단 목록: 콜론 앞 키워드 굵게
  root.querySelectorAll<HTMLLIElement>('#program [style*="minmax(300px"] li').forEach((li) => {
    if (li.children.length || li.dataset.hl) return;
    const t = li.textContent || "";
    const k = t.indexOf(":");
    if (k > 0 && k < 14) {
      li.dataset.hl = "1";
      li.innerHTML = `<b>${escT(t.slice(0, k))}</b>${escT(t.slice(k))}`;
    }
  });

  // 모집요강 표 → 핵심 카드 + 정보 패널
  const admRow = root.querySelector<HTMLElement>('#admission [style*="flex: 0 0 180px"]');
  const admBox = admRow?.parentElement?.parentElement as HTMLElement | null | undefined;
  if (admBox) buildInfoSummary(admBox, false, !!reduce, cleanups);

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


/* ───────────────────── 공용: 라벨/내용 표 → 핵심 카드 + 정보 패널 ───────────────────── */
const escH = (t: string) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function buildInfoSummary(box: HTMLElement, light: boolean, reduce: boolean, cleanups: Array<() => void>) {
  if (box.classList.contains("adm-orig")) return;
  try {
    const esc = escH;
    const rows = Array.from(box.children)
      .filter((r): r is HTMLElement => r instanceof HTMLElement && r.children.length >= 2)
      .map((r) => ({
        label: (r.children[0].textContent || "").trim(),
        lines: (r.children[1].textContent || "").split("\n").map((l) => l.trim()).filter(Boolean),
      }));
    if (!rows.length) return;
    const segs = (l: string) => l.split(/\s+·\s+/).map((x) => x.trim()).filter(Boolean);
    const tags = (arr: string[]) => `<div class="adm-tags">${arr.map((x) => `<span>${esc(x)}</span>`).join("")}</div>`;
    const money = (seg: string) => {
      const m = seg.match(/^([\d,]+)\s*원\s*(.*)$/);
      return m ? `<b>${esc(m[1])}</b>원${m[2] ? `<small>${esc(m[2])}</small>` : ""}` : esc(seg);
    };
    const note = (arr: string[]) => (arr.length ? `<span class="note">${arr.map(esc).join("<br>")}</span>` : "");
    const telify = (t: string) => esc(t).replace(/(0\d{1,2}-\d{3,4}-\d{4})/g, '<a href="tel:$1">$1</a>');
    const mainNote = (lines: string[]) => {
      const sg = segs(lines[0] || "");
      const main = esc(sg[0] || "").replace(/(\d{1,2}:\d{2}(?:\s?~\s?\d{1,2}:\d{2})?)/g, "<b>$1</b>");
      return `<strong class="mn">${main}</strong>${note([...sg.slice(1), ...lines.slice(1)])}`;
    };
    const hasOpen = rows.some((r) => r.label.includes("개강"));
    const keys: string[] = [];
    const infos: { html: string; full: boolean }[] = [];
    for (const { label, lines } of rows) {
      const L = esc(label);
      const first = lines[0] || "";
      const rest = lines.slice(1);
      const lb = `<span class="lb">${L}</span>`;
      if (label.includes("개강") || (!hasOpen && label.includes("기간"))) {
        keys[0] = `<div class="adm-k period">${lb}<div class="mv">${esc(first)}</div>${rest.length ? `<div class="sv">${rest.map(esc).join("<br>")}</div>` : ""}</div>`;
      } else if (label.includes("수강료")) {
        const sg = segs(first);
        keys[1] = `<div class="adm-k hot">${lb}<div class="mv">${money(sg[0] || first)}</div>${sg.length > 1 ? tags(sg.slice(1)) : ""}${rest.length ? `<div class="sv">${rest.map(esc).join("<br>")}</div>` : ""}</div>`;
      } else if (label.includes("예약금")) {
        const sg = segs(first);
        const sub = [...sg.slice(1), ...rest];
        keys[2] = `<div class="adm-k">${lb}<div class="mv">${money(sg[0] || first)}</div>${sub.length ? `<div class="sv">${sub.map(esc).join("<br>")}</div>` : ""}</div>`;
      } else if (label.includes("대상")) {
        infos.push({ html: `${lb}<div class="vv">${tags(segs(first))}${note(rest)}</div>`, full: false });
      } else if (label.includes("하원")) {
        const rr = lines.map((l) => {
          const m = l.match(/^\[(.+?)\]\s*(.*)$/);
          return m ? `<div><em>${esc(m[1])}</em><span>${esc(m[2])}</span></div>` : `<div><span>${esc(l)}</span></div>`;
        });
        infos.push({ html: `${lb}<div class="vv adm-rows">${rr.join("")}</div>`, full: false });
      } else if (label.includes("교육과정")) {
        infos.push({ html: `${lb}<div class="vv">${tags(segs(first))}${note(rest)}</div>`, full: true });
      } else if (label.includes("환불")) {
        const steps = segs(first).map((x, k) => `<div><b>${String(k + 1).padStart(2, "0")}</b>${esc(x)}</div>`).join("");
        infos.push({ html: `${lb}<div class="vv"><div class="adm-steps">${steps}</div>${note(rest)}</div>`, full: true });
      } else if (label.includes("상담")) {
        infos.push({ html: `${lb}<div class="vv">${lines.map(telify).join("<br>")}</div>`, full: false });
      } else if (label.includes("기간") || label.includes("시간")) {
        infos.push({ html: `${lb}<div class="vv">${mainNote(lines)}</div>`, full: false });
      } else {
        infos.push({ html: `${lb}<div class="vv">${lines.map(esc).join("<br>")}</div>`, full: false });
      }
    }
    const halves = infos.filter((x) => !x.full);
    if (halves.length % 2 === 1) halves[halves.length - 1].full = true;
    const ordered = [...infos.filter((x) => !x.full), ...infos.filter((x) => x.full)];
    const sum = document.createElement("div");
    sum.className = "adm-sum" + (light ? " light" : "");
    sum.innerHTML =
      `<div class="adm-key">${keys.filter(Boolean).join("")}</div>` +
      `<div class="adm-info">${ordered.map((x) => `<div class="adm-i${x.full ? " full" : ""}">${x.html}</div>`).join("")}</div>`;
    sum.querySelectorAll<HTMLElement>(".adm-k, .adm-i").forEach((el, k) => {
      el.style.transitionDelay = `${Math.min(k, 8) * 60}ms`;
    });
    box.before(sum);
    box.classList.add("adm-orig");
    if (reduce || !("IntersectionObserver" in window)) {
      sum.classList.add("go");
    } else {
      const sio = new IntersectionObserver((es) => {
        if (es.some((e) => e.isIntersecting)) {
          sum.classList.add("go");
          sio.disconnect();
        }
      }, { threshold: 0.12 });
      sio.observe(sum);
      cleanups.push(() => sio.disconnect());
    }
  } catch (err) {
    console.error("[winter] info summary", err);
  }
}

/** 텍스트 노드 안의 패턴만 강조 (기존 태그 유지) */
function markIn(el: Element, re: RegExp) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((tn) => {
    const t = tn.nodeValue || "";
    re.lastIndex = 0;
    if (!re.test(t)) return;
    re.lastIndex = 0;
    const span = document.createElement("span");
    span.innerHTML = escH(t).replace(re, (x) => `<b class="hl">${x}</b>`);
    tn.replaceWith(...Array.from(span.childNodes));
  });
}

/* ───────────────────── 2027 PRE 윈터스쿨 (평촌) ───────────────────── */
export const PRE_ENHANCE_CSS = `
.adm-sum.light{margin-top:0}
.adm-sum.light .adm-k{background:#f5f6fa}
.adm-sum.light .adm-k.hot{background:#ec6926}
.adm-sum.light .adm-info{border:1px solid #e4e7ee}
.pre-goal [style*="minmax(250px"] > div{transition:transform .25s ease,box-shadow .25s ease}
.pre-goal [style*="minmax(250px"] > div:hover{transform:translateY(-3px);box-shadow:0 12px 26px rgba(16,32,65,.08)}
.pre-tt-row{transition:transform .25s ease}
.pre-tt-row:hover{transform:translateX(4px)}

@media (max-width: 640px){
  .pre-hero > div[style*="padding: 88px 24px 72px"]{padding:52px 20px 40px !important;gap:28px !important}
  .pre-hero > div[aria-hidden="true"]{width:300px !important;height:300px !important;border-width:34px !important;right:-120px !important;top:-80px !important}
  .pre-hero [style*="flex: 0 1 380px"]{flex:1 1 100% !important;gap:8px !important}
  .pre-hero [style*="flex: 0 1 380px"] > div{padding:16px 18px !important}
  .pre-hero [style*="flex: 0 1 380px"] strong{font-size:21px !important}

  .pre-goal [style*="minmax(250px"]{grid-template-columns:1fr 1fr !important;gap:10px !important;margin-top:26px !important}
  .pre-goal [style*="minmax(250px"] > div{padding:16px 14px !important;gap:6px !important;border-radius:14px !important}
  .pre-goal [style*="minmax(250px"] > div > span{font-size:20px !important}
  .pre-goal [style*="minmax(250px"] > div > strong{font-size:15px !important}
  .pre-goal [style*="minmax(250px"] > div > p{font-size:12.5px !important;line-height:1.55 !important}

  .pre-tt > div{gap:22px !important}
  .pre-tt-row{display:grid !important;grid-template-columns:86px 1fr;gap:12px !important;align-items:start !important;padding:14px 16px !important}
  .pre-tt-row > div{flex:none !important}
  .pre-tt-row > div:first-child > span:first-child{font-size:12.5px !important}
  .pre-tt-row > div:first-child > span:last-child{font-size:13px !important}
  .pre-tt-row strong{font-size:15.5px !important}
  .pre-tt-row > div:last-child > span{font-size:12.5px !important}

  .pre-test [style*="minmax(320px"]{gap:10px !important;margin-top:24px !important}
  .pre-test [style*="minmax(320px"] > div{padding:20px 18px !important;gap:12px !important;border-radius:16px !important}
  .pre-test [style*="minmax(320px"] > div > strong{font-size:16.5px !important}
  .pre-test [style*="flex: 0 0 48px"]{flex:0 0 34px !important;height:34px !important;font-size:14px !important;border-radius:10px !important}
  .pre-test [style*="font-size: 17px"]{font-size:14.5px !important}
  .pre-test [style*="minmax(320px"] p{font-size:13px !important}
  .pre-test [style*="padding: 16px 18px"]{padding:12px 14px !important;gap:10px !important}

  .pre-next,.pre-reg{padding:0 20px 52px !important}
  .pre-next > div{padding:22px 20px !important;gap:16px !important;border-radius:16px !important}
  .pre-next strong{font-size:18px !important}
  .pre-next p{font-size:13.5px !important}
  .pre-next a{flex:1 1 100%;justify-content:center;box-sizing:border-box;min-height:50px !important}
  .pre-reg h2{margin-bottom:16px !important}
}
`;

export function enhancePre(root: ShadowRoot): () => void {
  const cleanups: Array<() => void> = [];
  const reduce = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const secs = Array.from(root.querySelectorAll("section"));
  secs[0]?.classList.add("pre-hero");
  secs.forEach((sec) => {
    if (sec.querySelector('[style*="minmax(250px"]')) sec.classList.add("pre-goal");
    if (sec.querySelector('[style*="flex: 0 0 150px"]')) sec.classList.add("pre-tt");
    if (sec.querySelector('[style*="minmax(320px"]')) sec.classList.add("pre-test");
    if (sec.querySelector('a[href="/admission/winter"]')) sec.classList.add("pre-next");
    if (sec.querySelector('[style*="flex: 0 0 160px"]')) sec.classList.add("pre-reg");
  });
  root.querySelectorAll<HTMLElement>('.pre-tt [style*="flex: 0 0 150px"]').forEach((l) => l.parentElement?.classList.add("pre-tt-row"));

  // 숫자·핵심어 강조
  root.querySelectorAll('.pre-goal [style*="minmax(250px"] p, .pre-test [style*="minmax(320px"] p').forEach((p) => {
    const el = p as HTMLElement;
    if (el.dataset.hl) return;
    el.dataset.hl = "1";
    markIn(el, /(\d[\d,]*원|\d+분|전액 환불|\d{1,2}:\d{2})/g);
  });

  // 등록 안내 표 → 핵심 카드 + 정보 패널
  const row = root.querySelector<HTMLElement>('[style*="flex: 0 0 160px"]');
  const box = row?.parentElement?.parentElement as HTMLElement | null | undefined;
  if (box) buildInfoSummary(box, true, reduce, cleanups);

  return () => cleanups.forEach((fn) => fn());
}
