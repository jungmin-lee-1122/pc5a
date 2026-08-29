import { collectionRoutes } from "@/lib/api";
import type { ReviewItem } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<ReviewItem>("reviews");
