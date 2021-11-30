import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100vw;
  background-color: blue;
  justify-content: center;
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <Text>Follow Ron's advice to live the Swanson lifestyle.</Text>
    </Container>
  );
};

export default Footer;
