import React from 'react'
import styled from 'styled-components/native'

import { MyCustomButton } from './MyCustomButton'
import { Header } from './Header'

const image = { uri: "https://images.unsplash.com/photo-1516139008210-96e45dccd83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" }

const Background = styled.ImageBackground `
  flex: 1;
  resizeMode: cover;
  align-items:center;
  flex-direction: row;
  justify-content: space-around;
`

export const Home = ({navigation}) => {

  const randomCatButtonHandler = () => {
    navigation.navigate('RandomCats')

  }

  const catInfoButtonHandler = () => {
    navigation.navigate('CatInfo')

  }

  return (
    <>
      <Header text= "CATZ!"/>
      <Background source={image}>
        <MyCustomButton text='Random kitty 🐾' onPress={randomCatButtonHandler} />
        <MyCustomButton text='Kitty info 🐾' onPress={catInfoButtonHandler} />
      </Background>
    </>
  )
}

