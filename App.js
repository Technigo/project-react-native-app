import React, { useState } from "react";
import styled from "styled-components/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import ButtonApi from "./components/ButtonApi";
import ShakeApi from "./components/ShakeApi";
import Game from "./components/Game";
import MapApi from "./components/MapApi";

const Container = styled.View`
  flex: 1;
  background-color: pink;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ButtonApi} />
        <Drawer.Screen name="Shake" component={ShakeApi} />
        <Drawer.Screen name="Map" component={MapApi} />
        <Drawer.Screen name="Game" component={Game} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
