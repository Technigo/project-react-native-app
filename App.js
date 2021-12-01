import React, { useState } from "react";
import styled from "styled-components/native";
import StartPage from "./components/StartPage";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, Text, Image } from "react-native";
import Judith from "./components/Judith";
import Frans from "./components/Frans";
import Johannes from "./components/Johannes";
import Rembrandt from "./components/Rembrandt";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const BigBox = styled.View`
//   display: flex;
//   background-color: papayawhip;
// `;

const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: papayawhip;
  /* width: 300px; */
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const ArtistPic = styled.Image`
  width: 150px;
  height: 150px;
`;

const ImageBox = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90vw;
`;

const ImageBoxSmall = styled.View`
  display: flex;
  flex-direction: column;
`;

// style={{ flex: 1, alignItems: "center", justifyContent: "center" }}

function StartScreen({ navigation }) {
  return (
    <Container>
      <ImageBox>
        <ImageBoxSmall>
          <ArtistPic source={require("./assets/Judith.jpeg")} />
          <Button
            title="Go to Judith"
            onPress={() => navigation.navigate("Judith")}
          />
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("./assets/Frans.png")} />
          <Button
            title="Go to Frans"
            onPress={() => navigation.navigate("Frans")}
          />
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("./assets/Johannes.jpeg")} />
          <Button
            title="Go to Johannes"
            onPress={() => navigation.navigate("Johannes")}
          />
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("./assets/Rembrant.jpeg")} />
          <Button
            title="Go to Rembrandt"
            onPress={() => navigation.navigate("Rembrandt")}
          />
        </ImageBoxSmall>
      </ImageBox>
    </Container>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Container> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={StartScreen} />
        <Stack.Screen name="Judith" component={Judith} />
        <Stack.Screen name="Frans" component={Frans} />
        <Stack.Screen name="Johannes" component={Johannes} />
        <Stack.Screen name="Rembrandt" component={Rembrandt} />
      </Stack.Navigator>
      {/* </Container> */}
    </NavigationContainer>
  );
};

export default App;
