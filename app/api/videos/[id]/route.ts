import { itemRoutes } from "@/lib/api";
import type { VideoItem } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<VideoItem>("videos");
