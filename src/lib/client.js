import { createClient } from "@sanity/client";

const SANITY_TOKEN = import.meta.env.NEXT_PUBLIC_SANITY_TOKEN;

export const client = createClient({
  projectId: "yvbzxn78",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-09-14",
  token: SANITY_TOKEN,
});
