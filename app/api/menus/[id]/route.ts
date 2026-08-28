import { itemRoutes } from "@/lib/api";
import type { MealMenu } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<MealMenu>("menus");
