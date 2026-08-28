import { collectionRoutes } from "@/lib/api";
import type { Slide } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<Slide>("slides");
