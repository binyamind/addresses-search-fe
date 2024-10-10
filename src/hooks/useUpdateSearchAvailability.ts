import { putSearchAvailability } from "@/fetchers/search";
import { useMutation } from "@tanstack/react-query";

export const useUpdateSearchAvailability = () => {
  return useMutation(putSearchAvailability, {
    onError: (error) => {
      console.error("An error occurred:", error);
    },
 
  });
};
