import {
  Example_GET_ONE_START,
  Example_GET_ONE_DONE,
  Example_GET_ONE_ERROR,
  Example_GET_ONE_CANCEL,
  Example_POST_START
} from "./constants";

import { ExampleDataType } from "./state";

export type ExampleActions =
  | GetOneAction_START
  | GetOneAction_DONE
  | GetOneAction_ERROR
  | GetOneAction_CANCEL
  | PostAction;

export type GetOneAction_START = () => {
  type: typeof Example_GET_ONE_START;
};
export type GetOneAction_DONE = () => {
  type: typeof Example_GET_ONE_DONE;
};
export type GetOneAction_ERROR = () => {
  type: typeof Example_GET_ONE_ERROR;
};
export type GetOneAction_CANCEL = () => {
  type: typeof Example_GET_ONE_CANCEL;
};

export type PostAction = (
  payload: ExampleDataType
) => {
  type: typeof Example_POST_START;
  payload: ExampleDataType;
};
