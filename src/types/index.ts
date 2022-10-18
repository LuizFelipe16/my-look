import { TAppStatus } from "context";

export type OnEndHandle = {
  err?: string;
  succ?: string;
  status?: TAppStatus;
};

export * from './Look';

export * as APIClientTypes from './client';
export * as TypesManager from './utils';
