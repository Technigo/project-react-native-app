import React from "react";
import { Button, Text, View, TouchableHighlight } from "react-native";
import styled from "styled-components/native";

const APIButton = styled.TouchableHighlight`
  width: 50%;
  background-color: pink;
`;

const StartScreen = ({ navigation }) => {
  return (
    <View>
      <Text> Bored? </Text>
      <Text> Watch a random movie or do something else? </Text>

      <APIButton onPress={() => navigation.navigate("Movie")}>
        <Text>random movie</Text>
      </APIButton>
      <APIButton
        title="do something else"
        onPress={() => navigation.navigate("Activity")}
      >
        <Text>something else</Text>
      </APIButton>
    </View>
  );
};

export default StartScreen;
