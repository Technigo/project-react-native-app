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
import {
  useFonts,
  Raleway_100Thin,
  Raleway_200ExtraLight,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light_Italic,
  Raleway_400Regular_Italic,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold_Italic,
  Raleway_700Bold_Italic,
  Raleway_800ExtraBold_Italic,
  Raleway_900Black_Italic,
} from "@expo-google-fonts/raleway";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: papayawhip;

  width: 100%;
  height: 100%;
`;

const GridBox = styled.View`
  padding: 10px;
`;

const Title = styled.Text`
  font-family: "Raleway_800ExtraBold";
  font-size: 45px;
  font-weight: 800;
  color: palevioletred;
  align-self: center;
`;

const StartText = styled.Text`
  font-family: "Raleway_400Regular";
  margin: 15px;
  font-size: 16px;
  color: #205b32;
  text-align: center;
`;

const APIButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding-vertical: 12px;
  padding-horizontal: 32px;
  border-radius: 4px;
  elevation: 3;
  background-color: pink;
  width: 250px;
  margin-bottom: 8px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: #205b32;
  text-transform: uppercase;
`;

const RoundImage = styled.Image`
  width: 200px;
  height: 200px;
  border: 1px solid #205b32;
  align-self: center;
  border-radius: 100px;
`;

const CreditText = styled.Text`
color: #205b32;
font-size: 8px
position: absolute;
bottom: 0;
`;

const StartScreen = ({ navigation }) => {
  return (
    <Container>
      <GridBox>
        <Title> Bored? </Title>
        <GridBox>
          <RoundImage source={require("../assets/39_generated.jpg")} />
        </GridBox>
        <GridBox>
          <StartText>
            {" "}
            Watch a movie, read a poem, do something random or get enlightened
            by Ka*ye?{" "}
          </StartText>
        </GridBox>
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
      </GridBox>
      <CreditText
        onPress={() =>
          Linking.openURL("https://www.vecteezy.com/free-vector/bored-girl")
        }
      >
        Bored Girl Vectors by Vecteezy
      </CreditText>
    </Container>
  );
};

export default StartScreen;
