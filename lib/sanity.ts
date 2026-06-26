import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "t02woztx",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});
