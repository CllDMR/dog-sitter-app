import {
  GetOneAction_START,
  PostAction,
  GetOneAction_DONE,
  GetOneAction_ERROR,
  GetOneAction_CANCEL
} from "@typings/Example/actions";
import {
  Example_GET_ONE_START,
  Example_POST_START,
  Example_GET_ONE_DONE,
  Example_GET_ONE_ERROR,
  Example_GET_ONE_CANCEL
} from "@typings/Example/constants";

export const exampleGetOne_START: GetOneAction_START = () => ({
  type: Example_GET_ONE_START
});
export const exampleGetOne_DONE: GetOneAction_DONE = () => ({
  type: Example_GET_ONE_DONE
});
export const exampleGetOne_ERROR: GetOneAction_ERROR = () => ({
  type: Example_GET_ONE_ERROR
});
export const exampleGetOne_CANCEL: GetOneAction_CANCEL = () => ({
  type: Example_GET_ONE_CANCEL
});

export const examplePost: PostAction = payload => ({
  type: Example_POST_START,
  payload
});

export default {
  exampleGetOne_START,
  exampleGetOne_DONE,
  exampleGetOne_ERROR,
  exampleGetOne_CANCEL,
  examplePost
};
