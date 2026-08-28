// 초기 시드 데이터 — 저장소(Redis)가 비어 있을 때 보여줄 기본값.
// (관리자에서 처음 저장하면 그때부터 저장소 값이 사용됩니다.)
import teachers from "@/data/teachers.json";
import notices from "@/data/notices.json";
import events from "@/data/events.json";
import videos from "@/data/videos.json";

export const SEEDS: Record<string, unknown[]> = { teachers, notices, events, videos };
