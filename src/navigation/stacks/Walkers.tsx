import { createStackNavigator } from "react-navigation-stack";

import ConnectedWalkersScreen from "@connected/screens/Walkers";

export default createStackNavigator(
  {
    Walkers: ConnectedWalkersScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
