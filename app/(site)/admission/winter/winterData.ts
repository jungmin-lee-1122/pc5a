// 2027 윈터스쿨 — 사용자 제작 HTML(구조/애니메이션) 원본을 TS 모듈로 이관.
// 이미지 경로는 /winter/ 로 조정됨. public/winter/ 에 원본 이미지를 넣으세요.

export const WINTER_CSS = `:root{
  --navy-950:#04143a;
  --navy-900:#0a2050;
  --navy-800:#123071;
  --blue-600:#1f5fd0;
  --blue-100:#e5edfb;
  --yellow:#ffd83b;
  --ink:#16233c;
  --gray:#5c6a83;
  --bg:#f2f6fc;
  --ch-blue:#7fc3ff;       /* 달라지나요 섹션 배경(이미지 하단색) */
  --ch-light:#f3f6fc;      /* 상단 밝은 영역 */
  --ch-navy:#142a68;       /* 진한 남색 텍스트 */
  --ch-badge:#6a8bf8;      /* 번호 배지 */
  --ch-c1:#f2f2f2; --ch-c2:#fbe8e1; --ch-c3:#fdf4d7;
  --ask-blue:#4f85f7;      /* 말풍선 섹션 배경 */
  --ask-mint:#9be1fc;      /* 강조 민트 */
  --ask-bubble:#cbdcfd;    /* 밝은 말풍선 */
  --w-bg:#0a0a0b;          /* 겨울방학 섹션 배경 */
  --w-card:#1b1c1e;        /* 카드 배경 */
  --w-blue:#3f9ae0;        /* 포인트 블루 */
  --bridge-navy:#132d66;   /* 히어로 하단 정리색 */
  --news-dark:#06070d;     /* 뉴스 배너 바탕색(새 이미지 상단) */
  --fade-hero: clamp(40px, 3.5vw, 90px);   /* 기존 clamp(120px,14vw,290px) */
  --run-top:clamp(150px,17vw,360px);     /* 히어로 → 뉴스 전환 길이 */
  --line:#dfe7f4;
  --inner:2200px;              /* 큰 화면에서 콘텐츠 최대 폭 */
  --pad:clamp(20px,4vw,80px);  /* 좌우 여백 */
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
html,body{max-width:100%;overflow-x:hidden}
body{
  font-family:"Pretendard","Noto Sans KR",-apple-system,BlinkMacSystemFont,sans-serif;
  color:var(--ink);background:#fff;line-height:1.6;
  -webkit-font-smoothing:antialiased;word-break:keep-all;
}
.inner{width:100%;max-width:var(--inner);margin:0 auto}
strong{font-weight:800}

/* ---------- HERO (이미지 배너) ---------- */
.hero{
  position:relative;display:block;width:100%;
  background:#0a2258;   /* 이미지 로딩 전 색 */
  line-height:0;
}
.hero{--fall:44vw}            /* 눈이 떨어지는 거리 = 히어로 높이보다 조금 길게 */
.hero picture{display:block}
/* 눈 레이어 — 아래로 갈수록 사라지게(그라데이션 마스크) */
.snow-layer{
  position:absolute;inset:0;z-index:1;pointer-events:none;overflow:hidden;
  -webkit-mask-image:linear-gradient(180deg,#000 0%,#000 46%,rgba(0,0,0,.55) 74%,rgba(0,0,0,0) 96%);
  mask-image:linear-gradient(180deg,#000 0%,#000 46%,rgba(0,0,0,.55) 74%,rgba(0,0,0,0) 96%);
}
.snow-layer i{
  position:absolute;top:-4%;display:block;border-radius:50%;
  background:radial-gradient(circle at 34% 32%, #ffffff 0%, rgba(255,255,255,.85) 46%, rgba(255,255,255,.12) 100%);
  animation:snowFall linear infinite;
  will-change:transform;
}
@keyframes snowFall{
  0%{transform:translate3d(0,0,0) scale(.85);opacity:0}
  12%{opacity:1}
  100%{transform:translate3d(var(--drift,14px),var(--fall),0) scale(1.05);opacity:0}
}
.hero img{display:block;width:100%;height:auto}
/* 히어로 하단을 길게 남색으로 눌러 다음 배너로 넘어갈 준비 */
.hero::after{
  content:"";position:absolute;left:0;right:0;bottom:0;
  height:var(--fade-hero);
  background:linear-gradient(180deg,
    rgba(19,45,102,0) 0%,
    rgba(19,45,102,.35) 38%,
    rgba(19,45,102,.80) 72%,
    var(--bridge-navy) 100%);
  pointer-events:none;
}

/* ---------- NEWS BANNER (히어로 → 밝은 섹션 연결) ---------- */
.news-band{
  position:relative;width:100%;line-height:0;
  padding-top:var(--run-top);      /* 남색이 검정으로 넘어가는 활주로 */
  background-color:var(--news-dark);
}
/* 남색 → 검정 (이미지 상단까지 투명하게 이어져 이음새 제거) */
.news-band::before{
  content:"";position:absolute;left:0;right:0;top:0;z-index:2;
  height:calc(var(--run-top) + clamp(50px,5vw,110px));
  background:linear-gradient(180deg,
    var(--bridge-navy) 0%,
    #10224b 24%,
    #0a1330 46%,
    #070c1a 64%,
    var(--news-dark) 78%,
    rgba(6,7,13,0) 100%);
  pointer-events:none;
}
.news-band picture{position:relative;z-index:1;display:block}
.news-band img{display:block;width:100%;height:auto}
/* 하단은 news-foot.webp(이미지 마지막 줄 색을 그대로 이어받아 밝은 색으로 용해)가 담당 */
.news-foot{display:block;width:100%;margin-top:-1px;position:relative;z-index:1}

/* ---------- SECTION SHELL ---------- */
.section{width:100%;padding:clamp(80px,9vw,220px) var(--pad)}
.section-light{background:var(--bg)}
.section-white{background:#fff}
.section-navy{background:linear-gradient(160deg,#0b2358,#123674);color:#fff}
.h2{
  text-align:center;font-size:clamp(34px,4.6vw,98px);font-weight:900;
  letter-spacing:-.035em;line-height:1.3;margin-bottom:clamp(46px,5.4vw,130px);
}
.h2 .accent{color:var(--blue-600)}
.section-navy .h2 .accent{color:var(--yellow)}
.lead{
  text-align:center;color:var(--gray);
  font-size:clamp(15px,1.35vw,22px);line-height:1.9;
  margin:clamp(-40px,-3vw,-24px) auto clamp(36px,4vw,64px);max-width:900px;
}

/* ---------- GRIDS ---------- */
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(22px,2.4vw,64px)}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(14px,1.6vw,28px)}
.grid-5{display:grid;grid-template-columns:repeat(5,1fr);gap:clamp(12px,1.4vw,24px)}

/* ---------- GRADE CARDS ---------- */
.grade{
  position:relative;border-radius:10px;overflow:hidden;color:#fff;
  padding:clamp(44px,4.6vw,110px) clamp(32px,3.6vw,90px) clamp(110px,10vw,230px);
  min-height:clamp(380px,40vw,900px);
}
.g3{background:linear-gradient(150deg,#2f3f8f,#4b3f8e 60%,#3a4fa0)}
.g2{background:linear-gradient(150deg,#123a7d,#1d5aa8 60%,#17457f)}
.g1{background:linear-gradient(150deg,#0f5f6d,#187f7a 60%,#12666b)}
.grade::after{content:"";position:absolute;inset:0;background:radial-gradient(90% 70% at 80% 100%, rgba(255,255,255,.16), transparent 60%)}
.grade > *{position:relative;z-index:1}
.grade-tag{
  display:inline-block;background:rgba(255,255,255,.95);color:var(--navy-800);
  font-size:clamp(17px,1.7vw,36px);font-weight:800;
  padding:.35em 1.1em;border-radius:999px;margin-bottom:clamp(22px,2.4vw,56px);
}
.grade h3{
  white-space: nowrap;                    /* <br> 위치에서만 줄바꿈 */
  font-size: clamp(20px, 2vw, 46px);      /* 기존 clamp(26px,2.9vw,64px) 에서 축소 */
  font-weight: 900;
  line-height: 1.4;
  letter-spacing: -.03em;
  margin-bottom: .5em;
}
.grade p{
  white-space: nowrap;                    /* <br> 위치에서만 줄바꿈 */
  font-size: clamp(14px, 1.35vw, 30px);   /* 기존 clamp(17px,1.75vw,38px) 에서 축소 */
  line-height: 1.85;
  color: rgba(255,255,255,.9);
}
.grade .g-icon{
  position:absolute;right:clamp(20px,2vw,44px);bottom:clamp(18px,2vw,40px);
  width:clamp(56px,5.4vw,130px);height:clamp(56px,5.4vw,130px);color:rgba(255,255,255,.85);
}

/* ---------- CTA ---------- */
.cta{
  position:relative;width:100%;overflow:hidden;
  background:var(--ask-blue);   /* 말풍선 섹션과 같은 파랑 */
  color:#fff;padding:clamp(100px,11vw,270px) var(--pad);
}
.cta .inner{position:relative;z-index:2}
.cta-row{
  display:flex;align-items:center;justify-content:space-between;
  gap:clamp(40px,5vw,120px);flex-wrap:wrap;
}
.cta-copy{flex:1 1 520px;min-width:0}
.cta h2{
  font-size:clamp(38px,4.8vw,124px);font-weight:900;
  line-height:1.32;letter-spacing:-.04em;color:#eaf3ff;
  text-shadow:0 6px 22px rgba(6,32,92,.28);
}
.cta h2 .lead-line{color:#bfe0ff}          /* 첫 줄은 한 톤 낮게 */
.cta h2 .strong-line{color:#ffffff}        /* 둘째 줄 본문은 흰색 */
.cta h2 .accent{
  color:var(--yellow);
  box-shadow:inset 0 -.2em 0 rgba(255,216,59,.28);
}
.cta-sub{
  margin-top:.8em;font-size:clamp(20px,2vw,44px);
  color:#e5edfb;letter-spacing:-.03em;
}

.cta-sub .hl{
  background:var(--ask-mint);
  color:#04143a;
  font-weight:800;
  padding:.06em .3em .12em;
  border-radius:.14em;
  box-decoration-break:clone;
  -webkit-box-decoration-break:clone;
}
/* 오른쪽 정보 — 세로 스택, 우측 정렬 */
.info-list{
  flex:0 0 auto;display:flex;flex-direction:column;align-items:stretch;
  gap:clamp(18px,1.9vw,42px);text-align:left;
}
.info-list > div{
  display:grid;grid-template-columns:auto 1fr;
  column-gap:clamp(16px,1.5vw,34px);align-items:center;
}
.info-list .info-ic{grid-row:span 2}
.info-list dt,.info-list dd{grid-column:2}
.info-ic{
  flex:none;display:flex;align-items:center;justify-content:center;
  width:clamp(64px,5.6vw,132px);height:clamp(64px,5.6vw,132px);
  border-radius:50%;
  background:rgba(255,255,255,.15);
  border:clamp(2px,.16vw,4px) solid rgba(255,255,255,.5);
  box-shadow:0 12px 30px rgba(6,32,92,.22), inset 0 0 clamp(14px,1.4vw,32px) rgba(255,255,255,.14);
}
.info-list .icon{
  width:52%;height:52%;color:#fff;opacity:.98;margin:0;
}
.info-list dt{font-size:clamp(15px,1.4vw,32px);color:#bfd7ff;margin-bottom:.25em;letter-spacing:-.02em}
.info-list dd{font-size:clamp(21px,2vw,46px);font-weight:800;letter-spacing:-.03em;color:#fff;white-space:nowrap}
/* 배경 장식 — 말풍선 섹션의 오브제와 같은 계열, 다른 소품으로 */
.cta-deco{position:absolute;inset:0;z-index:1;pointer-events:none}
.cta-deco svg{position:absolute;filter:drop-shadow(0 18px 34px rgba(8,26,74,.28))}
.deco-note{left:clamp(0%,1.5vw,3%);bottom:7%;width:clamp(120px,11vw,250px);opacity:.9}
.deco-pencil{left:clamp(3%,5vw,10%);top:10%;width:clamp(66px,5.6vw,130px);opacity:.7;transform:rotate(-18deg)}
.deco-slim{left:clamp(11%,14vw,26%);bottom:4%;width:clamp(95px,8.4vw,190px);opacity:.6;transform:rotate(-6deg)}
.deco-cal{right:clamp(1%,3vw,6%);bottom:6%;width:clamp(100px,9vw,200px);opacity:.75;transform:rotate(7deg)}
/* 모바일 전용 소품 — 흐름 안에 놓아 텍스트를 가리지 않음 */
.cta-props{display:none}
.cta-props .prop{height:auto;filter:drop-shadow(0 12px 26px rgba(8,26,74,.3))}

/* ---------- CHANGE SECTION (무엇이 달라지나요) ---------- */
.change{
  position:relative;width:100%;overflow:hidden;
  /* 곡선·제목·책 아이콘은 배경 이미지가 담당 (2560x960) */
  background:url("change-bg.webp?v=1") top center / 100% auto no-repeat, var(--ch-blue);
  /* 이미지 안에서 파란 영역이 시작되는 지점(약 y=350/2560) 아래로 카드 배치 */
  padding:17.6vw var(--pad) clamp(90px,10vw,220px);
}
.change .inner{position:relative;z-index:1;max-width:2200px}

/* 카드 3장 */
.ch-cards{
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:clamp(20px,2.4vw,56px);
}
.ch-card{
  border-radius:clamp(18px,2vw,46px);
  padding:clamp(30px,3.2vw,76px) clamp(20px,2.2vw,50px) clamp(34px,3.6vw,84px);
  text-align:center;
  opacity:0;transform:translateY(26px) scale(.94);
}
.ch-card:nth-child(1){background:var(--ch-c1)}
.ch-card:nth-child(2){background:var(--ch-c2)}
.ch-card:nth-child(3){background:var(--ch-c3)}
.ch-badge{
  width:clamp(46px,4.4vw,102px);height:clamp(52px,5vw,116px);
  margin:0 auto clamp(24px,2.6vw,62px);
  border-radius:50%;background:var(--ch-badge);color:#fff;
  display:flex;align-items:center;justify-content:center;
  font-size:clamp(19px,1.9vw,44px);font-weight:800;letter-spacing:-.02em;
}
.ch-card h3{
  font-size:clamp(19px,2vw,44px);font-weight:800;
  color:var(--ch-navy);letter-spacing:-.04em;line-height:1.35;
}
.ch-card p{
  margin-top:clamp(20px,2.2vw,52px);
  font-size:clamp(14px,1.4vw,31px);line-height:1.75;
  color:#3c4b6b;letter-spacing:-.03em;
}
@keyframes cardIn{
  0%{opacity:0;transform:translateY(26px) scale(.94)}
  60%{opacity:1;transform:translateY(-6px) scale(1.02)}
  100%{opacity:1;transform:translateY(0) scale(1)}
}
.ch-cards.on .ch-card{animation:cardIn .6s cubic-bezier(.34,1.4,.64,1) forwards}
.ch-cards.on .ch-card:nth-child(1){animation-delay:.05s}
.ch-cards.on .ch-card:nth-child(2){animation-delay:.27s}
.ch-cards.on .ch-card:nth-child(3){animation-delay:.49s}

/* ---------- ASK SECTION (오해 말풍선) ---------- */
.ask{
  position:relative;width:100%;overflow:hidden;
  padding:clamp(90px,10vw,230px) var(--pad) clamp(96px,11vw,250px);
  background:var(--ask-blue);color:#fff;text-align:center;
}
.ask .inner{position:relative;z-index:2;max-width:2300px}
.ask-title{
  font-size:clamp(38px,5.4vw,112px);font-weight:900;
  letter-spacing:-.035em;line-height:1.26;
}
.ask-title .mint{color:var(--ask-mint)}
.ask-cursor{
  display:block;margin:clamp(-10px,-.6vw,0px) auto 0;
  width:clamp(44px,4vw,92px);height:auto;
  transform:translateX(clamp(150px,18vw,420px));
  filter:drop-shadow(0 6px 14px rgba(0,0,0,.25));
}
/* 말풍선 */
.bubbles{
  margin-top:clamp(44px,5vw,110px);
  display:flex;flex-direction:column;gap:clamp(30px,3.6vw,86px);
}
.brow{
  display:flex;flex-wrap:wrap;justify-content:center;align-items:center;
  gap:clamp(28px,4vw,110px);
}
.brow--a{transform:translateX(clamp(-70px,-3.5vw,0px))}
.brow--b{transform:translateX(clamp(0px,4vw,110px))}
.brow--c{transform:translateX(clamp(-56px,-2.4vw,0px))}
.bubble{
  border-radius:999px;
  padding:clamp(16px,1.5vw,36px) clamp(24px,2.4vw,60px);
  font-size:clamp(17px,1.6vw,40px);font-weight:600;letter-spacing:-.03em;
  line-height:1.4;white-space:nowrap;
  opacity:0;transform:scale(.34);
}
.bubble.ghost{background:rgba(255,255,255,.22);color:#fff}
.bubble.solid{background:var(--ask-bubble);color:#16305e;box-shadow:0 10px 26px rgba(10,30,80,.14)}
/* 어긋난 배치(애니메이션의 transform과 겹치지 않게 margin으로) */
.bubble.lift{margin-bottom:clamp(24px,2.4vw,58px)}
.bubble.drop{margin-top:clamp(24px,2.4vw,58px)}

/* 뽁뽁 등장 */
@keyframes pop{
  0%{opacity:0;transform:scale(.34)}
  55%{opacity:1;transform:scale(1.14)}
  75%{transform:scale(.95)}
  100%{opacity:1;transform:scale(1)}
}
.bubbles.on .bubble{animation:pop .52s cubic-bezier(.34,1.56,.64,1) forwards}
.bubbles.on .brow:nth-child(1) .bubble:nth-child(1){animation-delay:.05s}
.bubbles.on .brow:nth-child(1) .bubble:nth-child(2){animation-delay:.26s}
.bubbles.on .brow:nth-child(2) .bubble:nth-child(1){animation-delay:.47s}
.bubbles.on .brow:nth-child(2) .bubble:nth-child(2){animation-delay:.68s}
.bubbles.on .brow:nth-child(3) .bubble:nth-child(1){animation-delay:.89s}
.bubbles.on .brow:nth-child(3) .bubble:nth-child(2){animation-delay:1.10s}

/* 등장이 끝난 뒤: 마우스 오버 / 터치하면 흔들림 */
.bubble.done{opacity:1;transform:none;animation:none}
.bubble.done:hover,
.bubble.done:active{animation:wobble .58s cubic-bezier(.36,.07,.19,.97)}
@keyframes wobble{
  0%{transform:rotate(0) scale(1)}
  18%{transform:rotate(-2.6deg) scale(1.045)}
  36%{transform:rotate(2.1deg) scale(1.04)}
  54%{transform:rotate(-1.5deg) scale(1.02)}
  72%{transform:rotate(.9deg) scale(1.01)}
  100%{transform:rotate(0) scale(1)}
}

/* 마무리 */
.ask-stem{
  width:2px;height:clamp(58px,6vw,135px);
  background:rgba(255,255,255,.55);
  margin:clamp(44px,4.6vw,100px) auto clamp(34px,3.6vw,80px);
}
.stem-row{display:flex;align-items:center;justify-content:center}
.stem-book{display:none}   /* PC에서는 배경 오브제가 담당 */
.mo-br{display:none}
.ask-kicker{font-size:clamp(17px,1.6vw,34px);color:rgba(255,255,255,.85);letter-spacing:-.02em}
.ask-punch{
  margin-top:clamp(18px,1.9vw,42px);
  font-size:clamp(32px,4.6vw,94px);font-weight:900;letter-spacing:-.035em;line-height:1.32;
}
.ask-punch .mint{color:var(--ask-mint)}
/* 배경 책 장식 */
.ask-deco{position:absolute;inset:0;z-index:1;pointer-events:none}
.ask-deco svg{position:absolute;filter:drop-shadow(0 18px 34px rgba(8,26,74,.28))}
.deco-stack{left:clamp(0%,2vw,5%);top:46%;width:clamp(165px,15vw,340px)}
.deco-open{right:clamp(0%,2vw,4%);top:54%;width:clamp(175px,16vw,360px)}
.deco-tilt{right:clamp(3%,6vw,12%);top:8%;width:clamp(100px,9vw,200px);opacity:.75;transform:rotate(-14deg)}
.deco-small{left:clamp(5%,8vw,14%);top:11%;width:clamp(88px,8vw,175px);opacity:.6;transform:rotate(12deg)}

/* ---------- WINTER SECTION (다크) ---------- */
.winter-section{
  position:relative;width:100%;overflow:hidden;
  padding:clamp(96px,11vw,240px) var(--pad);
  color:#fff;
  /* 위: 앞 섹션 남색에서, 아래: 다음 흰 섹션으로 자연스럽게 */
  background:
    linear-gradient(180deg,var(--ask-blue) 0%,#26407e 40%,var(--w-bg) 100%) top/100% clamp(80px,10vw,200px) no-repeat,
    linear-gradient(180deg,var(--w-bg) 0%,#4a4c50 62%,#ffffff 100%) bottom/100% clamp(80px,10vw,200px) no-repeat,
    var(--w-bg);
}
/* 은은한 격자 패턴 */
.winter-section::before{
  content:"";position:absolute;inset:0;pointer-events:none;
  background-image:
    linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
  background-size:66px 66px;
  -webkit-mask-image:radial-gradient(46% 62% at 30% 45%, #000 0%, transparent 78%);
  mask-image:radial-gradient(46% 62% at 30% 45%, #000 0%, transparent 78%);
}
.winter-grid{
  position:relative;z-index:1;
  display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);
  gap:clamp(48px,6vw,120px);align-items:center;
  width:100%;max-width:2200px;margin:0 auto;
}
.winter-copy h2{
  font-size:clamp(34px,4.5vw,88px);font-weight:900;
  letter-spacing:-.035em;line-height:1.28;color:#fff;
}
/* 카드 번호와 같은 파랑으로 형광펜 효과 */
.winter-copy h2 .hl{
  background:var(--w-blue);color:#fff;
  padding:.04em .16em .1em;border-radius:.08em;
  box-decoration-break:clone;-webkit-box-decoration-break:clone;
}
.winter-copy p{
  margin-top:clamp(24px,2.6vw,48px);
  font-size:clamp(16px,1.7vw,33px);line-height:1.95;color:#fffff;
  text-align:center;
}

/* 오른쪽 카드 블록 */
.winter-cards{position:relative}
.winter-rule{
  width:clamp(90px,7vw,155px);height:5px;border-radius:3px;
  background:var(--w-blue);margin:0 auto clamp(26px,3vw,56px);
}
.wcards{
  position:relative;
  display:grid;grid-template-columns:1fr 1fr;
  gap:clamp(14px,1.5vw,30px);
}
.wcard{
  background:var(--w-card);border-radius:clamp(14px,1.5vw,28px);
  padding:clamp(30px,3.2vw,66px);
  min-height:clamp(300px,27vw,540px);
}
.wcard--right{text-align:right}
.wcard .n{font-size:clamp(20px,2vw,40px);font-weight:800;color:var(--w-blue);line-height:1}
.wcard .en{
  margin-top:.4em;font-size:clamp(20px,1.5vw,45px);font-weight:800;
  letter-spacing:.01em;color:#fff;line-height:1.2;
}
.wcard .ko{
  margin-top:.18em;font-size:clamp(20px,2vw,43px);font-weight:800;
  letter-spacing:-.03em;color:#fff;line-height:1.3;
}
.wcard ul{list-style:none;margin-top:clamp(20px,2.1vw,44px)}
.wcard li{font-size:clamp(15px,1.4vw,31px);line-height:1.8;color:#8b919b}
/* 가운데 원형 배지 */
.w-badge{
  position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2;
  width:clamp(175px,17.5vw,350px);height:clamp(175px,17.5vw,350px);
  border-radius:50%;background:var(--w-blue);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  text-align:center;line-height:1.5;color:#fff;
  box-shadow:0 0 0 clamp(11px,1.2vw,24px) var(--w-bg);
}
.w-badge small{font-size:clamp(13px,1.65vw,25px);font-weight:600;opacity:.95}
.w-badge b{font-size:clamp(17px,2.42vw,35px);font-weight:800;letter-spacing:-.02em}
/* 아래 화살표 + 결론 바 */
.w-arrow{
  width:0;height:0;margin:clamp(18px,1.9vw,38px) auto 0;
  border-left:clamp(20px,2vw,40px) solid transparent;
  border-right:clamp(20px,2vw,40px) solid transparent;
  border-top:clamp(23px,2.3vw,46px) solid var(--w-blue);
  filter:drop-shadow(0 8px 18px rgba(63,154,224,.45));
}
/* 결론 바 — 이 섹션의 결론이므로 강조 */
.w-conclusion{
  position:relative;overflow:hidden;isolation:isolate;
  margin:clamp(14px,1.5vw,30px) auto 0;
  background:linear-gradient(100deg,#2c86e6 0%,#3f9ae0 46%,#5cb4f4 100%);
  color:#eaf6ff;border-radius:999px;
  padding:clamp(24px,2.5vw,54px) clamp(32px,3.4vw,78px);
  text-align:center;font-weight:800;letter-spacing:-.035em;
  font-size:clamp(19px,2.2vw,50px);line-height:1.4;
  box-shadow:
    inset 0 0 0 clamp(1px,.12vw,3px) rgba(255,255,255,.28),
    0 22px 54px rgba(41,124,205,.45),
    0 0 clamp(40px,5vw,110px) rgba(63,154,224,.30);
  animation:glowPulse 3.4s ease-in-out infinite;
}
.w-conclusion b{
  color:#fdf4d7;font-weight:900;
  box-shadow:inset 0 -.22em 0 rgba(255,255,255,.28);
}
/* 빛 훑고 지나가기 */
.w-conclusion::after{
  content:"";position:absolute;top:0;bottom:0;left:-40%;width:35%;
  background:linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,.34),rgba(255,255,255,0));
  transform:skewX(-18deg);pointer-events:none;
  animation:sheen 4.2s ease-in-out infinite;
}
@keyframes glowPulse{
  0%,100%{box-shadow:
    inset 0 0 0 clamp(1px,.12vw,3px) rgba(255,255,255,.28),
    0 22px 54px rgba(41,124,205,.45),
    0 0 clamp(40px,5vw,110px) rgba(63,154,224,.26)}
  50%{box-shadow:
    inset 0 0 0 clamp(1px,.12vw,3px) rgba(255,255,255,.42),
    0 26px 62px rgba(41,124,205,.55),
    0 0 clamp(60px,7vw,150px) rgba(90,180,244,.42)}
}
@keyframes sheen{
  0%{left:-45%}
  55%,100%{left:115%}
}

/* ---------- 모집요강 · 등록절차 (썸머스쿨 sd- 스타일 이식) ---------- */
.rules-wrap{
  --sd-blue:#064bb7;
  --sd-blue2:#006fff;
  --sd-navy:#0e2550;
  --sd-sky:#eaf3ff;
  --sd-line:#d7e4f7;
  --sd-red:#ff4d39;
  --sd-max:2200px;
  display:block;background:#fff;color:var(--sd-navy);letter-spacing:-0.04em;
}
.rules-wrap section{position:relative;padding:clamp(90px,10vw,250px) var(--pad);overflow:hidden}
.rules-wrap .sd-inner{width:min(var(--sd-max),100%);margin:0 auto;position:relative;z-index:2}
.rules-wrap .sd-title{
  margin-top:0;font-size:clamp(44px,5.6vw,150px);
  color:var(--sd-blue);font-weight:950;text-align:center;
  letter-spacing:-0.045em;line-height:1.18;
}
.rules-wrap .sd-title em{font-style:normal;color:#222}
.rules-wrap .sd-desc{
  margin-top:clamp(24px,2.4vw,52px);
  font-size:clamp(19px,1.85vw,44px);line-height:1.6;
  color:#394760;font-weight:650;text-align:center;
}
/* 모집요강 */
.sd-detail{
  background-color:#eaf7ff;
  background-image:linear-gradient(180deg,#eaf7ff 0%,#f7fbff 62%,#ffffff 100%);
  overflow:hidden;
}
.sd-accordion{margin-top:clamp(44px,4.6vw,110px);display:grid;gap:14px}
.sd-acc-item{
  overflow:hidden;border-radius:clamp(20px,2.2vw,52px);
  border:1px solid var(--sd-line);background:#fff;
}
.sd-acc-title{
  width:100%;min-height:clamp(84px,8vw,190px);display:flex;align-items:center;
  gap:clamp(14px,1.4vw,32px);
  padding:0 clamp(30px,3vw,72px);color:var(--sd-navy);background:#fff;
  font-size:clamp(24px,2.4vw,56px);font-weight:950;text-align:left;
}
/* 원형 i 아이콘 */
.sd-acc-title .sd-i{
  flex:none;display:inline-flex;align-items:center;justify-content:center;
  width:clamp(34px,3.2vw,74px);height:clamp(34px,3.2vw,74px);
  border-radius:50%;background:var(--sd-blue);color:#fff;
  font-size:clamp(20px,1.9vw,44px);font-weight:950;
  font-family:Georgia,"Times New Roman",serif;font-style:italic;
  line-height:1;padding-bottom:.06em;
  box-shadow:0 8px 20px rgba(6,75,183,.28);
}
.sd-acc-content{padding:0 clamp(30px,3vw,72px) clamp(36px,3.6vw,84px)}
.sd-info-table{
  width:100%;border-collapse:collapse;overflow:hidden;
  border-top:clamp(3px,.3vw,7px) solid var(--sd-blue);
}
.sd-info-table th,.sd-info-table td{
  border-bottom:1px solid #dbe4f1;
  padding:clamp(17px,1.7vw,40px) clamp(18px,1.8vw,42px);
  font-size:clamp(17px,1.6vw,37px);line-height:1.55;text-align:left;
}
.sd-info-table th{
  width:clamp(170px,15vw,380px);background:#edf5ff;
  color:var(--sd-blue);font-weight:950;
}
.sd-info-table td{color:#2e3d57;font-weight:650}
.sd-course-note{
  margin-left:.4em;color:var(--sd-red);font-weight:900;
  font-size:.82em;letter-spacing:-.03em;white-space:nowrap;
}
.sd-notice{
  margin-top:clamp(20px,1.9vw,44px);color:var(--sd-red);
  font-size:clamp(15px,1.4vw,32px);line-height:1.5;font-weight:800;
}
/* 등록 절차 */
.sd-apply-flow{background:linear-gradient(180deg,#f7fbff 0%,#fff 100%)}
.sd-flow-grid{
  margin-top:clamp(46px,4.8vw,115px);
  display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(14px,1.5vw,34px);
}
.sd-flow-card{
  padding:clamp(28px,2.9vw,68px) clamp(20px,2vw,46px);
  border-radius:clamp(20px,2.2vw,52px);background:#fff;border:1px solid var(--sd-line);
  box-shadow:0 16px 34px rgba(10,69,150,.06);text-align:center;align-content:center;
}
.sd-flow-card small{color:var(--sd-blue);font-size:clamp(15px,1.4vw,32px);font-weight:950}
.sd-flow-card h3{margin-top:clamp(11px,1.1vw,26px);font-size:clamp(23px,2.2vw,50px);line-height:1.3}
.sd-flow-card p{
  margin-top:clamp(13px,1.3vw,30px);color:#53627a;
  font-size:clamp(16px,1.55vw,35px);line-height:1.5;font-weight:600;
}
@media (max-width:980px){
  .sd-flow-grid{grid-template-columns:1fr 1fr}
}
@media (max-width:640px){
  .rules-wrap .sd-title{font-size:38px}
  .rules-wrap .sd-desc{font-size:17px}
  .sd-flow-grid{grid-template-columns:1fr}
  .sd-acc-title{min-height:auto;padding:22px 20px;font-size:19px}
  .sd-acc-content{padding:0 20px 26px}
  .sd-info-table th,.sd-info-table td{display:block;width:100%;font-size:16px}
}

/* ===== 모바일 전용 배너 =====
   hero-mo 1080x1300 / news-mo 1080x800 / change-bg-mo 1080x760
   (히어로·뉴스는 <picture>로 교체, 달라지나요는 배경이라 CSS로 교체) */
@media (max-width:768px){
  .change{
    background:url("change-bg-mo.webp?v=1") top center / 100% auto no-repeat, var(--ch-blue);
    /* 곡선 최저점이 25.8vw → 여유를 두고 33vw부터 카드 시작 */
    padding-top:33vw;
  }
}

/* ---------- REVEAL ---------- */
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease}
.reveal.on{opacity:1;transform:none}

/* ---------- RESPONSIVE ---------- */
@media (max-width:1100px){
  .winter-grid{grid-template-columns:1fr;gap:clamp(28px,4vw,48px)}
  .winter-copy h2,.winter-copy p{text-align:center}
}
@media (max-width:860px){
  .bubble{white-space:normal;max-width:88%}
  .brow--a,.brow--b,.brow--c{transform:none}
  .bubble.lift{margin-bottom:0}
  .bubble.drop{margin-top:0}
  .ask-cursor{transform:translateX(28%)}
  .deco-tilt,.deco-small,.deco-pencil,.deco-slim{display:none}
  .deco-note{bottom:2%;opacity:.7}
  .deco-cal{top:4%;opacity:.7}
  .ask-deco{display:none}          /* 배경 오브제가 하단 문구를 가려서 해제 */
  .stem-row{gap:clamp(24px,6vw,54px);margin:38px 0 30px}
  .ask-stem{height:64px;margin:0}
  .stem-book{display:block;width:clamp(78px,13vw,130px);height:auto;
    filter:drop-shadow(0 10px 22px rgba(8,26,74,.3))}
  .stem-book.tilt{width:clamp(50px,8vw,84px);transform:rotate(-12deg)}
}
@media (max-width:640px){
  .wcards{grid-template-columns:1fr}
  .wcard,.wcard--right{text-align:left;min-height:0}
  .w-badge{position:static;transform:none;margin:0 auto;box-shadow:none}
}
@media (max-width:960px){
  .ch-cards{grid-template-columns:1fr;gap:18px}
  .grid-3,.grid-4{grid-template-columns:1fr 1fr}
  .grid-5{grid-template-columns:1fr 1fr 1fr}
  .cta-row{
    flex-direction:column;align-items:flex-start;flex-wrap:nowrap;
    gap:0;                                  /* 간격은 info-list의 margin으로만 제어 */
  }
  .cta-copy{flex:0 0 auto;width:100%;height:auto}  /* column에선 basis가 '높이'가 되므로 해제 */
  .cta .cta-row .info-list{width:100%;align-items:flex-start;margin-top:22px}
}
@media (max-width:560px){
  .grid-3,.grid-4,.grid-5{grid-template-columns:1fr}
  .info-list{gap:16px}
  .deco-slim{display:none}
}
/* ===== 태블릿 ===== */
@media (max-width:1024px){
  .section{padding:clamp(56px,8vw,90px) var(--pad)}
  .h2{font-size:clamp(28px,4.4vw,44px);margin-bottom:clamp(30px,5vw,50px)}
  .grade{
    padding:clamp(30px,4.4vw,52px) clamp(24px,3.4vw,40px) clamp(76px,9vw,110px);
    min-height:clamp(300px,42vw,420px);
  }
  .grade-tag{font-size:clamp(14px,1.9vw,19px);margin-bottom:clamp(16px,2.4vw,24px)}
  .grade h3{font-size:clamp(21px,3.1vw,32px)}
  .grade p{font-size:clamp(15px,2vw,20px)}
  .grade .g-icon{width:clamp(40px,5.4vw,60px);height:clamp(40px,5.4vw,60px)}
  .cta{padding:clamp(64px,9vw,110px) var(--pad)}
  .cta h2{font-size:clamp(30px,4.6vw,52px)}
  .cta-sub{font-size:clamp(16px,2.2vw,22px)}
  .rules-wrap section{padding:clamp(60px,8vw,100px) var(--pad)}
  .rules-wrap .sd-title{font-size:clamp(30px,4.6vw,54px)}
  .rules-wrap .sd-desc{font-size:clamp(16px,2.1vw,24px)}
  .sd-acc-title{min-height:auto;padding:clamp(22px,3vw,32px) clamp(22px,3vw,34px);font-size:clamp(20px,2.9vw,30px)}
  .sd-acc-content{padding:0 clamp(22px,3vw,34px) clamp(26px,3.4vw,38px)}
  .sd-info-table th,.sd-info-table td{padding:14px 16px;font-size:clamp(15px,1.9vw,19px)}
  .sd-info-table th{width:clamp(120px,18vw,180px)}
  .sd-flow-card h3{font-size:clamp(19px,2.6vw,26px)}
  .sd-flow-card p{font-size:clamp(14px,1.9vw,18px)}
  .sd-flow-card small{font-size:clamp(13px,1.7vw,16px)}
  .hero{--fall:60vw}
  .winter-section{
    padding:clamp(130px,17vw,190px) var(--pad) clamp(60px,9vw,110px);
    background-size:100% clamp(190px,24vw,240px), 100% clamp(150px,18vw,190px);
  }
  .winter-copy h2{font-size:clamp(28px,4.6vw,46px)}
  .winter-copy p{font-size:clamp(15px,2.1vw,20px)}
  .wcard{padding:clamp(24px,3.4vw,38px);min-height:clamp(230px,32vw,300px)}
  .wcard .n,.wcard .en,.wcard .ko{font-size:clamp(17px,2.6vw,26px)}
  .wcard li{font-size:clamp(13.5px,1.9vw,17px)}
  .w-badge{width:clamp(130px,19vw,180px);height:clamp(130px,19vw,180px)}
  .w-badge small{font-size:clamp(11px,1.5vw,14px)}
  .w-badge b{font-size:clamp(14px,1.9vw,18px)}
  .w-conclusion{font-size:clamp(17px,2.5vw,26px);padding:clamp(18px,2.6vw,26px) clamp(22px,3vw,34px)}
  .ask{padding:clamp(60px,8vw,110px) var(--pad) clamp(64px,9vw,120px)}
  .ask-title{font-size:clamp(28px,5vw,54px)}
  .bubble{font-size:clamp(14px,2.1vw,21px);padding:clamp(12px,1.8vw,18px) clamp(18px,2.4vw,28px)}
  .ask-punch{font-size:clamp(24px,4.4vw,46px)}
  .ask-kicker{font-size:clamp(14px,1.9vw,19px)}
  .ch-card h3{font-size:clamp(18px,2.7vw,28px)}
  .ch-card p{font-size:clamp(14px,2vw,20px)}
  .ch-badge{width:clamp(42px,5.4vw,58px);height:clamp(46px,6vw,64px);font-size:clamp(17px,2.4vw,24px);margin-bottom:clamp(18px,2.4vw,28px)}
}

/* ===== 모바일 ===== */
@media (max-width:768px){
  .section{padding:52px var(--pad)}
  .h2{font-size:26px;margin-bottom:26px}
  /* 배너 아래 카드가 파란 영역 안에 들어오도록 여백 보정 */
  .hero{--fall:132vw}
  .change{padding-bottom:56px}
  .ch-cards{gap:14px}
  .ch-card{padding:28px 20px 30px;border-radius:16px}
  .ch-card h3{font-size:20px}
  .ch-card p{font-size:15px;margin-top:16px}
  .ch-badge{width:44px;height:48px;font-size:18px;margin-bottom:18px}

  .ask{padding:56px var(--pad) 64px}
  .ask-title{font-size:27px;line-height:1.35}
  .ask-cursor{width:34px;transform:translateX(26%)}
  .bubbles{margin-top:28px;gap:14px}
  .brow{gap:14px}
  .bubble{font-size:15px;padding:13px 20px;max-width:100%;line-height:1.45}
  .ask-stem{height:52px}
  .stem-row{gap:clamp(22px,7vw,40px);margin:32px 0 24px}
  .stem-book{width:clamp(74px,21vw,118px)}
  .stem-book.tilt{width:clamp(46px,13vw,72px)}
  .mo-br{display:block}
  .ask-kicker{font-size:14px}
  .ask-punch{font-size:25px;margin-top:10px}
  .deco-stack{width:110px}
  .deco-open{width:118px}

  .winter-section{
    padding:190px var(--pad) 60px;
    /* 위쪽 전환을 길게 — 파랑에서 어둠까지 천천히 */
    background-size:100% 280px, 100% 190px;
  }
  .winter-copy h2{font-size:26px}
  .winter-copy p{font-size:15px;line-height:1.8}
  .wcards{gap:12px}
  .wcard{padding:24px 20px;min-height:0}
  .wcard .n{font-size:16px}
  .wcard .en{font-size:18px}
  .wcard .ko{font-size:19px}
  .wcard li{font-size:14px}
  .wcard ul{margin-top:14px}
  .w-badge{width:132px;height:132px;margin:6px auto}
  .w-arrow{border-left-width:14px;border-right-width:14px;border-top-width:16px;margin-top:14px}
  .w-conclusion{font-size:16px;padding:16px 20px;line-height:1.5}

  .grade{padding:26px 22px 66px;min-height:0;border-radius:14px}
  .grade-tag{font-size:13px;margin-bottom:14px}
  .grade h3{font-size:20px;margin-bottom:.4em}
  .grade p{font-size:15px;line-height:1.7}
  .grade .g-icon{width:38px;height:38px;right:18px;bottom:16px}

  .rules-wrap section{padding:56px var(--pad)}
  .rules-wrap .sd-title{font-size:27px;line-height:1.3}
  .rules-wrap .sd-desc{font-size:15px;margin-top:16px}
  .sd-accordion{margin-top:28px}
  .sd-acc-item{border-radius:16px}
  .sd-acc-title{padding:20px 18px;font-size:18px;gap:10px}
  .sd-acc-title .sd-i{width:28px;height:28px;font-size:16px}
  .sd-acc-content{padding:0 18px 22px}
  .sd-info-table th,.sd-info-table td{display:block;width:100%;font-size:15px;padding:12px 14px}
  .sd-info-table th{border-bottom:0}
  .sd-notice{font-size:13px;margin-top:14px}
  .sd-flow-grid{margin-top:28px;gap:10px}
  .sd-flow-card{padding:22px 18px;border-radius:16px}
  .sd-flow-card h3{font-size:18px}
  .sd-flow-card p{font-size:14px}

  .cta{padding:56px var(--pad)}
  .cta .cta-row .info-list{margin-top:18px}
  .cta-sub{margin-top:.55em}
  .cta h2{font-size:26px;line-height:1.35}
  .cta-sub{font-size:15px}
  .info-list{gap:14px}
  .info-list > div{column-gap:14px}
  .info-ic{width:52px;height:52px;border-width:2px}
  .info-list dt{font-size:13px}
  .info-list dd{font-size:18px}
  .cta-deco{display:none}      /* 배경 오브제 해제 */
  .cta-props{
    display:flex;align-items:flex-end;justify-content:center;
    gap:clamp(18px,6vw,34px);margin-top:36px;
  }
  .cta-props .prop-note{width:clamp(58px,16vw,88px)}
  .cta-props .prop-pencil{width:clamp(22px,6vw,34px);transform:rotate(-14deg)}
  .cta-props .prop-cal{width:clamp(54px,15vw,82px);transform:rotate(7deg)}
}

/* ===== 소형 기기 ===== */
@media (max-width:430px){
  :root{--pad:16px}
  .winter-section{padding-top:170px;background-size:100% 250px, 100% 170px}
  .ask-title{font-size:24px}
  .ask-punch{font-size:22px}
  .bubble{font-size:14px;padding:12px 16px}
  .winter-copy h2,.cta h2,.rules-wrap .sd-title,.h2{font-size:23px}
  .w-badge{width:118px;height:118px}
  .info-list dd{font-size:17px}
  .cta .cta-row .info-list{margin-top:14px}
  .info-list{gap:12px}
  .ch-card h3{font-size:18px}
  .cta-props{margin-top:28px;gap:16px}
}

@media (prefers-reduced-motion:reduce){
  .bubble,.ch-card{opacity:1;transform:none;animation:none !important}
  .bubble.done:hover,.bubble.done:active{animation:none !important}
  .w-conclusion,.w-conclusion::after{animation:none !important}
  .reveal{opacity:1;transform:none;transition:none}
}

/* ===================== CTA 재구성 ===================== */
.cta{
  position:relative;width:100%;overflow:hidden;
  background:var(--ask-blue);color:#fff;
  padding:clamp(64px,7vw,150px) var(--pad);
}
.cta .inner{position:relative;z-index:2}
.cta-row{
  display:grid;grid-template-columns:minmax(0,1fr) auto;
  gap:clamp(36px,4vw,110px);align-items:start;
}
.cta-copy{min-width:0}
.cta h2{
  font-size:clamp(30px,3.4vw,80px);font-weight:900;
  line-height:1.3;letter-spacing:-.04em;color:#eaf3ff;
  text-shadow:0 6px 22px rgba(6,32,92,.28);
}
.cta h2 .lead-line{color:#bfe0ff}
.cta h2 .strong-line{color:#fff}
.cta h2 .accent{color:var(--yellow);box-shadow:inset 0 -.2em 0 rgba(255,255,255,.35)}
.cta-sub{
  margin-top:.7em;font-size:clamp(16px,1.4vw,32px);
  color:#eaf3ff;letter-spacing:-.03em;
}
.cta-sub .hl{
  background:var(--ask-mint);color:#04143a;font-weight:800;
  padding:.06em .3em .12em;border-radius:.14em;
  box-decoration-break:clone;-webkit-box-decoration-break:clone;
}

/* 사전 등록 혜택 */
.benefit-head{
  display:flex;align-items:center;gap:.45em;
  margin-top:clamp(26px,2.6vw,60px);
  font-size:clamp(17px,1.5vw,34px);font-weight:800;letter-spacing:-.03em;color:#fff;
}
.benefit-head svg{width:1.15em;height:1.15em;flex:none;color:var(--yellow)}
.benefits{
  margin-top:clamp(14px,1.3vw,28px);
  display:grid;grid-template-columns:repeat(4,1fr);
  background:rgba(255,255,255,.97);
  border-radius:clamp(14px,1.4vw,30px);
  padding:clamp(20px,1.8vw,40px) clamp(10px,1vw,22px);
  box-shadow:0 18px 44px rgba(6,32,92,.22);
}
.benefit{
  position:relative;display:flex;flex-direction:column;
  padding:0 clamp(12px,1.2vw,28px);
}
.benefit + .benefit::before{
  content:"";position:absolute;left:0;top:4%;bottom:4%;
  width:1px;background:#dde5f3;
}
.benefit-top{display:grid;grid-template-columns:auto 1fr;gap:clamp(8px,.7vw,16px);align-items:start}
.benefit .num{
  flex:none;display:flex;align-items:center;justify-content:center;
  width:clamp(24px,2vw,44px);height:clamp(24px,2vw,44px);border-radius:50%;
  background:#3f6fe0;color:#fff;font-weight:800;
  font-size:clamp(11px,.9vw,20px);letter-spacing:-.02em;
}
.benefit p{
  color:#1f3050;font-weight:750;letter-spacing:-.03em;
  font-size:clamp(13px,1.05vw,24px);line-height:1.5;
}
.benefit p small{display:block;margin-top:.35em;color:#7080a0;font-weight:600;font-size:.82em}

.benefit .b-hl{
  background:#fff3c4;
  border-radius:.14em;
  padding:.04em .22em .1em;
  box-decoration-break:clone;
  -webkit-box-decoration-break:clone;
}
.benefit .b-sub{
  color:#8b95a8;
  font-weight:650;
}
.benefit .art{
  width:clamp(52px,4.6vw,110px);height:auto;
  margin:clamp(14px,1.3vw,28px) auto 0;align-self:center;
}

/* 오른쪽 정보 */
.info-list{
  display:flex;flex-direction:column;align-items:stretch;
  gap:clamp(18px,1.8vw,40px);text-align:left;
}
.info-list > div{display:grid;grid-template-columns:auto 1fr;column-gap:clamp(14px,1.3vw,30px);align-items:center}
.info-list .info-ic{grid-row:span 2}
.info-list dt,.info-list dd{grid-column:2}
.info-ic{
  display:flex;align-items:center;justify-content:center;
  width:clamp(56px,4.6vw,110px);height:clamp(56px,4.6vw,110px);border-radius:50%;
  background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.5);
  box-shadow:0 12px 30px rgba(6,32,92,.22), inset 0 0 clamp(14px,1.4vw,32px) rgba(255,255,255,.14);
}
.info-list .icon{width:52%;height:52%;color:#fff;margin:0}
.info-list dt{font-size:clamp(13px,1.1vw,26px);color:#c9dcff;margin-bottom:.25em}
.info-list dd{font-size:clamp(19px,1.7vw,40px);font-weight:800;letter-spacing:-.03em;color:#fff;white-space:nowrap}

/* 배경 소품 */
.cta-deco{position:absolute;inset:0;z-index:1;pointer-events:none}
.cta-deco svg{position:absolute;filter:drop-shadow(0 18px 34px rgba(8,26,74,.28))}
.deco-pencil{left:clamp(-1%,.5vw,2%);top:2%;width:clamp(50px,4.4vw,100px);transform:rotate(-16deg);opacity:.95}
.deco-note{left:clamp(-4%,-1vw,0%);bottom:6%;width:clamp(90px,8vw,180px);opacity:.9}
.deco-cal{right:clamp(0%,1.5vw,3%);bottom:4%;width:clamp(80px,7vw,160px);transform:rotate(7deg);opacity:.9}
.cta-props{display:none}

/* ----- 태블릿 ----- */
@media (max-width:1100px){
  .cta-row{grid-template-columns:1fr;gap:clamp(26px,3vw,40px)}
  .info-list{flex-direction:row;flex-wrap:wrap;gap:clamp(18px,3vw,40px)}
  .info-list > div{flex:1 1 200px}
  .benefits{grid-template-columns:repeat(2,1fr);gap:clamp(14px,2vw,24px) 0}
  .benefit + .benefit::before{display:none}
  .benefit:nth-child(odd) + .benefit::before{display:block}
}

/* ----- 모바일 ----- */
@media (max-width:768px){
  .cta{padding:52px var(--pad)}
  .cta h2{font-size:25px;line-height:1.35}
  .cta-sub{font-size:15px;margin-top:.6em}
  .benefit-head{font-size:17px;margin-top:24px}
  .benefits{
    grid-template-columns:1fr;
    padding:6px 16px;border-radius:14px;
  }
  .benefit{padding:16px 0;flex-direction:row;align-items:center;gap:12px}
  .benefit + .benefit{border-top:1px solid #e3eaf6}
  .benefit + .benefit::before{display:none}
  .benefit-top{flex:1 1 auto}
  .benefit .num{width:24px;height:24px;font-size:11px}
  .benefit p{font-size:14px;line-height:1.45}
  .benefit p br{display:none}          /* 좁은 폭에선 자동 줄바꿈이 자연스러움 */
  .benefit .art{flex:none;width:46px;margin:0}
  .info-list{gap:14px}
  .info-list > div{flex:1 1 100%}
  .info-ic{width:48px;height:48px}
  .info-list dt{font-size:12px}
  .info-list dd{font-size:17px}
  .deco-pencil{width:42px;opacity:.55}
  .deco-note{width:70px;opacity:.5}
  .deco-cal{width:64px;opacity:.5}
}
@media (max-width:430px){
  .cta h2{font-size:22px}
  .benefit p{font-size:13.5px}
  .benefit .art{width:40px}
  .deco-note,.deco-cal,.deco-pencil{display:none}
}`;

