// 콘텐츠 로더 — 각 섹션이 필요로 하는 데이터를 JSON 스토어에서 읽어옵니다.
import { listCollection, readData } from "./store";
import type {
  Slide,
  Poster,
  Stats,
  Teacher,
  Notice,
  EventItem,
  VideoItem,
  Promo,
  SiteSettings,
} from "./types";

const DEFAULT_STATS: Stats = {
  brand: "러셀 평촌",
  title: "대입 합격 결과",
  note: "데이터 산출 기준",
  items: [],
};

const DEFAULT_PROMO: Promo = {
  image: "/placeholders/promo.svg",
  href: "#",
  alt: "홍보 배너",
};

const DEFAULT_SITE: SiteSettings = {
  brandName: "아카데미",
  sectionTitle: "영상으로 만나는 평촌청솔학원",
  subjects: ["국어", "수학", "영어", "한국사", "사회탐구", "과학탐구", "논술"],
  footer: {
    company: "(주)종로학원평촌아카데미",
    address: "경기도 안양시 평촌대로 112",
    bizNo: "297-88-02478",
    tel: "031-386-1881",
    fax: "031-386-1886",
    regNo: "제2014-096호",
    copyright: "Copyright ⓒ 종로학원 평촌 All Right Reserved.",
    brand: "평촌종로학원",
  },
  social: { naver: "#", instagram: "#", facebook: "#", youtube: "#", kakao: "#", phone: "031-386-1881" },
};

export const getSlides = () => listCollection<Slide>("slides");
export const getPosters = () => listCollection<Poster>("posters");
export const getStats = () => readData<Stats>("stats", DEFAULT_STATS);
export const getTeachers = () => listCollection<Teacher>("teachers");
export const getNotices = () => listCollection<Notice>("notices");
export const getEvents = () => listCollection<EventItem>("events");
export const getVideos = () => listCollection<VideoItem>("videos");
export const getPromo = () => readData<Promo>("promo", DEFAULT_PROMO);
export const getSite = () => readData<SiteSettings>("site", DEFAULT_SITE);
