import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { Houses } from "./components/Houses";
import { Detail } from "./components/Detail";

const Container = styled.View`
  flex: 1;
  background-color: honeydew;
  justify-content: center;
  align-items: center;
  border: 0px solid palevioletred;
`;
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="House" component={Houses} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
