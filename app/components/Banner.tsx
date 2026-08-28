import type { Promo } from "@/lib/types";

// 롤링창·포스터 바로 밑의 배너 박스. (데스크톱: 원본 비율 / 모바일: 3.4:1 로 맞춤)
export default function Banner({ banner }: { banner: Promo }) {
  if (!banner?.image) return null;
  return (
    <section className="mx-auto max-w-7xl px-5 pt-5 lg:px-8">
      <a
        href={banner.href || "#"}
        className="relative block aspect-[1080/320] w-full overflow-hidden rounded-2xl border border-line shadow-sm lg:aspect-auto"
      >
        <picture>
          <source media="(min-width: 1024px)" srcSet={banner.image} />
          <img
            src={banner.mobileImage || banner.image}
            alt={banner.alt}
            className="absolute inset-0 h-full w-full object-cover lg:static lg:h-auto"
          />
        </picture>
      </a>
    </section>
  );
}
