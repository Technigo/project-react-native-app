import React from "react";
import styled from "styled-components/native";

const TopHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: black;
`;

const TitleText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  font-family: "Trebuchet MS";
  color: #ff1e56;
`;

const Button = styled.TouchableOpacity`
  padding: 2px;
`;

const Dice = styled.Image`
  width: 55px;
  height: 55px;
`;

export const Header = ({ onPress }) => {
  return (
    <TopHeader>
      <TitleText>CRYPTOFUN</TitleText>
      <Button onPress={onPress}>
        <Dice source={require("../assets/dice.png")} />
      </Button>
    </TopHeader>
  )
}