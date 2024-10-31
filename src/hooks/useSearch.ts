import { requestSearch } from "@/fetchers/search";
import {
  AvailableFilters,
  ResponseAddressWithFilters,
} from "@/models/responseAddress";
import { SearchAddressTerm } from "@/models/SearchAddressTerm";
import { QueryKey, useQuery } from "@tanstack/react-query";

export const QUERY_KEY: QueryKey = ["search"];

export const useSearch = (
  {
    q,
    searchSpec,
    filters,
  }: {
    q: string;
    searchSpec: SearchAddressTerm;
    filters?: AvailableFilters | null | undefined;
  },
  onSuccess: ({
    data,
  }: {
    data: { result: { data: ResponseAddressWithFilters } };
  }) => void,
  onError: (e: any) => void,
  enabled: boolean
) => {
  return useQuery([...QUERY_KEY, q, searchSpec, filters], requestSearch, {
    onSuccess,
    onError,
    enabled,
    cacheTime: 0,
  });
};
