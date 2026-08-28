// 관리자 인증 — 서명된 쿠키 기반의 경량 세션. Web Crypto 로 구현해
// 노드 런타임(라우트)과 엣지 런타임(미들웨어) 모두에서 동작합니다.

const SECRET = process.env.ADMIN_SECRET || "pc5a-dev-secret-change-me";
const PASSWORD = process.env.ADMIN_PASSWORD || "admin1234";

export const AUTH_COOKIE = "pc5a_admin";

const encoder = new TextEncoder();

function toHex(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let out = "";
  for (const b of bytes) out += b.toString(16).padStart(2, "0");
  return out;
}

async function hmac(value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return toHex(signature);
}

/** 비밀번호가 맞으면 서명된 토큰을 발급합니다. */
export async function createToken(): Promise<string> {
  const value = `admin:${Date.now()}`;
  const sig = await hmac(value);
  return `${value}.${sig}`;
}

/** 토큰 서명을 검증합니다. */
export async function verifyToken(token?: string | null): Promise<boolean> {
  if (!token) return false;
  const idx = token.lastIndexOf(".");
  if (idx < 0) return false;
  const value = token.slice(0, idx);
  const sig = token.slice(idx + 1);
  if (!value.startsWith("admin:")) return false;
  const expected = await hmac(value);
  return sig === expected;
}

/** 로그인 비밀번호 확인. */
export function checkPassword(pw: string): boolean {
  return typeof pw === "string" && pw.length > 0 && pw === PASSWORD;
}
