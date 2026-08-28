import { itemRoutes } from "@/lib/api";
import type { EventItem } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<EventItem>("events");
