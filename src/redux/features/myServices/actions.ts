import { MyService } from "MyModels";
import { createAsyncAction } from "typesafe-actions";

export const initAsync = createAsyncAction(
  "MY_SERVICES_INIT_REQUEST",
  "MY_SERVICES_INIT_SUCCESS",
  "MY_SERVICES_INIT_FAILURE"
)<undefined, MyService[], string>();

export const loadAsync = createAsyncAction(
  "MY_SERVICES_LOAD_REQUEST",
  "MY_SERVICES_LOAD_SUCCESS",
  "MY_SERVICES_LOAD_FAILURE"
)<{ page: number }, MyService[], string>();

export const refreshAsync = createAsyncAction(
  "MY_SERVICES_REFRESH_REQUEST",
  "MY_SERVICES_REFRESH_SUCCESS",
  "MY_SERVICES_REFRESH_FAILURE"
)<undefined, MyService[], string>();
