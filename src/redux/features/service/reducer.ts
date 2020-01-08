import { ServiceState } from "@typings/Service/state";
import {} from "@typings/Service/constants";
import { RootActionTypes } from "@typings/MyRedux";

const initialState: ServiceState = {
  topics: [
    {
      title: "Boarding",
      icon: {
        color: "#eb6d3c",
        library: "Feather",
        name: "briefcase"
      }
    },
    {
      title: "House Sitting",
      icon: {
        color: "#2280d0",
        library: "Feather",
        name: "home"
      }
    },
    {
      title: "Walking",
      icon: {
        color: "#38c499",
        library: "Foundation",
        name: "foot"
      }
    },
    {
      title: "Day Care",
      icon: {
        color: "#bf5c9d",
        library: "Entypo",
        name: "light-up"
      }
    },
    {
      title: "Training",
      icon: {
        color: "#9cd04b",
        library: "FontAwesome",
        name: "graduation-cap"
      }
    },
    {
      title: "Volunteer",
      icon: {
        color: "#39b07c",
        library: "Feather",
        name: "user-plus"
      }
    }
  ],
  myServices: []
};

export default (
  state = initialState,
  action: RootActionTypes
): ServiceState => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
