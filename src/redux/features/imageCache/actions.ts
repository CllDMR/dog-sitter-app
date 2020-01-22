import { createAction } from "typesafe-actions";

export const init = createAction("IMAGE_CACHE_INIT")();

export const fetch = createAction("IMAGE_CACHE_FETCH")<{
  uri: string;
  filename: string;
}>();

export const download = createAction("IMAGE_CACHE_DOWNLOAD")<{
  uri: string;
  filename: string;
}>();

export const success = createAction("IMAGE_CACHE_SUCCESS")<{
  uri: string;
  local: string;
}>();

export const failure = createAction("IMAGE_CACHE_FAILURE")<{
  uri: string;
}>();
