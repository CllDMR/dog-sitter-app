import { createStackNavigator } from "react-navigation-stack";

import ConnectedUpdatesScreen from "@connected/screens/Updates";

export default createStackNavigator(
  {
    Updates: ConnectedUpdatesScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
