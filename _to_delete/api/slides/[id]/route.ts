import { itemRoutes } from "@/lib/api";
import type { Slide } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<Slide>("slides");
