import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import styled from 'styled-components/native'

const Img = styled.Image`
  width: 450px;
  height: 1000px;
`;

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  backgroundColor: #f8f7f7;
  position:absolute;
  padding:20px;
  text-align:center;
  color:#352727;
`
const TextText = styled.Text`
  font-size: 24px;
  position:absolute;
  color:#352727;
  bottom:300px;
  text-align:center;

`


export default function App() {
  return (
    <Container>
      <View>
        <Container>
          <Img source={require('./assets/background.jpg')} />
          <Title>Cozy Fall reads</Title>
          <TextText>Find out some of the coziest fall reads</TextText>
        </Container>
      </View>
    </Container>
  )
}

