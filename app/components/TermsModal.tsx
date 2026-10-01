"use client";

import { useEffect, useState } from "react";

/**
 * 푸터 "이용약관" → 팝업(모달).
 * 5A 아카데미 평촌점 기준으로, 회원가입/이투스머니/포인트/도서·학습기기 판매/
 * 온라인강의 전용 조항은 제외하고 설명회 예약·강좌·교습비 환불 중심으로 정리.
 */
export default function TermsModal() {
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
        className="transition-colors hover:text-ink"
      >
        이용약관
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="이용약관"
        >
          {/* 배경 */}
          <button
            type="button"
            aria-label="닫기"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* 패널 */}
          <div className="relative z-10 flex max-h-[86vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* 헤더 */}
            <div className="flex shrink-0 items-center justify-between border-b border-line px-5 py-4 sm:px-7">
              <h2 className="text-lg font-extrabold text-ink sm:text-xl">이용약관</h2>
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

            {/* 본문 */}
            <div className="overflow-y-auto px-5 py-6 text-[13.5px] leading-relaxed text-gray-600 sm:px-7">
              <TermsBody />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ───────────────────────── 약관 본문 ───────────────────────── */

function Article({ no, title, children }: { no: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 first:mt-0">
      <h3 className="text-[15px] font-bold text-ink">
        제{no}조 ({title})
      </h3>
      <div className="mt-2 space-y-1.5">{children}</div>
    </section>
  );
}

