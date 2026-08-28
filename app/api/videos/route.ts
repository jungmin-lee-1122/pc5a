import { collectionRoutes } from "@/lib/api";
import type { VideoItem } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<VideoItem>("videos");
