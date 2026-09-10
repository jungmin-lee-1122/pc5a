import { itemRoutes } from "@/lib/api";
import type { SuccessStory } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<SuccessStory>("stories");
