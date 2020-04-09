import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Lottie } from './Lottie'

const Container = styled.View`
  background-color: papayawhip;
  flex: 1; 
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  color: palevioletred;
  font-size: 35px;
`
const Text = styled.Text`
  color: white;
  font-size: 30px;
`

const Click = styled.TouchableOpacity`
  background-color: palevioletred;
  padding: 20px;
  border-radius: 70px;
  margin-top: 20px;
`
const Welcome = ({ navigation }) => {
  return (
    <Container>
      <Title>Are you ready to play?</Title>
      <TouchableOpacity>
        <Click onPress={() => navigation.navigate('Tictactoe')}><Text>Press to start!</Text></Click>
      </TouchableOpacity>
    </Container>
  )
}

export default Welcome;