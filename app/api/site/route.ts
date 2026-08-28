import { NextResponse } from "next/server";
import { getSite } from "@/lib/content";
import { writeData } from "@/lib/store";
import { isAuthed } from "@/lib/guard";
import type { SiteSettings } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await getSite());
}

export async function PUT(req: Request) {
  if (!(await isAuthed())) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const body = (await req.json()) as SiteSettings;
  await writeData("site", body);
  return NextResponse.json(body);
}
