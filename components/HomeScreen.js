import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Title = styled.Text`
  font-size: 50px;
  color: #ff1e56;
  margin-bottom: 30px;
  font-weight: bold;
  font-family: "Trebuchet MS";
`;

const InfoText = styled.Text`
  font-size: 20px;
  color: white;
  margin-bottom: 30px;
  padding: 0 20px;
  text-align: center;
  font-family: "Trebuchet MS";
  line-height: 35px;
`;

const Button = styled.TouchableOpacity`
  background-color: #ffac41;
  padding: 20px;
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: white;
  font-family: "Trebuchet MS";
`;

export const HomeScreen = ({ navigation }) => {   
  return (
    <Container>
      <Title>CRYPTOFUN</Title>
      <InfoText>Here you can keep track of the most popular cryptocurrencys and buy them with fake money. You can also press the dices in the top right corner and get more information on random currencies.</InfoText>
      <Button onPress={() => navigation.navigate("AllCoins")}><ButtonText>START</ButtonText></Button>
    </Container>
  )
}
