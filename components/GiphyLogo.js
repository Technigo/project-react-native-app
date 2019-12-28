import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

export const GiphyLogo = () => {
  return (
    <Logo
      style={{ resizeMode: "contain" }}
      source={require("../assets/PoweredBy_200px-Black_HorizLogo.png")}
    />
  );
};

const Logo = styled.Image`
  position: absolute;
  bottom: 20px;
  left: 35%;
  width: 30%;
  height: 5%;
`;
