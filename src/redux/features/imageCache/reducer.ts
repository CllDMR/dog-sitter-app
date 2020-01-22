import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { download, success, failure } from "./actions";

const reducer = combineReducers({
  loaded: createReducer({})
    .handleAction([success], (state, action) => ({
      ...state,
      [action.payload.uri]: action.payload.local
    }))
    .handleAction([failure], (state, action) => {
      let newState = {};
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          const element = state[key];
          if (key !== action.payload.uri)
            newState[action.payload.uri] = element;
        }
      }
      return newState;
    }),
  loading: createReducer([] as string[])
    .handleAction([download], (state, action) => [...state, action.payload.uri])
    .handleAction([success], (state, action) =>
      state.filter(uri => uri !== action.payload.uri)
    )
    .handleAction([failure], (state, action) =>
      state.filter(uri => uri !== action.payload.uri)
    )
});

export default reducer;
