import React, { useState } from "react";
import styled from "styled-components/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Start from "./components/Start";
import ShakeApi from "./components/ShakeApi";
import ChristmasTree from "./components/ChristmasTree";

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
        <Drawer.Screen name="Home" component={Start} />
        <Drawer.Screen name="Shake" component={ShakeApi} />
        <Drawer.Screen name="ChristmasTree" component={ChristmasTree} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
