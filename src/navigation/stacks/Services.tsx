import { createStackNavigator } from "react-navigation-stack";

import ConnectedServicesScreen from "@connected/screens/Services";

export default createStackNavigator(
  {
    Services: ConnectedServicesScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
