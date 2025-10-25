import { useFetch, useRuntimeConfig } from "nuxt/app";
import type { GirlData } from "shared-types";
import type { Ref } from "vue";

export const useGetGirls = async (
  site: string
): Promise<{
  data: Ref<GirlData[] | null>;
  pending: Ref<boolean>;
  error: Ref<any>;
}> => {
  // Get runtime config for API URL
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const { data, pending, error } = await useFetch<GirlData[]>(
    `${apiUrl}/api/girls?site=${site}`
  );
  return { data, pending, error };
};
