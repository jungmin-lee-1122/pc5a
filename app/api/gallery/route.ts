import { collectionRoutes } from "@/lib/api";
import type { GalleryItem } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<GalleryItem>("gallery");