export const WINTER_HTML = `<!-- ================= HERO (배너 이미지) ================= -->
  <header class="hero">
    <div class="snow-layer" aria-hidden="true"></div>
    <picture>
     <source media="(max-width:768px)" srcset="/winter/hero-mo.webp?v=3">
     <img src="/winter/hero-2.webp" alt="2027 윈터스쿨 - 2028 대입 개편, 준비는 이번 겨울부터. 달라진 입시에 맞춘 선제적 학습 전략. 1월 4일(월) 개강">
     </picture>
  </header>

  <!-- ================= 2028 대입 판이 바뀐다 (배너) ================= -->
  <section class="news-band">
    <picture>
      <source media="(max-width:768px)" srcset="/winter/news-5a-mo.webp">
      <img src="/winter/news-5a.webp"
           alt="속보 - 2028 대입 개편, 입시 판 전면 재편. 내신 5등급제·통합형 수능 도입 예고, 학생·학부모 조기 대비 필요">
    </picture>
    <picture class="news-5a-foot">
      <source media="(max-width:768px)" srcset="/winter/change-mo.webp">
      <img src="/winter/change.webp" alt="" aria-hidden="true">
    </picture>
  </section>

  <!-- ================= 무엇이 달라지나요 ================= -->
  <section class="change">
    <div class="inner">
      <div class="ch-cards">
        <article class="ch-card">
          <div class="ch-badge">01</div>
          <h3>내신 5등급제 전면 적용</h3>
          <p>기존 9등급제 대비 1등급 범위 확대<br>상위 10%가 1등급!</p>
        </article>
        <article class="ch-card">
          <div class="ch-badge">02</div>
          <h3>통합형 수능 체제</h3>
          <p>국어·수학 선택과목 폐지<br>사회·과학은 통합사회, 통합과학 모두 응시!</p>
        </article>
        <article class="ch-card">
          <div class="ch-badge">03</div>
          <h3>고교학점제 &amp; 대학별 반영과목</h3>
          <p>과목 선택이 곧 입시 전략!<br>미리 준비하는 학생만이 유리합니다.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- ================= 오해 말풍선 ================= -->
  <section class="ask">
    <div class="ask-deco" aria-hidden="true">
      <!-- 쌓인 책 -->
      <svg class="deco-stack" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(-4 100 110)">
          <rect x="12" y="104" width="176" height="30" rx="7" fill="#ffe2a3"/>
          <rect x="12" y="104" width="176" height="10" rx="5" fill="#ffd27a"/>
          <rect x="26" y="116" width="60" height="6" rx="3" fill="#e8b95f" opacity=".55"/>
        </g>
        <g transform="rotate(3 100 82)">
          <rect x="20" y="74" width="160" height="28" rx="7" fill="#ffffff"/>
          <rect x="20" y="74" width="160" height="9" rx="4.5" fill="#dfe9ff"/>
          <rect x="34" y="85" width="52" height="6" rx="3" fill="#c3d3f5" opacity=".7"/>
        </g>
        <g transform="rotate(-7 100 54)">
          <rect x="28" y="46" width="144" height="26" rx="7" fill="#cbdcfd"/>
          <rect x="28" y="46" width="144" height="9" rx="4.5" fill="#aec6fb"/>
          <rect x="42" y="57" width="46" height="6" rx="3" fill="#8fb0f5" opacity=".7"/>
        </g>
      </svg>

      <!-- 펼친 책 -->
      <svg class="deco-open" viewBox="0 0 230 150" xmlns="http://www.w3.org/2000/svg">
        <path d="M115 42C88 24 50 20 18 30v88c32-10 70-6 97 12z" fill="#ffffff"/>
        <path d="M115 42c27-18 65-22 97-12v88c-32-10-70-6-97 12z" fill="#eaf1ff"/>
        <path d="M115 42v88" stroke="#c2d3f4" stroke-width="3" stroke-linecap="round"/>
        <g fill="#c9d8f6" opacity=".85">
          <rect x="34" y="52" width="62" height="5" rx="2.5"/>
          <rect x="34" y="68" width="52" height="5" rx="2.5"/>
          <rect x="34" y="84" width="58" height="5" rx="2.5"/>
          <rect x="136" y="52" width="62" height="5" rx="2.5"/>
          <rect x="136" y="68" width="46" height="5" rx="2.5"/>
          <rect x="136" y="84" width="56" height="5" rx="2.5"/>
        </g>
        <path d="M18 118c32-10 70-6 97 12 27-18 65-22 97-12v10c-32-10-70-6-97 12-27-18-65-22-97-12z" fill="#d9e4fb"/>
      </svg>

      <!-- 기울어진 책 -->
      <svg class="deco-tilt" viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="14" width="92" height="122" rx="9" fill="#ffffff"/>
        <rect x="14" y="14" width="20" height="122" rx="9" fill="#cbdcfd"/>
        <g fill="#dbe6fb">
          <rect x="46" y="46" width="46" height="7" rx="3.5"/>
          <rect x="46" y="64" width="34" height="7" rx="3.5"/>
        </g>
      </svg>

      <!-- 작은 책 -->
      <svg class="deco-small" viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="18" width="88" height="116" rx="9" fill="#ffe2a3"/>
        <rect x="16" y="18" width="18" height="116" rx="9" fill="#ffd27a"/>
        <rect x="46" y="52" width="42" height="7" rx="3.5" fill="#eec372"/>
      </svg>
    </div>

    <div class="inner">
      <h2 class="ask-title reveal"><span class="mint">우리 아이,</span><br>이렇게 생각하고 계신가요?</h2>
      <svg class="ask-cursor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 3l14 8.5-6.2 1.4L9.6 19z" fill="#dbe7ff" stroke="#2f5bd0" stroke-width="1.6" stroke-linejoin="round"/>
      </svg>

      <div class="bubbles">
        <div class="brow brow--a">
          <span class="bubble ghost">고1은 아직 수능 공부 안 해도 되겠지.</span>
          <span class="bubble solid drop">5등급제로 바뀌면 내신 따기는 오히려 쉬워진 거 아닌가?</span>
        </div>
        <div class="brow brow--b">
          <span class="bubble solid">문과니까 과학은 내신만 넘기면 되겠지.</span>
          <span class="bubble ghost lift">수시는 내신, 정시는 수능만 챙기면 되겠지.</span>
        </div>
        <div class="brow brow--c">
          <span class="bubble ghost">선택과목은 학교 가서 정해도 늦지 않겠지.</span>
          <span class="bubble solid drop">겨울방학엔 선행만 해두면 되는 거 아닌가?</span>
        </div>
      </div>

      <div class="stem-row" aria-hidden="true">
        <svg class="stem-book" viewBox="0 0 230 150" xmlns="http://www.w3.org/2000/svg">
          <path d="M115 42C88 24 50 20 18 30v88c32-10 70-6 97 12z" fill="#ffffff"/>
          <path d="M115 42c27-18 65-22 97-12v88c-32-10-70-6-97 12z" fill="#eaf1ff"/>
          <path d="M115 42v88" stroke="#c2d3f4" stroke-width="3" stroke-linecap="round"/>
          <g fill="#c9d8f6" opacity=".85">
            <rect x="34" y="52" width="62" height="5" rx="2.5"/>
            <rect x="34" y="68" width="52" height="5" rx="2.5"/>
            <rect x="34" y="84" width="58" height="5" rx="2.5"/>
            <rect x="136" y="52" width="62" height="5" rx="2.5"/>
            <rect x="136" y="68" width="46" height="5" rx="2.5"/>
            <rect x="136" y="84" width="56" height="5" rx="2.5"/>
          </g>
          <path d="M18 118c32-10 70-6 97 12 27-18 65-22 97-12v10c-32-10-70-6-97 12-27-18-65-22-97-12z" fill="#d9e4fb"/>
        </svg>

        <div class="ask-stem"></div>

        <svg class="stem-book tilt" viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="14" width="92" height="122" rx="9" fill="#ffffff"/>
          <rect x="14" y="14" width="20" height="122" rx="9" fill="#cbdcfd"/>
          <g fill="#dbe6fb">
            <rect x="46" y="46" width="46" height="7" rx="3.5"/>
            <rect x="46" y="64" width="34" height="7" rx="3.5"/>
          </g>
        </svg>
      </div>
      <p class="ask-kicker reveal">입시 규칙이 바뀌는 지금</p>
      <p class="ask-punch reveal"><span class="mint">준비 순서도</span><br class="mo-br"> 바뀌어야 합니다!</p>
    </div>
  </section>

  <!-- ================= 그래서 이번 겨울방학 ================= -->
  <section class="winter-section">
    <div class="winter-grid">
      <div class="winter-copy reveal">
        <h2>그래서, <br><span class="hl">이번 겨울방학</span>이 중요합니다.</h2>
        <p>
          학기 중에는 학교 수업과 내신에 쫓깁니다.<br>
          새 학년이 시작되기 전, 부족한 영역을 진단하고<br>
          다음 학년의 학습 흐름을 먼저 완성할 수 있는 시간은 겨울방학입니다.
        </p>
      </div>

      <div class="winter-cards reveal">
        <div class="winter-rule"></div>
        <div class="wcards">
          <article class="wcard">
            <div class="n">01</div>
            <div class="en">FOUNDATION</div>
            <div class="ko">핵심기반 완성</div>
            <ul>
              <li>국어·수학·영어</li>
              <li>기초 개념 정리</li>
              <li>학년별 기본기 완성</li>
            </ul>
          </article>

          <article class="wcard wcard--right">
            <div class="n">02</div>
            <div class="en">INTEGRATED</div>
            <div class="ko">수능 기반 구축</div>
            <ul>
              <li>통합사회·통합과학</li>
              <li>통합형 수능 대비</li>
              <li>전 영역 기본기 강화</li>
            </ul>
          </article>

          <article class="wcard">
            <div class="n">03</div>
            <div class="en">SCHOOL RECORD</div>
            <div class="ko">학업관리 프로그램</div>
            <ul>
              <li>내신 5등급제 대비</li>
              <li>학습 진단·보완</li>
              <li>학교 성적 관리</li>
            </ul>
          </article>

          <article class="wcard wcard--right">
            <div class="n">04</div>
            <div class="en">ROADMAP</div>
            <div class="ko">학습 로드맵 설계</div>
            <ul>
              <li>학년·계열·목표대학별</li>
              <li>개인별 학습 방향</li>
              <li>겨울방학 학습 설계</li>
            </ul>
          </article>

          <div class="w-badge"><small>달라진 입시에 맞춘</small><b>겨울 전략 설계</b></div>
        </div>

        <div class="w-arrow" aria-hidden="true"></div>
        <p class="w-conclusion"><b>핵심</b>을 다지고, <b>수능 기반</b>을 세우고,<br><b>다음 학년의 방향</b>까지 완성합니다.</p>
      </div>
    </div>
  </section>

  <!-- ================= 학년별 맞춤 전략 ================= -->
  <section class="section section-white">
    <div class="inner">
      <h2 class="h2 reveal">학년별 <span class="accent">맞춤 전략</span></h2>
      <div class="grid-3">
  <article class="grade g1 reveal">
    <span class="grade-tag">예비 고1</span>
    <h3>첫 내신이 시작되기 전<br>마지막 겨울</h3>
    <p>5등급제 첫 성적표가 나오기 전에<br>고등 학습의 기준부터<br>세워야 합니다.</p>
    <svg class="g-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M24 14C20 10 13 10 8 12v24c5-2 12-2 16 2 4-4 11-4 16-2V12c-5-2-12-2-16 2z"/><path d="M24 14v24"/>
    </svg>
  </article>
  <article class="grade g2 reveal">
    <span class="grade-tag">예비 고2</span>
    <h3>내신과 수능의<br>균형이 갈리는 시기</h3>
    <p>내신만 따라가는 고2가 아니라,<br>수능 학습도 시작해야 하는<br>고2로 준비해야 합니다.</p>
    <svg class="g-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M24 8v32M12 40h24M8 16h32M8 16l-4 12h8zM40 16l4 12h-8z"/>
    </svg>
  </article>
  <article class="grade g3 reveal">
    <span class="grade-tag">예비 고3</span>
    <h3>첫 통합형<br>수능의 당사자</h3>
    <p>선택과목 없는 국어·수학,<br>통합사회·통합과학까지<br>더 이상 미룰 시간이 없습니다.</p>
    <svg class="g-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M24 12L6 20l18 8 18-8-18-8z"/><path d="M14 24v9c0 3 5 5 10 5s10-2 10-5v-9"/><path d="M42 20v10"/>
    </svg>
  </article>
</div>
    </div>
  </section>

  <!-- ================= 모집요강 + 등록 절차 ================= -->
  <div class="rules-wrap">
    <section class="sd-detail" id="detail">
      <div class="sd-inner">
        <h2 class="sd-title reveal"><em>2027 윈터스쿨</em> 모집요강</h2>
        <p class="sd-desc reveal">새 학년이 시작되기 전, 부족한 영역을 진단하고<br>다음 학년의 학습 흐름을 먼저 완성합니다.</p>

        <div class="sd-accordion">
          <div class="sd-acc-item reveal">
            <div class="sd-acc-title"><span class="sd-i" aria-hidden="true">i</span>2027 윈터스쿨 모집요강</div>
            <div class="sd-acc-content">
            <table class="sd-info-table">
                <tr><th>개강일</th><td>2027년 1월 4일(월)</td></tr>
                <tr><th>모집대상</th><td>현 중3(예비고1) · 현 고1(예비고2) · 현 고2(예비고3)</td></tr>
                <tr><th>교육과정</th><td>국어 · 수학 · 영어 핵심 기반 / 통합사회 · 통합과학 수능 기반 / 내신 5등급제 대비 학업관리</td></tr>
                <tr><th>교육기간</th><td>2027년 1월 4일(월) ~ 2월 19일(금) <span class="sd-course-note">*7주과정</span></td></tr>
            </table>
              <p class="sd-notice">※ 2028 대입 개편에 맞춰 학년별 커리큘럼이 다르게 운영됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--<section class="sd-apply-flow" id="apply">
      <div class="sd-inner">
        <h2 class="sd-title reveal"><em>윈터스쿨</em> 등록 절차</h2>
        <div class="sd-flow-grid">
          <article class="sd-flow-card reveal"><small>STEP 01</small><h3>상담 신청</h3><p>상담예약 : 031-347-5151</p></article>
          <article class="sd-flow-card reveal"><small>STEP 02</small><h3>진단평가/서류제출</h3><p>진단평가 또는 성적표 제출</p></article>
          <article class="sd-flow-card reveal"><small>STEP 03</small><h3>상담/반 편성</h3><p>진단평가 및 성적표 기반으로<br>상담 후 반 편성 진행</p></article>
          <article class="sd-flow-card reveal"><small>STEP 04</small><h3>등록 완료</h3><p>사전예약금 및 수강료 납부 후 등록 완료</p></article>
        </div>
      </div>
    </section>-->
  </div>

   <!-- ================= CTA ================= -->
  <section class="cta">
    <div class="cta-deco" aria-hidden="true">
      <!-- 연필 (좌상단) -->
      <svg class="deco-pencil" viewBox="0 0 60 180" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 26h32v118H14z" fill="#ffe2a3"/>
        <path d="M14 26h12v118H14z" fill="#ffd27a"/>
        <path d="M14 144h32l-16 26z" fill="#f6efe0"/>
        <path d="M24 158l6 12 6-12z" fill="#3b4a6b"/>
        <rect x="14" y="12" width="32" height="16" rx="5" fill="#cbdcfd"/>
      </svg>
      <!-- 스프링 노트 (좌하단) -->
      <svg class="deco-note" viewBox="0 0 160 190" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(-6 80 95)">
          <rect x="20" y="18" width="122" height="156" rx="12" fill="#ffffff"/>
          <rect x="20" y="18" width="22" height="156" rx="11" fill="#cbdcfd"/>
          <g fill="#dbe6fb">
            <rect x="56" y="52" width="70" height="8" rx="4"/><rect x="56" y="76" width="54" height="8" rx="4"/>
            <rect x="56" y="100" width="64" height="8" rx="4"/><rect x="56" y="124" width="42" height="8" rx="4"/>
          </g>
          <g fill="#8fb0f5">
            <circle cx="31" cy="44" r="6"/><circle cx="31" cy="76" r="6"/>
            <circle cx="31" cy="108" r="6"/><circle cx="31" cy="140" r="6"/>
          </g>
        </g>
      </svg>
      <!-- 달력 (우하단) -->
      <svg class="deco-cal" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="26" width="128" height="118" rx="14" fill="#ffffff"/>
        <path d="M16 40a14 14 0 0114-14h100a14 14 0 0114 14v18H16z" fill="#4a90e2"/>
        <rect x="44" y="14" width="12" height="26" rx="6" fill="#2f6fc9"/>
        <rect x="104" y="14" width="12" height="26" rx="6" fill="#2f6fc9"/>
        <g fill="#d7e4fb">
          <rect x="34" y="74" width="20" height="16" rx="4"/><rect x="70" y="74" width="20" height="16" rx="4"/>
          <rect x="106" y="74" width="20" height="16" rx="4"/><rect x="34" y="102" width="20" height="16" rx="4"/>
          <rect x="106" y="102" width="20" height="16" rx="4"/>
        </g>
        <rect x="70" y="102" width="20" height="16" rx="4" fill="#ffd27a"/>
      </svg>
    </div>

    <div class="inner">
      <div class="cta-row">
        <!-- 왼쪽: 문구 + 사전 등록 혜택 -->
        <div class="cta-copy reveal">
          <h2><span class="lead-line">2028 대입을 앞서는 선택,</span><br><span class="strong-line">지금 시작해야</span> <span class="accent">앞서갑니다.</span></h2>
          <p class="cta-sub"><span class="hl">2027 5A 윈터스쿨</span>에서 새로운 입시의 첫걸음을 함께하세요.</p>

          <p class="benefit-head">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8v13"/>
              <path d="M12 8S10.5 3.5 8 4c-2 .4-1.8 4 4 4zM12 8s1.5-4.5 4-4c2 .4 1.8 4-4 4z"/>
            </svg>
            윈터스쿨 사전 등록 혜택
          </p>

          <div class="benefits">
            <article class="benefit">
              <div class="benefit-top">
                <span class="num">01</span>
                <p>10/31(토) 오후 7시까지<br>사전등록 시 수강료 10% 할인
                  <small>(예약금 납부자 포함)</small>
                </p>
              </div>
              <svg class="art" viewBox="0 0 120 90" aria-hidden="true">
                <path d="M10 26h100v14a10 10 0 000 20v14H10V60a10 10 0 000-20z" fill="#dfe9fb"/>
                <path d="M44 58l32-26" stroke="#9fb8e8" stroke-width="6" stroke-linecap="round"/>
                <circle cx="46" cy="38" r="7" fill="#9fb8e8"/><circle cx="74" cy="52" r="7" fill="#9fb8e8"/>
              </svg>
            </article>

            <article class="benefit">
              <div class="benefit-top">
                <span class="num">02</span>
                <p>프리미엄 수학 진단테스트<br>&amp; 대면 컨설팅 비용<br>(30,000원) 무료</p>
              </div>
              <svg class="art" viewBox="0 0 120 90" aria-hidden="true">
                <rect x="34" y="10" width="52" height="72" rx="7" fill="#dfe9fb"/>
                <rect x="48" y="4" width="24" height="13" rx="5" fill="#9fb8e8"/>
                <g stroke="#9fb8e8" stroke-width="5" stroke-linecap="round" fill="none">
                  <path d="M45 33l5 5 9-10M45 51l5 5 9-10"/>
                  <path d="M68 35h10M68 53h10"/>
                </g>
                <path d="M60 66l7 8 14-17" stroke="#5d84d6" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </article>

            <article class="benefit">
              <div class="benefit-top">
                <span class="num">03</span>
                <p>개인 라이브러리<br>선착순 무료</p>
              </div>
              <svg class="art" viewBox="0 0 120 90" aria-hidden="true">
                <path d="M60 24C48 14 32 12 16 17v54c16-5 32-3 44 7z" fill="#ffffff" stroke="#c6d6f2" stroke-width="3"/>
                <path d="M60 24c12-10 28-12 44-7v54c-16-5-32-3-44 7z" fill="#eaf1fd" stroke="#c6d6f2" stroke-width="3"/>
                <g stroke="#c6d6f2" stroke-width="4" stroke-linecap="round">
                  <path d="M28 32h20M28 44h16M72 32h20M72 44h16"/>
                </g>
              </svg>
            </article>

            <article class="benefit">
              <div class="benefit-top">
                <span class="num">04</span>
                <p><span class="b-hl">사전등록 방법</span><br>사전예약금 50만원 납부<br><small>(납부 시 등록 확정)</small></p>
              </div>
              <svg class="art" viewBox="0 0 120 90" aria-hidden="true">
                <ellipse cx="52" cy="24" rx="30" ry="10" fill="#dfe9fb"/>
                <path d="M22 24v14c0 5.5 13.4 10 30 10s30-4.5 30-10V24" fill="#cfdef8"/>
                <path d="M22 42v14c0 5.5 13.4 10 30 10s30-4.5 30-10V42" fill="#dfe9fb"/>
                <circle cx="88" cy="58" r="20" fill="#ffd27a"/>
                <path d="M80 50l8 14 8-14M80 58h16" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none"/>
              </svg>
            </article>
          </div>
        </div>

        <!-- 오른쪽: 개강 정보 -->
        <dl class="info-list reveal">
          <div>
            <span class="info-ic"><svg class="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <rect x="8" y="11" width="32" height="30" rx="3"/><path d="M8 20h32M17 7v8M31 7v8M17 27h4M27 27h4M17 34h4M27 34h4"/>
            </svg></span>
            <dt>개강일</dt><dd>1월 4일 (월)</dd>
          </div>
          <div>
            <span class="info-ic"><svg class="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="19" cy="18" r="7"/><path d="M7 40c0-7 5.5-12 12-12s12 5 12 12"/><path d="M32 12a6 6 0 010 12M35 40c0-6-2-9-4-11"/>
            </svg></span>
            <dt>대상</dt><dd>예비 고1·2·3</dd>
          </div>
          <div>
            <span class="info-ic"><svg class="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14 8l6 8-5 5c2 5 6 9 11 11l5-5 8 6-4 6c-1 1-3 1-4 1C19 38 10 29 7 16c0-1 0-3 1-4l6-4z"/>
            </svg></span>
            <dt>상담 문의</dt><dd>031-347-5151</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>`;

