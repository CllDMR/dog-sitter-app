import * as FileSystem from "expo-file-system";
import { RootEpic } from "MyTypes";
import { from, iif, of } from "rxjs";
import {
  filter,
  ignoreElements,
  map,
  mergeMap,
  switchMap,
  catchError
} from "rxjs/operators";
import { isActionOf, PayloadAction } from "typesafe-actions";
import { download, fetch, init, success, failure } from "./actions";

const folder = `${FileSystem.cacheDirectory}expo-cache-example`;

const getLoading = (state: any) => state.imageCache.loading;

export const initEpic: RootEpic = (action$, _state$, _services) =>
  action$.pipe(
    filter(isActionOf(init)),
    mergeMap(() =>
      from(FileSystem.getInfoAsync(folder)).pipe(
        filter(folderInfo => !folderInfo.exists),
        switchMap(() => from(FileSystem.makeDirectoryAsync(folder)))
      )
    ),
    ignoreElements()
  );

export const fetchEpic: RootEpic = (action$, state$, _services) => {
  const actionPipe$ = action$.pipe(filter(isActionOf(fetch)));

  /* #region p = FileSystem.getInfoAsync Promise */
  const p = (
    action: PayloadAction<
      "IMAGE_CACHE_FETCH",
      {
        uri: string;
        filename: string;
      }
    >
  ) => FileSystem.getInfoAsync(`${folder}/${action.payload.filename}`);
  /* #endregion */

  return actionPipe$.pipe(
    filter(({ payload }) => !getLoading(state$.value).includes(payload.uri)),
    mergeMap(action =>
      from(p(action)).pipe(map(localFile => ({ localFile, action })))
    ),
    mergeMap(({ action, localFile }) =>
      iif(
        () => localFile.exists,
        of(success({ uri: action.payload.uri, local: localFile.uri })),
        of(
          download({
            uri: action.payload.uri,
            filename: action.payload.filename
          })
        )
      )
    )
  );
};

export const downloadEpic: RootEpic = (action$, _state$, _services) => {
  const actionPipe$ = action$.pipe(filter(isActionOf(download)));

  /* #region p = FileSystem.downloadAsync Promise */
  const p = (
    action: PayloadAction<
      "IMAGE_CACHE_DOWNLOAD",
      {
        uri: string;
        filename: string;
      }
    >
  ) =>
    FileSystem.downloadAsync(
      action.payload.uri,
      `${folder}/${action.payload.filename}`
    );
  /* #endregion */ return actionPipe$.pipe(
    mergeMap(action =>
      from(p(action)).pipe(
        map(downloaded =>
          success({ uri: action.payload.uri, local: downloaded.uri })
        ),
        catchError(err => of(failure({ uri: action.payload.uri })))
        // retryWhen(errors => errors.pipe(delayWhen(() => timer(2000))))
      )
    )
  );
};
