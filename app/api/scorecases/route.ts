import { collectionRoutes } from "@/lib/api";
import type { ScoreCase } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<ScoreCase>("scorecases");
