// 콘텐츠 로더 — 관리자에서 관리하는 항목(선생님/공지/설명회/영상)만 JSON 에서 읽습니다.
// (슬라이드/포스터/합격실적/홍보배너/사이트정보는 config/homepage.ts 에서 직접 수정)
import { listCollection } from "./store";
import type { Teacher, Notice, EventItem, VideoItem } from "./types";

export const getTeachers = () => listCollection<Teacher>("teachers");
export const getNotices = () => listCollection<Notice>("notices");
export const getEvents = () => listCollection<EventItem>("events");
export const getVideos = () => listCollection<VideoItem>("videos");
