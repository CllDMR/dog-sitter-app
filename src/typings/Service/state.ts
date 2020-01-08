type DefaultIconType = {
  name: string;
  library: string;
  color: string;
};

export type TopicType = {
  title: string;
  icon: DefaultIconType;
};

export type MyServiceType = {};

export type ServiceState = { topics: TopicType[]; myServices: MyServiceType[] };
