import React from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Colors } from "@constants/Theme";

import ServicesStack from "./Services";
import UpdatesStack from "./Updates";
import WalkersStack from "./Walkers";
import PetsStack from "./Pets";

export default createBottomTabNavigator(
  {
    Services: ServicesStack,
    Updates: UpdatesStack,
    Walkers: WalkersStack,
    Pets: PetsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => {
        const { routeName } = navigation.state;
        if (routeName === "Services")
          return (
            <FontAwesome
              name={`feed`}
              size={focused ? 25 : 20}
              color={tintColor}
            />
          );
        else if (routeName === "Updates")
          return (
            <FontAwesome
              name={`bank`}
              size={focused ? 25 : 20}
              color={tintColor}
            />
          );
        else if (routeName === "Walkers")
          return (
            <MaterialIcons
              name={`subscriptions`}
              size={focused ? 25 : 20}
              color={tintColor}
            />
          );
        else if (routeName === "Pets")
          return (
            <MaterialIcons
              name={`subscriptions`}
              size={focused ? 25 : 20}
              color={tintColor}
            />
          );

        return null;
      }
    }),
    tabBarOptions: {
      activeTintColor: Colors.orange,
      inactiveTintColor: Colors.black,
      showLabel: false,
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "white",
      style: {
        borderTopWidth: 0
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: -2
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,
        // elevation: 4
      }
    }
  }
);
