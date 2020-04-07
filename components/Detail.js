import React from 'react'
import styled from 'styled-components/native'
import { ImageStore } from 'react-native'

const Container = styled.View`
flex: 1;
background-color: orange;
justifyContent: space-between;
paddingHorizontal: 20;
paddingVertical: 20;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

export const Detail =  () => {
 
  
  return (
    <Container>
      <Title>{Images.explanation}</Title>
    
    </Container>
  )
}