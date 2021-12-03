import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import MovieQuote from "./components/MovieQuote";
import ProgrammerQuote from "./components/ProgrammerQuote";
import StartPage from "./components/StartPage";

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StartPage} />
        <Drawer.Screen name="Movie" component={MovieQuote} />
        <Drawer.Screen name="Programmer" component={ProgrammerQuote} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
