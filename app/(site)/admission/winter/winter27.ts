// 2027 윈터스쿨 — pcjongro winter27 레퍼런스 UI·애니메이션 적용본 (자동 생성: CSS는 레퍼런스 그대로, 모바일은 720 기준값을 화면 폭에 맞춰 축소)

export const W27_CSS = `:host{display:block}
.jr-winter27{
  --navy:#102041; --navy2:#1b2c55; --navy3:#24386a; --orange:#ec6926; --accent:#c4501a;
  --ink:#1a2238; --sub:#4a5268; --mute:#5a6275; --line:#e4e7ee; --bg:#f5f6fa; --cream:#fff3ec;
  --fs-h2:40px; --fs-h3:26px; --fs-title:20px; --fs-body:16px; --fs-sm:14px; --fs-xs:13px; --fs-eye:14px;
  --sec-pad:96px; --side:24px; --gap:20px; --r:20px; --r-sm:14px;
  font-family:'Noto Sans KR',system-ui,-apple-system,sans-serif;color:var(--ink);word-break:keep-all;
  background:#fff;font-size:var(--fs-body);line-height:1.6;text-align:left;overflow:hidden;
  -webkit-text-size-adjust:100%;letter-spacing:-0.01em
}
.jr-winter27 *,.jr-winter27 *::before,.jr-winter27 *::after{box-sizing:border-box}
.jr-winter27 h1,.jr-winter27 h2,.jr-winter27 h3,.jr-winter27 p,.jr-winter27 figure,.jr-winter27 dl,.jr-winter27 dd{margin:0;padding:0}
.jr-winter27 h1,.jr-winter27 h2,.jr-winter27 h3,.jr-winter27 p,.jr-winter27 span,.jr-winter27 li,.jr-winter27 dd,.jr-winter27 dt,.jr-winter27 td,.jr-winter27 th,.jr-winter27 strong,.jr-winter27 button{font-family:inherit;word-break:keep-all;overflow-wrap:break-word}
.jr-winter27 .w-hero-title,.jr-winter27 .w-hero-title span,.jr-winter27 .en,.jr-winter27 .w-eye,.jr-winter27 .w-hero-eye{font-family:Poppins,'Noto Sans KR',sans-serif}
.jr-winter27 ul,.jr-winter27 ol{margin:0;padding:0;list-style:none}
.jr-winter27 li{list-style:none}
.jr-winter27 img{max-width:100%;display:block;border:0}
.jr-winter27 a{text-decoration:none}
.jr-winter27 button{font-family:inherit;-webkit-appearance:none;appearance:none;margin:0}
.jr-winter27 table{border-collapse:collapse;border-spacing:0;width:100%}
.jr-winter27 th,.jr-winter27 td{border:0}
.jr-winter27 strong,.jr-winter27 b{font-weight:700}
.jr-winter27 .en{font-family:Poppins,'Noto Sans KR',sans-serif}
.jr-winter27 .w-wrap{max-width:1200px;margin:0 auto;padding:0 var(--side);position:relative}
.jr-winter27 .w-sec{padding:var(--sec-pad) 0;position:relative}
.jr-winter27 .w-sec.gray{background:var(--bg)}
.jr-winter27 .w-sec.navy{background:var(--navy);color:#fff}
.jr-winter27 .w-eye{display:flex;align-items:center;gap:12px;margin-bottom:14px;font-family:Poppins,sans-serif;font-weight:700;font-size:var(--fs-eye);letter-spacing:.18em;color:var(--accent)}
.jr-winter27 .w-eye::before{content:'';width:32px;height:2px;background:currentColor;transform-origin:left;transition:transform .9s cubic-bezier(.2,.8,.2,1) .1s}
.jr-winter27 .navy .w-eye{color:var(--orange)}
.jr-winter27 .w-h2{font-size:var(--fs-h2);font-weight:900;color:var(--navy);line-height:1.3;letter-spacing:-0.03em}
.jr-winter27 .navy .w-h2{color:#fff}
.jr-winter27 .w-h2 .ln{display:block;overflow:hidden;padding-bottom:.06em}
.jr-winter27 .w-h2 .ln>span{display:inline-block;transition:transform 1s cubic-bezier(.2,.8,.2,1),opacity 1s}
.jr-winter27 .w-h2 .ln:nth-child(2)>span{transition-delay:.12s}
.jr-winter27 .w-h2 em{font-style:normal;color:var(--orange)}
.jr-winter27 .w-lead{margin-top:16px;font-size:calc(var(--fs-body) + 1px);line-height:1.7;color:var(--sub)}
.jr-winter27 .navy .w-lead{color:#c9d0e0}
.jr-winter27 .w-head{margin-bottom:44px}
.jr-winter27 .w-h3{font-size:var(--fs-h3);font-weight:900;letter-spacing:-0.02em}
.jr-winter27 .w-btn{position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:56px;padding:0 30px;border-radius:10px;font-size:18px;font-weight:700;transition:transform .25s,box-shadow .25s}
.jr-winter27 .w-btn svg{width:20px;height:20px;flex:none;transition:transform .25s}
.jr-winter27 .w-btn:hover{transform:translateY(-2px)}
.jr-winter27 .w-btn:hover svg.arr{transform:translateX(4px)}
.jr-winter27 .w-btn.or{background:var(--orange);color:#fff!important;box-shadow:0 10px 24px -8px rgba(236,105,38,.7)}
.jr-winter27 .w-btn.nv{background:var(--navy);color:#fff!important}
.jr-winter27 .w-btn.wh{background:#fff;color:var(--navy)!important}
.jr-winter27 .w-btn.shine::after{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-20deg);animation:w27shine 3.6s ease-in-out infinite}
.jr-winter27 .w-hero{background:radial-gradient(1200px 600px at 85% 10%,#1d3570 0%,var(--navy) 55%);color:#fff;position:relative;overflow:hidden}
.jr-winter27 .w-ring{position:absolute;right:-90px;top:-80px;width:540px;height:540px;border-radius:50%;border:60px solid var(--orange);opacity:.13;animation:w27float 9s ease-in-out infinite}
.jr-winter27 .w-ring.r2{right:auto;left:-160px;top:auto;bottom:-220px;width:420px;height:420px;border-width:2px;opacity:.25;animation-duration:12s;animation-direction:reverse}
.jr-winter27 .w-snow{position:absolute;inset:0;pointer-events:none}
.jr-winter27 .w-snow i{position:absolute;top:-10px;left:var(--x);width:var(--s);height:var(--s);border-radius:50%;background:#fff;opacity:var(--o);filter:blur(.4px);animation:w27snow var(--d) linear var(--dl) infinite}
.jr-winter27 .w-hero-in{display:flex;flex-wrap:wrap;gap:48px;align-items:flex-end;justify-content:space-between;padding-top:96px;padding-bottom:84px}
.jr-winter27 .w-hero-copy{flex:1 1 520px;min-width:0;display:flex;flex-direction:column;gap:20px}
.jr-winter27 .w-hero-eye{font-family:Poppins,sans-serif;font-weight:700;font-size:16px;letter-spacing:.2em;color:var(--orange)}
.jr-winter27 .w-hero-title{font-family:Poppins,sans-serif;font-weight:800;font-size:clamp(56px,8vw,104px);line-height:.95;letter-spacing:-.02em}
.jr-winter27 .w-hero-title .ch{display:inline-block;transition:transform .9s cubic-bezier(.2,.9,.25,1.2),opacity .7s}
.jr-winter27 .w-hero-lead{margin-top:6px;font-size:clamp(22px,2.6vw,30px);font-weight:700;line-height:1.4}
.jr-winter27 .w-hero-desc{font-size:17px;line-height:1.7;color:#c9d0e0}
.jr-winter27 .w-hero-cta{margin-top:10px}
.jr-winter27 .w-hero-dates{flex:0 1 390px;min-width:0;display:flex;flex-direction:column;gap:14px}
.jr-winter27 .w-date{border-radius:16px;padding:24px 28px;display:flex;justify-content:space-between;align-items:center;gap:16px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(6px)}
.jr-winter27 .w-date>div>span{display:block;font-size:14px;color:#c9d0e0}
.jr-winter27 .w-date>div>strong{display:block;font-size:26px;font-weight:900;margin-top:4px}
.jr-winter27 .w-date.main{background:var(--orange);border-color:var(--orange);color:var(--navy);box-shadow:0 18px 40px -14px rgba(236,105,38,.8)}
.jr-winter27 .w-date.main>div>span{color:var(--navy);font-weight:700}
.jr-winter27 .w-weeks b{font-weight:800}
.jr-winter27 .w-weeks{font-family:Poppins,sans-serif;font-weight:800;font-size:40px;line-height:1;text-align:right}
.jr-winter27 .w-weeks small{display:block;font-size:12px;letter-spacing:.12em;margin-top:2px}
.jr-winter27 .w-notice{background:var(--cream);border-bottom:1px solid #f7d5c2}
.jr-winter27 .w-notice .w-wrap{display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;padding-top:16px;padding-bottom:16px}
.jr-winter27 .w-badge-hot{display:inline-flex;align-items:center;gap:8px;height:30px;padding:0 14px;background:var(--accent);color:#fff;font-size:13px;font-weight:700;border-radius:999px}
.jr-winter27 .w-badge-hot::before{content:'';width:7px;height:7px;border-radius:50%;background:#fff;animation:w27blink 1.2s ease-in-out infinite}
.jr-winter27 .w-notice p{font-size:16px;color:var(--ink)}
.jr-winter27 .w-notice p strong{color:var(--accent)}
.jr-winter27 .w-nav{background:#fff;border-bottom:1px solid var(--line)}
.jr-winter27 .w-nav .w-wrap{display:flex;flex-wrap:wrap;gap:8px;padding-top:14px;padding-bottom:14px}
.jr-winter27 .w-nav a{display:inline-flex;align-items:center;min-height:44px;padding:0 18px;font-size:15px;font-weight:500;color:#3a4359;background:#f3f5f9;border-radius:999px;transition:background .2s,color .2s,transform .2s;white-space:nowrap}
.jr-winter27 .w-nav a:hover{background:var(--navy);color:#fff;transform:translateY(-2px)}
.jr-winter27 .w-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;counter-reset:st}
.jr-winter27 .w-step{position:relative;background:#fff;border-radius:18px;padding:28px 26px 26px;display:flex;flex-direction:column;gap:10px;overflow:hidden;transition:transform .3s,box-shadow .3s}
.jr-winter27 .w-step:hover{transform:translateY(-6px);box-shadow:0 22px 40px -22px rgba(16,32,65,.35)}
.jr-winter27 .w-step::before{content:'';position:absolute;left:0;top:0;height:4px;width:100%;background:linear-gradient(90deg,var(--orange),#ffb27f);transform:scaleX(0);transform-origin:left;transition:transform 1s cubic-bezier(.2,.8,.2,1) .35s}
.jr-winter27 .w-step.in::before{transform:scaleX(1)}
.jr-winter27 .w-step-top{display:flex;align-items:baseline;gap:10px}
.jr-winter27 .w-step-no{font-family:Poppins,sans-serif;font-size:30px;font-weight:800;color:var(--orange);line-height:1}
.jr-winter27 .w-step-name{font-size:20px;font-weight:900;color:var(--navy)}
.jr-winter27 .w-step strong{font-size:16px;color:var(--ink)}
.jr-winter27 .w-step p{font-size:15px;line-height:1.65;color:var(--sub)}
.jr-winter27 .w-step.last{background:var(--navy);color:#fff}
.jr-winter27 .w-step.last .w-step-name,.jr-winter27 .w-step.last strong{color:#fff}
.jr-winter27 .w-step.last p{color:#c9d0e0}
.jr-winter27 .w-test{border:2px solid var(--navy);border-radius:var(--r);overflow:hidden;background:#fff}
.jr-winter27 .w-test-hd{background:var(--navy);color:#fff;padding:24px 32px;display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;align-items:center}
.jr-winter27 .w-test-hd strong{font-size:22px;font-weight:900}
.jr-winter27 .w-test-hd span{font-size:15px;color:#c9d0e0}
.jr-winter27 .w-test-bd{padding:32px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.35fr);gap:40px}
.jr-winter27 .w-lab{display:block;font-size:14px;font-weight:700;color:var(--accent);margin-bottom:10px}
.jr-winter27 .w-blk+.w-blk{margin-top:26px}
.jr-winter27 .w-fee{font-size:17px}
.jr-winter27 .w-fee strong{font-size:24px;color:var(--navy);margin-right:4px}
.jr-winter27 .w-times{display:flex;flex-wrap:wrap;gap:8px}
.jr-winter27 .w-times span em{font-style:normal;font-weight:700;color:var(--accent)}
.jr-winter27 .w-times span{display:inline-flex;align-items:center;height:38px;padding:0 14px;border-radius:10px;background:var(--bg);font-size:15px;font-weight:500;color:var(--navy)}
.jr-winter27 .w-rounds{display:flex;flex-direction:column;gap:8px}
.jr-winter27 .w-round{display:grid;grid-template-columns:48px 1fr auto;align-items:center;gap:12px;padding:12px 16px;border-radius:12px;background:var(--bg);font-size:16px}
.jr-winter27 .w-round b{color:var(--navy)}
.jr-winter27 .w-round.end{opacity:.55}
.jr-winter27 .w-round.end .dt{text-decoration:line-through;text-decoration-color:rgba(90,98,117,.6)}
.jr-winter27 .w-round.on{background:var(--cream);box-shadow:inset 0 0 0 1.5px var(--orange)}
.jr-winter27 .w-st{font-size:13px;padding:4px 11px;border-radius:999px;color:var(--mute);background:#e6e9f0;white-space:nowrap}
.jr-winter27 .w-st.on{color:#fff;background:var(--accent);font-weight:700;animation:w27pulse 1.8s ease-out infinite}
.jr-winter27 .w-tbl{border-radius:14px;overflow:hidden;border:1px solid var(--line)}
.jr-winter27 .w-tbl th,.jr-winter27 .w-tbl td{padding:14px 16px;text-align:left;font-size:15px;line-height:1.5;vertical-align:middle}
.jr-winter27 .w-tbl thead th{background:var(--navy);color:#fff;font-weight:700;font-size:14px}
.jr-winter27 .w-tbl thead th .tp{display:inline-flex;width:26px;height:26px;border-radius:7px;background:var(--orange);color:var(--navy);align-items:center;justify-content:center;font-family:Poppins,sans-serif;font-weight:800;font-size:13px;margin-right:6px}
.jr-winter27 .w-tbl tbody tr{border-top:1px solid var(--line);transition:background .2s}
.jr-winter27 .w-tbl tbody tr:nth-child(even){background:#fafbfd}
.jr-winter27 .w-tbl tbody tr:hover{background:var(--cream)}
.jr-winter27 .w-tbl tbody th{color:var(--navy);font-weight:900;white-space:nowrap;background:var(--bg)}
.jr-winter27 .w-tbl .na{color:#a1a7b5}
.jr-winter27 .w-range table{table-layout:fixed}
.jr-winter27 .w-range thead th:first-child{width:92px}
.jr-winter27 .w-flow{margin-top:18px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;counter-reset:fl}
.jr-winter27 .w-flow li{position:relative;background:var(--bg);border-radius:12px;padding:14px 14px 14px 16px;display:flex;flex-direction:column;gap:2px}
.jr-winter27 .w-flow li:not(:last-child)::after{content:'';position:absolute;right:-9px;top:50%;width:8px;height:8px;border-top:2px solid var(--orange);border-right:2px solid var(--orange);transform:translateY(-50%) rotate(45deg);z-index:1}
.jr-winter27 .w-flow .e{font-family:Poppins,sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;color:var(--accent)}
.jr-winter27 .w-flow b{font-size:16px;color:var(--navy)}
.jr-winter27 .w-flow span{font-size:13px;color:var(--mute)}
.jr-winter27 .w-feat{margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:20px}
.jr-winter27 .w-feat>div{border-radius:var(--r);padding:34px;display:flex;flex-direction:column;gap:14px;border:1px solid var(--line);position:relative;overflow:hidden}
.jr-winter27 .w-feat>div.or{background:var(--orange);border-color:var(--orange);color:var(--navy)}
.jr-winter27 .w-feat>div.or::after{content:'';position:absolute;right:-50px;bottom:-50px;width:180px;height:180px;border-radius:50%;border:28px solid rgba(255,255,255,.18)}
.jr-winter27 .w-feat .ico{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:var(--navy);color:#fff}
.jr-winter27 .w-feat>div:not(.or) .ico{background:var(--cream);color:var(--accent)}
.jr-winter27 .w-feat .ico svg{width:26px;height:26px}
.jr-winter27 .w-feat strong.t{font-size:22px;font-weight:900;color:var(--navy)}
.jr-winter27 .w-feat p{font-size:16px;line-height:1.75;color:var(--sub);position:relative;z-index:1}
.jr-winter27 .w-feat .or p{color:var(--navy)}
.jr-winter27 .w-feat p strong{color:var(--navy)}
.jr-winter27 .w-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto}
.jr-winter27 .w-tags span{font-size:14px;padding:6px 12px;background:var(--bg);border-radius:999px;color:#3a4359}
.jr-winter27 .w-care-wrap{margin-top:20px}
.jr-winter27 .w-care{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.jr-winter27 .w-care>div{background:var(--bg);border-radius:var(--r);padding:30px 28px;display:flex;flex-direction:column;gap:16px;transition:transform .3s,box-shadow .3s}
.jr-winter27 .w-care>div:hover{transform:translateY(-6px);box-shadow:0 22px 40px -24px rgba(16,32,65,.4)}
.jr-winter27 .w-care .hd{display:flex;align-items:center;gap:12px}
.jr-winter27 .w-care .hd i{font-style:normal;font-family:Poppins,sans-serif;font-weight:800;font-size:13px;color:#fff;background:var(--navy);width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex:none}
.jr-winter27 .w-care strong{font-size:19px;font-weight:900;color:var(--navy)}
.jr-winter27 .w-care li{position:relative;padding-left:26px;font-size:15px;line-height:1.6;color:#3a4359}
.jr-winter27 .w-care li+li{margin-top:9px}
.jr-winter27 .w-care li::before{content:'';position:absolute;left:2px;top:.42em;width:14px;height:14px;border-radius:50%;background:var(--orange) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5 9-10'/%3E%3C/svg%3E") center/9px no-repeat}
.jr-winter27 .w-dots{display:none}
.jr-winter27 .w-swipe-hint{display:none}
.jr-winter27 .w-adm{display:grid;grid-template-columns:1fr 1fr;gap:12px;grid-auto-flow:dense}
.jr-winter27 .w-adm>div{background:#fff;color:var(--ink);border-radius:16px;padding:22px 26px;display:grid;grid-template-columns:112px minmax(0,1fr);gap:16px;align-items:start;transition:transform .3s}
.jr-winter27 .w-adm>div:hover{transform:translateY(-3px)}
.jr-winter27 .w-adm>div.full{grid-column:1/-1}
.jr-winter27 .w-adm dt{font-size:14px;font-weight:700;color:var(--accent);padding-top:2px;display:flex;align-items:center;gap:8px}
.jr-winter27 .w-adm dt::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--orange);flex:none}
.jr-winter27 .w-adm dd{font-size:16px;line-height:1.65}
.jr-winter27 .w-adm dd .sub{display:block;font-size:14px;color:var(--mute);margin-top:4px}
.jr-winter27 .w-adm dd .big{font-weight:900;color:var(--navy);font-size:20px}
.jr-winter27 .w-adm>div.hi{background:linear-gradient(135deg,#fff,#fff3ec)}
.jr-winter27 .w-adm dl{margin:0}
.jr-winter27 .w-sch{margin-top:72px}
.jr-winter27 .w-subhd{display:flex;flex-direction:column;gap:8px;margin-bottom:22px}
.jr-winter27 .w-subhd p{font-size:15px;color:#c9d0e0}
.jr-winter27 .w-sch-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.jr-winter27 .w-sch-card{background:#fff;color:var(--ink);border-radius:18px;overflow:hidden;display:flex;flex-direction:column;transition:transform .3s}
.jr-winter27 .w-sch-card:hover{transform:translateY(-5px)}
.jr-winter27 .w-sch-card .hd{padding:22px 26px;display:flex;justify-content:space-between;align-items:center;gap:12px;background:var(--orange);color:var(--navy)}
.jr-winter27 .w-sch-card.b .hd{background:var(--navy2);color:#fff}
.jr-winter27 .w-sch-card .hd strong{font-size:20px;font-weight:900}
.jr-winter27 .w-sch-card .rate{font-size:15px;font-weight:700;white-space:nowrap}
.jr-winter27 .w-sch-card .rate b{font-family:Poppins,sans-serif;font-size:34px;font-weight:800;margin:0 2px;vertical-align:-3px}
.jr-winter27 .w-sch-card.b .rate b{color:var(--orange)}
.jr-winter27 .w-sch-card .bd{padding:6px 26px 20px;display:flex;flex-direction:column;flex:1}
.jr-winter27 .w-sch-card .row{display:grid;grid-template-columns:118px 1fr;gap:14px;padding:14px 0;border-bottom:1px solid var(--line)}
.jr-winter27 .w-sch-card .row:last-of-type{border-bottom:0}
.jr-winter27 .w-sch-card .row span{font-size:14px;font-weight:700;color:var(--accent)}
.jr-winter27 .w-sch-card .row p{font-size:15px;line-height:1.6}
.jr-winter27 .w-sch-card .note{margin-top:auto;padding-top:8px;font-size:13px;line-height:1.6;color:var(--mute)}
.jr-winter27 .w-notes{margin-top:18px;display:flex;flex-direction:column;gap:6px}
.jr-winter27 .w-notes li{position:relative;padding-left:14px;font-size:14px;line-height:1.7;color:#c9d0e0}
.jr-winter27 .w-notes li::before{content:'';position:absolute;left:0;top:.75em;width:5px;height:5px;border-radius:50%;background:currentColor;opacity:.7}
.jr-winter27 .w-notes.dk li{color:var(--sub)}
.jr-winter27 .w-ent{margin-top:72px}
.jr-winter27 .w-ent-tabs{display:none}
.jr-winter27 .w-ent-hint{display:none}
.jr-winter27 .w-ent-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.jr-winter27 .w-ent-card{background:var(--navy2);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:26px;display:flex;flex-direction:column;gap:14px}
.jr-winter27 .w-ent-card>strong{font-size:19px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.12)}
.jr-winter27 .w-ent-row{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start}
.jr-winter27 .w-ent-row b{min-width:86px;text-align:center;font-family:Poppins,sans-serif;font-size:13px;font-weight:700;padding:4px 8px;border-radius:7px;background:var(--orange);color:var(--navy)}
.jr-winter27 .w-ent-row:first-of-type b{background:#fff;color:var(--navy)}
.jr-winter27 .w-ent-row span{font-size:14px;line-height:1.6;color:#dfe4ef}
.jr-winter27 .w-ent-sch{margin-top:16px;font-size:14px;line-height:1.7;color:#c9d0e0}
.jr-winter27 .w-pre{border-radius:24px;background:var(--cream);padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:44px;position:relative;overflow:hidden}
.jr-winter27 .w-pre::before{content:'PRE';position:absolute;right:-10px;bottom:-40px;font-family:Poppins,sans-serif;font-weight:800;font-size:200px;line-height:1;color:rgba(236,105,38,.08);pointer-events:none}
.jr-winter27 .w-pre-copy{display:flex;flex-direction:column;gap:14px;position:relative}
.jr-winter27 .w-pre-copy .w-h2{font-size:calc(var(--fs-h2) - 6px)}
.jr-winter27 .w-pre-copy>p.d{font-size:16px;line-height:1.7;color:var(--sub)}
.jr-winter27 .w-pre-info{margin-top:6px;display:flex;flex-direction:column;gap:8px}
.jr-winter27 .w-pre-info div{display:grid;grid-template-columns:64px 1fr;gap:12px;font-size:16px;line-height:1.6}
.jr-winter27 .w-pre-info b{color:var(--navy)}
.jr-winter27 .w-pre-info small{display:block;font-size:14px;color:var(--mute)}
.jr-winter27 .w-tl{background:#fff;border-radius:18px;padding:26px 28px;position:relative;align-self:start}
.jr-winter27 .w-tl-t{font-size:14px;font-weight:700;color:var(--accent);margin-bottom:6px}
.jr-winter27 .w-tl ol{position:relative}
.jr-winter27 .w-tl li{position:relative;display:grid;grid-template-columns:118px 1fr;gap:18px;padding:16px 0 16px 0}
.jr-winter27 .w-tl li+li{border-top:1px dashed #f0d6c6}
.jr-winter27 .w-tl .tm{font-family:Poppins,sans-serif;font-size:15px;font-weight:700;color:var(--navy)}
.jr-winter27 .w-tl strong{display:block;font-size:17px;color:var(--ink)}
.jr-winter27 .w-tl span.ds{display:block;font-size:14px;color:var(--mute)}
.jr-winter27 .w-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px;position:relative}
.jr-winter27 .w-tab{min-height:50px;padding:0 26px;font-size:17px;font-weight:500;border:1px solid #cfd4df;border-radius:999px;background:#fff;color:#3a4359;cursor:pointer;transition:all .25s}
.jr-winter27 .w-tab:hover{border-color:var(--navy);color:var(--navy)}
.jr-winter27 .w-tab[aria-selected="true"]{background:var(--navy);border-color:var(--navy);color:#fff;font-weight:700;box-shadow:0 10px 22px -10px rgba(16,32,65,.6)}
.jr-winter27 .w-tab-hint{display:none}
.jr-winter27 .w-panel{background:#fff;border-radius:var(--r);padding:38px;display:flex;flex-direction:column;gap:22px}
.jr-winter27 .w-panel[hidden]{display:none!important}
.jr-winter27 .w-panel.anim{animation:w27panel .55s cubic-bezier(.2,.8,.2,1)}
.jr-winter27 .w-panel-hd{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.jr-winter27 .w-panel-hd span{font-size:14px;font-weight:700;color:#fff;background:var(--accent);padding:5px 12px;border-radius:999px}
.jr-winter27 .w-panel-hd strong{font-size:22px;font-weight:900;color:var(--navy)}
.jr-winter27 .w-panel>p.d{font-size:16px;line-height:1.75;color:var(--sub)}
.jr-winter27 .w-cur th,.jr-winter27 .w-cur td{padding:13px 16px;font-size:15px;vertical-align:middle}
.jr-winter27 .w-cur thead th{font-size:14px}
.jr-winter27 .w-cur td.sj{width:120px;background:var(--navy);color:#fff;font-weight:900;font-size:16px;text-align:center;border-bottom:1px solid rgba(255,255,255,.15)}
.jr-winter27 .w-cur tbody tr{background:#fff}
.jr-winter27 .w-cur tbody tr:nth-child(even){background:#fff}
.jr-winter27 .w-cur tbody tr.g1{border-top:2px solid var(--navy)}
.jr-winter27 .w-cur tbody tr:first-child{border-top:0}
.jr-winter27 .w-cur td.nm{font-weight:700;color:var(--ink);white-space:nowrap}
.jr-winter27 .w-cur td.mt{white-space:nowrap}
.jr-winter27 .w-cur td.ds{color:#3a4359;line-height:1.55}
.jr-winter27 .w-lv{display:inline-flex;align-items:center;height:24px;padding:0 9px;border-radius:6px;font-size:12px;font-weight:700;background:#eef1f8;color:var(--navy);margin-right:6px}
.jr-winter27 .w-lv.h{background:#fde4d6;color:var(--accent)}
.jr-winter27 .w-min{font-family:Poppins,sans-serif;font-size:14px;font-weight:600;color:var(--mute)}
.jr-winter27 .w-cur .mo-sj{display:none}
.jr-winter27 .w-cur .mo-mt{display:none}
.jr-winter27 .w-panel p.nt{font-size:13px;line-height:1.7;color:var(--mute)}
.jr-winter27 .w-day{position:relative;display:grid;grid-template-columns:repeat(8,1fr);gap:0}
.jr-winter27 .w-day::before{content:'';position:absolute;left:0;right:0;top:46px;height:3px;background:#e6e9f0;border-radius:3px}
.jr-winter27 .w-day .bar{position:absolute;left:0;right:0;top:46px;height:3px;background:linear-gradient(90deg,var(--navy),var(--orange));border-radius:3px;transform:scaleX(0);transform-origin:left;transition:transform 1.8s cubic-bezier(.4,0,.2,1) .2s}
.jr-winter27 .w-day.in .bar{transform:scaleX(1)}
.jr-winter27 .w-day li{position:relative;padding:0 8px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px}
.jr-winter27 .w-day .tm{font-family:Poppins,sans-serif;font-size:14px;font-weight:700;color:var(--accent);height:30px;display:flex;align-items:flex-end;white-space:nowrap}
.jr-winter27 .w-day .dot{width:18px;height:18px;border-radius:50%;background:#fff;border:3px solid var(--navy);margin:2px 0 12px;position:relative;z-index:1;transition:transform .4s}
.jr-winter27 .w-day li.hi .dot{border-color:var(--orange);background:var(--orange);box-shadow:0 0 0 6px rgba(236,105,38,.18)}
.jr-winter27 .w-day .cd{width:100%;border-radius:14px;padding:16px 10px;background:var(--bg);flex:1;display:flex;flex-direction:column;gap:6px}
.jr-winter27 .w-day li.hi .cd{background:var(--cream);box-shadow:inset 0 0 0 1.5px var(--orange)}
.jr-winter27 .w-day strong{font-size:16px;color:var(--navy);line-height:1.35}
.jr-winter27 .w-day span.ds{font-size:13px;line-height:1.55;color:var(--sub)}
.jr-winter27 .w-day li+li{margin-left:0}
.jr-winter27 .w-legend{display:flex;gap:18px;margin:0 0 22px;font-size:14px;color:var(--sub)}
.jr-winter27 .w-legend span{display:inline-flex;align-items:center;gap:8px}
.jr-winter27 .w-legend i{width:12px;height:12px;border-radius:4px;background:var(--bg);box-shadow:inset 0 0 0 1.5px #cfd4df}
.jr-winter27 .w-legend i.o{background:var(--cream);box-shadow:inset 0 0 0 1.5px var(--orange)}
.jr-winter27 .w-rules{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.jr-winter27 .w-rule{background:#fff;border-radius:16px;padding:22px 22px 24px;display:flex;flex-direction:column;gap:10px;transition:transform .3s,box-shadow .3s}
.jr-winter27 .w-rule:hover{transform:translateY(-5px);box-shadow:0 20px 34px -22px rgba(16,32,65,.4)}
.jr-winter27 .w-rule .hd{display:flex;align-items:center;gap:10px}
.jr-winter27 .w-rule .hd i{font-style:normal;font-family:Poppins,sans-serif;font-weight:800;font-size:13px;width:32px;height:32px;border-radius:50%;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;flex:none}
.jr-winter27 .w-rule strong{font-size:17px;color:var(--navy)}
.jr-winter27 .w-rule p{font-size:14px;line-height:1.65;color:var(--sub)}
.jr-winter27 .w-rule p+p{margin-top:2px}
.jr-winter27 .w-rule.warn{background:var(--navy)}
.jr-winter27 .w-rule.warn .hd i{background:var(--orange);color:var(--navy)}
.jr-winter27 .w-rule.warn strong{color:#fff}
.jr-winter27 .w-rule.warn p{color:#c9d0e0}
.jr-winter27 .w-pen-btn{margin-top:22px;display:inline-flex;align-items:center;gap:10px;min-height:50px;padding:0 22px;font-size:16px;font-weight:700;color:var(--navy);background:#fff;border:1px solid #cfd4df;border-radius:12px;cursor:pointer;transition:all .25s}
.jr-winter27 .w-pen-btn:hover{border-color:var(--navy)}
.jr-winter27 .w-pen-btn svg{width:18px;height:18px;transition:transform .3s}
.jr-winter27 .w-pen-btn[aria-expanded="true"] svg{transform:rotate(180deg)}
.jr-winter27 .w-pen{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s cubic-bezier(.2,.8,.2,1)}
.jr-winter27 .w-pen.open{grid-template-rows:1fr}
.jr-winter27 .w-pen>div{overflow:hidden}
.jr-winter27 .w-pen-box{margin-top:16px;background:#fff;border-radius:16px;padding:8px 0}
.jr-winter27 .w-pen-row{display:grid;grid-template-columns:150px 1fr;gap:20px;align-items:center;padding:16px 26px;border-bottom:1px solid var(--line)}
.jr-winter27 .w-pen-row b{display:inline-flex;align-items:center;justify-content:center;min-height:34px;padding:0 12px;border-radius:9px;font-size:15px;font-weight:900;color:var(--accent);background:#fff1ea;justify-self:start;white-space:nowrap}
.jr-winter27 .w-pen-row.l2 b{background:#fde0d0}
.jr-winter27 .w-pen-row.l3 b{background:#f9c7ab;color:#9e3f12}
.jr-winter27 .w-pen-row.l4 b{background:#f39a6b;color:#fff}
.jr-winter27 .w-pen-row.l5 b{background:var(--accent);color:#fff}
.jr-winter27 .w-pen-row.l6 b{background:#7a2509;color:#fff}
.jr-winter27 .w-pen-row span{font-size:14px;line-height:1.7;color:#3a4359}
.jr-winter27 .w-pen-box>p{padding:16px 26px 12px;font-size:13px;line-height:1.7;color:var(--mute)}
.jr-winter27 .w-fac{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.jr-winter27 .w-fac figure{position:relative;border-radius:16px;overflow:hidden;aspect-ratio:4/3;background:#eef0f5}
.jr-winter27 .w-fac img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.2,.8,.2,1)}
.jr-winter27 .w-fac figure:hover img{transform:scale(1.08)}
.jr-winter27 .w-fac figcaption{position:absolute;left:0;right:0;bottom:0;padding:34px 16px 14px;background:linear-gradient(180deg,transparent,rgba(16,32,65,.85));color:#fff;font-size:15px;font-weight:700}
.jr-winter27 .w-fac-ctl{display:none}
.jr-winter27 .w-meal{margin-top:24px;border-radius:18px;background:var(--bg);padding:26px 30px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.jr-winter27 .w-meal div{display:grid;grid-template-columns:46px 1fr;gap:14px;align-items:start}
.jr-winter27 .w-meal i{width:46px;height:46px;border-radius:12px;background:#fff;color:var(--accent);display:flex;align-items:center;justify-content:center}
.jr-winter27 .w-meal i svg{width:24px;height:24px}
.jr-winter27 .w-meal strong{display:block;font-size:16px;color:var(--navy);margin-bottom:4px}
.jr-winter27 .w-meal span{display:block;font-size:14px;line-height:1.6;color:var(--sub)}
.jr-winter27 .w-apply{background:var(--orange);position:relative;overflow:hidden}
.jr-winter27 .w-apply::before{content:'';position:absolute;left:-120px;top:-160px;width:420px;height:420px;border-radius:50%;border:56px solid rgba(255,255,255,.12);animation:w27float 10s ease-in-out infinite}
.jr-winter27 .w-apply .w-wrap{padding-top:72px;padding-bottom:72px;display:flex;flex-wrap:wrap;gap:32px;align-items:center;justify-content:space-between}
.jr-winter27 .w-apply-copy{flex:1 1 460px;min-width:0;display:flex;flex-direction:column;gap:12px;color:var(--navy)}
.jr-winter27 .w-apply-copy h2{font-size:clamp(26px,3vw,36px);font-weight:900;line-height:1.3}
.jr-winter27 .w-apply-copy p{font-size:16px;line-height:1.7;font-weight:500}
.jr-winter27 .w-apply-btns{flex:0 1 360px;display:flex;flex-direction:column;gap:12px;width:100%}
.jr-winter27 .w-apply-btns .w-btn{min-height:62px;font-size:19px;width:100%}
.jr-winter27.w-js [data-rv]{opacity:0;transition:opacity .9s cubic-bezier(.2,.8,.2,1),transform .9s cubic-bezier(.2,.8,.2,1),filter .9s;transition-delay:var(--dl,0s);will-change:opacity,transform}
.jr-winter27.w-js [data-rv="up"]{transform:translateY(46px)}
.jr-winter27.w-js [data-rv="left"]{transform:translateX(-60px)}
.jr-winter27.w-js [data-rv="right"]{transform:translateX(60px)}
.jr-winter27.w-js [data-rv="zoom"]{transform:scale(.88)}
.jr-winter27.w-js [data-rv="blur"]{transform:translateY(20px);filter:blur(10px)}
.jr-winter27.w-js [data-rv="flip"]{transform:perspective(900px) rotateX(18deg) translateY(40px);transform-origin:top}
.jr-winter27.w-js [data-rv].in{opacity:1;transform:none;filter:none}
.jr-winter27.w-js .w-eye::before{transform:scaleX(0)}
.jr-winter27.w-js .w-eye.in::before{transform:scaleX(1)}
.jr-winter27.w-js .w-h2 .ln>span{transform:translateY(105%);opacity:0}
.jr-winter27.w-js .w-h2.in .ln>span{transform:none;opacity:1}
.jr-winter27.w-js .w-hero-title .ch{transform:translateY(80%) rotate(8deg);opacity:0}
.jr-winter27.w-js .w-hero-title.in .ch{transform:none;opacity:1}
@media (min-width:641px) and (max-width:1100px){
  .jr-winter27 .w-steps{grid-template-columns:repeat(3,1fr)}
  .jr-winter27 .w-day{grid-template-columns:repeat(4,1fr);row-gap:24px}
  .jr-winter27 .w-day::before,.jr-winter27 .w-day .bar{display:none}
  .jr-winter27 .w-rules{grid-template-columns:repeat(3,1fr)}
}
.jr-winter27 .w-hero-cta{display:flex;flex-wrap:wrap;gap:10px}
.jr-winter27 .w-btn.gh{background:rgba(255,255,255,.06);color:#fff!important;border:1.5px solid rgba(255,255,255,.28);font-size:16px;font-weight:500;padding:0 22px}
.jr-winter27 .w-btn.gh:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.5)}
.jr-winter27 .w-btn.gh svg{width:18px;height:18px}
.jr-winter27 .w-date.sub2{background:var(--navy2)}
.jr-winter27 .w-res{border-radius:var(--r);overflow:hidden;background:var(--navy);position:relative}
.jr-winter27 .w-res::after{content:'';position:absolute;right:-70px;top:-90px;width:260px;height:260px;border-radius:50%;border:36px solid var(--orange);opacity:.1;pointer-events:none;animation:w27float 11s ease-in-out infinite}
.jr-winter27 .w-res-hd{padding:26px 32px 0;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;color:#fff;position:relative;z-index:1}
.jr-winter27 .w-res-hd strong{font-size:22px;font-weight:900}
.jr-winter27 .w-res-hd span{font-size:15px;color:#c9d0e0}
.jr-winter27 .w-res-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;padding:24px 32px 32px;position:relative;z-index:1}
.jr-winter27 .w-res-grid>div{background:var(--navy2);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:22px 20px;display:flex;flex-direction:column;gap:12px;transition:transform .3s,box-shadow .3s}
.jr-winter27 .w-res-grid>div:hover{transform:translateY(-5px);box-shadow:0 20px 36px -22px rgba(0,0,0,.6)}
.jr-winter27 .w-res-grid span{font-size:15px;font-weight:500;color:#c9d0e0}
.jr-winter27 .w-res-grid strong{font-size:16px;font-weight:700;color:#fff;line-height:1;white-space:nowrap}
.jr-winter27 .w-res-grid strong b{font-family:Poppins,sans-serif;font-size:44px;font-weight:800;margin-right:4px;letter-spacing:-.02em}
.jr-winter27 .w-res-grid>div.main{background:var(--orange);border-color:var(--orange);box-shadow:0 18px 40px -14px rgba(236,105,38,.8)}
.jr-winter27 .w-res-grid>div.main span{color:var(--navy);font-weight:700}
.jr-winter27 .w-res-grid>div.main strong{color:var(--navy)}
.jr-winter27 .w-ana{margin-top:20px;border-radius:var(--r);background:var(--bg);padding:36px 40px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:48px;align-items:center}
.jr-winter27 .w-ana-copy strong{display:block;font-size:22px;font-weight:900;color:var(--navy);line-height:1.4}
.jr-winter27 .w-ana-copy .sub{display:inline-flex;margin-top:10px;font-size:13px;font-weight:700;color:#fff;background:var(--accent);padding:4px 12px;border-radius:999px}
.jr-winter27 .w-ana-copy p{margin-top:16px;font-size:16px;line-height:1.75;color:var(--sub)}
.jr-winter27 .w-ana-copy p b{color:var(--accent);font-weight:900}
.jr-winter27 .w-bars{display:flex;flex-direction:column;gap:20px}
.jr-winter27 .w-bar .lb{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:9px;font-size:16px;font-weight:700;color:var(--navy)}
.jr-winter27 .w-bar .lb b{font-family:Poppins,sans-serif;font-size:26px;font-weight:800;color:var(--accent);line-height:1}
.jr-winter27 .w-bar .tr{height:12px;border-radius:999px;background:#e3e6ee;overflow:hidden}
.jr-winter27 .w-bar .tr i{display:block;height:100%;width:var(--w);border-radius:999px;background:linear-gradient(90deg,var(--navy),var(--orange));transform-origin:left;transition:transform 1.6s cubic-bezier(.2,.8,.2,1) var(--d,0s)}
.jr-winter27.w-js .w-bars .tr i{transform:scaleX(0)}
.jr-winter27.w-js .w-bars.in .tr i{transform:scaleX(1)}
.jr-winter27 .w-bars .ft{font-size:13px;color:var(--mute)}
.jr-winter27 .w-feat-stat{display:flex;align-items:center;gap:16px;margin-top:auto;padding-top:18px;border-top:1px solid rgba(16,32,65,.2);position:relative;z-index:1}
.jr-winter27 .w-feat-stat b{font-family:Poppins,sans-serif;font-size:48px;font-weight:800;line-height:1;color:var(--navy);letter-spacing:-.02em}
.jr-winter27 .w-feat-stat span{font-size:15px;font-weight:700;line-height:1.5;color:var(--navy)}
.jr-winter27 .w-rv{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.jr-winter27 .w-rv-card{position:relative;overflow:hidden;background:#fff;border-radius:var(--r);padding:30px 28px 26px;display:flex;flex-direction:column;gap:14px;transition:transform .3s,box-shadow .3s}
.jr-winter27 .w-rv-card:hover{transform:translateY(-6px);box-shadow:0 22px 40px -22px rgba(16,32,65,.35)}
.jr-winter27 .w-rv-card::before{content:'';position:absolute;left:0;top:0;height:4px;width:100%;background:linear-gradient(90deg,var(--orange),#ffb27f);transform:scaleX(0);transform-origin:left;transition:transform 1s cubic-bezier(.2,.8,.2,1) .35s}
.jr-winter27 .w-rv-card.in::before{transform:scaleX(1)}
.jr-winter27 .w-rv-card .q{width:34px;height:34px;color:var(--orange);flex:none}
.jr-winter27 .w-rv-card strong{font-size:19px;font-weight:900;line-height:1.45;color:var(--navy)}
.jr-winter27 .w-rv-card p{font-size:15px;line-height:1.7;color:var(--sub)}
.jr-winter27 .w-rv-card .who{margin-top:auto;padding-top:16px;border-top:1px solid var(--line);font-size:14px;font-weight:700;color:var(--accent)}
.jr-winter27 .w-rv-card.nv{background:var(--navy)}
.jr-winter27 .w-rv-card.nv strong{color:#fff}
.jr-winter27 .w-rv-card.nv p{color:#c9d0e0}
.jr-winter27 .w-rv-card.nv .who{border-top-color:rgba(255,255,255,.14);color:var(--orange)}
.jr-winter27 .w-fac-note{margin-top:16px;font-size:14px;color:var(--mute)}
@media (min-width:641px) and (max-width:1100px){
.jr-winter27 .w-res-grid{grid-template-columns:repeat(3,1fr)}
.jr-winter27 .w-rv{grid-template-columns:1fr 1fr}
}
@media (min-width:641px) and (max-width:900px){
.jr-winter27 .w-ana{grid-template-columns:1fr;gap:30px}
.jr-winter27 .w-test-bd{grid-template-columns:1fr}
.jr-winter27 .w-feat{grid-template-columns:1fr}
.jr-winter27 .w-care{grid-template-columns:1fr}
.jr-winter27 .w-ent-grid{grid-template-columns:1fr}
.jr-winter27 .w-pre{grid-template-columns:1fr}
.jr-winter27 .w-steps{grid-template-columns:1fr 1fr}
.jr-winter27 .w-rules{grid-template-columns:1fr 1fr}
.jr-winter27 .w-fac{grid-template-columns:repeat(2,1fr)}
}
.jr-winter27 .w-next{position:relative;overflow:hidden;border-radius:24px;background:var(--navy);color:#fff;padding:44px 48px;display:flex;flex-wrap:wrap;gap:28px;align-items:center;justify-content:space-between}
.jr-winter27 .w-next::after{content:'';position:absolute;right:-60px;top:-110px;width:300px;height:300px;border-radius:50%;border:40px solid var(--orange);opacity:.14;pointer-events:none;animation:w27float 10s ease-in-out infinite}
.jr-winter27 .w-next-copy{flex:1 1 460px;min-width:0;display:flex;flex-direction:column;gap:10px;position:relative;z-index:1}
.jr-winter27 .w-next-copy .w-eye{margin-bottom:0}
.jr-winter27 .w-next-copy strong{font-size:28px;font-weight:900;line-height:1.35}
.jr-winter27 .w-next-copy p{font-size:16px;line-height:1.7;color:#c9d0e0}
.jr-winter27 .w-next .w-btn{position:relative;z-index:1}
.jr-winter27 .w-adm dd a{color:var(--accent);font-weight:900}
@keyframes w27shine{0%,60%{left:-60%}85%,100%{left:130%}}
@keyframes w27float{0%,100%{transform:translate(0,0) rotate(0)}50%{transform:translate(-18px,22px) rotate(8deg)}}
@keyframes w27snow{0%{transform:translate(0,-10px)}100%{transform:translate(var(--dx),620px)}}
@keyframes w27blink{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.6)}}
@keyframes w27pulse{0%{box-shadow:0 0 0 0 rgba(196,80,26,.55)}100%{box-shadow:0 0 0 12px rgba(196,80,26,0)}}
@keyframes w27panel{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes w27nudge{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}
@keyframes w27tap{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes w27prog{from{width:0}to{width:100%}}
@media (max-width:640px){
.jr-winter27{--mo:min(calc(100vw / 720), 0.62px)}
.jr-winter27{
  --fs-h2:calc(50 * var(--mo)); --fs-h3:calc(38 * var(--mo)); --fs-title:calc(30 * var(--mo)); --fs-body:calc(25 * var(--mo)); --fs-sm:calc(23 * var(--mo)); --fs-xs:calc(21 * var(--mo)); --fs-eye:calc(21 * var(--mo));
  --sec-pad:calc(96 * var(--mo)); --side:calc(30 * var(--mo)); --gap:calc(16 * var(--mo)); --r:calc(26 * var(--mo)); --r-sm:calc(20 * var(--mo))
}
.jr-winter27 .w-head{margin-bottom:calc(40 * var(--mo))}
.jr-winter27 .w-eye{gap:calc(14 * var(--mo));margin-bottom:calc(16 * var(--mo))}
.jr-winter27 .w-eye::before{width:calc(40 * var(--mo));height:calc(3 * var(--mo))}
.jr-winter27 .w-lead{font-size:calc(24 * var(--mo));margin-top:calc(18 * var(--mo))}
.jr-winter27 .w-btn{min-height:calc(88 * var(--mo));padding:0 calc(40 * var(--mo));font-size:calc(28 * var(--mo));border-radius:calc(16 * var(--mo))}
.jr-winter27 .w-btn svg{width:calc(30 * var(--mo));height:calc(30 * var(--mo))}
.jr-winter27 .w-hero-in{padding-top:calc(90 * var(--mo));padding-bottom:calc(70 * var(--mo));gap:calc(44 * var(--mo))}
.jr-winter27 .w-hero-copy{flex-basis:100%;gap:calc(22 * var(--mo))}
.jr-winter27 .w-hero-eye{font-size:calc(22 * var(--mo))}
.jr-winter27 .w-hero-title{font-size:calc(124 * var(--mo))}
.jr-winter27 .w-hero-lead{font-size:calc(42 * var(--mo))}
.jr-winter27 .w-hero-desc{font-size:calc(25 * var(--mo))}
.jr-winter27 .w-hero-cta .w-btn{width:100%}
.jr-winter27 .w-hero-dates{flex-basis:100%;flex-direction:row;gap:calc(14 * var(--mo))}
.jr-winter27 .w-date{flex:1;padding:calc(26 * var(--mo)) calc(24 * var(--mo));border-radius:calc(22 * var(--mo));flex-direction:column;align-items:flex-start;gap:calc(10 * var(--mo))}
.jr-winter27 .w-date>div>span{font-size:calc(20 * var(--mo))}
.jr-winter27 .w-date>div>strong{font-size:calc(31 * var(--mo));letter-spacing:-.03em}
.jr-winter27 .w-date.main{position:relative}
.jr-winter27 .w-weeks{position:absolute;right:calc(20 * var(--mo));top:calc(20 * var(--mo));font-size:calc(40 * var(--mo))}
.jr-winter27 .w-weeks small{font-size:calc(14 * var(--mo))}
.jr-winter27 .w-ring{width:calc(420 * var(--mo));height:calc(420 * var(--mo));border-width:calc(46 * var(--mo));right:calc(-170 * var(--mo));top:calc(-120 * var(--mo))}
.jr-winter27 .w-notice .w-wrap{padding-top:calc(22 * var(--mo));padding-bottom:calc(22 * var(--mo));gap:calc(12 * var(--mo))}
.jr-winter27 .w-badge-hot{height:calc(40 * var(--mo));font-size:calc(20 * var(--mo));padding:0 calc(18 * var(--mo))}
.jr-winter27 .w-notice p{font-size:calc(23 * var(--mo));line-height:1.55}
.jr-winter27 .w-nav .w-wrap{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding-top:calc(18 * var(--mo));padding-bottom:calc(18 * var(--mo));gap:calc(10 * var(--mo));-webkit-mask-image:linear-gradient(90deg,#000 85%,transparent);mask-image:linear-gradient(90deg,#000 85%,transparent)}
.jr-winter27 .w-nav .w-wrap::-webkit-scrollbar{display:none}
.jr-winter27 .w-nav a{min-height:calc(62 * var(--mo));padding:0 calc(26 * var(--mo));font-size:calc(23 * var(--mo));flex:none}
.jr-winter27 .w-steps{grid-template-columns:1fr 1fr;gap:calc(14 * var(--mo))}
.jr-winter27 .w-step{padding:calc(26 * var(--mo)) calc(22 * var(--mo)) calc(24 * var(--mo));gap:calc(8 * var(--mo));border-radius:calc(22 * var(--mo))}
.jr-winter27 .w-step-no{font-size:calc(36 * var(--mo))}
.jr-winter27 .w-step-name{font-size:calc(30 * var(--mo))}
.jr-winter27 .w-step strong{font-size:calc(22 * var(--mo));line-height:1.4}
.jr-winter27 .w-step p{font-size:calc(21 * var(--mo));line-height:1.55}
.jr-winter27 .w-step.last{grid-column:1/-1}
.jr-winter27 .w-test{border-radius:calc(26 * var(--mo))}
.jr-winter27 .w-test-hd{padding:calc(28 * var(--mo)) calc(28 * var(--mo));flex-direction:column;align-items:flex-start;gap:calc(8 * var(--mo))}
.jr-winter27 .w-test-hd strong{font-size:calc(32 * var(--mo))}
.jr-winter27 .w-test-hd span{font-size:calc(21 * var(--mo))}
.jr-winter27 .w-test-bd{grid-template-columns:1fr;padding:calc(30 * var(--mo)) calc(26 * var(--mo));gap:calc(34 * var(--mo))}
.jr-winter27 .w-lab{font-size:calc(22 * var(--mo));margin-bottom:calc(14 * var(--mo))}
.jr-winter27 .w-blk+.w-blk{margin-top:calc(30 * var(--mo))}
.jr-winter27 .w-fee{font-size:calc(24 * var(--mo))}
.jr-winter27 .w-fee strong{font-size:calc(34 * var(--mo))}
.jr-winter27 .w-times{display:grid;grid-template-columns:repeat(3,1fr);gap:calc(10 * var(--mo))}
.jr-winter27 .w-times span{height:auto;padding:calc(14 * var(--mo)) calc(8 * var(--mo));font-size:calc(21 * var(--mo));flex-direction:column;justify-content:center;text-align:center;border-radius:calc(14 * var(--mo));line-height:1.35}
.jr-winter27 .w-times span em{font-style:normal;font-weight:700;color:var(--accent);font-size:calc(20 * var(--mo))}
.jr-winter27 .w-rounds{display:grid;grid-template-columns:1fr 1fr;gap:calc(10 * var(--mo))}
.jr-winter27 .w-round{grid-template-columns:auto 1fr;grid-template-rows:auto auto;padding:calc(16 * var(--mo)) calc(18 * var(--mo));font-size:calc(22 * var(--mo));gap:calc(4 * var(--mo)) calc(12 * var(--mo));border-radius:calc(16 * var(--mo))}
.jr-winter27 .w-round b{grid-row:1}
.jr-winter27 .w-round .w-st{grid-row:1;justify-self:end;font-size:calc(18 * var(--mo));padding:calc(4 * var(--mo)) calc(12 * var(--mo))}
.jr-winter27 .w-round .dt{grid-column:1/-1;grid-row:2;font-size:calc(21 * var(--mo))}
.jr-winter27 .w-round.on:last-child{grid-column:auto}
.jr-winter27 .w-tbl{border-radius:calc(18 * var(--mo))}
.jr-winter27 .w-tbl th,.jr-winter27 .w-tbl td{padding:calc(16 * var(--mo)) calc(12 * var(--mo));font-size:calc(21 * var(--mo));line-height:1.45}
.jr-winter27 .w-tbl thead th{font-size:calc(20 * var(--mo))}
.jr-winter27 .w-tbl thead th .tp{width:calc(32 * var(--mo));height:calc(32 * var(--mo));font-size:calc(17 * var(--mo));border-radius:calc(9 * var(--mo));margin-right:calc(4 * var(--mo))}
.jr-winter27 .w-range thead th:first-child{width:calc(100 * var(--mo))}
.jr-winter27 .w-range tbody th{white-space:normal;text-align:center}
.jr-winter27 .w-flow{gap:calc(12 * var(--mo));grid-template-columns:repeat(4,1fr)}
.jr-winter27 .w-flow li{padding:calc(16 * var(--mo)) calc(12 * var(--mo));border-radius:calc(16 * var(--mo));text-align:center;align-items:center}
.jr-winter27 .w-flow li:not(:last-child)::after{right:calc(-10 * var(--mo));width:calc(10 * var(--mo));height:calc(10 * var(--mo))}
.jr-winter27 .w-flow .e{font-size:calc(15 * var(--mo))}
.jr-winter27 .w-flow b{font-size:calc(24 * var(--mo))}
.jr-winter27 .w-flow span{font-size:calc(18 * var(--mo));line-height:1.35}
.jr-winter27 .w-feat{gap:calc(14 * var(--mo))}
.jr-winter27 .w-feat>div{padding:calc(28 * var(--mo)) calc(22 * var(--mo));gap:calc(14 * var(--mo));border-radius:calc(24 * var(--mo))}
.jr-winter27 .w-feat .ico{width:calc(58 * var(--mo));height:calc(58 * var(--mo));border-radius:calc(16 * var(--mo))}
.jr-winter27 .w-feat .ico svg{width:calc(32 * var(--mo));height:calc(32 * var(--mo))}
.jr-winter27 .w-feat strong.t{font-size:calc(27 * var(--mo));line-height:1.3}
.jr-winter27 .w-feat p{font-size:calc(21 * var(--mo));line-height:1.6}
.jr-winter27 .w-tags{gap:calc(8 * var(--mo))}
.jr-winter27 .w-tags span{font-size:calc(18 * var(--mo));padding:calc(6 * var(--mo)) calc(12 * var(--mo))}
.jr-winter27 .w-feat>div.or::after{width:calc(140 * var(--mo));height:calc(140 * var(--mo));border-width:calc(22 * var(--mo))}
.jr-winter27 .w-care-wrap{margin-top:calc(14 * var(--mo));margin-left:calc(var(--side) * -1);margin-right:calc(var(--side) * -1)}
.jr-winter27 .w-care{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;gap:calc(14 * var(--mo));padding:calc(6 * var(--mo)) var(--side) calc(10 * var(--mo));scroll-padding:0 var(--side)}
.jr-winter27 .w-care::-webkit-scrollbar{display:none}
.jr-winter27 .w-care>div{flex:0 0 78%;scroll-snap-align:start;padding:calc(30 * var(--mo)) calc(28 * var(--mo));border-radius:calc(24 * var(--mo));gap:calc(18 * var(--mo))}
.jr-winter27 .w-care .hd i{width:calc(46 * var(--mo));height:calc(46 * var(--mo));font-size:calc(19 * var(--mo));border-radius:calc(13 * var(--mo))}
.jr-winter27 .w-care strong{font-size:calc(30 * var(--mo))}
.jr-winter27 .w-care li{font-size:calc(23 * var(--mo));padding-left:calc(36 * var(--mo))}
.jr-winter27 .w-care li+li{margin-top:calc(12 * var(--mo))}
.jr-winter27 .w-care li::before{width:calc(22 * var(--mo));height:calc(22 * var(--mo));background-size:calc(13 * var(--mo));top:.3em}
.jr-winter27 .w-dots{display:flex;justify-content:center;gap:calc(10 * var(--mo));margin-top:calc(16 * var(--mo))}
.jr-winter27 .w-dots i{width:calc(12 * var(--mo));height:calc(12 * var(--mo));border-radius:calc(999 * var(--mo));background:#d3d8e3;transition:all .3s}
.jr-winter27 .w-dots i.on{width:calc(36 * var(--mo));background:var(--orange)}
.jr-winter27 .w-swipe-hint{display:flex;align-items:center;justify-content:flex-end;gap:calc(8 * var(--mo));font-size:calc(20 * var(--mo));color:var(--mute);margin:calc(26 * var(--mo)) 0 0}
.jr-winter27 .w-swipe-hint svg{width:calc(26 * var(--mo));height:calc(26 * var(--mo));animation:w27nudge 1.6s ease-in-out infinite}
.jr-winter27 .w-adm{grid-template-columns:1fr;gap:0;background:#fff;border-radius:calc(24 * var(--mo));overflow:hidden}
.jr-winter27 .w-adm>div{border-radius:0;padding:calc(24 * var(--mo)) calc(24 * var(--mo));grid-template-columns:calc(150 * var(--mo)) minmax(0,1fr);gap:calc(16 * var(--mo));border-bottom:1px solid var(--line)}
.jr-winter27 .w-adm>div:last-child{border-bottom:0}
.jr-winter27 .w-adm>div:hover{transform:none}
.jr-winter27 .w-adm dt{font-size:calc(21 * var(--mo));padding-top:calc(3 * var(--mo))}
.jr-winter27 .w-adm dt::before{width:calc(8 * var(--mo));height:calc(8 * var(--mo))}
.jr-winter27 .w-adm dd{font-size:calc(23 * var(--mo));line-height:1.55}
.jr-winter27 .w-adm dd .sub{font-size:calc(20 * var(--mo));margin-top:calc(6 * var(--mo))}
.jr-winter27 .w-adm dd .big{font-size:calc(30 * var(--mo))}
.jr-winter27 .w-sch{margin-top:calc(80 * var(--mo))}
.jr-winter27 .w-subhd{margin-bottom:calc(26 * var(--mo));gap:calc(12 * var(--mo))}
.jr-winter27 .w-subhd p{font-size:calc(22 * var(--mo));line-height:1.55}
.jr-winter27 .w-sch-cards{gap:calc(14 * var(--mo))}
.jr-winter27 .w-sch-card{border-radius:calc(22 * var(--mo))}
.jr-winter27 .w-sch-card .hd{flex-direction:column;align-items:flex-start;padding:calc(24 * var(--mo)) calc(22 * var(--mo));gap:calc(6 * var(--mo))}
.jr-winter27 .w-sch-card .hd strong{font-size:calc(27 * var(--mo))}
.jr-winter27 .w-sch-card .rate{font-size:calc(21 * var(--mo))}
.jr-winter27 .w-sch-card .rate b{font-size:calc(52 * var(--mo))}
.jr-winter27 .w-sch-card .bd{padding:calc(6 * var(--mo)) calc(22 * var(--mo)) calc(22 * var(--mo))}
.jr-winter27 .w-sch-card .row{grid-template-columns:1fr;gap:calc(4 * var(--mo));padding:calc(16 * var(--mo)) 0}
.jr-winter27 .w-sch-card .row span{font-size:calc(19 * var(--mo))}
.jr-winter27 .w-sch-card .row p{font-size:calc(21 * var(--mo));line-height:1.5}
.jr-winter27 .w-sch-card .note{font-size:calc(18 * var(--mo))}
.jr-winter27 .w-notes{gap:calc(10 * var(--mo));margin-top:calc(22 * var(--mo))}
.jr-winter27 .w-notes li{font-size:calc(21 * var(--mo));padding-left:calc(18 * var(--mo))}
.jr-winter27 .w-notes li::before{width:calc(7 * var(--mo));height:calc(7 * var(--mo))}
.jr-winter27 .w-ent{margin-top:calc(80 * var(--mo))}
.jr-winter27 .w-ent-hint{display:flex;align-items:center;gap:calc(10 * var(--mo));margin:0 0 calc(14 * var(--mo));font-size:calc(21 * var(--mo));font-weight:700;color:var(--orange)}
.jr-winter27 .w-ent-hint svg{width:calc(30 * var(--mo));height:calc(30 * var(--mo));flex:none;animation:w27tap 1.5s ease-in-out infinite}
.jr-winter27 .w-ent-tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:calc(8 * var(--mo));padding:calc(8 * var(--mo));background:rgba(255,255,255,.08);border-radius:calc(20 * var(--mo));margin-bottom:calc(16 * var(--mo))}
.jr-winter27 .w-ent-tabs button{min-height:calc(84 * var(--mo));border:0;border-radius:calc(14 * var(--mo));background:transparent;color:#c9d0e0;font-size:calc(22 * var(--mo));font-weight:700;line-height:1.3;cursor:pointer;transition:all .25s}
.jr-winter27 .w-ent-tabs button small{display:block;font-size:calc(18 * var(--mo));font-weight:500;opacity:.8}
.jr-winter27 .w-ent-tabs button[aria-selected="true"]{background:var(--orange);color:var(--navy);box-shadow:0 calc(10 * var(--mo)) calc(22 * var(--mo)) calc(-10 * var(--mo)) rgba(236,105,38,.9)}
.jr-winter27 .w-ent-grid{display:block}
.jr-winter27 .w-ent-card{padding:calc(28 * var(--mo)) calc(26 * var(--mo));border-radius:calc(24 * var(--mo));gap:calc(20 * var(--mo))}
.jr-winter27 .w-ent-card:not(.on){display:none}
.jr-winter27 .w-ent-card.on{animation:w27panel .5s cubic-bezier(.2,.8,.2,1)}
.jr-winter27 .w-ent-card>strong{font-size:calc(28 * var(--mo))}
.jr-winter27 .w-ent-row{gap:calc(16 * var(--mo))}
.jr-winter27 .w-ent-row b{min-width:calc(132 * var(--mo));font-size:calc(20 * var(--mo));padding:calc(6 * var(--mo)) calc(10 * var(--mo));border-radius:calc(9 * var(--mo))}
.jr-winter27 .w-ent-row span{font-size:calc(23 * var(--mo));line-height:1.5}
.jr-winter27 .w-ent-sch{font-size:calc(21 * var(--mo));margin-top:calc(20 * var(--mo))}
.jr-winter27 .w-pre{grid-template-columns:1fr;padding:calc(44 * var(--mo)) calc(28 * var(--mo)) calc(30 * var(--mo));gap:calc(30 * var(--mo));border-radius:calc(28 * var(--mo))}
.jr-winter27 .w-pre::before{font-size:calc(200 * var(--mo))}
.jr-winter27 .w-pre-copy{gap:calc(16 * var(--mo))}
.jr-winter27 .w-pre-copy .w-h2{font-size:calc(44 * var(--mo))}
.jr-winter27 .w-pre-copy>p.d{font-size:calc(23 * var(--mo))}
.jr-winter27 .w-pre-info{display:grid;grid-template-columns:1fr 1fr;gap:calc(12 * var(--mo));margin-top:calc(10 * var(--mo))}
.jr-winter27 .w-pre-info div{grid-template-columns:1fr;gap:calc(4 * var(--mo));background:#fff;border-radius:calc(18 * var(--mo));padding:calc(18 * var(--mo)) calc(20 * var(--mo));font-size:calc(21 * var(--mo));line-height:1.45}
.jr-winter27 .w-pre-info b{font-size:calc(19 * var(--mo));color:var(--accent)}
.jr-winter27 .w-pre-info small{font-size:calc(18 * var(--mo))}
.jr-winter27 .w-tl{padding:calc(24 * var(--mo)) calc(24 * var(--mo));border-radius:calc(22 * var(--mo))}
.jr-winter27 .w-tl-t{font-size:calc(21 * var(--mo))}
.jr-winter27 .w-tl li{grid-template-columns:calc(180 * var(--mo)) 1fr;gap:calc(14 * var(--mo));padding:calc(20 * var(--mo)) 0}
.jr-winter27 .w-tl .tm{font-size:calc(22 * var(--mo))}
.jr-winter27 .w-tl strong{font-size:calc(25 * var(--mo))}
.jr-winter27 .w-tl span.ds{font-size:calc(21 * var(--mo))}
.jr-winter27 .w-tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:calc(8 * var(--mo));margin-bottom:calc(22 * var(--mo))}
.jr-winter27 .w-tab{min-height:calc(84 * var(--mo));padding:0 calc(6 * var(--mo));font-size:calc(22 * var(--mo));border-radius:calc(18 * var(--mo));line-height:1.3}
.jr-winter27 .w-tab small{display:block;font-size:calc(18 * var(--mo));font-weight:500;opacity:.75}
.jr-winter27 .w-tab-hint{display:flex;align-items:center;gap:calc(10 * var(--mo));margin:0 0 calc(14 * var(--mo));font-size:calc(21 * var(--mo));font-weight:700;color:var(--accent)}
.jr-winter27 .w-tab-hint svg{width:calc(30 * var(--mo));height:calc(30 * var(--mo));flex:none;animation:w27tap 1.5s ease-in-out infinite}
.jr-winter27 .w-panel{padding:calc(30 * var(--mo)) calc(22 * var(--mo));gap:calc(22 * var(--mo));border-radius:calc(26 * var(--mo))}
.jr-winter27 .w-panel-hd{gap:calc(12 * var(--mo))}
.jr-winter27 .w-panel-hd span{font-size:calc(19 * var(--mo));padding:calc(6 * var(--mo)) calc(14 * var(--mo))}
.jr-winter27 .w-panel-hd strong{font-size:calc(30 * var(--mo));line-height:1.35}
.jr-winter27 .w-panel>p.d{font-size:calc(22 * var(--mo));line-height:1.65}
.jr-winter27 .w-cur thead{display:none}
.jr-winter27 .w-cur td.sj{display:none}
.jr-winter27 .w-cur tr.mo-sj{display:table-row}
.jr-winter27 .w-cur tr.mo-sj td{background:var(--navy);color:#fff;font-size:calc(22 * var(--mo));font-weight:900;padding:calc(12 * var(--mo)) calc(18 * var(--mo));text-align:left}
.jr-winter27 .w-cur tr.mo-sj td small{font-weight:500;font-size:calc(18 * var(--mo));opacity:.7;margin-left:calc(8 * var(--mo))}
.jr-winter27 .w-cur tbody tr.g1{border-top:0}
.jr-winter27 .w-cur td{padding:calc(16 * var(--mo)) calc(14 * var(--mo));font-size:calc(21 * var(--mo))}
.jr-winter27 .w-cur td.nm{white-space:normal;width:42%;font-size:calc(22 * var(--mo));vertical-align:top;line-height:1.35}
.jr-winter27 .w-cur td.mt{display:none}
.jr-winter27 .w-cur .mo-mt{display:flex;flex-wrap:wrap;gap:calc(6 * var(--mo));margin-top:calc(8 * var(--mo));font-weight:400}
.jr-winter27 .w-cur td.ds{vertical-align:top;line-height:1.5}
.jr-winter27 .w-lv{height:calc(30 * var(--mo));padding:0 calc(10 * var(--mo));font-size:calc(17 * var(--mo));border-radius:calc(8 * var(--mo));margin-right:0}
.jr-winter27 .w-min{font-size:calc(17 * var(--mo));display:inline-flex;align-items:center;height:calc(30 * var(--mo))}
.jr-winter27 .w-panel p.nt{font-size:calc(19 * var(--mo))}
.jr-winter27 .w-legend{font-size:calc(20 * var(--mo));gap:calc(24 * var(--mo));margin-bottom:calc(24 * var(--mo))}
.jr-winter27 .w-legend i{width:calc(18 * var(--mo));height:calc(18 * var(--mo));border-radius:calc(5 * var(--mo))}
.jr-winter27 .w-day{display:block;padding-left:0}
.jr-winter27 .w-day::before{left:calc(196 * var(--mo));right:auto;top:calc(10 * var(--mo));bottom:calc(10 * var(--mo));width:calc(3 * var(--mo));height:auto}
.jr-winter27 .w-day .bar{left:calc(196 * var(--mo));right:auto;top:calc(10 * var(--mo));bottom:calc(10 * var(--mo));width:calc(3 * var(--mo));height:auto;transform:scaleY(0);transform-origin:top;background:linear-gradient(180deg,var(--navy),var(--orange))}
.jr-winter27 .w-day.in .bar{transform:scaleY(1)}
.jr-winter27 .w-day li{display:grid;grid-template-columns:calc(170 * var(--mo)) calc(40 * var(--mo)) 1fr;gap:0;align-items:center;text-align:left;padding:0;margin-bottom:calc(12 * var(--mo))}
.jr-winter27 .w-day .tm{height:auto;font-size:calc(21 * var(--mo));justify-content:flex-end;padding-right:calc(6 * var(--mo));white-space:normal;text-align:right;line-height:1.3}
.jr-winter27 .w-day .dot{width:calc(22 * var(--mo));height:calc(22 * var(--mo));margin:0 auto 0 calc(15 * var(--mo))}
.jr-winter27 .w-day .cd{padding:calc(18 * var(--mo)) calc(22 * var(--mo));border-radius:calc(18 * var(--mo));gap:calc(4 * var(--mo));margin-left:calc(8 * var(--mo))}
.jr-winter27 .w-day strong{font-size:calc(25 * var(--mo))}
.jr-winter27 .w-day span.ds{font-size:calc(20 * var(--mo))}
.jr-winter27 .w-rules{grid-template-columns:1fr 1fr;gap:calc(12 * var(--mo))}
.jr-winter27 .w-rule{padding:calc(24 * var(--mo)) calc(20 * var(--mo));border-radius:calc(20 * var(--mo));gap:calc(12 * var(--mo))}
.jr-winter27 .w-rule .hd{gap:calc(10 * var(--mo))}
.jr-winter27 .w-rule .hd i{width:calc(42 * var(--mo));height:calc(42 * var(--mo));font-size:calc(18 * var(--mo))}
.jr-winter27 .w-rule strong{font-size:calc(24 * var(--mo));line-height:1.3}
.jr-winter27 .w-rule p{font-size:calc(20 * var(--mo));line-height:1.5}
.jr-winter27 .w-rule.warn{grid-column:1/-1}
.jr-winter27 .w-pen-btn{width:100%;justify-content:center;min-height:calc(80 * var(--mo));font-size:calc(24 * var(--mo));border-radius:calc(18 * var(--mo));margin-top:calc(20 * var(--mo))}
.jr-winter27 .w-pen-btn svg{width:calc(26 * var(--mo));height:calc(26 * var(--mo))}
.jr-winter27 .w-pen-box{border-radius:calc(22 * var(--mo))}
.jr-winter27 .w-pen-row{grid-template-columns:1fr;gap:calc(10 * var(--mo));padding:calc(20 * var(--mo)) calc(22 * var(--mo))}
.jr-winter27 .w-pen-row b{min-height:calc(42 * var(--mo));font-size:calc(22 * var(--mo));padding:0 calc(16 * var(--mo));border-radius:calc(11 * var(--mo))}
.jr-winter27 .w-pen-row span{font-size:calc(21 * var(--mo));line-height:1.6}
.jr-winter27 .w-pen-box>p{font-size:calc(19 * var(--mo));padding:calc(18 * var(--mo)) calc(22 * var(--mo)) calc(14 * var(--mo))}
.jr-winter27 .w-fac-wrap{position:relative;margin:0 calc(var(--side) * -1)}
.jr-winter27 .w-fac{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;gap:calc(16 * var(--mo));padding:0 var(--side);scroll-padding:0 var(--side)}
.jr-winter27 .w-fac::-webkit-scrollbar{display:none}
.jr-winter27 .w-fac figure{flex:0 0 88%;scroll-snap-align:center;aspect-ratio:4/3;border-radius:calc(26 * var(--mo))}
.jr-winter27 .w-fac figcaption{font-size:calc(28 * var(--mo));padding:calc(70 * var(--mo)) calc(28 * var(--mo)) calc(26 * var(--mo))}
.jr-winter27 .w-fac-ctl{display:flex;align-items:center;justify-content:space-between;margin-top:calc(22 * var(--mo));padding:0 var(--side)}
.jr-winter27 .w-fac-bar{flex:1;height:calc(6 * var(--mo));border-radius:calc(6 * var(--mo));background:#e3e6ee;overflow:hidden;margin-right:calc(24 * var(--mo))}
.jr-winter27 .w-fac-bar i{display:block;height:100%;width:0;background:var(--orange);border-radius:calc(6 * var(--mo))}
.jr-winter27 .w-fac-bar i.run{animation:w27prog var(--t,3.2s) linear forwards}
.jr-winter27 .w-fac-num{font-family:Poppins,sans-serif;font-size:calc(24 * var(--mo));font-weight:700;color:var(--navy);min-width:calc(72 * var(--mo));text-align:right}
.jr-winter27 .w-fac-num span{color:#a1a7b5}
.jr-winter27 .w-meal{grid-template-columns:1fr;gap:calc(20 * var(--mo));padding:calc(28 * var(--mo)) calc(26 * var(--mo));border-radius:calc(24 * var(--mo));margin-top:calc(30 * var(--mo))}
.jr-winter27 .w-meal div{grid-template-columns:calc(64 * var(--mo)) 1fr;gap:calc(18 * var(--mo))}
.jr-winter27 .w-meal i{width:calc(64 * var(--mo));height:calc(64 * var(--mo));border-radius:calc(16 * var(--mo))}
.jr-winter27 .w-meal i svg{width:calc(32 * var(--mo));height:calc(32 * var(--mo))}
.jr-winter27 .w-meal strong{font-size:calc(24 * var(--mo))}
.jr-winter27 .w-meal span{font-size:calc(21 * var(--mo))}
.jr-winter27 .w-apply .w-wrap{padding-top:calc(80 * var(--mo));padding-bottom:calc(80 * var(--mo));gap:calc(36 * var(--mo))}
.jr-winter27 .w-apply-copy{flex-basis:100%;gap:calc(18 * var(--mo))}
.jr-winter27 .w-apply-copy h2{font-size:calc(44 * var(--mo))}
.jr-winter27 .w-apply-copy p{font-size:calc(23 * var(--mo))}
.jr-winter27 .w-apply-btns{flex-basis:100%;gap:calc(14 * var(--mo))}
.jr-winter27 .w-apply-btns .w-btn{min-height:calc(96 * var(--mo));font-size:calc(29 * var(--mo))}
.jr-winter27 .w-apply::before{width:calc(320 * var(--mo));height:calc(320 * var(--mo));border-width:calc(40 * var(--mo))}
.jr-winter27 .w-hero-cta{gap:calc(12 * var(--mo))}
.jr-winter27 .w-hero-cta .w-btn.gh{flex:1 1 0;width:auto;min-height:calc(76 * var(--mo));padding:0 calc(12 * var(--mo));font-size:calc(23 * var(--mo));gap:calc(8 * var(--mo))}
.jr-winter27 .w-btn.gh svg{width:calc(26 * var(--mo));height:calc(26 * var(--mo))}
.jr-winter27 .w-res{border-radius:calc(26 * var(--mo))}
.jr-winter27 .w-res::after{width:calc(220 * var(--mo));height:calc(220 * var(--mo));border-width:calc(30 * var(--mo))}
.jr-winter27 .w-res-hd{padding:calc(30 * var(--mo)) calc(28 * var(--mo)) 0;flex-direction:column;align-items:flex-start;gap:calc(8 * var(--mo))}
.jr-winter27 .w-res-hd strong{font-size:calc(32 * var(--mo))}
.jr-winter27 .w-res-hd span{font-size:calc(21 * var(--mo))}
.jr-winter27 .w-res-grid{grid-template-columns:repeat(3,1fr);gap:calc(12 * var(--mo));padding:calc(26 * var(--mo)) calc(24 * var(--mo)) calc(28 * var(--mo))}
.jr-winter27 .w-res-grid>div{padding:calc(22 * var(--mo)) calc(18 * var(--mo));border-radius:calc(20 * var(--mo));gap:calc(12 * var(--mo))}
.jr-winter27 .w-res-grid span{font-size:calc(20 * var(--mo))}
.jr-winter27 .w-res-grid strong{font-size:calc(22 * var(--mo))}
.jr-winter27 .w-res-grid strong b{font-size:calc(52 * var(--mo));margin-right:calc(3 * var(--mo))}
.jr-winter27 .w-ana{grid-template-columns:1fr;padding:calc(34 * var(--mo)) calc(28 * var(--mo));gap:calc(32 * var(--mo));border-radius:calc(26 * var(--mo));margin-top:calc(16 * var(--mo))}
.jr-winter27 .w-ana-copy strong{font-size:calc(29 * var(--mo))}
.jr-winter27 .w-ana-copy .sub{font-size:calc(19 * var(--mo));padding:calc(5 * var(--mo)) calc(14 * var(--mo));margin-top:calc(14 * var(--mo))}
.jr-winter27 .w-ana-copy p{font-size:calc(23 * var(--mo));line-height:1.6;margin-top:calc(18 * var(--mo))}
.jr-winter27 .w-bars{gap:calc(24 * var(--mo))}
.jr-winter27 .w-bar .lb{font-size:calc(23 * var(--mo));margin-bottom:calc(12 * var(--mo))}
.jr-winter27 .w-bar .lb b{font-size:calc(36 * var(--mo))}
.jr-winter27 .w-bar .tr{height:calc(16 * var(--mo))}
.jr-winter27 .w-bars .ft{font-size:calc(19 * var(--mo))}
.jr-winter27 .w-feat-stat{flex-direction:column;align-items:flex-start;gap:calc(8 * var(--mo));padding-top:calc(20 * var(--mo))}
.jr-winter27 .w-feat-stat b{font-size:calc(60 * var(--mo))}
.jr-winter27 .w-feat-stat span{font-size:calc(20 * var(--mo))}
.jr-winter27 .w-rv-wrap{margin-top:calc(14 * var(--mo));margin-left:calc(var(--side) * -1);margin-right:calc(var(--side) * -1)}
.jr-winter27 .w-rv{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;gap:calc(14 * var(--mo));padding:calc(6 * var(--mo)) var(--side) calc(10 * var(--mo));scroll-padding:0 var(--side)}
.jr-winter27 .w-rv::-webkit-scrollbar{display:none}
.jr-winter27 .w-rv-card{flex:0 0 82%;scroll-snap-align:start;padding:calc(32 * var(--mo)) calc(28 * var(--mo)) calc(28 * var(--mo));border-radius:calc(24 * var(--mo));gap:calc(16 * var(--mo))}
.jr-winter27 .w-rv-card:hover{transform:none;box-shadow:none}
.jr-winter27 .w-rv-card .q{width:calc(44 * var(--mo));height:calc(44 * var(--mo))}
.jr-winter27 .w-rv-card strong{font-size:calc(28 * var(--mo));line-height:1.4}
.jr-winter27 .w-rv-card p{font-size:calc(22 * var(--mo));line-height:1.6}
.jr-winter27 .w-rv-card .who{font-size:calc(20 * var(--mo));padding-top:calc(18 * var(--mo))}
.jr-winter27 .w-fac-note{font-size:calc(19 * var(--mo));margin-top:calc(18 * var(--mo));padding:0}
.jr-winter27 .w-next{padding:calc(40 * var(--mo)) calc(28 * var(--mo));border-radius:calc(26 * var(--mo));gap:calc(28 * var(--mo))}
.jr-winter27 .w-next::after{width:calc(240 * var(--mo));height:calc(240 * var(--mo));border-width:calc(32 * var(--mo))}
.jr-winter27 .w-next-copy{flex-basis:100%;gap:calc(14 * var(--mo))}
.jr-winter27 .w-next-copy strong{font-size:calc(38 * var(--mo))}
.jr-winter27 .w-next-copy p{font-size:calc(23 * var(--mo))}
.jr-winter27 .w-next .w-btn{width:100%}
.jr-winter27 .w-day.d3{display:block}
.jr-winter27 .w-date.pre>div>strong{margin-top:calc(26 * var(--mo))}
}
@media (prefers-reduced-motion:reduce){
  .jr-winter27 *,.jr-winter27 *::before,.jr-winter27 *::after{animation:none!important;transition:none!important}
  .jr-winter27.w-js [data-rv],.jr-winter27.w-js .w-h2 .ln>span,.jr-winter27.w-js .w-hero-title .ch{opacity:1!important;transform:none!important;filter:none!important}
  .jr-winter27 .w-snow{display:none}
}`;

