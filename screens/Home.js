import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { Touchable } from '../components/Touchable'

const HomeContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Home = ({ navigation }) => {
  return (
    <HomeContainer>
      <Touchable
        btnText="Hejhej"
        navigation={navigation}
      />
      <Touchable 
        btnText="Home"
        navigation={navigation}
      />
    </HomeContainer>
  )
}
export default Home
