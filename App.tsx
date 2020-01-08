import React from "react";
import { Platform, StatusBar, View, Image } from "react-native";
import { AppLoading, SplashScreen } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation";
import makeStore from "./src/redux/store";
import { setCustomText } from "react-native-global-props";

type Props = {};

type State = {
  isSplashReady: boolean;
  isAppReady: boolean;
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isSplashReady: false,
      isAppReady: false
    };
  }

  render() {
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("./assets/images/icon.png")}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    }

    return (
      <Provider store={makeStore(undefined)}>
        {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
        <AppNavigator />
      </Provider>
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require("./assets/images/tesla.gif");
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require("./assets/images/icon.png"),
      require("./assets/images/splash.png")
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    const cacheFonts = Font.loadAsync({
      "AvenirLTStd-Book": require("./assets/fonts/AvenirLTStd-Book.ttf"),
      "AvenirLTStd-Medium": require("./assets/fonts/AvenirLTStd-Medium.ttf"),
      "AvenirLTStd-Roman": require("./assets/fonts/AvenirLTStd-Roman.ttf")
    });

    await Promise.all([...cacheImages, cacheFonts]);
    // Setting default styles for all Text components.
    const customTextProps = {
      style: {
        fontFamily: "AvenirLTStd-Medium"
      }
    };

    setCustomText(customTextProps);

    this.setState({ isAppReady: true });
  };
}

export default App;
