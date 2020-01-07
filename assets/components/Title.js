import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Title = props => <TitleText>{props.children}</TitleText>;

export default Title;

const TitleText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
