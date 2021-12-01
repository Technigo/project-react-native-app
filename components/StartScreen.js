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
      <Text>
        {" "}
        Watch a movie, do something random, read a poem or get enlightened by
        Ka*ye?{" "}
      </Text>

      <APIButton onPress={() => navigation.navigate("Movie")}>
        <Text>random movie</Text>
      </APIButton>
      <APIButton onPress={() => navigation.navigate("Activity")}>
        <Text>something else</Text>
      </APIButton>
      <APIButton onPress={() => navigation.navigate("Poem")}>
        <Text>read a poem</Text>
      </APIButton>
      <APIButton onPress={() => navigation.navigate("Ka*ye")}>
        <Text>wisdom from Ka*ye</Text>
      </APIButton>
    </View>
  );
};

export default StartScreen;
