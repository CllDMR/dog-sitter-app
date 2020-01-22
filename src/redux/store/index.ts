import { RootAction, RootState, Services } from "MyTypes";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

// import { composeEnhancers } from "./utils";
import rootReducer from "./root-reducer";
import rootEpic from "./root-epic";
import services from "../services";

const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services
});

// const initialState = {};

const store = createStore(
  rootReducer,
  // initialState,
  // composeEnhancers(applyMiddleware(epicMiddleware))
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
