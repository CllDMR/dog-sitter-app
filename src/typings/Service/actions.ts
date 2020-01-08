import {
  Service_Topic_GET_ALL_START,
  Service_Topic_GET_ALL_DONE,
  Service_Topic_GET_ALL_ERROR,
  Service_Topic_GET_ALL_CANCEL,
  Service_Feed_GET_ALL_START
} from "./constants";

export type ServiceActions =
  | TopicGetAllAction_START
  | TopicGetAllAction_DONE
  | TopicGetAllAction_ERROR
  | TopicGetAllAction_CANCEL
  | FeedGetAllAction;

export type TopicGetAllAction_START = () => {
  type: typeof Service_Topic_GET_ALL_START;
};
export type TopicGetAllAction_DONE = () => {
  type: typeof Service_Topic_GET_ALL_DONE;
};
export type TopicGetAllAction_ERROR = () => {
  type: typeof Service_Topic_GET_ALL_ERROR;
};
export type TopicGetAllAction_CANCEL = () => {
  type: typeof Service_Topic_GET_ALL_CANCEL;
};

export type FeedGetAllAction = () => {
  type: typeof Service_Feed_GET_ALL_START;
};