export const WINTER_JS = `// 히어로 눈 내리기
(function(){
  var layer = document.querySelector('.snow-layer');
  if (!layer) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var mobile = window.matchMedia('(max-width:768px)').matches;
  var count  = mobile ? 42 : 78;

  for (var i = 0; i < count; i++) {
    var f = document.createElement('i');
    var size = (Math.random() * (mobile ? 7 : 10) + 4);    // 4~14px (모바일 4~11px)
    var depth = Math.random();                              // 0=가까움 1=멀리
    f.style.left = (Math.random() * 100) + '%';
    f.style.width = size + 'px';
    f.style.height = size + 'px';
    f.style.opacity = (0.9 - depth * 0.5).toFixed(2);
    f.style.filter = depth > 0.6 ? 'blur(2px)' : (depth > 0.3 ? 'blur(.8px)' : 'none');
    f.style.setProperty('--drift', (Math.random() * 60 - 26).toFixed(0) + 'px');
    f.style.animationDuration = (Math.random() * 7 + (mobile ? 9 : 8)) + 's';
    f.style.animationDelay = (-Math.random() * 16).toFixed(1) + 's';
    layer.appendChild(f);
  }
})();

// 카드/말풍선 순차 등장
(function(){
  var boxes = document.querySelectorAll('.ch-cards, .bubbles');
  if (!boxes.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)) {
    boxes.forEach(function(b){ b.classList.add('on'); });
    document.querySelectorAll('.bubble').forEach(function(b){ b.classList.add('done'); });
    return;
  }
  document.querySelectorAll('.bubble').forEach(function(b){
    b.addEventListener('animationend', function(ev){
      if (ev.animationName === 'pop') b.classList.add('done');
    });
  });
  var io = new IntersectionObserver(function(en){
    en.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target); } });
  }, { threshold: 0.2 });
  boxes.forEach(function(b){ io.observe(b); });
})();

// 스크롤 등장
(function(){
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function(el){ el.classList.add('on'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        var d = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
        e.target.style.transitionDelay = Math.min(d, 5) * 70 + 'ms';
        e.target.classList.add('on');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function(el){ io.observe(el); });
})();`;
