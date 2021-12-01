import React from "react";
import styled from "styled-components/native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { AbrilFatface_400Regular } from "@expo-google-fonts/abril-fatface";

import ButtonApi from "./components/ButtonApi";
import ShakeApi from "./components/ShakeApi";
import Header from "./components/Header";

const Container = styled.View`
  flex: 1;
  background-color: #7bdfc3;
  padding: 20px;
  justify-content: center;
`;

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_600SemiBold,
    AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <Header />
        <ButtonApi />
      </Container>
    );
  }
};

export default App;
