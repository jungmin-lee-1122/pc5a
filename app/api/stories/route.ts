import { collectionRoutes } from "@/lib/api";
import type { SuccessStory } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<SuccessStory>("stories");
