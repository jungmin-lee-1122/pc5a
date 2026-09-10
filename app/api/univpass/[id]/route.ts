import { itemRoutes } from "@/lib/api";
import type { AdmissionResult } from "@/lib/types";

export const { PUT, DELETE } = itemRoutes<AdmissionResult>("univpass");
