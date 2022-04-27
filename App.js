import React from "react";
import styled from "styled-components/native";
import SensorComponent from "./components/SensorComponent";
import { ImageBackground } from "react-native";

// import Header from "./components/Header";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require("/assets/background.avif")}
      >
        <SensorComponent />
      </ImageBackground>
      {/* <Header /> */}
    </Container>
  );
};

export default App;
