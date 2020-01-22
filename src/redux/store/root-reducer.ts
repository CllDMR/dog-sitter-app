import { combineReducers } from "redux";

import exampleReducer from "../features/example/reducer";
import topicReducer from "../features/topic/reducer";
import myServiceReducer from "../features/myServices/reducer";
import imageCacheReducer from "../features/imageCache/reducer";

const rootReducer = combineReducers({
  example: exampleReducer,
  topic: topicReducer,
  myService: myServiceReducer,
  imageCache: imageCacheReducer
});

export default rootReducer;
