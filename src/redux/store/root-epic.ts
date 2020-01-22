import { combineEpics } from "redux-observable";

import * as exampleEpics from "../features/example/epics";
import * as topicEpics from "../features/topic/epics";
import * as myServiceEpics from "../features/myServices/epics";
import * as imageCacheEpics from "../features/imageCache/epics";

export default combineEpics(
  ...Object.values(exampleEpics),
  ...Object.values(topicEpics),
  ...Object.values(myServiceEpics),
  ...Object.values(imageCacheEpics)
);
