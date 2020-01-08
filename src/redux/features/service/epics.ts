import { ofType, Epic } from "redux-observable";
import { delay, tap, mapTo } from "rxjs/operators";
import {
  Service_Topic_GET_ALL_START,
  Service_Topic_GET_ALL_DONE
} from "@typings/Service/constants";
import { RootActionTypes, RootState } from "@typings/MyRedux";

export const getEpic: Epic<
  RootActionTypes,
  RootActionTypes,
  RootState
> = action$ =>
  action$.pipe(
    ofType(Service_Topic_GET_ALL_START),
    delay(1000),
    mapTo({ type: Service_Topic_GET_ALL_DONE }),
    tap(() => console.log("asdsda"))
  );
