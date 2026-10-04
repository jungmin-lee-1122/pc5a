"use client";

import { useEffect, useState } from "react";

/**
 * 푸터 "개인정보 취급(처리)방침" → 팝업(모달).
 * 평촌청솔(이투스) 처리방침을 참고하여 5A 아카데미 평촌점에 맞게 각색.
 * - 회원가입/통합회원/SNS 로그인/기숙학원/단체복/온라인 플레이어/행태 타겟마케팅 등은 제외
 * - 설명회·상담 예약, 수강생 등록, 교습비 결제, 쿠키, CCTV 중심으로 정리
 * - 청솔/이투스 명칭·연락처는 모두 우리 학원 정보로 교체
 */
export default function PrivacyModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="font-medium text-gray-500 transition-colors hover:text-ink"
      >
        개인정보 취급(처리)방침
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="개인정보 처리방침"
        >
          <button
            type="button"
            aria-label="닫기"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <div className="relative z-10 flex max-h-[86vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex shrink-0 items-center justify-between border-b border-line px-5 py-4 sm:px-7">
              <h2 className="text-lg font-extrabold text-ink sm:text-xl">개인정보 처리방침</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="닫기"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-ink"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6 text-[13.5px] leading-relaxed text-gray-600 sm:px-7">
              <PrivacyBody />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ───────────────────────── 본문 ───────────────────────── */

function Section({ no, title, children }: { no: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 first:mt-0">
      <h3 className="text-[15px] font-bold text-ink">
        {no}. {title}
      </h3>
      <div className="mt-2 space-y-1.5">{children}</div>
    </section>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="border border-line px-3 py-2 text-left font-semibold">{children}</th>;
}
function Td({ children, ...rest }: { children: React.ReactNode } & React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className="border border-line px-3 py-2 align-top" {...rest}>
      {children}
    </td>
  );
}

