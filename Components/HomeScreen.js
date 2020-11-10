import React from 'react';
import { Text  } from 'react-native'
import styled from 'styled-components/native'


export const HomeScreen = () => {
    return (
        <Container>
            <Title>POWER APP!</Title>
            <InfoText>
                Inspired by the book:"Nice girls don't get the corner office"
                comes this app where you can shuffle through daily challenges that will 
                help improve your carrer!
            </InfoText>
        </Container>    
    )
}

const Container = styled.View`
  padding-top: 12px;
  background-color: papayawhip;
  height:100%;
  text-align:center;
`;

 const Title = styled.Text`
  font-size: 30px;
  color: palevioletred; 
`

const InfoText = styled.Text`
font-size: 18px;
color: black; 
padding-top: 20px;
`