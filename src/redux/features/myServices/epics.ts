import { RootEpic } from "MyTypes";
import { from, of } from "rxjs";
import { filter, switchMap, map, catchError, tap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";

import { initAsync, loadAsync, refreshAsync } from "./actions";

export const initEpic: RootEpic = (action$, _state$, { api: { myServices } }) =>
  action$.pipe(
    filter(isActionOf(initAsync.request)),
    switchMap(() =>
      from(myServices.init()).pipe(
        map(initAsync.success),
        catchError(message => of(initAsync.failure(message)))
      )
    )
  );

export const loadEpic: RootEpic = (action$, _state$, { api: { myServices } }) =>
  action$.pipe(
    filter(isActionOf(loadAsync.request)),
    switchMap(action =>
      from(myServices.load(action.payload.page)).pipe(
        map(loadAsync.success),
        catchError(message => of(loadAsync.failure(message)))
      )
    )
  );

export const refreshEpic: RootEpic = (
  action$,
  _state$,
  { api: { myServices } }
) =>
  action$.pipe(
    filter(isActionOf(refreshAsync.request)),
    switchMap(action =>
      from(myServices.load(1)).pipe(
        map(refreshAsync.success),
        catchError(message => of(refreshAsync.failure(message)))
      )
    )
  );
