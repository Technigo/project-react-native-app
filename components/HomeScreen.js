import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: black;
  flex: 1;
  align-items: center;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 300px;
`;

const WelcomeText = styled.Text`
  font-size: 50px;
  font-weight: 500;
  color: white;
  position: absolute;
  top: 100;
`;

const SubText = styled.Text`
  font-size: 20px;
  color: white;
  position: absolute;
  top: 230;
`;

const FlexWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const ArtButton = styled.TouchableOpacity`
  background-color: pink;
  padding: 8px;
  border-radius: 3px;
  padding: 3px;
  margin: 5px;
  width: 45%;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
`;

const SmallImage = styled.Image`
  width: 100%;
  height: 150px;
`;

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <HeaderImage source={require("../assets/rsz_1kimono.jpg")} />
      <WelcomeText>Discover masterpieces</WelcomeText>
      <SubText>from Rijks Museum Netherlands</SubText>
      <FlexWrapper>
        <ArtButton onPress={() => navigate("List")}>
          <SmallImage source={require("../assets/flower.jpg")} />
          <ButtonText>Explore Paintings</ButtonText>
        </ArtButton>
        <ArtButton onPress={() => navigate("Rembrandt")}>
          <SmallImage source={require("../assets/Rembrandt.jpg")} />
          <ButtonText>Rembrandt van Rijn</ButtonText>
        </ArtButton>
        <ArtButton onPress={() => navigate("Vermeer")}>
          <SmallImage source={require("../assets/vermeer.jpg")} />
          <ButtonText>Johannes Vermeer</ButtonText>
        </ArtButton>
      </FlexWrapper>
    </Container>
  );
};

export default HomeScreen;
