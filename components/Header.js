import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export default function Header({ title, titleTwo }) {
  const View = styled.View`
    width: 100%;
    padding: 10px 0;
    background-color: #fdf2d6;
    border-radius: 10px;

    border: 2px solid #ab782c;
    border-radius: 20px;

    shadow-opacity: 1;
    shadow-radius: 0px;
    shadow-color: #6e4d1b;
    shadow-offset: 0px 4px;
  `;

  const Text = styled.Text`
    color: #99541c;
    font-weight: 500;
    font-size: ${(props) => (props.title ? "35px" : "20px")};
    text-align: center;
    margin-top: ${(props) => (props.title ? "30px" : "5px")};
  `;

  return (
    <View>
      <Text title>{title}</Text>
      <Text>{titleTwo}</Text>
    </View>
  );
}
// shadow-opacity: 0.75;
// shadow-radius: 1px;
// shadow-color: orange;
// shadow-offset: 0px 0px;
