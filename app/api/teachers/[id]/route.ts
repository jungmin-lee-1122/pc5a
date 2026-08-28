import { itemRoutes } from "@/lib/api";
import type { Teacher } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<Teacher>("teachers");
