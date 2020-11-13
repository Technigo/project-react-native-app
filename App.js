import React, { useEffect, useState } from "react";
import { Button, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";

import Header from "./Header";
import HomeScreen from "./components/HomeScreen";
import Joke from "./components/Joke";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Joke" component={Joke} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/*<Container>
<TopContainer>
  <TopHeader>{joke.setup}</TopHeader>
</TopContainer>
<BottomContainer>
  <BottomText>
    <Text>{joke.delivery}</Text>
    <Text>{joke.categories}</Text>
  </BottomText>
</BottomContainer>
</Container>

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TopContainer = styled.View`
  flex: 2;
  width: 100%;
  background-color: #222222;
  justify-content: center;
  align-items: center;
`;

const TopHeader = styled.Text`
  font-size: 48px;
  color: #efefef;
`;

const BottomContainer = styled.View`
  flex: 2;
  width: 100%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const BottomText = styled.Text`
  font-size: 32px;
  color: #1f1f1f;
`;

const ClickButton = styled.TouchableOpacity`
  background-color: #f2f2f2;
  border-radius: 10px;
`;
*/
