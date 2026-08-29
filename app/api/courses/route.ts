import { collectionRoutes } from "@/lib/api";
import type { Course } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<Course>("courses");
