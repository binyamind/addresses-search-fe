import { AvailableFilters, ResponseAddress } from "@/models/responseAddress";
import { SearchAddressTerm } from "@/models/SearchAddressTerm";
import { create } from "zustand";

export interface DisplayFilters {
  [key: string]: { [key: string]: boolean };
}
type Search = {
  setFilters: (displayFilters: DisplayFilters) => void;
  searchTerm: string;
  apiFilters: AvailableFilters | null;
  filters: DisplayFilters;
  results: Array<ResponseAddress>;
  searchSpec: SearchAddressTerm;
  initSetFilters: (availableFilters: AvailableFilters) => Promise<void>;
  asyncSetResults: (data: Array<ResponseAddress>) => Promise<void>;
  setSearchTerm: (term: string) => void;
  setSearchSpec: (searchSpec: SearchAddressTerm) => void;
  onClickHandler: (itemId: string) => void;
  setApiFilters: (displayFilters: AvailableFilters | null) => void;
  lastSearchTerm: string;
  setLastSearchTerm: (term: string) => void;
};

export const useSearchStore = create<Search>((set) => ({
  lastSearchTerm: "",
  setLastSearchTerm: (term: string) => set(() => ({ searchTerm: term })),
  apiFilters: null,
  setApiFilters: (displayFilters: AvailableFilters | null) => {
    set(() => ({ apiFilters: displayFilters }));
  },
  setFilters: (displayFilters: DisplayFilters) => {
    set(() => ({
      filters: displayFilters,
    }));
  },
  filters: {},
  initSetFilters: async (availableFilters: AvailableFilters) =>
    set(() => ({
      filters: Object.keys(availableFilters).reduce((acc: any, curr) => {
        const keys = availableFilters[curr as keyof AvailableFilters];
        keys?.map((key) => {
          if (!acc[curr]) acc[curr] = {};
          acc[curr][key] = false;
        });
        return acc;
      }, {}),
    })),
  searchTerm: "",
  results: [],
  searchSpec: SearchAddressTerm.main,
  asyncSetResults: async (data: Array<ResponseAddress>) =>
    set(() => ({ results: data })),
  setSearchTerm: (term: string) => set(() => ({ searchTerm: term })),
  setSearchSpec: (searchSpec: SearchAddressTerm) => set(() => ({ searchSpec })),
  onClickHandler: (itemId: string) =>
    set((state) => ({
      results: state.results.filter(({ id }) => id !== itemId),
    })),
}));
