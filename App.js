import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components/native";

import ShakeAPI from "./components/ShakeActivity";
import ShakeMovie from "./components/ShakeMovie";
import ShakePoem from "./components/ShakePoem";
import ShakeKanye from "./components/ShakeKanye";
import StartScreen from "./components/StartScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StartScreen} />
        <Drawer.Screen name="Movie" component={ShakeMovie} />
        <Drawer.Screen name="Activity" component={ShakeAPI} />
        <Drawer.Screen name="Poem" component={ShakePoem} />
        <Drawer.Screen name="Ka*ye" component={ShakeKanye} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

{
  /* <Container>
<ShakeMovie />
</Container> */
}

// Stack
{
  /* <NavigationContainer>
<Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Home" component={StartScreen} />
  <Stack.Screen name="Movie" component={ShakeMovie} />
  <Stack.Screen name="Activity" component={ShakeAPI} />
  <Stack.Screen name="Poem" component={ShakePoem} />
  <Stack.Screen name="Ka*ye" component={ShakeKanye} />
</Stack.Navigator>
</NavigationContainer> */
}
