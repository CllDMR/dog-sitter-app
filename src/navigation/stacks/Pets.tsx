import { createStackNavigator } from "react-navigation-stack";

import ConnectedPetsScreen from "@connected/screens/Pets";

export default createStackNavigator(
  {
    Pets: ConnectedPetsScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
