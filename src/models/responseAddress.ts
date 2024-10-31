import { Address } from "./Address";

export type ResponseAddress = Pick<
  Address,
  | "code"
  | "description"
  | "extraGroup"
  | "group"
  | "main"
  | "neighbourhood"
  | "secondary"
  | "type"
> & { id: string | undefined; };

export interface AvailableFilters  {
  availableType?: Array<string>;
  availableNeighbourhoods?: Array<string>;
};

export interface ResponseAddressWithFilters {
  addresses: Array<ResponseAddress>;
  availableFilters: AvailableFilters;
}

export interface BEResponse {
  result: PluginRespone;
}
export interface PluginRespone {
  result: {
    data: Array<ResponseAddressWithFilters>;
  };
}
