import { createStackNavigator } from "react-navigation-stack";

import ConnectedServicesScreen from "@connected/screens/Services";
import ConnectedMyServicesScreen from "@connected/screens/MyServices";

export default createStackNavigator(
  {
    Services: ConnectedServicesScreen,
    MyServices: ConnectedMyServicesScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
