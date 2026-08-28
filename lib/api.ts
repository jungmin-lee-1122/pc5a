// API 라우트용 재사용 헬퍼 — 컬렉션/싱글톤 CRUD 를 공통화합니다.
import { NextResponse } from "next/server";
import { readData, writeData, listCollection, newId } from "./store";
import { isAuthed } from "./guard";

type WithId = { id: string; order?: number };
type ItemContext = { params: Promise<{ id: string }> };

/** 인증 안 됐으면 401 응답을, 됐으면 null 을 반환 */
async function guard(): Promise<NextResponse | null> {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  return null;
}

/** 컬렉션 목록/생성 라우트 (GET, POST) */
export function collectionRoutes<T extends WithId>(name: string) {
  async function GET() {
    return NextResponse.json(await listCollection<T>(name));
  }
  async function POST(req: Request) {
    const denied = await guard();
    if (denied) return denied;

    const body = (await req.json()) as Partial<T>;
    const items = await readData<T[]>(name, []);
    const maxOrder = items.reduce((m, it) => Math.max(m, it.order ?? 0), 0);
    const item = { ...body, id: newId(), order: body.order ?? maxOrder + 1 } as T;
    items.push(item);
    await writeData(name, items);
    return NextResponse.json(item, { status: 201 });
  }
  return { GET, POST };
}

/** 컬렉션 항목 수정/삭제 라우트 (PUT, DELETE) */
export function itemRoutes<T extends WithId>(name: string) {
  async function PUT(req: Request, ctx: ItemContext) {
    const denied = await guard();
    if (denied) return denied;

    const { id } = await ctx.params;
    const body = (await req.json()) as Partial<T>;
    const items = await readData<T[]>(name, []);
    const idx = items.findIndex((i) => i.id === id);
    if (idx < 0) return NextResponse.json({ error: "not found" }, { status: 404 });
    items[idx] = { ...items[idx], ...body, id };
    await writeData(name, items);
    return NextResponse.json(items[idx]);
  }
  async function DELETE(_req: Request, ctx: ItemContext) {
    const denied = await guard();
    if (denied) return denied;

    const { id } = await ctx.params;
    const items = await readData<T[]>(name, []);
    await writeData(name, items.filter((i) => i.id !== id));
    return NextResponse.json({ ok: true });
  }
  return { PUT, DELETE };
}

/** 단일 설정 라우트 (GET, PUT) */
export function singletonRoutes<T>(name: string, fallback: T) {
  async function GET() {
    return NextResponse.json(await readData<T>(name, fallback));
  }
  async function PUT(req: Request) {
    const denied = await guard();
    if (denied) return denied;

    const body = (await req.json()) as T;
    await writeData(name, body);
    return NextResponse.json(body);
  }
  return { GET, PUT };
}
