import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

const Text = styled.Text`
  font-size: 29px;
  color: #fff;
  padding-top: 40px;
`

const Button = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #1c1e1e;
  margin-top: 20px;
  padding: 5px 25px;
  background-color: #cfb53b;
  border-radius: 15px;
  overflow: hidden;
`

const Container = styled.View`
  flex: 1;
  background-color: #1c1e1e;
  align-items: center;
`
const InputName = styled.TextInput`
  border-width: 1;
  border-color: #fff;
  background-color: #e3e2e8;
  padding: 8px;
  margin: 10px;
  width: 200px;
  color: #000;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`

export const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('')

  const pressHandler = () => {
    navigation.navigate('Magic Ball', {name})
  }

  return (
    <Container>
      <BackgroundImage source={require('../assets/home-image.jpg')}></BackgroundImage>
      <Text>Enter your name:</Text>
      <InputName 
        placeholder='Type here ...'
        onChangeText={(val) => setName(val)}
      />
      <TouchableOpacity onPress={pressHandler}>
        <Button>CONTINUE</Button>
      </TouchableOpacity>
    </Container>
  )
}