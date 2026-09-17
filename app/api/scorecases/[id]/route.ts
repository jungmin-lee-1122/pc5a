import { itemRoutes } from "@/lib/api";
import type { ScoreCase } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<ScoreCase>("scorecases");
