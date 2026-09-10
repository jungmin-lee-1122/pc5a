import { collectionRoutes } from "@/lib/api";
import type { UnivGroup } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<UnivGroup>("univgroups");
