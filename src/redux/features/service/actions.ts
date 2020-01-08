import {
  TopicGetAllAction_START,
  TopicGetAllAction_DONE,
  TopicGetAllAction_ERROR,
  TopicGetAllAction_CANCEL,
  FeedGetAllAction
} from "@typings/Service/actions";

import {
  Service_Topic_GET_ALL_START,
  Service_Topic_GET_ALL_DONE,
  Service_Topic_GET_ALL_ERROR,
  Service_Topic_GET_ALL_CANCEL,
  Service_Feed_GET_ALL_START
} from "@typings/Service/constants";

export const topicGetAll_START: TopicGetAllAction_START = () => ({
  type: Service_Topic_GET_ALL_START
});
export const topicGetAll_DONE: TopicGetAllAction_DONE = () => ({
  type: Service_Topic_GET_ALL_DONE
});
export const topicGetAll_ERROR: TopicGetAllAction_ERROR = () => ({
  type: Service_Topic_GET_ALL_ERROR
});
export const topicGetAll_CANCEL: TopicGetAllAction_CANCEL = () => ({
  type: Service_Topic_GET_ALL_CANCEL
});

export const feedGetAll: FeedGetAllAction = () => ({
  type: Service_Feed_GET_ALL_START
});

export default {
  topicGetAll_START,
  topicGetAll_DONE,
  topicGetAll_ERROR,
  topicGetAll_CANCEL,
  feedGetAll
};
