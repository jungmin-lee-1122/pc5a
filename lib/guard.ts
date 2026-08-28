// 라우트 핸들러용 인증 가드.
import { cookies } from "next/headers";
import { AUTH_COOKIE, verifyToken } from "./auth";

export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(AUTH_COOKIE)?.value;
  return verifyToken(token);
}
