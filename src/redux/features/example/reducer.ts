import { ExampleState } from "@typings/Example/state";
import * as ExampleConstants from "@typings/Example/constants";
import { RootActionTypes } from "@typings/MyRedux";

const initialState: ExampleState = {};

export default (
  state = initialState,
  action: RootActionTypes
): ExampleState => {
  switch (action.type) {
    case ExampleConstants.Example_GET_ONE_START:
      return { ...state };
    default:
      return { ...state };
  }
};
