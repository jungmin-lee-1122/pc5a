// 저장소 계층 — 환경에 따라 백엔드가 자동으로 바뀝니다.
//   · Vercel 등 배포 환경(Upstash Redis 연결됨) → Redis 에 저장
//   · 로컬 개발(환경변수 없음)               → data/*.json 파일에 저장
// 덕분에 로컬은 설정 없이 그대로 동작하고, 배포에서는 파일 쓰기 문제 없이 저장됩니다.
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const useRedis = Boolean(REDIS_URL && REDIS_TOKEN);

type RedisClient = import("@upstash/redis").Redis;
let redisClient: RedisClient | null = null;

async function getRedis(): Promise<RedisClient> {
  if (!redisClient) {
    const { Redis } = await import("@upstash/redis");
    redisClient = new Redis({ url: REDIS_URL!, token: REDIS_TOKEN! });
  }
  return redisClient;
}

/** name 데이터를 읽어 반환. 없으면 fallback(초기 시드) 반환. */
export async function readData<T>(name: string, fallback: T): Promise<T> {
  if (useRedis) {
    const redis = await getRedis();
    const value = await redis.get<T>(name);
    return value ?? fallback;
  }
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, `${name}.json`), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/** name 데이터를 저장. */
export async function writeData<T>(name: string, value: T): Promise<void> {
  if (useRedis) {
    const redis = await getRedis();
    await redis.set(name, value);
    return;
  }
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(path.join(DATA_DIR, `${name}.json`), JSON.stringify(value, null, 2), "utf8");
}

/** order 기준 정렬된 컬렉션 반환. (초기 시드는 content.ts 에서 주입) */
export async function listCollection<T extends { order?: number }>(
  name: string,
  fallback: T[] = [],
): Promise<T[]> {
  const items = await readData<T[]>(name, fallback);
  return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/** 간단한 고유 ID 생성기. */
export function newId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
