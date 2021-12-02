import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import styled from "styled-components/native";
import Ball from "./components/Ball";
import Birds from "./components/Birds";
import Home from "./components/Home";

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Ball" component={Ball} />
        <Drawer.Screen name="Birds" component={Birds} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
