import React from "react";
import styled from "styled-components/native";
import * as Font from "expo-font";
import ShakeApi from "./components/ShakeApi";
import { View, Text } from "react-native";
import { MainContainer, Container, Ball, ViewPort } from "./components/StyledComponents";

import { BallSvg } from "./components/Ball";

const Info = styled.View`
  z-index: 100;
  position: absolute;
  width: 100px;
  flex: 1;
  top: 100px;
`;

const InfoText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: rosybrown;
`;

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      // Load a font from a static resource
      LondrinaSolidBlack: require("./assets/fonts/LondrinaSolid-Black.ttf"),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      "LondrinaSolid-Regular": {
        uri: require("./assets/fonts/LondrinaSolid-Regular.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    // Use the font with the fontFamily property after loading
    if (this.state.fontsLoaded) {
      return (
        <MainContainer>
          <Info>
            <InfoText>Shake your phone to play</InfoText>
          </Info>
          <Container>
            <BallSvg style={{ position: "absolute", shadowOpacity: 0.75, shadowRadius: 4, shadowColor: "grey", shadowOffset: { height: 7, width: 20 } }} />
            <Ball>
              <ViewPort>
                <ShakeApi />
              </ViewPort>
            </Ball>
          </Container>
        </MainContainer>
      );
    } else {
      return null;
    }
  }
}
