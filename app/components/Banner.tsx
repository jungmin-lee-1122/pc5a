import type { Promo } from "@/lib/types";

// 롤링창·포스터 바로 밑의 배너 박스. 이미지 하나로 교체합니다.
export default function Banner({ banner }: { banner: Promo }) {
  if (!banner?.image) return null;
  return (
    <section className="mx-auto max-w-7xl px-5 pt-5 lg:px-8">
      <a
        href={banner.href || "#"}
        className="block overflow-hidden rounded-2xl border border-line shadow-sm"
      >
        <img src={banner.image} alt={banner.alt} className="w-full object-cover" />
      </a>
    </section>
  );
}
