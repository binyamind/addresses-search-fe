import { ResponseAddress } from "@/models/responseAddress";
import request from "./axiosInstance";

export const requestSearch = async ({
  queryKey,
}: {
  queryKey: any;
}): Promise<{
  data: Array<ResponseAddress>;
}> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, q, searchSpec] = queryKey;
  return await request({
    url: "/search",
    params: {
      q,
      searchSpec,
    },
  });
};

export const putSearchAvailability = async ({
  id,
}: {
  id: string | undefined;
}) => {
  return await request({
    url: `/update-search-availability`,
    method: "PUT",
    data: { id },
  });
};
