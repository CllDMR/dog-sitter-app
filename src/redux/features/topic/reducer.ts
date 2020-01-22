import { Topic } from "MyModels";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { loadTopicsAsync } from "./actions";

const reducer = combineReducers({
  isLoading: createReducer(false as boolean)
    .handleAction([loadTopicsAsync.request], () => true)
    .handleAction(
      [loadTopicsAsync.success, loadTopicsAsync.failure],
      () => false
    ),
  topics: createReducer([] as Topic[]).handleAction(
    [loadTopicsAsync.success],
    (_, action) => action.payload
  )
});

export default reducer;
