import React from "react";
import styled from "styled-components/native";
import { Text, Button, View, Image } from "react-native";

import HomeScreen from "./components/HomeScreen";
import MoreInfo from "./components/MoreInfo";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

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
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

const Container = styled.View`
  flex-direction: ${props => (props.row ? "row" : "column")};
  background-color: #000;
  height: ${props => (props.full ? "100%" : "auto")};
  align-self: center;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 14px;
  color: palevioletred;

  width: 100%;
  margin: 0 auto;

  height: 20;
`;

export default App;
