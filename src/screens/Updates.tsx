import StackHeader from "@components/StackHeader";
import {
  UpdatesScreenLinkDispatchProps,
  UpdatesScreenLinkStateProps
} from "@connected/screens/Updates";
import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

export type UpdatesScreenProps = { navigation: NavigationStackProp };

type Props = UpdatesScreenProps &
  UpdatesScreenLinkStateProps &
  UpdatesScreenLinkDispatchProps;

type State = {};

class UpdatesScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#393939" />
        <StackHeader title="My Updates" />
        <View style={styles.container}>
          <Text style={styles.text}>Updates Screen</Text>
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

export default UpdatesScreen;
