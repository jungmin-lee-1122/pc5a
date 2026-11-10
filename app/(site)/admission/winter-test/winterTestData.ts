// 2027 윈터스쿨 (테스트본) — 핸드오프 winter.html 이관. 이미지: /winter-test/
// 기존 /admission/winter 는 그대로 두고, 미리보기용 /admission/winter-test 전용.

export const WINTER_CSS = `body{margin:0;background:#ffffff;font-family:'Noto Sans KR',system-ui,sans-serif;color:#1a2238;word-break:keep-all}
a{color:#c4501a}a:hover{color:#9e3f12}
html{scroll-behavior:smooth}`;

export const WINTER_HTML = `<div style="width: 100%; background: #ffffff; font-family: 'Noto Sans KR', system-ui, sans-serif; color: #1a2238">

  
  <nav aria-label="모집안내 프로그램" style="background: #ffffff; border-bottom: 1px solid #e4e7ee">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 4px">
      <a href="#" style="padding: 18px 20px; font-size: 16px; font-weight: 500; color: #5a6275; text-decoration: none; border-bottom: 3px solid transparent">2027 PRE 윈터스쿨</a>
      <a href="#" aria-current="page" style="padding: 18px 20px; font-size: 16px; font-weight: 700; color: #102041; text-decoration: none; border-bottom: 3px solid #ec6926">2027 윈터스쿨</a>
      <a href="#" style="padding: 18px 20px; font-size: 16px; font-weight: 500; color: #5a6275; text-decoration: none; border-bottom: 3px solid transparent">고등 올케어반</a>
      <a href="#" style="padding: 18px 20px; font-size: 16px; font-weight: 500; color: #5a6275; text-decoration: none; border-bottom: 3px solid transparent">2027 고등단과</a>
    </div>
  </nav>

  
  <section style="background: #102041; color: #ffffff; position: relative; overflow: hidden">
    <div aria-hidden="true" style="position: absolute; right: -80px; top: -60px; width: 520px; height: 520px; border: 60px solid #ec6926; border-radius: 50%; opacity: 0.12"></div>
    <div style="max-width: 1200px; margin: 0 auto; padding: 88px 24px 72px; position: relative; display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-end; justify-content: space-between">
      <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 20px">
        <p style="margin: 0; font-family: Poppins, sans-serif; font-weight: 700; font-size: 16px; letter-spacing: 0.2em; color: #ec6926">2027 PYEONGCHON</p>
        <h1 style="margin: 0; font-family: Poppins, sans-serif; font-weight: 800; font-size: clamp(52px, 8vw, 96px); line-height: 0.95; letter-spacing: -0.02em">Winter<br>School</h1>
        <p style="margin: 8px 0 0; font-size: clamp(22px, 2.6vw, 30px); font-weight: 700; line-height: 1.4">입시의 차이,<br>5A에서 시작됩니다.</p>
        <p style="margin: 0; font-size: 17px; line-height: 1.7; color: #c9d0e0">겨울방학 7주, 프리미엄 테스트로 진단하고<br>나에게 맞춘 시간표로 처음부터 끝까지 관리합니다.</p>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 12px">
          <a href="#apply" style="display: inline-flex; align-items: center; min-height: 52px; padding: 0 28px; background: #ec6926; color: #ffffff; font-size: 18px; font-weight: 700; text-decoration: none; border-radius: 8px">상담·접수 신청</a>
          <a href="#" style="display: inline-flex; align-items: center; gap: 8px; min-height: 52px; padding: 0 24px; border: 1.5px solid #5d6a8a; color: #ffffff; font-size: 16px; font-weight: 500; text-decoration: none; border-radius: 8px">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            브로슈어 바로보기</a>
          <a href="#" style="display: inline-flex; align-items: center; gap: 8px; min-height: 52px; padding: 0 24px; border: 1.5px solid #5d6a8a; color: #ffffff; font-size: 16px; font-weight: 500; text-decoration: none; border-radius: 8px">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"></path><path d="M7 10l5 5 5-5"></path><path d="M5 21h14"></path></svg>
            PDF 다운로드</a>
        </div>
      </div>
      <div style="flex: 0 1 380px; min-width: 0; display: flex; flex-direction: column; gap: 12px">
        <div style="background: #1b2c55; border-radius: 14px; padding: 24px 28px; display: flex; justify-content: space-between; align-items: center; gap: 16px">
          <div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 14px; color: #c9d0e0">PRE 윈터 개강 · 예비 고1</span><strong style="font-size: 26px; font-weight: 900">2026. 12. 1 (화)</strong></div>
        </div>
        <div style="background: #ec6926; border-radius: 14px; padding: 24px 28px; display: flex; justify-content: space-between; align-items: center; gap: 16px">
          <div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 14px; color: #102041; font-weight: 700">정규 윈터 개강</span><strong style="font-size: 26px; font-weight: 900; color: #102041">2027. 1. 4 (월)</strong></div>
          <span style="font-family: Poppins, sans-serif; font-weight: 800; font-size: 30px; color: #102041; line-height: 1; text-align: right">7<br><span style="font-size: 13px; letter-spacing: 0.1em">WEEKS</span></span>
        </div>
      </div>
    </div>
  </section>

  
  

  
  <div style="background: #fff3ec; border-bottom: 1px solid #f7d5c2">
    <div style="max-width: 1200px; margin: 0 auto; padding: 16px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; align-items: center">
      <span style="display: inline-flex; align-items: center; height: 28px; padding: 0 12px; background: #c4501a; color: #ffffff; font-size: 13px; font-weight: 700; border-radius: 999px">마감 임박</span>
      <span style="font-size: 16px; color: #1a2238">예약금 납부자 최종 등록일 <strong>2026. 11. 15 (일) 오후 8시</strong>까지 · 모집정원 충원 시 조기 마감</span>
    </div>
  </div><nav aria-label="페이지 내 바로가기" style="background: #ffffff; border-bottom: 1px solid #e4e7ee">
    <div style="max-width: 1200px; margin: 0 auto; padding: 12px 24px; display: flex; flex-wrap: wrap; gap: 8px">
      
        <a href="#result" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">합격실적</a>
      
        <a href="#why" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">왜 5A인가</a>
      
        <a href="#program" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">특화 프로그램</a>
      
        <a href="#admission" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">모집요강</a>
      
        <a href="#scholarship" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">장학제도</a>
      
        <a href="#pre" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">PRE 윈터</a>
      
        <a href="#curriculum" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">커리큘럼</a>
      
        <a href="#schedule" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">일과표</a>
      
        <a href="#rules" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">생활규정</a>
      
        <a href="#facility" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">시설·급식</a>
      
        <a href="#review" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; font-size: 15px; font-weight: 500; color: #3a4359; text-decoration: none; background: #f3f5f9; border-radius: 999px">후기</a>
      
    </div>
  </nav>

  
  

  
  <section id="result" style="max-width: 1200px; margin: 0 auto; padding: 72px 24px">
    <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #c4501a">RESULT</p>
    <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #102041; line-height: 1.3">6년 만에 증명한 결과,<br>평촌이 다음 합격을 이어갑니다.</h2>
    <p style="margin: 16px 0 0; font-size: 17px; line-height: 1.7; color: #4a5268">5A아카데미는 6년 동안 최상위권 대학 합격 실적에서 재원생 수 대비 가장 높은 입시 결과를 증명해 왔습니다.</p>
    <div style="margin-top: 36px; background: #102041; border-radius: 20px; padding: 36px; display: flex; flex-direction: column; gap: 28px">
      <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; color: #ffffff">
        <strong style="font-size: 20px">2026 합격 실적</strong>
        <span style="font-size: 14px; color: #c9d0e0">5A 아카데미 · 2026. 3. 3 기준</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px">
        
          <div style="background: #1b2c55; border-radius: 14px; padding: 22px 20px; display: flex; flex-direction: column; gap: 6px">
            <span style="font-size: 15px; color: #c9d0e0">의예과</span>
            <strong style="font-family: Poppins, sans-serif; font-size: 40px; font-weight: 800; color: #ffffff; line-height: 1">44<span style="font-family: 'Noto Sans KR', sans-serif; font-size: 18px; font-weight: 700; margin-left: 4px">명</span></strong>
          </div>
        
          <div style="background: #1b2c55; border-radius: 14px; padding: 22px 20px; display: flex; flex-direction: column; gap: 6px">
            <span style="font-size: 15px; color: #c9d0e0">의학계열</span>
            <strong style="font-family: Poppins, sans-serif; font-size: 40px; font-weight: 800; color: #ffffff; line-height: 1">77<span style="font-family: 'Noto Sans KR', sans-serif; font-size: 18px; font-weight: 700; margin-left: 4px">명</span></strong>
          </div>
        
          <div style="background: #1b2c55; border-radius: 14px; padding: 22px 20px; display: flex; flex-direction: column; gap: 6px">
            <span style="font-size: 15px; color: #c9d0e0">서울대</span>
            <strong style="font-family: Poppins, sans-serif; font-size: 40px; font-weight: 800; color: #ffffff; line-height: 1">21<span style="font-family: 'Noto Sans KR', sans-serif; font-size: 18px; font-weight: 700; margin-left: 4px">명</span></strong>
          </div>
        
          <div style="background: #1b2c55; border-radius: 14px; padding: 22px 20px; display: flex; flex-direction: column; gap: 6px">
            <span style="font-size: 15px; color: #c9d0e0">연세대</span>
            <strong style="font-family: Poppins, sans-serif; font-size: 40px; font-weight: 800; color: #ffffff; line-height: 1">25<span style="font-family: 'Noto Sans KR', sans-serif; font-size: 18px; font-weight: 700; margin-left: 4px">명</span></strong>
          </div>
        
          <div style="background: #1b2c55; border-radius: 14px; padding: 22px 20px; display: flex; flex-direction: column; gap: 6px">
            <span style="font-size: 15px; color: #c9d0e0">고려대</span>
            <strong style="font-family: Poppins, sans-serif; font-size: 40px; font-weight: 800; color: #ffffff; line-height: 1">28<span style="font-family: 'Noto Sans KR', sans-serif; font-size: 18px; font-weight: 700; margin-left: 4px">명</span></strong>
          </div>
        
          <div style="background: #1b2c55; border-radius: 14px; padding: 22px 20px; display: flex; flex-direction: column; gap: 6px">
            <span style="font-size: 15px; color: #c9d0e0">최종 합격</span>
            <strong style="font-family: Poppins, sans-serif; font-size: 40px; font-weight: 800; color: #ffffff; line-height: 1">195<span style="font-family: 'Noto Sans KR', sans-serif; font-size: 18px; font-weight: 700; margin-left: 4px">명</span></strong>
          </div>
        
      </div>
    </div>
    <div style="margin-top: 20px; border: 1px solid #e4e7ee; border-radius: 20px; padding: 32px 36px; display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
      <div style="flex: 1 1 360px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
        <strong style="font-size: 19px; color: #102041">고양 · 파주 47개 고교 출신 합격자 분석</strong>
        <span style="font-size: 14px; color: #5a6275">2026학년도 · 5A 일산본원</span>
        <p style="margin: 6px 0 0; font-size: 16px; line-height: 1.7; color: #4a5268">고양 · 파주 고3 약 10,800명 중 5A 윈터스쿨 고3은 약 195명, <strong style="color: #102041">1.5%</strong>입니다. 그런데 이 지역 합격자 중 5A 출신 비율은 이렇습니다.</p>
      </div>
      <div style="flex: 1 1 380px; min-width: 0; display: flex; flex-direction: column; gap: 14px">
        
          <div style="display: flex; flex-direction: column; gap: 6px">
            <div style="display: flex; justify-content: space-between; font-size: 15px"><span style="color: #3a4359">의학계열</span><strong style="color: #c4501a">35%</strong></div>
            <div style="height: 10px; background: #eef0f5; border-radius: 999px; overflow: hidden"><div style="height: 100%; width: 87.5%; background: #ec6926; border-radius: 999px"></div></div>
          </div>
        
          <div style="display: flex; flex-direction: column; gap: 6px">
            <div style="display: flex; justify-content: space-between; font-size: 15px"><span style="color: #3a4359">서울대</span><strong style="color: #c4501a">23%</strong></div>
            <div style="height: 10px; background: #eef0f5; border-radius: 999px; overflow: hidden"><div style="height: 100%; width: 57.5%; background: #ec6926; border-radius: 999px"></div></div>
          </div>
        
          <div style="display: flex; flex-direction: column; gap: 6px">
            <div style="display: flex; justify-content: space-between; font-size: 15px"><span style="color: #3a4359">연세대 · 고려대</span><strong style="color: #c4501a">20%</strong></div>
            <div style="height: 10px; background: #eef0f5; border-radius: 999px; overflow: hidden"><div style="height: 100%; width: 50%; background: #ec6926; border-radius: 999px"></div></div>
          </div>
        
        <span style="font-size: 13px; color: #5a6275">지역 고3 중 5A 학생 비율 1.5% 대비</span>
      </div>
    </div>
  </section>

  
  <section id="why" style="background: #f5f6fa">
    <div style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
      <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #c4501a">WHY 5A</p>
      <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #102041; line-height: 1.3">진단에서 연속성까지,<br>7단계 5A 윈터 프로세스</h2>
      <p style="margin: 16px 0 0; font-size: 17px; line-height: 1.7; color: #4a5268">개인에게 최적화된 학습이 가능하도록, 학습자 시각에서 설계한 윈터 프로그램입니다.</p>
      <div style="margin-top: 40px; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px">
        
          <div style="background: #ffffff; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 12px">
            <div style="display: flex; align-items: baseline; gap: 10px">
              <span style="font-family: Poppins, sans-serif; font-size: 28px; font-weight: 800; color: #ec6926">01</span>
              <span style="font-size: 20px; font-weight: 900; color: #102041">진단</span>
            </div>
            <strong style="font-size: 16px; color: #1a2238">프리미엄 테스트 &amp; 상담</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #4a5268">입학 전 정밀 테스트와 상담으로 지금 실력과 취약점을 짚습니다.</p>
          </div>
        
          <div style="background: #ffffff; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 12px">
            <div style="display: flex; align-items: baseline; gap: 10px">
              <span style="font-family: Poppins, sans-serif; font-size: 28px; font-weight: 800; color: #ec6926">02</span>
              <span style="font-size: 20px; font-weight: 900; color: #102041">설계</span>
            </div>
            <strong style="font-size: 16px; color: #1a2238">학년별 맞춤 수업</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #4a5268">학년 맞춤 · 개인맞춤 선택수업제로 나만의 시간표를 만듭니다.</p>
          </div>
        
          <div style="background: #ffffff; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 12px">
            <div style="display: flex; align-items: baseline; gap: 10px">
              <span style="font-family: Poppins, sans-serif; font-size: 28px; font-weight: 800; color: #ec6926">03</span>
              <span style="font-size: 20px; font-weight: 900; color: #102041">확인</span>
            </div>
            <strong style="font-size: 16px; color: #1a2238">수업이해체크 &amp; 차별화된 테스트</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #4a5268">수업마다 이해도를 확인하고, 진도에 맞춘 5A 테스트로 빈틈을 찾습니다.</p>
          </div>
        
          <div style="background: #ffffff; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 12px">
            <div style="display: flex; align-items: baseline; gap: 10px">
              <span style="font-family: Poppins, sans-serif; font-size: 28px; font-weight: 800; color: #ec6926">04</span>
              <span style="font-size: 20px; font-weight: 900; color: #102041">피드백</span>
            </div>
            <strong style="font-size: 16px; color: #1a2238">수학책임담임제 &amp; 한 줄 노트</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #4a5268">수학 1:1 피드백, 사고력 향상을 위한 한 줄 노트, 질의응답.</p>
          </div>
        
          <div style="background: #ffffff; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 12px">
            <div style="display: flex; align-items: baseline; gap: 10px">
              <span style="font-family: Poppins, sans-serif; font-size: 28px; font-weight: 800; color: #ec6926">05</span>
              <span style="font-size: 20px; font-weight: 900; color: #102041">전략</span>
            </div>
            <strong style="font-size: 16px; color: #1a2238">입시특강 &amp; 탐구보고서</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #4a5268">학년별 입시특강과 탐구보고서로 입시 전략까지 세웁니다.</p>
          </div>
        
          <div style="background: #ffffff; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 12px">
            <div style="display: flex; align-items: baseline; gap: 10px">
              <span style="font-family: Poppins, sans-serif; font-size: 28px; font-weight: 800; color: #ec6926">06</span>
              <span style="font-size: 20px; font-weight: 900; color: #102041">관리</span>
            </div>
            <strong style="font-size: 16px; color: #1a2238">주6일 책임수업 &amp; 반별 담임</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #4a5268">주6일, 반별 담임이 학습과 생활을 끝까지 챙깁니다.</p>
          </div>
        
          <div style="background: #ffffff; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 12px">
            <div style="display: flex; align-items: baseline; gap: 10px">
              <span style="font-family: Poppins, sans-serif; font-size: 28px; font-weight: 800; color: #ec6926">07</span>
              <span style="font-size: 20px; font-weight: 900; color: #102041">연속성</span>
            </div>
            <strong style="font-size: 16px; color: #1a2238">포스트 윈터스쿨 (2/20)</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #4a5268">종강 후 단과강좌 &amp; 올케어 관리반으로 이어집니다.</p>
          </div>
        
      </div>
    </div>
  </section>

  
  <section id="program" style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
    <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #c4501a">SPECIAL PROGRAM</p>
    <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #102041; line-height: 1.3">진단으로 시작해,<br>시간표를 한 사람에게 맞춥니다.</h2>

    
    <div style="margin-top: 40px; border: 2px solid #102041; border-radius: 20px; overflow: hidden">
      <div style="background: #102041; color: #ffffff; padding: 24px 32px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; align-items: center">
        <strong style="font-size: 22px">프리미엄 테스트 &amp; 상담</strong>
        <span style="font-size: 15px; color: #c9d0e0">윈터스쿨 참여 학생 전원 응시 · 테스트 후 개별 상담 필수</span>
      </div>
      <div style="padding: 32px; display: flex; flex-wrap: wrap; gap: 40px">
        <div style="flex: 1 1 300px; min-width: 0; display: flex; flex-direction: column; gap: 18px">
          <div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 14px; font-weight: 700; color: #c4501a">응시료</span><span style="font-size: 17px; color: #1a2238"><strong>10,000원</strong> · 윈터스쿨 수강 시 전액 환불</span></div>
          <div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 14px; font-weight: 700; color: #c4501a">시험 시간 (70분 · 택 1)</span><span style="font-size: 16px; line-height: 1.7; color: #1a2238">오전 11:00 – 12:30<br>오후 15:30 – 17:00<br>저녁 20:30 – 22:00</span></div>
          <div style="display: flex; flex-direction: column; gap: 10px">
            <span style="font-size: 14px; font-weight: 700; color: #c4501a">시험 일정 (날짜 택 1)</span>
            
              <div style="display: flex; align-items: center; gap: 12px; font-size: 16px">
                <span style="width: 40px; font-weight: 700; color: #102041">1차</span>
                <span style="flex: 1; color: #1a2238">10/17(토) · 10/18(일)</span>
                
                <span style="font-size: 13px; color: #5a6275; background: #eef0f5; padding: 3px 10px; border-radius: 999px">종료</span>
              </div>
            
              <div style="display: flex; align-items: center; gap: 12px; font-size: 16px">
                <span style="width: 40px; font-weight: 700; color: #102041">2차</span>
                <span style="flex: 1; color: #1a2238">10/31(토) · 11/1(일)</span>
                
                <span style="font-size: 13px; color: #5a6275; background: #eef0f5; padding: 3px 10px; border-radius: 999px">종료</span>
              </div>
            
              <div style="display: flex; align-items: center; gap: 12px; font-size: 16px">
                <span style="width: 40px; font-weight: 700; color: #102041">3차</span>
                <span style="flex: 1; color: #1a2238">11/7(토) · 11/8(일)</span>
                
                <span style="font-size: 13px; color: #5a6275; background: #eef0f5; padding: 3px 10px; border-radius: 999px">종료</span>
              </div>
            
              <div style="display: flex; align-items: center; gap: 12px; font-size: 16px">
                <span style="width: 40px; font-weight: 700; color: #102041">4차</span>
                <span style="flex: 1; color: #1a2238">12/12(토) · 12/13(일)</span>
                <span style="font-size: 13px; font-weight: 700; color: #ffffff; background: #c4501a; padding: 3px 10px; border-radius: 999px">접수중</span>
                
              </div>
            
              <div style="display: flex; align-items: center; gap: 12px; font-size: 16px">
                <span style="width: 40px; font-weight: 700; color: #102041">5차</span>
                <span style="flex: 1; color: #1a2238">12/19(토) · 12/20(일)</span>
                <span style="font-size: 13px; font-weight: 700; color: #ffffff; background: #c4501a; padding: 3px 10px; border-radius: 999px">접수중</span>
                
              </div>
            
          </div>
        </div>
        <div style="flex: 1.4 1 420px; min-width: 0; display: flex; flex-direction: column; gap: 12px">
          <span style="font-size: 14px; font-weight: 700; color: #c4501a">학년별 시험 범위 (유형 택 1)</span>
          <div style="overflow-x: auto; border: 1px solid #e4e7ee; border-radius: 12px">
            <table style="width: 100%; min-width: 460px; border-collapse: collapse; font-size: 15px">
              <thead><tr style="background: #f5f6fa"><th scope="col" style="text-align: left; padding: 12px 16px; color: #3a4359">대상</th><th scope="col" style="text-align: left; padding: 12px 16px; color: #3a4359">A형</th><th scope="col" style="text-align: left; padding: 12px 16px; color: #3a4359">B형</th><th scope="col" style="text-align: left; padding: 12px 16px; color: #3a4359">C형</th></tr></thead>
              <tbody>
                <tr style="border-top: 1px solid #e4e7ee"><th scope="row" style="text-align: left; padding: 14px 16px; color: #102041">현 중3</th><td style="padding: 14px 16px">중3수학</td><td style="padding: 14px 16px">중3수학 + 공통수학1</td><td style="padding: 14px 16px">공통수학1 + 2</td></tr>
                <tr style="border-top: 1px solid #e4e7ee"><th scope="row" style="text-align: left; padding: 14px 16px; color: #102041">현 고1</th><td style="padding: 14px 16px">공통수학1 + 2</td><td style="padding: 14px 16px">공통수학1 + 2 + 대수</td><td style="padding: 14px 16px">대수 + 미적분Ⅰ</td></tr>
                <tr style="border-top: 1px solid #e4e7ee"><th scope="row" style="text-align: left; padding: 14px 16px; color: #102041">현 고2</th><td style="padding: 14px 16px">대수 + 미적분Ⅰ</td><td style="padding: 14px 16px">대수 + 미적분Ⅰ + 확통</td><td style="padding: 14px 16px; color: #8a91a3">—</td></tr>
              </tbody>
            </table>
          </div>
          <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
            
              <div style="display: flex; flex-direction: column; gap: 2px; background: #f5f6fa; border-radius: 10px; padding: 12px 16px; flex: 1 1 120px">
                <span style="font-family: Poppins, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: #c4501a">ASSESS</span>
                <strong style="font-size: 15px; color: #102041">진단</strong>
                <span style="font-size: 13px; color: #5a6275">프리미엄 진단 테스트</span>
              </div>
            
              <div style="display: flex; flex-direction: column; gap: 2px; background: #f5f6fa; border-radius: 10px; padding: 12px 16px; flex: 1 1 120px">
                <span style="font-family: Poppins, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: #c4501a">CONSULT</span>
                <strong style="font-size: 15px; color: #102041">상담</strong>
                <span style="font-size: 13px; color: #5a6275">테스트 결과지 상담</span>
              </div>
            
              <div style="display: flex; flex-direction: column; gap: 2px; background: #f5f6fa; border-radius: 10px; padding: 12px 16px; flex: 1 1 120px">
                <span style="font-family: Poppins, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: #c4501a">DESIGN</span>
                <strong style="font-size: 15px; color: #102041">설계</strong>
                <span style="font-size: 13px; color: #5a6275">개인별 맞춤 시간표</span>
              </div>
            
              <div style="display: flex; flex-direction: column; gap: 2px; background: #f5f6fa; border-radius: 10px; padding: 12px 16px; flex: 1 1 120px">
                <span style="font-family: Poppins, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: #c4501a">REFINE</span>
                <strong style="font-size: 15px; color: #102041">정정</strong>
                <span style="font-size: 13px; color: #5a6275">수강 신청 정정</span>
              </div>
            
          </div>
        </div>
      </div>
    </div>

    
    <div style="margin-top: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 20px">
      <div style="background: #ec6926; border-radius: 20px; padding: 32px; display: flex; flex-direction: column; gap: 14px; color: #102041">
        <strong style="font-size: 22px; font-weight: 900">1:1 과외형 수학 책임 담임제</strong>
        <p style="margin: 0; font-size: 16px; line-height: 1.7">수학 담임 1명이 학생 15~20명을 맡아 학생별 학습 플랜을 세우고, 매주 2회 이상 대면 코칭으로 약점 진단 → 과제 제공 → 점검 → 1:1 맞춤 코칭까지 책임집니다.</p>
        <div style="margin-top: auto; display: flex; align-items: flex-end; gap: 12px; padding-top: 12px">
          <strong style="font-family: Poppins, sans-serif; font-size: 64px; font-weight: 800; line-height: 0.9">62%</strong>
          <span style="font-size: 15px; font-weight: 700; line-height: 1.5">수학 책임 담임 수강생 중<br>1등급 비율 · 2026 윈터스쿨 기준</span>
        </div>
      </div>
      <div style="border: 1px solid #e4e7ee; border-radius: 20px; padding: 32px; display: flex; flex-direction: column; gap: 14px">
        <strong style="font-size: 22px; font-weight: 900; color: #102041">5A 메디컬SKY 멘토단 질의응답</strong>
        <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #4a5268">교과 선생님과 멘토 선생님에게 모두 대면으로 질문할 수 있습니다. 질의응답실 대기 리스트에 좌석 번호를 적으면 멘토가 직접 찾아갑니다.</p>
        <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #4a5268">단편적인 질문은 실력이 되지 않기에, 5A는 <strong style="color: #102041">‘성적을 올리는 질문법’</strong>까지 가르칩니다.</p>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto">
          <span style="font-size: 14px; padding: 6px 12px; background: #f5f6fa; border-radius: 999px; color: #3a4359">수업이해체크</span>
          <span style="font-size: 14px; padding: 6px 12px; background: #f5f6fa; border-radius: 999px; color: #3a4359">한 줄 노트</span>
          <span style="font-size: 14px; padding: 6px 12px; background: #f5f6fa; border-radius: 999px; color: #3a4359">일일 · 주간 테스트 성적표</span>
        </div>
      </div>
    </div>

    
    <div style="margin-top: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px">
      
        <div style="background: #f5f6fa; border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 14px">
          <strong style="font-size: 19px; font-weight: 900; color: #102041">반별 책임 담임제</strong>
          <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 8px; font-size: 15px; line-height: 1.6; color: #3a4359">
            <li>등·하원 출결관리 및 휴대폰 집중관리</li><li>국·수·영 일일테스트, 일일 영단어테스트</li><li>성적대별 학습 스케줄 제시</li><li>월간 학습계획표로 주간 학습 관리</li><li>자기평가·오답노트로 취약과목 극복</li>
          </ul>
        </div>
      
        <div style="background: #f5f6fa; border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 14px">
          <strong style="font-size: 19px; font-weight: 900; color: #102041">학년별 입시 관리</strong>
          <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 8px; font-size: 15px; line-height: 1.6; color: #3a4359">
            <li>학생부종합: 학생부 검토 및 창체 방향 제시</li><li>학생부교과: 목표대학 합격예상 커트라인 안내</li><li>개인별 수시 포트폴리오 · 정시 합격선 제시</li><li>고3 2028 / 고2 2029 / 고1 2030 입시특강</li>
          </ul>
        </div>
      
        <div style="background: #f5f6fa; border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 14px">
          <strong style="font-size: 19px; font-weight: 900; color: #102041">몰입 학습력 프로젝트</strong>
          <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 8px; font-size: 15px; line-height: 1.6; color: #3a4359">
            <li>휴대폰 수거와 학습 외 전자기기 통제</li><li>자기주도 학습 시 졸음 · 수면 · 대화 통제</li><li>개인 학습플래너로 학습량 극대화</li><li>멘탈이 약한 학생을 위한 상황 가정 상담케어</li>
          </ul>
        </div>
      
    </div>
  </section>

  
  <section id="admission" style="background: #102041; color: #ffffff">
    <div style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
      <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #ec6926">ADMISSION</p>
      <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; line-height: 1.3">겨울방학 7주,<br>처음부터 끝까지 맡깁니다.</h2>
      <p style="margin: 16px 0 0; font-size: 17px; line-height: 1.7; color: #c9d0e0">반 배정은 입학 자격요건과 프리미엄 테스트(수학), 개별 상담을 통해 이루어집니다.</p>
      <div style="margin-top: 36px; background: #ffffff; color: #1a2238; border-radius: 20px; overflow: hidden">
        
          <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
            <div style="flex: 0 0 180px; padding: 20px 24px; background: #f5f6fa; font-size: 15px; font-weight: 700; color: #102041">윈터스쿨 기간</div>
            <div style="flex: 1 1 400px; min-width: 0; padding: 20px 24px; font-size: 16px; line-height: 1.7; white-space: pre-line">2027. 1. 4 (월) ~ 2. 19 (금)
1/4 ~ 1/8은 저녁수업 진행 (방학 시작 학생 07:50 등원, 방학 전 학생 18:30 등원)</div>
          </div>
        
          <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
            <div style="flex: 0 0 180px; padding: 20px 24px; background: #f5f6fa; font-size: 15px; font-weight: 700; color: #102041">모집 대상</div>
            <div style="flex: 1 1 400px; min-width: 0; padding: 20px 24px; font-size: 16px; line-height: 1.7; white-space: pre-line">예비 고1 (현 중3) · 예비 고2 (현 고1) · 예비 고3 (현 고2)</div>
          </div>
        
          <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
            <div style="flex: 0 0 180px; padding: 20px 24px; background: #f5f6fa; font-size: 15px; font-weight: 700; color: #102041">등 · 하원</div>
            <div style="flex: 1 1 400px; min-width: 0; padding: 20px 24px; font-size: 16px; line-height: 1.7; white-space: pre-line">[월~토] 07:50 등원 · 22:00 하원 (토요일 17:30 자율 하원)
[일요일] 08:30 ~ 22:00 개방, 자율 등하원</div>
          </div>
        
          <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
            <div style="flex: 0 0 180px; padding: 20px 24px; background: #f5f6fa; font-size: 15px; font-weight: 700; color: #102041">셔틀</div>
            <div style="flex: 1 1 400px; min-width: 0; padding: 20px 24px; font-size: 16px; line-height: 1.7; white-space: pre-line">등하원 셔틀 유료 신청 후 이용 (토요일 하원·공휴일·일요일 제외) · 개별노선 학원 문의</div>
          </div>
        
          <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
            <div style="flex: 0 0 180px; padding: 20px 24px; background: #f5f6fa; font-size: 15px; font-weight: 700; color: #102041">교육과정</div>
            <div style="flex: 1 1 400px; min-width: 0; padding: 20px 24px; font-size: 16px; line-height: 1.7; white-space: pre-line">국어 · 수학 · 영어 · 탐구 · 한국사 · 입시특강 · 주간 TEST · 개인별 1:1 수학 책임 담임제
예비 고3은 인문논술 · 수리논술 포함 (학년별 세부는 아래 커리큘럼 참고)</div>
          </div>
        
          <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
            <div style="flex: 0 0 180px; padding: 20px 24px; background: #f5f6fa; font-size: 15px; font-weight: 700; color: #102041">수강료</div>
            <div style="flex: 1 1 400px; min-width: 0; padding: 20px 24px; font-size: 16px; line-height: 1.7; white-space: pre-line">2,820,000원 (7주) · 독서실비 무료 · 교재비/컨텐츠비, 급식비 별도</div>
          </div>
        
          <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
            <div style="flex: 0 0 180px; padding: 20px 24px; background: #f5f6fa; font-size: 15px; font-weight: 700; color: #102041">예약금</div>
            <div style="flex: 1 1 400px; min-width: 0; padding: 20px 24px; font-size: 16px; line-height: 1.7; white-space: pre-line">300,000원 · 예약금 납부자 최종 등록일 2026. 11. 15 (일) 오후 8시까지</div>
          </div>
        
          <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
            <div style="flex: 0 0 180px; padding: 20px 24px; background: #f5f6fa; font-size: 15px; font-weight: 700; color: #102041">제출서류</div>
            <div style="flex: 1 1 400px; min-width: 0; padding: 20px 24px; font-size: 16px; line-height: 1.7; white-space: pre-line">입학원서(학원양식) &amp; 학생부 또는 모의고사 성적표 사본 (필수)</div>
          </div>
        
          <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
            <div style="flex: 0 0 180px; padding: 20px 24px; background: #f5f6fa; font-size: 15px; font-weight: 700; color: #102041">환불 규정</div>
            <div style="flex: 1 1 400px; min-width: 0; padding: 20px 24px; font-size: 16px; line-height: 1.7; white-space: pre-line">교습 시작 전 전액 환불 · 교습기간 1/3 이내 2/3 환불 · 1/2 이내 1/2 환불 · 1/2 초과 시 환불 불가
모집정원 충원 시 조기 마감 (수강료 또는 예약금 납부자만 정원 포함)</div>
          </div>
        
      </div>

      <div id="scholarship" style="margin-top: 48px; display: flex; flex-direction: column; gap: 20px">
        <div style="display: flex; flex-direction: column; gap: 8px">
          <h3 style="margin: 0; font-size: 24px; font-weight: 900">장학제도</h3>
          <p style="margin: 0; font-size: 15px; color: #c9d0e0">2027 윈터스쿨 입학생에게만 적용 · 중복 적용 없이, 학생에게 유리한 기준을 우선 적용합니다.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 16px">
          <div style="background: #ffffff; color: #1a2238; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column">
            <div style="background: #ec6926; padding: 22px 26px; display: flex; justify-content: space-between; align-items: center; gap: 12px">
              <strong style="font-size: 20px; font-weight: 900; color: #102041">성적우수 장학</strong>
              <span style="font-size: 15px; font-weight: 700; color: #102041">수강료 <span style="font-family: Poppins, sans-serif; font-size: 30px; font-weight: 800">15%</span> 면제</span>
            </div>
            <div style="padding: 8px 26px 20px; display: flex; flex-direction: column">
              <div style="display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid #e4e7ee"><span style="flex: 0 0 112px; font-size: 14px; font-weight: 700; color: #c4501a">모의고사 · 고2·3</span><span style="font-size: 15px; line-height: 1.6">2026년 시행 모의고사 국수영 합 3</span></div>
              <div style="display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid #e4e7ee"><span style="flex: 0 0 112px; font-size: 14px; font-weight: 700; color: #c4501a">내신 · 고2 과정</span><span style="font-size: 15px; line-height: 1.6">국수영사과 내신 1.1 이내</span></div>
              <div style="display: flex; gap: 14px; padding: 14px 0"><span style="flex: 0 0 112px; font-size: 14px; font-weight: 700; color: #c4501a">내신 · 고3 과정</span><span style="font-size: 15px; line-height: 1.6">국수영사과 내신 1.2 이내</span></div>
              <p style="margin: 6px 0 0; font-size: 13px; line-height: 1.6; color: #5a6275">2026년 내신 성적표 및 학력평가 성적표 제출 필수</p>
            </div>
          </div>
          <div style="background: #ffffff; color: #1a2238; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column">
            <div style="background: #1b2c55; padding: 22px 26px; display: flex; justify-content: space-between; align-items: center; gap: 12px">
              <strong style="font-size: 20px; font-weight: 900; color: #ffffff">멤버십 장학</strong>
              <span style="font-size: 15px; font-weight: 700; color: #ffffff">수강료 <span style="font-family: Poppins, sans-serif; font-size: 30px; font-weight: 800; color: #ec6926">10%</span> 면제</span>
            </div>
            <div style="padding: 8px 26px 20px; display: flex; flex-direction: column">
              <div style="display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid #e4e7ee"><span style="flex: 0 0 112px; font-size: 14px; font-weight: 700; color: #c4501a">윈터스쿨 재원생</span><span style="font-size: 15px; line-height: 1.6">5A아카데미 전년도 윈터스쿨 재원생</span></div>
              <div style="display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid #e4e7ee"><span style="flex: 0 0 112px; font-size: 14px; font-weight: 700; color: #c4501a">단과 재원생</span><span style="font-size: 15px; line-height: 1.6">2026년 5A아카데미 단과 4개월 이상 재원생</span></div>
              <div style="display: flex; gap: 14px; padding: 14px 0"><span style="flex: 0 0 112px; font-size: 14px; font-weight: 700; color: #c4501a">형제 / 자매</span><span style="font-size: 15px; line-height: 1.6">윈터스쿨·단과 포함 정규 과정에 형제·자매 동시 등록 시</span></div>
              <p style="margin: 6px 0 0; font-size: 13px; line-height: 1.6; color: #5a6275">대상: 전체 학년</p>
            </div>
          </div>
        </div>
        <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; font-size: 14px; line-height: 1.7; color: #c9d0e0">
          <li>우선등록 기간 내 등록 학생은 장학 기준에 더해 우선등록 할인혜택이 적용됩니다.</li>
          <li>교재비, 모의고사비, 급식비는 장학금에 포함되지 않습니다.</li>
          <li>제적 처분, 정당한 사유 없는 자퇴, 평균 출석률 95% 이하인 경우 장학금 지급을 중지·취소하며, 이미 지급된 장학금은 즉시 회수합니다.</li>
        </ul>
      </div>

      <h3 style="margin: 48px 0 0; font-size: 24px; font-weight: 900">입학전형 · 반 편성 기준</h3>
      <p style="margin: 8px 0 0; font-size: 15px; color: #c9d0e0">무시험 입학전형 자격 미달 시, 프리미엄 테스트 응시 후 상담을 통해 입학 가능합니다.</p>
      <div style="margin-top: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px">
        
          <div style="background: #1b2c55; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 14px">
            <strong style="font-size: 19px">예비 고1 (현 중3)</strong>
            
              <div style="display: flex; gap: 12px; align-items: flex-start">
                <span style="flex: 0 0 auto; min-width: 84px; text-align: center; font-family: Poppins, sans-serif; font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: #ec6926; color: #102041">MEDI-SKY</span>
                <span style="font-size: 14px; line-height: 1.6; color: #dfe4ef">‘A1’ 자격요건 충족자 중 프리미엄 테스트 응시로 입반</span>
              </div>
            
              <div style="display: flex; gap: 12px; align-items: flex-start">
                <span style="flex: 0 0 auto; min-width: 84px; text-align: center; font-family: Poppins, sans-serif; font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: #ec6926; color: #102041">A1</span>
                <span style="font-size: 14px; line-height: 1.6; color: #dfe4ef">중3 가내신 190~199</span>
              </div>
            
              <div style="display: flex; gap: 12px; align-items: flex-start">
                <span style="flex: 0 0 auto; min-width: 84px; text-align: center; font-family: Poppins, sans-serif; font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: #ec6926; color: #102041">A2</span>
                <span style="font-size: 14px; line-height: 1.6; color: #dfe4ef">중3 가내신 180~189</span>
              </div>
            
          </div>
        
          <div style="background: #1b2c55; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 14px">
            <strong style="font-size: 19px">예비 고2 (현 고1)</strong>
            
              <div style="display: flex; gap: 12px; align-items: flex-start">
                <span style="flex: 0 0 auto; min-width: 84px; text-align: center; font-family: Poppins, sans-serif; font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: #ec6926; color: #102041">MEDI-SKY</span>
                <span style="font-size: 14px; line-height: 1.6; color: #dfe4ef">고1 모의고사 국/수/영 등급 합 4 이내 or 교과 1.2등급 이내</span>
              </div>
            
              <div style="display: flex; gap: 12px; align-items: flex-start">
                <span style="flex: 0 0 auto; min-width: 84px; text-align: center; font-family: Poppins, sans-serif; font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: #ec6926; color: #102041">S1</span>
                <span style="font-size: 14px; line-height: 1.6; color: #dfe4ef">국/수/영 중 2개 등급 합 5 이내 or 교과 1.7등급 이내</span>
              </div>
            
              <div style="display: flex; gap: 12px; align-items: flex-start">
                <span style="flex: 0 0 auto; min-width: 84px; text-align: center; font-family: Poppins, sans-serif; font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: #ec6926; color: #102041">S2</span>
                <span style="font-size: 14px; line-height: 1.6; color: #dfe4ef">국/수/영 중 2개 등급 합 8 이내 or 교과 3.0등급 이내</span>
              </div>
            
          </div>
        
          <div style="background: #1b2c55; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 14px">
            <strong style="font-size: 19px">예비 고3 (현 고2)</strong>
            
              <div style="display: flex; gap: 12px; align-items: flex-start">
                <span style="flex: 0 0 auto; min-width: 84px; text-align: center; font-family: Poppins, sans-serif; font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: #ec6926; color: #102041">MEDI-SKY</span>
                <span style="font-size: 14px; line-height: 1.6; color: #dfe4ef">고2 모의고사 국/수/영 등급 합 4 이내 or 교과 1.3등급 이내</span>
              </div>
            
              <div style="display: flex; gap: 12px; align-items: flex-start">
                <span style="flex: 0 0 auto; min-width: 84px; text-align: center; font-family: Poppins, sans-serif; font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: #ec6926; color: #102041">M1</span>
                <span style="font-size: 14px; line-height: 1.6; color: #dfe4ef">국/수/영 중 2개 등급 합 6 이내 or 교과 1.8등급 이내</span>
              </div>
            
              <div style="display: flex; gap: 12px; align-items: flex-start">
                <span style="flex: 0 0 auto; min-width: 84px; text-align: center; font-family: Poppins, sans-serif; font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: #ec6926; color: #102041">M2</span>
                <span style="font-size: 14px; line-height: 1.6; color: #dfe4ef">국/수/영 중 2개 등급 합 8 이내 or 교과 3.0등급 이내</span>
              </div>
            
          </div>
        
      </div>
      <p style="margin: 16px 0 0; font-size: 14px; line-height: 1.7; color: #c9d0e0">[지원 가능 고교] 영재고, 과학고, 민족사관고, 상산고, 공주한일고, 하나고, 용인외대부고, 포항제철고, 천안북일고, 현대청운고 등</p>
    </div>
  </section>

  
  <section id="pre" style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
    <div style="border-radius: 20px; background: #fff3ec; padding: 40px; display: flex; flex-wrap: wrap; gap: 40px">
      <div style="flex: 1 1 380px; min-width: 0; display: flex; flex-direction: column; gap: 14px">
        <p style="margin: 0; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #c4501a">PRE WINTER · 예비 고1</p>
        <h2 style="margin: 0; font-size: clamp(26px, 3vw, 34px); font-weight: 900; color: #102041; line-height: 1.3">윈터스쿨보다 한 달 먼저,<br>고등 수학을 시작합니다.</h2>
        <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #4a5268">공통수학1 · 공통수학2 선행으로 수학 실력을 수직 상승시키는 한 달 과정입니다.</p>
        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 8px; font-size: 16px; line-height: 1.6">
          <div><strong style="color: #102041">기간</strong>  2026. 12. 1 (화) ~ 12. 31 (목) · 12/25 휴강</div>
          <div><strong style="color: #102041">수업</strong>  주 5일 (월~금) 18:00 – 22:00 · 수학 17.5T + 테스트 2.5T</div>
          <div><strong style="color: #102041">수강료</strong>  1,160,000원 <span style="color: #5a6275">(교재·컨텐츠비 별도)</span></div>
          <div><strong style="color: #102041">예약금</strong>  300,000원 <span style="color: #5a6275">(최종 등록 11/15(일) 20시까지)</span></div>
        </div>
      </div>
      <div style="flex: 1 1 380px; min-width: 0; background: #ffffff; border-radius: 16px; padding: 8px 0; align-self: flex-start">
        
          <div style="display: flex; gap: 16px; padding: 16px 24px; border-bottom: 1px solid #f0e2d9">
            <span style="flex: 0 0 110px; font-size: 15px; font-weight: 700; color: #102041">18:00 – 18:30</span>
            <div style="display: flex; flex-direction: column; gap: 2px"><strong style="font-size: 16px; color: #1a2238">Daily Test</strong><span style="font-size: 14px; color: #5a6275">수업내용 복습 및 점검</span></div>
          </div>
        
          <div style="display: flex; gap: 16px; padding: 16px 24px; border-bottom: 1px solid #f0e2d9">
            <span style="flex: 0 0 110px; font-size: 15px; font-weight: 700; color: #102041">18:30 – 20:10</span>
            <div style="display: flex; flex-direction: column; gap: 2px"><strong style="font-size: 16px; color: #1a2238">공통수학 1</strong><span style="font-size: 14px; color: #5a6275">다항식, 방정식과 부등식, 경우의 수</span></div>
          </div>
        
          <div style="display: flex; gap: 16px; padding: 16px 24px; border-bottom: 1px solid #f0e2d9">
            <span style="flex: 0 0 110px; font-size: 15px; font-weight: 700; color: #102041">20:20 – 22:00</span>
            <div style="display: flex; flex-direction: column; gap: 2px"><strong style="font-size: 16px; color: #1a2238">공통수학 2</strong><span style="font-size: 14px; color: #5a6275">도형의 방정식, 함수</span></div>
          </div>
        
      </div>
    </div>
  </section>

  
  <div data-grade="0"><section id="curriculum" style="background: #f5f6fa">
    <div style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
      <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #c4501a">CURRICULUM</p>
      <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #102041; line-height: 1.3">학년마다 다른 겨울,<br>커리큘럼도 다르게 짭니다.</h2>
      <div role="tablist" aria-label="학년 선택" style="margin-top: 32px; display: flex; flex-wrap: wrap; gap: 8px">
        
          
            <button type="button" role="tab" aria-selected="true" data-act="tb.pick" data-idx="0" style="min-height: 48px; padding: 0 24px; font-family: inherit; font-size: 17px; font-weight: 700; border: 0; border-radius: 999px; background: #102041; color: #ffffff; cursor: pointer">예비 고1 (현 중3)</button>
          
          
        
          
          
            <button type="button" role="tab" aria-selected="false" data-act="tb.pick" data-idx="1" style="min-height: 48px; padding: 0 24px; font-family: inherit; font-size: 17px; font-weight: 500; border: 1px solid #cfd4df; border-radius: 999px; background: #ffffff; color: #3a4359; cursor: pointer">예비 고2 (현 고1)</button>
          
        
          
          
            <button type="button" role="tab" aria-selected="false" data-act="tb.pick" data-idx="2" style="min-height: 48px; padding: 0 24px; font-family: inherit; font-size: 17px; font-weight: 500; border: 1px solid #cfd4df; border-radius: 999px; background: #ffffff; color: #3a4359; cursor: pointer">예비 고3 (현 고2)</button>
          
        
      </div>
      <div role="tabpanel" style="margin-top: 24px; background: #ffffff; border-radius: 20px; padding: 36px; display: flex; flex-direction: column; gap: 24px">
        <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
          <span style="font-size: 14px; font-weight: 700; color: #ffffff; background: #c4501a; padding: 5px 12px; border-radius: 999px">고1 맞춤 선택형</span>
          <strong style="font-size: 22px; font-weight: 900; color: #102041">주요 내신은 수준별 반 강좌, 선행은 선택형</strong>
        </div>
        <p style="margin: 0; font-size: 16px; line-height: 1.75; color: #4a5268">중학과정은 상대평가가 없어 내 위치를 객관화하기 어렵습니다. 개강 전 프리미엄 테스트와 대면 상담으로 학습력·학습이력을 파악한 뒤, 고1 주요 내신은 수준별 반 강좌(권장필수), 선행과정은 선택형 강좌로 구성합니다.</p>
        <div style="display: flex; flex-direction: column; gap: 4px">
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">국어</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">문학</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">1학년 내신·수능 필수 문학 작품 총정리 + 필수 유형 문풀</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">화법과 언어(문법)</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">1학년 내신·수능 문법 개념 총정리 + 필수 유형 문풀</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">독서와 작문</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">평가원 시각의 지문 독해원리와 기출로 독해력 배양</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">수학</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">공통수학1</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">개념과 대표 유형 정리 / 심화 유형·심화 문제풀이</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">공통수학2</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">개념과 대표 유형 정리 / 심화 유형·심화 문제풀이</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">공수1 내신집중문풀</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">고1 첫 내신을 위한 집중문풀 1등급 프로젝트</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">대수</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">필수 개념 꼼꼼한 정리 / 7주 고난도 압축정리</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">미적분 I</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">필수 개념 완전정복 / 준킬러 문항 해결</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">영어</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">어휘어법</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">내신·수능 단어 정복, 어법 7주 완벽 정복</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">독해</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">문단의 논리 구조 이해로 내신·수능 독해 완성</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">작문&amp;서술형</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">지문 분석력 향상으로 내신 서술형 집중공략</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">탐구·한국사</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">통합과학</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">내신·통합수능 만점 개념 완벽정리 + 필수 유형</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">통합사회</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 150분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">내신·통합수능 만점 개념 완벽정리 + 필수 유형</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">과탐 · 사탐 선택</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">7주 부스트: 고2 선행, 내신 개념 구조화</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">한국사</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">선사~조선말 통치사 중심 핵심요지·출제 포인트</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">TEST</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">주간 국·영·수</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">진도에 맞춘 주 단위 진단 테스트</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">국어 개념어</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">50분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">문학·비문학 주요 개념어</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">고등단어정복</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">고등영어 기본·심화 어휘</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">입시케어</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">윈터 입시특강</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">50분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">2030 대입 파악하기 · 생기부 만들기 첫걸음 · 통합형 수능대비</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">수학 책임담임제</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">1:1 케어</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">담임 1명당 15명, 매주 2회 이상 대면 코칭</span>
                  </div>
                
              </div>
            </div>
          
        </div>
        <p style="margin: 0; font-size: 13px; line-height: 1.7; color: #5a6275">탐구는 물리·화학·생명·지구·사회와 문화·현대사회와 윤리 중 2과목 선택 (미개설 과목은 인강학습관리로 대체) · 모든 강좌는 신청자 5인 이상일 때 개강 · 학사일정에 따라 커리큘럼은 일부 변동될 수 있습니다.</p>
      </div>
    </div>
  </section></div><div data-grade="1" hidden><section style="background: #f5f6fa">
    <div style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
      <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #c4501a">CURRICULUM</p>
      <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #102041; line-height: 1.3">학년마다 다른 겨울,<br>커리큘럼도 다르게 짭니다.</h2>
      <div role="tablist" aria-label="학년 선택" style="margin-top: 32px; display: flex; flex-wrap: wrap; gap: 8px">
        
          
          
            <button type="button" role="tab" aria-selected="false" data-act="tb.pick" data-idx="0" style="min-height: 48px; padding: 0 24px; font-family: inherit; font-size: 17px; font-weight: 500; border: 1px solid #cfd4df; border-radius: 999px; background: #ffffff; color: #3a4359; cursor: pointer">예비 고1 (현 중3)</button>
          
        
          
            <button type="button" role="tab" aria-selected="true" data-act="tb.pick" data-idx="1" style="min-height: 48px; padding: 0 24px; font-family: inherit; font-size: 17px; font-weight: 700; border: 0; border-radius: 999px; background: #102041; color: #ffffff; cursor: pointer">예비 고2 (현 고1)</button>
          
          
        
          
          
            <button type="button" role="tab" aria-selected="false" data-act="tb.pick" data-idx="2" style="min-height: 48px; padding: 0 24px; font-family: inherit; font-size: 17px; font-weight: 500; border: 1px solid #cfd4df; border-radius: 999px; background: #ffffff; color: #3a4359; cursor: pointer">예비 고3 (현 고2)</button>
          
        
      </div>
      <div role="tabpanel" style="margin-top: 24px; background: #ffffff; border-radius: 20px; padding: 36px; display: flex; flex-direction: column; gap: 24px">
        <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
          <span style="font-size: 14px; font-weight: 700; color: #ffffff; background: #c4501a; padding: 5px 12px; border-radius: 999px">개인맞춤 선택형</span>
          <strong style="font-size: 22px; font-weight: 900; color: #102041">전 강좌 개인맞춤 선택형</strong>
        </div>
        <p style="margin: 0; font-size: 16px; line-height: 1.75; color: #4a5268">예비 고2는 고1 취약점을 보완하고 강점을 찾아 나만의 입시 지형을 만드는 전환점입니다. 교육과정이 복잡하고 과목 수가 많아, 프리미엄 테스트와 대면 상담을 바탕으로 전 강좌를 개인맞춤 선택형으로 진행합니다.</p>
        <div style="display: flex; flex-direction: column; gap: 4px">
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">국어</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">문학</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">고2 필수 문학작품(고전+현대) 유형 정리 / 고난도 수능식 접근</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">독서와 작문</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">비문학 기본기 정립 / 평가원 고난도 기출 (주제탐구독서 포함)</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">화법과 언어(문법)</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">문법 필수 개념 + 문제풀이로 내신·수능 대비</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">실전 모고</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">기출 모의고사 타임어택 · 오답분석 트레이닝</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">수학</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">대수</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">필수 개념 꼼꼼한 정리 / 7주 고난도 압축정리</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">미적분 I</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">필수 개념 완전정복 / 준킬러 이상 문항 해결</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">확률과 통계</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">필수 개념 / 고난도 내신·수능 4점 문항</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">미적분 II</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">필수 개념 / 고난도 내신문항 해결</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">기하</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">필수 내신 개념 / 내신 고난도 문항 해결</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">대수 내신집중문풀</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">내신 빈출 유형 · 실전 문풀 집중대비</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">영어</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">어휘어법</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">단어·어법 7주 정복 / 고난도 어법·서술형</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">독해</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">문단 구성원리 독해 / 순서·삽입 등 고난도 출제코드</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">실전모고</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">미니모의고사로 실전력·독해력 배양</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">탐구·한국사</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">내신탐구 (과탐·사탐)</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">7주 부스트: 내신 개념 구조화 → 핵심 실험·그래프·개념</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">통합과학(수능형)</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">통합수능 만점 개념정리 + 통합형 유형</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">통합사회(수능형)</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 150분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">통합수능 만점 개념정리 + 통합형 유형</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">한국사(수능형)</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">선사~조선말 핵심요지·출제 포인트</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">TEST</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">주간 국·영·수</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">진도에 맞춘 주 단위 진단 테스트</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">국어 고전시가</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">50분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">고전문학 주요 개념어</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">고등단어정복</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">고등영어 기본·심화 어휘</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">입시케어</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">윈터 입시특강</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">50분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">2029 대입 파악하기 · 고2 생기부 업그레이드 · 통합형 수능대비</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">수학 책임담임제</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">1:1 케어</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">담임 1명당 15명, 매주 2회 이상 대면 코칭</span>
                  </div>
                
              </div>
            </div>
          
        </div>
        <p style="margin: 0; font-size: 13px; line-height: 1.7; color: #5a6275">내신탐구는 물리·화학·생명·지구·사회와 문화·현대사회와 윤리 중 2과목 선택 (미개설 과목은 인강학습관리로 대체) · 모든 강좌는 신청자 5인 이상일 때 개강 · 학사일정에 따라 커리큘럼은 일부 변동될 수 있습니다.</p>
      </div>
    </div>
  </section></div><div data-grade="2" hidden><section style="background: #f5f6fa">
    <div style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
      <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #c4501a">CURRICULUM</p>
      <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #102041; line-height: 1.3">학년마다 다른 겨울,<br>커리큘럼도 다르게 짭니다.</h2>
      <div role="tablist" aria-label="학년 선택" style="margin-top: 32px; display: flex; flex-wrap: wrap; gap: 8px">
        
          
          
            <button type="button" role="tab" aria-selected="false" data-act="tb.pick" data-idx="0" style="min-height: 48px; padding: 0 24px; font-family: inherit; font-size: 17px; font-weight: 500; border: 1px solid #cfd4df; border-radius: 999px; background: #ffffff; color: #3a4359; cursor: pointer">예비 고1 (현 중3)</button>
          
        
          
          
            <button type="button" role="tab" aria-selected="false" data-act="tb.pick" data-idx="1" style="min-height: 48px; padding: 0 24px; font-family: inherit; font-size: 17px; font-weight: 500; border: 1px solid #cfd4df; border-radius: 999px; background: #ffffff; color: #3a4359; cursor: pointer">예비 고2 (현 고1)</button>
          
        
          
            <button type="button" role="tab" aria-selected="true" data-act="tb.pick" data-idx="2" style="min-height: 48px; padding: 0 24px; font-family: inherit; font-size: 17px; font-weight: 700; border: 0; border-radius: 999px; background: #102041; color: #ffffff; cursor: pointer">예비 고3 (현 고2)</button>
          
          
        
      </div>
      <div role="tabpanel" style="margin-top: 24px; background: #ffffff; border-radius: 20px; padding: 36px; display: flex; flex-direction: column; gap: 24px">
        <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
          <span style="font-size: 14px; font-weight: 700; color: #ffffff; background: #c4501a; padding: 5px 12px; border-radius: 999px">개인맞춤 선택형</span>
          <strong style="font-size: 22px; font-weight: 900; color: #102041">2028 입시 첫 세대, 전 강좌 개인맞춤</strong>
        </div>
        <p style="margin: 0; font-size: 16px; line-height: 1.75; color: #4a5268">예비 고3은 2028 입시 첫 세대로, 어느 학년보다 불확실성이 높습니다. 고1·2의 취약점을 보완하고 강점을 완성해야 하는 시기이기에, 프리미엄 테스트와 대면 상담을 바탕으로 전 강좌를 개인맞춤 선택형으로 진행합니다.</p>
        <div style="display: flex; flex-direction: column; gap: 4px">
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">국어</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">문학</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">수능·평가원 기출 필수 작품 유형 정리 / 고난도 수능식 접근</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">독서와 작문</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">비문학 수능 기본기 / 평가원 고난도 기출 지문</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">화법과 언어(문법)</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">문법 필수 개념 + 문제풀이로 수능 문법 대비</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">실전 모고</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">기출 모의고사 타임어택 · 오답분석 트레이닝</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">수학</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">대수</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">수능 빈출 필수 개념 / 7주 수능 고난도 압축정리</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">미적분 I</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">수능 필수 개념 / 준킬러 이상 문항 해결</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">확률과 통계</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">필수 개념 / 수능 4점 문항 해결</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">미적분 II</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">필수 내신 개념 / 내신 고난도 문항</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">실전 미니모고</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">심화 · 150분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">대수+미적분Ⅰ 평가원 코드 유형학습·해설</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">실전 풀모고</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">대수+미적분Ⅰ+확통 평가원 코드 유형학습·해설</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">영어</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">구문문법</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">평가원·EBS 어휘 + 어법 7주 / 고난도 어법</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">독해</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">수능 독해 기준완성 / 평가원 고난도 출제코드</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">실전 모고</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">미니모의고사로 실전력·독해력 배양</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">탐구·한국사</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">통합과학(수능형)</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">통합수능 만점 개념정리 + 통합형 유형</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">통합사회(수능형)</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 150분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">통합수능 만점 개념정리 + 통합형 유형</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">한국사(수능형)</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">기본/심화 · 100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">선사~조선말 핵심요지·출제 포인트</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">논술</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">인문논술</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275"></span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">대학별 출제 경향 맞춤 답안 완성</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">수리논술</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275"></span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">대학별 출제 경향 맞춤 답안 완성</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">TEST</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">주간 국·영·수 SDLP</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">200분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">과목별 20분 집중 학습 + 수능 실전 미니모의고사</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">국어 읽기능력</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">50분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">독서 제시문 분석력·추론력·비판적 사고력</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">고등단어정복</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">100분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">고등영어 기본·심화 어휘</span>
                  </div>
                
              </div>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 18px 0; border-top: 1px solid #e4e7ee">
              <strong style="flex: 0 0 110px; font-size: 17px; font-weight: 900; color: #102041">입시케어</strong>
              <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">윈터 입시특강</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">50분</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">2028 대입 파악하기 · 생기부 마지막 업그레이드 · 수능최저? 정시 올인?</span>
                  </div>
                
                  <div style="display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline">
                    <span style="flex: 0 0 170px; font-size: 15px; font-weight: 700; color: #1a2238">수학 책임담임제</span>
                    <span style="flex: 0 0 120px; font-size: 13px; color: #5a6275">1:1 케어</span>
                    <span style="flex: 1 1 280px; min-width: 0; font-size: 15px; line-height: 1.6; color: #3a4359">담임 1명당 15명, 매주 2회 이상 대면 코칭</span>
                  </div>
                
              </div>
            </div>
          
        </div>
        <p style="margin: 0; font-size: 13px; line-height: 1.7; color: #5a6275">논술(인문·수리) 포함 · 모든 강좌는 신청자 5인 이상일 때 개강 · 학사일정에 따라 커리큘럼은 일부 변동될 수 있습니다.</p>
      </div>
    </div>
  </section></div>

  
  <section id="schedule" style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
    <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #c4501a">DAILY SCHEDULE</p>
    <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #102041; line-height: 1.3">아침 7시 50분부터 밤 10시까지,<br>수업 · 수책 · 질답 · 자기주도학습</h2>
    <div style="margin-top: 36px; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px">
      
        <div style="background: #f5f6fa; border-radius: 14px; padding: 20px 22px; display: flex; flex-direction: column; gap: 6px">
          <span style="font-family: Poppins, sans-serif; font-size: 15px; font-weight: 700; color: #c4501a">07:50</span>
          <strong style="font-size: 17px; color: #102041">등원</strong>
          <span style="font-size: 14px; line-height: 1.6; color: #4a5268">등원 확인문자 발송 · 휴대폰 제출</span>
        </div>
      
        <div style="background: #f5f6fa; border-radius: 14px; padding: 20px 22px; display: flex; flex-direction: column; gap: 6px">
          <span style="font-family: Poppins, sans-serif; font-size: 15px; font-weight: 700; color: #c4501a">07:50 – 08:30</span>
          <strong style="font-size: 17px; color: #102041">0교시</strong>
          <span style="font-size: 14px; line-height: 1.6; color: #4a5268">담임 조회 · 일일 TEST</span>
        </div>
      
        <div style="background: #fff3ec; border: 1.5px solid #ec6926; border-radius: 14px; padding: 20px 22px; display: flex; flex-direction: column; gap: 6px">
          <span style="font-family: Poppins, sans-serif; font-size: 15px; font-weight: 700; color: #c4501a">08:40 – 12:30</span>
          <strong style="font-size: 17px; color: #102041">1 ~ 4교시 (50분)</strong>
          <span style="font-size: 14px; line-height: 1.6; color: #4a5268">맞춤 선택수업 · 자기주도학습</span>
        </div>
      
        <div style="background: #f5f6fa; border-radius: 14px; padding: 20px 22px; display: flex; flex-direction: column; gap: 6px">
          <span style="font-family: Poppins, sans-serif; font-size: 15px; font-weight: 700; color: #c4501a">12:30 – 13:30</span>
          <strong style="font-size: 17px; color: #102041">중식</strong>
          <span style="font-size: 14px; line-height: 1.6; color: #4a5268">학원급식 / 개인도시락</span>
        </div>
      
        <div style="background: #fff3ec; border: 1.5px solid #ec6926; border-radius: 14px; padding: 20px 22px; display: flex; flex-direction: column; gap: 6px">
          <span style="font-family: Poppins, sans-serif; font-size: 15px; font-weight: 700; color: #c4501a">13:30 – 17:20</span>
          <strong style="font-size: 17px; color: #102041">5 ~ 8교시 (50분)</strong>
          <span style="font-size: 14px; line-height: 1.6; color: #4a5268">맞춤 선택수업 · 자기주도학습</span>
        </div>
      
        <div style="background: #f5f6fa; border-radius: 14px; padding: 20px 22px; display: flex; flex-direction: column; gap: 6px">
          <span style="font-family: Poppins, sans-serif; font-size: 15px; font-weight: 700; color: #c4501a">17:20 – 18:30</span>
          <strong style="font-size: 17px; color: #102041">종례 · 석식</strong>
          <span style="font-size: 14px; line-height: 1.6; color: #4a5268">담임 종례 · 공지 후 저녁식사</span>
        </div>
      
        <div style="background: #fff3ec; border: 1.5px solid #ec6926; border-radius: 14px; padding: 20px 22px; display: flex; flex-direction: column; gap: 6px">
          <span style="font-family: Poppins, sans-serif; font-size: 15px; font-weight: 700; color: #c4501a">18:30 – 22:00</span>
          <strong style="font-size: 17px; color: #102041">9 ~ 10교시 (100분)</strong>
          <span style="font-size: 14px; line-height: 1.6; color: #4a5268">맞춤 선택수업 · 자기주도학습 · 질의응답</span>
        </div>
      
        <div style="background: #f5f6fa; border-radius: 14px; padding: 20px 22px; display: flex; flex-direction: column; gap: 6px">
          <span style="font-family: Poppins, sans-serif; font-size: 15px; font-weight: 700; color: #c4501a">22:00</span>
          <strong style="font-size: 17px; color: #102041">하원</strong>
          <span style="font-size: 14px; line-height: 1.6; color: #4a5268">토요일 17:30 자율 하원</span>
        </div>
      
    </div>
    <ul style="margin: 24px 0 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; font-size: 14px; line-height: 1.7; color: #4a5268">
      <li>1월 4일(월) ~ 8일(금)은 학교별 방학 시작일이 달라 저녁 수업으로 진행합니다. (방학 전 학생 18:30 등원)</li>
      <li>월~토 07:50 ~ 22:00 의무등원 · 의무학습 원칙 (토요일 17:30 이후 학부모 요청 시 하원 가능)</li>
      <li>일요일 · 공휴일은 자율등원, 08:30 ~ 22:00 개인좌석 자기주도학습 가능 (급식 미제공)</li>
    </ul>
  </section>

  
  <section id="rules" style="background: #f5f6fa">
    <div style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
      <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #c4501a">RULES</p>
      <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #102041; line-height: 1.3">모두가 같은 규칙 안에서<br>관리받고, 공부하고, 생활합니다.</h2>
      <div style="margin-top: 36px; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 14px">
        
          <div style="background: #ffffff; border-radius: 14px; padding: 22px 24px; display: flex; flex-direction: column; gap: 8px">
            <strong style="font-size: 17px; color: #102041">01 등하원 · 출결</strong>
            <span style="font-size: 14px; line-height: 1.7; color: #4a5268; white-space: pre-line">등원 7:50 · 하원 22:00
토요일 17:30 자율하원, 일·공휴일 자율등원</span>
          </div>
        
          <div style="background: #ffffff; border-radius: 14px; padding: 22px 24px; display: flex; flex-direction: column; gap: 8px">
            <strong style="font-size: 17px; color: #102041">02 지각 · 결석</strong>
            <span style="font-size: 14px; line-height: 1.7; color: #4a5268; white-space: pre-line">지각 시 선생님 확인 후 입실
2주 무지각 시 벌점 소멸 · 결석은 반드시 사전 연락</span>
          </div>
        
          <div style="background: #ffffff; border-radius: 14px; padding: 22px 24px; display: flex; flex-direction: column; gap: 8px">
            <strong style="font-size: 17px; color: #102041">03 테스트</strong>
            <span style="font-size: 14px; line-height: 1.7; color: #4a5268; white-space: pre-line">매주 국·영·수 TEST, 학년별 영단어 TEST
개념어 · 고전시가 · 읽기능력</span>
          </div>
        
          <div style="background: #ffffff; border-radius: 14px; padding: 22px 24px; display: flex; flex-direction: column; gap: 8px">
            <strong style="font-size: 17px; color: #102041">04 자습실 이용</strong>
            <span style="font-size: 14px; line-height: 1.7; color: #4a5268; white-space: pre-line">대화 · 수신호 · 제스처 금지
학생 간 질문 불가, 엎드려 자면 벌점</span>
          </div>
        
          <div style="background: #ffffff; border-radius: 14px; padding: 22px 24px; display: flex; flex-direction: column; gap: 8px">
            <strong style="font-size: 17px; color: #102041">05 스탠딩 책상</strong>
            <span style="font-size: 14px; line-height: 1.7; color: #4a5268; white-space: pre-line">1회 30분까지, 출입대장 기록 필수
미기록 · 초과 시 벌점 5점</span>
          </div>
        
          <div style="background: #ffffff; border-radius: 14px; padding: 22px 24px; display: flex; flex-direction: column; gap: 8px">
            <strong style="font-size: 17px; color: #102041">06 중식 · 석식</strong>
            <span style="font-size: 14px; line-height: 1.7; color: #4a5268; white-space: pre-line">학원 급식 또는 개인도시락</span>
          </div>
        
          <div style="background: #ffffff; border-radius: 14px; padding: 22px 24px; display: flex; flex-direction: column; gap: 8px">
            <strong style="font-size: 17px; color: #102041">07 휴대폰 관리</strong>
            <span style="font-size: 14px; line-height: 1.7; color: #4a5268; white-space: pre-line">등원 시 전원 끄고 제출
미제출 벌점 30점 · 3일 압수, 인강 외 사용 20점</span>
          </div>
        
      </div>
      <button type="button" data-act="togglePenalty" aria-expanded="true" style="margin-top: 20px; min-height: 48px; padding: 0 22px; font-family: inherit; font-size: 16px; font-weight: 700; color: #102041; background: #ffffff; border: 1px solid #cfd4df; border-radius: 10px; cursor: pointer">벌점 규정 접기</button>
      <div data-if="penaltyOpen">
        <div style="margin-top: 16px; background: #ffffff; border-radius: 16px; overflow: hidden">
          
            <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
              <strong style="flex: 0 0 140px; padding: 18px 24px; font-size: 16px; color: #c4501a">5점</strong>
              <span style="flex: 1 1 400px; min-width: 0; padding: 18px 24px; font-size: 14px; line-height: 1.7; color: #3a4359">책상 주변 미정리로 학습 방해 · 이동금지 시간(식사/쉬는 시간 후 10분) 이동 · 휴대폰 전원 켠 채 제출 · 외출/조퇴 시 출입대장 미작성</span>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
              <strong style="flex: 0 0 140px; padding: 18px 24px; font-size: 16px; color: #c4501a">10점</strong>
              <span style="flex: 1 1 400px; min-width: 0; padding: 18px 24px; font-size: 14px; line-height: 1.7; color: #3a4359">식사·쉬는 시간 독서실 잡담 · 학습시간 중 원내 잡담 · 무단지각 · 화장실 전자기기 소지 · 식사 후 복귀 지연</span>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
              <strong style="flex: 0 0 140px; padding: 18px 24px; font-size: 16px; color: #c4501a">20점</strong>
              <span style="flex: 1 1 400px; min-width: 0; padding: 18px 24px; font-size: 14px; line-height: 1.7; color: #3a4359">학습시간 중 엎드려 자기 · 연속 졸음 · 학습 외 사이트 접속 · 독서실 내 잡담(수신호·제스처 포함) · 소리/냄새 나는 음식 섭취</span>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
              <strong style="flex: 0 0 140px; padding: 18px 24px; font-size: 16px; color: #c4501a">30점</strong>
              <span style="flex: 1 1 400px; min-width: 0; padding: 18px 24px; font-size: 14px; line-height: 1.7; color: #3a4359">휴대폰 무단 소지 1회 · 쉬는 시간 무단 외출</span>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
              <strong style="flex: 0 0 140px; padding: 18px 24px; font-size: 16px; color: #c4501a">50점</strong>
              <span style="flex: 1 1 400px; min-width: 0; padding: 18px 24px; font-size: 14px; line-height: 1.7; color: #3a4359">자습 중 무단이탈·무단조퇴 · 사전 연락 없는 무단결석 · 이성교제 · 일방적 연락 등 피해 · 원 외 흡연</span>
            </div>
          
            <div style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #e4e7ee">
              <strong style="flex: 0 0 140px; padding: 18px 24px; font-size: 16px; color: #c4501a">100점 (즉시퇴원)</strong>
              <span style="flex: 1 1 400px; min-width: 0; padding: 18px 24px; font-size: 14px; line-height: 1.7; color: #3a4359">폭력·절도·고의적 기물파손 · 신체적/정신적 위협 · 휴대폰 소지 3회 적발 · 원내 흡연 · 집단 괴롭힘 · 교직원 지시에 대한 반항</span>
            </div>
          
          <p style="margin: 0; padding: 18px 24px; font-size: 13px; line-height: 1.7; color: #5a6275">같은 위반이 2주간 없으면 벌점은 자동 소멸됩니다. 누적 100점 미만이라도 상습 위반 시 상벌위원회 의결에 따라 퇴원 조치될 수 있습니다.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section id="facility" style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
    <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #c4501a">FACILITIES &amp; MEAL</p>
    <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #102041; line-height: 1.3">공부에만 집중하도록,<br>공간과 식사까지 설계합니다.</h2>
    <div style="margin-top: 36px; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px">
      
        <figure style="margin: 0; display: flex; flex-direction: column; gap: 10px">
          <img src="/winter-test/library.jpg" alt="라이브러리" style="width: 100%; height: 190px; object-fit: cover; border-radius: 14px; background: #eef0f5">
          <figcaption style="font-size: 15px; font-weight: 700; color: #1a2238">라이브러리</figcaption>
        </figure>
      
        <figure style="margin: 0; display: flex; flex-direction: column; gap: 10px">
          <img src="/winter-test/care-room.jpg" alt="1:1 수학 책임담임 케어룸" style="width: 100%; height: 190px; object-fit: cover; border-radius: 14px; background: #eef0f5">
          <figcaption style="font-size: 15px; font-weight: 700; color: #1a2238">1:1 수학 책임담임 케어룸</figcaption>
        </figure>
      
        <figure style="margin: 0; display: flex; flex-direction: column; gap: 10px">
          <img src="/winter-test/study-cafe.jpg" alt="스터디카페" style="width: 100%; height: 190px; object-fit: cover; border-radius: 14px; background: #eef0f5">
          <figcaption style="font-size: 15px; font-weight: 700; color: #1a2238">스터디카페</figcaption>
        </figure>
      
        <figure style="margin: 0; display: flex; flex-direction: column; gap: 10px">
          <img src="/winter-test/device-care.jpg" alt="전자기기 관리" style="width: 100%; height: 190px; object-fit: cover; border-radius: 14px; background: #eef0f5">
          <figcaption style="font-size: 15px; font-weight: 700; color: #1a2238">전자기기 관리</figcaption>
        </figure>
      
        <figure style="margin: 0; display: flex; flex-direction: column; gap: 10px">
          <img src="/winter-test/study-bar.jpg" alt="스터디바" style="width: 100%; height: 190px; object-fit: cover; border-radius: 14px; background: #eef0f5">
          <figcaption style="font-size: 15px; font-weight: 700; color: #1a2238">스터디바</figcaption>
        </figure>
      
        <figure style="margin: 0; display: flex; flex-direction: column; gap: 10px">
          <img src="/winter-test/sky-park.jpg" alt="하늘공원" style="width: 100%; height: 190px; object-fit: cover; border-radius: 14px; background: #eef0f5">
          <figcaption style="font-size: 15px; font-weight: 700; color: #1a2238">하늘공원</figcaption>
        </figure>
      
        <figure style="margin: 0; display: flex; flex-direction: column; gap: 10px">
          <img src="/winter-test/cafeteria.jpg" alt="카페테리아" style="width: 100%; height: 190px; object-fit: cover; border-radius: 14px; background: #eef0f5">
          <figcaption style="font-size: 15px; font-weight: 700; color: #1a2238">카페테리아</figcaption>
        </figure>
      
        <figure style="margin: 0; display: flex; flex-direction: column; gap: 10px">
          <img src="/winter-test/meal.jpg" alt="현장 조리 급식" style="width: 100%; height: 190px; object-fit: cover; border-radius: 14px; background: #eef0f5">
          <figcaption style="font-size: 15px; font-weight: 700; color: #1a2238">현장 조리 급식</figcaption>
        </figure>
      
    </div>
    <div style="margin-top: 28px; border: 1px solid #e4e7ee; border-radius: 16px; padding: 24px 28px; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px">
      <div style="display: flex; flex-direction: column; gap: 6px"><strong style="font-size: 16px; color: #102041">현장 조리 급식</strong><span style="font-size: 14px; line-height: 1.6; color: #4a5268">건물 내 조리실 · 급식실, 월~토 점심 · 저녁 (아플 땐 죽 사전 신청)</span></div>
      <div style="display: flex; flex-direction: column; gap: 6px"><strong style="font-size: 16px; color: #102041">HACCP 기준 위생</strong><span style="font-size: 14px; line-height: 1.6; color: #4a5268">당일 납품 · 당일 조리, HACCP 인증 식재료 원칙</span></div>
      <div style="display: flex; flex-direction: column; gap: 6px"><strong style="font-size: 16px; color: #102041">영양사 식단</strong><span style="font-size: 14px; line-height: 1.6; color: #4a5268">협력업체 제이에스푸드 운영 · 학원급식 또는 개인도시락 선택</span></div>
    </div>
  </section>

  
  <section id="review" style="background: #102041; color: #ffffff">
    <div style="max-width: 1200px; margin: 0 auto; padding: 80px 24px">
      <p style="margin: 0 0 10px; font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: #ec6926">REVIEWS</p>
      <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; line-height: 1.3">재원생과 졸업생이<br>직접 쓴 이야기</h2>
      <div style="margin-top: 36px; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px">
        
          <div style="background: #1b2c55; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 14px">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec6926" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path><path d="M17 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path></svg>
            <strong style="font-size: 18px; line-height: 1.5">5등급이던 수학이 6 · 9 · 수능 100 · 100 · 96이 됐습니다.</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #dfe4ef">고1 때 5등급이던 수학을 하나쌤의 강의력과 상담 덕분에 극복했습니다. 초반엔 진전이 없어 보였지만 막판에 크게 올랐습니다.</p>
            <span style="margin-top: auto; font-size: 14px; color: #c9d0e0">이서준 · 연세대 의예과 차석 · 동원고 졸</span>
          </div>
        
          <div style="background: #1b2c55; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 14px">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec6926" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path><path d="M17 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path></svg>
            <strong style="font-size: 18px; line-height: 1.5">다시 돌아가도 박하나 선생님과 수험 생활을 함께하고 싶습니다.</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #dfe4ef">개념부터 심화, 모의고사까지 커리큘럼을 빠짐없이 수강했고, 학생 하나하나 상담하고 챙겨주셔서 큰 힘이 되었습니다.</p>
            <span style="margin-top: auto; font-size: 14px; color: #c9d0e0">손원준 · 서울대 경영학과 · 성문고 졸</span>
          </div>
        
          <div style="background: #1b2c55; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 14px">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec6926" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path><path d="M17 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path></svg>
            <strong style="font-size: 18px; line-height: 1.5">열심히 하는 학생들이 모인 곳</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #dfe4ef">면학 분위기와 알찬 수업 속에서 원칙에 따른 공부를 했고, 6월 전국연합 모의고사에서 전 과목 만점을 받았습니다.</p>
            <span style="margin-top: auto; font-size: 14px; color: #c9d0e0">윈터 → 썸머 → 재원 · 양명고 3 민○영</span>
          </div>
        
          <div style="background: #1b2c55; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 14px">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec6926" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path><path d="M17 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path></svg>
            <strong style="font-size: 18px; line-height: 1.5">단기 특강이 아니라, 공부 습관을 잡아 준 시간</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #dfe4ef">과목별 선생님들이 계속 상담해 주셔서 방향을 잃지 않았고, 방학 후에도 습관이 이어져 6월 올 1등급을 거뒀습니다.</p>
            <span style="margin-top: auto; font-size: 14px; color: #c9d0e0">윈터스쿨 · 홍천고 3 원○영</span>
          </div>
        
          <div style="background: #1b2c55; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 14px">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec6926" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path><path d="M17 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path></svg>
            <strong style="font-size: 18px; line-height: 1.5">3달 만에 수학 5등급에서 2등급으로</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #dfe4ef">한 줄 노트로 수학이 느는 걸 가장 빨리 느꼈습니다. 학생이 많아도 질의응답이 밀리는 일 없이 잘 진행됐습니다.</p>
            <span style="margin-top: auto; font-size: 14px; color: #c9d0e0">윈터스쿨 · 산본고 3 금○현</span>
          </div>
        
          <div style="background: #1b2c55; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 14px">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec6926" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path><path d="M17 17c-2 0-3-1.5-3-4 0-3 2-6 5-7"></path></svg>
            <strong style="font-size: 18px; line-height: 1.5">모두가 조용히 공부하는 분위기가 습관이 됐다</strong>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #dfe4ef">실력별로 수업이 나뉘어 약한 과목은 기초를, 강한 과목은 실력을 다듬었고, 국어·영어 4~5등급이 2~3등급으로 올랐습니다.</p>
            <span style="margin-top: auto; font-size: 14px; color: #c9d0e0">윈터스쿨 · 고잔고 3 전○훈</span>
          </div>
        
      </div>
    </div>
  </section>

  
  <section id="apply" style="background: #ec6926">
    <div style="max-width: 1200px; margin: 0 auto; padding: 64px 24px; display: flex; flex-wrap: wrap; gap: 32px; align-items: center; justify-content: space-between">
      <div style="flex: 1 1 460px; min-width: 0; display: flex; flex-direction: column; gap: 10px; color: #102041">
        <h2 style="margin: 0; font-size: clamp(26px, 3vw, 36px); font-weight: 900; line-height: 1.3">고3에게는 따뜻한 합격의 기쁨,<br>고1 · 2에게는 준비의 차이를.</h2>
        <p style="margin: 0; font-size: 16px; line-height: 1.7; font-weight: 500">방문상담은 사전예약제 · 평일/주말 오후 1시 ~ 9시<br>제출서류: 입학원서(학원양식), 학생부 또는 모의고사 성적표 사본</p>
      </div>
      <div style="flex: 0 1 360px; display: flex; flex-direction: column; gap: 12px">
        <a href="#" style="display: flex; align-items: center; justify-content: center; min-height: 60px; background: #102041; color: #ffffff; font-size: 19px; font-weight: 700; text-decoration: none; border-radius: 10px">상담 · 접수 신청하기</a>
        <a href="tel:031-347-5151" style="display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 60px; background: #ffffff; color: #102041; font-size: 19px; font-weight: 700; text-decoration: none; border-radius: 10px">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"></path></svg>
          031-347-5151</a>
      </div>
    </div>
  </section>

</div>`;

export const WINTER_JS = `// 커리큘럼 학년 탭 + 벌점 규정 펼치기
document.addEventListener('click',function(e){
  var b=e.target.closest('button[data-act]'); if(!b) return;
  if(b.dataset.act==='tb.pick'){var i=b.dataset.idx;document.querySelectorAll('[data-grade]').forEach(function(d){d.hidden=d.dataset.grade!==i;});}
  if(b.dataset.act==='togglePenalty'){var box=document.querySelector('[data-if="penaltyOpen"]');box.hidden=!box.hidden;b.textContent=box.hidden?'벌점 규정 자세히 보기':'벌점 규정 접기';b.setAttribute('aria-expanded',String(!box.hidden));}
});
(function(){var box=document.querySelector('[data-if="penaltyOpen"]');if(box){box.hidden=true;var b=document.querySelector('button[data-act="togglePenalty"]');if(b){b.textContent='벌점 규정 자세히 보기';b.setAttribute('aria-expanded','false');}}})();`;
