import { ResponseAddress } from "@/models/responseAddress";
import { SearchAddressTerm } from "@/models/SearchAddressTerm";
import { create } from "zustand";

type Search = {
  searchTerm: string;
  results: Array<ResponseAddress>;
  searchSpec: SearchAddressTerm;
  asyncSetResults: (data: Array<ResponseAddress>) => Promise<void>;
  setSearchTerm: (term: string) => void;
  setSearchSpec: (searchSpec: SearchAddressTerm) => void;
  onClickHandler: (itemId: string) => void;
};

export const useSearchStore = create<Search>((set) => ({
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