/**
 * 레퍼런스(pcjongro winter27) 스크립트를 섀도 DOM용으로 옮긴 것.
 * 순차 등장 · 숫자 카운트업 · 스크롤 등장 · 바로가기 · 학년 탭 · 벌점 펼치기 · 스와이프 점 · 시설 자동 슬라이드
 */
export function initWinter27(shadow: ShadowRoot): () => void {
  const root = shadow.getElementById("jrw27");
  if (!root) return () => {};
  const isMo = window.matchMedia("(max-width: 640px)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cleanups: Array<() => void> = [];
  const all = <T extends Element = HTMLElement>(sel: string, base: ParentNode = root) =>
    Array.from(base.querySelectorAll<T>(sel) as unknown as ArrayLike<T>);

  /* 1. 순차 등장 지연값 */
  all("[data-stagger]").forEach((g) => {
    const step = parseFloat(g.getAttribute("data-stagger") || "") || 0.08;
    all<HTMLElement>("[data-rv]", g).forEach((el, i) => {
      if (!el.style.getPropertyValue("--dl")) el.style.setProperty("--dl", (i * step).toFixed(2) + "s");
    });
  });

  /* 2. 숫자 카운트업 */
  const countUp = (el: HTMLElement) => {
    const to = parseFloat(el.getAttribute("data-count") || "");
    const suf = el.getAttribute("data-suffix") || "";
    if (reduce || isNaN(to)) return;
    let t0 = 0;
    const dur = 1300;
    const f = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * e) + suf;
      if (p < 1) requestAnimationFrame(f);
    };
    el.textContent = "0" + suf;
    requestAnimationFrame(f);
  };

  /* 3. 스크롤 등장 */
  const targets = all("[data-rv],[data-rv-x],[data-line]");
  const reveal = (el: HTMLElement) => {
    if (el.classList.contains("in")) return;
    el.classList.add("in");
    const sc = (el.parentNode as HTMLElement | null)?.closest?.("[data-swipe],[data-auto]");
    if (sc) all("[data-rv]", sc).forEach((x) => x.classList.add("in"));
    all("[data-count]", el).forEach((c) => {
      const t = window.setTimeout(() => countUp(c), 300);
      cleanups.push(() => clearTimeout(t));
    });
  };
  if (!("IntersectionObserver" in window) || reduce) {
    targets.forEach(reveal);
  } else {
    root.classList.add("w-js");
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());
    const t = window.setTimeout(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) reveal(el);
      });
    }, 2500);
    cleanups.push(() => clearTimeout(t));
  }

  /* 4. 바로가기: 고정 헤더 높이만큼 띄워서 이동 */
  const headerOffset = () => {
    let max = 0;
    document.querySelectorAll<HTMLElement>("body *").forEach((n) => {
      if (n.offsetHeight > 0 && n.offsetHeight < 260) {
        const cs = getComputedStyle(n);
        if ((cs.position === "fixed" || cs.position === "sticky") && parseFloat(cs.top || "0") <= 1) {
          const r = n.getBoundingClientRect();
          if (r.top <= 1 && r.bottom > max && r.width > window.innerWidth * 0.6) max = r.bottom;
        }
      }
    });
    return max;
  };
  const onClick = (e: Event) => {
    const a = (e.target as Element | null)?.closest?.("a");
    if (!a) return;
    const h = a.getAttribute("href") || "";
    if (h === "#") {
      e.preventDefault();
      return;
    }
    if (h.charAt(0) === "#" && h.length > 1) {
      const t = root.querySelector(h);
      if (!t) return;
      e.preventDefault();
      const y = t.getBoundingClientRect().top + window.pageYOffset - headerOffset() - (isMo ? 10 : 16);
      window.scrollTo({ top: Math.max(0, y), behavior: reduce ? "auto" : "smooth" });
    }
  };
  root.addEventListener("click", onClick);
  cleanups.push(() => root.removeEventListener("click", onClick));

  /* 5. 커리큘럼 학년 탭 */
  const tabs = all("[data-tab]");
  tabs.forEach((b) =>
    b.addEventListener("click", () => {
      const i = b.getAttribute("data-tab");
      tabs.forEach((x) => x.setAttribute("aria-selected", x === b ? "true" : "false"));
      all(".w-panel").forEach((p) => {
        const on = p.id === "w27pan" + i;
        p.hidden = !on;
        if (on) {
          p.classList.add("in");
          p.classList.remove("anim");
          void p.offsetWidth;
          p.classList.add("anim");
        }
      });
    }),
  );

  /* 6. 입학전형 학년 탭 (모바일) */
  const ent = all("[data-ent]");
  ent.forEach((b) =>
    b.addEventListener("click", () => {
      const i = b.getAttribute("data-ent");
      ent.forEach((x) => x.setAttribute("aria-selected", x === b ? "true" : "false"));
      all("[data-ent-card]").forEach((c) => {
        const on = c.getAttribute("data-ent-card") === i;
        c.classList.toggle("on", on);
        if (on) c.classList.add("in");
      });
    }),
  );

  /* 7. 벌점 규정 펼치기 */
  const pb = root.querySelector<HTMLElement>("[data-pen]");
  const pen = root.querySelector<HTMLElement>(".w-pen");
  if (pb && pen)
    pb.addEventListener("click", () => {
      const open = !pen.classList.contains("open");
      pen.classList.toggle("open", open);
      pb.setAttribute("aria-expanded", String(open));
      const s = pb.querySelector("span");
      if (s) s.textContent = open ? "벌점 규정 접기" : "벌점 규정 자세히 보기";
    });

  if (!isMo) return () => cleanups.forEach((f) => f());

  /* 8. 스와이프 카드: 점 표시 */
  all("[data-swipe]").forEach((sw) => {
    const dots = all(".w-dots i", sw.parentNode as ParentNode);
    sw.addEventListener(
      "scroll",
      () => {
        const kids = sw.children;
        let best = 0;
        let bd = 1e9;
        const sl = sw.scrollLeft;
        for (let k = 0; k < kids.length; k++) {
          const d = Math.abs((kids[k] as HTMLElement).offsetLeft - sw.offsetLeft - sl - 30);
          if (d < bd) {
            bd = d;
            best = k;
          }
        }
        if (sl + sw.clientWidth >= sw.scrollWidth - 4) best = kids.length - 1;
        dots.forEach((d, j) => d.classList.toggle("on", j === best));
      },
      { passive: true },
    );
  });

  /* 9. 시설 사진 자동 슬라이드 */
  const fac = root.querySelector<HTMLElement>("[data-auto]");
  if (fac) {
    const figs = fac.children;
    const n = figs.length;
    let cur = 0;
    let timer: number | null = null;
    let busy = false;
    let visible = false;
    const DUR = 3200;
    const bar = root.querySelector<HTMLElement>(".w-fac-bar i");
    const num = root.querySelector<HTMLElement>(".w-fac-num b");
    const center = (i: number) => {
      const f = figs[i] as HTMLElement;
      return f.offsetLeft - fac.offsetLeft - (fac.clientWidth - f.offsetWidth) / 2;
    };
    const mark = (i: number) => {
      cur = i;
      if (num) num.textContent = String(i + 1);
      if (bar) {
        bar.classList.remove("run");
        void bar.offsetWidth;
        if (timer) {
          bar.style.setProperty("--t", DUR + "ms");
          bar.classList.add("run");
        }
      }
    };
    const go = (i: number) => {
      busy = true;
      fac.scrollTo({ left: Math.max(0, center(i)), behavior: "smooth" });
      mark(i);
      window.setTimeout(() => {
        busy = false;
      }, 700);
    };
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      if (bar) bar.classList.remove("run");
    };
    const play = () => {
      stop();
      if (reduce) return;
      timer = window.setInterval(() => go((cur + 1) % n), DUR);
      mark(cur);
    };
    fac.addEventListener(
      "scroll",
      () => {
        if (busy) return;
        let best = 0;
        let bd = 1e9;
        for (let k = 0; k < n; k++) {
          const d = Math.abs(center(k) - fac.scrollLeft);
          if (d < bd) {
            bd = d;
            best = k;
          }
        }
        if (best !== cur) {
          cur = best;
          if (num) num.textContent = String(best + 1);
        }
      },
      { passive: true },
    );
    let resume: number | null = null;
    fac.addEventListener("touchstart", stop, { passive: true });
    fac.addEventListener(
      "touchend",
      () => {
        if (resume) clearTimeout(resume);
        resume = window.setTimeout(() => {
          if (visible) play();
        }, 2500);
      },
      { passive: true },
    );
    const fio = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          visible = e.isIntersecting;
          if (visible) play();
          else stop();
        }),
      { threshold: 0.35 },
    );
    fio.observe(fac);
    cleanups.push(() => {
      fio.disconnect();
      stop();
      if (resume) clearTimeout(resume);
    });
  }

  return () => cleanups.forEach((f) => f());
}