function PrivacyBody() {
  return (
    <div>
      <p className="rounded-xl bg-brand-light px-4 py-3 text-[13px] text-gray-600">
        5A 아카데미 평촌점(이하 &ldquo;학원&rdquo;)은 「개인정보 보호법」 등 관계 법령을 준수하여 이용자의
        개인정보를 안전하게 처리합니다. 본 홈페이지는 별도의 회원가입 없이 이용할 수 있으며, 학원은
        설명회·상담 예약 및 수강 등록 등에 필요한 정보만을 수집합니다.
      </p>

      <Section no={1} title="총칙">
        <p>
          학원은 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여
          적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 본 개인정보 처리방침을 통하여
          정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게
          처리할 수 있도록 하기 위하여 다음과 같이 알려드립니다. 본 처리방침을 개정하는 경우에는 홈페이지를
          통하여 사전에 고지하겠습니다.
        </p>
      </Section>

      <Section no={2} title="개인정보의 처리 목적">
        <p>
          학원은 다음의 목적을 위하여 개인정보를 처리하며, 처리하는 개인정보는 다음의 목적 이외의 용도로는
          이용하지 않습니다. 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를
          받는 등 필요한 조치를 이행합니다.
        </p>
        <p className="pl-3 text-gray-500">
          ① 설명회·상담 예약 : 상담 접수 및 안내, 입학·입시 상담 제공<br />
          ② 수강 신청·등록 관리 : 수강생 등록, 수강 및 원생 관리, 관련 서비스 제공<br />
          ③ 현장 방문 상담·테스트 : 수준 테스트 및 맞춤형 컨설팅 제공<br />
          ④ 교습비 결제 : 수강료 등 결제 및 환불 처리<br />
          ⑤ 마케팅 활용(선택) : 신규 강좌·특강·설명회·이벤트 등 안내
        </p>
      </Section>

      <Section no={3} title="처리하는 개인정보의 항목">
        <p>
          학원은 서비스 제공에 꼭 필요한 개인정보만 수집하며, 추가로 개인정보가 필요한 경우에는 별도의 선택
          동의를 받은 후 수집합니다.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-[12.5px]">
            <thead>
              <tr className="bg-gray-50 text-gray-500">
                <Th>구분</Th>
                <Th>수집 항목</Th>
                <Th>수집·이용 목적</Th>
                <Th>보유·이용기간</Th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr>
                <Td>설명회·상담 예약<br /><span className="text-gray-400">(필수)</span></Td>
                <Td>(학생) 성명, 휴대폰번호, 학년/출신학교<br />(학부모) 성명, 연락처</Td>
                <Td>설명회·상담 접수 및 안내, 입학·입시 상담</Td>
                <Td>미등록 시 상담 종료 후 5일 이내 파기<br />등록 시 퇴원 후 3년간 보관</Td>
              </tr>
              <tr>
                <Td>수강 신청·등록<br /><span className="text-gray-400">(필수)</span></Td>
                <Td>(학생) 성명, 생년월일, 휴대폰번호, 출신학교, 주소<br />(학부모) 성명, 연락처</Td>
                <Td>수강생 등록 및 원생 관리, 관련 서비스 제공</Td>
                <Td>퇴원 후 3년간 보관<br />(관련 법령상 보존이 필요한 경우 해당 기간까지)</Td>
              </tr>
              <tr>
                <Td>현장 방문 상담·테스트<br /><span className="text-gray-400">(선택)</span></Td>
                <Td>졸업년도, 학교생활기록부, 모의고사·수능 성적 자료</Td>
                <Td>수준 테스트 및 맞춤형 컨설팅 제공</Td>
                <Td>미등록 시 종료 후 5일 이내 파기<br />등록 시 퇴원 후 3년간 보관</Td>
              </tr>
              <tr>
                <Td>교습비 결제<br /><span className="text-gray-400">(필수)</span></Td>
                <Td>결제 정보(결제수단, 결제기록 등)</Td>
                <Td>수강료 등 결제 및 환불 처리</Td>
                <Td>관련 법령에서 정한 기간(제4조 참고)</Td>
              </tr>
              <tr>
                <Td>마케팅 활용<br /><span className="text-gray-400">(선택)</span></Td>
                <Td>성명, 연락처, (동의 시) 합격 전형/대학/학과, 사진 등</Td>
                <Td>신규 강좌·특강·설명회·이벤트 등 안내</Td>
                <Td>동의일로부터 퇴원 후 3년 또는 동의 철회 시까지</Td>
              </tr>
              <tr>
                <Td>자동 수집 정보</Td>
                <Td>서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보</Td>
                <Td>서비스 이용 기록 확인 및 부정 이용 방지</Td>
                <Td>수집·이용 목적 달성 시까지(쿠키는 브라우저 종료 시 삭제)</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[12px] text-gray-400">
          ※ 선택 항목에 동의하지 않아도 기본 서비스를 이용하실 수 있으나, 해당 부가 서비스 제공이 제한될 수
          있습니다.
        </p>
        <p className="mt-3">학원은 다음의 방법을 통하여 개인정보를 수집합니다.</p>
        <p className="pl-3 text-gray-500">
          가. 홈페이지의 신청 양식(설명회·상담 예약 등)을 통한 수집<br />
          나. 전화, 팩스, 서면 및 대면 상담을 통한 수집<br />
          다. 쿠키 등 생성정보 자동 수집
        </p>
      </Section>

      <Section no={4} title="개인정보의 보유 및 이용기간">
        <p>
          학원은 개인정보의 수집·이용 목적이 달성되면 해당 정보를 지체 없이 파기함을 원칙으로 합니다. 다만,
          관계 법령에 따라 일정 기간 보관해야 하는 경우에는 그 기간 동안 보관 후 파기합니다.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-[12.5px]">
            <thead>
              <tr className="bg-gray-50 text-gray-500">
                <Th>보관 항목</Th>
                <Th>보유기간</Th>
                <Th>근거 법령</Th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr>
                <Td>영수증 원본(성명, 생년월일)</Td>
                <Td>5년</Td>
                <Td rowSpan={2}>학원의 설립·운영 및 과외교습에 관한 법률</Td>
              </tr>
              <tr>
                <Td>수강생 대장(성명, 주소, 연락처)</Td>
                <Td>3년</Td>
              </tr>
              <tr>
                <Td>계약 또는 청약철회 등에 관한 기록</Td>
                <Td>5년</Td>
                <Td rowSpan={3}>전자상거래 등에서의 소비자 보호에 관한 법률</Td>
              </tr>
              <tr>
                <Td>대금결제 및 재화 등의 공급에 관한 기록</Td>
                <Td>5년</Td>
              </tr>
              <tr>
                <Td>소비자의 불만 또는 분쟁 처리에 관한 기록</Td>
                <Td>3년</Td>
              </tr>
              <tr>
                <Td>서비스 방문(접속) 기록</Td>
                <Td>3개월</Td>
                <Td>통신비밀보호법</Td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section no={5} title="개인정보의 제3자 제공">
        <p>
          학원은 정보주체의 동의가 있거나 관련 법령의 규정에 의한 경우를 제외하고는, 수집·이용 목적에서
          고지한 범위를 넘어 개인정보를 외부에 제공하지 않습니다. 다만, 다음의 경우에는 관련 법령에 따라
          동의 없이 개인정보를 제공할 수 있습니다.
        </p>
        <p className="pl-3 text-gray-500">
          1. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우<br />
          2. 명백히 정보주체 또는 제3자의 급박한 생명·신체·재산의 이익을 위하여 필요한 경우
        </p>
      </Section>

      <Section no={6} title="개인정보 처리의 위탁">
        <p>
          학원은 원활한 서비스 제공을 위하여 필요한 범위 내에서 일부 업무를 외부 전문업체에 위탁할 수
          있습니다. 위탁 시에는 위탁받는 자(수탁자)와 위탁 업무의 내용을 본 처리방침을 통하여 공개하며,
          수탁자가 개인정보를 안전하게 처리하도록 관리·감독합니다. 위탁 업무의 내용이나 수탁자가 변경될
          경우에는 지체 없이 본 처리방침을 통하여 공개합니다.
        </p>
        <div className="mt-2 rounded-xl border border-line bg-gray-50 px-4 py-3 text-gray-600">
          <p>· 수탁자(외부 위탁업체) : (주)세계로 시스템</p>
        </div>
      </Section>

      <Section no={7} title="개인정보의 파기 절차 및 방법">
        <p>
          학원은 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당
          개인정보를 파기합니다. 전자적 파일 형태의 정보는 복구 및 재생되지 않도록 안전하게 삭제하며,
          종이에 출력된 정보는 분쇄하거나 소각하여 파기합니다.
        </p>
      </Section>

      <Section no={8} title="개인정보 자동 수집 장치(쿠키)의 설치·운영 및 거부">
        <p>
          학원은 이용자에게 맞춤형 서비스를 제공하기 위하여 쿠키(cookie)를 사용할 수 있습니다. 쿠키란
          웹사이트 서버가 이용자의 브라우저에 보내는 작은 텍스트 파일로, 이용자의 기기에 저장됩니다.
        </p>
        <p>
          이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹 브라우저의 설정을 통해 모든 쿠키를
          허용하거나, 쿠키 저장 시 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 다만, 쿠키 저장을
          거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.
        </p>
      </Section>

      <Section no={9} title="만 14세 미만 아동의 개인정보 처리">
        <p>
          학원은 만 14세 미만 아동의 개인정보를 수집·이용하거나 제3자에게 제공하고자 하는 경우 법정대리인의
          동의를 받습니다. 이 경우 법정대리인의 동의를 얻기 위하여 성명, 연락처 등 필요한 최소한의 정보를
          요구할 수 있습니다.
        </p>
      </Section>

      <Section no={10} title="정보주체와 법정대리인의 권리·의무 및 행사방법">
        <p>
          ① 정보주체(만 14세 미만의 경우 법정대리인 포함)는 언제든지 개인정보의 열람·정정·삭제·처리정지를
          요구할 수 있으며, 수집·이용·제공에 대한 동의를 철회할 수 있습니다.
        </p>
        <p>
          ② 권리 행사는 학원에 대해 서면, 전화, 전자우편 등을 통하여 하실 수 있으며, 학원은 이에 대해 지체
          없이 조치합니다.
        </p>
        <p>
          ③ 정보주체가 개인정보의 오류에 대한 정정을 요청한 경우, 학원은 정정을 완료하기 전까지 해당
          개인정보를 이용하거나 제공하지 않습니다.
        </p>
        <p>④ 권리 행사는 정보주체의 법정대리인이나 위임을 받은 대리인을 통하여 하실 수도 있습니다.</p>
      </Section>

      <Section no={11} title="개인정보의 안전성 확보 조치">
        <p>학원은 개인정보의 안전성 확보를 위하여 다음과 같은 조치를 취하고 있습니다.</p>
        <p className="pl-3 text-gray-500">
          · 관리적 조치 : 내부관리계획 수립·시행, 담당자 교육, 접근권한의 차등 관리<br />
          · 기술적 조치 : 개인정보처리시스템의 접근권한 관리, 비밀번호 암호화, 보안프로그램 설치 및 갱신<br />
          · 물리적 조치 : 개인정보 보관 장소의 접근 통제 및 출력물 잠금장치 보관
        </p>
      </Section>

      <Section no={12} title="권익침해에 대한 구제방법">
        <p>
          정보주체는 개인정보 침해로 인한 구제를 받기 위하여 아래 기관에 분쟁 해결이나 상담 등을 신청할 수
          있습니다.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[460px] border-collapse text-[12.5px]">
            <thead>
              <tr className="bg-gray-50 text-gray-500">
                <Th>기관</Th>
                <Th>전화</Th>
                <Th>홈페이지</Th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr><Td>개인정보침해신고센터</Td><Td>(국번없이) 118</Td><Td>privacy.kisa.or.kr</Td></tr>
              <tr><Td>개인정보분쟁조정위원회</Td><Td>1833-6972</Td><Td>www.kopico.go.kr</Td></tr>
              <tr><Td>대검찰청 사이버수사과</Td><Td>(국번없이) 1301</Td><Td>www.spo.go.kr</Td></tr>
              <tr><Td>경찰청 사이버수사국</Td><Td>(국번없이) 182</Td><Td>ecrm.police.go.kr</Td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section no={13} title="개인정보 보호책임자">
        <p>
          학원은 개인정보 처리에 관한 업무를 총괄하여 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리
          및 피해 구제를 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <div className="mt-2 rounded-xl border border-line bg-gray-50 px-4 py-3 text-gray-600">
          <p>· 개인정보 보호책임자 : 엄다희 과장</p>
          <p>· 연락처 : 031-347-5151</p>
          <p>· 이메일 : 5aacademy@naver.com</p>
          <p>· 주소 : 경기도 안양시 평촌대로 112</p>
        </div>
      </Section>

      <Section no={14} title="영상정보처리기기(CCTV) 운영·관리">
        <p>
          학원은 「개인정보 보호법」 제25조에 따라 원내 시설 안전, 화재 예방 및 도난 방지를 목적으로 영상정보
          처리기기(CCTV)를 설치·운영할 수 있습니다.
        </p>
        <p className="pl-3 text-gray-500">
          · 설치 목적 : 시설 안전, 화재 예방, 도난 방지<br />
          · 설치 위치 및 촬영 범위 : 원내 로비·복도·강의실 등 주요 시설물<br />
          · 보관 기간 : 촬영일로부터 30일 이내 보관 후 파기<br />
          · 관리 책임 및 열람 문의 : 학원 사무실 (031-347-5151)
        </p>
      </Section>

      <Section no={15} title="개인정보 처리방침의 변경">
        <p>
          본 개인정보 처리방침은 법령 및 정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을
          경우, 변경 사항을 시행 최소 7일 전부터 홈페이지의 공지사항을 통하여 고지합니다.
        </p>
      </Section>

      <p className="mt-8 border-t border-line pt-4 text-[12.5px] text-gray-400">
        본 개인정보 처리방침은 2026년 10월 1일부터 적용됩니다. (버전 v1.0)
      </p>
    </div>
  );
}
