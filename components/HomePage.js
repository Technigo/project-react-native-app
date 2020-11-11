import React, { useState, useEffect } from 'react';
//import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import BridgeBackground from '../assets/bridge-background.jpg';

const Container = styled.View`
flex = 1;
background-color = burgundy;
justify-content: center;
align-items: center;
`;

const Title = styled.Text`
  font-size: 50px;
  color: gold;
`;

const HomeContainer = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
`;

const Button = styled.TouchableOpacity`
  padding: 10px;
`;

const HomePage = ({ navigation }) => {
  //to remove header at top
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <HomeContainer source={BridgeBackground}>
      <Button onPress={() => navigation.navigate('Sorting Hat', {})}>
        <Title>Put on the sorting hat!</Title>
      </Button>
    </HomeContainer>
  );
};

export default HomePage;
