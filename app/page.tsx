import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import Teachers from "./components/Teachers";
import NoticeEvents from "./components/NoticeEvents";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import {
  getSlides,
  getPosters,
  getStats,
  getTeachers,
  getNotices,
  getEvents,
  getVideos,
  getPromo,
  getSite,
} from "@/lib/content";

// 관리자에서 수정한 내용이 바로 반영되도록 매 요청마다 데이터를 다시 읽습니다.
export const dynamic = "force-dynamic";

export default async function Home() {
  const [slides, posters, stats, teachers, notices, events, videos, promo, site] =
    await Promise.all([
      getSlides(),
      getPosters(),
      getStats(),
      getTeachers(),
      getNotices(),
      getEvents(),
      getVideos(),
      getPromo(),
      getSite(),
    ]);

  const activePoster = posters.find((p) => p.active) ?? posters[0] ?? null;

  return (
    <>
      <Header brand={site.brandName} />

      <main className="flex-1 pb-4">
        <Hero slides={slides.filter((s) => s.active)} poster={activePoster} />
        <StatsBanner stats={stats} />
        <Teachers teachers={teachers} subjects={site.subjects} />
        <NoticeEvents notices={notices} events={events} />
        <Videos videos={videos} promo={promo} title={site.sectionTitle} />
      </main>

      <Footer site={site} />
      <FloatingButtons phone={site.social.phone} kakao={site.social.kakao} />
    </>
  );
}
