import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import { StepCounter } from "./components/StepCounter";
import { WelcomePage } from "./components/WelcomePage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
`;
const Stack = createNativeStackNavigator();

const App = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowWelcomePage(false), 1000);
  }, []);
  return (
    // <Container>{showWelcomePage ? <WelcomePage /> : <StepCounter />}</Container>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={StepCounter}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
