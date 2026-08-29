import { itemRoutes } from "@/lib/api";
import type { ReviewItem } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<ReviewItem>("reviews");
