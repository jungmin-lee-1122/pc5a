/**
 * 5A아카데미 평촌점 — 홈페이지 설명회 신청 → 구글시트 자동 기록
 *
 * · 평촌점 시트 하나에 계속 쌓이고, 설명회마다 탭이 자동으로 따로 생깁니다. (탭 이름 = 설명회 제목)
 * · 홈페이지 '온라인 상담' 접수가 이 주소로 들어오면 '온라인 상담' 탭에 따로 쌓입니다.
 *
 * 설치
 *  1) 평촌점 구글시트 → 확장 프로그램 → Apps Script → 기본 코드 지우고 붙여넣기 → 저장
 *  2) 배포 → 새 배포 → 웹 앱 (실행: 나 / 액세스: 모든 사용자) → 웹 앱 URL(…/exec) 복사
 *  3) Vercel pc5a → Settings → Environment Variables → SHEET_WEBHOOK_URL = 웹 앱 URL → Save → Redeploy
 *
 * ※ 코드 수정 후에는 '배포 관리 → 수정(연필) → 버전: 새 버전'으로 다시 배포해야 반영됩니다.
 */

const BRANCH = '평촌점';
// 신청이 쌓일 시트 (평촌점 공통 시트) — 이 시트에 편집 권한이 있는 계정으로 배포하세요.
const SHEET_ID = '1hCjVpC0gc9NROcfBslkEYZiDrrPAP5PcZsag1MC2vI0';

// 홈페이지에서 보내는 항목 → 시트 머리글
const LABELS = {
  createdAt:    '접수일시',
  eventTitle:   '설명회명',
  eventDate:    '설명회 일시',
  type:         '예약자 구분',
  name:         '학생이름',
  phone:        '학부모 연락처',
  studentPhone: '학생 연락처',
  school:       '학교명',
  grade:        '학년',
  track:        '계열',
  companions:   '동반인',
  source:       '유입경로',
  marketing:    '마케팅 수신동의',
  // 온라인 상담 접수용
  gender:       '성별',
  field:        '상담 분야',
  message:      '문의 내용',
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000); // 동시에 여러 건이 들어와도 줄이 겹치지 않게
  try {
    const body = JSON.parse(e.postData.contents);
    const columns = body.columns || Object.keys(LABELS);
    const record = body.record || {};

    // 탭 이름 정하기: 온라인 상담은 '온라인 상담', 설명회는 설명회 제목
    let tabName = body.sheet === 'consults'
      ? '온라인 상담'
      : String(record.eventTitle || '설명회 신청');
    tabName = tabName.replace(/[\[\]\*\?:\\\/]/g, '-').trim().slice(0, 100) || '설명회 신청';

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(tabName) || ss.insertSheet(tabName);

    // 새 탭이면 머리글부터
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(columns.map(function (k) { return LABELS[k] || k; }));
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, columns.length)
        .setFontWeight('bold').setBackground('#eef1fb');
    }

    const row = columns.map(function (k) {
      const v = record[k] == null ? '' : String(record[k]);
      if (k === 'createdAt' && v) {
        return Utilities.formatDate(new Date(v), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
      }
      // 전화번호 맨 앞 0 이 사라지지 않게 글자로 기록
      if ((k === 'phone' || k === 'studentPhone') && v) return "'" + v;
      return v;
    });
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// 배포 후 웹 앱 URL 을 브라우저에서 열면 연결 확인 문구가 보입니다
function doGet() {
  return ContentService.createTextOutput('5A아카데미 ' + BRANCH + ' 설명회 신청 시트 연결 OK');
}

// 편집기에서 이 함수를 선택해 ▶실행 → 시트에 '연결 테스트' 탭이 생기면 정상
function 테스트() {
  const res = doPost({ postData: { contents: JSON.stringify({
    columns: ['createdAt', 'eventTitle', 'name', 'phone'],
    record: { createdAt: new Date().toISOString(), eventTitle: '연결 테스트', name: '테스트', phone: '010-0000-0000' }
  }) } });
  Logger.log(res.getContent());
}
