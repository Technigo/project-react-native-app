import React  from 'react'
import styled from 'styled-components/native'

import { Header } from './Header'

const Background = styled.ImageBackground `
  flex: 1;
  resizeMode: cover;
  align-items: center;
  justify-content: flex-end;
`
const TextContainer =styled.View `
  background-color: rgba(53, 0, 0, 0.3);
  padding: 15px 10px 15px 10px;
  margin-bottom: 30px;
`
const InfoText = styled.Text `
  font-size: 25px;
  text-align: center;
  font-style: italic;
  font-weight: bold;
`
const Text = styled.Text `
  font-size: 18px;
  text-align: center;
  font-style: italic;
  font-weight: bold;
`

const image = { uri: "https://images.unsplash.com/photo-1572005037570-2e0a7f280586?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" }

export const CatInfo = () => {
  
  return (
    <>
      <Header text= "CATZ!"/> 
      <Background source={image}>
      <TextContainer>
        <InfoText>Sorry, all cats need to chill...</InfoText>
        <Text>(cat information coming soon)</Text>
      </TextContainer>
      </Background>
    </>
  )
}