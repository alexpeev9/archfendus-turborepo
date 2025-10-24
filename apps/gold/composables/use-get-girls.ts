import type { Girl } from "~/types/girl";

export const useGetGirls = async (site: string) => {
  const { data, pending, error } = await useFetch<Girl[]>(
    `/api/girls?site=${site}`
  );
  return { data, pending, error };
};
