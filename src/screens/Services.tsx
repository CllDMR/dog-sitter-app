import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  Text,
  Button,
  ActivityIndicator
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationStackProp } from "react-navigation-stack";
import { StackHeader } from "@components/StackHeader";
import { ServiceTopics } from "@connected/components/services/ServiceTopics";
import { ServicesHeader } from "@components/services/ServicesHeader";
import { MyService } from "MyModels";
import ListComponent from "@connected/components/services/ListComponent";
import {
  ServicesScreenLinkStateProps,
  ServicesScreenLinkDispatchProps
} from "@connected/screens/Services";

export type ServicesScreenProps = { navigation: NavigationStackProp };

type Props = ServicesScreenProps &
  ServicesScreenLinkStateProps &
  ServicesScreenLinkDispatchProps;

type State = {};

class ServicesScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      navigation,
      isRefreshing,
      myServices,
      refreshMyServices
    } = this.props;
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
        <StatusBar barStyle="dark-content" />
        <FlatList
          ListHeaderComponent={
            <>
              <StackHeader title="What's New" />
              <ServiceTopics />
              <ServicesHeader
                onPressViewAll={() => navigation.navigate("MyServices")}
              />
            </>
          }
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {isRefreshing ? (
                <ActivityIndicator size="large" />
              ) : (
                <>
                  <Text>Nothing to show.</Text>
                  <Button
                    title="Press for Refresh"
                    onPress={() => refreshMyServices()}
                  />
                </>
              )}
            </View>
          }
          contentContainerStyle={styles.container}
          data={myServices}
          keyExtractor={(item: MyService) => item.id.toString()}
          renderItem={elemData => <ListComponent {...elemData} />}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20
  }
});

export default ServicesScreen;
