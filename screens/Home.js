import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { useFonts } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons/faCat'

import { Container } from '../styles/GlobalStyles'

const ContainerHome = styled(Container)`
  background-color: #e63946;

`

const Title = styled.Text`
	font-size: 70px;
  font-family: 'Sacramento';
	color: white;
  text-align: center;
`

const Home = () => {
  let [fontsLoaded] = useFonts({
    'Sacramento': require('../assets/Sacramento-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ContainerHome>
      <FontAwesomeIcon icon={faCat} size={200} color="#1d3557" />
      <View>
        <Title>Cat</Title>
        <Title>Randomizer</Title>
      </View>
    </ContainerHome>
  )
}

export default Home
