import React from "react";
import styled from "styled-components/native";
import StartPage from "./components/StartPage";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Container>
        <StartPage />
      </Container>
    </NavigationContainer>
  );
};

export default App;
