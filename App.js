import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import styled from "styled-components/native";
import Ball from "./components/Ball";
import Magic from "./components/Magic";
import Home from "./components/Home";
import Grandma from "./components/Grandma";
import Power from "./components/Power";

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Ask Kanye Rest" component={Ball} />
        <Drawer.Screen name="Ask the Magic eight" component={Magic} />
        <Drawer.Screen name="Ask Grandma" component={Grandma} />
        <Drawer.Screen name="Ask the Power ball" component={Power} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
