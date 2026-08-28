// 콘텐츠 로더 — 관리자에서 관리하는 항목만 저장소에서 읽습니다.
// (슬라이드/포스터/배너/사이트정보는 config/homepage.ts 에서 직접 수정)
import { listCollection } from "./store";
import { SEEDS } from "./seeds";
import type { Teacher, Notice, EventItem, VideoItem } from "./types";

export const getTeachers = () => listCollection<Teacher>("teachers", SEEDS.teachers as Teacher[]);
export const getNotices = () => listCollection<Notice>("notices", SEEDS.notices as Notice[]);
export const getEvents = () => listCollection<EventItem>("events", SEEDS.events as EventItem[]);
export const getVideos = () => listCollection<VideoItem>("videos", SEEDS.videos as VideoItem[]);
