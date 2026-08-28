// 파일 기반 JSON 스토어 — 별도 DB 없이 data/*.json 에 콘텐츠를 저장합니다.
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

function filePath(name: string) {
  return path.join(DATA_DIR, `${name}.json`);
}

/** name.json 을 읽어 반환. 없으면 fallback 을 반환합니다. */
export async function readData<T>(name: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(filePath(name), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/** name.json 에 값을 저장합니다. */
export async function writeData<T>(name: string, value: T): Promise<void> {
  await ensureDir();
  await fs.writeFile(filePath(name), JSON.stringify(value, null, 2), "utf8");
}

/** order 기준으로 정렬된 컬렉션을 반환합니다. */
export async function listCollection<T extends { order?: number }>(
  name: string,
): Promise<T[]> {
  const items = await readData<T[]>(name, []);
  return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/** 간단한 고유 ID 생성기. */
export function newId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
