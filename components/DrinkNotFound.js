import React from "react";
import { View } from "react-native";

import styled from "styled-components/native";

const DrinkNotFound = () => {
  return (
    <View>
      <Texts>Drink not found, please search again!</Texts>
    </View>
  );
};

const Texts = styled.Text`
  text-align: center;
`;

export default DrinkNotFound;