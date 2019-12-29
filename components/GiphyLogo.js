import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

const GiphyLogo = () => {
  return (
    <Logo
      style={{ resizeMode: "contain" }}
      source={require("../assets/PoweredBy_200px-Black_HorizLogo.png")}
    />
  );
};

const Logo = styled.Image`
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: 100px;
  height: 13px;
  margin-left: -50px;
`;

export default GiphyLogo;
