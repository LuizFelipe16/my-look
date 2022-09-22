import { TAppStatus } from "context";

export type OnEndHandle = {
  err?: string;
  succ?: string;
  status?: TAppStatus;
};
