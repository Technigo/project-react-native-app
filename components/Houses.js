import React, { useState, useEffect } from 'react';
import { View, Vibration } from 'react-native';
import styled from 'styled-components/native';
import images from '../assets/images';

const HouseImg = styled.Image`
  width: 260px;
  height: 320px;
`;

const HouseText = styled.Text`
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #f2f0f0;
  text-align: center;
`;

const RestartButton = styled.TouchableOpacity`
  background-color: #393B6A;
  border-radius: 10px;
  padding: 10px;
  margin-top: 60px;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  color: #f2f0f0;
  text-align: center;
`;

export const Houses = ({ onRestart }) => {
  const [house, setHouse] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    fetch('https://www.potterapi.com/v1/sortinghat')
      .then((result) => result.json())
      .then((data) => {
        setHouse(data);
        setImage(data.toLowerCase());
        vibrateDevice();
      });
  }, []);


  const vibrateDevice = () => {
    Vibration.vibrate();
  }

  return (
    <View>
      <HouseText>{house}</HouseText>
      <HouseImg source={images[image]}></HouseImg>
      <RestartButton onPress={onRestart}>
        <ButtonText>Try again?</ButtonText>
      </RestartButton>
    </View>
  );
};
