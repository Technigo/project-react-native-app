import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const TitleContainer = styled.View`
  width: 100%;
  height: ${(windowWidth * 55) / 320}px;
  justify-content: center;
  margin-top: ${(windowWidth * 5) / 320}px;
`;

const TitleText = styled.Text`
  font-size: ${(windowWidth * 18) / 320}px;
  color: #fff;
  text-align: center;
`;

export const ListHeaderTitle = ({ title }) => {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
    </TitleContainer>
  );
};
