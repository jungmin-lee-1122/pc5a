// 온라인 상담 접수 API (공개 — 방문자가 제출)
//   1) 항상 저장소(Redis/JSON)에 백업 저장하여 데이터 유실 방지
//   2) CONSULT_WEBHOOK_URL 환경변수가 있으면 구글시트(Apps Script)로도 전송
import { NextResponse } from "next/server";
import { readData, writeData, newId } from "@/lib/store";

export const dynamic = "force-dynamic";

// 구글시트 컬럼 순서 (Apps Script 와 동일하게 맞춥니다)
const COLUMNS = [
  "createdAt",
  "name",
  "phone",
  "grade",
  "field",
  "time",
  "message",
] as const;

type Consult = { id: string; order?: number; [key: string]: string | number | undefined };

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const str = (v: unknown) => (v == null ? "" : String(v)).slice(0, 1000);

  if (!str(body.name).trim() || str(body.phone).replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "필수 항목을 확인해 주세요." }, { status: 400 });
  }

  const record: Consult = {
    id: newId(),
    createdAt: new Date().toISOString(),
    name: str(body.name),
    phone: str(body.phone),
    grade: str(body.grade),
    field: str(body.field),
    time: str(body.time),
    message: str(body.message),
  };

  // 1) 저장소 백업 (실패해도 진행)
  try {
    const items = await readData<Consult[]>("consults", []);
    items.push({ ...record, order: items.length + 1 });
    await writeData("consults", items);
  } catch (e) {
    console.error("[consult] storage save failed", e);
  }

  // 2) 구글시트(Apps Script Web App)로 전송
  const webhook = process.env.CONSULT_WEBHOOK_URL || process.env.SHEET_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sheet: "consults", columns: COLUMNS, record }),
      });
      if (!res.ok) console.error("[consult] sheet webhook status", res.status);
    } catch (e) {
      console.error("[consult] sheet webhook failed", e);
    }
  }

  return NextResponse.json({ ok: true });
}
