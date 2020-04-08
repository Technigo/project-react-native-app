import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import Animation from './Animation'

const Container = styled.View`
  background-color: papayawhip;
  flex: 1; 
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  color: green;
  font-size: 30px;
`

const Click = styled.Text`
  background-color: green;
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 50px;
  margin-top: 20px;
`

const Welcome = ({ navigation }) => {
  return (
    <Container>
      <Animation />
      <Title>Are you ready to play?</Title>
      <TouchableOpacity onPress={() => navigation.navigate('Tictactoe')}>
        <Click>Press to start!</Click>
      </TouchableOpacity>
    </Container>
  )
}

export default Welcome