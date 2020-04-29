import React from 'react'
import styled from 'styled-components/native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

const Container = styled.View`
  min-height: 100px;
  flex: 0.1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  font-size: 38px;
  color: rgb(242, 67, 59);
  text-transform: uppercase;
  font-weight: bold;
`

const Image = styled.Image`
  height: 38;
  width: 38;
`

export default function Header(props) {
  let [fontsLoaded] = useFonts({
    'Baloo-Paaji-2': require('../assets/fonts/BalooPaaji2-ExtraBold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <Title style={{ fontFamily: 'Baloo-Paaji-2' }}>p</Title>
        <Image source={require('../assets/tomato.png')} />
        <Title style={{ fontFamily: 'Baloo-Paaji-2' }}>modoro</Title>
      </Container>
    )
  }
}