function TermsBody() {
  return (
    <div>
      <p className="rounded-xl bg-brand-light px-4 py-3 text-[13px] text-gray-600">
        본 홈페이지는 별도의 회원가입 절차 없이 이용할 수 있으며, 학원은 설명회·상담 예약 등을 위하여
        이용자가 직접 입력한 정보만을 수집합니다.
      </p>

      <Article no={1} title="목적">
        <p>
          본 약관은 5A 아카데미 평촌점(이하 &ldquo;학원&rdquo;이라 합니다)이 제공하는 홈페이지 및 학원
          서비스(이하 &ldquo;서비스&rdquo;라 합니다)의 이용과 관련하여 이용자의 기본적인 권리와 책임 및
          학원과 이용자 간의 중요 사항을 정하는 것을 목적으로 합니다.
        </p>
      </Article>

      <Article no={2} title="약관의 효력 및 변경">
        <p>① 학원은 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 화면에 게시합니다.</p>
        <p>② 본 약관은 서비스 화면에 공지함으로써 효력이 발생합니다.</p>
        <p>
          ③ 학원은 관련 법령을 위반하지 않고 이용자의 정당한 권리를 부당하게 침해하지 않는 범위에서 본
          약관을 개정할 수 있습니다.
        </p>
        <p>
          ④ 학원이 약관을 변경할 경우에는 적용일자 및 변경사유를 명시하여 적용일자 7일 이전부터 서비스
          화면에 공지합니다. 다만, 이용자에게 불리한 변경의 경우에는 최소 30일 전에 공지합니다.
        </p>
      </Article>

      <Article no={3} title="약관 외 준칙">
        <p>
          본 약관에 명시되지 않은 사항에 대해서는 관련 법령, 학원이 정한 개별 이용지침 및 규칙,
          「학원의 설립·운영 및 과외교습에 관한 법률」 등 관계 법령의 규정에 따릅니다.
        </p>
      </Article>

      <Article no={4} title="용어의 정의">
        <p>① &ldquo;이용자&rdquo;란 학원의 홈페이지에 접속하여 본 약관에 따라 서비스를 이용하는 자를 말합니다.</p>
        <p>
          ② &ldquo;서비스&rdquo;란 학원이 홈페이지를 통해 제공하는 학원·강좌 정보 안내, 설명회 및 상담 예약
          접수 등 일체의 서비스를 말합니다.
        </p>
        <p>
          ③ &ldquo;예약 신청&rdquo;이란 이용자가 홈페이지의 신청 양식을 통해 설명회 참석, 상담 등을 신청하는
          것을 말합니다.
        </p>
      </Article>

      <Article no={5} title="서비스의 제공">
        <p>
          학원은 이용자가 강좌 등에 관하여 정확하게 이해하고 착오 없이 거래할 수 있도록 다음 각 호의
          사항을 서비스 화면 등을 통하여 안내합니다.
        </p>
        <p className="pl-3 text-gray-500">
          ① 학원의 명칭 및 대표자 성명<br />
          ② 학원의 주소, 전화번호 등<br />
          ③ 강좌의 명칭 및 내용<br />
          ④ 수강료(교습비)의 금액, 납부 방법 및 시기<br />
          ⑤ 강좌의 제공 방법 및 시기<br />
          ⑥ 환불의 조건 및 절차<br />
          ⑦ 기타 강좌 이용과 관련하여 필요한 사항
        </p>
      </Article>

      <Article no={6} title="서비스 이용시간">
        <p>
          ① 서비스의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 다만, 시스템 점검, 교체 및 고장 등의
          이유로 학원이 정한 기간에는 서비스가 일시 중지될 수 있으며, 이 경우 학원은 해당 사실을 사전
          또는 사후에 공지합니다.
        </p>
      </Article>

      <Article no={7} title="서비스의 변경 및 중단">
        <p>① 학원은 서비스가 변경되는 경우 변경 내용 및 제공일자를 서비스 화면을 통하여 공지합니다.</p>
        <p>② 학원은 다음 각 호에 해당하는 경우 서비스의 이용을 전부 또는 일부 제한하거나 중단할 수 있습니다.</p>
        <p className="pl-3 text-gray-500">
          1. 서비스용 설비의 보수 등 공사로 인하여 부득이한 경우<br />
          2. 학원이 통제할 수 없는 불가피한 사유로 서비스 중단이 필요한 경우<br />
          3. 서비스 이용량의 폭주 등으로 정상적인 서비스 제공에 지장이 있는 경우<br />
          4. 기타 정전, 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우
        </p>
        <p>
          ③ 학원은 제2항에 따라 서비스가 중단되는 경우 이용자에게 사전 공지합니다. 다만, 통제할 수 없는
          사유로 사전 공지가 불가능한 경우에는 사후에 공지합니다.
        </p>
      </Article>

      <Article no={8} title="설명회 예약 및 상담 신청">
        <p>① 이용자는 홈페이지의 신청 양식을 통해 설명회 참석·상담 등을 신청할 수 있습니다.</p>
        <p>② 학원은 신청 내용을 확인한 후 유선·문자 등을 통하여 안내합니다.</p>
        <p>③ 신청 시 입력한 정보에 허위 또는 오기가 있는 경우 안내가 제한될 수 있습니다.</p>
      </Article>

      <Article no={9} title="미성년자의 수강 신청 등">
        <p>
          ① 미성년자의 수강 등록 및 결제는 원칙적으로 부모 등 법정대리인의 동의 하에 이루어져야 하며,
          법정대리인은 본인의 동의 없이 이루어진 계약을 취소할 수 있습니다.
        </p>
        <p>
          ② 미성년자가 수강료를 본인 명의로 결제하는 경우, 학원은 법정대리인의 동의 여부를 유·무선 등의
          방법으로 확인할 수 있습니다.
        </p>
      </Article>

      <Article no={10} title="교습비 등의 환불">
        <p>
          ① 학원은 수강료(교습비)의 환불에 관하여 「학원의 설립·운영 및 과외교습에 관한 법률」 및 같은 법
          시행령이 정하는 기준에 따라 다음과 같이 환불합니다.
        </p>

        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-[12.5px]">
            <thead>
              <tr className="bg-gray-50 text-gray-500">
                <th className="border border-line px-3 py-2 text-left font-semibold">구분</th>
                <th className="border border-line px-3 py-2 text-left font-semibold">반환사유 발생일</th>
                <th className="border border-line px-3 py-2 text-left font-semibold">반환금액</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr>
                <td className="border border-line px-3 py-2">학원의 교습정지·폐원 등</td>
                <td className="border border-line px-3 py-2">교습을 할 수 없거나 교습장소를 제공할 수 없게 된 날</td>
                <td className="border border-line px-3 py-2">이미 납부한 교습비 등을 일할 계산한 금액</td>
              </tr>
              <tr>
                <td className="border border-line px-3 py-2" rowSpan={4}>
                  이용자가 본인의 의사로 수강을 포기한 경우
                  <span className="mt-1 block text-gray-400">(교습기간 1개월 이내)</span>
                </td>
                <td className="border border-line px-3 py-2">교습 시작 전</td>
                <td className="border border-line px-3 py-2">이미 납부한 교습비 등의 전액</td>
              </tr>
              <tr>
                <td className="border border-line px-3 py-2">총 교습시간의 1/3 경과 전</td>
                <td className="border border-line px-3 py-2">이미 납부한 교습비 등의 2/3에 해당하는 금액</td>
              </tr>
              <tr>
                <td className="border border-line px-3 py-2">총 교습시간의 1/2 경과 전</td>
                <td className="border border-line px-3 py-2">이미 납부한 교습비 등의 1/2에 해당하는 금액</td>
              </tr>
              <tr>
                <td className="border border-line px-3 py-2">총 교습시간의 1/2 경과 후</td>
                <td className="border border-line px-3 py-2">반환하지 않음</td>
              </tr>
              <tr>
                <td className="border border-line px-3 py-2" rowSpan={2}>
                  교습기간이 1개월을 초과하는 경우
                </td>
                <td className="border border-line px-3 py-2">교습 시작 전</td>
                <td className="border border-line px-3 py-2">이미 납부한 교습비 등의 전액</td>
              </tr>
              <tr>
                <td className="border border-line px-3 py-2">교습 시작 후</td>
                <td className="border border-line px-3 py-2">
                  반환사유가 발생한 해당 월의 반환대상 교습비 등(교습기간이 1개월 이내인 경우의 기준에
                  따라 산출한 금액)과 나머지 월의 교습비 등의 전액을 합산한 금액
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[12px] text-gray-400">
          ※ 총 교습시간은 교습기간 중의 총 교습시간을 말하며, 반환금액의 산정은 반환사유가 발생한 날까지
          경과된 교습시간을 기준으로 합니다.
        </p>

        <p className="mt-3">
          ② 이용자가 환불을 요청하는 경우 학원은 요청을 접수하고 환불규정을 확인한 후 5일 이내에
          환불합니다.
        </p>
        <p>
          ③ 강좌에 포함되어 제공된 교재 등이 있는 경우 환불 시 함께 반납하여야 하며, 이미 사용되었거나
          그 가치가 현저히 감소한 경우에는 해당 금액을 공제할 수 있습니다.
        </p>
        <p>
          ④ 이벤트 강좌, 기간제 상품 등은 별도의 수강 취소·변경 및 환불규정이 적용될 수 있으며, 자세한
          내용은 학원을 통해 확인할 수 있습니다.
        </p>
      </Article>

      <Article no={11} title="과오금의 환급">
        <p>
          ① 이용자가 수강료 등을 결제함에 있어서 과오금을 지급한 경우 학원은 결제와 동일한 방법으로
          과오금을 환불합니다. 다만, 동일한 방법으로 환불이 불가능할 때에는 이를 고지하고 이용자가 선택한
          방법으로 환불합니다.
        </p>
        <p>
          ② 학원의 책임 있는 사유로 과오금이 발생한 경우 학원은 과오금 전액을 환불하며, 이용자의 책임
          있는 사유로 과오금이 발생한 경우에는 환불에 소요되는 비용을 합리적인 범위에서 공제하고 환불할
          수 있습니다.
        </p>
      </Article>

      <Article no={12} title="학원의 의무">
        <p>
          ① 학원은 관련 법령 및 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 지속적이고
          안정적으로 서비스를 제공하기 위하여 최선을 다합니다.
        </p>
        <p>
          ② 학원은 이용자의 개인정보를 본인의 동의 없이 제3자에게 제공하거나 누설하지 않습니다. 다만,
          적법한 절차를 거친 국가기관의 요구가 있는 경우는 예외로 하며, 개인정보의 보호에 관하여는 관련
          법령 및 학원이 정하는 개인정보처리방침에 따릅니다.
        </p>
        <p>
          ③ 학원은 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정되는 경우 이를 신속히 처리합니다.
          즉시 처리가 어려운 경우에는 그 사유와 처리 일정을 이용자에게 통보합니다.
        </p>
      </Article>

      <Article no={13} title="이용자의 의무">
        <p>① 이용자는 서비스 이용 시 다음 각 호에 해당하는 행위를 하여서는 아니 됩니다.</p>
        <p className="pl-3 text-gray-500">
          1. 신청 시 허위 사실을 기재하거나 타인의 정보를 도용하는 행위<br />
          2. 학원이 제공하는 정보를 무단으로 복제·배포·전송하거나 상업적으로 이용하는 행위<br />
          3. 학원 또는 제3자의 저작권 등 권리를 침해하는 행위<br />
          4. 학원의 서비스 운영을 방해하는 행위<br />
          5. 학원의 운영진이나 직원을 사칭하는 행위
        </p>
        <p>② 이용자는 신청 시 입력한 정보에 변경이 있는 경우 즉시 학원에 알려야 합니다.</p>
      </Article>

      <Article no={14} title="저작권 등">
        <p>
          홈페이지에 게시된 콘텐츠(텍스트, 이미지, 강좌 정보 등)에 대한 저작권 및 기타 지적재산권은 학원에
          귀속되며, 이용자는 학원의 사전 동의 없이 이를 복제·배포·전송하거나 상업적으로 이용할 수 없습니다.
        </p>
      </Article>

      <Article no={15} title="분쟁의 해결 및 준거법">
        <p>① 본 약관은 대한민국 법령에 따라 규율되고 해석됩니다.</p>
        <p>
          ② 학원과 이용자 간에 분쟁이 발생한 경우 상호 협의하여 해결함을 원칙으로 하며, 협의가 이루어지지
          않을 경우 관련 법령 및 관할 법원의 판단에 따릅니다.
        </p>
      </Article>

      <p className="mt-8 border-t border-line pt-4 text-[12.5px] text-gray-400">
        부칙 — 본 약관은 2026년 10월 1일부터 시행합니다.
      </p>
    </div>
  );
}
