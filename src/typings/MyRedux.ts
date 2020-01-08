import { ExampleState } from "./Example/state";
import { ExampleActions } from "./Example/actions";
import * as ExampleConstants from "./Example/constants";

import { ServiceState } from "./Service/state";
import { ServiceActions } from "./Service/actions";
import * as ServiceConstants from "./Service/constants";

export type RootActionTypes =
  | ReturnType<ExampleActions>
  | ReturnType<ServiceActions>;

export type RootActions = ExampleActions | ServiceActions;

export type RootState = {
  example: ExampleState;
  service: ServiceState;
};

export const RootConstants = {
  ExampleConstants: { ...ExampleConstants },
  ServiceConstants: { ...ServiceConstants }
};
