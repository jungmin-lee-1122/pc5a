import { itemRoutes } from "@/lib/api";
import type { Poster } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<Poster>("posters");
