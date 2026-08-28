import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Teachers from "./components/Teachers";
import NoticeEvents from "./components/NoticeEvents";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import { getTeachers, getNotices, getEvents, getVideos } from "@/lib/content";
// 코드로 직접 수정하는 항목들 (관리자 아님)
import { SLIDES, POSTER, BANNER, PROMO, SITE } from "@/config/homepage";

// 관리자에서 수정한 내용(선생님/공지/설명회/영상)이 바로 반영되도록 매 요청마다 다시 읽습니다.
export const dynamic = "force-dynamic";

export default async function Home() {
  const [teachers, notices, events, videos] = await Promise.all([
    getTeachers(),
    getNotices(),
    getEvents(),
    getVideos(),
  ]);

  return (
    <>
      <Header brand={SITE.brandName} phone={SITE.social.phone} />

      <main className="flex-1 pb-4">
        <Hero slides={SLIDES.filter((s) => s.active)} poster={POSTER} />
        <Banner banner={BANNER} />
        <Teachers teachers={teachers} subjects={SITE.subjects} />
        <NoticeEvents notices={notices} events={events} />
        <Videos videos={videos} promo={PROMO} title={SITE.sectionTitle} />
      </main>

      <Footer site={SITE} />
      <FloatingButtons phone={SITE.social.phone} kakao={SITE.social.kakao} />
    </>
  );
}
