import React from 'react'
import styled from 'styled-components/native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

const Container = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 27px;
  color: #fff3e2;
  text-align: center;
  margin: 5px;
`

  const HatImage = styled.Image`
  width: 250px;
  height: 200px;
  margin: 50px 0;
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
      <Title> It is time for the sorting ceremony</Title>
      <Title> Shake me to find out which house you belong to </Title>
      <HatImage style={styled.Img} source={require('../assets/sortinghat.png')} />
    </Container>
  )
  }
}