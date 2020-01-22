import { Topic } from "MyModels";
import { createAsyncAction, createAction } from "typesafe-actions";

export const init = createAction("TOPICS_INIT")();

export const loadTopicsAsync = createAsyncAction(
  "TOPICS_LOAD_REQUEST",
  "TOPICS_LOAD_SUCCESS",
  "TOPICS_LOAD_FAILURE"
)<undefined, Topic[], string>();
