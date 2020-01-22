import { MyService } from "MyModels";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { initAsync, loadAsync, refreshAsync } from "./actions";

const reducer = combineReducers({
  isRefreshing: createReducer(false as boolean)
    .handleAction([refreshAsync.request], (_state, _action) => true)
    .handleAction(
      [refreshAsync.success, refreshAsync.failure],
      (_state, _action) => false
    ),
  isLoading: createReducer(false as boolean)
    .handleAction(
      [initAsync.request, loadAsync.request, refreshAsync.request],
      (_state, _action) => true
    )
    .handleAction(
      [
        initAsync.success,
        initAsync.failure,
        loadAsync.success,
        loadAsync.failure,
        refreshAsync.success,
        refreshAsync.failure
      ],
      (_state, _action) => false
    ),
  myServices: createReducer([] as MyService[])
    .handleAction(
      [initAsync.success, refreshAsync.success],
      (_state, action) => action.payload
    )
    .handleAction([loadAsync.success], (state, action) => [
      ...state,
      ...action.payload
    ])
});

export default reducer;
