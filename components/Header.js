import React from "react";
import styled from 'styled-components/native';

const TopHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    background-color: #ffac41;
`;

const TitleText = styled.Text`
    color: #ff1e56;
    font-size: 26px;
    font-weight: 800;
`;

const Button = styled.TouchableOpacity`
    padding: 0px;
    
`;

const Dice = styled.Image`
    width: 32px;
    height: 32px;
`;



export const Header = ({ onPress }) => {
  return (
      <>
    <TopHeader>
      <TitleText>CoinMe</TitleText>
      <Button onPress={onPress}><Dice source={require('../assets/dice4.png')} /></Button>
    </TopHeader>
    </>
  )
}