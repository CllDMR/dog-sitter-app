import { Example } from "MyModels";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import {
  createExampleAsync,
  deleteExampleAsync,
  loadExampleAsync,
  updateExampleAsync
} from "./actions";

const reducer = combineReducers({
  isLoading: createReducer(false as boolean)
    .handleAction([loadExampleAsync.request], () => true)
    .handleAction(
      [loadExampleAsync.success, loadExampleAsync.failure],
      () => false
    ),
  examples: createReducer([] as Example[])
    .handleAction(
      [
        loadExampleAsync.success,
        createExampleAsync.success,
        updateExampleAsync.success,
        deleteExampleAsync.success
      ],
      (_state, action) => action.payload
    )
    .handleAction(createExampleAsync.request, (state, action) => [
      ...state,
      action.payload
    ])
    .handleAction(updateExampleAsync.request, (state, action) =>
      state.map(i => (i.id === action.payload.id ? action.payload : i))
    )
    .handleAction(deleteExampleAsync.request, (state, action) =>
      state.filter(i => i.id !== action.payload.id)
    )
    .handleAction(deleteExampleAsync.failure, (state, action) =>
      state.concat(action.payload)
    )
});

export default reducer;
