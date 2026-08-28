import { collectionRoutes } from "@/lib/api";
import type { Notice } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<Notice>("notices");
