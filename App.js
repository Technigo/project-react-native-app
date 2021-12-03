import React from "react";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Facts } from "./components/Facts";
import { Contact } from "./components/Contact";

const Drawer = createDrawerNavigator();

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Facts">
        <Drawer.Screen name="Home" component={Facts} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
