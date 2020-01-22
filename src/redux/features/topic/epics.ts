import { RootEpic } from "MyTypes";
import { from, of } from "rxjs";
import { filter, switchMap, map, catchError } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";

import { loadTopicsAsync } from "./actions";

export const loadTopicsEpic: RootEpic = (
  action$,
  state$,
  { api: { topics } }
) =>
  action$.pipe(
    filter(isActionOf(loadTopicsAsync.request)),
    switchMap(() =>
      from(topics.loadTopics()).pipe(
        map(loadTopicsAsync.success),
        catchError(message => of(loadTopicsAsync.failure(message)))
      )
    )
  );
