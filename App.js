import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./components/HomeScreen";
import MoreInfo from "./components/MoreInfo";

export const App = () => {
  return <AppContainer />;
};

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  MoreInfo: {
    screen: MoreInfo,
    navigationOptions: {
      title: "Details",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default App;
