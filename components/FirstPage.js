import React from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

const Container = styled.View`
  flex: 1;
  background-color: #c4b6b6 ;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: #000000;
  text-align: center;
  margin: 5px;
`

  const Img = styled.Image`
  width: 100;
  height: 100;
  `

export const Firstpage = () => {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  }) 

  if (!fontsLoaded) {
    return <AppLoading />
  } else {

  return (
    <Container>
      <Title> It is time for sorting </Title>
      <Title> Lets find out which house you belong to </Title>
      <Title> Shake me to find out! </Title>
      <Image style={styled.Img} source={require('../assets/sortinghat.png')} />
    </Container>
  )
  }
}