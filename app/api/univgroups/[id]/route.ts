import { itemRoutes } from "@/lib/api";
import type { UnivGroup } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<UnivGroup>("univgroups");
