import { collectionRoutes } from "@/lib/api";
import type { Poster } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<Poster>("posters");
