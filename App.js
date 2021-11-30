import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components/native";

import ButtonAPI from "./components/ButtonAPI";
import ShakeAPI from "./components/ShakeAPI";
import ShakeMovie from "./components/ShakeMovie";
import StartScreen from "./components/StartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Movie" component={ShakeMovie} />
        <Stack.Screen name="Activity" component={ShakeAPI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

{
  /* <Container>
<ShakeMovie />
</Container> */
}
