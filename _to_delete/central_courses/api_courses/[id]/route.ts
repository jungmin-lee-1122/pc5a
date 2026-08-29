import { itemRoutes } from "@/lib/api";
import type { Course } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<Course>("courses");
