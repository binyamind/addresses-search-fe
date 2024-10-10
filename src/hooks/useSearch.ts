import { requestSearch } from "@/fetchers/search";
import { ResponseAddress } from "@/models/responseAddress";
import { SearchAddressTerm } from "@/models/SearchAddressTerm";
import { QueryKey, useQuery } from "@tanstack/react-query";


export const QUERY_KEY: QueryKey = ["search"];

export const useSearch = (
  { q, searchSpec }: { q: string; searchSpec: SearchAddressTerm },
  onSuccess: ({
    data,
  }: {
    data: { result: { data: Array<ResponseAddress> } };
  }) => void,
  onError: (e: any) => void,
  enabled:boolean
) => {
  return useQuery([...QUERY_KEY, q, searchSpec], requestSearch, {
    onSuccess,
    onError,
    enabled,
    cacheTime: 0,     
  });
};
