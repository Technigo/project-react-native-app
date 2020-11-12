import React, { useEffect } from 'react';
import styled from 'styled-components/native';

import backgroundImage from '../assets/KanyeStanding.jpg';

const StartContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: powderblue;
`;

const StartText = styled.Text`
  font-size: 30px;
  color: white;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  border: white 2px solid;
`;

const ContainerButton = styled.Button`
  background: red;
  color: black;
`;

const StartPage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
});

const navigateToQuotes = () => {
  navigation.navigate('Quotes', { name: 'Jane' });
};

return (
  <StartContainer source={backgroundImage}>
    <StartText>Are you ready for some Kanye wisdom?{"\n"}</StartText>
    <ButtonContainer>
      <ContainerButton title="Tap me!" onPress={navigateToQuotes}></ContainerButton>
    </ButtonContainer>
  </StartContainer> 
)
};

export default StartPage; 
