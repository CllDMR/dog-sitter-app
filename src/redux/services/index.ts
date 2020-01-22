import * as topics from "./topics-api-client";
import * as myServices from "./myServices-api-client";
import * as logger from "./logger-service";

export default {
  logger,
  api: {
    topics,
    myServices
  }
};
