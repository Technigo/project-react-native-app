import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #99a799;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.Text`
  color: #fef5ed;
`;

const Footer = () => {
  return (
    <Container>
      <FooterText>
        Follow Ron's advice to live the full Swanson lifestyle.
      </FooterText>
    </Container>
  );
};

export default Footer;
