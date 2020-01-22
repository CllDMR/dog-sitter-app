import StackHeader from "@components/StackHeader";
import {
  WalkersScreenLinkDispatchProps,
  WalkersScreenLinkStateProps
} from "@connected/screens/Walkers";
import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

export type WalkersScreenProps = { navigation: NavigationStackProp };

type Props = WalkersScreenProps &
  WalkersScreenLinkStateProps &
  WalkersScreenLinkDispatchProps;

type State = {};

class WalkersScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#393939" />
        <StackHeader title="My Walkers" />
        <View style={styles.container}>
          <Text style={styles.text}>Walkers Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#393939"
  },
  container: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {}
});

export default WalkersScreen;
