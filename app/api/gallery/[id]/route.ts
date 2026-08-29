import { itemRoutes } from "@/lib/api";
import type { GalleryItem } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<GalleryItem>("gallery");
