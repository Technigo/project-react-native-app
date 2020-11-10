import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Text, View, Image } from 'react-native'

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
  top:200px;
  color:#352727;
`

// const Txt = styled.Text`
// font-size:20;
// position:absolute;
// `

export default function App() {
  return (
    <Container>
      <View>
        <Container>
          <Img source={require('./assets/background.jpg')} />
          <Title>Cozy Fall reads</Title>
        </Container>
      </View>
    </Container>
  )
}

