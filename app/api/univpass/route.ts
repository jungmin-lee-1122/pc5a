import { collectionRoutes } from "@/lib/api";
import type { AdmissionResult } from "@/lib/types";

export const dynamic = "force-dynamic";
export const { GET, POST } = collectionRoutes<AdmissionResult>("univpass");
