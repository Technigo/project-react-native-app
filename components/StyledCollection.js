import React from "react";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: ${({ active = false }) => (active ? "#4fa9f3" : "#0080e8")};
  padding: 10px 20px;
  align-items: center;
  min-width: 90px;
  margin: 10px;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16;
`;

export const ImageWrap = styled.View`
  width: 100%;
  height: ${({ height }) => (height ? height : "40%")};
  padding: 0 20px;
`;
