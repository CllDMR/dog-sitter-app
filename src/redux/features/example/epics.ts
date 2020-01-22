import { RootEpic } from "MyTypes";
import { filter, ignoreElements } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import {
  createExampleAsync,
  deleteExampleAsync,
  initExample,
  loadExampleAsync,
  updateExampleAsync
} from "./actions";

export const initExamplesEpic: RootEpic = (action$, _state$, _services) =>
  action$.pipe(filter(isActionOf(initExample)), ignoreElements());

export const loadExamplesEpic: RootEpic = (action$, _state$, _services) =>
  action$.pipe(filter(isActionOf(loadExampleAsync.request)), ignoreElements());

export const createExamplesEpic: RootEpic = (action$, _state$, _services) =>
  action$.pipe(
    filter(isActionOf(createExampleAsync.request)),
    ignoreElements()
  );

export const updateExamplesEpic: RootEpic = (action$, _state$, _services) =>
  action$.pipe(
    filter(isActionOf(updateExampleAsync.request)),
    ignoreElements()
  );

export const deleteExamplesEpic: RootEpic = (action$, _state$, _services) =>
  action$.pipe(
    filter(isActionOf(deleteExampleAsync.request)),
    ignoreElements()
  );
