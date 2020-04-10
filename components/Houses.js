import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

// import { Image } from 'react-native';
// import logo from '../assets/logo.png'

// STYLE:
const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 20px;
  color: palevioletred;
  padding: 2px;
`
const InterTitle = styled.Text`
  font-size: 24px;
  font-family: 'Inter-Black';
  color: palevioletred;
  padding-bottom: 10px;
`
// LOAD CUSTOM FONTS:
export const Houses = () => {
  let [fontLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
  })
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/houses")
      .then((res) => res.json())
      .then((json) => setHouses(json));
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  } else { 
    return (
      <Container>
        <InterTitle>Houses</InterTitle>
  
        {houses.map((house) => (
          <TouchableOpacity
            key={house.name}
            onPress={() => navigation.navigate('Detail', { house })} 
          >
            <Title>{house.name}, in {house.region}</Title>
          </TouchableOpacity>
        ))}
      </Container>
    );
  } 
};


/*
      <Container>
        <InterTitle>Houses:</InterTitle>
        {houses.map((house) => (
          <Title key={house.name}> {house.name}</Title>
        ))}
      </Container>



*/
