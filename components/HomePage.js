import React, { useState, useEffect } from 'react';
//import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

//import BridgeBackground from '../assets/bridge-background.jpg';
//import CastleBackground from '../assets/spookycastle-01.jpg';
import CastleBackground from '../assets/hogwarts-express.jpg';

const Container = styled.View`
flex = 1;
background-color = burgundy;
justify-content: flex-start;
align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: gold;
`;

const HomeContainer = styled.ImageBackground`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  padding: 20px
  width: 90%;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.7);
  margin: 20px 0 20px 0;
  text-align: center;
`;

const HomePage = ({ navigation }) => {
  const [spells, setSpells] = useState([]);
  //to remove header at top
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <HomeContainer source={CastleBackground}>
      <Button onPress={() => navigation.navigate('Sorting Hat', {})}>
        <Title>Let's get you sorted!</Title>
      </Button>
      <Button onPress={() => navigation.navigate('Spells', {})}>
        <Title>Accio spells!</Title>
      </Button>
    </HomeContainer>
  );
};

export default HomePage;
