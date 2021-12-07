import React, { useState } from "react";
import { Button, View } from "react-native";
import styled from "styled-components/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import ButtonApi from "./components/ButtonApi";
import ShakeApi from "./components/ShakeApi";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const Header = styled.View`
  align-items: center;
  padding: 10px;
  justify-content: center;
  margin-bottom: 15px;
  background-color: black;
  color: white;
  margin: 30px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: white;
`;

const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 65px;
`;

const TechnigoImage = styled.Image`
  width: 100%;
  height: 70px;
`;

const TechnigoContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 40px;
`;

const Drawer = createDrawerNavigator();

const App = () => {
  const [currentTab, setCurrentTab] = useState("Button");

  return (
    <>
      <Header>
        <Title>Are you Bored?</Title>
      </Header>

      <ButtonContainer>
        <Button title="Button API" onPress={() => setCurrentTab("Button")} />
        <Button title="Shake API" onPress={() => setCurrentTab("Shake")} />
      </ButtonContainer>

      <TechnigoContainer>
        <TechnigoImage source={require("./assets/favicon.png")} resizeMode="contain" />
      </TechnigoContainer>
      <Container>
        {currentTab === "Button" && <ButtonApi />}
        {currentTab === "Shake" && <ShakeApi />}
      </Container>
    </>
  );
};

export default App;
