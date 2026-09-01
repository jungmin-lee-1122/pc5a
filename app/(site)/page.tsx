import Hero from "@/app/components/Hero";
import FloatingBanners from "@/app/components/FloatingBanners";
import Banner from "@/app/components/Banner";
import Teachers from "@/app/components/Teachers";
import NoticeEvents from "@/app/components/NoticeEvents";
import Videos from "@/app/components/Videos";
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
    <main className="flex-1 pb-4">
      <FloatingBanners />
      <Hero slides={SLIDES.filter((s) => s.active)} poster={POSTER} />
      <Banner banner={BANNER} />
      <Teachers teachers={teachers} subjects={SITE.subjects} />
      <NoticeEvents notices={notices} events={events} />
      <Videos videos={videos} promo={PROMO} title={SITE.sectionTitle} />
    </main>
  );
}
