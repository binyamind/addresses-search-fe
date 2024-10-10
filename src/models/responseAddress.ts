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
> & { id: string | undefined };

export interface BEResponse {
  result: PluginRespone;
}
export interface PluginRespone {
  result: {
    data: Array<ResponseAddress>;
  };
}
