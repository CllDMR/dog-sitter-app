import { Topic } from "MyModels";

let topics: Topic[] = [
  {
    id: "topic-1",
    title: "Boarding",
    icon: {
      color: "#eb6d3c",
      library: "Feather",
      name: "briefcase"
    }
  },
  {
    id: "topic-2",
    title: "House Sitting",
    icon: {
      color: "#2280d0",
      library: "Feather",
      name: "home"
    }
  },
  {
    id: "topic-3",
    title: "Walking",
    icon: {
      color: "#38c499",
      library: "Foundation",
      name: "foot"
    }
  },
  {
    id: "topic-4",
    title: "Day Care",
    icon: {
      color: "#bf5c9d",
      library: "Entypo",
      name: "light-up"
    }
  },
  {
    id: "topic-5",
    title: "Training",
    icon: {
      color: "#9cd04b",
      library: "FontAwesome",
      name: "graduation-cap"
    }
  },
  {
    id: "topic-6",
    title: "Volunteer",
    icon: {
      color: "#39b07c",
      library: "Feather",
      name: "user-plus"
    }
  }
];

const TIMEOUT = 100;

export function loadTopics(): Promise<Topic[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(topics);
    }, TIMEOUT);
  });
}

export function createTopic(topic: Topic): Promise<Topic[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      topics = topics.concat(topic);
      resolve(topics);
    }, TIMEOUT);
  });
}

export function updateTopic(topic: Topic): Promise<Topic[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      topics = topics.map(i => (i.id === topic.id ? topic : i));
      resolve(topics);
    }, TIMEOUT);
  });
}

export function deleteTopic(topic: Topic): Promise<Topic[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      topics = topics.filter(i => i.id !== topic.id);
      resolve(topics);
    }, TIMEOUT);
  });
}
