import React from "react";
import {
  Button,
  Text,
  Pressable,
  View,
  TouchableHighlight,
  ImageBackground,
  Image,
  ActivityIndicator,
  Linking,
} from "react-native";
import styled from "styled-components/native";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_800ExtraBold,
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
  align-self: center;
  border-radius: 100px;
`;

const CreditText = styled.Text`
  color: #205b32;
  font-size: 8px;
  position: absolute;
  bottom: 0;
`;

const Loader = styled.ActivityIndicator`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

const StartScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({ Raleway_800ExtraBold, Raleway_400Regular });

  if (!fontsLoaded) {
    return <Loader size="large" />;
  }

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
