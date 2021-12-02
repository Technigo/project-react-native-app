import React from "react";
import {
  Button,
  Text,
  Pressable,
  View,
  TouchableHighlight,
  ImageBackground,
  Image,
  Linking,
} from "react-native";
import styled from "styled-components/native";

// const APIButton = styled.TouchableHighlight`
//   width: 50%;
//   background-color: pink;
// `;

const Container = styled.View`
  display: grid;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const GridBox = styled.View``;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;
const APIButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding-vertical: 12px;
  padding-horizontal: 32px;
  border-radius: 4px;
  elevation: 3px;
  background-color: pink;
  width: 250px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: white;
  text-transform: uppercase;
`;

const RoundImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const StartScreen = ({ navigation }) => {
  return (
    <Container>
      <GridBox>
        <Title> Bored? </Title>
        <RoundImage source={require("../assets/39_generated.jpg")} />
        <Text>
          {" "}
          Watch a movie, read a poem, do something random or get enlightened by
          Ka*ye?{" "}
        </Text>
      </GridBox>
      <GridBox>
        <APIButton onPress={() => navigation.navigate("Movie")}>
          <ButtonText>random movie</ButtonText>
        </APIButton>
        <APIButton onPress={() => navigation.navigate("Activity")}>
          <ButtonText>something else</ButtonText>
        </APIButton>
        <APIButton onPress={() => navigation.navigate("Poem")}>
          <ButtonText>read a poem</ButtonText>
        </APIButton>
        <APIButton onPress={() => navigation.navigate("Ka*ye")}>
          <ButtonText>wisdom from Ka*ye</ButtonText>
        </APIButton>
        <Text
          onPress={() =>
            Linking.openURL("https://www.vecteezy.com/free-vector/bored-girl")
          }
        >
          Bored Girl Vectors by Vecteezy
        </Text>
      </GridBox>
    </Container>
  );
};

export default StartScreen;
