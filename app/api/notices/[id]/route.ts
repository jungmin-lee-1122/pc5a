import { itemRoutes } from "@/lib/api";
import type { Notice } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<Notice>("notices");
