import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

import { Image } from 'react-native';
import logo from '../assets/got.png'
// import { Lottie } from './Lottie'

// STYLE:
const Container = styled.View`
  flex: 1;
  background-color: honeydew;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 18px;
  color: palevioletred;
  padding: 2px;
`
const InterTitle = styled.Text`
  font-size: 24px;
  font-family: 'Inter-Black';
  color: whitesmoke;
  margin: 5px;
  padding: 6px; 
  background-color: palevioletred;
  border: 0px solid black;
  border-radius: 10px;
`
const RoundedImageWrapper = styled.View`
  width: 300px;
  height: 80px;
  margin-top: 20px;
`

const RoundedImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
  border-bottom-left-radius: 27px;
  border-bottom-right-radius: 27px;
  overflow: hidden;
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
         <Image source={logo} style={{ width: 330, height: 170 }} /> 

        <InterTitle>Houses</InterTitle>
  
        {houses.map((house) => (
          <TouchableOpacity
          key={house.name}
          onPress={() => navigation.navigate('Detail', { house })} 
          >
            <Title>{house.name}, {house.region}</Title>
          </TouchableOpacity>
        ))}
 
        <RoundedImageWrapper>
          <RoundedImage
            source={{
              uri: 'https://media.giphy.com/media/3o72FieLG07hheBu0M/giphy.gif',
            }}
          />
        </RoundedImageWrapper>
      </Container>
    );
  } 
};


