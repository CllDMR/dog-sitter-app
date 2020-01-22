import ListComponent from "@connected/components/services/ListComponent";
import {
  MyServicesScreenLinkDispatchProps,
  MyServicesScreenLinkStateProps
} from "@connected/screens/MyServices";
import { LinearGradient } from "expo-linear-gradient";
import { MyService } from "MyModels";
import React, { Component } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

export type MyServicesScreenProps = { navigation: NavigationStackProp };

type Props = MyServicesScreenProps &
  MyServicesScreenLinkStateProps &
  MyServicesScreenLinkDispatchProps;

type State = {
  page: number;
};

class MyServicesScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      page: 2
    };
  }

  render() {
    const {
      isLoading,
      isRefreshing,
      myServices,
      refreshMyServices,
      loadMyServices
    } = this.props;
    const { page } = this.state;
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
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => {
                this.setState({ page: 2 });
                refreshMyServices();
              }}
            />
          }
          onEndReachedThreshold={1.0}
          onEndReached={() => {
            if (!isLoading) {
              this.setState({ page: page + 1 });
              loadMyServices({ page });
            }
          }}
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

export default MyServicesScreen;
