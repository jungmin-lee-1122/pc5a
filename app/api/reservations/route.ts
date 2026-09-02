// 설명회 예약 접수 API (공개 — 방문자가 제출)
//   1) 항상 저장소(Redis/JSON)에 백업 저장하여 데이터 유실 방지
//   2) SHEET_WEBHOOK_URL 환경변수가 있으면 구글시트(Apps Script)로도 전송
import { NextResponse } from "next/server";
import { readData, writeData, newId } from "@/lib/store";

export const dynamic = "force-dynamic";

// 구글시트 컬럼 순서 (Apps Script 와 동일하게 맞춥니다)
const COLUMNS = [
  "createdAt",
  "eventTitle",
  "eventDate",
  "type",
  "name",
  "phone",
  "studentPhone",
  "school",
  "grade",
  "track",
  "companions",
  "source",
  "marketing",
] as const;

type Reservation = { id: string; order?: number; [key: string]: string | number | undefined };

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const str = (v: unknown) => (v == null ? "" : String(v)).slice(0, 500);

  // 필수값 검증
  if (!str(body.name).trim() || str(body.phone).replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "필수 항목을 확인해 주세요." }, { status: 400 });
  }

  const record: Reservation = {
    id: newId(),
    createdAt: new Date().toISOString(),
    eventId: str(body.eventId),
    eventTitle: str(body.eventTitle),
    eventDate: str(body.eventDate),
    type: str(body.type),
    name: str(body.name),
    phone: str(body.phone),
    studentPhone: str(body.studentPhone),
    school: str(body.school),
    grade: str(body.grade),
    track: str(body.track),
    companions: str(body.companions),
    source: str(body.source),
    marketing: str(body.marketing),
  };

  // 1) 저장소에 백업 저장 (실패해도 진행)
  try {
    const items = await readData<Reservation[]>("reservations", []);
    items.push({ ...record, order: items.length + 1 });
    await writeData("reservations", items);
  } catch (e) {
    console.error("[reservations] storage save failed", e);
  }

  // 2) 구글시트(Apps Script Web App)로 전송
  //    [DB제공 동의] 이벤트는 별도 시트(SHEET_WEBHOOK_URL_DB)로 전송, 그 외는 기본 시트
  const isDbConsent = /DB\s*제공/.test(str(body.eventTitle));
  const webhook =
    (isDbConsent && process.env.SHEET_WEBHOOK_URL_DB) || process.env.SHEET_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ columns: COLUMNS, record }),
      });
      if (!res.ok) console.error("[reservations] sheet webhook status", res.status);
    } catch (e) {
      console.error("[reservations] sheet webhook failed", e);
    }
  }

  return NextResponse.json({ ok: true });
}
