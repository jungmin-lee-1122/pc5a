// 콘텐츠 로더 — 관리자에서 관리하는 항목만 저장소에서 읽습니다.
// (슬라이드/포스터/배너/사이트정보는 config/homepage.ts 에서 직접 수정)
import { listCollection } from "./store";
import { SEEDS } from "./seeds";
import type { Teacher, Notice, EventItem, VideoItem, MealMenu, GalleryItem, ReviewItem, TeacherCourse } from "./types";

export async function getTeachers(): Promise<Teacher[]> {
  const teachers = await listCollection<Teacher>("teachers", SEEDS.teachers as Teacher[]);
  // 강좌 id 보정 — 예전에 저장돼 id가 없는 강좌도 항상 클릭 가능하도록 안정적 id 부여
  return teachers.map((t) => ({
    ...t,
    courses: (t.courses ?? []).map((c, i) => (c.id ? c : { ...c, id: `${t.id}-c${i}` })),
  }));
}
export const getNotices = () => listCollection<Notice>("notices", SEEDS.notices as Notice[]);
export const getEvents = () => listCollection<EventItem>("events", SEEDS.events as EventItem[]);
export const getVideos = () => listCollection<VideoItem>("videos", SEEDS.videos as VideoItem[]);
export const getMenus = () => listCollection<MealMenu>("menus", SEEDS.menus as MealMenu[]);
export const getGallery = () => listCollection<GalleryItem>("gallery", SEEDS.gallery as GalleryItem[]);
export const getReviews = () => listCollection<ReviewItem>("reviews", SEEDS.reviews as ReviewItem[]);
/** 강좌 + 소속 선생님 정보 (단과시간표/강좌 상세용) */
export interface CourseWithTeacher extends TeacherCourse {
  teacherId: string;
  teacherName: string;
  teacherPhoto: string;
  subject: string;
}

/** 모든 선생님의 개설 강좌를 평탄화해 반환 */
export async function getAllCourses(): Promise<CourseWithTeacher[]> {
  const teachers = await getTeachers();
  return teachers
    .filter((t) => t.active)
    .flatMap((t) =>
      (t.courses ?? []).map((c) => ({
        ...c,
        teacherId: t.id,
        teacherName: t.name,
        teacherPhoto: t.photo,
        subject: t.subject,
      })),
    );
}
