import React from 'react'
import styled from 'styled-components/native'
import { Text } from "react-native"
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

const Title = styled.Text`
  font-size: 24px;
  color: rgb(242, 67, 59);
  text-transform: lowercase;
  margin-bottom: -10px;
`
const Container = styled.View`
  min-height: auto;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.View`
  min-height: auto;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ShowLength = styled.Text`
  font-size: 24px;
  color: black;
  min-width: 50px;
  color: rgb(242, 67, 59);
  text-align: center;
`

const Button = styled.TouchableOpacity`
  color: black;
`

export default function BreakLength({ breakLength, setBreakLength }) {

  const downPress = () => {
    if (breakLength === 1) {
      return
    } else {
      setBreakLength(breakLength => breakLength - 1)
    }
  }

  const upPress = () => {
    if (breakLength === 60) {
      return
    } else {
      setBreakLength(breakLength => breakLength + 1)
    }
  }

  let [fontsLoaded] = useFonts({
    'Baloo-Paaji-2': require('../assets/fonts/BalooPaaji2-Bold.ttf'),
    'Manrope-Light': require('../assets/fonts/Manrope-Light.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <Title style={{ fontFamily: 'Baloo-Paaji-2' }}>Break Length</Title>
        <ButtonContainer>
          <Button onPress={downPress}>
            <Text style={{ fontFamily: 'Manrope-Light' }}>less</Text>
          </Button>
          <ShowLength style={{ fontFamily: 'Baloo-Paaji-2' }}>{breakLength}</ShowLength>
          <Button onPress={upPress}>
            <Text style={{ fontFamily: 'Manrope-Light' }}>more</Text>
          </Button>
        </ButtonContainer>
      </Container>
    )
  }
}

