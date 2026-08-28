import { singletonRoutes } from "@/lib/api";
import type { Promo } from "@/lib/types";

const fallback: Promo = { image: "/placeholders/promo.svg", href: "#", alt: "홍보 배너" };

export const dynamic = "force-dynamic";
export const { GET, PUT } = singletonRoutes<Promo>("promo", fallback);
