// 이미지 업로드 — 환경에 따라 저장 위치가 자동으로 바뀝니다.
//   · Vercel Blob 연결됨 → Blob 에 업로드 (공개 URL 반환)
//   · 로컬 개발          → public/uploads 에 파일로 저장
import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/guard";

export async function POST(req: Request) {
  if (!(await isAuthed())) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });
  }

  // Vercel Blob (배포 환경)
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const { put } = await import("@vercel/blob");
    const blob = await put(`uploads/${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
      contentType: file.type || undefined,
    });
    return NextResponse.json({ url: blob.url });
  }

  // 로컬 파일 저장 (개발 환경)
  const { promises: fs } = await import("fs");
  const path = (await import("path")).default;
  const bytes = Buffer.from(await file.arrayBuffer());
  const dir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(dir, { recursive: true });
  const ext = (path.extname(file.name) || ".png").toLowerCase();
  const filename = Date.now().toString(36) + Math.random().toString(36).slice(2, 8) + ext;
  await fs.writeFile(path.join(dir, filename), bytes);
  return NextResponse.json({ url: `/uploads/${filename}` });
}
