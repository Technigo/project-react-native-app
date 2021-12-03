import React from "react";
import { View, Text } from "react-native";

import styled from "styled-components/native";

const Name = styled.Text`
  text-align: center;
  font-size: 24px;
  margin-top: 15px;
`;

const ContactInfo = styled.View`
  text-align: center;
  align-items: center;
  font-size: 16px;
  margin-top: 20px;
`;

export const Contact = () => {
  return (
    <View>
      <Name>Eddie Lundgren</Name>
      <ContactInfo>
        <Text>+46734484005</Text>
        <Text>eddie.lundgren@hotmail.com</Text>
      </ContactInfo>
    </View>
  );
};
