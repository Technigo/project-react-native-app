import React from 'react'
import styled from 'styled-components/native'

import { MyCustomButton } from './MyCustomButton'

const image = { uri: "https://images.unsplash.com/photo-1516139008210-96e45dccd83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" }

const Background = styled.ImageBackground `
  flex: 1;
  resizeMode: cover;
  justify-content: center;
  align-items: center;
  
`
export const Home = ({navigation}) => {

  const pressHandler = () => {
    navigation.navigate('RandomCats')

  }

  const pressInfoHandler = () => {
    navigation.navigate('CatInfo')

  }

  return (
    <Background source={image}>
       <MyCustomButton text='Kitty info 🐾' onPress={pressInfoHandler} />
      <MyCustomButton text='Random kitty 🐾' onPress={pressHandler} />
     
    </Background>
  )
}

