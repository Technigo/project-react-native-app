import React from 'react'
import { View, Text, } from 'react-native'
import styled from 'styled-components/native'

import { Quote } from './Quote'

const API_KEY = "4c99f5e534msh6d4be567b7ee6c8p148460jsn0d0bdff9bb67"

const Title = styled.Text`
  font.size: 24px;
  color: pink;
`
const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Container>
      <View>
        <Quote />
      </View>
    </Container>

  )
}

export default App
