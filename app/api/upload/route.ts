// 이미지 업로드 — 환경에 따라 저장 위치가 자동으로 바뀝니다.
//   · Vercel 배포(Blob 연결) → Vercel Blob 에 업로드 (OIDC 자동 인증, 공개 URL 반환)
//   · 로컬 개발            → public/uploads 에 파일로 저장
import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/guard";

// Vercel 배포 환경이면 Blob 사용. (요즘 Vercel은 OIDC 로 붙어서 BLOB_READ_WRITE_TOKEN
// 이 없을 수 있으므로, VERCEL / BLOB_STORE_ID 도 함께 확인한다.)
const useBlob = Boolean(
  process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID || process.env.VERCEL,
);

export async function POST(req: Request) {
  if (!(await isAuthed())) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });
  }

  try {
    if (useBlob) {
      // SDK 가 환경에서 토큰(BLOB_READ_WRITE_TOKEN 또는 OIDC)을 자동으로 읽습니다.
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
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: `업로드 실패: ${message}` }, { status: 500 });
  }
}
