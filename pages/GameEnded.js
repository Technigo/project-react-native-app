import 'react-native-gesture-handler';
import * as React from 'react';
import styled from 'styled-components/native';

export const GameEnded = ({won, navigation}) => {
  return (
    <Background>
      <TitleText>{won ? 'Good Work!' : 'Oh oh!'}</TitleText>
      <SecondText>{won ? 'You helped Ducky find his way home 🎉' : 'Ducky was captured by a fox 😢\nTry again!'}</SecondText>
      <RestartButton onPress={() => navigation.navigate('Start')}>
        <ButtonText>Play again</ButtonText>
      </RestartButton>
    </Background>
  )
}

const Background = styled.View`
  background-color: #B5FFFC;
  height: 100%;
`;

const TitleText = styled.Text`
  color: #f9aac2;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
`;

const SecondText = styled.Text`
  color: #f9aac2;
  font-size: 50px;
  text-align: center;
  margin: 20px 15px 20px 15px;
`;

const RestartButton = styled.TouchableOpacity`
  background-color: #f9aac2;
  width: auto;
  height: auto;
  border-radius: 100px;
  margin: 20px 75px;
`;

const ButtonText = styled.Text`
  color: #FFDEE9;
  font-size: 40px;
  padding: 10px 20px;
  text-align: center;
`;