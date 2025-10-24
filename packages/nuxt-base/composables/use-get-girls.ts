import { useFetch, useRuntimeConfig } from "nuxt/app";
import type { Girl } from "../types/girl";

export const useGetGirls = async (site: string) => {
  // Get runtime config for API URL
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const { data, pending, error } = await useFetch<Girl[]>(
    `${apiUrl}/api/girls?site=${site}`
  );
  return { data, pending, error };
};
