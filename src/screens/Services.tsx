import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationStackProp } from "react-navigation-stack";
import { StackHeader } from "@components/StackHeader";
import { ServiceTopics } from "@connected/components/services/ServiceTopics";
import { ServicesHeader } from "@components/services/ServicesHeader";
import { MyServiceList } from "@connected/components/services/MyServiceList";

type Props = {
  navigation: NavigationStackProp;
};

type State = {};

class ServicesScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <LinearGradient
          colors={["rgba(255,255,255,1.0)", "#f5f5f5"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }}
        />

        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <StackHeader title="What's New" />
          <ServiceTopics />
          <ServicesHeader />
          <MyServiceList />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    marginHorizontal: 20
  },
  text: {}
});

export default ServicesScreen;
